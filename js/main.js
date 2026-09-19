/**
 * ÜMRANİYE YOL YARDIM & OTO ÇEKİCİ - GELİŞMİŞ ETKİLEŞİM & NAVİGASYON MOTORU
 * Tel & WhatsApp: 0544 138 07 34
 */

document.addEventListener('DOMContentLoaded', () => {
  const PHONE_NUMBER = '905441380734';

  // 1. Mobil Menü Aç/Kapat (Ana sayfa ve tüm alt sayfalarda çalışır)
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

    document.addEventListener('click', (e) => {
      const isNavActive = (mainNav && mainNav.classList.contains('active')) || 
                          (mobileDrawer && mobileDrawer.classList.contains('active'));

      if (isNavActive && !menuBtn.contains(e.target)) {
        if (mainNav && !mainNav.contains(e.target)) closeMenu();
        if (mobileDrawer && !mobileDrawer.contains(e.target)) closeMenu();
      }
    });
  }

  // 2. WhatsApp Yönlendirme Motoru (Safari / iOS / Android Tam Uyumlu)
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

  // 3. Teklif & Çağrı Formları (Ana sayfa + Tüm Bölge ve Hizmet Alt Sayfalarındaki Formlar)
  document.querySelectorAll('form#dispatch-quote-form, form#hero-quote-form, form.wp-contact-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const region = form.querySelector('[name="region_select"], #dispatch-region, #hero-region-select')?.value || 'Ümraniye';
      const vehicle = form.querySelector('[name="vehicle_type_select"], #dispatch-vehicle, #hero-vehicle-select')?.value || 'Binek Otomobil';
      const problem = form.querySelector('[name="problem_select"], #dispatch-problem, #hero-problem-select')?.value || 'Arıza / Yürümüyor';
      const toLocation = form.querySelector('[name="to_location"]')?.value || '';
      const userPhone = form.querySelector('[name="user_phone"]')?.value || '';

      let message = `Merhaba Ümraniye Yol Yardım,\nAcil oto çekiciye ihtiyacım var:\n\n📍 Bulunduğum Bölge: ${region}\n🚗 Araç Türü: ${vehicle}\n⚠️ Durum / Problem: ${problem}`;
      if (toLocation) message += `\n🎯 Bırakılacak Yer: ${toLocation}`;
      if (userPhone) message += `\n📞 İletişim Tel: ${userPhone}`;
      message += `\n\nEn yakın oto çekicinizi yönlendirip net fiyat iletebilir misiniz? Konumumu paylaşıyorum:`;

      window.sendWhatsAppMessage(message);
    });
  });

  // 4. Doğrudan WhatsApp Canlı Konum Gönderme Butonları
  document.querySelectorAll('.btn-send-location, .sticky-btn-whatsapp').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = 'Merhaba Ümraniye Yol Yardım, yolda kaldım. Bulunduğum konuma en yakın oto çekici aracınızı yönlendirir misiniz? Konumumu iletiyorum:';
      window.sendWhatsAppMessage(message);
    });
  });

  // 5. Bölge Filtreleme Sekmeleri
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

  // 6. Galeri Filtre Sekmeleri
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

  // 7. Sıkça Sorulan Sorular (FAQ) Akordiyonu (Ana Sayfa + Tüm Alt Sayfalar)
  const faqItems = document.querySelectorAll('.faq-card, .faq-item');
  faqItems.forEach(card => {
    const trigger = card.querySelector('.faq-trigger, .faq-question');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = card.classList.contains('active');
        const parentWrap = card.closest('.faq-wrapper, .faq-wrap');
        if (parentWrap) {
          parentWrap.querySelectorAll('.faq-card, .faq-item').forEach(c => c.classList.remove('active'));
        }
        if (!isOpen) {
          card.classList.add('active');
        }
      });
    }
  });

  // 8. Galeri Lightbox Büyütme Modalı (galeri.html)
  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = lightbox.querySelector('.lightbox-close-btn');

    document.querySelectorAll('.gallery-item, .photo-slot-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // Eğer kart içindeki doğrudan telefon/whatsapp linkine basıldıysa lightbox açma
        if (e.target.closest('a')) return;

        const src = card.getAttribute('data-lightbox-src') || card.querySelector('img')?.src;
        const title = card.getAttribute('data-lightbox-title') || card.querySelector('img')?.title || card.querySelector('.photo-caption-title')?.textContent;
        const desc = card.getAttribute('data-lightbox-desc') || card.querySelector('.photo-caption-desc')?.textContent;

        if (src && lightboxImg) {
          lightboxImg.src = src;
          if (lightboxTitle && title) lightboxTitle.textContent = title;
          if (lightboxDesc && desc) lightboxDesc.textContent = desc;
          lightbox.classList.add('active');
          lightbox.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
});