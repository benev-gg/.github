
import {html, template} from "@e280/scute"
import {Post} from "./parts/types.js"
import {webpage} from "../webpage.js"

export const postPage = (post: Post) => template(
	import.meta.url,
	async orb => orb.place(webpage({
		title: post.title,
		zone: "/devlog/",
		description: post.summary,
		main: html`
			<div class=devlog-post>
				<h1>${post.title}</h1>
				<h2>${post.summary}</h2>
				<p>(${post.tags.join(", ")})</p>
				<section>
					${html.raw(post.content)}
				</section>
			</div>
		`,
	})),
)

