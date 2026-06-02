
import {html, template} from "@e280/scute"
import {webpage} from "../webpage.js"
import {Post} from "../lib/ssg/posts/types.js"
import {xAuthor} from "../lib/ssg/posts/x-author.js"

export const postPage = (post: Post) => template(
	import.meta.url,
	async orb => {
		const imageUrl = post.image
			? orb.url(`@/${post.image}`, true)
			: orb.url(`/assets/bannerbg.webp`, true)

		return orb.place(webpage({
			zone: "/d/",
			type: "article",
			title: post.title,
			description: post.summary,

			image: post.image
				? imageUrl
				: undefined,

			head: html`
				<meta name="author" content="${post.author}">
				<meta property="article:published_time" content="${new Date(post.time).toISOString()}">
			`,

			main: html`
				<div class=devlog-post>
					${post.image
						? html`<img src="${imageUrl}" alt=""/>`
						: null}

					<div class=plate>
						${xAuthor(post)}

						<section>
							<header>
								<h1>${post.title}</h1>
								<h2>${post.summary}</h2>
								<p>(${post.tags.join(", ")})</p>
							</header>

							<div>
								${html.raw(post.content)}
							</div>
						</section>
					</div>
				</div>
			`,
		}))
	},
)

