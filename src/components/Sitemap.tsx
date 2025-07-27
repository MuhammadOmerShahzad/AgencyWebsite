import React from 'react';
import { Helmet } from 'react-helmet-async';

const Sitemap: React.FC = () => {
  const baseUrl = 'https://codbyt.com';
  
  const pages = [
    { url: '/', title: 'Home', priority: '1.0', changefreq: 'weekly' },
    { url: '/privacy', title: 'Privacy Policy', priority: '0.5', changefreq: 'monthly' },
    { url: '/terms', title: 'Terms of Service', priority: '0.5', changefreq: 'monthly' },
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`).join('')}
</urlset>`;

  return (
    <Helmet>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
    </Helmet>
  );
};

export default Sitemap; 