const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function createCirclePNG(size, bgHex, borderHex, innerHex) {
  const width = size;
  const height = size;
  const radius = size / 2;
  const center = size / 2;

  // Uncompressed raw scanlines: each line starts with filter byte 0, followed by RGBA
  const scanlines = Buffer.alloc(height * (1 + width * 4));
  let offset = 0;

  function parseHex(h) {
    const num = parseInt(h.replace('#', ''), 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }

  const [bgR, bgG, bgB] = parseHex(bgHex);
  const [bdrR, bdrG, bdrB] = parseHex(borderHex);
  const [inR, inG, inB] = parseHex(innerHex);

  for (let y = 0; y < height; y++) {
    scanlines[offset++] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const dx = x - center + 0.5;
      const dy = y - center + 0.5;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > radius) {
        // Transparent
        scanlines[offset++] = 0;
        scanlines[offset++] = 0;
        scanlines[offset++] = 0;
        scanlines[offset++] = 0;
      } else if (dist > radius - 2) {
        // Outer chrome/silver rim
        scanlines[offset++] = 230;
        scanlines[offset++] = 230;
        scanlines[offset++] = 235;
        scanlines[offset++] = 255;
      } else if (dist > radius - 4.5) {
        // Orange neon ring
        scanlines[offset++] = bdrR;
        scanlines[offset++] = bdrG;
        scanlines[offset++] = bdrB;
        scanlines[offset++] = 255;
      } else if (dist > radius - 6) {
        // Dark ring groove
        scanlines[offset++] = 10;
        scanlines[offset++] = 16;
        scanlines[offset++] = 28;
        scanlines[offset++] = 255;
      } else {
        // Center tow truck stylized shape
        // Normalize coordinates inside (-1 to 1)
        const nx = (x - center) / (radius - 6);
        const ny = (y - center) / (radius - 6);

        // Truck silhouette logic
        // Cab box: nx between -0.6 and -0.1, ny between -0.1 and 0.4
        // Bed: nx between -0.1 and 0.6, ny between 0.15 and 0.35
        // Boom: line from (0.0, 0.2) to (0.5, -0.45)
        let isTruck = false;
        let isWindow = false;
        let isWheels = false;
        let isBoom = false;

        // Cab
        if (nx >= -0.65 && nx <= -0.1 && ny >= -0.2 && ny <= 0.35) {
          isTruck = true;
          // Window
          if (nx >= -0.48 && nx <= -0.15 && ny >= -0.15 && ny <= 0.05) {
            isWindow = true;
          }
        }
        // Bed
        if (nx >= -0.1 && nx <= 0.65 && ny >= 0.15 && ny <= 0.35) {
          isTruck = true;
        }
        // Crane Boom
        // line distance to segment (0.0, 0.2) -> (0.45, -0.45)
        const bx0 = 0.0, by0 = 0.2;
        const bx1 = 0.45, by1 = -0.45;
        const bdx = bx1 - bx0, bdy = by1 - by0;
        const t = Math.max(0, Math.min(1, ((nx - bx0) * bdx + (ny - by0) * bdy) / (bdx * bdx + bdy * bdy)));
        const projX = bx0 + t * bdx;
        const projY = by0 + t * bdy;
        const bdist = Math.hypot(nx - projX, ny - projY);
        if (bdist < 0.09) {
          isBoom = true;
        }

        // Wheels at (-0.4, 0.42) and (0.2, 0.42) and (0.45, 0.42)
        const wdist1 = Math.hypot(nx - (-0.4), ny - 0.40);
        const wdist2 = Math.hypot(nx - 0.25, ny - 0.40);
        const wdist3 = Math.hypot(nx - 0.50, ny - 0.40);
        if (wdist1 < 0.16 || wdist2 < 0.16 || wdist3 < 0.16) {
          isWheels = true;
        }

        // Amber Beacon atop cab
        if (nx >= -0.52 && nx <= -0.25 && ny >= -0.32 && ny <= -0.22) {
          // Beacon
          scanlines[offset++] = 251;
          scanlines[offset++] = 191;
          scanlines[offset++] = 36;
          scanlines[offset++] = 255;
          continue;
        }

        if (isWindow) {
          scanlines[offset++] = 56;
          scanlines[offset++] = 189;
          scanlines[offset++] = 248; // light cyan glass
          scanlines[offset++] = 255;
        } else if (isWheels) {
          scanlines[offset++] = 15;
          scanlines[offset++] = 23;
          scanlines[offset++] = 42;
          scanlines[offset++] = 255;
        } else if (isBoom) {
          scanlines[offset++] = 255;
          scanlines[offset++] = 120;
          scanlines[offset++] = 0;
          scanlines[offset++] = 255;
        } else if (isTruck) {
          scanlines[offset++] = inR;
          scanlines[offset++] = inG;
          scanlines[offset++] = inB;
          scanlines[offset++] = 255;
        } else {
          // Dark background with gradient
          const gradFade = (ny + 1) * 0.15;
          scanlines[offset++] = Math.round(bgR * (1 - gradFade));
          scanlines[offset++] = Math.round(bgG * (1 - gradFade));
          scanlines[offset++] = Math.round(bgB * (1 - gradFade));
          scanlines[offset++] = 255;
        }
      }
    }
  }

  // Deflate scanlines
  const compressed = zlib.deflateSync(scanlines);

  // PNG chunks
  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);

    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    const crc = crc32(Buffer.concat([typeBuf, data]));
    crcBuf.writeInt32BE(crc, 0);

    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  // CRC32 table
  function crc32(buf) {
    let crc = -1;
    for (let i = 0; i < buf.length; i++) {
      let byte = buf[i];
      for (let j = 0; j < 8; j++) {
        const bit = (byte ^ crc) & 1;
        crc = (crc >>> 1) ^ (bit ? 0xEDB88320 : 0);
        byte >>>= 1;
      }
    }
    return ~crc;
  }

  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth
  ihdr[9] = 6; // Color type: RGBA
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

// Generate sizes
const png192 = createCirclePNG(192, '#0c1322', '#ff5500', '#ff6b00');
const png48 = createCirclePNG(48, '#0c1322', '#ff5500', '#ff6b00');
const png32 = createCirclePNG(32, '#0c1322', '#ff5500', '#ff6b00');
const png16 = createCirclePNG(16, '#0c1322', '#ff5500', '#ff6b00');

const imagesDir = path.join(__dirname, '..', 'images');
const rootDir = path.join(__dirname, '..');

fs.writeFileSync(path.join(imagesDir, 'logo.png'), png192);
fs.writeFileSync(path.join(imagesDir, 'logo-192.png'), png192);
fs.writeFileSync(path.join(imagesDir, 'apple-touch-icon.png'), png192);
fs.writeFileSync(path.join(rootDir, 'apple-touch-icon.png'), png192);
fs.writeFileSync(path.join(imagesDir, 'favicon-48x48.png'), png48);
fs.writeFileSync(path.join(imagesDir, 'favicon-32x32.png'), png32);
fs.writeFileSync(path.join(imagesDir, 'favicon-16x16.png'), png16);
fs.writeFileSync(path.join(rootDir, 'favicon.ico'), png32);
fs.writeFileSync(path.join(imagesDir, 'favicon.ico'), png32);

console.log('Zero-dependency PNG and ICO assets successfully created!');
