export async function GET({ request }) {
  let { url } = request;
  url = new URL(url).origin;

  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
        <loc>${url}/filter?filters=price.under-5000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.5000-10000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.10000-15000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.15000-20000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.20000-30000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.30000-40000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.40000-50000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.50000-60000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.60000-70000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.70000-80000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.80000-90000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.90000-100000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/filter?filters=price.above-100000-tk</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
</urlset>

`;

  return new Response(xmlString.replace(/,/g, ""), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
