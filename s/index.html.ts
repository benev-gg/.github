
import {template, html} from "@e280/scute"
import {webpage} from "./webpage.js"
import {svgScute} from "./lib/icons/utils/svg-scute.js"
import worldWww from "./lib/icons/tabler/world-www.js"
import gameController from "./lib/icons/akar/game-controller.js"
import peopleGroup from "./lib/icons/akar/people-group.js"

export default template(import.meta.url, async orb => orb.place(
	webpage({
		title: "benev.gg",
		description: "building the future of web games",
		zone: "/",
		main: html`
			<section class=gamelist>
				<div class="game nano">
					<div class=panel>
						<hgroup>
							<h2>nano</h2>
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
						<a x-button=juicy href="https://nano.benev.gg/play/">▶ play now</a>
					</nav>
				</div>
			</section>
		`,
	})
))

