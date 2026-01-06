const fs = require("node:fs");
const path = require("node:path");

const src = path.resolve(__dirname, "../src/content/logs");
const dest = path.resolve(__dirname, "../public");

fs.cpSync(src, dest, { recursive: true });
