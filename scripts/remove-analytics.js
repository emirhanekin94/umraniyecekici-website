const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        processDir(fullPath);
      }
    } else if (entry.name.endsWith('.html') || (entry.name.endsWith('.js') && dir.includes('scripts'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('G-JHT62VL18P') || content.includes('googletagmanager.com/gtag/js')) {
        // Remove Google tag comment and script blocks
        const cleaned = content
          .replace(/\s*<!-- Google tag \(gtag\.js\) -->\s*<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-JHT62VL18P"><\/script>\s*<script>[\s\S]*?gtag\('config',\s*'G-JHT62VL18P'\);\s*<\/script>/g, '')
          .replace(/\s*<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-JHT62VL18P"><\/script>\s*<script>[\s\S]*?gtag\('config',\s*'G-JHT62VL18P'\);\s*<\/script>/g, '');
        
        if (cleaned !== content) {
          fs.writeFileSync(fullPath, cleaned, 'utf8');
          console.log(`Cleaned: ${fullPath}`);
        } else {
          console.log(`Manual check needed: ${fullPath}`);
        }
      }
    }
  }
}

processDir('.');
console.log('Finished removing Google Analytics.');
