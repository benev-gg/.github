
import {html, Orb, template} from "@e280/scute"
import {consts} from "../consts.js"
import {webpage} from "../webpage.js"
import {Post} from "../lib/ssg/posts/types.js"
import {xTags} from "../lib/ssg/posts/x-tags.js"
import {xAuthor} from "../lib/ssg/posts/x-author.js"

export const devlogListing = (posts: Post[]) => template(
	import.meta.url,
	async orb => orb.place(webpage({
		zone: "/d/",
		title: "benev devlog",
		description: consts.description,
		content: html`
			<main class=devlog-listing x-spacious>
				${posts.map(renderPost(orb))}
			</main>
		`,
	})),
)

const renderPost = (orb: Orb) => (post: Post) => {
	const url = post.slug + "/"
	const imageUrl = post.image
		? orb.url(url + post.image)
		: orb.url("/assets/bannerbg.webp", true)
	const style = `background: url('${imageUrl}') center center / cover;`

	return html`
		<article class=post benev-slice>
			${xAuthor(post)}

			<a class=card benev-cardlink href="${url}" style="${style}" draggable=false>
				<header>
					<h2>${post.title}</h2>
					<p>${post.summary}</p>
				</header>

				<footer>
					${xTags(post.tags)}
					<button class=read>
						read &nbsp; ❯
					</button>
				</footer>
			</a>
		</article>
	`
}

