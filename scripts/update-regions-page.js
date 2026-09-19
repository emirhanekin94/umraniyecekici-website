const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const cssPath = path.join(rootDir, 'css', 'style.css');
const bolgelerHtmlPath = path.join(rootDir, 'bolgeler', 'index.html');

// 1. Add CSS rules to style.css if not already present
let cssContent = fs.readFileSync(cssPath, 'utf8');

const newStyles = `
/* ==========================================================================
   KARE BÖLGE KARTLARI & MODERN GRID (Square Region Cards & Spacing)
   ========================================================================== */
.grid {
  display: grid;
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.regions-square-grid {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 28px !important;
  margin-top: 25px;
  margin-bottom: 40px;
}

@media (max-width: 1300px) {
  .regions-square-grid {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 24px !important;
  }
}

@media (max-width: 960px) {
  .regions-square-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px !important;
  }
}

@media (max-width: 600px) {
  .regions-square-grid {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
}

/* Modern Square Card Design */
.region-square-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 24px 22px 20px;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  min-height: 310px;
  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.28s ease;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.region-square-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff5500, #ff8c00);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.region-square-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 20px 35px -8px rgba(255, 85, 0, 0.16), 0 8px 20px rgba(15, 23, 42, 0.06);
  border-color: rgba(255, 85, 0, 0.45);
}

.region-square-card:hover::before {
  opacity: 1;
}

.region-square-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.region-square-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: rgba(255, 85, 0, 0.08);
  color: #ff5500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

.region-square-icon svg {
  width: 22px;
  height: 22px;
}

.region-square-card:hover .region-square-icon {
  background: linear-gradient(135deg, #ff5500, #ff7700);
  color: #ffffff;
  transform: scale(1.05);
}

.region-square-live {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(16, 185, 129, 0.1);
  color: #047857;
  border: 1px solid rgba(16, 185, 129, 0.25);
  font-size: 0.72rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 9999px;
  letter-spacing: 0.2px;
}

.region-live-dot {
  width: 7px;
  height: 7px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
  animation: pulse 1.6s infinite;
}

.region-square-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.region-square-category {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #ff5500;
  margin-bottom: 4px;
}

.region-square-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.35;
  margin: 0 0 8px 0;
}

.region-square-title a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.region-square-title a:hover {
  color: #ff5500;
}

.region-square-sub {
  font-size: 0.84rem;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 14px;
  flex-grow: 1;
}

.region-square-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.region-square-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.74rem;
  font-weight: 700;
  padding: 4px 9px;
  border-radius: 8px;
}

.region-square-badge.eta {
  background: rgba(255, 85, 0, 0.08);
  color: #ea580c;
  border: 1px solid rgba(255, 85, 0, 0.18);
}

.region-square-badge.kasko {
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #e2e8f0;
}

.region-square-badge svg {
  width: 13px;
  height: 13px;
}

.region-square-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 14px;
  border-top: 1px solid #f1f5f9;
  margin-top: auto;
}

.btn-square-detail {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 12px;
  border-radius: 12px;
  font-size: 0.84rem;
  font-weight: 800;
  background: #f8fafc;
  color: #1e293b;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-square-detail:hover {
  background: #0f172a;
  color: #ffffff;
  border-color: #0f172a;
  transform: translateY(-1px);
}

.btn-square-call {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 0.84rem;
  font-weight: 800;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  border: none;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
  transition: all 0.2s ease;
}

.btn-square-call:hover {
  background: linear-gradient(135deg, #059669, #047857);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.35);
  transform: translateY(-1px);
}

.btn-square-call svg {
  width: 15px;
  height: 15px;
}

@media (max-width: 600px) {
  .region-square-card {
    min-height: auto !important;
    padding: 18px 16px !important;
    border-radius: 16px !important;
  }
}
`;

if (!cssContent.includes('.regions-square-grid')) {
  cssContent += '\n' + newStyles;
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log('Added .regions-square-grid and square card styles to css/style.css');
}

// 2. 24 Regions data definition
const UMRANIYE_REGIONS = [
  { slug: 'umraniye-oto-cekici', name: 'Ümraniye Merkez', sub: 'Alemdağ Caddesi, Santral, Yamanevler, İnkılap', cat: 'umraniye', catName: 'Ümraniye & Mahalleleri', eta: '10 - 15 Dk' },
  { slug: 'dudullu-oto-cekici', name: 'Dudullu', sub: 'Aşağı Dudullu, Yukarı Dudullu, Tavukçuyolu', cat: 'umraniye', catName: 'Ümraniye & Mahalleleri', eta: '10 - 15 Dk' },
  { slug: 'tepeustu-oto-cekici', name: 'Tepeüstü', sub: 'Meydan AVM, Buyaka, IKEA Çevresi, TEM Bağlantısı', cat: 'umraniye', catName: 'Ümraniye & Mahalleleri', eta: '10 - 15 Dk' },
  { slug: 'serifali-oto-cekici', name: 'Şerifali', sub: 'Finanskent, Elmalıkent, Turgut Özal Bulvarı', cat: 'umraniye', catName: 'Ümraniye & Mahalleleri', eta: '10 - 15 Dk' },
  { slug: 'atakent-oto-cekici', name: 'Atakent', sub: 'Armağanevler, Mithatpaşa Caddesi, Çamlık', cat: 'umraniye', catName: 'Ümraniye & Mahalleleri', eta: '10 - 15 Dk' },
  { slug: 'cakmak-oto-cekici', name: 'Çakmak', sub: 'Çakmak Köprüsü, Saray Mahallesi, Balkan Cd.', cat: 'umraniye', catName: 'Ümraniye & Mahalleleri', eta: '10 - 15 Dk' },
  { slug: 'ihlamurkuyu-oto-cekici', name: 'Ihlamurkuyu', sub: 'Cemil Meriç, FSM Mahallesi, İstiklal', cat: 'umraniye', catName: 'Ümraniye & Mahalleleri', eta: '10 - 15 Dk' },
  { slug: 'kazim-karabekir-oto-cekici', name: 'Kazım Karabekir', sub: 'Dumlupınar, Hekimbaşı, Küçüksu Caddesi', cat: 'umraniye', catName: 'Ümraniye & Mahalleleri', eta: '10 - 15 Dk' },
  { slug: 'esensehir-oto-cekici', name: 'Esenşehir', sub: 'Esenkent, KADOSAN Sanayi Sitesi, Baraj Yolu', cat: 'umraniye', catName: 'Ümraniye & Mahalleleri', eta: '10 - 15 Dk' },
  { slug: 'imes-modoko-oto-cekici', name: 'İMES & MODOKO', sub: 'İMES Sanayi, MODOKO Mobilyacılar, DES Sanayi', cat: 'umraniye', catName: 'Ümraniye & Mahalleleri', eta: '10 - 15 Dk' },
  { slug: 'cekmekoy-oto-cekici', name: 'Çekmeköy', sub: 'Madenler Kavşağı, Mehmet Akif, Merkez', cat: 'komsu', catName: 'Komşu İlçe', eta: '10 - 15 Dk' },
  { slug: 'tasdelen-oto-cekici', name: 'Taşdelen', sub: 'Alemdağ, Güngören, Şile Yolu Çıkışı', cat: 'komsu', catName: 'Komşu İlçe', eta: '10 - 15 Dk' },
  { slug: 'atasehir-oto-cekici', name: 'Ataşehir', sub: 'İstanbul Finans Merkezi, Barbaros, Batı Ataşehir', cat: 'komsu', catName: 'Komşu İlçe', eta: '10 - 15 Dk' },
  { slug: 'icerenkoy-oto-cekici', name: 'İçerenköy', sub: 'Küçükbakkalköy, Hal Yolu, Carrefour Kavşağı', cat: 'komsu', catName: 'Komşu İlçe', eta: '10 - 15 Dk' },
  { slug: 'sancaktepe-oto-cekici', name: 'Sancaktepe', sub: 'Samandıra Gişeler, Eyüp Sultan, Şehir Hastanesi', cat: 'komsu', catName: 'Komşu İlçe', eta: '10 - 15 Dk' },
  { slug: 'sarigazi-oto-cekici', name: 'Sarıgazi', sub: 'Yenidoğan, Meclis Mahallesi, İnönü Caddesi', cat: 'komsu', catName: 'Komşu İlçe', eta: '10 - 15 Dk' },
  { slug: 'uskudar-oto-cekici', name: 'Üsküdar', sub: 'Çamlıca Tünelleri, Bulgurlu, Libadiye, Ünalan', cat: 'komsu', catName: 'Komşu İlçe', eta: '10 - 15 Dk' },
  { slug: 'altunizade-oto-cekici', name: 'Altunizade', sub: '15 Temmuz Köprüsü Katılımı, Acıbadem, Koşuyolu', cat: 'komsu', catName: 'Komşu İlçe', eta: '10 - 15 Dk' },
  { slug: 'kavacik-beykoz-oto-cekici', name: 'Kavacık & Beykoz', sub: 'FSM Köprüsü Ayağı, Rüzgarlıbahçe, Çavuşbaşı', cat: 'komsu', catName: 'Komşu İlçe', eta: '10 - 15 Dk' },
  { slug: 'kadikoy-goztepe-oto-cekici', name: 'Kadıköy & Göztepe', sub: 'Göztepe Köprüsü, Kozyatağı E-5, Bostancı', cat: 'komsu', catName: 'Komşu İlçe', eta: '10 - 15 Dk' },
  { slug: 'tem-otoyolu-oto-cekici', name: 'TEM Otoyolu', sub: 'Ümraniye Gişeleri, Çamlıca Gişeler, FSM Hattı', cat: 'otoyol', catName: 'Otoyol & Gişeler', eta: '10 - 15 Dk' },
  { slug: 'sile-otoyolu-oto-cekici', name: 'Şile Otoyolu', sub: 'Ümraniye - Çekmeköy - Taşdelen - Şile Aksı', cat: 'otoyol', catName: 'Otoyol & Gişeler', eta: '10 - 15 Dk' },
  { slug: 'kuzey-marmara-otoyolu-oto-cekici', name: 'Kuzey Marmara', sub: 'Reşadiye Gişeleri, Paşaköy Ayrımı, Hüseyinli', cat: 'otoyol', catName: 'Otoyol & Gişeler', eta: '10 - 15 Dk' },
  { slug: 'd100-e5-oto-cekici', name: 'D-100 (E-5) Karayolu', sub: 'Göztepe Köprüsü, Kozyatağı Kavşağı, Bostancı', cat: 'otoyol', catName: 'Otoyol & Gişeler', eta: '10 - 15 Dk' }
];

const pinIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>`;
const truckIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 17h2c.55 0 1-.45 1-1v-3.5c0-.38-.21-.71-.53-.88l-2.02-1.01A1.99 1.99 0 0018.55 10H16V7a1 1 0 00-1-1H3a1 1 0 00-1 1v10h2a3 3 0 006 0h4a3 3 0 006 0zm-12 1a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2zM16 11.5h2.55l1.6 1.07V15H16v-3.5zM4 8h10v7H4V8z"/></svg>`;
const highwayIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z"/></svg>`;

function buildSquareCardsHtml() {
  return UMRANIYE_REGIONS.map(r => {
    let iconSvg = pinIcon;
    if (r.cat === 'komsu') iconSvg = truckIcon;
    if (r.cat === 'otoyol') iconSvg = highwayIcon;

    return `        <!-- ${r.name} Kare Kart -->
        <article class="region-square-card region-card-luxury" data-category="${r.cat}">
          <div class="region-square-top">
            <div class="region-square-icon" aria-hidden="true">
              ${iconSvg}
            </div>
            <span class="region-square-live">
              <span class="region-live-dot"></span>
              7/24 Nöbetçi
            </span>
          </div>

          <div class="region-square-body">
            <span class="region-square-category">${r.catName}</span>
            <h2 class="region-square-title">
              <a href="${r.slug}.html">${r.name} Oto Çekici</a>
            </h2>
            <p class="region-square-sub">${r.sub}</p>

            <div class="region-square-badges">
              <span class="region-square-badge eta">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                ${r.eta} Varış
              </span>
              <span class="region-square-badge kasko">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                Kaskolu
              </span>
            </div>
          </div>

          <div class="region-square-actions">
            <a href="${r.slug}.html" class="btn-square-detail">Bölgeyi İncele →</a>
            <a href="tel:05441380734" class="btn-square-call" title="Hemen Ara">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
              <span>Ara</span>
            </a>
          </div>
        </article>`;
  }).join('\n\n');
}

// 3. Update bolgeler/index.html
let bolgelerHtml = fs.readFileSync(bolgelerHtmlPath, 'utf8');

const containerRegex = /<div id="regions-container"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newContainerHtml = `<div id="regions-container" class="regions-square-grid">
${buildSquareCardsHtml()}
      </div>
    </div>
  </section>`;

if (containerRegex.test(bolgelerHtml)) {
  bolgelerHtml = bolgelerHtml.replace(containerRegex, newContainerHtml);
  fs.writeFileSync(bolgelerHtmlPath, bolgelerHtml, 'utf8');
  console.log('Successfully updated bolgeler/index.html with modern square cards and generous spacing!');
} else {
  console.error('Could not match regions container in bolgeler/index.html');
}
