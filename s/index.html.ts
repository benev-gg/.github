
import {template, html} from "@e280/scute"
import {webpage} from "./webpage.js"

export default template(import.meta.url, async orb => orb.place(
	webpage({
		title: "benev.gg",
		description: "building the future of web games",
		zone: "/",
		main: html`
			<section class="games">
				<a class="gamecard nano" href="https://nano.benev.gg/">
					<div class="panel">
						<h2>nano</h2>

						<p class="tagline">
							survive. build. automate.
						</p>

						<p class="description">
							survive in a massive online arena.<br/>
							build your base. upgrade your robot.<br/>
							play solo or with friends. gamepads. splitscreen.
						</p>
					</div>

					<div class="playbutton">
						<span class="playicon">▶</span>
						<span>play</span>
					</div>
				</a>
			</section>
		`,
	})
))

