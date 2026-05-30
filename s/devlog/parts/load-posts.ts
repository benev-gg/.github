
import path from "node:path"
import fs from "node:fs/promises"
import * as toml from "smol-toml"
import {micromark} from "micromark"
import {Post} from "./types.js"

export async function loadPosts(postsDir: string) {
	const slugs = new Set<string>()

	const ents = (await fs.readdir(postsDir, {withFileTypes: true}))
		.filter(d => d.isDirectory())

	const posts = await Promise.all(ents.map(async(ent): Promise<Post> => {
		const dir = path.join(postsDir, ent.name)
		const postSource = await fs.readFile(path.join(dir, "post.md"), "utf8")
		const [, tomlSource, markdownSource] = postSource.split("+++")

		const meta = toml.parse(tomlSource) as any
		const content = micromark(markdownSource)

		const post: Post = {...meta, content}

		if (slugs.has(post.slug))
			throw new Error(`dupe slug: "${post.slug}"`)

		slugs.add(post.slug)

		return {...meta, dir, content}
	}))

	return posts.sort((a, b) => a.time - b.time)
}

