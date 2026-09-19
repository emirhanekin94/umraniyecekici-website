const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. Update index.html service cards 3-9
const indexPath = path.join(rootDir, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

const indexUpdates = [
  {
    target: `        <!-- 3. LASTİK TAMİR & DEĞİŞİM -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="images/lastik-tamir.webp" alt="Yol kenarı mobil lastik tamiri, stepne değişimi ve hava takviyesi" title="Lastik Tamir & Değişim" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🛠️ Mobil Yol Yardım</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">LASTİK TAMİR & DEĞİŞİM</h3>`,
    replacement: `        <!-- 3. LASTİK TAMİR & DEĞİŞİM -->
        <article class="service-card">
          <a href="hizmetler/lastik-tamir-degisim.html" class="service-card-img-wrap" style="display: block;">
            <img src="images/lastik-tamir.webp" alt="Yol kenarı mobil lastik tamiri, stepne değişimi ve hava takviyesi" title="Lastik Tamir & Değişim" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🛠️ Mobil Yol Yardım</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="hizmetler/lastik-tamir-degisim.html" style="color: inherit; text-decoration: none;">LASTİK TAMİR & DEĞİŞİM</a></h3>`
  },
  {
    target: `        <!-- 4. AKÜ TAKVİYE -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="images/aku-takviye.webp" alt="12V ve 24V profesyonel akü takviyesi ve yerinde çalıştırma yardımı" title="Akü Takviye" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🔋 12V / 24V Booster</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">AKÜ TAKVİYE</h3>`,
    replacement: `        <!-- 4. AKÜ TAKVİYE -->
        <article class="service-card">
          <a href="hizmetler/yol-yardim-aku-takviye.html" class="service-card-img-wrap" style="display: block;">
            <img src="images/aku-takviye.webp" alt="12V ve 24V profesyonel akü takviyesi ve yerinde çalıştırma yardımı" title="Akü Takviye" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🔋 12V / 24V Booster</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="hizmetler/yol-yardim-aku-takviye.html" style="color: inherit; text-decoration: none;">AKÜ TAKVİYE</a></h3>`
  },
  {
    target: `        <!-- 5. ARIZA YOL YARDIM -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="images/e-5-cekici.webp" alt="Otoyol ve E-5 karayolunda arıza yapan araçlar için acil emniyetli yol yardım çekicisi" title="Arıza Yol Yardım" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🛣️ Otoyol & E-5 Nöbetçi</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">ARIZA YOL YARDIM</h3>`,
    replacement: `        <!-- 5. ARIZA YOL YARDIM -->
        <article class="service-card">
          <a href="hizmetler/ariza-yol-yardim.html" class="service-card-img-wrap" style="display: block;">
            <img src="images/e-5-cekici.webp" alt="Otoyol ve E-5 karayolunda arıza yapan araçlar için acil emniyetli yol yardım çekicisi" title="Arıza Yol Yardım" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🛣️ Otoyol & E-5 Nöbetçi</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="hizmetler/ariza-yol-yardim.html" style="color: inherit; text-decoration: none;">ARIZA YOL YARDIM</a></h3>`
  },
  {
    target: `        <!-- 6. MOTOSİKLET ÇEKİCİ -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="images/motorsiklet-cekici.webp" alt="Özel sabitleme askı sistemli motosiklet çekici ve transfer hizmeti" title="Motosiklet Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🏍️ Özel Askı Sistemi</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">MOTOSİKLET ÇEKİCİ</h3>`,
    replacement: `        <!-- 6. MOTOSİKLET ÇEKİCİ -->
        <article class="service-card">
          <a href="hizmetler/motosiklet-cekici.html" class="service-card-img-wrap" style="display: block;">
            <img src="images/motorsiklet-cekici.webp" alt="Özel sabitleme askı sistemli motosiklet çekici ve transfer hizmeti" title="Motosiklet Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🏍️ Özel Askı Sistemi</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="hizmetler/motosiklet-cekici.html" style="color: inherit; text-decoration: none;">MOTOSİKLET ÇEKİCİ</a></h3>`
  },
  {
    target: `        <!-- 7. TEKNE & KARAVAN ÇEKİCİ -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="images/karavan-cekici.webp" alt="Ümraniye Marina ve sahil şeridi tekne taşıma, bot römorku ve karavan çekici" title="Tekne & Karavan Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">⚓ Marina & Karavan</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">TEKNE & KARAVAN ÇEKİCİ</h3>`,
    replacement: `        <!-- 7. TEKNE & KARAVAN ÇEKİCİ -->
        <article class="service-card">
          <a href="hizmetler/tekne-karavan-cekici.html" class="service-card-img-wrap" style="display: block;">
            <img src="images/karavan-cekici.webp" alt="Ümraniye Marina ve sahil şeridi tekne taşıma, bot römorku ve karavan çekici" title="Tekne & Karavan Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">⚓ Marina & Karavan</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="hizmetler/tekne-karavan-cekici.html" style="color: inherit; text-decoration: none;">TEKNE & KARAVAN ÇEKİCİ</a></h3>`
  },
  {
    target: `        <!-- 8. MİNİBÜS - TİCARİ ÇEKİCİ -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="images/ticari-cekici-4.webp" alt="Minibüs, panelvan ve hafif ticari araçlar için yüksek kapasiteli kurtarıcı filosu" title="Minibüs - Ticari Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🚐 5 Tona Kadar</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">MİNİBÜS - TİCARİ ÇEKİCİ</h3>`,
    replacement: `        <!-- 8. MİNİBÜS - TİCARİ ÇEKİCİ -->
        <article class="service-card">
          <a href="hizmetler/agir-vasita-kurtarma.html" class="service-card-img-wrap" style="display: block;">
            <img src="images/ticari-cekici-4.webp" alt="Minibüs, panelvan ve hafif ticari araçlar için yüksek kapasiteli kurtarıcı filosu" title="Minibüs - Ticari Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🚐 5 Tona Kadar</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="hizmetler/agir-vasita-kurtarma.html" style="color: inherit; text-decoration: none;">MİNİBÜS - TİCARİ ÇEKİCİ</a></h3>`
  },
  {
    target: `        <!-- 9. ŞEHİRLERARASI ARAÇ TAŞIMA -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="images/otomobil-cekici-1.webp" alt="Türkiye geneli 81 ile kaskolu ve faturalı şehirlerarası araç taşıma" title="Şehirlerarası Araç Taşıma" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🗺️ 81 İle Güvenli Nakliye</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">ŞEHİRLERARASI ARAÇ TAŞIMA</h3>`,
    replacement: `        <!-- 9. ŞEHİRLERARASI ARAÇ TAŞIMA -->
        <article class="service-card">
          <a href="hizmetler/sehirlerarasi-arac-tasima.html" class="service-card-img-wrap" style="display: block;">
            <img src="images/otomobil-cekici-1.webp" alt="Türkiye geneli 81 ile kaskolu ve faturalı şehirlerarası araç taşıma" title="Şehirlerarası Araç Taşıma" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🗺️ 81 İle Güvenli Nakliye</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="hizmetler/sehirlerarasi-arac-tasima.html" style="color: inherit; text-decoration: none;">ŞEHİRLERARASI ARAÇ TAŞIMA</a></h3>`
  }
];

indexUpdates.forEach((u, i) => {
  if (indexHtml.includes(u.target)) {
    indexHtml = indexHtml.replace(u.target, u.replacement);
    console.log(`Updated card ${i + 3} in index.html`);
  } else {
    console.warn(`Could not find target for card ${i + 3} in index.html`);
  }
});
fs.writeFileSync(indexPath, indexHtml, 'utf8');

// 2. Update hizmetler/index.html
const hizmetlerPath = path.join(rootDir, 'hizmetler', 'index.html');
let hizmetlerHtml = fs.readFileSync(hizmetlerPath, 'utf8');

const hizmetlerCards = [
  {
    num: 1,
    title: 'ÇEKİCİ & ARAÇ TAŞIMA',
    url: 'oto-cekici.html',
    badge: '⚡ 15 Dk Varış',
    img: '../images/otomobil-cekici-2.webp',
    alt: 'Kayar kasa oto çekici ve sıfır temasla güvenli araç taşıma hizmeti',
    target: `        <!-- 1. ÇEKİCİ & ARAÇ TAŞIMA -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="../images/otomobil-cekici-2.webp" alt="Kayar kasa oto çekici ve sıfır temasla güvenli araç taşıma hizmeti" title="Çekici & Araç Taşıma" loading="lazy" width="600" height="380">
            <span class="service-card-badge">⚡ 15 Dk Varış</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">ÇEKİCİ & ARAÇ TAŞIMA</h3>`,
    replacement: `        <!-- 1. ÇEKİCİ & ARAÇ TAŞIMA -->
        <article class="service-card">
          <a href="oto-cekici.html" class="service-card-img-wrap" style="display: block;">
            <img src="../images/otomobil-cekici-2.webp" alt="Kayar kasa oto çekici ve sıfır temasla güvenli araç taşıma hizmeti" title="Çekici & Araç Taşıma" loading="lazy" width="600" height="380">
            <span class="service-card-badge">⚡ 15 Dk Varış</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="oto-cekici.html" style="color: inherit; text-decoration: none;">ÇEKİCİ & ARAÇ TAŞIMA</a></h3>`
  },
  {
    num: 2,
    title: 'OTO KURTARMA',
    url: 'oto-kurtarma.html',
    badge: '🚨 7/24 Acil Nöbetçi',
    img: '../images/otomobil-cekici-3.webp',
    alt: '7/24 acil kaza ve arıza oto kurtarma vinç operasyonu',
    target: `        <!-- 2. OTO KURTARMA -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="../images/otomobil-cekici-3.webp" alt="7/24 acil kaza ve arıza oto kurtarma vinç operasyonu" title="Oto Kurtarma" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🚨 7/24 Acil Nöbetçi</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">OTO KURTARMA</h3>`,
    replacement: `        <!-- 2. OTO KURTARMA -->
        <article class="service-card">
          <a href="oto-kurtarma.html" class="service-card-img-wrap" style="display: block;">
            <img src="../images/otomobil-cekici-3.webp" alt="7/24 acil kaza ve arıza oto kurtarma vinç operasyonu" title="Oto Kurtarma" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🚨 7/24 Acil Nöbetçi</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="oto-kurtarma.html" style="color: inherit; text-decoration: none;">OTO KURTARMA</a></h3>`
  },
  {
    num: 3,
    title: 'LASTİK TAMİR & DEĞİŞİM',
    url: 'lastik-tamir-degisim.html',
    target: `        <!-- 3. LASTİK TAMİR & DEĞİŞİM -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="../images/lastik-tamir.webp" alt="Yol kenarı mobil lastik tamiri, stepne değişimi ve hava takviyesi" title="Lastik Tamir & Değişim" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🛠️ Mobil Yol Yardım</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">LASTİK TAMİR & DEĞİŞİM</h3>`,
    replacement: `        <!-- 3. LASTİK TAMİR & DEĞİŞİM -->
        <article class="service-card">
          <a href="lastik-tamir-degisim.html" class="service-card-img-wrap" style="display: block;">
            <img src="../images/lastik-tamir.webp" alt="Yol kenarı mobil lastik tamiri, stepne değişimi ve hava takviyesi" title="Lastik Tamir & Değişim" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🛠️ Mobil Yol Yardım</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="lastik-tamir-degisim.html" style="color: inherit; text-decoration: none;">LASTİK TAMİR & DEĞİŞİM</a></h3>`
  },
  {
    num: 4,
    title: 'AKÜ TAKVİYE',
    url: 'yol-yardim-aku-takviye.html',
    target: `        <!-- 4. AKÜ TAKVİYE -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="../images/aku-takviye.webp" alt="12V ve 24V profesyonel akü takviyesi ve yerinde çalıştırma yardımı" title="Akü Takviye" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🔋 12V / 24V Booster</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">AKÜ TAKVİYE</h3>`,
    replacement: `        <!-- 4. AKÜ TAKVİYE -->
        <article class="service-card">
          <a href="yol-yardim-aku-takviye.html" class="service-card-img-wrap" style="display: block;">
            <img src="../images/aku-takviye.webp" alt="12V ve 24V profesyonel akü takviyesi ve yerinde çalıştırma yardımı" title="Akü Takviye" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🔋 12V / 24V Booster</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="yol-yardim-aku-takviye.html" style="color: inherit; text-decoration: none;">AKÜ TAKVİYE</a></h3>`
  },
  {
    num: 5,
    title: 'ARIZA YOL YARDIM',
    url: 'ariza-yol-yardim.html',
    target: `        <!-- 5. ARIZA YOL YARDIM -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="../images/e-5-cekici.webp" alt="Otoyol ve E-5 karayolunda arıza yapan araçlar için acil emniyetli yol yardım çekicisi" title="Arıza Yol Yardım" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🛣️ Otoyol & E-5 Nöbetçi</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">ARIZA YOL YARDIM</h3>`,
    replacement: `        <!-- 5. ARIZA YOL YARDIM -->
        <article class="service-card">
          <a href="ariza-yol-yardim.html" class="service-card-img-wrap" style="display: block;">
            <img src="../images/e-5-cekici.webp" alt="Otoyol ve E-5 karayolunda arıza yapan araçlar için acil emniyetli yol yardım çekicisi" title="Arıza Yol Yardım" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🛣️ Otoyol & E-5 Nöbetçi</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="ariza-yol-yardim.html" style="color: inherit; text-decoration: none;">ARIZA YOL YARDIM</a></h3>`
  },
  {
    num: 6,
    title: 'MOTOSİKLET ÇEKİCİ',
    url: 'motosiklet-cekici.html',
    target: `        <!-- 6. MOTOSİKLET ÇEKİCİ -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="../images/motorsiklet-cekici.webp" alt="Özel sabitleme askı sistemli motosiklet çekici ve transfer hizmeti" title="Motosiklet Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🏍️ Özel Askı Sistemi</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">MOTOSİKLET ÇEKİCİ</h3>`,
    replacement: `        <!-- 6. MOTOSİKLET ÇEKİCİ -->
        <article class="service-card">
          <a href="motosiklet-cekici.html" class="service-card-img-wrap" style="display: block;">
            <img src="../images/motorsiklet-cekici.webp" alt="Özel sabitleme askı sistemli motosiklet çekici ve transfer hizmeti" title="Motosiklet Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🏍️ Özel Askı Sistemi</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="motosiklet-cekici.html" style="color: inherit; text-decoration: none;">MOTOSİKLET ÇEKİCİ</a></h3>`
  },
  {
    num: 7,
    title: 'TEKNE & KARAVAN ÇEKİCİ',
    url: 'tekne-karavan-cekici.html',
    target: `        <!-- 7. TEKNE & KARAVAN ÇEKİCİ -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="../images/karavan-cekici.webp" alt="Ümraniye Marina ve sahil şeridi tekne taşıma, bot römorku ve karavan çekici" title="Tekne & Karavan Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">⚓ Marina & Karavan</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">TEKNE & KARAVAN ÇEKİCİ</h3>`,
    replacement: `        <!-- 7. TEKNE & KARAVAN ÇEKİCİ -->
        <article class="service-card">
          <a href="tekne-karavan-cekici.html" class="service-card-img-wrap" style="display: block;">
            <img src="../images/karavan-cekici.webp" alt="Ümraniye Marina ve sahil şeridi tekne taşıma, bot römorku ve karavan çekici" title="Tekne & Karavan Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">⚓ Marina & Karavan</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="tekne-karavan-cekici.html" style="color: inherit; text-decoration: none;">TEKNE & KARAVAN ÇEKİCİ</a></h3>`
  },
  {
    num: 8,
    title: 'MİNİBÜS - TİCARİ ÇEKİCİ',
    url: 'agir-vasita-kurtarma.html',
    target: `        <!-- 8. MİNİBÜS - TİCARİ ÇEKİCİ -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="../images/ticari-cekici-4.webp" alt="Minibüs, panelvan ve hafif ticari araçlar için yüksek kapasiteli kurtarıcı filosu" title="Minibüs - Ticari Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🚐 5 Tona Kadar</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">MİNİBÜS - TİCARİ ÇEKİCİ</h3>`,
    replacement: `        <!-- 8. MİNİBÜS - TİCARİ ÇEKİCİ -->
        <article class="service-card">
          <a href="agir-vasita-kurtarma.html" class="service-card-img-wrap" style="display: block;">
            <img src="../images/ticari-cekici-4.webp" alt="Minibüs, panelvan ve hafif ticari araçlar için yüksek kapasiteli kurtarıcı filosu" title="Minibüs - Ticari Çekici" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🚐 5 Tona Kadar</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="agir-vasita-kurtarma.html" style="color: inherit; text-decoration: none;">MİNİBÜS - TİCARİ ÇEKİCİ</a></h3>`
  },
  {
    num: 9,
    title: 'ŞEHİRLERARASI ARAÇ TAŞIMA',
    url: 'sehirlerarasi-arac-tasima.html',
    target: `        <!-- 9. ŞEHİRLERARASI ARAÇ TAŞIMA -->
        <article class="service-card">
          <div class="service-card-img-wrap">
            <img src="../images/otomobil-cekici-1.webp" alt="Türkiye geneli 81 ile kaskolu ve faturalı şehirlerarası araç taşıma" title="Şehirlerarası Araç Taşıma" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🗺️ 81 İle Güvenli Nakliye</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-title">ŞEHİRLERARASI ARAÇ TAŞIMA</h3>`,
    replacement: `        <!-- 9. ŞEHİRLERARASI ARAÇ TAŞIMA -->
        <article class="service-card">
          <a href="sehirlerarasi-arac-tasima.html" class="service-card-img-wrap" style="display: block;">
            <img src="../images/otomobil-cekici-1.webp" alt="Türkiye geneli 81 ile kaskolu ve faturalı şehirlerarası araç taşıma" title="Şehirlerarası Araç Taşıma" loading="lazy" width="600" height="380">
            <span class="service-card-badge">🗺️ 81 İle Güvenli Nakliye</span>
          </a>
          <div class="service-card-body">
            <h3 class="service-title"><a href="sehirlerarasi-arac-tasima.html" style="color: inherit; text-decoration: none;">ŞEHİRLERARASI ARAÇ TAŞIMA</a></h3>`
  }
];

hizmetlerCards.forEach(c => {
  if (hizmetlerHtml.includes(c.target)) {
    hizmetlerHtml = hizmetlerHtml.replace(c.target, c.replacement);
    console.log(`Updated card ${c.num} in hizmetler/index.html`);
  } else {
    console.warn(`Could not find target for card ${c.num} in hizmetler/index.html`);
  }
});
fs.writeFileSync(hizmetlerPath, hizmetlerHtml, 'utf8');

console.log('Finished enhancing service cards!');
