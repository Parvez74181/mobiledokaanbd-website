import { XataClient } from "../xata";
const xata = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: import.meta.env.XATA_BRANCH,
});

let records;

export async function GET({ request }) {
  let { url } = request;
  url = new URL(url).origin;

  const dataPromise = await xata.db.Types.getAll();

  const countPromise = xata.db.Types.summarize({
    summaries: {
      total: { count: "*" },
    },
  });

  const [data, count] = await Promise.all([dataPromise, countPromise]);

  records = data;
  totalRecords = count.summaries[0].total;

  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">


${records.map(
  (record) =>
    `<url>
		<loc>${url}/types?type=${record.type.toLowerCase().split(" ").join("-")}</loc>
		<lastmod>${record.xata.updatedAt.toISOString()}</lastmod>
	</url>`
)}
</urlset>`;

  return new Response(xmlString.replace(/,/g, ""), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
