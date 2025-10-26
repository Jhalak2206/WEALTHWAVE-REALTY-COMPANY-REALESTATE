const fs = require('fs');
const { createClient } = require('contentful');

// 1️⃣ Connect to Contentful
const client = createClient({
  space: 'imy9d1nvx7gf',           // Replace with your Contentful Space ID
  accessToken: 'uRebYWzMu6Y1UZ216OJi8TtblPnqte5135yG31tDxyg', // Replace with your Delivery API token
});

// 2️⃣ Base URL of your site
const BASE_URL = 'https://wealthwaverealty.in';

// 3️⃣ Static pages to include
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/properties', changefreq: 'weekly', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/guides', changefreq: 'monthly', priority: 0.7 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms-and-conditions', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms', changefreq: 'yearly', priority: 0.5 },
];

// 4️⃣ Helper to create URL entry
const createUrlEntry = (loc, changefreq, priority, lastmod) => `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;

async function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach((page) => {
    sitemap += createUrlEntry(page.url, page.changefreq, page.priority, new Date().toISOString());
  });

  // Placeholder for dynamic property pages
  // Example: add manually later when you have property URLs
  const propertyURLs = [
    // '/properties/123',
    // '/properties/456',
  ];
  propertyURLs.forEach((url) => {
    sitemap += createUrlEntry(url, 'weekly', 0.9, new Date().toISOString());
  });

  // Add dynamic blog pages
  try {
    const blogs = await client.getEntries({ content_type: 'BlogSinglePost.js' });
    blogs.items.forEach((item) => {
      const slug = item.fields.slug; // make sure slug exists in Contentful
      const lastmod = item.fields.updatedAt || new Date().toISOString();
      sitemap += createUrlEntry(`/blog/${slug}`, 'weekly', 0.7, lastmod);
    });
  } catch (err) {
    console.error('Error fetching blogs from Contentful:', err);
  }

  sitemap += '\n</urlset>';

  // Write to public folder
  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated successfully in public/sitemap.xml');
}

generateSitemap().catch(console.error);
