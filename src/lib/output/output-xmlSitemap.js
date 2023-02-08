// lib > output > output-xmlSitemap.js - XML sitemap

const xmlSitemap = (data, url) => {
  const entries = data.filter(obj => (obj.active && obj.xmlSitemap)).map(obj => {
    return(`<url>
      <loc>${url.protocol}//${url.host}${obj.slug}</loc>
    </url>`);
  }).join('');

  return new Response(xmlsitemapContent(entries), {status: 200, headers:{'content-type':'application/xml'}});
}

export default xmlSitemap;


const xmlsitemapContent = (entries) => {
  const declare = `<?xml version="1.0" encoding="UTF-8"?>`;
  const open = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const close = `</urlset>`;
  return [declare, open, entries, close].join('');
}