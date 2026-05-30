
import {html, template} from "@e280/scute"
import {Post} from "./parts/types.js"
import {webpage} from "../webpage.js"

export const indexPage = (posts: Post[]) => template(
	import.meta.url,
	async orb => orb.place(webpage({
		title: "benev devlog",
		zone: "/devlog/",
		description: "building the future of web games",
		main: html`
			<div class=devlog-index>
				<ol>
					${posts.map(post => html`
						<li>
							<a href="${post.slug + "/"}">${post.title}</a>
						</li>
					`)}
				</ol>
			</div>
		`,
	})),
)

