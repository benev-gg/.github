
import {template, html} from "@e280/scute"
import {consts} from "./consts.js"
import {webpage} from "./webpage.js"
import {svgScute} from "./lib/icons/utils/svg-scute.js"

import worldWww from "./lib/icons/tabler/world-www.js"
import peopleGroup from "./lib/icons/akar/people-group.js"
import gameController from "./lib/icons/akar/game-controller.js"

export default template(import.meta.url, async orb => orb.place(
	webpage({
		title: "benev.gg",
		description: consts.description,
		zone: "/",
		content: html`
			<main class=gamelist>
				<div class="game nano">
					<div class=panel>
						<hgroup>
							<h2><a href="https://nano.benev.gg/">nano</a></h2>
							<p>build. survive. automate.</p>
						</hgroup>

						<div>
							<p>fight for survival in a massive online arena.</p>
							<p>build your base. upgrade your robot.</p>
						</div>

						<ul>
							<li>${svgScute(worldWww)} online multiplayer</li>
							<li>${svgScute(gameController)} gamepad support</li>
							<li>${svgScute(peopleGroup)} 4 player splitscreen</li>
						</ul>
					</div>

					<nav>
						<a x-button=chill href="https://nano.benev.gg/">learn</a>
						<a x-button=juicy href="https://nano.benev.gg/#/play/">▶ play</a>
					</nav>
				</div>
			</main>
		`,
	})
))

