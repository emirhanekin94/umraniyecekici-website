const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '..', 'images');

async function optimizeAll() {
  console.log('--- Starting Image Super-Optimization ---');
  let totalSaved = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  // 1. Optimize logo.webp & logo.png
  const logoPath = path.join(IMAGES_DIR, 'logo.webp');
  const logoPngPath = path.join(IMAGES_DIR, 'logo.png');

  if (fs.existsSync(logoPngPath)) {
    const rawPng = fs.readFileSync(logoPngPath);
    totalBefore += rawPng.length;
    console.log(`Original logo.png: ${(rawPng.length / 1024).toFixed(1)} KB`);

    // Create high-res 160x160 true WebP (for 2x retina display of 48px-80px logo)
    const logoWebpBuffer = await sharp(rawPng)
      .resize(160, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 85, effort: 6 })
      .toBuffer();
    fs.writeFileSync(logoPath, logoWebpBuffer);
    console.log(`Optimized logo.webp: ${(logoWebpBuffer.length / 1024).toFixed(1)} KB`);

    // Also optimize logo.png (160x160 PNG)
    const logoPngBuffer = await sharp(rawPng)
      .resize(160, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(logoPngPath, logoPngBuffer);
    console.log(`Optimized logo.png: ${(logoPngBuffer.length / 1024).toFixed(1)} KB`);

    totalAfter += logoWebpBuffer.length + logoPngBuffer.length;
  }

  // 2. Kapak (Hero) images
  const heroPath = path.join(IMAGES_DIR, 'kapak-fotografi.webp');
  const mobileHeroPath = path.join(IMAGES_DIR, 'kapak-fotografi-mobile.webp');

  if (fs.existsSync(heroPath)) {
    const heroBuf = fs.readFileSync(heroPath);
    totalBefore += heroBuf.length;

    // Mobile hero: max 720px width
    const mobHeroBuf = await sharp(heroBuf)
      .resize({ width: 720, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toBuffer();
    fs.writeFileSync(mobileHeroPath, mobHeroBuf);
    console.log(`Mobile hero: ${(mobHeroBuf.length / 1024).toFixed(1)} KB`);

    // Desktop hero: max 1280px width
    const deskHeroBuf = await sharp(heroBuf)
      .resize({ width: 1280, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroPath, deskHeroBuf);
    console.log(`Desktop hero: ${(deskHeroBuf.length / 1024).toFixed(1)} KB`);

    totalAfter += deskHeroBuf.length;
  }

  // 3. All other webp images (cards, services, galleries)
  const files = fs.readdirSync(IMAGES_DIR);
  for (const file of files) {
    if (!file.endsWith('.webp') || file === 'logo.webp' || file === 'kapak-fotografi.webp' || file === 'kapak-fotografi-mobile.webp') {
      continue;
    }

    const filePath = path.join(IMAGES_DIR, file);
    const origBuf = fs.readFileSync(filePath);
    const origSize = origBuf.length;
    totalBefore += origSize;

    try {
      const meta = await sharp(origBuf).metadata();
      // Service cards are at most 400-600px wide. 640px is plenty for 2x mobile DPR.
      const targetWidth = meta.width > 640 ? 640 : meta.width;

      const optimized = await sharp(origBuf)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .webp({ quality: 75, effort: 6 })
        .toBuffer();

      fs.writeFileSync(filePath, optimized);
      const saved = origSize - optimized.length;
      totalAfter += optimized.length;
      console.log(`Optimized ${file}: ${(origSize / 1024).toFixed(1)} KB -> ${(optimized.length / 1024).toFixed(1)} KB (Saved ${(saved / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error on ${file}:`, err.message);
      totalAfter += origSize;
    }
  }

  console.log('========================================');
  console.log(`Total Before: ${(totalBefore / 1024).toFixed(1)} KB`);
  console.log(`Total After: ${(totalAfter / 1024).toFixed(1)} KB`);
  console.log(`Total Saved: ${((totalBefore - totalAfter) / 1024).toFixed(1)} KB (${((totalBefore - totalAfter) / (1024 * 1024)).toFixed(2)} MB)`);
  console.log('========================================');
}

optimizeAll().catch(console.error);
