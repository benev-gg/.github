
import {consts} from "./consts.js"
import {template, html, socialCard, Html} from "@e280/scute"

export type PageOptions = {
	title: string
	description: string
	zone: string
	content: Html
	head?: Html
	image?: string
	type?: "website" | "article"
}

const navlink = (options: PageOptions, zone: string, text: string) => (
	(zone === options.zone)
		? html`<a href="${zone}" data-active>${text}</a>`
		: html`<a href="${zone}">${text}</a>`
)

export const webpage = (options: PageOptions) => template(import.meta.url, async orb => html`
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>

			<title>${options.title}</title>
			<link rel="canonical" href="${consts.origin + orb.url('@/', true) + '/'}"/>
			<meta name="description" content="${options.description}"/>

			${socialCard({
				type: options.type ?? "website",
				title: `👼 ${options.title}`,
				description: options.description,
				themeColor: "#f2ea8e",
				siteName: consts.domain,
				image: consts.origin + (options.image ?? consts.favicon),
			})}

			<link rel="icon" href="${orb.hashurl(consts.favicon, true)}"/>
			<style>@layer base{html{background:#000}}</style>

			${[
				"css/layers.css",
				"css/vars.css",
				"css/std.css",
				"css/x.css",
				"css/page.css",
				"css/units/gamelist.css",
				"css/units/devlog-index.css",
				"css/units/devlog-post.css",
				"css/units/devlog-content.css",
			].map(href => html`
				<link rel="stylesheet" href="${orb.hashurl(href, true)}"/>
			`)}

			<script type="module" src="${orb.hashurl('/main.bundle.min.js')}"></script>

			${options.head}
		</head>
		<body>
			<header>
				<a href="/">
					<img class=logo src="${orb.hashurl(consts.favicon, true)}" alt=""/>
				</a>

				<div>
					<h1>
						<a href="/">benev.gg</a>
					</h1>
					<p>${consts.description}</p>
				</div>

				<nav>
					${navlink(options, "/", "games")}
					${navlink(options, "/d/", "devlog")}
				</nav>
			</header>

			${options.content}

			<footer>
				<a href="https://discord.gg/BnZx2utdev">discord</a>
				<a href="https://github.com/benevolent-games">github</a>
			</footer>
		</body>
	</html>
`)

