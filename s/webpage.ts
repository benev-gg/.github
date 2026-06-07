
import {consts} from "./consts.js"
import {template, html, socialCard, Html} from "@e280/scute"
import {basisCssText} from "../../web/x/css/basis.css-text.js"
import {benevCoreCssText} from "../../web/x/css/benev-core.css-text.js"

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
		? html`<a benev-link href="${zone}" data-active>${text}</a>`
		: html`<a benev-link href="${zone}">${text}</a>`
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

			<script type="module" src="${orb.hashurl('/main.bundle.min.js')}"></script>
			<link rel="icon" href="${orb.hashurl(consts.favicon, true)}"/>
			<style data-theme>
				@layer base, basis, benev, x, app;
				@layer base {
					:root {
						color: #aaa;
						background: #000;
					}
				}
				${html.raw(basisCssText)}
				${html.raw(benevCoreCssText)}
				${orb.inject("css/x.css")}
				${orb.inject("css/app.css")}
				${orb.inject("css/units/devlog/content.css")}
				${orb.inject("css/units/devlog/listing.css")}
				${orb.inject("css/units/devlog/post.css")}
				${orb.inject("css/units/gamelist.css")}
			</style>


			${options.head}
		</head>
		<body>
			<benev-shell>
				<nav slot=nav>
					${navlink(options, "/", "games")}
					${navlink(options, "/d/", "devlog")}
				</nav>

				${options.content}

				<footer benev-slice>
					<a benev-link href="https://discord.gg/BnZx2utdev">discord</a>
					<a benev-link href="https://github.com/benevolent-games">github</a>
				</footer>
			</benev-shell>
		</body>
	</html>
`)

