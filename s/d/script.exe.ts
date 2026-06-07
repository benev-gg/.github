
import {join} from "path"
import {cp} from "fs/promises"
import {exe, Orb} from "@e280/scute"
import {list} from "../lib/ssg/list.js"
import {devlogPost} from "./post.js"
import {devlogListing} from "./listing.js"
import {loadPosts} from "../lib/ssg/posts/load-posts.js"
import {prepareCatalog} from "../lib/ssg/posts/catalog.js"

export default exe(import.meta.url, async orb => {
	const posts = await loadPosts("s/d/posts")
	const listingContent = await orb.place(devlogListing(posts))

	await orb.io.write("index.html", await listingContent.render())

	for (const post of posts) {
		const {files, dirs} = await list(post.dir)
		const newDir = `${orb.root}/d/${post.slug}`
		const postOrb = new Orb(orb.root, orb.mod, `${newDir}/index.html`)
		const postContent = await devlogPost(post)(postOrb)
		await orb.io.write(`${post.slug}/index.html`, await postContent.render())

		for (const entry of [...files, ...dirs])
			await cp(
				join(post.dir, entry),
				join(newDir, entry),
				{recursive: true},
			)
	}

	await orb.io.writeJson("catalog.json", prepareCatalog(posts))
})

