export async function GET({ request }) {
  let { url } = request;
  url = new URL(url).origin;

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
				font-size:14px;
			}
			th {
				text-align:left;
				padding-right:30px;
				font-size:14px;
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
				This XML Sitemap Index file contains 13 sitemaps.
			</p>
			<table id="sitemap" cellpadding="3">
				<thead>
				<tr>
					<th width="75%">Sitemap</th>
					<th width="25%">Last Modified</th>
				</tr>
				</thead>
				<tbody>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.under-5000-tk">${url}/filter?filters=price.under-5000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.5000-10000-tk">${url}/filter?filters=price.5000-10000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.10000-15000-tk">${url}/filter?filters=price.10000-15000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.15000-20000-tk">${url}/filter?filters=price.15000-20000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.20000-30000-tk">${url}/filter?filters=price.20000-30000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.30000-40000-tk">${url}/filter?filters=price.30000-40000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.40000-50000-tk">${url}/filter?filters=price.40000-50000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.50000-60000-tk">${url}/filter?filters=price.50000-60000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.60000-70000-tk">${url}/filter?filters=price.60000-70000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.70000-80000-tk">${url}/filter?filters=price.70000-80000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.80000-90000-tk">${url}/filter?filters=price.80000-90000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.90000-100000-tk">${url}/filter?filters=price.90000-100000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/filter?filters=price.above-100000-tk">${url}/filter?filters=price.above-100000-tk</a>
                        </td>
                        <td>
                            ${new Date().toISOString()}
                        </td>
                    </tr>


                



				
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
