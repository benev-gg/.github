
import {html, Orb} from "@e280/scute"
import {Post} from "./types.js"
import {webpage} from "../../webpage.js"

export async function writePost(orb: Orb, post: Post) {
	const postTemplate = webpage({
		title: post.title,
		zone: "/devlog/",
		description: post.summary,
		main: html`
			<div class=content>
				<h1>${post.title}</h1>
				<h2>${post.summary}</h2>
				<p>(${post.tags.join(", ")})</p>
				<section>
					${html.raw(post.content)}
				</section>
			</div>
		`,
	})

	const postContent = await postTemplate(orb.root, `${orb.root}/devlog/${post.slug}`)

	await orb.io.write(`${post.slug}/index.html`, await postContent.render())
}

