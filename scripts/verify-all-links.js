const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(rootDir);
console.log(`Found ${htmlFiles.length} HTML files to inspect.`);

let brokenLinks = [];
let totalLinksChecked = 0;

htmlFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const dirOfFile = path.dirname(filePath);
  
  // Find all href="..."
  const regex = /href="([^"#\s:][^"]*)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const rawHref = match[1];
    if (rawHref.startsWith('tel:') || rawHref.startsWith('mailto:') || rawHref.startsWith('http') || rawHref.startsWith('//') || rawHref.startsWith('javascript:')) {
      continue;
    }
    
    totalLinksChecked++;
    let targetPath;
    if (rawHref.startsWith('/')) {
      // Root-relative
      targetPath = path.join(rootDir, rawHref.replace(/^\//, ''));
    } else {
      // Relative to file
      targetPath = path.join(dirOfFile, rawHref);
    }
    
    // Remove query params or hash if any
    targetPath = targetPath.split('?')[0].split('#')[0];

    // Check if target exists
    if (!fs.existsSync(targetPath)) {
      // If it has no extension, check if targetPath + '.html' exists or targetPath/index.html exists
      if (fs.existsSync(targetPath + '.html')) {
        // Exists with .html
      } else if (fs.existsSync(path.join(targetPath, 'index.html'))) {
        // Exists as directory index
      } else {
        brokenLinks.push({
          source: path.relative(rootDir, filePath),
          href: rawHref,
          resolved: path.relative(rootDir, targetPath)
        });
      }
    }
  }
});

console.log(`\nChecked ${totalLinksChecked} internal links.`);
if (brokenLinks.length === 0) {
  console.log('SUCCESS: 0 broken links found across the entire website!');
} else {
  console.log(`WARNING: Found ${brokenLinks.length} broken links:`);
  brokenLinks.slice(0, 20).forEach(b => {
    console.log(`  File: ${b.source} -> href="${b.href}" (Resolved to: ${b.resolved})`);
  });
}
