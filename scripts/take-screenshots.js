const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outDir = "C:\\Users\\bragg\\.gemini\\antigravity\\brain\\46051086-593f-412c-a31b-ccb055d79ecc\\screenshots";

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const targets = [
  { name: "home", path: "/" },
  { name: "map", path: "/map" },
  { name: "insights", path: "/insights" },
  { name: "completed-yellow-line", path: "/projects/namma-metro-yellow-line-rv-road-bommasandra" },
  { name: "ongoing-phase-2a", path: "/projects/namma-metro-phase-2a-outer-ring-road" },
  { name: "planned-twin-tunnel", path: "/projects/bengaluru-twin-tunnel-road-hebbal-silk-board" },
];

const viewports = [
  { suffix: "desktop-1280", width: 1280, height: 900 },
  { suffix: "mobile-375", width: 375, height: 812 },
];

for (const target of targets) {
  for (const vp of viewports) {
    const filename = `${target.name}-${vp.suffix}.png`;
    const outputPath = path.join(outDir, filename);
    const url = `http://localhost:3000${target.path}`;

    console.log(`Capturing ${filename} (${vp.width}x${vp.height}) from ${url}...`);
    try {
      const cmd = `"${chromePath}" --headless=new --hide-scrollbars --window-size=${vp.width},${vp.height} --virtual-time-budget=3000 --screenshot="${outputPath}" "${url}"`;
      execSync(cmd, { stdio: "ignore", timeout: 15000 });
      console.log(`✅ Saved ${outputPath}`);
    } catch (e) {
      console.error(`❌ Failed ${filename}:`, e.message);
    }
  }
}
console.log("All screenshots captured successfully!");
