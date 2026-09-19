/**
 * ÜMRANİYE YOL YARDIM & OTO ÇEKİCİ - GELİŞMİŞ ETKİLEŞİM & NAVİGASYON MOTORU
 * Tel & WhatsApp: 0544 138 07 34
 */

document.addEventListener('DOMContentLoaded', () => {
  const PHONE_NUMBER = '905441380734';

  // 1. Mobil Menü Aç/Kapat (Tüm sayfalarda .main-nav ve .menu-toggle-btn desteklenir)
  const menuBtn = document.querySelector('.menu-toggle-btn');
  const mainNav = document.querySelector('.main-nav');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = menuBtn.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');

      if (mainNav) mainNav.classList.toggle('active');
      if (mobileDrawer) mobileDrawer.classList.toggle('active');
    });

    // Menü linklerine tıklandığında menüyü kapat
    const closeMenu = () => {
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (mainNav) mainNav.classList.remove('active');
      if (mobileDrawer) mobileDrawer.classList.remove('active');
    };

    if (mainNav) {
      mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    }
    if (mobileDrawer) {
      mobileDrawer.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    }

    // Dışarı tıklandığında menüyü kapat
    document.addEventListener('click', (e) => {
      const isNavActive = (mainNav && mainNav.classList.contains('active')) || 
                          (mobileDrawer && mobileDrawer.classList.contains('active'));

      if (isNavActive && !menuBtn.contains(e.target)) {
        if (mainNav && !mainNav.contains(e.target)) closeMenu();
        if (mobileDrawer && !mobileDrawer.contains(e.target)) closeMenu();
      }
    });
  }

  // 2. WhatsApp Mesajı Gönderme Yardımcısı (iOS / Android / Masaüstü)
  window.sendWhatsAppMessage = function(text) {
    const encodedText = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodedText}`;

    const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isMobile) {
      window.location.href = url;
    } else {
      const win = window.open(url, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = url;
      }
    }
  };

  // 3. Hızlı Çağrı / Fiyat Teklifi Formu
  const dispatchForm = document.getElementById('dispatch-quote-form') || document.getElementById('hero-quote-form');
  if (dispatchForm) {
    dispatchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const region = document.getElementById('dispatch-region')?.value || 
                     document.getElementById('hero-region-select')?.value || 'Ümraniye';
      const vehicle = document.getElementById('dispatch-vehicle')?.value || 
                      document.getElementById('hero-vehicle-select')?.value || 'Binek Otomobil';
      const problem = document.getElementById('dispatch-problem')?.value || 
                      document.getElementById('hero-problem-select')?.value || 'Arıza / Yürümüyor';

      const message = `Merhaba Ümraniye Yol Yardım,\nAcil oto çekiciye ihtiyacım var:\n\n📍 Bulunduğum Bölge: ${region}\n🚗 Araç Türü: ${vehicle}\n⚠️ Durum / Problem: ${problem}\n\nEn yakın çekicinizi yönlendirip fiyat iletebilir misiniz? Konumumu iletiyorum:`;

      window.sendWhatsAppMessage(message);
    });
  }

  // 4. Doğrudan WhatsApp Konum Gönderme Butonları
  document.querySelectorAll('.btn-send-location').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = 'Merhaba Ümraniye Yol Yardım, yolda kaldım. Bulunduğum konuma en yakın oto çekiciyi yönlendirir misiniz? Konumumu paylaşıyorum:';
      window.sendWhatsAppMessage(message);
    });
  });

  // 5. Bölgeler Filtre Sekmeleri (Hem index.html hem bolgeler/index.html ile tam uyumlu)
  const regionTabs = document.querySelectorAll('.region-filter-tabs .filter-tab-btn, .filter-tabs-wrap .filter-tab-btn, .region-tab-btn');
  const regionCards = document.querySelectorAll('.region-square-card, .region-card-luxury, .region-card');

  if (regionTabs.length && regionCards.length) {
    regionTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        regionTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filterVal = tab.getAttribute('data-filter') || tab.getAttribute('data-category');

        regionCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filterVal === 'all' || category === filterVal || category.includes(filterVal)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 6. Galeri Filtre Sekmeleri (galeri.html ile tam uyumlu)
  const galleryTabs = document.querySelectorAll('[data-gallery-filter]');
  const galleryItems = document.querySelectorAll('.gallery-item, .photo-slot-card');

  if (galleryTabs.length && galleryItems.length) {
    galleryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        galleryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filterVal = tab.getAttribute('data-gallery-filter');

        galleryItems.forEach(item => {
          const cat = item.getAttribute('data-category') || '';
          if (filterVal === 'all' || cat === filterVal || cat.split(' ').includes(filterVal)) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // 7. Sıkça Sorulan Sorular (FAQ) Akordiyonu
  const faqItems = document.querySelectorAll('.faq-card, .faq-item');
  faqItems.forEach(card => {
    const trigger = card.querySelector('.faq-trigger, .faq-question');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = card.classList.contains('active');
        faqItems.forEach(c => c.classList.remove('active'));
        if (!isOpen) {
          card.classList.add('active');
        }
      });
    }
  });
});