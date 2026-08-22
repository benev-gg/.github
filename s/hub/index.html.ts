
import {template, html} from "@e280/scute"
import {consts} from "../consts.js"

export default template(import.meta.url, async orb => html`
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>

			<title>benev hub</title>
			<script type="module" src="${orb.hashurl('hub.bundle.min.js')}"></script>
			<link rel="icon" href="${orb.hashurl(consts.favicon, true)}"/>
			<style data-theme>
				:root {
					color: #aaa;
					background: #000;
				}
			</style>
		</head>
		<body>
			<h1>benev hub</h1>
			<auth-widget>Sign-in</auth-widget>
		</body>
	</html>
`)

