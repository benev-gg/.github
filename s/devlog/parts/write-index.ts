
import {html, Orb} from "@e280/scute"
import {Post} from "./types.js"
import {webpage} from "../../webpage.js"

export async function writeIndex(orb: Orb, posts: Post[]) {
	const indexTemplate = webpage({
		title: "benev devlog",
		zone: "/devlog/",
		description: "building the future of web games",
		main: html`
			<div class=content>
				<h1>devlog</h1>
				<ol>
					${posts.map(post => html`
						<li>
							<a href="${post.slug + "/"}">${post.title}</a>
						</li>
					`)}
				</ol>
			</div>
		`,
	})

	const indexContent = await orb.place(indexTemplate)

	await orb.io.write("index.html", await indexContent.render())
}

