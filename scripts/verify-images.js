const fs = require('fs');
const path = require('path');

let missingImages = 0;
let totalChecked = 0;

function checkHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== '.git' && f !== 'node_modules') checkHtmlFiles(full);
    } else if (f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      const regex = /src=["']([^"']+\.(?:webp|png|jpg|jpeg|svg))["']/gi;
      let match;
      while ((match = regex.exec(content)) !== null) {
        const src = match[1];
        if (src.startsWith('http')) continue;
        totalChecked++;
        const resolved = path.resolve(path.dirname(full), src);
        if (!fs.existsSync(resolved)) {
          console.error('MISSING IMAGE in', full, '->', src);
          missingImages++;
        }
      }
    }
  }
}

checkHtmlFiles('.');
console.log(`Verified ${totalChecked} image references. Missing: ${missingImages}`);
