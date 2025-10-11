const fs = require('fs');

const baseUrl = 'https://wealthwave-realty-firm.netlify.app';

const routes = [
  '/',
  '/about',
  '/projects',
  '/contact',
  '/blog',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>
`;

fs.writeFileSync('./public/sitemap.xml', sitemap);

console.log('Sitemap generated successfully!');
