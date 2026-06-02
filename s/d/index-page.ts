
import {html, Orb, template} from "@e280/scute"
import {webpage} from "../webpage.js"
import {avatar} from "../lib/utils/avatar.js"
import {Post} from "../lib/ssg/posts/types.js"
import {nicedate, nicetime} from "../lib/utils/nicedate.js"
import { xAuthor } from "../lib/ssg/posts/x-author.js"

export const indexPage = (posts: Post[]) => template(
	import.meta.url,
	async orb => orb.place(webpage({
		title: "benev devlog",
		zone: "/d/",
		description: "building the future of web games",
		main: html`
			<div class=devlog-index>
				<ol class=posts>
					${posts.map(renderPost(orb))}
				</ol>
			</div>
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
		<li class=post>
			${xAuthor(post)}

			<article style="${style}">
				<header>
					<h2>
						<a href="${url}">${post.title}</a>
					</h2>
					<p>${post.summary}</p>
				</header>

				<footer>
					${post.tags.length > 0 && html`
						<ul class=tags>
							${post.tags.map(tag => html`
								<li>${tag}</li>
							`)}
						</ul>
					`}
					<a class=read x-button=juicy href="${url}">
						read &nbsp; ❯
					</a>
				</footer>
			</article>
		</li>
	`
}

