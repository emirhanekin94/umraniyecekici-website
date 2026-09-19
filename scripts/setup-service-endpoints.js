const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const hizmetlerDir = path.join(rootDir, 'hizmetler');

const services = [
  { slug: 'oto-cekici', aliases: ['cekici-arac-tasima', 'cekici', 'arac-tasima'] },
  { slug: 'oto-kurtarma', aliases: ['kurtarma', 'acil-oto-kurtarma'] },
  { slug: 'lastik-tamir-degisim', aliases: ['lastik-tamir', 'lastik-yol-yardim'] },
  { slug: 'yol-yardim-aku-takviye', aliases: ['aku-takviye', 'aku-yol-yardim'] },
  { slug: 'ariza-yol-yardim', aliases: ['yol-yardim', 'oto-ariza'] },
  { slug: 'motosiklet-cekici', aliases: ['motor-cekici'] },
  { slug: 'tekne-karavan-cekici', aliases: ['karavan-cekici', 'tekne-cekici'] },
  { slug: 'agir-vasita-kurtarma', aliases: ['ticari-cekici', 'minibus-cekici'] },
  { slug: 'sehirlerarasi-arac-tasima', aliases: ['sehirlerarasi-cekici'] },
  { slug: 'kaza-kurtarma-vinc', aliases: ['vinc-kurtarma', 'kaza-cekici'] }
];

function createRedirectHtml(targetUrl, title) {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <title>Yönlendiriliyor - ${title} | Ümraniye Yol Yardım</title>
  <link rel="canonical" href="https://umraniyeyolyardim.com/${targetUrl.replace(/^\//, '')}">
  <script>window.location.replace("${targetUrl}");</script>
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #0b0f19; color: #fff;">
  <div style="text-align: center;">
    <h2>Sayfaya Yönlendiriliyorsunuz...</h2>
    <p><a href="${targetUrl}" style="color: #ff5500; font-weight: bold;">Hizmet Sayfasına Gitmek İçin Tıklayın →</a></p>
  </div>
</body>
</html>
`;
}

services.forEach(s => {
  const targetUrl = `/hizmetler/${s.slug}.html`;

  // 1. hizmetler/<slug>/index.html
  const subDir = path.join(hizmetlerDir, s.slug);
  if (!fs.existsSync(subDir)) fs.mkdirSync(subDir, { recursive: true });
  fs.writeFileSync(path.join(subDir, 'index.html'), createRedirectHtml(targetUrl, s.slug), 'utf8');

  // 2. root <slug>/index.html
  const rootSlugDir = path.join(rootDir, s.slug);
  if (!fs.existsSync(rootSlugDir)) fs.mkdirSync(rootSlugDir, { recursive: true });
  fs.writeFileSync(path.join(rootSlugDir, 'index.html'), createRedirectHtml(targetUrl, s.slug), 'utf8');

  // 3. root <slug>.html
  fs.writeFileSync(path.join(rootDir, `${s.slug}.html`), createRedirectHtml(targetUrl, s.slug), 'utf8');

  // 4. Aliases
  s.aliases.forEach(alias => {
    // root alias.html
    fs.writeFileSync(path.join(rootDir, `${alias}.html`), createRedirectHtml(targetUrl, alias), 'utf8');
    // root alias/index.html
    const aliasDir = path.join(rootDir, alias);
    if (!fs.existsSync(aliasDir)) fs.mkdirSync(aliasDir, { recursive: true });
    fs.writeFileSync(path.join(aliasDir, 'index.html'), createRedirectHtml(targetUrl, alias), 'utf8');
  });

  console.log(`Created robust endpoints for: ${s.slug}`);
});

console.log('All service endpoints created successfully!');
