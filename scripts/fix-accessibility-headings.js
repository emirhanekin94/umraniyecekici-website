const fs = require('fs');

function fixHeadings(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Fix region titles from h2 to h3 inside region-square-body
  html = html.replace(/<h2 class="region-square-title">([\s\S]*?)<\/h2>/g, '<h3 class="region-square-title">$1</h3>');

  // Fix footer titles from h4 to h3
  html = html.replace(/<h4 class="footer-title">([\s\S]*?)<\/h4>/g, '<h3 class="footer-title">$1</h3>');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated headings in ${filePath}`);
}

fixHeadings('index.html');
