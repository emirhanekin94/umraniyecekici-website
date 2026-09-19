const fs = require('fs');
const path = require('path');
const http = require('http');

const rootDir = path.join(__dirname, '..');

// Let's remove the dummy folders at root that conflict with cleanUrls
const serviceFolders = [
  'oto-cekici',
  'oto-kurtarma',
  'cekici-arac-tasima',
  'lastik-tamir-degisim',
  'yol-yardim-aku-takviye',
  'ariza-yol-yardim',
  'motosiklet-cekici',
  'tekne-karavan-cekici',
  'agir-vasita-kurtarma',
  'sehirlerarasi-arac-tasima'
];

serviceFolders.forEach(dirName => {
  const p = path.join(rootDir, dirName);
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log('Removed directory:', dirName);
  }
});

// Also in hizmetler, check if dummy folders exist
const hizmetlerDir = path.join(rootDir, 'hizmetler');
serviceFolders.forEach(dirName => {
  const p = path.join(hizmetlerDir, dirName);
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log('Removed directory in hizmetler:', dirName);
  }
});

// Now test /oto-cekici and /oto-kurtarma
setTimeout(() => {
  ['http://localhost:3000/oto-cekici', 'http://localhost:3000/hizmetler/oto-cekici'].forEach(u => {
    http.get(u, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        console.log(u, 'STATUS:', res.statusCode, 'TITLE:', (d.match(/<title>(.*?)<\/title>/) || [])[1]);
      });
    });
  });
}, 500);
