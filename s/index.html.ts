
import {template, html} from "@e280/scute"
import {webpage} from "./webpage.js"

export default template(import.meta.url, async orb => orb.place(
	webpage({
		title: "benev.gg",
		description: "building the future of web games",
		zone: "/",
		main: html`
			<div class=content>
				<h1>coming soon</h1>
			</div>
		`,
	})
))

