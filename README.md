# NammaKharcha (ನಮ್ಮ ಖರ್ಚು)

Bengaluru Public Infrastructure & Budget Transparency Tracker.

NammaKharcha tracks major public infrastructure projects across the Bengaluru Metropolitan Area, monitoring taxpayer spending, agency accountability, delay timelines, and data integrity.

## Key Features

- **Interactive Map:** Displays real geographical alignments using 6 GeoJSON alignment files (Bengaluru-Mysuru Expressway, Yellow Line, Phase 2A ORR, Ejipura Flyover, Silk Board Flyover, Hebbal Loop) plus 76 Metro station point markers on OpenStreetMap basemaps.
- **Source Integrity & Fact-Checking:** Every project figure and milestone is grounded in real, verifiable citations from primary government documents and verified news reporting.
- **Transparent Analytics:** Separates completed capital, active work-in-progress, and proposed budgets. Flags conflicting reported costs and overdue delays transparently.
- **Link & Excerpt Verification:** Automated verification tooling (`npm run check-links` and `npm run verify-excerpts`) prevents broken links, soft-404 redirects, and fabricated quotes.

## Verification Tooling

Run data and code integrity verification scripts:

```bash
# Check link status codes, follow redirects, verify URL slugs, and match page titles
npm run check-links

# Fetch article HTML and verify that all cited excerpts are exact verbatim substrings
npm run verify-excerpts

# Validate data schema, dates, coordinates, and denylist enforcement
npm run validate-data

# Typecheck and production build
npx tsc --noEmit
npm run build
```

## License

MIT
