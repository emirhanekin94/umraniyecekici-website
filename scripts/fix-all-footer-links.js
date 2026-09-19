const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const rootFooterPopular = `
          <ul class="footer-links">
            <li><a href="bolgeler/umraniye-oto-cekici.html">Ümraniye Merkez Çekici</a></li>
            <li><a href="bolgeler/dudullu-oto-cekici.html">Dudullu Çekici</a></li>
            <li><a href="bolgeler/tepeustu-oto-cekici.html">Tepeüstü Çekici</a></li>
            <li><a href="bolgeler/cekmekoy-oto-cekici.html">Çekmeköy Çekici</a></li>
            <li><a href="bolgeler/atasehir-oto-cekici.html">Ataşehir Çekici</a></li>
            <li><a href="bolgeler/tem-otoyolu-oto-cekici.html">TEM Otoyolu Çekici</a></li>
          </ul>
`;

const subFooterPopular = `
          <ul class="footer-links">
            <li><a href="../bolgeler/umraniye-oto-cekici.html">Ümraniye Merkez Çekici</a></li>
            <li><a href="../bolgeler/dudullu-oto-cekici.html">Dudullu Çekici</a></li>
            <li><a href="../bolgeler/tepeustu-oto-cekici.html">Tepeüstü Çekici</a></li>
            <li><a href="../bolgeler/cekmekoy-oto-cekici.html">Çekmeköy Çekici</a></li>
            <li><a href="../bolgeler/atasehir-oto-cekici.html">Ataşehir Çekici</a></li>
            <li><a href="../bolgeler/tem-otoyolu-oto-cekici.html">TEM Otoyolu Çekici</a></li>
          </ul>
`;

function fixFiles(dir, isSub) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== '.git' && f !== 'node_modules' && f !== 'images' && f !== 'css' && f !== 'js') {
        fixFiles(full, true);
      }
    } else if (f.endsWith('.html')) {
      let content = fs.readFileSync(full, 'utf8');

      // Replace any old region footer links
      const regex = /<h4 class="footer-(?:col-)?title">Popüler Bölgeler<\/h4>\s*<ul class="footer-links">[\s\S]*?<\/ul>/gi;
      const replacement = isSub ? `<h4 class="footer-title">Popüler Bölgeler</h4>${subFooterPopular}` : `<h4 class="footer-title">Popüler Bölgeler</h4>${rootFooterPopular}`;
      content = content.replace(regex, replacement);

      // Clean up any other specific old links
      content = content.replace(/sabiha-gokcen-havalimani-oto-cekici\.html/g, 'tepeustu-oto-cekici.html');
      content = content.replace(/gebze-oto-cekici\.html/g, 'cekmekoy-oto-cekici.html');
      content = content.replace(/pendik-oto-cekici\.html/g, 'atasehir-oto-cekici.html');

      fs.writeFileSync(full, content, 'utf8');
    }
  }
}

fixFiles(rootDir, false);
console.log('Fixed all footer and popular region links.');
