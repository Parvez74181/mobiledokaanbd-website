export async function GET({ request }) {
  let { url } = request;
  url = new URL(url).origin;

  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

	<url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/disclaimer</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/privacy</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
        <loc>${url}/blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
</urlset>`;

  return new Response(xmlString.replace(/,/g, ""), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
