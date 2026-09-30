const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map(m => m[0]);
console.log('Total img tags in index.html:', imgs.length);

imgs.forEach((img, i) => {
  const srcMatch = img.match(/src=["']([^"']+)["']/);
  const src = srcMatch ? srcMatch[1] : '';
  const altMatch = img.match(/alt=["']([^"']+)["']/);
  const alt = altMatch ? altMatch[1] : '';
  const widthMatch = img.match(/width=["']([^"']+)["']/);
  const width = widthMatch ? widthMatch[1] : '';
  const heightMatch = img.match(/height=["']([^"']+)["']/);
  const height = heightMatch ? heightMatch[1] : '';
  
  let size = 'unknown';
  if (src && fs.existsSync(src)) {
    size = (fs.statSync(src).size / 1024).toFixed(1) + ' KB';
  }
  console.log(`${i+1}. src=${src} [${size}] (${width}x${height}) alt="${alt}"`);
});
