
import {exe} from "@e280/scute"
import {writePost} from "./parts/write-post.js"
import {writeIndex} from "./parts/write-index.js"
import {loadPosts} from "./parts/load-posts.js"

export default exe(import.meta.url, async orb => {
	const posts = await loadPosts("s/devlog/posts")
	await writeIndex(orb, posts)

	for (const post of posts)
		await writePost(orb, post)
})

