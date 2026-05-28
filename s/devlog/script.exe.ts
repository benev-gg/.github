
import {exe, html} from "@e280/scute"
import {webpage} from "../lib/ssg/webpage.js"
import {loadPosts} from "../lib/ssg/load-posts.js"

export default exe(import.meta.url, async orb => {
	const posts = await loadPosts("s/devlog/posts")

	const indexHtml = await orb.place(webpage({
		title: "benev devlog",
		href: "/devlog/",
		main: html`
			<h1>devlog</h1>
			<ol>
				${posts.map(post => html`
					<li>
						<a href="${post.href + "/"}">${post.title}</a>
					</li>
				`)}
			</ol>
		`,
	}))

	await orb.io.write("index.html", await indexHtml.render())

	for (const post of posts) {
		const wp = webpage({
			title: post.title,
			href: "/devlog/",
			main: html`
				<h1>${post.title}</h1>
				<h2>${post.summary}</h2>
				<p>(${post.tags.join(", ")})</p>

				<section>
					${html.raw(post.content)}
				</section>
			`,
		})
		const postHtml = await wp(orb.root, `${orb.root}/devlog/${post.href}/`)
		await orb.io.write(`${post.href}/index.html`, await postHtml.render())
	}
})

