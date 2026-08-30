
import {template, html} from "@e280/scute"
import {consts} from "./consts.js"
import {webpage} from "./lib/ssg/webpage.js"
import {svgScute} from "./lib/icons/utils/svg-scute.js"

import worldWww from "./lib/icons/tabler/world-www.js"
import peopleGroup from "./lib/icons/akar/people-group.js"
import gameController from "./lib/icons/akar/game-controller.js"

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

				<a benev-cardlink class="game nano" href="https://nano.benev.gg/" draggable=false>
					<div class=panel>
						<hgroup>
							<h2>nano</h2>
							<p>online robot warfare.</p>
						</hgroup>

						<div>
							<p>jump into fast-paced combat instantly in-browser.</p>
						</div>

						<ul>
							<li>${svgScute(worldWww)} online multiplayer</li>
							<li>${svgScute(gameController)} gamepad support</li>
							<li>${svgScute(peopleGroup)} 4 player splitscreen</li>
						</ul>
					</div>

					<nav>
						<button benev-button=juicy>▶ play</button>
					</nav>
				</a>
			</main>
		`,
	})
))

