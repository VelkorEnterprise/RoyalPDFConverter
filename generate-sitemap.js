import fs from 'fs';
import { rawKeywords } from './data/seoKeywordsList.ts';

const countries = [
  'uk', 'de', 'fr', 'it', 'es', 'nl', 'ch', 'se', 'no', 'dk', 'fi', 'ie', 'be', 'at', 'pt', 'gr', 'pl', 'cz', 'lu', 'mc', 'is', 'hu', 'sk', 'ro', 'bg', 'hr', 'si', 'ee', 'lv', 'lt', 'ba', 'ru', 'tr',
  'us', 'ca', 'mx', 'br', 'ar', 'cl', 'co', 'pe', 'uy', 'ec', 'cr', 'pa',
  'jp', 'kr', 'cn', 'tw', 'hk', 'sg', 'au', 'nz', 'ae', 'sa', 'qa', 'kw', 'om', 'my', 'th', 'id', 'ph',
  'za', 'ng', 'eg', 'ke', 'ma', 'na', 'dz', 'tn'
];

const generatedKeywords = rawKeywords.map(k => k.replace(/\s+/g, '-').toLowerCase());

const baseUrl = 'https://royalpdfconverter.netlify.app';

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

for (const country of countries) {
  sitemap += `  <url>
    <loc>${baseUrl}/location/${country}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

for (const keyword of generatedKeywords) {
  sitemap += `  <url>
    <loc>${baseUrl}/feature/${keyword}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
}

sitemap += `</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');
