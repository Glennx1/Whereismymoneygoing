/**
 * Karnataka Budget Data Extraction Utility
 * 
 * Repeatable extractor for Karnataka Finance Department PDFs and CAG audit tables.
 * Fetches PDF documents, parses table text, extracts demand/expenditure rows,
 * and computes SHA-256 integrity hashes.
 * 
 * Usage:
 *   npx tsx scripts/budget/extract-budget.ts [urlOrPath] [--demand <num>] [--hash-only]
 */

import { execSync } from 'child_process';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
// @ts-ignore
import { PDFParse } from 'pdf-parse';

export interface ExtractedTableData {
  sourceUrl: string;
  sha256: string;
  retrievalDate: string;
  rows: Array<{
    code?: string;
    description: string;
    revenueLakhs?: number;
    capitalLakhs?: number;
    totalLakhs?: number;
    totalCr?: number;
  }>;
}

export async function fetchAndHashBuffer(urlOrPath: string): Promise<{ buffer: Buffer; sha256: string }> {
  let buffer: Buffer;
  if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) {
    try {
      const res = await fetch(urlOrPath, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        },
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch ${urlOrPath}: HTTP ${res.status}`);
      }
      const arrayBuffer = await res.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
    } catch {
      // Fallback to system curl.exe using Windows OS certificate store with strict TLS verification (no -k flag)
      const tmpFile = path.resolve(process.cwd(), '.tmp_download.bin');
      execSync(`curl.exe -sSL "${urlOrPath}" -o "${tmpFile}"`);
      buffer = fs.readFileSync(tmpFile);
      if (fs.existsSync(tmpFile)) {
        fs.unlinkSync(tmpFile);
      }
    }
  } else {
    buffer = fs.readFileSync(path.resolve(process.cwd(), urlOrPath));
  }

  const hash = crypto.createHash('sha256').update(buffer).digest('hex');
  return { buffer, sha256: hash };
}

export async function extractTextFromPdf(buffer: Buffer): Promise<string[]> {
  const parser = new PDFParse(new Uint8Array(buffer));
  const textResult = await (parser as any).getText();
  if (textResult && Array.isArray(textResult.pages)) {
    return textResult.pages.map((p: any) => p.text || '');
  }
  return [];
}

export async function extractDemandsForGrants(pdfUrl: string): Promise<ExtractedTableData> {
  const { buffer, sha256 } = await fetchAndHashBuffer(pdfUrl);
  const pages = await extractTextFromPdf(buffer);
  
  const results: ExtractedTableData['rows'] = [];

  // Parse lines matching demand patterns (e.g. Demand 17 Education, 19 Urban Development, 20 Public Works, etc.)
  const demandRegex = /(\d{2})\s+([^\d\n]+?)\s+(Revenue|Capital)\s+([\d,.]+)/g;

  for (let i = 0; i < Math.min(10, pages.length); i++) {
    const text = pages[i];
    let match;
    while ((match = demandRegex.exec(text)) !== null) {
      const demandNum = match[1];
      const name = match[2].trim();
      const type = match[3];
      const amountStr = match[4].replace(/,/g, '');
      const amountLakhs = parseFloat(amountStr);

      results.push({
        code: `Demand ${demandNum}`,
        description: `${name} (${type})`,
        totalLakhs: amountLakhs,
        totalCr: !isNaN(amountLakhs) ? Number((amountLakhs / 100).toFixed(2)) : undefined,
      });
    }
  }

  return {
    sourceUrl: pdfUrl,
    sha256,
    retrievalDate: new Date().toISOString().split('T')[0],
    rows: results,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const targetUrl = args[0] || 'https://finance.karnataka.gov.in/storage/pdf-files/4_OverviewofBudget2024-25.pdf';

  console.log(`\n======================================================`);
  console.log(`  Karnataka Budget Extractor Utility`);
  console.log(`  Target: ${targetUrl}`);
  console.log(`======================================================\n`);

  try {
    const { sha256, buffer } = await fetchAndHashBuffer(targetUrl);
    console.log(`✅ SHA-256: ${sha256}`);
    console.log(`✅ File Size: ${(buffer.length / 1024).toFixed(1)} KB`);

    if (args.includes('--hash-only')) {
      return;
    }

    const pages = await extractTextFromPdf(buffer);
    console.log(`✅ Extracted ${pages.length} pages.`);

    if (pages.length >= 4) {
      console.log(`\n--- Page 4 Excerpt ---`);
      console.log(pages[3].slice(0, 1000));
    }
  } catch (err: any) {
    console.error(`❌ Extraction error:`, err.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
