
import {html, template} from "@e280/scute"
import {svgScute} from "../../icons/utils/svg-scute.js"
import peopleGroup from "../../icons/akar/people-group.js"
import gameController from "../../icons/akar/game-controller.js"

export const falryskCard = template(import.meta.url, async _orb => html`
	<a benev-cardlink class="game falrysk" href="/falrysk/" draggable=false>
		<div class=panel>
			<hgroup>
				<h2>falrysk</h2>
				<p>anything could happen</p>
			</hgroup>

			<ul>
				${null/** <li>${svgScute(worldWww)} online co-op</li> */}
				<li>${svgScute(gameController)} gamepad support</li>
				<li>${svgScute(peopleGroup)} 4 player splitscreen</li>
			</ul>
		</div>

		<nav>
			<button benev-button=juicy>▶ play</button>
		</nav>
	</a>
`)

