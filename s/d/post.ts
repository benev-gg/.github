
import {html, template} from "@e280/scute"
import {webpage} from "../webpage.js"
import {Post} from "../lib/ssg/posts/types.js"
import {xTags} from "../lib/ssg/posts/x-tags.js"
import {xAuthor} from "../lib/ssg/posts/x-author.js"

export const devlogPost = (post: Post) => template(
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

			content: html`
				<main class=devlog-post benev-slice x-spacious>
					${post.image
						? html`<img src="${imageUrl}" alt=""/>`
						: null}

					<article class=plate>
						${xAuthor(post)}

						<section class=sector>
							<header benev-prose>
								${xTags(post.tags)}
								<h1><a href=".">${post.title}</a></h1>
								<h2>${post.summary}</h2>
							</header>

							<div benev-prose>
								${html.raw(post.content)}
							</div>
						</section>
					</article>
				</main>
			`,
		}))
	},
)

