const http = require('http');

const urls = [
  'http://localhost:3000/hizmetler/oto-cekici.html',
  'http://localhost:3000/hizmetler/oto-kurtarma.html',
  'http://localhost:3000/hizmetler/oto-cekici',
  'http://localhost:3000/hizmetler/oto-kurtarma',
  'http://localhost:3000/oto-cekici.html',
  'http://localhost:3000/oto-kurtarma.html',
  'http://localhost:3000/oto-cekici',
  'http://localhost:3000/oto-kurtarma',
  'http://localhost:3000/cekici-arac-tasima.html',
  'http://localhost:3000/cekici-arac-tasima',
  'http://localhost:3000/hizmetler/lastik-tamir-degisim.html',
  'http://localhost:3000/hizmetler/yol-yardim-aku-takviye.html',
  'http://localhost:3000/hizmetler/ariza-yol-yardim.html',
  'http://localhost:3000/hizmetler/motosiklet-cekici.html',
  'http://localhost:3000/hizmetler/tekne-karavan-cekici.html',
  'http://localhost:3000/hizmetler/agir-vasita-kurtarma.html',
  'http://localhost:3000/hizmetler/sehirlerarasi-arac-tasima.html',
  'http://localhost:3000/lastik-tamir-degisim.html',
  'http://localhost:3000/yol-yardim-aku-takviye.html',
  'http://localhost:3000/ariza-yol-yardim.html',
  'http://localhost:3000/motosiklet-cekici.html',
  'http://localhost:3000/tekne-karavan-cekici.html',
  'http://localhost:3000/agir-vasita-kurtarma.html',
  'http://localhost:3000/sehirlerarasi-arac-tasima.html'
];

async function checkUrl(url) {
  return new Promise(resolve => {
    http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<title>(.*?)<\/title>/);
        const title = titleMatch ? titleMatch[1].trim() : 'No title';
        resolve({ url, status: res.statusCode, title });
      });
    }).on('error', err => {
      resolve({ url, status: 'ERROR', error: err.message });
    });
  });
}

async function runAll() {
  console.log('Testing HTTP Endpoints...');
  let failed = 0;
  for (const u of urls) {
    const res = await checkUrl(u);
    const ok = res.status === 200;
    if (!ok) failed++;
    console.log(`[${ok ? 'OK' : 'FAIL'}] ${res.status} | ${res.url} -> ${res.title || res.error}`);
  }
  console.log(`\nResults: ${urls.length - failed}/${urls.length} succeeded, ${failed} failed.`);
}

runAll();
