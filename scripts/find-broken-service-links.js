const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const results = [];

function checkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory() && f !== 'node_modules' && f !== '.git') {
      checkDir(full);
    } else if (f.endsWith('.html') || f.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      const regex = /href=["']([^"']+)["']/gi;
      let match;
      while ((match = regex.exec(content)) !== null) {
        const href = match[1];
        if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('javascript:')) {
          continue;
        }
        // check if file exists
        const cleanHref = href.split('?')[0].split('#')[0];
        const targetPath = path.resolve(path.dirname(full), cleanHref);
        if (!fs.existsSync(targetPath)) {
          results.push({
            from: path.relative(rootDir, full),
            href: href,
            targetPath: path.relative(rootDir, targetPath)
          });
        }
      }
    }
  }
}

checkDir(rootDir);

console.log('Broken relative links found:', results.length);
results.forEach(r => console.log(`${r.from} -> ${r.href} (not found: ${r.targetPath})`));
