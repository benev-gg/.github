
import {template, html} from "@e280/scute"
import {consts} from "./consts.js"
import {webpage} from "./lib/ssg/webpage.js"
import {falryskCard} from "./lib/ssg/game-cards/falrysk.js"

export default template(import.meta.url, async orb => orb.place(
	webpage({
		title: "benev.gg",
		description: consts.description,
		zone: "games",
		content: html`
			<main class=gamelist benev-slice x-spacious>
				<header class=titlecard>
					<h1>${consts.domain}</h1>
					<p>${consts.description}</p>
				</header>

				${falryskCard(orb)}
			</main>
		`,
	})
))

