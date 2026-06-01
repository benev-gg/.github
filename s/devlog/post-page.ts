
import {html, template} from "@e280/scute"
import {webpage} from "../webpage.js"
import {Post} from "../lib/ssg/posts/types.js"

export const postPage = (post: Post) => template(
	import.meta.url,
	async orb => {
		const imageUrl = post.image
			? orb.url(`@/${post.image}`, true)
			: orb.url(`/assets/bannerbg.webp`, true)

		return orb.place(webpage({
			zone: "/devlog/",
			title: post.title,
			description: post.summary,

			image: post.image
				? imageUrl
				: undefined,

			main: html`
				<div class=devlog-post>
					${post.image
						? html`<img src="${imageUrl}" alt=""/>`
						: null}
					<h1>${post.title}</h1>
					<h2>${post.summary}</h2>
					<p>(${post.tags.join(", ")})</p>
					<section>
						${html.raw(post.content)}
					</section>
				</div>
			`,
		}))
	},
)

