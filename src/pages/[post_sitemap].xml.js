import { XataClient } from "../xata";
const xata = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: import.meta.env.XATA_BRANCH,
});

export async function GET({ request }) {
  let { url } = request;

  url = new URL(url);

  const pageSize = 1000;
  const page =
    Number(url.pathname.split(".")[0].split("/post-sitemap")[1]) || 1;
  let records;

  const data = await xata.db.Posts.sort("xata.createdAt", "desc")
    .select(["slug", "images"])
    .getPaginated({
      pagination: {
        size: pageSize,
        offset: (page - 1) * pageSize,
      },
    });

  records = data.records;

  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
				
    ${records.map(
      (record) => `

					<url>
						<loc>${url.origin}/${record.slug}</loc>
						<lastmod>${record.xata.updatedAt.toISOString()}</lastmod>
					</url>
					`
    )}

</urlset>`;

  return new Response(xmlString.replace(/,/g, ""), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
