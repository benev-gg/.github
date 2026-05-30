
import {join} from "path"
import {exe} from "@e280/scute"
import {cp, readdir} from "fs/promises"
import {postPage} from "./post-page.js"
import {indexPage} from "./index-page.js"
import {loadPosts} from "./parts/load-posts.js"

export default exe(import.meta.url, async orb => {
	const posts = await loadPosts("s/devlog/posts")
	const indexContent = await orb.place(indexPage(posts))

	await orb.io.write("index.html", await indexContent.render())

	for (const post of posts) {
		const newDir = `${orb.root}/devlog/${post.slug}`
		const postContent = await postPage(post)(orb.root, newDir)
		await orb.io.write(`${post.slug}/index.html`, await postContent.render())

		for (const entry of await readdir(post.dir))
			await cp(
				join(post.dir, entry),
				join(newDir, entry),
				{recursive: true},
			)
	}
})

