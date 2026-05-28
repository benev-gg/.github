
import {template, html} from "@e280/scute"
import {webpage} from "./lib/ssg/webpage.js"

export default template(import.meta.url, async orb => orb.place(
	webpage({
		title: "benev.gg",
		href: "/",
		main: html`
			<h1>coming soon</h1>
		`,
	})
))

