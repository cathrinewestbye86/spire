import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.html')) {
      let html = fs.readFileSync(p, 'utf8');
      html = html.replace(/href="(?!\/spire\/|https?:|mailto:|tel:|#|data:)(\/[^"]*)"/g, 'href="/spire$1"');
      fs.writeFileSync(p, html);
    }
  }
}

walk(dist);
console.log('base paths fixed');
