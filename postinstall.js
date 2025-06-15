// postinstall.js
const fs = require("fs");
const path = require("path");

const targetDir = path.resolve(process.cwd(), "components");
const sourceFile = path.resolve(__dirname, "src", "components", "BinaryCursor.jsx");
const targetFile = path.join(targetDir, "BinaryCursor.jsx");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

fs.copyFileSync(sourceFile, targetFile);
console.log("✅ BinaryCursor component created in 'components/BinaryCursor.jsx'");
