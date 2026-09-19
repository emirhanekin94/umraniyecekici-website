const fs = require('fs');
const path = require('path');

let missingLinks = 0;
let totalLinks = 0;

function checkLinks(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== '.git' && f !== 'node_modules') checkLinks(full);
    } else if (f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      const regex = /href=["']([^"']+)["']/gi;
      let match;
      while ((match = regex.exec(content)) !== null) {
        let href = match[1].trim();
        if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('javascript:')) continue;
        // strip query or hash
        href = href.split('?')[0].split('#')[0];
        if (!href) continue;
        totalLinks++;
        let resolved;
        if (href.startsWith('/')) {
          resolved = path.join(__dirname, '..', href);
        } else {
          resolved = path.resolve(path.dirname(full), href);
        }
        if (!fs.existsSync(resolved)) {
          console.error('BROKEN LINK in', full, '->', href, 'resolved:', resolved);
          missingLinks++;
        }
      }
    }
  }
}

checkLinks(path.join(__dirname, '..'));
console.log(`Total checked internal links: ${totalLinks}, Broken links: ${missingLinks}`);
