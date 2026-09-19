const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const bolgelerDir = path.join(rootDir, 'bolgeler');

// Wide Anatolian Side Coverage Map
const WIDE_ANATOLIAN_MAP_EMBED = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120365.4055276356!2d29.051213459143666!3d41.025345778272535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac89a695dfd05%3A0x280e729a8a7db9d1!2zw5xtcmFuaXllL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="Ümraniye ve Çevre İlçeler Kapsama Haritası"></iframe>`;

const regionsData = [
  // 1. Ümraniye & Mahalleleri
  {
    slug: 'umraniye-oto-cekici',
    name: 'Ümraniye Merkez',
    fullName: 'Ümraniye Merkez & Santral',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'Ümraniye Oto Çekici 7/24 | Santral & Alemdağ Caddesi En Yakın Kurtarma - 0544 138 07 34',
    metaDesc: 'Ümraniye Merkez, Alemdağ Caddesi, Santral Meydanı, Yamanevler ve İnkılap mahallelerinde 7/24 nöbetçi oto çekici, oto kurtarma, akü takviye ve kaza yardımı. 10-15 dakikada intikal: 0544 138 07 34.',
    keywords: 'ümraniye oto çekici, ümraniye çekici, ümraniye acil oto kurtarma, alemdağ caddesi çekici, ümraniye santral çekici, yamanevler çekici, ümraniye yol yardım, ümraniye en yakın çekici',
    mainRoads: 'Alemdağ Caddesi, Mithatpaşa Caddesi, Sütçü İmam Caddesi, Santral Meydanı, Çarşı ve Yamanevler Metro Çıkışları',
    industrialPoints: 'Ümraniye Oto Sanayi Sitesi, Santral Esnafı, Alemdağ Yetkili Servisler Koridoru',
    photo: '../images/otomobil-cekici-1.webp',
    photoCaption: 'Ümraniye Alemdağ Caddesi ve Santral mevkiinde binek aracın sıfır temas kayar kasa platforma yüklenmesi.',
    neighborSlugs: ['dudullu-oto-cekici', 'tepeustu-oto-cekici', 'cakmak-oto-cekici', 'atakent-oto-cekici', 'serifali-oto-cekici', 'tem-otoyolu-oto-cekici'],
    faqs: [
      { q: "Ümraniye Merkez ve Alemdağ Caddesi'nde çekici ne kadar sürede ulaşır?", a: "Alemdağ Caddesi ve Santral çevresinde 7/24 hazır bekleyen nöbetçi çekicimizle ortalama 10 ila 15 dakika içinde aracınızın yanındayız." },
      { q: "Alemdağ Caddesi yoğun trafikte arıza yapan aracı nasıl çekiyorsunuz?", a: "Hızlı manevra kabiliyetine sahip hidrolik kayar kasalı ve dar sokak tipi kurtarıcılarımızla trafiği tıkamadan dakikalar içinde emniyetli yükleme yapıyoruz." },
      { q: "Ümraniye Sanayi Sitesi veya anlaşmalı yetkili servislere araç çekiyor musunuz?", a: "Evet, aracınızı dilediğiniz özel veya yetkili servise ya da Ümraniye Oto Sanayi ustalarına %100 taşıma kaskosuyla güvenle ulaştırıyoruz." },
      { q: "Yerinde akü takviye ve lastik değişimi yapıyor musunuz?", a: "Evet, Ümraniye merkez mahallelerinde taşınabilir profesyonel booster cihazımız ile yerinde akü desteği ve stepne değişimi sağlıyoruz." },
      { q: "Ümraniye çekici fiyatları nasıl belirlenir?", a: "Aracınızın tipi, konumu ve gideceği mesafeye göre şeffaf sabit fiyat verilir. Telefonda teyit edilen fiyat harici sürpriz maliyet çıkarılmaz." }
    ]
  },
  {
    slug: 'dudullu-oto-cekici',
    name: 'Dudullu',
    fullName: 'Aşağı & Yukarı Dudullu',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'Dudullu Oto Çekici 7/24 | Aşağı & Yukarı Dudullu Çekici - 0544 138 07 34',
    metaDesc: 'Dudullu, Aşağı Dudullu, Yukarı Dudullu, Dudullu Meydan ve Tavukçuyolu mevkiinde 7/24 en yakın oto çekici ve yol yardım. 15 dakikada intikal: 0544 138 07 34.',
    keywords: 'dudullu oto çekici, aşağı dudullu çekici, yukarı dudullu çekici, dudullu oto kurtarma, dudullu yol yardım, tavukçuyolu çekici',
    mainRoads: 'Dudullu Meydanı, Alemdağ Yolu, Tavukçuyolu Caddesi, Acısu Caddesi, Necip Fazıl Kısakürek Caddesi',
    industrialPoints: 'Dudullu Organize Sanayi Bölgesi (OSB), İMES Sanayi Girişi, KADOSAN Bağlantısı',
    photo: '../images/otomobil-cekici-2.webp',
    photoCaption: 'Aşağı ve Yukarı Dudullu kavşağında mekanik arızalı aracın hidrolik platform ile güvenli transferi.',
    neighborSlugs: ['umraniye-oto-cekici', 'imes-modoko-oto-cekici', 'serifali-oto-cekici', 'cekmekoy-oto-cekici', 'esensehir-oto-cekici', 'tepeustu-oto-cekici'],
    faqs: [
      { q: "Dudullu'da çekici ne kadar sürede intikal eder?", a: "Dudullu Meydan ve Tavukçuyolu kavşağındaki ekiplerimiz ortalama 10-15 dakikada adresinize varır." },
      { q: "Aşağı Dudullu ve Yukarı Dudullu sokaklarında dar alan kurtarması var mı?", a: "Evet, kaza yapmış veya direksiyonu kilitlenmiş araçları özel aparatlarımızla hasarsız çıkarıyoruz." },
      { q: "Dudullu'dan Ümraniye Sanayi veya Bostancı Sanayi'ye taşıma yapıyor musunuz?", a: "Evet, talep ettiğiniz her sanayi sitesine veya servise ekonomik sabit fiyat garantisiyle nakil sağlıyoruz." },
      { q: "Motosiklet ve hafif ticari araç çekiyor musunuz?", a: "Özel tekerlek bağlama takozlarımızla hem motosikletleri hem de kamyonet/minibüsleri güvenle taşıyoruz." },
      { q: "Gece nöbetçi çekiciniz var mı?", a: "Haftanın 7 günü 24 saat Dudullu bölgesinde aktif nöbetçi filomuz bulunmaktadır." }
    ]
  },
  {
    slug: 'tepeustu-oto-cekici',
    name: 'Tepeüstü',
    fullName: 'Tepeüstü & Ihlamurkuyu Kavşağı',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'Tepeüstü Oto Çekici 7/24 | Meydan AVM & IKEA Çevresi Kurtarma - 0544 138 07 34',
    metaDesc: 'Tepeüstü Köprülü Kavşağı, Meydan AVM, Buyaka, IKEA ve TEM bağlantısında 7/24 acil oto çekici ve yol yardım. 10-15 dakikada hızlı intikal: 0544 138 07 34.',
    keywords: 'tepeüstü oto çekici, tepeüstü çekici, ikea ümraniye çekici, meydan avm çekici, buyaka çekici, tepeüstü köprülü kavşak çekici',
    mainRoads: 'Tepeüstü Köprülü Kavşağı, Poyraz Caddesi, Balkan Caddesi, Şile Otoyolu Tepeüstü Ayrımı, TEM Katılımı',
    industrialPoints: 'Meydan AVM, Buyaka AVM, IKEA Otoparkları, Ümraniye Vergi Dairesi Çevresi',
    photo: '../images/otomobil-cekici-3.webp',
    photoCaption: 'Tepeüstü Köprülü Kavşağı ve IKEA çevresinde arıza yapan lüks SUV aracın hasarsız nakli.',
    neighborSlugs: ['umraniye-oto-cekici', 'cakmak-oto-cekici', 'ihlamurkuyu-oto-cekici', 'cekmekoy-oto-cekici', 'tem-otoyolu-oto-cekici', 'sile-otoyolu-oto-cekici'],
    faqs: [
      { q: "Tepeüstü Kavşağı ve TEM katılımında arıza yapan araçlara bakar mısınız?", a: "Evet, Tepeüstü köprülü kavşağı ve bağlantı yollarında acil emniyet şeridi protokolüyle kurtarma yapıyoruz." },
      { q: "Meydan AVM veya IKEA otoparkından araç çekilebilir mi?", a: "Kapalı ve açık otoparklara uyumlu alçak şaseli kurtarıcılarımızla sıfır sürtünmeyle çekim sağlıyoruz." },
      { q: "Şile Otoyolu Tepeüstü ayrımında arıza olursa ne yapmalıyım?", a: "Dörtlülerinizi yakıp reflektör koyduktan sonra 0544 138 07 34 numaramızı arayın veya WhatsApp'tan konum gönderin." },
      { q: "Tepeüstü çekici ücreti ne kadar?", a: "Mesafe ve araç durumuna göre en uygun sabit fiyat garantisi veriyoruz. Ekstra sürpriz maliyet çıkarılmaz." },
      { q: "Akü takviyesi ve lastik patlamasında yol yardımı var mı?", a: "Evet, mobil yol yardım ekibimiz yerinde akü desteği ve stepne değişimi yapmaktadır." }
    ]
  },
  {
    slug: 'serifali-oto-cekici',
    name: 'Şerifali',
    fullName: 'Şerifali & Finanskent Çevresi',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'Şerifali Oto Çekici 7/24 | Finanskent & Elmalıkent Oto Kurtarma - 0544 138 07 34',
    metaDesc: 'Şerifali Mahallesi, Finanskent, Elmalıkent, Turgut Özal Bulvarı ve Barbaros Caddesi civarında 7/24 profesyonel oto çekici ve acil yol yardım. 0544 138 07 34.',
    keywords: 'şerifali oto çekici, şerifali çekici, finanskent çekici, elmalıkent çekici, ümraniye şerifali yol yardım, turgut özal bulvarı çekici',
    mainRoads: 'Turgut Özal Bulvarı, Barbaros Caddesi, Beyan Sokak, Tavukçuyolu Bağlantısı, Hendem Caddesi',
    industrialPoints: 'Şerifali Plaza & Finanskent Siteler Bölgesi, Ataşehir Sınır İş Merkezleri',
    photo: '../images/luks-arac-cekici.webp',
    photoCaption: 'Şerifali Finanskent bölgesinde kapalı otoparktan VIP lüks aracın aparatlı transferi.',
    neighborSlugs: ['atasehir-oto-cekici', 'dudullu-oto-cekici', 'atakent-oto-cekici', 'umraniye-oto-cekici', 'imes-modoko-oto-cekici', 'tem-otoyolu-oto-cekici'],
    faqs: [
      { q: "Şerifali siteler bölgesinde otoparktan araç alıyor musunuz?", a: "Evet, site açık ve kapalı otoparklarından hasarsız araç tahliyesi yapıyoruz." },
      { q: "Lüks ve otomatik vitesli araç çekimi yapılıyor mu?", a: "Kademeli hidrolik kayar kasa ve tekerlek koruma aparatlarımızla şanzımana yük binmeden çekim yapıyoruz." },
      { q: "Şerifali'den Ataşehir veya Dudullu'ya intikal süresi nedir?", a: "Konumunuza en geç 10-15 dakika içinde ulaşıyoruz." },
      { q: "Şerifali çekici fiyatı nedir?", a: "Aracınızın türü ve varış noktasına göre net ve sabit fiyat veriyoruz." },
      { q: "Fatura kesiyor musunuz?", a: "Evet, tüm çekici ve yol yardım hizmetlerimiz kurumsal faturalıdır." }
    ]
  },
  {
    slug: 'atakent-oto-cekici',
    name: 'Atakent',
    fullName: 'Atakent, Armağanevler & Çamlık',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'Atakent Oto Çekici 7/24 | Armağanevler & Çamlık Oto Kurtarma - 0544 138 07 34',
    metaDesc: 'Ümraniye Atakent, Armağanevler, Çamlık ve Mithatpaşa Caddesi üzerinde 7/24 acil oto çekici, kurtarma ve akü takviye. 0544 138 07 34.',
    keywords: 'atakent oto çekici, armağanevler çekici, çamlık mahallesi çekici, ümraniye atakent yol yardım, mithatpaşa caddesi çekici',
    mainRoads: 'Mithatpaşa Caddesi, Reşitpaşa Caddesi, Dicle Caddesi, Çamlık Parkı Aksı, Armağanevler Meydanı',
    industrialPoints: 'Atakent Siteleri, Çamlık Ticaret Alanları, Ümraniye Çarşı Bağlantısı',
    photo: '../images/otomobil-cekici-4.webp',
    photoCaption: 'Atakent ve Armağanevler caddelerinde arıza yapan otomatik vites aracın kaskolu taşınması.',
    neighborSlugs: ['umraniye-oto-cekici', 'cakmak-oto-cekici', 'serifali-oto-cekici', 'atasehir-oto-cekici', 'ihlamurkuyu-oto-cekici', 'd100-e5-oto-cekici'],
    faqs: [
      { q: "Atakent ve Armağanevler'e çekici kaç dakikada gelir?", a: "Bölgedeki nöbetçi çekicimizle ortalama 10-15 dakikada aracınızın yanındayız." },
      { q: "Mithatpaşa Caddesi üzerinde arıza yapan aracı çekiyor musunuz?", a: "Evet, trafik akışını emniyete alarak hızlı ve güvenli yükleme sağlıyoruz." },
      { q: "Otomatik vites aracım P modunda kilitlendi, nasıl çekeceksiniz?", a: "Tekerlek kaydırma bebekleri (aparatları) kullanarak şanzıman kilidine zarar vermeden aracı kasaya alıyoruz." },
      { q: "Akü bittiğinde Atakent'e takviye desteği var mı?", a: "Mobil takviye cihazımızla yerinde motor çalıştırma desteği sunuyoruz." },
      { q: "Ödeme nasıl yapılabilir?", a: "Nakit, IBAN/Havale veya kredi kartı ile ödeme yapabilirsiniz." }
    ]
  },
  {
    slug: 'cakmak-oto-cekici',
    name: 'Çakmak',
    fullName: 'Çakmak Mahallesi & Saray Çevresi',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'Çakmak Oto Çekici 7/24 | Saray Mahallesi & Çakmak Çekici - 0544 138 07 34',
    metaDesc: 'Çakmak Mahallesi, Saray Mahallesi, İnkılap ve Balkan Caddesi civarında 7/24 nöbetçi oto çekici ve kaza kurtarma. 0544 138 07 34.',
    keywords: 'çakmak oto çekici, çakmak mahallesi çekici, saray mahallesi çekici, ümraniye çakmak yol yardım, balkan caddesi çekici',
    mainRoads: 'Çakmak Köprüsü, Balkan Caddesi, Küçüksu Caddesi Çakmak Çıkışı, Saray Mahallesi İş Vadisi',
    industrialPoints: 'Saray Mahallesi Plaza Bölgesi, Çakmak Sanayi Esnafı, Alemdağ Caddesi Girişi',
    photo: '../images/kazali-arac-cekici.webp',
    photoCaption: 'Çakmak Köprüsü üzerinde kaza yapan aracın vinçli kurtarıcıyla sıfır hasarla emniyete alınması.',
    neighborSlugs: ['umraniye-oto-cekici', 'tepeustu-oto-cekici', 'atakent-oto-cekici', 'ihlamurkuyu-oto-cekici', 'kazim-karabekir-oto-cekici', 'tem-otoyolu-oto-cekici'],
    faqs: [
      { q: "Çakmak Mahallesi'nde en yakın çekiciyi nasıl çağırırım?", a: "0544 138 07 34'ü doğrudan arayabilir veya WhatsApp üzerinden anında canlı konum atabilirsiniz." },
      { q: "Çakmak Köprüsü üzerinde arıza durumunda ne yapmalıyım?", a: "Trafiğin güvenliğini sağlayıp reflektörünüzü yerleştirin, ekibimiz 10 dakikada intikal edecektir." },
      { q: "Kazalı araç kurtarması yapıyor musunuz?", a: "Evet, kaza yapmış, yürümeyen veya tekeri kopmuş araçları vinçli çekicimizle kurtarıyoruz." },
      { q: "Çakmak'tan Bostancı veya Dudullu sanayiye çekim ne kadar sürer?", a: "Aracınız güvenle yüklenip en geç 20-25 dakikada ilgili servise teslim edilir." },
      { q: "Fiyatlar sabit mi?", a: "Evet, baştan konuşulan fiyat geçerlidir, sonradan ekleme yapılmaz." }
    ]
  },
  {
    slug: 'ihlamurkuyu-oto-cekici',
    name: 'Ihlamurkuyu',
    fullName: 'Ihlamurkuyu & Cemil Meriç',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'Ihlamurkuyu Oto Çekici 7/24 | Cemil Meriç & FSM Mahallesi - 0544 138 07 34',
    metaDesc: 'Ihlamurkuyu, Cemil Meriç, Fatih Sultan Mehmet ve İstiklal mahallelerinde 7/24 oto çekici, vinç ve yol yardım servisi. 0544 138 07 34.',
    keywords: 'ıhlamurkuyu oto çekici, cemil meriç çekici, ümraniye ıhlamurkuyu çekici, fsm mahallesi çekici, istiklal mahallesi çekici',
    mainRoads: 'Alemdağ Caddesi Üst Hattı, İstiklal Caddesi, Cemil Meriç Kültür Merkezi Aksı, Ihlamurkuyu Metro',
    industrialPoints: 'Ihlamurkuyu Çarşı, Tepeüstü Kavşağı Girişi, Çevre Tamirhaneler',
    photo: '../images/aku-takviye.webp',
    photoCaption: 'Ihlamurkuyu ve Cemil Meriç mahallesinde aküsü biten araca yerinde 12V profesyonel booster takviyesi.',
    neighborSlugs: ['tepeustu-oto-cekici', 'cakmak-oto-cekici', 'umraniye-oto-cekici', 'kazim-karabekir-oto-cekici', 'cekmekoy-oto-cekici', 'sile-otoyolu-oto-cekici'],
    faqs: [
      { q: "Ihlamurkuyu'da çekici bekleme süresi ne kadardır?", a: "Merkezi konumumuz sayesinde çağrınızdan sonra 10-15 dakika içinde ulaşıyoruz." },
      { q: "Yokuşlu dar sokaklarda araç kurtarabiliyor musunuz?", a: "Evet, dar sokak manevrasına uygun kayar kasalı özel araçlarımız mevcuttur." },
      { q: "Lastiğim yarıldı, yol yardımınız var mı?", a: "Stepne değişimi veya en yakın oto lastikçiye güvenli nakil sağlıyoruz." },
      { q: "Kaskolu taşıma yapıyor musunuz?", a: "Tüm çekici taşımalarımız %100 yük ve nakliyat kaskosu güvencesindedir." },
      { q: "Gece hizmetiniz var mı?", a: "7 gün 24 saat kesintisiz hizmet vermekteyiz." }
    ]
  },
  {
    slug: 'kazim-karabekir-oto-cekici',
    name: 'Kazım Karabekir',
    fullName: 'Kazım Karabekir & Hekimbaşı',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'Kazım Karabekir Oto Çekici 7/24 | Dumlupınar & Hekimbaşı Çekici - 0544 138 07 34',
    metaDesc: 'Kazım Karabekir, Dumlupınar, Hekimbaşı, İnkılap ve Küçüksu Caddesi aksında 7/24 nöbetçi oto çekici ve yol yardım. 0544 138 07 34.',
    keywords: 'kazım karabekir oto çekici, hekimbaşı çekici, dumlupınar çekici, küçüksu caddesi çekici, ümraniye hekimbaşı kurtarma',
    mainRoads: 'Küçüksu Caddesi, Hekimbaşı Çiftlik Caddesi, Dumlupınar Yolu, İnkılap Bağlantısı',
    industrialPoints: 'Hekimbaşı Spor Tesisleri Çevresi, Küçüksu Sanayi Esnafı, Beykoz Bağlantı Yolu',
    photo: '../images/suv-cekici.webp',
    photoCaption: 'Hekimbaşı ve Küçüksu virajlarında çamura kayan 4x4 SUV aracın vinçle kurtarılması.',
    neighborSlugs: ['umraniye-oto-cekici', 'cakmak-oto-cekici', 'ihlamurkuyu-oto-cekici', 'kavacik-beykoz-oto-cekici', 'uskudar-oto-cekici', 'tem-otoyolu-oto-cekici'],
    faqs: [
      { q: "Hekimbaşı ve Küçüksu bağlantısında çekici ne kadar sürede gelir?", a: "Ekiplerimiz ortalama 10-15 dakikada bölgeye intikal etmektedir." },
      { q: "Çamura saplanan veya kanala kayan araç kurtarılır mı?", a: "Güçlü hidrolik vinç donanımımızla her türlü saplanma ve kaza durumunu çözüyoruz." },
      { q: "Beykoz veya Ümraniye merkeze araç nakli yapıyor musunuz?", a: "Evet, aracınızı istediğiniz noktaya güvenle taşıyoruz." },
      { q: "Hafta sonu açık mısınız?", a: "Pazar günleri ve resmi tatiller dahil 7/24 açığız." },
      { q: "Çekici ücretini nasıl öğrenebilirim?", a: "0544 138 07 34'ü arayarak bulunduğunuz yeri ve aracı söylemeniz yeterlidir." }
    ]
  },
  {
    slug: 'esensehir-oto-cekici',
    name: 'Esenşehir',
    fullName: 'Esenşehir, Esenkent & KADOSAN',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'Esenşehir Oto Çekici 7/24 | Esenkent & KADOSAN Sanayi Kurtarma - 0544 138 07 34',
    metaDesc: 'Esenşehir, Esenkent, KADOSAN Oto Sanayi Sitesi ve Baraj Yolu üzerinde 7/24 oto çekici, kamyonet ve yol yardım. 0544 138 07 34.',
    keywords: 'esenşehir oto çekici, esenkent çekici, kadosan çekici, baraj yolu çekici, ümraniye esenşehir kurtarma, kadosan sanayi çekici',
    mainRoads: 'Baraj Yolu Caddesi, KADOSAN Giriş Caddesi, Esenkent Ana Bulvarı, Natoyolu Bağlantısı',
    industrialPoints: 'KADOSAN Oto Sanayi Sitesi, Esenşehir İmalat Sanayicileri, Dudullu OSB Doğu Kapısı',
    photo: '../images/ticari-cekici.webp',
    photoCaption: 'KADOSAN Sanayi Sitesi kapısında hafif ticari kamyonetin tamir servisine kaskolu nakli.',
    neighborSlugs: ['imes-modoko-oto-cekici', 'dudullu-oto-cekici', 'sarigazi-oto-cekici', 'sancaktepe-oto-cekici', 'serifali-oto-cekici', 'tem-otoyolu-oto-cekici'],
    faqs: [
      { q: "KADOSAN Oto Sanayi'ye araç çekimi yapıyor musunuz?", a: "Evet, KADOSAN'daki tüm ustalara ve servislere günlük onlarca araç nakli yapmaktayız." },
      { q: "Esenşehir Baraj Yolu'nda arızalanan araca kaç dakikada ulaşırsınız?", a: "Bölgedeki nöbetçi aracımız ortalama 10-15 dakikada yanınızda olur." },
      { q: "Ağır ticari veya kamyonet çekiyor musunuz?", a: "Evet, hafif ticari, panelvan, minibüs ve kamyonetler için uygun platformlarımız vardır." },
      { q: "Kaza sonrası sigorta işlemleri için tutanak desteği veriyor musunuz?", a: "Saha ekiplerimiz kaza tutanağı ve fotoğraflama konusunda size rehberlik eder." },
      { q: "Gece geç saatte servis kapalıysa aracımı nereye çekebilirsiniz?", a: "Güvenli yediemin otoparkına ya da sabah servise bırakılmak üzere belirttiğiniz adrese çekebiliriz." }
    ]
  },
  {
    slug: 'imes-modoko-oto-cekici',
    name: 'İMES & MODOKO',
    fullName: 'İMES Sanayi, MODOKO & DES',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'İMES & MODOKO Oto Çekici 7/24 | DES Sanayi Sitesi Kurtarma - 0544 138 07 34',
    metaDesc: 'İMES Sanayi Sitesi, MODOKO Mobilyacılar Sitesi, DES Sanayi ve KADOSAN çevresinde 7/24 profesyonel oto çekici ve ticari araç taşıma. 0544 138 07 34.',
    keywords: 'imes oto çekici, modoko çekici, des sanayi çekici, ümraniye sanayi çekici, kadosan oto kurtarma, dudullu osb çekici',
    mainRoads: 'MODOKO Caddesi, İMES A Kapısı, DES Sanayi Bulvarı, Dudullu OSB 1. Cadde',
    industrialPoints: 'İMES Sanayi Sitesi, MODOKO Mobilyacılar Kenti, DES Sanayi Sitesi Kompleksi',
    photo: '../images/kamyonet-cekici.webp',
    photoCaption: 'İMES ve MODOKO sanayi bölgesinde ticari panelvan ve yük araçlarının hidrolik kasa transferi.',
    neighborSlugs: ['dudullu-oto-cekici', 'esensehir-oto-cekici', 'serifali-oto-cekici', 'atasehir-oto-cekici', 'cekmekoy-oto-cekici', 'tem-otoyolu-oto-cekici'],
    faqs: [
      { q: "İMES Sanayi Sitesi içinde çekici çağırabilir miyim?", a: "Evet, sanayi içi dar sokaklara ve atölye kapılarına rahatlıkla giren çekicilerimizle dakikalar içinde ulaşıyoruz." },
      { q: "MODOKO ve DES bölgesinde ticari araç taşıması yapıyor musunuz?", a: "Her model ticari panelvan, kamyonet, forklift ve jeneratör taşımacılığı yapıyoruz." },
      { q: "İMES'ten başka bir şehre araç gönderebilir miyim?", a: "Evet, şehirlerarası kaskolu araç nakliye hizmetimiz de mevcuttur." },
      { q: "Sanayi esnafına özel uygun fiyatınız var mı?", a: "Sanayi esnafı ve sürekli çalıştığımız firmalara özel indirimli fiyat tarifesi sunuyoruz." },
      { q: "İletişim numarası nedir?", a: "7/24 doğrudan 0544 138 07 34 hattımızdan ulaşabilirsiniz." }
    ]
  },

  // 2. Komşu İlçeler
  {
    slug: 'cekmekoy-oto-cekici',
    name: 'Çekmeköy',
    fullName: 'Çekmeköy Merkez & Madenler',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Çekmeköy Oto Çekici 7/24 | Madenler & Merkez Acil Kurtarma - 0544 138 07 34',
    metaDesc: 'Çekmeköy Merkez, Madenler, Mehmet Akif, Hamidiye ve Şile Otoyolu girişinde 7/24 acil oto çekici ve oto kurtarma. 0544 138 07 34.',
    keywords: 'çekmeköy oto çekici, çekmeköy çekici, madenler çekici, çekmeköy oto kurtarma, çekmeköy yol yardım, şile yolu çekmeköy',
    mainRoads: 'Madenler Kavşağı, Şile Otoyolu Çekmeköy Katılımı, Mimar Sinan Caddesi, Çavuşbaşı Caddesi',
    industrialPoints: 'Çekmeköy Metro İstasyonu Çevresi, Madenler Meydanı, Doğa Parkı Aksı',
    photo: '../images/otomobil-cekici-5.webp',
    photoCaption: 'Çekmeköy Madenler kavşağında kaza yapan aracın kayar platforma emniyetle yüklenmesi.',
    neighborSlugs: ['tasdelen-oto-cekici', 'dudullu-oto-cekici', 'tepeustu-oto-cekici', 'sancaktepe-oto-cekici', 'sile-otoyolu-oto-cekici', 'kuzey-marmara-otoyolu-oto-cekici'],
    faqs: [
      { q: "Çekmeköy Madenler'e çekici ne kadar sürede gelir?", a: "Ümraniye-Çekmeköy sınır hattında hazır bekleyen aracımız 10-15 dakikada ulaşır." },
      { q: "Çekmeköy sitelerinden araç çekiyor musunuz?", a: "Evet, kapalı ve açık site otoparklarından güvenli nakil gerçekleştiriyoruz." },
      { q: "Şile Otoyolu Çekmeköy çıkışında arıza kurtarması var mı?", a: "Otoyol emniyet şeridi protokollerine uygun tepe lambalı araçlarımızla acil intikal sağlıyoruz." },
      { q: "Çekmeköy çekici fiyatları nasıl?", a: "Mesafeye göre şeffaf ve ekonomik fiyat sunuyoruz." },
      { q: "WhatsApp'tan konum gönderebilir miyim?", a: "Evet, web sitemizdeki Canlı Konum At butonundan tek tıkla konum atabilirsiniz." }
    ]
  },
  {
    slug: 'tasdelen-oto-cekici',
    name: 'Taşdelen',
    fullName: 'Taşdelen, Alemdağ & Güngören',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Taşdelen Oto Çekici 7/24 | Alemdağ & Taşdelen Kurtarma - 0544 138 07 34',
    metaDesc: 'Taşdelen, Alemdağ, Güngören Mahallesi ve Şile Yolu güzergahında 7/24 nöbetçi oto çekici ve yol yardım hizmeti. 0544 138 07 34.',
    keywords: 'taşdelen oto çekici, alemdağ çekici, taşdelen çekici, güngören çekici, şile yolu taşdelen kurtarma',
    mainRoads: 'Turgut Özal Caddesi Taşdelen, Şile Otoyolu Tünelleri, Alemdağ Merkez Yolu, Güngören Caddesi',
    industrialPoints: 'Taşdelen Meydanı, Alemdağ Orman Kampüsü Bağlantısı, Şile Otoyolu Tesisleri',
    photo: '../images/otoyol-yardim-cekici.webp',
    photoCaption: 'Taşdelen tünel çıkışında arıza yapan aracın yüksek güvenlikli reflektör eşliğinde taşınması.',
    neighborSlugs: ['cekmekoy-oto-cekici', 'sile-otoyolu-oto-cekici', 'kuzey-marmara-otoyolu-oto-cekici', 'sarigazi-oto-cekici', 'sancaktepe-oto-cekici', 'dudullu-oto-cekici'],
    faqs: [
      { q: "Taşdelen ve Alemdağ'a çekici intikali kaç dakika?", a: "Taşdelen ve Şile yolu aksındaki araçlarımız ortalama 10-15 dakikada varış sağlar." },
      { q: "Alemdağ ormanlık alanda yolda kalan araç çekilir mi?", a: "Evet, arazi kurtarma donanımlı vinçli çekicilerimizle hizmet veriyoruz." },
      { q: "Taşdelen'den Ümraniye veya Kadıköy'e araç taşır mısınız?", a: "Evet, dilediğiniz ilçe veya servise güvenle araç nakli yapıyoruz." },
      { q: "Akü takviyesi var mı?", a: "Evet, yerinde taşınabilir akü booster ile takviye yapıyoruz." },
      { q: "Acil iletişim numarası nedir?", a: "0544 138 07 34 üzerinden anında görüşebilirsiniz." }
    ]
  },
  {
    slug: 'atasehir-oto-cekici',
    name: 'Ataşehir',
    fullName: 'Ataşehir & Finans Merkezi',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Ataşehir Oto Çekici 7/24 | İstanbul Finans Merkezi & Barbaros - 0544 138 07 34',
    metaDesc: 'Ataşehir Merkez, Batı Ataşehir, İstanbul Finans Merkezi, Barbaros ve Atatürk Mahallelerinde 7/24 lüks oto çekici ve yol yardım. 0544 138 07 34.',
    keywords: 'ataşehir oto çekici, ataşehir çekici, finans merkezi çekici, batı ataşehir çekici, ataşehir oto kurtarma, barbaros mahallesi çekici',
    mainRoads: 'Ataşehir Bulvarı, Vedat Günyol Caddesi, Finans Merkezi Ana Caddesi, TEM Ataşehir Katılımı',
    industrialPoints: 'İstanbul Uluslararası Finans Merkezi, Watergarden, Palladium, Metropol İstanbul',
    photo: '../images/luks-arac-cekici-1.webp',
    photoCaption: 'Ataşehir Finans Merkezi rezidans otoparkında alçak şasi spor arabanın hasarsız nakli.',
    neighborSlugs: ['serifali-oto-cekici', 'icerenkoy-oto-cekici', 'atakent-oto-cekici', 'umraniye-oto-cekici', 'kadikoy-goztepe-oto-cekici', 'tem-otoyolu-oto-cekici'],
    faqs: [
      { q: "İstanbul Finans Merkezi ve Ataşehir Plazalar bölgesine çekici gelir mi?", a: "Evet, bölge sınırındaki araçlarımızla 10-15 dakikada kapınızdayız." },
      { q: "Lüks spor araç veya SUV taşıyor musunuz?", a: "Alçak tabanlı spor arabalar için özel eğimli açılan tampon korumalı kayar kasa çekicilerimiz mevcuttur." },
      { q: "Kapalı rezidans otoparklarından araç çıkarıyor musunuz?", a: "Evet, alçak tavanlı kurtarıcılarımız ve manevra tekerleklerimizle rezidans otoparklarından hasarsız tahliye yapıyoruz." },
      { q: "Ataşehir çekici fiyatları nasıl belirlenir?", a: "Sabit fiyat garantisiyle en ekonomik teklifi telefon açtığınız anda sunuyoruz." },
      { q: "Haftanın her günü nöbetçi var mı?", a: "Evet, 7/24 kesintisiz devriyedeyiz." }
    ]
  },
  {
    slug: 'icerenkoy-oto-cekici',
    name: 'İçerenköy',
    fullName: 'İçerenköy & Küçükbakkalköy',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'İçerenköy Oto Çekici 7/24 | Küçükbakkalköy & Kozyatağı Çevresi - 0544 138 07 34',
    metaDesc: 'İçerenköy, Küçükbakkalköy, Bostancı Köprüsü ve Kozyatağı E-5 kavşağında 7/24 nöbetçi oto çekici ve yol yardım. 0544 138 07 34.',
    keywords: 'içerenköy oto çekici, küçükbakkalköy çekici, içerenköy oto kurtarma, bostancı köprüsü çekici, hal yolu çekici',
    mainRoads: 'Hal Yolu Caddesi, Bostancı Köprüsü Katılımı, Küçükbakkalköy Prestij Caddesi, E-5 Yan Yol',
    industrialPoints: 'İçerenköy Carrefour Kavşağı, Bostancı Oto Sanayi Girişi, Sebze Meyve Hali',
    photo: '../images/e-5-cekici.webp',
    photoCaption: 'İçerenköy E-5 bağlantı kavşağında motor arızası yaşayan sedan aracın acil çekimi.',
    neighborSlugs: ['atasehir-oto-cekici', 'kadikoy-goztepe-oto-cekici', 'd100-e5-oto-cekici', 'serifali-oto-cekici', 'dudullu-oto-cekici', 'altunizade-oto-cekici'],
    faqs: [
      { q: "İçerenköy ve Hal Yolu'nda çekici ne kadar sürede ulaşır?", a: "Ortalama 10-15 dakikada olay yerine intikal ediyoruz." },
      { q: "Bostancı Oto Sanayi Sitesi'ne araç çekiyor musunuz?", a: "Evet, Bostancı Sanayi'deki motor, kaporta ve elektrik ustalarına hızlı nakil yapıyoruz." },
      { q: "E-5 veya TEM bağlantısında arıza olursa güvenlik önlemi alıyor musunuz?", a: "Trafik reflektörleri ve çakar lambalarımızla güvenli yükleme alanı oluşturuyoruz." },
      { q: "Fiyat bilgisi nasıl alınır?", a: "0544 138 07 34 numarasından anında şeffaf fiyat alabilirsiniz." },
      { q: "Kredi kartı kabul ediyor musunuz?", a: "Evet, tüm kartlarla ödeme yapabilirsiniz." }
    ]
  },
  {
    slug: 'sancaktepe-oto-cekici',
    name: 'Sancaktepe',
    fullName: 'Sancaktepe Merkez & Samandıra',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Sancaktepe Oto Çekici 7/24 | Samandıra & Merkez Kurtarma - 0544 138 07 34',
    metaDesc: 'Sancaktepe Merkez, Samandıra, Eyüp Sultan Mahallesi ve TEM Samandıra Gişeleri civarında 7/24 en yakın oto çekici. 0544 138 07 34.',
    keywords: 'sancaktepe oto çekici, samandıra çekici, sancaktepe oto kurtarma, samandıra gişeler çekici, sancaktepe yol yardım',
    mainRoads: 'Samandıra Gişeleri, Atatürk Caddesi, Osmangazi Caddesi, TEM Samandıra Katılımı',
    industrialPoints: 'Sancaktepe Şehir Hastanesi Çevresi, Samandıra Sanayi Bölgesi, TEM Lojistik Üsleri',
    photo: '../images/kazali-arac-cekici-1.webp',
    photoCaption: 'Samandıra Gişeleri yakınında kaza yapan ticari aracın vinçli çekiciyle kurtarılması.',
    neighborSlugs: ['sarigazi-oto-cekici', 'esensehir-oto-cekici', 'cekmekoy-oto-cekici', 'tem-otoyolu-oto-cekici', 'dudullu-oto-cekici', 'kuzey-marmara-otoyolu-oto-cekici'],
    faqs: [
      { q: "Samandıra Gişeleri ve TEM katılımında çekici çağırabilir miyim?", a: "Evet, otoyol ve gişe noktalarında 7/24 hazır devriye araçlarımız bulunmaktadır." },
      { q: "Sancaktepe Şehir Hastanesi civarında arıza yapan araca kaç dakikada gelirsiniz?", a: "Yaklaşık 10-15 dakika içinde ulaşıyoruz." },
      { q: "Kamyonet ve panelvan tipi araç taşınabilir mi?", a: "Geniş platformlu kurtarıcılarımız hafif ticari araçlar için uygundur." },
      { q: "Çekici kaskosu var mı?", a: "Tüm araç nakillerimiz tam kapsamlı taşıma kaskosu altındadır." },
      { q: "WhatsApp'tan canlı konum nasıl gönderilir?", a: "Sitedeki WhatsApp butonuna basarak doğrudan konumunuzu iletebilirsiniz." }
    ]
  },
  {
    slug: 'sarigazi-oto-cekici',
    name: 'Sarıgazi',
    fullName: 'Sarıgazi & Yenidoğan',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Sarıgazi Oto Çekici 7/24 | Yenidoğan & Meclis Mahallesi - 0544 138 07 34',
    metaDesc: 'Sarıgazi, Yenidoğan, Meclis Mahallesi ve İnönü Caddesi üzerinde 7/24 hızlı oto çekici ve akü takviye hizmeti. 0544 138 07 34.',
    keywords: 'sarıgazi oto çekici, yenidoğan çekici, sarıgazi çekici, meclis mahallesi çekici, sancaktepe sarıgazi yol yardım',
    mainRoads: 'İnönü Caddesi, Demokrasi Caddesi, Sarıgazi Meydanı, Yenidoğan Yolu, Barajyolu Caddesi',
    industrialPoints: 'Sarıgazi Çarşı, Sancaktepe Kaymakamlık Çevresi, KADOSAN Sınırı',
    photo: '../images/minibus-cekici.webp',
    photoCaption: 'Sarıgazi ve Yenidoğan hattında yürümeyen minibüsün platform çekiciye yüklenişi.',
    neighborSlugs: ['sancaktepe-oto-cekici', 'esensehir-oto-cekici', 'cekmekoy-oto-cekici', 'tasdelen-oto-cekici', 'dudullu-oto-cekici', 'tem-otoyolu-oto-cekici'],
    faqs: [
      { q: "Sarıgazi ve Yenidoğan'a varış süreniz ne kadar?", a: "Bölgeye en geç 10-15 dakika içinde ulaşıyoruz." },
      { q: "Yenidoğan virajlı ve yokuşlu sokaklarında çekici çalışabilir mi?", a: "Evet, güçlü vinçli ve kompakt kasalı araçlarımız bu tip yollarda uzmandır." },
      { q: "Lastik patlaması ve akü bitmesinde destek veriyor musunuz?", a: "Yerinde akü takviyesi ve stepne takma desteğimiz 7/24 aktiftir." },
      { q: "Sarıgazi çekici ücreti sabit midir?", a: "Evet, telefonda anlaştığımız fiyat son fiyattır." },
      { q: "Nasıl ulaşabilirim?", a: "0544 138 07 34 üzerinden günün her saati arayabilirsiniz." }
    ]
  },
  {
    slug: 'uskudar-oto-cekici',
    name: 'Üsküdar',
    fullName: 'Üsküdar, Çamlıca & Bulgurlu',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Üsküdar Oto Çekici 7/24 | Çamlıca, Bulgurlu & Ünalan Kurtarma - 0544 138 07 34',
    metaDesc: 'Üsküdar, Çamlıca Tepesi, Bulgurlu, Ferah, Ünalan ve Libadiye Caddesi mevkiinde 7/24 oto çekici ve yol yardım. 0544 138 07 34.',
    keywords: 'üsküdar oto çekici, çamlıca çekici, bulgurlu çekici, ünalan çekici, libadiye caddesi çekici, üsküdar yol yardım',
    mainRoads: 'Libadiye Caddesi, Çamlıca Tünelleri, Bulgurlu Caddesi, Kısıklı Caddesi, Ünalan Metrobüs Aksı',
    industrialPoints: 'Emaar Square Çevresi, Çamlıca Kulesi Yolu, Altunizade Bağlantı Hattı',
    photo: '../images/motorsiklet-cekici.webp',
    photoCaption: 'Çamlıca ve Libadiye caddesinde arızalanan motosikletin özel gergi askısıyla taşınması.',
    neighborSlugs: ['altunizade-oto-cekici', 'umraniye-oto-cekici', 'kadikoy-goztepe-oto-cekici', 'atakent-oto-cekici', 'tem-otoyolu-oto-cekici', 'd100-e5-oto-cekici'],
    faqs: [
      { q: "Çamlıca Tünelleri ve Libadiye Caddesi'nde arıza kurtarması yapıyor musunuz?", a: "Evet, tünel çıkışları ve ana arterlerde hızlı ve güvenli tahliye yapıyoruz." },
      { q: "Bulgurlu ve Ünalan sokaklarına çekici kaç dakikada varır?", a: "Ortalama 10 ila 15 dakika içinde adrese ulaşıyoruz." },
      { q: "Kaza yapan araçların sigorta ve kasko naklini karşılıyor musunuz?", a: "Kasko ve sigorta için gerekli fatura ve yol yardım evraklarını eksiksiz veriyoruz." },
      { q: "Otomatik vitesli arabam hareket etmiyor, zarar görür mü?", a: "Özel aparatlarımızla tekerler kilitliyken dahi aracınıza en ufak zarar gelmez." },
      { q: "Telefon numaranız nedir?", a: "7/24 Acil Çağrı: 0544 138 07 34." }
    ]
  },
  {
    slug: 'altunizade-oto-cekici',
    name: 'Altunizade',
    fullName: 'Altunizade & 15 Temmuz Köprüsü',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Altunizade Oto Çekici 7/24 | Acıbadem & 15 Temmuz Köprüsü Girişi - 0544 138 07 34',
    metaDesc: 'Altunizade Kavşağı, 15 Temmuz Şehitler Köprüsü katılımı, Acıbadem ve Koşuyolu aksında 7/24 hızlı oto çekici. 0544 138 07 34.',
    keywords: 'altunizade oto çekici, acıbadem çekici, 15 temmuz köprüsü çekici, altunizade köprülü kavşak çekici, koşuyolu çekici',
    mainRoads: '15 Temmuz Şehitler Köprüsü Katılımı, Kısıklı Caddesi, Acıbadem Caddesi, O-1 Otoyol Bağlantısı',
    industrialPoints: 'Altunizade Metrobüs Durağı, Capitol AVM Çevresi, Koşuyolu Medikal Merkezleri',
    photo: '../images/otomobil-cekici.webp',
    photoCaption: '15 Temmuz Şehitler Köprüsü Altunizade ayrımında arıza yapan otomobilin hızlı tahliyesi.',
    neighborSlugs: ['uskudar-oto-cekici', 'kadikoy-goztepe-oto-cekici', 'umraniye-oto-cekici', 'd100-e5-oto-cekici', 'kavacik-beykoz-oto-cekici', 'tem-otoyolu-oto-cekici'],
    faqs: [
      { q: "15 Temmuz Şehitler Köprüsü Altunizade katılımında arıza yaptım, ne yapmalıyım?", a: "Güvenli şeride geçip hemen 0544 138 07 34'ü arayın, köprü çıkışındaki aracımız 10 dakikada yanınızda olacaktır." },
      { q: "Altunizade'den Avrupa Yakası'na veya Anadolu Yakası servislere çekim var mı?", a: "Her iki yakaya da güvenli köprü geçişli araç nakli sağlıyoruz." },
      { q: "Altunizade çekici ücreti ne kadardır?", a: "Güzergah ve araç durumuna göre en rekabetçi sabit fiyat sunulur." },
      { q: "Motosiklet ve lüks araç çekimi yapılır mı?", a: "Evet, özel sabitleme donanımlı filomuzla lüks segment ve motosiklet taşıyoruz." },
      { q: "Akü takviyesi hizmetiniz var mı?", a: "Evet, 12V ve 24V profesyonel booster takviye cihazımız mevcuttur." }
    ]
  },
  {
    slug: 'kavacik-beykoz-oto-cekici',
    name: 'Kavacık & Beykoz',
    fullName: 'Kavacık, Rüzgarlıbahçe & Beykoz',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Kavacık Oto Çekici 7/24 | Beykoz & FSM Köprüsü Çıkışı Kurtarma - 0544 138 07 34',
    metaDesc: 'Kavacık Kavşağı, FSM Köprüsü Anadolu ayağı, Rüzgarlıbahçe ve Beykoz Konakları civarında 7/24 en yakın oto çekici. 0544 138 07 34.',
    keywords: 'kavacık oto çekici, beykoz çekici, rüzgarlıbahçe çekici, fsm köprüsü çekici, kavacık köprülü kavşak çekici',
    mainRoads: 'Fatih Sultan Mehmet Köprüsü Çıkışı, Kavacık Köprülü Kavşağı, Rüzgarlıbahçe Bulvarı, Çavuşbaşı Yolu',
    industrialPoints: 'Kavacık Plaza Bölgesi, Rüzgarlıbahçe İş Merkezleri, Beykoz Sahil Yolu',
    photo: '../images/özel-cekici.webp',
    photoCaption: 'FSM Köprüsü Kavacık çıkışında mekanik kilitli aracın tekerlek aparatı ile hasarsız yüklenmesi.',
    neighborSlugs: ['tem-otoyolu-oto-cekici', 'kazim-karabekir-oto-cekici', 'umraniye-oto-cekici', 'cekmekoy-oto-cekici', 'altunizade-oto-cekici', 'kuzey-marmara-otoyolu-oto-cekici'],
    faqs: [
      { q: "FSM Köprüsü Kavacık çıkışında arıza durumunda kaç dakikada gelirsiniz?", a: "Köprü ayağı nöbetçi çekicimizle ortalama 10 dakika içinde yanınızdayız." },
      { q: "Beykoz sahil veya orman yollarında çekim yapıyor musunuz?", a: "Evet, Riva, Çavuşbaşı ve Beykoz Konakları dahil tüm Beykoz'a hizmet veriyoruz." },
      { q: "Avrupa Yakası'na köprüden araç geçiriyor musunuz?", a: "Evet, FSM üzerinden Avrupa Yakası servislerine doğrudan teslimat yapıyoruz." },
      { q: "Kavacık çekici fiyatı nedir?", a: "En uygun sabit fiyat garantisi veriyoruz, ek masraf çıkarılmaz." },
      { q: "7/24 arayabilir miyim?", a: "Günün ve gecenin her saati 0544 138 07 34 hattımız aktiftir." }
    ]
  },
  {
    slug: 'kadikoy-goztepe-oto-cekici',
    name: 'Kadıköy & Göztepe',
    fullName: 'Kadıköy, Göztepe & Kozyatağı',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Kadıköy & Göztepe Oto Çekici 7/24 | Kozyatağı & E-5 Çekici - 0544 138 07 34',
    metaDesc: 'Göztepe Köprüsü, Kozyatağı Kavşağı, Kadıköy Merkez ve E-5 karayolunda 7/24 acil oto çekici ve kurtarma desteği. 0544 138 07 34.',
    keywords: 'kadıköy oto çekici, göztepe çekici, kozyatağı çekici, göztepe köprüsü çekici, bostancı çekici, kadıköy oto kurtarma',
    mainRoads: 'D-100 (E-5) Göztepe Köprüsü, Fahrettin Kerim Gökay Caddesi, Libadiye Girişi, Kozyatağı Kavşağı',
    industrialPoints: 'Göztepe Eğitim Araştırma Çevresi, Kozyatağı Metro, Bostancı Oto Sanayi Bağlantısı',
    photo: '../images/otomobil-cekici-2.webp',
    photoCaption: 'Göztepe Köprüsü üzerinde arıza yapan aracın E-5 trafiğini aksatmadan hızlı tahliyesi.',
    neighborSlugs: ['d100-e5-oto-cekici', 'icerenkoy-oto-cekici', 'atasehir-oto-cekici', 'uskudar-oto-cekici', 'altunizade-oto-cekici', 'umraniye-oto-cekici'],
    faqs: [
      { q: "Göztepe Köprüsü ve E-5 üzerinde arıza yapan araca çekici kaç dakikada gelir?", a: "E-5 devriye kurtarıcımız 10-15 dakikada ulaşır." },
      { q: "Bostancı Sanayi Sitesi'ne araç çektirmenin ücreti nedir?", a: "Konumunuza göre minimum taban fiyattan garantili taşıma yapılır." },
      { q: "Kadıköy dar sokaklarında araç çekebilir misiniz?", a: "Kıvrak manevralı şehir içi kurtarıcılarımız dar sokaklara rahatlıkla girer." },
      { q: "Akü bitmesi durumunda Göztepe'ye geliyor musunuz?", a: "Evet, mobil takviye aracımız hızlıca gelerek akünüzü canlandırır." },
      { q: "Nasıl iletişim kurabilirim?", a: "0544 138 07 34 numarasından bizi arayabilir ya da WhatsApp'tan yazabilirsiniz." }
    ]
  },

  // 3. Otoyollar & Gişeler
  {
    slug: 'tem-otoyolu-oto-cekici',
    name: 'TEM Otoyolu',
    fullName: 'TEM Otoyolu (Ümraniye Gişeleri & Çamlıca)',
    category: 'otoyol',
    categoryName: 'Otoyollar & Gişeler',
    eta: '10 - 15 Dk',
    title: 'TEM Otoyolu Oto Çekici 7/24 | Ümraniye Gişeleri - Çamlıca - FSM - 0544 138 07 34',
    metaDesc: 'TEM Otoyolu Ümraniye Gişeleri, Çamlıca Gişeleri, Tepeüstü ve FSM Köprüsü güzergahında 7/24 otoyol acil çekici ve yol yardım. 0544 138 07 34.',
    keywords: 'tem otoyolu oto çekici, tem ümraniye çekici, çamlıca gişeler çekici, tem otoyolu yol yardım, otoyol çekici, fsm bağlantı çekici',
    mainRoads: 'TEM O-2 Otoyolu, Ümraniye Gişeleri, Çamlıca Gişeler, Tepeüstü Katılımı, Kavacık FSM Ayrımı',
    industrialPoints: 'Otoyol Dinlenme Cepleri, Çamlıca Gişe Sahası, Dudullu TEM Bağlantı Tesisleri',
    photo: '../images/kazali-arac-cekici-2.webp',
    photoCaption: 'TEM Ümraniye Gişeleri yakınında emniyet şeridinde kalan aracın tepe lambalı koruma ile yüklenişi.',
    neighborSlugs: ['tepeustu-oto-cekici', 'umraniye-oto-cekici', 'kavacik-beykoz-oto-cekici', 'dudullu-oto-cekici', 'sile-otoyolu-oto-cekici', 'kuzey-marmara-otoyolu-oto-cekici'],
    faqs: [
      { q: "TEM Otoyolu emniyet şeridinde kaldım, ne yapmalıyım?", a: "Aracınızın dörtlülerini yakın, reflektör koyun ve hemen 0544 138 07 34'ü arayın. Nöbetçi otoyol çekicimiz emniyetle yanınıza ulaşacaktır." },
      { q: "Otoyolda çekici intikal süresi ne kadardır?", a: "TEM üzerindeki hazır nöbet noktalarımız sayesinde ortalama 10-15 dakikada varış sağlıyoruz." },
      { q: "TEM'de lastik yarılması veya akü arızasına bakıyor musunuz?", a: "Evet, emniyet şeridinde yerinde stepne değişimi veya aracı çekiciye alarak güvenli tamirciye nakil yapıyoruz." },
      { q: "Otoyol çekici fiyatları farklı mıdır?", a: "Fiyatlarımız otoyol için de sabit ve şeffaftır; telefonda konuşulan ücret dışında ek masraf alınmaz." },
      { q: "Büyük araç ve kamyonet çekimi var mı?", a: "Evet, otoyolda her tonajda binek, SUV ve hafif ticari aracı taşıyabilen platformlarımız mevcuttur." }
    ]
  },
  {
    slug: 'sile-otoyolu-oto-cekici',
    name: 'Şile Otoyolu',
    fullName: 'Şile Otoyolu (Ümraniye - Çekmeköy - Şile Hattı)',
    category: 'otoyol',
    categoryName: 'Otoyollar & Gişeler',
    eta: '10 - 15 Dk',
    title: 'Şile Otoyolu Oto Çekici 7/24 | Ümraniye - Çekmeköy - Taşdelen - 0544 138 07 34',
    metaDesc: 'Şile Otoyolu üzerinde Ümraniye, Çekmeköy, Taşdelen, Alemdağ ve Ömerli istikametinde 7/24 kesintisiz otoyol oto çekici. 0544 138 07 34.',
    keywords: 'şile otoyolu oto çekici, şile yolu çekici, ümraniye şile yolu çekici, taşdelen şile yolu kurtarma, ömerli çekici',
    mainRoads: 'Şile Otoyolu Ümraniye Çıkışı, Taşdelen Tünelleri, Nişantepe, Ömerli Virajları, Şile Sahil Ayrımı',
    industrialPoints: 'Şile Yolu Petrol İstasyonları, Taşdelen Tünel Çıkışları, Alemdağ Orman Bağlantısı',
    photo: '../images/suv-cekici-1.webp',
    photoCaption: 'Şile Otoyolu Ömerli virajında kaygan zeminde kalan 4x4 SUV aracın güvenli tahliyesi.',
    neighborSlugs: ['tepeustu-oto-cekici', 'cekmekoy-oto-cekici', 'tasdelen-oto-cekici', 'tem-otoyolu-oto-cekici', 'kuzey-marmara-otoyolu-oto-cekici', 'umraniye-oto-cekici'],
    faqs: [
      { q: "Şile Otoyolu üzerinde virajlı bölgede kaldım, güvenli çekim nasıl yapılıyor?", a: "Yüksek görünürlüklü çakar lambalarımız ve emniyet dubalarımızla otoyolda güvenli koridor açarak yükleme yapıyoruz." },
      { q: "Taşdelen veya Ömerli civarına kaç dakikada varırsınız?", a: "Şile Yolu devriyemiz çağrınızdan sonra 10-15 dakikada yanınızda olur." },
      { q: "Şile'den Ümraniye veya Kadıköy'e araç getirebilir misiniz?", a: "Evet, Şile'nin tüm köylerinden ve otoyolundan şehir içine güvenli araç transferi yapıyoruz." },
      { q: "Arazide kuma veya şarampole kayan araç kurtarılır mı?", a: "Ağır hizmet çelik vinçlerimiz ve kurtarma makaralarımızla araca zarar vermeden çekim sağlıyoruz." },
      { q: "İletişim numarası nedir?", a: "Hemen 0544 138 07 34'ü arayabilirsiniz." }
    ]
  },
  {
    slug: 'kuzey-marmara-otoyolu-oto-cekici',
    name: 'Kuzey Marmara Otoyolu',
    fullName: 'Kuzey Marmara (Reşadiye & Çekmeköy Bağlantısı)',
    category: 'otoyol',
    categoryName: 'Otoyollar & Gişeler',
    eta: '10 - 15 Dk',
    title: 'Kuzey Marmara Otoyolu Oto Çekici 7/24 | Reşadiye - Paşaköy - 0544 138 07 34',
    metaDesc: 'Kuzey Marmara Otoyolu Reşadiye, Çekmeköy, Alemdağ ve Paşaköy Gişeleri hattında 7/24 yüksek hızlı otoyol çekici ve yol yardım. 0544 138 07 34.',
    keywords: 'kuzey marmara oto çekici, reşadiye çekici, paşaköy gişeler çekici, kuzey marmara yol yardım, kmo çekici',
    mainRoads: 'KMO Reşadiye Gişeleri, Paşaköy Kavşağı, Hüseyinli Tünelleri, Çekmeköy KMO Bağlantı Yolu',
    industrialPoints: 'KMO Reşadiye Dinlenme Tesisleri, Paşaköy Gişe Sahası, Lojistik Park Çıkışları',
    photo: '../images/arac-cekici.webp',
    photoCaption: 'Kuzey Marmara Otoyolu Reşadiye gişelerinde yüksek hızlı otoyol emniyetli kurtarma operasyonu.',
    neighborSlugs: ['tasdelen-oto-cekici', 'cekmekoy-oto-cekici', 'sancaktepe-oto-cekici', 'sile-otoyolu-oto-cekici', 'tem-otoyolu-oto-cekici', 'kavacik-beykoz-oto-cekici'],
    faqs: [
      { q: "Kuzey Marmara Otoyolu'nda yüksek hızda arıza yaparsam ne yapmalıyım?", a: "Aracınızı mümkünse cebe veya en sağ emniyet şeridine çekin, araçtan inip bariyer arkasına geçin ve 0544 138 07 34'ü arayın." },
      { q: "KMO Reşadiye ve Paşaköy gişelerine çekici intikali kaç dakika sürer?", a: "Gişe çıkışlarındaki nöbetçi aracımız 10-15 dakikada aracınızın yanındadır." },
      { q: "Kuzey Marmara Otoyolu tünellerinde çekim yapıyor musunuz?", a: "Evet, otoyol güvenlik standartlarına uygun sertifikalı ekipmanla tünel içi ve çıkışı kurtarmaları yapıyoruz." },
      { q: "Şehirlerarası veya havaalanı yolundaki araçları çekiyor musunuz?", a: "İstanbul Havalimanı ve Sabiha Gökçen bağlantılarında 7/24 nakil hizmetimiz vardır." },
      { q: "Sabit fiyat alabilir miyim?", a: "Evet, mesafeye ve gişe geçişine göre önceden teyit edilen net fiyat verilir." }
    ]
  },
  {
    slug: 'd100-e5-oto-cekici',
    name: 'D-100 (E-5) Karayolu',
    fullName: 'D-100 / E-5 Karayolu (Göztepe - Kozyatağı - Bostancı)',
    category: 'otoyol',
    categoryName: 'Otoyollar & Gişeler',
    eta: '10 - 15 Dk',
    title: 'D-100 E-5 Karayolu Oto Çekici 7/24 | Göztepe - Kozyatağı - Bostancı - 0544 138 07 34',
    metaDesc: 'D-100 (E-5) Karayolu Göztepe, Kozyatağı, Bostancı, Küçükyalı ve Ümraniye bağlantı yolunda 7/24 acil oto çekici ve yol yardım. 0544 138 07 34.',
    keywords: 'd100 oto çekici, e5 oto çekici, göztepe e5 çekici, kozyatağı e5 çekici, e-5 yol yardım, bostancı köprüsü çekici',
    mainRoads: 'D-100 Karayolu, Göztepe Köprüsü, Kozyatağı Kavşağı, Bostancı E-5 Yan Yolu, Küçükyalı Katılımı',
    industrialPoints: 'Kozyatağı Metro Durağı, Bostancı Oto Sanayi E-5 Çıkışı, Göztepe Medikal Park Aksı',
    photo: '../images/lastik-tamir.webp',
    photoCaption: 'D-100 E-5 karayolu emniyet şeridinde lastiği yarılan araca anında mobil stepne montajı.',
    neighborSlugs: ['kadikoy-goztepe-oto-cekici', 'icerenkoy-oto-cekici', 'atasehir-oto-cekici', 'altunizade-oto-cekici', 'uskudar-oto-cekici', 'umraniye-oto-cekici'],
    faqs: [
      { q: "E-5 üzerinde yoğun trafikte kaldım, kurtarma nasıl yapılır?", a: "Kompakt hidrolik kayar kasalı aracımızla trafiği kilitlemeden en fazla 3-4 dakika içinde aracı güvenle kasaya alıyoruz." },
      { q: "D-100 Karayolu üzerinde çekici kaç dakikada yanıma varır?", a: "E-5 aksında devriye atan nöbetçi aracımız 10-15 dakika içinde yanınızda olur." },
      { q: "Lastik patlamasında E-5'te müdahale ediyor musunuz?", a: "Emniyet şeridinde güvenliğiniz için aracı hızlıca çekiciye alıp en yakın lastik servisine ulaştırıyoruz." },
      { q: "E-5'ten Ümraniye Sanayi'ye araç taşır mısınız?", a: "Evet, istediğiniz tamirci veya sanayiye uygun fiyatla naklediyoruz." },
      { q: "Ödeme yöntemleri nelerdir?", a: "Nakit, Kredi Kartı ve Havale/EFT ile ödeyebilirsiniz." }
    ]
  }
];

// Helper to get region object by slug
const regionMap = {};
regionsData.forEach(r => { regionMap[r.slug] = r; });

function buildRegionOptionsHtml(currentSlug) {
  return regionsData.map(r => 
    `<option value="${r.name}" ${r.slug === currentSlug ? 'selected' : ''}>${r.name} Çekici</option>`
  ).join('');
}

function buildNeighborCardsHtml(neighborSlugs) {
  const neighbors = neighborSlugs.map(s => regionMap[s]).filter(Boolean);
  return neighbors.map(r => `
          <a href="${r.slug}.html" class="region-card-luxury" data-category="${r.category}">
            <div class="region-card-top">
              <div class="region-icon-badge">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
              </div>
              <span class="region-status-pill">
                <span class="status-live-dot"></span>
                7/24 Nöbetçi
              </span>
            </div>
            <h4 class="region-card-name" style="font-size: 1.15rem;">${r.name} Çekici</h4>
            <p class="region-card-sub" style="font-size: 0.84rem; line-height: 1.45;">${r.mainRoads}</p>
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

function generateCompleteRegionPage(r) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": r.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const faqItemsHtml = r.faqs.map((f, idx) => `
          <div class="faq-item ${idx === 0 ? 'active' : ''}">
            <button class="faq-question" type="button">
              <span>${f.q}</span>
              <span class="faq-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg></span>
            </button>
            <div class="faq-answer">
              <p>${f.a}</p>
            </div>
          </div>
  `).join('');

  const neighborCardsHtml = buildNeighborCardsHtml(r.neighborSlugs);
  const regionOptionsHtml = buildRegionOptionsHtml(r.slug);

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-JHT62VL18P"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-JHT62VL18P');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${r.title}</title>
  <meta name="description" content="${r.metaDesc}">
  <meta name="keywords" content="${r.keywords}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://umraniyeyolyardim.com/bolgeler/${r.slug}.html">
  <link rel="stylesheet" href="../css/style.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Ümraniye Yol Yardım - ${r.name} Oto Çekici ve Kurtarma",
    "telephone": "+905441380734",
    "areaServed": "${r.name}",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "48"
    }
  }
  </script>

  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2)}
  </script>
</head>
<body>

  <!-- Üst Acil Durum Bilgi Şeridi -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-left">
        <span class="badge-247"><span class="pulse-dot"></span> 7/24 Kesintisiz Hizmet</span>
        <span>Ümraniye, Ataşehir, Çekmeköy, Sancaktepe & Tüm Otoyollarda Nöbetçi Çekici Noktaları</span>
      </div>
    </div>
  </div>

  <!-- Ana Gezinme Menüsü (Obsidian Luxury Header) -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo" aria-label="Ümraniye Yol Yardım Ana Sayfa">
        <div class="logo-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 17h2c.55 0 1-.45 1-1v-3.5c0-.38-.21-.71-.53-.88l-2.02-1.01A1.99 1.99 0 0018.55 10H16V7a1 1 0 00-1-1H3a1 1 0 00-1 1v10h2a3 3 0 006 0h4a3 3 0 006 0zm-12 1a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2zM16 11.5h2.55l1.6 1.07V15H16v-3.5zM4 8h10v7H4V8z"/></svg>
        </div>
        <div class="logo-text">
          <span class="brand-title">ÜMRANİYE <span>YOL YARDIM</span></span>
          <span class="brand-subtitle">7/24 Yol Yardım & Kurtarma</span>
        </div>
      </a>

      <nav class="main-nav" aria-label="Ana Menü">
        <ul>
          <li><a href="../index.html">Ana Sayfa</a></li>
          <li><a href="../hizmetler/index.html">Hizmetlerimiz</a></li>
          <li><a href="../bolgeler/index.html" class="active">Bölgelerimiz</a></li>
          <li><a href="../galeri.html">Galeri</a></li>
          <li><a href="../blog/index.html">Blog</a></li>
          <li><a href="../hakkimizda.html">Hakkımızda</a></li>
          <li><a href="../iletisim.html">İletişim</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <button class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat" aria-expanded="false">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero / Breadcrumb -->
  <section style="background: linear-gradient(135deg, var(--secondary), var(--bg-dark)); color: #fff; padding: 45px 0;">
    <div class="container">
      <div style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 10px;">
        <a href="../index.html" style="color: #cbd5e1;">Ana Sayfa</a> / <a href="../bolgeler/index.html" style="color: #cbd5e1;">Hizmet Bölgeleri</a> / <span>${r.name}</span>
      </div>
      <h1 style="font-size: 2.25rem; font-weight: 900; margin-bottom: 8px;">${r.fullName} Oto Çekici & 7/24 Acil Kurtarma</h1>
      <p style="color: #cbd5e1; font-size: 1.05rem;">
        ${r.name} ve çevresinde ortalama <strong>${r.eta}</strong> varış süresiyle en yakın profesyonel oto kurtarma filosu.
      </p>
    </div>
  </section>

  <!-- Ana İçerik -->
  <main class="section">
    <div class="container" style="max-width: 1060px;">

      <!-- Bölge Güvence Rozetleri -->
      <div class="region-badge-bar">
        <div class="region-badge-pill"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg> Ortalama Varış: <strong>${r.eta}</strong></div>
        <div class="region-badge-pill"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg> %100 Taşıma Kaskosu</div>
        <div class="region-badge-pill"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg> Sabit Fiyat Garantisi</div>
        <div class="region-badge-pill"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 17h2c.55 0 1-.45 1-1v-3.5c0-.38-.21-.71-.53-.88l-2.02-1.01A1.99 1.99 0 0018.55 10H16V7a1 1 0 00-1-1H3a1 1 0 00-1 1v10h2a3 3 0 006 0h4a3 3 0 006 0zm-12 1a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2zM16 11.5h2.55l1.6 1.07V15H16v-3.5zM4 8h10v7H4V8z"/></svg> Aparatlı Sıfır Hasar Taşıma</div>
        <div class="region-badge-pill"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> 7/24 Kesintisiz Nöbetçi Filo</div>
      </div>
      
      <!-- Hızlı Çağrı & Doğrudan WhatsApp Teklif Formu Kutusu -->
      <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 30px; box-shadow: var(--shadow-md); margin-bottom: 35px;">
        <div class="region-cta-grid">
          <div>
            <span style="background: var(--primary-light); color: var(--primary); font-size: 0.8rem; font-weight: 800; padding: 4px 10px; border-radius: var(--radius-full); text-transform: uppercase;">
              ${r.name} Acil İhbar Hattı
            </span>
            <h2 style="font-size: 1.5rem; color: var(--secondary); margin-top: 8px;">${r.name} Bölgesinde Yolda mı Kaldınız?</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px; line-height: 1.6;">
              Aracınız ister mekanik arıza yapmış ister kaza durumunda olsun; son teknoloji hidrolik kayar kasalı çekicilerimizle ortalama <strong>${r.eta}</strong> içinde adresinize ulaşıyoruz.
            </p>
            <div style="display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap;">
              <a href="tel:05441380734" class="btn btn-call btn-lg"><span class="svg-icon" style="width:18px;height:18px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg></span> 0544 138 07 34</a>
              <a href="#" class="btn btn-whatsapp btn-lg btn-send-location"><span class="svg-icon" style="width:18px;height:18px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg></span> Canlı Konum At</a>
            </div>
          </div>

          <!-- Doğrudan WhatsApp'a Düşen Form -->
          <div style="background: #ffffff; border: 1px solid var(--border-light); padding: 24px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
            <strong style="display: block; font-size: 1.05rem; font-weight: 800; color: var(--text-dark); margin-bottom: 4px;">WhatsApp'tan Anında Fiyat Al</strong>
            <small style="color: var(--text-muted); display: block; margin-bottom: 14px;">Formu doldurun, ${r.name} nöbetçi çekici ekibimizden anında net fiyat gelsin:</small>
            
            <form class="wp-contact-form">
              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Bulunduğunuz Bölge *</label>
                <select name="region_select" aria-label="Bulunduğunuz Bölge" class="wp-form-select wp-form-select-light" required>
                  ${regionOptionsHtml}
                </select>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Araç Türü *</label>
                <select name="vehicle_type_select" aria-label="Araç Türü" class="wp-form-select wp-form-select-light" required>
                  <option value="Otomobil" selected>Otomobil (Binek / SUV / Sedan)</option>
                  <option value="Motosiklet">Motosiklet</option>
                  <option value="Kamyonet">Kamyonet / Hafif Ticari</option>
                  <option value="Minibüs">Minibüs / Panelvan</option>
                  <option value="Karavan">Karavan / Römork</option>
                  <option value="ATV">ATV / UTV</option>
                </select>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Arıza / Problem Durumu *</label>
                <select name="problem_select" aria-label="Yaşanan Problem" class="wp-form-select wp-form-select-light" required>
                  <option value="Trafik Kazası (Yürümüyor)">Trafik Kazası (Yürümüyor / Hasarlı)</option>
                  <option value="Motor / Mekanik Arızası">Motor / Mekanik Arızası (Stop Etti)</option>
                  <option value="Akü Bitti / Marş Basmıyor">Akü Bitti / Marş Basmıyor</option>
                  <option value="Lastik Patladı / Stepne Yok">Lastik Patladı / Stepne Yok</option>
                  <option value="Şanzıman / Vites Kilitlendi">Şanzıman / Vites Kilitlendi</option>
                  <option value="Çamura / Şarampole Saplandı">Çamura / Şarampole Saplandı (Vinç Lazım)</option>
                  <option value="Özel Araç Nakliyesi">Özel Araç Nakliyesi (Servise / Şehirlerarası)</option>
                </select>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Bırakılacağı Hedef (Servis/İlçe) *</label>
                <input type="text" name="to_location" placeholder="Örn: Ümraniye Sanayi, İMES, Bostancı veya Yetkili Servis" class="wp-form-input" style="background:#fff; color:var(--text-dark); border-color:var(--border-light);" required>
              </div>

              <div style="margin-bottom: 14px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Telefon Numaranız</label>
                <input type="tel" name="user_phone" placeholder="05XX XXX XX XX" class="wp-form-input" style="background:#fff; color:var(--text-dark); border-color:var(--border-light);">
              </div>

              <button type="submit" class="btn btn-whatsapp" style="width: 100%; justify-content: center; padding: 13px;">
                <span class="svg-icon" style="width:18px;height:18px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg></span> WhatsApp'a Gönder & Fiyat Al
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Detaylı Özgün Açıklama & Bölgesel Analiz (Region Feature Box) -->
      <article class="region-feature-box">
        <h2 style="font-size: 1.5rem; color: var(--secondary); margin-bottom: 14px;">${r.fullName} Oto Çekici ve Kurtarma Hizmet Detayları</h2>
        <p style="margin-bottom: 16px; font-size: 0.98rem; line-height: 1.8; color: var(--text-main);">
          <strong>Ümraniye Yol Yardım</strong> olarak, ${r.name} ve bağlantılı tüm arterlerde haftanın 7 günü 24 saat kesintisiz nöbetçi kurtarıcı ekiplerimizle hizmet vermekteyiz. Bölgenin ana caddeleri, dar ara sokakları ve ana otoyol bağlantılarına hâkim tecrübeli operatörlerimiz sayesinde, çağrınızı aldığımız andan itibaren navigasyon optimizasyonuyla trafiğe takılmadan en geç <strong>${r.eta}</strong> içerisinde yanınızda oluyoruz.
        </p>
        <p style="margin-bottom: 22px; font-size: 0.98rem; line-height: 1.8; color: var(--text-main);">
          Aracınız ister mekanik motor arızası yapsın, ister şanzımanı kilitlensin veya talihsiz bir kaza geçirmiş olsun; düşük açılı hidrolik kayar platformlu çekicilerimiz ve özel jant kavrama aparatlarımızla sıfır sürtünme ve tam taşıma kaskosu güvencesiyle yüklenir. İster en yakın sanayi sitesine (Ümraniye Oto Sanayi, İMES, KADOSAN, Bostancı), ister anlaşmalı yetkili servisinize en uygun sabit fiyat garantisiyle ulaştırılır.
        </p>

        <h3 style="font-size: 1.25rem; color: var(--secondary); margin: 28px 0 10px;">${r.name} Kritik Arterler ve Hizmet Güzergahları</h3>
        <p style="margin-bottom: 12px; font-size: 0.95rem; line-height: 1.7; color: var(--text-main);">
          <strong>Ana Ulaşım Yolları:</strong> ${r.mainRoads}
        </p>
        <p style="margin-bottom: 24px; font-size: 0.95rem; line-height: 1.7; color: var(--text-main);">
          <strong>Sanayi & Lojistik Odak Noktaları:</strong> ${r.industrialPoints}
        </p>

        <!-- 4 Adımlı Kurtarma Süreci (Tuzla Çekici Süreci Nasıl İşler Yerine) -->
        <h3 style="font-size: 1.3rem; color: var(--secondary); margin: 35px 0 15px;">${r.name} Çekici Süreci Nasıl İşler?</h3>
        <div class="process-steps-grid">
          <div class="process-step-card">
            <div class="process-step-num">1</div>
            <div class="process-step-title">İhbar & Konum</div>
            <div class="process-step-desc">Telefonla arayın veya WhatsApp'tan konum atın, saniyeler içinde net fiyat verelim.</div>
          </div>
          <div class="process-step-card">
            <div class="process-step-num">2</div>
            <div class="process-step-title">10 - 15 Dk Varış</div>
            <div class="process-step-desc">${r.name} nöbetçi çekicimiz en kısa rota üzerinden derhal yola çıksın.</div>
          </div>
          <div class="process-step-card">
            <div class="process-step-num">3</div>
            <div class="process-step-title">Güvenli Yükleme</div>
            <div class="process-step-desc">Reflektör güvenlik alanı açılır, araç kayar kasaya sıfır temasla kaskolu sabitlenir.</div>
          </div>
          <div class="process-step-card">
            <div class="process-step-num">4</div>
            <div class="process-step-title">Servise Teslim</div>
            <div class="process-step-desc">Aracınız istediğiniz yetkili servise veya güvenilir sanayi ustalarına güvenle teslim edilir.</div>
          </div>
        </div>

        <!-- Bölgede Taşıdığımız Araç Tipleri Tablosu -->
        <h3 style="font-size: 1.3rem; color: var(--secondary); margin: 35px 0 12px;">${r.name} Bölgesinde Taşıdığımız Araç Tipleri</h3>
        <div style="overflow-x: auto;">
          <table class="table-vehicle-support">
            <thead>
              <tr>
                <th>Araç Tipi</th>
                <th>Kullanılan Donanım</th>
                <th>Öne Çıkan Güvence & Özellik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Binek Otomobiller (Sedan, Hatchback, Spor)</strong></td>
                <td>Düşük Açılı Hidrolik Kayar Kasa</td>
                <td>Tampon ve marşpiyellere sıfır temas, hasarsız yükleme garantisi.</td>
              </tr>
              <tr>
                <td><strong>SUV, 4x4 ve Elektrikli Araçlar</strong></td>
                <td>Tekerlek Kaydırma Bebekleri (Aparatı)</td>
                <td>Elektronik el freni veya şanzıman kilitli olsa dahi diferansiyele yük binmez.</td>
              </tr>
              <tr>
                <td><strong>Motosikletler (Scooter, Racing, Enduro)</strong></td>
                <td>Ön Teker Kilitleme Sehpası & Yumuşak Gergi</td>
                <td>Devrilme ve çizilme riski olmadan özel dik sabitleme kafesi.</td>
              </tr>
              <tr>
                <td><strong>Minibüs ve Hafif Ticari (Panelvan, Kamyonet)</strong></td>
                <td>Yüksek Tonajlı Güçlü Çekici Platformu</td>
                <td>Servis, kargo ve filo araçları için zaman kaybettirmeyen hızlı nakliye.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Bölge Gerçek Saha Fotoğrafı Kartı -->
        <div style="margin: 35px 0; border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
          <div class="photo-box" style="height: 300px;">
            <img src="${r.photo}" alt="${r.name} oto çekici ve kurtarma saha operasyonu" title="${r.name} Çekici Operasyonu" loading="lazy" width="860" height="400">
            <span class="photo-badge">📸 ${r.name} Saha Operasyonu</span>
          </div>
          <div style="padding: 16px; background: var(--bg-light); border-top: 1px solid var(--border-color);">
            <strong style="color: var(--secondary); font-size: 0.95rem;">Saha Operasyon Kaydı:</strong>
            <span style="color: var(--text-muted); font-size: 0.88rem; margin-left: 6px;">${r.photoCaption}</span>
          </div>
        </div>

        <!-- Sıkça Sorulan Sorular (FAQ) -->
        <h3 style="font-size: 1.35rem; color: var(--secondary); margin: 35px 0 15px;">${r.name} Çekici & Kurtarma Hakkında Merak Edilenler</h3>
        <div class="faq-wrap">
          ${faqItemsHtml}
        </div>

      </article>

      <!-- Neden Biz? (Bölgesel 3 Güvence Kartı) -->
      <div style="margin-top: 45px; margin-bottom: 40px;">
        <div class="section-header" style="text-align: left; margin-bottom: 25px;">
          <span class="section-tag">Kurumsal Güvence</span>
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-dark);">${r.name} Çekici Hizmetinde Neden Bizi Tercih Etmelisiniz?</h3>
        </div>
        <div class="why-us-grid">
          <div class="why-us-card">
            <div class="why-us-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div>
            <h4 class="why-us-title">10 - 15 Dakika Ulaşım</h4>
            <p class="why-us-desc">${r.name} sınırlarında hazır bekleyen nöbetçi kurtarıcımızla çağrınızı aldığımız an en kısa rotadan yola çıkıyoruz.</p>
          </div>
          <div class="why-us-card">
            <div class="why-us-icon"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 17h2c.55 0 1-.45 1-1v-3.5c0-.38-.21-.71-.53-.88l-2.02-1.01A1.99 1.99 0 0018.55 10H16V7a1 1 0 00-1-1H3a1 1 0 00-1 1v10h2a3 3 0 006 0h4a3 3 0 006 0zm-12 1a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2zM16 11.5h2.55l1.6 1.07V15H16v-3.5zM4 8h10v7H4V8z"/></svg></div>
            <h4 class="why-us-title">%100 Kaskolu Taşıma</h4>
            <p class="why-us-desc">Aracınız kayar platforma yüklendiği andan servise inene kadar tam kapsamlı taşıyıcı sigortası altındadır; sıfır çizik garantisi.</p>
          </div>
          <div class="why-us-card">
            <div class="why-us-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg></div>
            <h4 class="why-us-title">Sabit Fiyat Sözü</h4>
            <p class="why-us-desc">Telefonda verilen teklif geçerlidir. Sonradan eklenen kilometre veya bekleme ücreti kesinlikle talep edilmez.</p>
          </div>
        </div>
      </div>

      <!-- Yakın Çevre Hizmet Bölgelerimiz (Komşu Lokasyonlar - Kartlı Matrix) -->
      <div style="margin-top: 50px; margin-bottom: 20px;">
        <div class="section-header" style="text-align: left; margin-bottom: 25px;">
          <span class="section-tag">Komşu Lokasyonlar</span>
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-dark);">Yakın Çevre Nöbetçi Çekici Noktaları</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem;">${r.name} bölgesine en yakın hazır bekleyen mobil kurtarma filomuz:</p>
        </div>

        <div class="regions-matrix">
          ${neighborCardsHtml}
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <a href="../bolgeler/index.html" class="btn btn-secondary btn-lg" style="padding: 13px 28px; font-weight: 800; font-size: 0.95rem;">
            Tüm 24 Hizmet Bölgesini ve Otoyolları İncele →
          </a>
        </div>
      </div>

    </div>
  </main>

  <!-- Alt Bilgi (Footer) -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-logo">
            <span class="brand-title" style="color: #fff; font-size: 1.4rem;">ÜMRANİYE <span style="color: var(--primary);">YOL YARDIM</span></span>
          </div>
          <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin-top: 12px;">
            Ümraniye, Dudullu, Çekmeköy, Ataşehir ve tüm otoyol bağlantılarında 7 gün 24 saat kesintisiz acil oto çekici, oto kurtarma ve yol yardım hizmeti.
          </p>
          <div style="margin-top: 14px;">
            <a href="tel:05441380734" style="color: #fff; font-weight: 800; font-size: 1.15rem; display: inline-flex; align-items: center; gap: 8px;">
              <span class="svg-icon" style="width: 20px; height: 20px; color: var(--green-call);"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg></span>
              0544 138 07 34
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">Hizmetlerimiz</h4>
          <ul class="footer-links">
            <li><a href="../hizmetler/oto-cekici.html">Oto Çekici</a></li>
            <li><a href="../hizmetler/oto-kurtarma.html">Oto Kurtarma</a></li>
            <li><a href="../hizmetler/yol-yardim-aku-takviye.html">Akü Takviye</a></li>
            <li><a href="../hizmetler/lastik-tamir-degisim.html">Lastik Yol Yardım</a></li>
            <li><a href="../hizmetler/motosiklet-cekici.html">Motosiklet Çekici</a></li>
            <li><a href="../hizmetler/sehirlerarasi-arac-tasima.html">Şehirlerarası Taşıma</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">Popüler Bölgeler</h4>
          <ul class="footer-links">
            <li><a href="../bolgeler/umraniye-oto-cekici.html">Ümraniye Merkez Çekici</a></li>
            <li><a href="../bolgeler/dudullu-oto-cekici.html">Dudullu Çekici</a></li>
            <li><a href="../bolgeler/tepeustu-oto-cekici.html">Tepeüstü Çekici</a></li>
            <li><a href="../bolgeler/cekmekoy-oto-cekici.html">Çekmeköy Çekici</a></li>
            <li><a href="../bolgeler/atasehir-oto-cekici.html">Ataşehir Çekici</a></li>
            <li><a href="../bolgeler/tem-otoyolu-oto-cekici.html">TEM Otoyolu Çekici</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">Hızlı İletişim</h4>
          <ul class="footer-links">
            <li><a href="tel:05441380734">7/24 Acil İhbar Hattı</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=905441380734">WhatsApp Canlı Destek</a></li>
            <li><a href="../iletisim.html">İletişim & Konum</a></li>
            <li><a href="../hakkimizda.html">Hakkımızda</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Ümraniye Yol Yardım (umraniyeyolyardim.com). Tüm Hakları Saklıdır.</p>
        <p style="color: #64748b; font-size: 0.8rem; margin-top: 4px;">7/24 En Yakın Acil Oto Çekici ve Kurtarma Servisi</p>
      </div>
    </div>
  </footer>

  <!-- Sabit Mobil Hızlı Butonlar -->
  <div class="floating-actions">
    <a href="tel:05441380734" class="floating-btn floating-call" id="float-call-${r.slug}" title="0544 138 07 34">
      <span class="svg-icon" style="width: 22px; height: 22px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg></span>
      <span>0544 138 07 34</span>
    </a>
    <a href="#" class="floating-btn floating-whatsapp btn-send-location" id="float-wp-${r.slug}" title="WhatsApp Canlı Konum">
      <span class="svg-icon" style="width: 22px; height: 22px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg></span>
      <span>WhatsApp Konum</span>
    </a>
  </div>

  <script src="../js/main.js"></script>
</body>
</html>`;
}

// 2. Update Map in iletisim.html, index.html, hakkimizda.html, galeri.html
function updateMapsAcrossSite() {
  const files = ['iletisim.html', 'index.html', 'hakkimizda.html', 'galeri.html'];
  for (const f of files) {
    const p = path.join(rootDir, f);
    if (!fs.existsSync(p)) continue;
    let content = fs.readFileSync(p, 'utf8');

    // Replace iframe map
    content = content.replace(/<iframe src="https:\/\/www\.google\.com\/maps\/embed\?[^"]+"[^>]*><\/iframe>/g, WIDE_ANATOLIAN_MAP_EMBED);

    // Update iletisim.html specific details
    if (f === 'iletisim.html') {
      content = content.replace(/Ümraniye \/ İstanbul & Gebze \/ Kocaeli Sınırı/g, 'Ümraniye Merkez / İstanbul (Alemdağ Cd. & Tepeüstü Kavşağı)');
      content = content.replace(/Kuzey Marmara, TEM ve D-100 bağlantı kavşakları/g, 'Ümraniye, Ataşehir, Çekmeköy, Sancaktepe, Üsküdar, Kadıköy, Beykoz, TEM & Şile Otoyolu');
      content = content.replace(/placeholder="Örn: Ümraniye Aydınlı veya TEM Otoyolu"/g, 'placeholder="Örn: Ümraniye Tepeüstü, Dudullu veya TEM Otoyolu"');
      content = content.replace(/placeholder="Örn: İçmeler Sanayi veya Bostancı"/g, 'placeholder="Örn: Ümraniye Sanayi, İMES, Bostancı veya Servis"');
    }

    fs.writeFileSync(p, content, 'utf8');
    console.log('Updated wide map in:', f);
  }
}

// Main execution
async function main() {
  console.log('Generating comprehensive region pages with luxury neighbor cards, vehicle tables, processes, and photos...');

  for (const r of regionsData) {
    const html = generateCompleteRegionPage(r);
    fs.writeFileSync(path.join(bolgelerDir, `${r.slug}.html`), html, 'utf8');
    console.log(`Generated rich region page: ${r.slug}.html`);
  }

  updateMapsAcrossSite();
  console.log('All region pages and wide coverage maps successfully generated and updated!');
}

main().catch(console.error);
