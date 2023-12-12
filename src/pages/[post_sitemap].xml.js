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

  const data = await xata.db.Posts.select(["slug", "images"]).getPaginated({
    pagination: {
      size: pageSize,
      offset: (page - 1) * pageSize,
    },
  });

  records = data.records;

  const xmlString = `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:html="http://www.w3.org/TR/REC-html40" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
	<head>
		<title>XML Sitemap</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<style type="text/css">
			body {
				font-family: sans-serif;
				font-size: 14px;
				color: #545353;
			}
			table {
				border: none;
				border-collapse: collapse;
			}
			#sitemap tr:nth-child(odd) td {
				background-color: #eee !important;
			}
			#sitemap tbody tr:hover td {
				background-color: #ccc;
			}
			#sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
				color: #000;
			}
			#content {
				margin: 0 auto;
				width: 1000px;
			}
			.expl {
				margin: 18px 3px;
				line-height: 1.2em;
			}
			.expl a {
				color: #da3114;
				font-weight: 600;
			}
			.expl a:visited {
				color: #da3114;
			}
			a {
				color: #000;
				text-decoration: none;
			}
			a:visited {
				color: #777;
			}
			a:hover {
				text-decoration: underline;
			}
			td {
				font-size:12px;
			}
			th {
				text-align:left;
				padding-right:30px;
				font-size:12px;
			}
			thead th {
				border-bottom: 1px solid #000;
			}
		</style>
	</head>
	<body>
	<div id="content">
		<h1>XML Sitemap</h1>
		<p class="expl">
			This is an XML Sitemap, meant for consumption by search engines.<br/>
			You can find more information about XML sitemaps on <a href="http://sitemaps.org" target="_blank" rel="noopener noreferrer">sitemaps.org</a>.
		</p>
		<hr/>

			<p class="expl">
				This XML Sitemap contains ${records.length} URLs.
			</p>
			<table id="sitemap" cellpadding="3">
				<thead>
				<tr>
					<th width="75%">URL</th>
					<th width="5%">Images</th>
					<th title="Last Modification Time" width="20%">Last Mod.</th>
				</tr>
				</thead>
				<tbody>
				
                          ${records.map(
                            (record) => `
          
					<tr>
						<td>
							<a href="${url.origin}/${record.slug}">${url.origin}/${record.slug}</a>
						</td>

                        <td>
							${record.images.split(",").length}
						</td>

						<td>
							${record.xata.updatedAt.toISOString()}
						</td>

                        
					</tr>
          `
                          )}

				
				</tbody>
			</table>
	
	</div>
	</body>
	</html>

`;

  return new Response(xmlString.replace(/,/g, ""), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
