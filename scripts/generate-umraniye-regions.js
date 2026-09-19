const fs = require('fs');
const path = require('path');

const bolgelerDir = path.join(__dirname, '..', 'bolgeler');

const regions = [
  // 1. Ümraniye Merkez & Mahalleleri
  {
    slug: 'umraniye-oto-cekici',
    name: 'Ümraniye Merkez',
    fullName: 'Ümraniye Merkez & Santral',
    category: 'umraniye',
    categoryName: 'Ümraniye & Mahalleleri',
    eta: '10 - 15 Dk',
    title: 'Ümraniye Oto Çekici 7/24 | Santral & Alemdağ Caddesi En Yakın Kurtarma - 0544 138 07 34',
    metaDesc: "Ümraniye Merkez, Alemdağ Caddesi, Santral, Yamanevler ve İnkılap mahallelerinde 7/24 nöbetçi oto çekici, oto kurtarma ve akü takviye. 10-15 dakikada yanınızdayız: 0544 138 07 34.",
    keywords: 'ümraniye oto çekici, ümraniye çekici, ümraniye acil oto kurtarma, alemdağ caddesi çekici, ümraniye santral çekici, yamanevler çekici',
    highlights: 'Alemdağ Caddesi, Metro Çıkışları, Santral Meydanı, Çarşı ve Yamanevler Çevresi',
    faqs: [
      { q: "Ümraniye Merkez'de çekici ortalama ne kadar sürede ulaşır?", a: "Alemdağ Caddesi ve Santral çevresinde 7/24 hazır bekleyen çekicimizle ortalama 10 ila 15 dakika içinde yanınızdayız." },
      { q: "Alemdağ Caddesi yoğun trafikte arıza yapan aracı nasıl çekiyorsunuz?", a: "Hızlı manevra kabiliyetine sahip hidrolik kayar kasalı ve dar sokak tipi kurtarıcılarımızla trafiği tıkamadan dakikalar içinde yükleme yapıyoruz." },
      { q: "Ümraniye Sanayi Sitesi veya anlaşmalı yetkili servislere araç çekiyor musunuz?", a: "Evet, aracınızı dilediğiniz özel/yetkili servise ya da Ümraniye Oto Sanayi ustalarına güvenle taşıyoruz." },
      { q: "Yerinde akü takviye ve lastik değişimi yapıyor musunuz?", a: "Evet, Ümraniye merkez mahallelerinde taşınabilir profesyonel booster ile yerinde akü desteği sağlıyoruz." },
      { q: "Ümraniye çekici fiyatları nasıl belirlenir?", a: "Aracınızın tipi, konumu ve gideceği mesafeye göre şeffaf sabit fiyat verilir. Telefonda teyit edilen fiyat harici sürpriz maliyet çıkmaz." }
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
    metaDesc: "Dudullu, Aşağı Dudullu, Yukarı Dudullu ve Dudullu Meydan mevkiinde 7/24 en yakın oto çekici ve yol yardım. 15 dakikada intikal: 0544 138 07 34.",
    keywords: 'dudullu oto çekici, aşağı dudullu çekici, yukarı dudullu çekici, dudullu oto kurtarma, dudullu yol yardım',
    highlights: 'Dudullu Meydan, Metro Durağı, Alemdağ Yolu, Tavukçuyolu Bağlantısı',
    faqs: [
      { q: "Dudullu'da çekici ne kadar sürede intikal eder?", a: "Dudullu Meydan ve Tavukçuyolu kavşağındaki ekiplerimiz ortalama 10-15 dakikada adresinize varır." },
      { q: "Aşağı Dudullu ve Yukarı Dudullu sokaklarında dar alan kurtarması var mı?", a: "Evet, kaza yapmış veya direksiyonu kilitlenmiş araçları özel aparatlarımızla hasarsız çıkarıyoruz." },
      { q: "Dudullu'dan Ümraniye Sanayi veya Bostancı Sanayi'ye taşıma yapıyor musunuz?", a: "Evet, talep ettiğiniz her sanayi sitesine veya servise ekonomik fiyat garantisiyle nakil sağlıyoruz." },
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
    metaDesc: "Tepeüstü Köprülü Kavşağı, Meydan AVM, IKEA ve TEM bağlantısında 7/24 acil oto çekici ve yol yardım. Hızlı intikal: 0544 138 07 34.",
    keywords: 'tepeüstü oto çekici, tepeüstü çekici, ikea ümraniye çekici, meydan avm çekici, tepeüstü köprülü kavşak çekici',
    highlights: 'Tepeüstü Kavşağı, Meydan AVM, Buyaka, IKEA Çevresi ve TEM Bağlantı Kolları',
    faqs: [
      { q: "Tepeüstü Kavşağı ve TEM katılımında arıza yapan araçlara bakar mısınız?", a: "Evet, Tepeüstü köprülü kavşağı ve bağlantı yollarında acil emniyet şeridi kurtarması yapıyoruz." },
      { q: "Meydan AVM veya IKEA otoparkından araç çekilebilir mi?", a: "Kapalı ve açık otoparklara uyumlu alçak şaseli kurtarıcılarımızla sıfır sürtünmeyle çekim sağlıyoruz." },
      { q: "Şile Otoyolu Tepeüstü ayrımında arıza olursa ne yapmalıyım?", a: "Dörtlülerinizi yakıp reflektör koyduktan sonra 0544 138 07 34 numaramızı arayabilir veya WhatsApp'tan konum gönderebilirsiniz." },
      { q: "Tepeüstü çekici ücreti ne kadar?", a: "Mesafe ve araç durumuna göre en uygun sabit fiyat garantisi veriyoruz. Ekstra sürpriz maliyet olmaz." },
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
    metaDesc: "Şerifali Mahallesi, Finanskent, Elmalıkent ve Barbaros Caddesi civarında 7/24 profesyonel oto çekici ve acil yol yardım. 0544 138 07 34.",
    keywords: 'şerifali oto çekici, şerifali çekici, finanskent çekici, elmalıkent çekici, ümraniye şerifali yol yardım',
    highlights: 'Şerifali Plaza Bölgesi, Finanskent Siteleri, Turgut Özal Bulvarı, Tavukçuyolu Bağlantısı',
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
    metaDesc: "Ümraniye Atakent, Armağanevler, Çamlık ve Mithatpaşa Caddesi üzerinde 7/24 acil oto çekici, kurtarma ve akü takviye. 0544 138 07 34.",
    keywords: 'atakent oto çekici, armağanevler çekici, çamlık mahallesi çekici, ümraniye atakent yol yardım',
    highlights: 'Mithatpaşa Caddesi, Atakent Siteleri, Armağanevler Meydanı, Çamlık Parkı Çevresi',
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
    metaDesc: "Çakmak Mahallesi, Saray Mahallesi, İnkılap ve Balkan Caddesi civarında 7/24 nöbetçi oto çekici ve kaza kurtarma. 0544 138 07 34.",
    keywords: 'çakmak oto çekici, çakmak mahallesi çekici, saray mahallesi çekici, ümraniye çakmak yol yardım',
    highlights: 'Çakmak Köprüsü, Saray Mahallesi İş Merkezleri, Balkan Caddesi, Metro Hattı',
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
    metaDesc: "Ihlamurkuyu, Cemil Meriç, Fatih Sultan Mehmet ve İstiklal mahallelerinde 7/24 oto çekici, vinç ve yol yardım servisi. 0544 138 07 34.",
    keywords: 'ıhlamurkuyu oto çekici, cemil meriç çekici, ümraniye ıhlamurkuyu çekici, fsm mahallesi çekici',
    highlights: 'Alemdağ Caddesi Üst Hattı, Cemil Meriç Kültür Merkezi Çevresi, Ihlamurkuyu Metro',
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
    metaDesc: "Kazım Karabekir, Dumlupınar, Hekimbaşı, İnkılap ve Küçüksu Caddesi aksında 7/24 nöbetçi oto çekici ve yol yardım. 0544 138 07 34.",
    keywords: 'kazım karabekir oto çekici, hekimbaşı çekici, dumlupınar çekici, küçüksu caddesi çekici',
    highlights: 'Küçüksu Caddesi Bağlantısı, Hekimbaşı Spor Tesisleri, Dumlupınar Yolu',
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
    metaDesc: "Esenşehir, Esenkent, KADOSAN Oto Sanayi Sitesi ve Baraj Yolu üzerinde 7/24 oto çekici, kamyonet ve yol yardım. 0544 138 07 34.",
    keywords: 'esenşehir oto çekici, esenkent çekici, kadosan çekici, baraj yolu çekici, ümraniye esenşehir kurtarma',
    highlights: 'KADOSAN Sanayi Sitesi, Baraj Yolu Caddesi, Esenkent ve Sancaktepe Sınır Hattı',
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
    metaDesc: "İMES Sanayi Sitesi, MODOKO Mobilyacılar Sitesi, DES Sanayi ve KADOSAN çevresinde 7/24 profesyonel oto çekici ve ticari araç taşıma. 0544 138 07 34.",
    keywords: 'imes oto çekici, modoko çekici, des sanayi çekici, ümraniye sanayi çekici, kadosan oto kurtarma',
    highlights: 'İMES Sanayi Girişleri, MODOKO Caddesi, DES Sanayi Siteleri, Dudullu OSB Çevresi',
    faqs: [
      { q: "İMES Sanayi Sitesi içinde çekici çağırabilir miyim?", a: "Evet, sanayi içi dar sokaklara ve atölye kapılarına rahatlıkla giren çekicilerimizle dakikalar içinde ulaşıyoruz." },
      { q: "MODOKO ve DES bölgesinde ticari araç taşıması yapıyor musunuz?", a: "Her model ticari panelvan, kamyonet, forklift ve jeneratör taşımacılığı yapıyoruz." },
      { q: "İMES'ten başka bir şehre araç gönderebilir miyim?", a: "Evet, şehirlerarası kaskolu araç nakliye hizmetimiz de mevcuttur." },
      { q: "Sanayi esnafına özel uygun fiyatınız var mı?", a: "Sanayi esnafı ve sürekli çalıştığımız firmalara özel indirimli fiyat tarifesi sunuyoruz." },
      { q: "İletişim numarası nedir?", a: "7/24 doğrudan 0544 138 07 34 hattımızdan ulaşabilirsiniz." }
    ]
  },

  // 2. Komşu İlçeler & Kritik Bağlantılar
  {
    slug: 'cekmekoy-oto-cekici',
    name: 'Çekmeköy',
    fullName: 'Çekmeköy Merkez & Madenler',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Çekmeköy Oto Çekici 7/24 | Madenler & Merkez Acil Kurtarma - 0544 138 07 34',
    metaDesc: "Çekmeköy Merkez, Madenler, Mehmet Akif, Hamidiye ve Şile Otoyolu girişinde 7/24 acil oto çekici ve oto kurtarma. 0544 138 07 34.",
    keywords: 'çekmeköy oto çekici, çekmeköy çekici, madenler çekici, çekmeköy oto kurtarma, çekmeköy yol yardım',
    highlights: 'Madenler Kavşağı, Çekmeköy Metro, Şile Otoyolu Bağlantısı, Doğa Park Çevresi',
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
    metaDesc: "Taşdelen, Alemdağ, Güngören Mahallesi ve Şile Yolu güzergahında 7/24 nöbetçi oto çekici ve yol yardım hizmeti. 0544 138 07 34.",
    keywords: 'taşdelen oto çekici, alemdağ çekici, taşdelen çekici, güngören çekici, şile yolu taşdelen kurtarma',
    highlights: 'Taşdelen Meydan, Turgut Özal Caddesi, Alemdağ Orman Yolu, Şile Yolu Çıkışı',
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
    metaDesc: "Ataşehir Merkez, Batı Ataşehir, İstanbul Finans Merkezi, Barbaros ve Atatürk Mahallelerinde 7/24 lüks oto çekici ve yol yardım. 0544 138 07 34.",
    keywords: 'ataşehir oto çekici, ataşehir çekici, finans merkezi çekici, batı ataşehir çekici, ataşehir oto kurtarma',
    highlights: 'İstanbul Uluslararası Finans Merkezi, Watergarden, Palladium, TEM Ataşehir Katılımı',
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
    metaDesc: "İçerenköy, Küçükbakkalköy, Bostancı Köprüsü ve Kozyatağı E-5 kavşağında 7/24 nöbetçi oto çekici ve yol yardım. 0544 138 07 34.",
    keywords: 'içerenköy oto çekici, küçükbakkalköy çekici, içerenköy oto kurtarma, bostancı köprüsü çekici',
    highlights: 'İçerenköy Carrefour Kavşağı, Hal Yolu, Küçükbakkalköy Prestij Caddesi, E-5 Bağlantısı',
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
    metaDesc: "Sancaktepe Merkez, Samandıra, Eyüp Sultan Mahallesi ve TEM Samandıra Gişeleri civarında 7/24 en yakın oto çekici. 0544 138 07 34.",
    keywords: 'sancaktepe oto çekici, samandıra çekici, sancaktepe oto kurtarma, samandıra gişeler çekici, sancaktepe yol yardım',
    highlights: 'Samandıra Gişeleri, Sancaktepe Şehir Hastanesi, Atatürk Caddesi, TEM Bağlantı Hattı',
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
    metaDesc: "Sarıgazi, Yenidoğan, Meclis Mahallesi ve İnönü Caddesi'nde 7/24 hızlı oto çekici ve akü takviye hizmeti. 0544 138 07 34.",
    keywords: 'sarıgazi oto çekici, yenidoğan çekici, sarıgazi çekici, meclis mahallesi çekici, sancaktepe sarıgazi yol yardım',
    highlights: 'Sarıgazi Meydan, İnönü Caddesi, Demokrasi Caddesi, Yenidoğan Yolu',
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
    metaDesc: "Üsküdar, Çamlıca Tepesi, Bulgurlu, Ferah, Ünalan ve Libadiye Caddesi mevkiinde 7/24 oto çekici ve yol yardım. 0544 138 07 34.",
    keywords: 'üsküdar oto çekici, çamlıca çekici, bulgurlu çekici, ünalan çekici, libadiye caddesi çekici, üsküdar yol yardım',
    highlights: 'Libadiye Caddesi, Çamlıca Tünelleri, Bulgurlu Kavşağı, Ünalan Metrobüs Çevresi',
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
    fullName: 'Altunizade & 15 Temmuz Köprüsü Bağlantısı',
    category: 'komsu',
    categoryName: 'Komşu İlçeler',
    eta: '10 - 15 Dk',
    title: 'Altunizade Oto Çekici 7/24 | Acıbadem & 15 Temmuz Köprüsü Girişi - 0544 138 07 34',
    metaDesc: "Altunizade Kavşağı, 15 Temmuz Şehitler Köprüsü katılımı, Acıbadem ve Koşuyolu aksında 7/24 hızlı oto çekici. 0544 138 07 34.",
    keywords: 'altunizade oto çekici, acıbadem çekici, 15 temmuz köprüsü çekici, altunizade köprülü kavşak çekici, koşuyolu çekici',
    highlights: '15 Temmuz Şehitler Köprüsü Katılımı, Altunizade Metrobüs Durağı, Kısıklı Caddesi, Acıbadem Yolu',
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
    metaDesc: "Kavacık Kavşağı, FSM Köprüsü Anadolu ayağı, Rüzgarlıbahçe ve Beykoz Konakları civarında 7/24 en yakın oto çekici. 0544 138 07 34.",
    keywords: 'kavacık oto çekici, beykoz çekici, rüzgarlıbahçe çekici, fsm köprüsü çekici, kavacık köprülü kavşak çekici',
    highlights: 'Fatih Sultan Mehmet Köprüsü Çıkışı, Kavacık Plazalar, Rüzgarlıbahçe, Çavuşbaşı Yolu',
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
    metaDesc: "Göztepe Köprüsü, Kozyatağı Kavşağı, Kadıköy Merkez ve E-5 karayolunda 7/24 acil oto çekici ve kurtarma desteği. 0544 138 07 34.",
    keywords: 'kadıköy oto çekici, göztepe çekici, kozyatağı çekici, göztepe köprüsü çekici, bostancı çekici',
    highlights: 'Göztepe Köprüsü, Kozyatağı Metro, E-5 Kadıköy Aksı, Bostancı Sanayi Yolu',
    faqs: [
      { q: "Göztepe Köprüsü ve E-5 üzerinde arıza yapan araca çekici kaç dakikada gelir?", a: "E-5 devriye kurtarıcımız 10-15 dakikada ulaşır." },
      { q: "Bostancı Sanayi Sitesi'ne araç çektirmenin ücreti nedir?", a: "Konumunuza göre minimum taban fiyattan garantili taşıma yapılır." },
      { q: "Kadıköy dar sokaklarında araç çekebilir misiniz?", a: "Kıvrak manevralı şehir içi kurtarıcılarımız dar sokaklara rahatlıkla girer." },
      { q: "Akü bitmesi durumunda Göztepe'ye geliyor musunuz?", a: "Evet, mobil takviye aracımız hızlıca gelerek akünüzü canlandırır." },
      { q: "Nasıl iletişim kurabilirim?", a: "0544 138 07 34 numarasından bizi arayabilir ya da WhatsApp'tan yazabilirsiniz." }
    ]
  },

  // 3. Otoyollar, Gişeler ve Ana Arterler
  {
    slug: 'tem-otoyolu-oto-cekici',
    name: 'TEM Otoyolu',
    fullName: 'TEM Otoyolu (Ümraniye Gişeleri & Çamlıca)',
    category: 'otoyol',
    categoryName: 'Otoyollar & Gişeler',
    eta: '10 - 15 Dk',
    title: 'TEM Otoyolu Oto Çekici 7/24 | Ümraniye Gişeleri - Çamlıca - FSM - 0544 138 07 34',
    metaDesc: "TEM Otoyolu Ümraniye Gişeleri, Çamlıca Gişeleri, Tepeüstü ve FSM Köprüsü güzergahında 7/24 otoyol acil çekici ve yol yardım. 0544 138 07 34.",
    keywords: 'tem otoyolu oto çekici, tem ümraniye çekici, çamlıca gişeler çekici, tem otoyolu yol yardım, otoyol çekici',
    highlights: 'TEM Ümraniye Gişeleri, Çamlıca Gişeler, FSM Köprü Yolu, Ataşehir TEM Katılımı',
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
    metaDesc: "Şile Otoyolu üzerinde Ümraniye, Çekmeköy, Taşdelen, Alemdağ ve Ömerli istikametinde 7/24 kesintisiz otoyol oto çekici. 0544 138 07 34.",
    keywords: 'şile otoyolu oto çekici, şile yolu çekici, ümraniye şile yolu çekici, taşdelen şile yolu kurtarma, ömerli çekici',
    highlights: 'Şile Yolu Ümraniye Çıkışı, Taşdelen Tünelleri, Nişantepe, Ömerli Virajları',
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
    metaDesc: "Kuzey Marmara Otoyolu Reşadiye, Çekmeköy, Alemdağ ve Paşaköy Gişeleri hattında 7/24 yüksek hızlı otoyol çekici ve yol yardım. 0544 138 07 34.",
    keywords: 'kuzey marmara oto çekici, reşadiye çekici, paşaköy gişeler çekici, kuzey marmara yol yardım, kmo çekici',
    highlights: 'KMO Reşadiye Gişeleri, Paşaköy Ayrımı, Hüseyinli Tünelleri, Alemdağ Bağlantısı',
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
    metaDesc: "D-100 (E-5) Karayolu Göztepe, Kozyatağı, Bostancı, Küçükyalı ve Ümraniye bağlantı yolunda 7/24 acil oto çekici ve yol yardım. 0544 138 07 34.",
    keywords: 'd100 oto çekici, e5 oto çekici, göztepe e5 çekici, kozyatağı e5 çekici, e-5 yol yardım',
    highlights: 'Göztepe Köprüsü, Kozyatağı Kavşağı, Bostancı E-5 Yan Yol, Küçükyalı Bağlantısı',
    faqs: [
      { q: "E-5 üzerinde yoğun trafikte kaldım, kurtarma nasıl yapılır?", a: "Kompakt hidrolik kayar kasalı aracımızla trafiği kilitlemeden en fazla 3-4 dakika içinde aracı güvenle kasaya alıyoruz." },
      { q: "D-100 Karayolu üzerinde çekici kaç dakikada yanıma varır?", a: "E-5 aksında devriye atan nöbetçi aracımız 10-15 dakika içinde yanınızda olur." },
      { q: "Lastik patlamasında E-5'te müdahale ediyor musunuz?", a: "Emniyet şeridinde güvenliğiniz için aracı hızlıca çekiciye alıp en yakın lastik servisine ulaştırıyoruz." },
      { q: "E-5'ten Ümraniye Sanayi'ye araç taşır mısınız?", a: "Evet, istediğiniz tamirci veya sanayiye uygun fiyatla naklediyoruz." },
      { q: "Ödeme yöntemleri nelerdir?", a: "Nakit, Kredi Kartı ve Havale/EFT ile ödeyebilirsiniz." }
    ]
  }
];

// Helper: Build region page HTML
function generateRegionHtml(region) {
  const otherRegions = regions.filter(r => r.slug !== region.slug);
  const regionOptionsHtml = regions.map(r => 
    `<option value="${r.name}" ${r.slug === region.slug ? 'selected' : ''}>${r.name} Çekici</option>`
  ).join('');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": region.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const faqAccordionHtml = region.faqs.map(f => `
        <div class="faq-item">
          <button class="faq-question" type="button">
            <span>${f.q}</span>
            <span class="faq-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg></span>
          </button>
          <div class="faq-answer">
            <p>${f.a}</p>
          </div>
        </div>
  `).join('');

  const otherRegionsHtml = otherRegions.slice(0, 8).map(r => `
          <a href="../bolgeler/${r.slug}.html" class="related-region-link">
            <span>📍 ${r.name} Çekici</span>
            <small style="color: var(--text-muted); font-size: 0.8rem;">Varış: ${r.eta}</small>
          </a>
  `).join('');

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
  <title>${region.title}</title>
  <meta name="description" content="${region.metaDesc}">
  <meta name="keywords" content="${region.keywords}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://umraniyeyolyardim.com/bolgeler/${region.slug}.html">
  <link rel="stylesheet" href="../css/style.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Ümraniye Yol Yardım - ${region.name} Oto Çekici ve Kurtarma",
    "telephone": "+905441380734",
    "areaServed": "${region.name}",
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
        <a href="../index.html" style="color: #cbd5e1;">Ana Sayfa</a> / <a href="../bolgeler/index.html" style="color: #cbd5e1;">Hizmet Bölgeleri</a> / <span>${region.name}</span>
      </div>
      <h1 style="font-size: 2.25rem; font-weight: 900; margin-bottom: 8px;">${region.fullName} Oto Çekici & 7/24 Acil Kurtarma</h1>
      <p style="color: #cbd5e1; font-size: 1.05rem;">
        ${region.name} ve çevresinde ortalama <strong>${region.eta}</strong> varış süresiyle en yakın profesyonel oto kurtarma filosu.
      </p>
    </div>
  </section>

  <!-- Ana İçerik -->
  <main class="section">
    <div class="container" style="max-width: 1060px;">

      <!-- Bölge Güvence Rozetleri -->
      <div class="region-badge-bar">
        <div class="region-badge-pill"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg> Ortalama Varış: <strong>${region.eta}</strong></div>
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
              ${region.name} Acil İhbar Hattı
            </span>
            <h2 style="font-size: 1.5rem; color: var(--secondary); margin-top: 8px;">${region.name} Bölgesinde Yolda mı Kaldınız?</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px; line-height: 1.6;">
              Aracınız ister mekanik arıza yapmış ister kaza durumunda olsun; son teknoloji hidrolik kayar kasalı çekicilerimizle ortalama <strong>${region.eta}</strong> içinde adresinize ulaşıyoruz.
            </p>
            <div style="display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap;">
              <a href="tel:05441380734" class="btn btn-call btn-lg"><span class="svg-icon" style="width:18px;height:18px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg></span> 0544 138 07 34</a>
              <a href="#" class="btn btn-whatsapp btn-lg btn-send-location"><span class="svg-icon" style="width:18px;height:18px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg></span> Canlı Konum At</a>
            </div>
          </div>

          <!-- Doğrudan WhatsApp'a Düşen Form -->
          <div style="background: #ffffff; border: 1px solid var(--border-light); padding: 24px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
            <strong style="display: block; font-size: 1.05rem; font-weight: 800; color: var(--text-dark); margin-bottom: 4px;">WhatsApp'tan Anında Fiyat Al</strong>
            <small style="color: var(--text-muted); display: block; margin-bottom: 14px;">Formu doldurun, ${region.name} nöbetçi çekici ekibimizden anında net fiyat gelsin:</small>
            
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
                  <option value="Otomobil / Binek">Otomobil (Sedan/Hatchback)</option>
                  <option value="SUV / Jeep">SUV / 4x4 / Jeep</option>
                  <option value="Ticari / Minibüs / Kamyonet">Hafif Ticari / Panelvan / Kamyonet</option>
                  <option value="Motosiklet / ATV">Motosiklet / ATV / Scooter</option>
                  <option value="Lüks / Spor Araç">Lüks / Spor / Alçak Şasi Araç</option>
                </select>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Aracın Durumu *</label>
                <select name="problem_select" aria-label="Aracın Durumu" class="wp-form-select wp-form-select-light" required>
                  <option value="Motor Arızası (Tekerler Döner)">Motor Arızası (Tekerler Döner)</option>
                  <option value="Kazalı / Yürür Durumda Değil">Kazalı / Yürür Durumda Değil</option>
                  <option value="Teker / Şanzıman Kilitli">Tekerlek / Şanzıman Kilitli (P modunda)</option>
                  <option value="Akü Bitti (Yerinde Takviye)">Akü Bitti (Yerinde Takviye İhtiyacı)</option>
                  <option value="Lastik Patladı / Yarıldı">Lastik Patladı / Stepne Değişimi</option>
                  <option value="Çamura / Çukura Saplandı">Çamura / Kanala Saplandı (Vinç Lazım)</option>
                </select>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Gidilecek Hedef (Servis/İlçe) *</label>
                <input type="text" name="to_location" placeholder="Örn: Ümraniye Sanayi, Bostancı, Yetkili Servis" class="wp-form-input" style="background:#fff; color:var(--text-dark); border-color:var(--border-light);" required>
              </div>

              <div style="margin-bottom: 14px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Telefon Numaranız</label>
                <input type="tel" name="user_phone" placeholder="05XX XXX XX XX" class="wp-form-input" style="background:#fff; color:var(--text-dark); border-color:var(--border-light);">
              </div>

              <button type="submit" class="btn btn-whatsapp" style="width: 100%; justify-content: center;">
                <span class="svg-icon" style="width:18px;height:18px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg></span> WhatsApp'a Gönder & Fiyat Al
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Bölge Detayları ve Özellikleri -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.6rem; color: var(--secondary); margin-bottom: 16px;">${region.fullName} Oto Çekici Hizmet Ağı</h2>
        <div style="background: #fff; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-color); line-height: 1.8; color: var(--text-main);">
          <p>
            <strong>Ümraniye Yol Yardım</strong> olarak, ${region.name} ve bağlantı aksında haftanın 7 günü 24 saat nöbetçi kurtarıcı ekiplerimizle hizmetinizdeyiz. Bölgenin ana caddeleri, sokakları ve ana otoyol bağlantılarına hâkim sürücülerimiz, acil durumlarda navigasyon optimizasyonuyla trafiğe takılmadan en geç <strong>${region.eta}</strong> içerisinde yanınıza intikal eder.
          </p>
          <div style="margin-top: 14px; padding: 14px; background: var(--bg-light); border-left: 4px solid var(--primary); border-radius: 4px;">
            <strong style="color: var(--secondary);">📍 Önemli Kapsama Noktaları:</strong> ${region.highlights}
          </div>
          <p style="margin-top: 14px;">
            Otomatik vites şanzıman kilitlenmeleri, elektrikli araç taşıma gereksinimleri, altı yere yakın spor otomobiller veya kazalı araçlar için özel kızaklı aparatlarımız mevcuttur. Aracınızı dilediğiniz özel veya yetkili servise, sanayi sitelerine (Ümraniye Sanayi, İMES, KADOSAN, Bostancı vb.) sıfır hasar ve %100 nakliyat sigortası güvencesiyle ulaştırıyoruz.
          </p>
        </div>
      </section>

      <!-- Neden Ümraniye Yol Yardım? (4 Kart) -->
      <section style="margin-bottom: 45px;">
        <h2 style="font-size: 1.4rem; color: var(--secondary); margin-bottom: 20px;">Neden ${region.name} İçin Bizi Tercih Etmelisiniz?</h2>
        <div class="grid grid-2" style="gap: 16px;">
          <div class="why-us-card">
            <div class="why-us-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div>
            <div>
              <h3 style="font-size: 1.1rem; margin-bottom: 4px;">10-15 Dakikada Kesin Varış</h3>
              <p style="font-size: 0.9rem; color: var(--text-muted);">${region.name} civarında sürekli devriye atan nöbetçi çekicimiz ile sizi saatlerce bekletmiyoruz.</p>
            </div>
          </div>
          <div class="why-us-card">
            <div class="why-us-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg></div>
            <div>
              <h3 style="font-size: 1.1rem; margin-bottom: 4px;">%100 Kaskolu & Hasarsız</h3>
              <p style="font-size: 0.9rem; color: var(--text-muted);">Tüm taşımalarımız kurumsal sigorta koruması altında gerçekleştirilir; tampon, marşpiyel veya alt takım çizilmez.</p>
            </div>
          </div>
          <div class="why-us-card">
            <div class="why-us-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg></div>
            <div>
              <h3 style="font-size: 1.1rem; margin-bottom: 4px;">Net & Sabit Fiyat Garantisi</h3>
              <p style="font-size: 0.9rem; color: var(--text-muted);">Telefonda veya WhatsApp'ta ne fiyat verildiyse o geçerlidir; sonradan sürpriz ek masraf talep edilmez.</p>
            </div>
          </div>
          <div class="why-us-card">
            <div class="why-us-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg></div>
            <div>
              <h3 style="font-size: 1.1rem; margin-bottom: 4px;">Yerinde Yol Yardım & Akü</h3>
              <p style="font-size: 0.9rem; color: var(--text-muted);">Akü bitmesi, lastik patlaması gibi arızalarda aracınızı çekmeden yerinde çalıştırarak zaman kazandırıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sıkça Sorulan Sorular (FAQ) -->
      <section style="margin-bottom: 45px;">
        <h2 style="font-size: 1.5rem; color: var(--secondary); margin-bottom: 18px;">${region.name} Oto Çekici Sıkça Sorulan Sorular</h2>
        <div class="faq-list">
          ${faqAccordionHtml}
        </div>
      </section>

      <!-- Diğer Hizmet Bölgelerimiz -->
      <section style="background: var(--bg-light); padding: 25px; border-radius: var(--radius-md); margin-bottom: 30px;">
        <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 14px;">Çevre Hizmet Bölgelerimiz & Nöbetçi Çekici Noktaları</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${otherRegionsHtml}
          <a href="../bolgeler/index.html" class="related-region-link" style="background: var(--primary); color: #fff; font-weight: 700;">
            <span>Tüm 24 Bölgeyi Gör →</span>
          </a>
        </div>
      </section>

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
    <a href="tel:05441380734" class="floating-btn floating-call" id="float-call-${region.slug}" title="0544 138 07 34">
      <span class="svg-icon" style="width: 22px; height: 22px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg></span>
      <span>0544 138 07 34</span>
    </a>
    <a href="#" class="floating-btn floating-whatsapp btn-send-location" id="float-wp-${region.slug}" title="WhatsApp Canlı Konum">
      <span class="svg-icon" style="width: 22px; height: 22px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg></span>
      <span>WhatsApp Konum</span>
    </a>
  </div>

  <script src="../js/main.js"></script>
</body>
</html>`;
}

// Helper: Build bolgeler/index.html
function generateBolgelerIndexHtml() {
  const cardsHtml = regions.map(r => `
        <div class="region-card-luxury" data-category="${r.category}">
          <div class="region-card-header">
            <div class="region-pin-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <div>
              <h2 class="region-card-title">${r.name} Oto Çekici</h2>
              <span class="region-card-category">${r.categoryName}</span>
            </div>
          </div>
          <p class="region-card-desc">${r.metaDesc}</p>
          <div class="region-card-meta">
            <span class="region-badge-pill" style="font-size:0.75rem; padding: 3px 8px;"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg> ${r.eta} Varış</span>
            <span class="region-badge-pill" style="font-size:0.75rem; padding: 3px 8px;"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg> Kaskolu</span>
          </div>
          <div class="region-card-actions">
            <a href="${r.slug}.html" class="btn btn-secondary btn-sm" style="flex:1; justify-content:center;">Bölge Detayı</a>
            <a href="tel:05441380734" class="btn btn-call btn-sm" style="flex:1; justify-content:center;">Hemen Ara</a>
          </div>
        </div>
  `).join('');

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
  <title>Hizmet Bölgelerimiz | Ümraniye Yol Yardım 7/24 Oto Çekici - Ümraniye, Ataşehir, Çekmeköy</title>
  <meta name="description" content="Ümraniye, Dudullu, Çekmeköy, Ataşehir, Sancaktepe, Üsküdar, TEM ve Şile Otoyolu'nda 7/24 nöbetçi çekici noktalarımız. 24 farklı bölgede 10-15 dakikada en yakın oto çekici. 0544 138 07 34.">
  <meta name="keywords" content="ümraniye çekici, dudullu çekici, çekmeköy çekici, ataşehir çekici, sancaktepe çekici, üsküdar çekici, tem otoyolu çekici, şile otoyolu çekici, en yakın çekici bölgeleri">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://umraniyeyolyardim.com/bolgeler/index.html">
  <base href="/bolgeler/">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Hizmet Bölgelerimiz | Ümraniye Yol Yardım">
  <meta property="og:description" content="İstanbul Anadolu Yakası'nda 24 stratejik noktada nöbetçi çekici filomuz 7/24 emrinizde. 0544 138 07 34">
  <meta property="og:url" content="https://umraniyeyolyardim.com/bolgeler/index.html">
  <meta property="og:locale" content="tr_TR">

  <link rel="stylesheet" href="../css/style.css">
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

  <!-- Header -->
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

  <!-- Hero Bölümü -->
  <section class="section" style="background: radial-gradient(circle at top right, rgba(255, 85, 0, 0.12) 0%, transparent 60%), #070b14; color: #fff; padding: 65px 0 50px;">
    <div class="container">
      <div style="max-width: 860px;">
        <span class="section-tag" style="background: rgba(255, 85, 0, 0.2); color: #ff8533; border: 1px solid rgba(255, 85, 0, 0.35);">7/24 Kesintisiz Kapsama Ağı</span>
        <h1 style="font-size: 2.5rem; font-weight: 900; margin: 15px 0 15px; line-height: 1.25;">
          Tüm Hizmet Bölgelerimiz & <span style="color: var(--primary);">Nöbetçi Çekici Noktaları</span>
        </h1>
        <p style="font-size: 1.1rem; color: #cbd5e1; line-height: 1.7;">
          Ümraniye merkez üssümüz başta olmak üzere; Dudullu, Çekmeköy, Ataşehir, Sancaktepe, Üsküdar, TEM, Şile Otoyolu, D-100 ve Kuzey Marmara Otoyolu'nda 24 stratejik noktada hazır bekleyen hidrolik kayar kasa çekicilerimizle ortalama 10-15 dakikada yanınızdayız.
        </p>
      </div>
    </div>
  </section>

  <!-- Bölgeler Grid ve Filtreleme -->
  <section class="section" style="background: var(--bg-light); padding: 65px 0 85px;">
    <div class="container">
      <!-- Filtreleme Butonları -->
      <div class="region-filter-tabs" style="margin-top: 15px; margin-bottom: 35px;">
        <button class="filter-tab-btn active" data-filter="all">Tüm Bölgeler (24)</button>
        <button class="filter-tab-btn" data-filter="umraniye">Ümraniye & Mahalleleri</button>
        <button class="filter-tab-btn" data-filter="komsu">Komşu İlçeler</button>
        <button class="filter-tab-btn" data-filter="otoyol">Otoyollar & Gişeler</button>
      </div>

      <!-- Bölge Kartları Grid -->
      <div id="regions-container" class="grid grid-3" style="gap: 22px;">
        ${cardsHtml}
      </div>

      <!-- Çağrı Şeridi (CTA) -->
      <div style="margin-top: 60px; background: #fff; border-radius: var(--radius-lg); padding: 40px; text-align: center; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
        <h2 style="font-size: 1.75rem; color: var(--secondary); margin-bottom: 10px;">Listede Aradığınız Semti Bulamadınız mı?</h2>
        <p style="color: var(--text-muted); max-width: 650px; margin: 0 auto 24px; font-size: 1rem; line-height: 1.6;">
          İstanbul Anadolu Yakası'nın tüm ilçe, mahalle ve çevre otoyollarına kesintisiz hizmet veriyoruz. Bize hemen telefonla ya da WhatsApp canlı konum atarak ulaşın.
        </p>
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
          <a href="tel:05441380734" class="btn btn-call btn-lg">
            <span class="svg-icon" style="width:18px;height:18px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg></span> 0544 138 07 34
          </a>
          <a href="#" class="btn btn-whatsapp btn-lg btn-send-location">
            <span class="svg-icon" style="width:18px;height:18px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg></span> WhatsApp'tan Konum Paylaş
          </a>
        </div>
      </div>
    </div>
  </section>

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
    <a href="tel:05441380734" class="floating-btn floating-call" id="float-call-bolgeler-index" title="0544 138 07 34">
      <span class="svg-icon" style="width: 22px; height: 22px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg></span>
      <span>0544 138 07 34</span>
    </a>
    <a href="#" class="floating-btn floating-whatsapp btn-send-location" id="float-wp-bolgeler-index" title="WhatsApp Canlı Konum">
      <span class="svg-icon" style="width: 22px; height: 22px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg></span>
      <span>WhatsApp Konum</span>
    </a>
  </div>

  <script src="../js/main.js"></script>
</body>
</html>`;
}

// Execution
async function main() {
  console.log('Generating Ümraniye regions...');

  // 1. Remove old Tuzla files
  const existingFiles = fs.readdirSync(bolgelerDir);
  for (const file of existingFiles) {
    if (file.endsWith('.html')) {
      fs.unlinkSync(path.join(bolgelerDir, file));
    }
  }

  // 2. Generate 24 region pages
  for (const r of regions) {
    const html = generateRegionHtml(r);
    fs.writeFileSync(path.join(bolgelerDir, `${r.slug}.html`), html, 'utf8');
    console.log(`Generated: ${r.slug}.html`);
  }

  // 3. Generate bolgeler/index.html
  const indexHtml = generateBolgelerIndexHtml();
  fs.writeFileSync(path.join(bolgelerDir, 'index.html'), indexHtml, 'utf8');
  console.log('Generated: bolgeler/index.html');

  console.log(`Total regions created: ${regions.length}`);
}

main().catch(console.error);
