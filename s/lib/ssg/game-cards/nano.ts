
import {html, template} from "@e280/scute"
import worldWww from "../../icons/tabler/world-www.js"
import {svgScute} from "../../icons/utils/svg-scute.js"
import peopleGroup from "../../icons/akar/people-group.js"
import gameController from "../../icons/akar/game-controller.js"

export const nanoCard = template(import.meta.url, async _orb => html`
	<a benev-cardlink class="game nano" href="/nano/" draggable=false>
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
`)

