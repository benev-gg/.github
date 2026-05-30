
import {html, Orb, template} from "@e280/scute"
import {Post} from "./parts/types.js"
import {webpage} from "../webpage.js"
import {avatar} from "../lib/utils/avatar.js"
import {nicedate, nicetime} from "../lib/utils/nicedate.js"

export const indexPage = (posts: Post[]) => template(
	import.meta.url,
	async orb => orb.place(webpage({
		title: "benev devlog",
		zone: "/devlog/",
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
	const imageUrl = url + post.image
	const style = post.image
		? `background: url('${orb.url(imageUrl)}') center center / cover;`
		: ``

	return html`
		<li class=post>
			<div class=author>
				<img src="${avatar(post.author)}" alt=""/>
				<span>${post.author}</span>
				<time>
					<span>${nicedate(post.time)}</span>
					<span>${nicetime(post.time)}</span>
				</time>
			</div>

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
						read
					</a>
				</footer>
			</article>
		</li>
	`
}

