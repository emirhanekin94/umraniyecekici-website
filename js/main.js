/**
 * ÜMRANİYE YOL YARDIM & OTO ÇEKİCİ - ULTRA MODERN MOBİL VE ETKİLEŞİM MOTORU
 * Tel & WhatsApp: 0544 138 07 34
 */

document.addEventListener('DOMContentLoaded', () => {
  const PHONE_NUMBER = '905441380734';

  // 1. Mobil Menü Aç / Kapat
  const menuBtn = document.querySelector('.menu-toggle-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = menuBtn.classList.toggle('active');
      mobileDrawer.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Menü içindeki linke tıklandığında çekmeceyi kapat
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileDrawer.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Dışarı tıklandığında menüyü kapat
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('active') && !mobileDrawer.contains(e.target) && !menuBtn.contains(e.target)) {
        menuBtn.classList.remove('active');
        mobileDrawer.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. WhatsApp Mesajı Gönderme Motoru (iOS / Android / Safari Uyumlu)
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
  const dispatchForm = document.getElementById('dispatch-quote-form');
  if (dispatchForm) {
    dispatchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const region = document.getElementById('dispatch-region')?.value || 'Ümraniye';
      const vehicle = document.getElementById('dispatch-vehicle')?.value || 'Binek Otomobil';
      const problem = document.getElementById('dispatch-problem')?.value || 'Arıza / Yolda Kaldı';

      const message = `Merhaba Ümraniye Yol Yardım,\nAcil çekiciye ihtiyacım var:\n\n📍 Bulunduğum Bölge: ${region}\n🚗 Araç Türü: ${vehicle}\n⚠️ Durum / Problem: ${problem}\n\nEn yakın çekici aracınızı yönlendirip net fiyat iletir misiniz? Konumumu iletiyorum.`;

      window.sendWhatsAppMessage(message);
    });
  }

  // 4. Doğrudan WhatsApp Konum Gönderme Butonları
  document.querySelectorAll('.btn-send-location').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = 'Merhaba Ümraniye Yol Yardım, yolda kaldım. Bulunduğum konuma en yakın çekiciyi yönlendirir misiniz? Konumumu paylaşıyorum:';
      window.sendWhatsAppMessage(message);
    });
  });

  // 5. Bölge Filtreleme Sekmeleri (Tabs / Chips)
  const tabBtns = document.querySelectorAll('.region-tab-btn');
  const regionCards = document.querySelectorAll('.region-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.getAttribute('data-category');

      regionCards.forEach(card => {
        if (targetCategory === 'all' || card.getAttribute('data-category') === targetCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Sıkça Sorulan Sorular (FAQ) Akordiyonu
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const trigger = card.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = card.classList.contains('active');
        // Diğerlerini kapat
        faqCards.forEach(c => c.classList.remove('active'));
        if (!isOpen) {
          card.classList.add('active');
        }
      });
    }
  });
});