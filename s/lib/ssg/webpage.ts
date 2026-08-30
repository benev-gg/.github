
import {benevCssText, topNav, Zone} from "@benev/web/ssg"
import {template, html, socialCard, Html} from "@e280/scute"
import {consts} from "../../consts.js"

export type PageOptions = {
	title: string
	description: string
	zone: Zone
	content: Html
	head?: Html
	image?: string
	type?: "website" | "article"
}

export const webpage = (options: PageOptions) => template(import.meta.url, async orb => html`
	<!doctype html>
	<html benev>
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
				${html.raw(benevCssText)}
				${orb.inject("../../css/x.css")}
				${orb.inject("../../css/app.css")}
				${orb.inject("../../css/units/devlog/listing.css")}
				${orb.inject("../../css/units/devlog/post.css")}
				${orb.inject("../../css/units/gamelist.css")}
			</style>

			${options.head}
		</head>
		<body>
			<benev-menu></benev-menu>

			<benev-header>
				${topNav(options.zone)}
			</benev-header>

			${options.content}

			<footer benev-slice>
				<a href="https://discord.gg/BnZx2utdev">discord</a>
				<a href="https://github.com/benev-gg">github</a>
			</footer>
		</body>
	</html>
`)

