
import {join} from "path"
import {cp} from "fs/promises"
import {exe, Orb} from "@e280/scute"
import {list} from "../lib/ssg/list.js"
import {postPage} from "./post-page.js"
import {indexPage} from "./index-page.js"
import {loadPosts} from "../lib/ssg/posts/load-posts.js"

export default exe(import.meta.url, async orb => {
	const posts = await loadPosts("s/devlog/posts")
	const indexContent = await orb.place(indexPage(posts))

	await orb.io.write("index.html", await indexContent.render())

	for (const post of posts) {
		const {files, dirs} = await list(post.dir)
		const newDir = `${orb.root}/devlog/${post.slug}`
		const postOrb = new Orb(orb.root, orb.mod, `${newDir}/index.html`)
		const postContent = await postPage(post)(postOrb)
		await orb.io.write(`${post.slug}/index.html`, await postContent.render())

		for (const entry of [...files, ...dirs])
			await cp(
				join(post.dir, entry),
				join(newDir, entry),
				{recursive: true},
			)
	}
})

