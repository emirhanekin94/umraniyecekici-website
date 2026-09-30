const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'style.css');
const backupPath = path.join(__dirname, '..', 'css', 'style.source.css');

let css = fs.readFileSync(cssPath, 'utf8');

// Save source backup
fs.writeFileSync(backupPath, css, 'utf8');
console.log(`Saved unminified backup to ${backupPath} (${(css.length / 1024).toFixed(1)} KB)`);

// Robust CSS minifier (strip comments, newlines, extra spaces around delimiters)
let minified = css
  // Remove multi-line comments
  .replace(/\/\*[\s\S]*?\*\//g, '')
  // Normalize whitespace
  .replace(/\s+/g, ' ')
  // Remove spaces around symbols: { } : ; , > ~ +
  .replace(/\s*([\{\}:;,>~+])\s*/g, '$1')
  // Remove trailing semicolons before closing brace
  .replace(/;\}/g, '}')
  // Trim
  .trim();

fs.writeFileSync(cssPath, minified, 'utf8');
console.log(`Minified css/style.css: ${(minified.length / 1024).toFixed(1)} KB (Saved ${((css.length - minified.length) / 1024).toFixed(1)} KB)`);
