
import {template, html, socialCard, Html} from "@e280/scute"

const domain = "benev.gg"
const favicon = "/assets/favicon.png"
const description = "building the future of web games"

export type PageOptions = {
	title: string
	href: string
	main: Html
}

const navlink = (options: PageOptions, href: string, text: string) => (
	(href === options.href)
		? html`<a href="${href}" data-active>${text}</a>`
		: html`<a href="${href}">${text}</a>`
)

export const webpage = (options: PageOptions) => template(import.meta.url, async orb => html`
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>
			<style>@layer base{html{background:#000}}</style>

			<title>${options.title}</title>
			<link rel="icon" href="${orb.hashurl(favicon)}"/>
			<style data-theme>${orb.inject('/css/layers.css')}</style>
			<style data-theme>${orb.inject('/css/vars.css')}</style>
			<style data-theme>${orb.inject('/css/std.css')}</style>
			<style data-theme>${orb.inject('/css/page.css')}</style>
			<script type="module" src="${orb.hashurl('/main.bundle.min.js')}"></script>

			${socialCard({
				themeColor: "#f2ea8e",
				siteName: domain,
				title: `👼 ${options.title}`,
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
					${navlink(options, "/", "games")}
					${navlink(options, "/devlog/", "devlog")}
				</nav>
			</header>

			<main>
				${options.main}
			</main>

			<footer>
				<div>
					<a href="https://discord.gg/BnZx2utdev" alt="">discord</a>
					<p>version ${orb.packageVersion()}</p>
				</div>
			</footer>
		</body>
	</html>
`)

