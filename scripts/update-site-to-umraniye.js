const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// Helper to replace globally
function replaceAll(str, mapObj) {
  let res = str;
  for (const [key, val] of Object.entries(mapObj)) {
    res = res.split(key).join(val);
  }
  return res;
}

// Map embed
const UMRANIYE_MAP_IFRAME = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48163.66442654859!2d29.083317769408257!3d41.02026859349833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac89a695dfd05%3A0x280e729a8a7db9d1!2zw5xtcmFuaXllL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="Ümraniye Yol Yardım Harita"></iframe>`;

const UMRANIYE_HERO_SELECT = `
              <option value="Ümraniye" selected>📍 Ümraniye (Merkez, Santral, Alemdağ Cd.)</option>
              <option value="Dudullu">📍 Aşağı & Yukarı Dudullu</option>
              <option value="Tepeüstü">📍 Tepeüstü & Meydan AVM / IKEA</option>
              <option value="Şerifali">📍 Şerifali & Finanskent</option>
              <option value="Atakent">📍 Atakent & Armağanevler</option>
              <option value="Çakmak">📍 Çakmak & Saray Mahallesi</option>
              <option value="Ihlamurkuyu">📍 Ihlamurkuyu & Cemil Meriç</option>
              <option value="Kazım Karabekir">📍 Kazım Karabekir & Hekimbaşı</option>
              <option value="Esenşehir">📍 Esenşehir & Esenkent</option>
              <option value="İMES & MODOKO">📍 İMES, MODOKO & DES Sanayi</option>
              <option value="Çekmeköy">📍 Çekmeköy & Madenler</option>
              <option value="Taşdelen">📍 Taşdelen & Alemdağ</option>
              <option value="Ataşehir">📍 Ataşehir & Finans Merkezi</option>
              <option value="İçerenköy">📍 İçerenköy & Küçükbakkalköy</option>
              <option value="Sancaktepe">📍 Sancaktepe & Samandıra</option>
              <option value="Sarıgazi">📍 Sarıgazi & Yenidoğan</option>
              <option value="Üsküdar">📍 Üsküdar & Çamlıca</option>
              <option value="Altunizade">📍 Altunizade & Acıbadem</option>
              <option value="Kavacık & Beykoz">📍 Kavacık & Beykoz (FSM Girişi)</option>
              <option value="Kadıköy & Göztepe">📍 Kadıköy & Göztepe Köprüsü</option>
              <option value="TEM Otoyolu">🛣️ TEM Otoyolu (Ümraniye - Çamlıca - FSM)</option>
              <option value="Şile Otoyolu">🛣️ Şile Otoyolu (Ümraniye - Çekmeköy - Şile)</option>
              <option value="Kuzey Marmara">🛣️ Kuzey Marmara Otoyolu (Reşadiye - Paşaköy)</option>
              <option value="D-100 / E-5">🛣️ D-100 / E-5 Karayolu (Göztepe - Kozyatağı)</option>
`;

const UMRANIYE_REGIONS = [
  { slug: 'umraniye-oto-cekici', name: 'Ümraniye Merkez', sub: 'Alemdağ Caddesi, Santral, Yamanevler, İnkılap', cat: 'umraniye', eta: '10 - 15 Dk' },
  { slug: 'dudullu-oto-cekici', name: 'Dudullu', sub: 'Aşağı Dudullu, Yukarı Dudullu, Tavukçuyolu', cat: 'umraniye', eta: '10 - 15 Dk' },
  { slug: 'tepeustu-oto-cekici', name: 'Tepeüstü', sub: 'Meydan AVM, Buyaka, IKEA Çevresi, TEM Bağlantısı', cat: 'umraniye', eta: '10 - 15 Dk' },
  { slug: 'serifali-oto-cekici', name: 'Şerifali', sub: 'Finanskent, Elmalıkent, Turgut Özal Bulvarı', cat: 'umraniye', eta: '10 - 15 Dk' },
  { slug: 'atakent-oto-cekici', name: 'Atakent', sub: 'Armağanevler, Mithatpaşa Caddesi, Çamlık', cat: 'umraniye', eta: '10 - 15 Dk' },
  { slug: 'cakmak-oto-cekici', name: 'Çakmak', sub: 'Çakmak Köprüsü, Saray Mahallesi, Balkan Cd.', cat: 'umraniye', eta: '10 - 15 Dk' },
  { slug: 'ihlamurkuyu-oto-cekici', name: 'Ihlamurkuyu', sub: 'Cemil Meriç, FSM Mahallesi, İstiklal', cat: 'umraniye', eta: '10 - 15 Dk' },
  { slug: 'kazim-karabekir-oto-cekici', name: 'Kazım Karabekir', sub: 'Dumlupınar, Hekimbaşı, Küçüksu Caddesi', cat: 'umraniye', eta: '10 - 15 Dk' },
  { slug: 'esensehir-oto-cekici', name: 'Esenşehir', sub: 'Esenkent, KADOSAN Sanayi Sitesi, Baraj Yolu', cat: 'umraniye', eta: '10 - 15 Dk' },
  { slug: 'imes-modoko-oto-cekici', name: 'İMES & MODOKO', sub: 'İMES Sanayi, MODOKO Mobilyacılar, DES Sanayi', cat: 'umraniye', eta: '10 - 15 Dk' },
  { slug: 'cekmekoy-oto-cekici', name: 'Çekmeköy', sub: 'Madenler Kavşağı, Mehmet Akif, Merkez', cat: 'komsu', eta: '10 - 15 Dk' },
  { slug: 'tasdelen-oto-cekici', name: 'Taşdelen', sub: 'Alemdağ, Güngören, Şile Yolu Çıkışı', cat: 'komsu', eta: '10 - 15 Dk' },
  { slug: 'atasehir-oto-cekici', name: 'Ataşehir', sub: 'İstanbul Finans Merkezi, Barbaros, Batı Ataşehir', cat: 'komsu', eta: '10 - 15 Dk' },
  { slug: 'icerenkoy-oto-cekici', name: 'İçerenköy', sub: 'Küçükbakkalköy, Hal Yolu, Carrefour Kavşağı', cat: 'komsu', eta: '10 - 15 Dk' },
  { slug: 'sancaktepe-oto-cekici', name: 'Sancaktepe', sub: 'Samandıra Gişeler, Eyüp Sultan, Şehir Hastanesi', cat: 'komsu', eta: '10 - 15 Dk' },
  { slug: 'sarigazi-oto-cekici', name: 'Sarıgazi', sub: 'Yenidoğan, Meclis Mahallesi, İnönü Caddesi', cat: 'komsu', eta: '10 - 15 Dk' },
  { slug: 'uskudar-oto-cekici', name: 'Üsküdar', sub: 'Çamlıca Tünelleri, Bulgurlu, Libadiye, Ünalan', cat: 'komsu', eta: '10 - 15 Dk' },
  { slug: 'altunizade-oto-cekici', name: 'Altunizade', sub: '15 Temmuz Köprüsü Katılımı, Acıbadem, Koşuyolu', cat: 'komsu', eta: '10 - 15 Dk' },
  { slug: 'kavacik-beykoz-oto-cekici', name: 'Kavacık & Beykoz', sub: 'FSM Köprüsü Ayağı, Rüzgarlıbahçe, Çavuşbaşı', cat: 'komsu', eta: '10 - 15 Dk' },
  { slug: 'kadikoy-goztepe-oto-cekici', name: 'Kadıköy & Göztepe', sub: 'Göztepe Köprüsü, Kozyatağı E-5, Bostancı', cat: 'komsu', eta: '10 - 15 Dk' },
  { slug: 'tem-otoyolu-oto-cekici', name: 'TEM Otoyolu', sub: 'Ümraniye Gişeleri, Çamlıca Gişeler, FSM Hattı', cat: 'otoyol', eta: '10 - 15 Dk' },
  { slug: 'sile-otoyolu-oto-cekici', name: 'Şile Otoyolu', sub: 'Ümraniye - Çekmeköy - Taşdelen - Şile Aksı', cat: 'otoyol', eta: '10 - 15 Dk' },
  { slug: 'kuzey-marmara-otoyolu-oto-cekici', name: 'Kuzey Marmara', sub: 'Reşadiye Gişeleri, Paşaköy Ayrımı, Hüseyinli', cat: 'otoyol', eta: '10 - 15 Dk' },
  { slug: 'd100-e5-oto-cekici', name: 'D-100 (E-5) Karayolu', sub: 'Göztepe Köprüsü, Kozyatağı Kavşağı, Bostancı', cat: 'otoyol', eta: '10 - 15 Dk' }
];

function buildRegionsMatrixHtml() {
  return UMRANIYE_REGIONS.map(r => `
        <a href="bolgeler/${r.slug}.html" class="region-card-luxury" data-category="${r.cat}">
          <div class="region-card-top">
            <div class="region-icon-badge">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
            </div>
            <span class="region-status-pill">
              <span class="status-live-dot"></span>
              7/24 Nöbetçi
            </span>
          </div>
          <h3 class="region-card-name">${r.name} Çekici</h3>
          <p class="region-card-sub">${r.sub}</p>
          <div class="region-card-footer">
            <span class="region-eta-tag">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              Varış: ${r.eta}
            </span>
            <span class="region-action-arrow">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </span>
          </div>
        </a>
  `).join('\n');
}

// 1. Process index.html
function updateIndexHtml() {
  const filePath = path.join(rootDir, 'index.html');
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace phone & domains
  content = replaceAll(content, {
    '0551 675 66 24': '0544 138 07 34',
    '05516756624': '05441380734',
    '+905516756624': '+905441380734',
    '905516756624': '905441380734',
    'tuzlayolyardim.com': 'umraniyeyolyardim.com',
    'Tuzla Yol Yardım': 'Ümraniye Yol Yardım',
    'Tuzla Yol Yardım & Oto Çekici': 'Ümraniye Yol Yardım & Oto Çekici',
    'Tuzla Oto Çekici': 'Ümraniye Oto Çekici',
    'Tuzla Çekici': 'Ümraniye Çekici',
    'Tuzla, Pendik, Gebze, Sabiha Gökçen, TEM ve Kuzey Marmara Otoyolu\'nda': 'Ümraniye, Dudullu, Çekmeköy, Ataşehir, Sancaktepe, TEM ve Şile Otoyolu\'nda',
    'Tuzla, Pendik, Gebze, Sabiha Gökçen Havalimanı, TEM ve Kuzey Marmara Otoyolu güzergahlarında': 'Ümraniye, Dudullu, Çekmeköy, Ataşehir, Sancaktepe, TEM ve Şile Otoyolu güzergahlarında',
    'Tuzla, Pendik, Gebze ve Otoyollarda': 'Ümraniye, Çekmeköy, Ataşehir ve Çevre Otoyollarda',
    'Tuzla, Pendik, Gebze & Tüm Çevre Otoyollarda Nöbetçi Çekici Noktaları': 'Ümraniye, Ataşehir, Çekmeköy, Sancaktepe & Tüm Otoyollarda Nöbetçi Çekici Noktaları',
    'Tuzla, Pendik, Gebze & Tüm Çevre Yolları Nöbetçi Çekici Noktası': 'Ümraniye, Ataşehir, Çekmeköy, Sancaktepe & Tüm Çevre Yolları Nöbetçi Çekici Noktası',
    'Tuzla, Pendik, Gebze 7/24 En Yakın Acil Çekici ve Yol Yardım': 'Ümraniye, Ataşehir, Çekmeköy 7/24 En Yakın Acil Çekici ve Yol Yardım',
    'TUZLA <span>YOL YARDIM</span>': 'ÜMRANİYE <span>YOL YARDIM</span>',
    'TUZLA': 'ÜMRANİYE',
    'Tuzla': 'Ümraniye',
    'tuzla': 'umraniye'
  });

  // Re-adjust schema lat/long & address
  content = content.replace(/"latitude":\s*40\.\d+/, '"latitude": 41.0256');
  content = content.replace(/"longitude":\s*29\.\d+/, '"longitude": 29.0963');
  content = content.replace(/"addressLocality":\s*"[^"]+"/, '"addressLocality": "Ümraniye"');

  // Replace map iframe
  const mapRegex = /<iframe src="https:\/\/www\.google\.com\/maps\/embed\?[^"]+"[^>]*><\/iframe>/;
  content = content.replace(mapRegex, UMRANIYE_MAP_IFRAME);

  // Replace hero quote select options
  const heroSelectRegex = /<select name="region_select" id="hero-region-select" aria-label="Bulunduğunuz Bölge \/ Güzergah" class="wp-form-select" required>[\s\S]*?<\/select>/;
  content = content.replace(heroSelectRegex, `<select name="region_select" id="hero-region-select" aria-label="Bulunduğunuz Bölge / Güzergah" class="wp-form-select" required>${UMRANIYE_HERO_SELECT}\n            </select>`);

  // Replace filter tabs in index.html
  const filterTabsRegex = /<div class="region-filter-tabs">[\s\S]*?<\/div>/;
  const newFilterTabs = `<div class="region-filter-tabs">
        <button class="filter-tab-btn active" data-filter="all">Tüm Bölgeler (24)</button>
        <button class="filter-tab-btn" data-filter="umraniye">Ümraniye & Mahalleleri</button>
        <button class="filter-tab-btn" data-filter="komsu">Komşu İlçeler</button>
        <button class="filter-tab-btn" data-filter="otoyol">Otoyollar & Gişeler</button>
      </div>`;
  content = content.replace(filterTabsRegex, newFilterTabs);

  // Replace regions container in index.html
  const regionsContainerRegex = /<div class="regions-matrix" id="regions-container">[\s\S]*?<\/div>\s*<div style="text-align: center;/;
  const newRegionsMatrix = `<div class="regions-matrix" id="regions-container">\n${buildRegionsMatrixHtml()}\n      </div>\n      <div style="text-align: center;`;
  content = content.replace(regionsContainerRegex, newRegionsMatrix);

  // Replace popular region links in footer
  const footerPopRegionsRegex = /<h4 class="footer-col-title">Popüler Bölgeler<\/h4>\s*<ul class="footer-links">[\s\S]*?<\/ul>/;
  const newFooterPopRegions = `<h4 class="footer-col-title">Popüler Bölgeler</h4>
          <ul class="footer-links">
            <li><a href="bolgeler/umraniye-oto-cekici.html">Ümraniye Merkez Çekici</a></li>
            <li><a href="bolgeler/dudullu-oto-cekici.html">Dudullu Çekici</a></li>
            <li><a href="bolgeler/tepeustu-oto-cekici.html">Tepeüstü Çekici</a></li>
            <li><a href="bolgeler/cekmekoy-oto-cekici.html">Çekmeköy Çekici</a></li>
            <li><a href="bolgeler/atasehir-oto-cekici.html">Ataşehir Çekici</a></li>
            <li><a href="bolgeler/tem-otoyolu-oto-cekici.html">TEM Otoyolu Çekici</a></li>
          </ul>`;
  content = content.replace(footerPopRegionsRegex, newFooterPopRegions);

  // Adjust copyright text
  content = content.replace(/© \d{4} Ümraniye Yol Yardım/g, `© ${new Date().getFullYear()} Ümraniye Yol Yardım`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated: index.html');
}

// 2. Process hakkimizda.html, galeri.html, iletisim.html
function updateGeneralPages() {
  const pages = ['hakkimizda.html', 'galeri.html', 'iletisim.html'];
  for (const page of pages) {
    const filePath = path.join(rootDir, page);
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');

    content = replaceAll(content, {
      '0551 675 66 24': '0544 138 07 34',
      '05516756624': '05441380734',
      '+905516756624': '+905441380734',
      '905516756624': '905441380734',
      'tuzlayolyardim.com': 'umraniyeyolyardim.com',
      'Tuzla Yol Yardım': 'Ümraniye Yol Yardım',
      'Tuzla Yol Yardım & Oto Çekici': 'Ümraniye Yol Yardım & Oto Çekici',
      'Tuzla Oto Çekici': 'Ümraniye Oto Çekici',
      'Tuzla Çekici': 'Ümraniye Çekici',
      'Tuzla, Pendik, Gebze & Tüm Çevre Otoyollarda Nöbetçi Çekici Noktaları': 'Ümraniye, Ataşehir, Çekmeköy, Sancaktepe & Tüm Otoyollarda Nöbetçi Çekici Noktaları',
      'TUZLA <span>YOL YARDIM</span>': 'ÜMRANİYE <span>YOL YARDIM</span>',
      'TUZLA': 'ÜMRANİYE',
      'Tuzla': 'Ümraniye'
    });

    // Map embed
    const mapRegex = /<iframe src="https:\/\/www\.google\.com\/maps\/embed\?[^"]+"[^>]*><\/iframe>/g;
    content = content.replace(mapRegex, UMRANIYE_MAP_IFRAME);

    // Lat/Long
    content = content.replace(/"latitude":\s*40\.\d+/, '"latitude": 41.0256');
    content = content.replace(/"longitude":\s*29\.\d+/, '"longitude": 29.0963');
    content = content.replace(/"addressLocality":\s*"[^"]+"/, '"addressLocality": "Ümraniye"');

    // Update popular regions in footer
    const footerPopRegionsRegex = /<h4 class="footer-title">Popüler Bölgeler<\/h4>\s*<ul class="footer-links">[\s\S]*?<\/ul>/;
    const newFooterPopRegions = `<h4 class="footer-title">Popüler Bölgeler</h4>
          <ul class="footer-links">
            <li><a href="bolgeler/umraniye-oto-cekici.html">Ümraniye Merkez Çekici</a></li>
            <li><a href="bolgeler/dudullu-oto-cekici.html">Dudullu Çekici</a></li>
            <li><a href="bolgeler/tepeustu-oto-cekici.html">Tepeüstü Çekici</a></li>
            <li><a href="bolgeler/cekmekoy-oto-cekici.html">Çekmeköy Çekici</a></li>
            <li><a href="bolgeler/atasehir-oto-cekici.html">Ataşehir Çekici</a></li>
            <li><a href="bolgeler/tem-otoyolu-oto-cekici.html">TEM Otoyolu Çekici</a></li>
          </ul>`;
    content = content.replace(footerPopRegionsRegex, newFooterPopRegions);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${page}`);
  }
}

// 3. Process hizmetler/*.html
function updateServices() {
  const dir = path.join(rootDir, 'hizmetler');
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (!file.endsWith('.html')) continue;
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = replaceAll(content, {
      '0551 675 66 24': '0544 138 07 34',
      '05516756624': '05441380734',
      '+905516756624': '+905441380734',
      '905516756624': '905441380734',
      'tuzlayolyardim.com': 'umraniyeyolyardim.com',
      'Tuzla Yol Yardım': 'Ümraniye Yol Yardım',
      'Tuzla Yol Yardım & Oto Çekici': 'Ümraniye Yol Yardım & Oto Çekici',
      'Tuzla Oto Çekici': 'Ümraniye Oto Çekici',
      'Tuzla Çekici': 'Ümraniye Çekici',
      'Tuzla, Pendik, Gebze & Tüm Çevre Otoyollarda Nöbetçi Çekici Noktaları': 'Ümraniye, Ataşehir, Çekmeköy, Sancaktepe & Tüm Otoyollarda Nöbetçi Çekici Noktaları',
      'Tuzla, Pendik, Gebze': 'Ümraniye, Ataşehir, Çekmeköy, Dudullu',
      'TUZLA <span>YOL YARDIM</span>': 'ÜMRANİYE <span>YOL YARDIM</span>',
      'TUZLA': 'ÜMRANİYE',
      'Tuzla': 'Ümraniye'
    });

    // Update region select dropdown inside forms
    const selectRegex = /<select name="region_select"[^>]*>[\s\S]*?<\/select>/;
    if (selectRegex.test(content)) {
      content = content.replace(selectRegex, `<select name="region_select" aria-label="Bulunduğunuz Bölge" class="wp-form-select wp-form-select-light" required>${UMRANIYE_HERO_SELECT}\n                </select>`);
    }

    // Popular regions in footer
    const footerPopRegionsRegex = /<h4 class="footer-title">Popüler Bölgeler<\/h4>\s*<ul class="footer-links">[\s\S]*?<\/ul>/;
    const newFooterPopRegions = `<h4 class="footer-title">Popüler Bölgeler</h4>
          <ul class="footer-links">
            <li><a href="../bolgeler/umraniye-oto-cekici.html">Ümraniye Merkez Çekici</a></li>
            <li><a href="../bolgeler/dudullu-oto-cekici.html">Dudullu Çekici</a></li>
            <li><a href="../bolgeler/tepeustu-oto-cekici.html">Tepeüstü Çekici</a></li>
            <li><a href="../bolgeler/cekmekoy-oto-cekici.html">Çekmeköy Çekici</a></li>
            <li><a href="../bolgeler/atasehir-oto-cekici.html">Ataşehir Çekici</a></li>
            <li><a href="../bolgeler/tem-otoyolu-oto-cekici.html">TEM Otoyolu Çekici</a></li>
          </ul>`;
    content = content.replace(footerPopRegionsRegex, newFooterPopRegions);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated hizmetler: ${file}`);
  }
}

// 4. Process blog/*.html
function updateBlogs() {
  const dir = path.join(rootDir, 'blog');
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (!file.endsWith('.html')) continue;
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = replaceAll(content, {
      '0551 675 66 24': '0544 138 07 34',
      '05516756624': '05441380734',
      '+905516756624': '+905441380734',
      '905516756624': '905441380734',
      'tuzlayolyardim.com': 'umraniyeyolyardim.com',
      'Tuzla Yol Yardım': 'Ümraniye Yol Yardım',
      'Tuzla Yol Yardım & Oto Çekici': 'Ümraniye Yol Yardım & Oto Çekici',
      'Tuzla Oto Çekici': 'Ümraniye Oto Çekici',
      'Tuzla Çekici': 'Ümraniye Çekici',
      'Tuzla, Pendik, Gebze & Tüm Çevre Otoyollarda Nöbetçi Çekici Noktaları': 'Ümraniye, Ataşehir, Çekmeköy, Sancaktepe & Tüm Otoyollarda Nöbetçi Çekici Noktaları',
      'TUZLA <span>YOL YARDIM</span>': 'ÜMRANİYE <span>YOL YARDIM</span>',
      'TUZLA': 'ÜMRANİYE',
      'Tuzla': 'Ümraniye'
    });

    // Popular regions in footer
    const footerPopRegionsRegex = /<h4 class="footer-title">Popüler Bölgeler<\/h4>\s*<ul class="footer-links">[\s\S]*?<\/ul>/;
    const newFooterPopRegions = `<h4 class="footer-title">Popüler Bölgeler</h4>
          <ul class="footer-links">
            <li><a href="../bolgeler/umraniye-oto-cekici.html">Ümraniye Merkez Çekici</a></li>
            <li><a href="../bolgeler/dudullu-oto-cekici.html">Dudullu Çekici</a></li>
            <li><a href="../bolgeler/tepeustu-oto-cekici.html">Tepeüstü Çekici</a></li>
            <li><a href="../bolgeler/cekmekoy-oto-cekici.html">Çekmeköy Çekici</a></li>
            <li><a href="../bolgeler/atasehir-oto-cekici.html">Ataşehir Çekici</a></li>
            <li><a href="../bolgeler/tem-otoyolu-oto-cekici.html">TEM Otoyolu Çekici</a></li>
          </ul>`;
    content = content.replace(footerPopRegionsRegex, newFooterPopRegions);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated blog: ${file}`);
  }
}

// 5. Generate sitemap.xml
function generateSitemapXml() {
  const sitemapPath = path.join(rootDir, 'sitemap.xml');
  const now = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Ana Sayfa -->
  <url>
    <loc>https://umraniyeyolyardim.com/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- İletişim -->
  <url>
    <loc>https://umraniyeyolyardim.com/iletisim.html</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Hakkımızda -->
  <url>
    <loc>https://umraniyeyolyardim.com/hakkimizda.html</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Galeri & Filo -->
  <url>
    <loc>https://umraniyeyolyardim.com/galeri.html</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Hizmetlerimiz Ana Sayfası -->
  <url>
    <loc>https://umraniyeyolyardim.com/hizmetler/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;

  // Services
  const services = [
    'oto-kurtarma.html',
    'oto-cekici.html',
    'yol-yardim-aku-takviye.html',
    'motosiklet-cekici.html',
    'lastik-tamir-degisim.html',
    'ariza-yol-yardim.html',
    'tekne-karavan-cekici.html',
    'agir-vasita-kurtarma.html',
    'sehirlerarasi-arac-tasima.html',
    'kaza-kurtarma-vinc.html'
  ];
  for (const s of services) {
    xml += `  <url>
    <loc>https://umraniyeyolyardim.com/hizmetler/${s}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n`;
  }

  // Regions index
  xml += `  <!-- Bölgelerimiz Ana Sayfası -->
  <url>
    <loc>https://umraniyeyolyardim.com/bolgeler/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>\n`;

  // 24 Regions
  for (const r of UMRANIYE_REGIONS) {
    xml += `  <url>
    <loc>https://umraniyeyolyardim.com/bolgeler/${r.slug}.html</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n`;
  }

  // Blog index & posts
  xml += `  <!-- Blog Ana Sayfası -->
  <url>
    <loc>https://umraniyeyolyardim.com/blog/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

  const blogPosts = [
    'otoyolda-arac-arizalandiginda-yapilmasi-gerekenler.html',
    'aku-neden-aniden-biter-takviye-nasil-yapilir.html',
    'otomatik-vitesli-araclar-nasil-cekilir.html',
    'oto-cekici-fiyatlari-nasil-hesaplanir.html'
  ];
  for (const b of blogPosts) {
    xml += `  <url>
    <loc>https://umraniyeyolyardim.com/blog/${b}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>\n`;
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log('Updated: sitemap.xml');
}

async function main() {
  console.log('Starting full site adaptation to Ümraniye Yol Yardım...');
  updateIndexHtml();
  updateGeneralPages();
  updateServices();
  updateBlogs();
  generateSitemapXml();
  console.log('Site adaptation successfully completed!');
}

main().catch(console.error);
