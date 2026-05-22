
import {template, html, socialCard} from "@e280/scute"

const domain = "benev.gg"
const favicon = "/assets/favicon.png"
const description = "building the future of web games"

export default template(import.meta.url, async orb => html`
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>
			<style>@layer base{html{background:#000}}</style>

			<title>benev.gg</title>
			<link rel="icon" href="${orb.hashurl(favicon)}"/>
			<link rel="stylesheet" href="${orb.hashurl('index.css')}"/>
			<script type="module" src="${orb.hashurl('index.bundle.min.js')}"></script>

			${socialCard({
				themeColor: "#f2ea8e",
				siteName: domain,
				title: "👼 benev.gg",
				description,
				image: `https://${domain}${favicon}`,
			})}
		</head>
		<body>
			<header>
				<img src="${favicon}" alt=""/>
				<div>
					<h1>benev.gg</h1>
					<p>building the future of web games</p>
				</div>
				<nav>
					<a href="games/">games</a>
					<a href="devlog/">devlog</a>
					<a href="learn/">learn</a>
				</nav>
			</header>

			<footer>
				<div>
					<a href="https://discord.gg/BnZx2utdev" alt="">discord</a>
					<p>version ${orb.packageVersion()}</p>
				</div>
			</footer>
		</body>
	</html>
`)

