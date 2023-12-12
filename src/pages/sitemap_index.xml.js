import { XataClient } from "../xata";
const xata = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: import.meta.env.XATA_BRANCH,
});

let totalRecords;
const pageSize = 1000;
export async function GET({ request }) {
  let { url } = request;
  url = new URL(url).origin;

  const count = await xata.db.Posts.summarize({
    summaries: {
      total: { count: "*" },
    },
  });

  totalRecords = count.summaries[0].total;

  const pageCount = Math.ceil(Number(totalRecords) / pageSize);
  const myArray = [];
  for (let i = 0; i < pageCount; i++) myArray.push(i);

  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">


	${myArray.map(
    (i) => `<url>
				<loc>${url}/post-sitemap${i >= 1 ? i + 1 : ""}.xml</loc>
					<lastmod>${new Date().toISOString()}</lastmod>
			</url>
`
  )}
	
	<url>
		<loc>${url}/page-sitemap.xml</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
	</url>

	<url>
		<loc>${url}/types-sitemap.xml</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
	</url>

	<url>
		<loc>${url}/brands-sitemap.xml</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
	</url>

	<url>
		<loc>${url}/price-range-sitemap.xml</loc>
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
