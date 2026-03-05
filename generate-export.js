import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');

// Ensure dist exists
if (!fs.existsSync(distDir)) {
  console.error('dist directory not found. Run npm run build first.');
  process.exit(1);
}

const filesToExport = [
  { name: 'index.html', path: path.join(distDir, 'index.html') },
  { name: 'main.js', path: path.join(distDir, 'main.js') },
  { name: 'styles.css', path: path.join(distDir, 'styles.css') },
  { name: '_redirects', path: path.join(publicDir, '_redirects') },
  { name: 'sitemap.xml', path: path.join(publicDir, 'sitemap.xml') },
  { name: 'robots.txt', path: path.join(publicDir, 'robots.txt') },
  { name: 'favicon.svg', path: path.join(publicDir, 'favicon.svg') }
];

const exportData = {};

filesToExport.forEach(file => {
  try {
    if (fs.existsSync(file.path)) {
      exportData[file.name] = fs.readFileSync(file.path, 'utf-8');
    } else {
      exportData[file.name] = `// File ${file.name} not found`;
    }
  } catch (e) {
    exportData[file.name] = `// Error reading ${file.name}: ${e.message}`;
  }
});

// Write to dist/export-data.json
fs.writeFileSync(path.join(distDir, 'export-data.json'), JSON.stringify(exportData, null, 2));

console.log('Export data generated successfully.');
