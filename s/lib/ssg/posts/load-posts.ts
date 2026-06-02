
import {join} from "node:path"
import * as toml from "smol-toml"
import {micromark} from "micromark"
import {readFile} from "node:fs/promises"
import {Post} from "./types.js"
import {list} from "../list.js"

const banner = "banner.webp"

export async function loadPosts(postsDir: string) {
	const slugs = new Set<string>()
	const {dirs} = await list(postsDir)

	const posts = await Promise.all(dirs.map(async name => {
		const dir = join(postsDir, name)
		const {files} = await list(dir)

		const postSource = await readFile(join(dir, "post.md"), "utf8")
		const [, tomlSource, markdownSource] = postSource.split("+++")
		const meta = toml.parse(tomlSource) as any
		const content = micromark(markdownSource, {allowDangerousHtml: true})

		const image = files.includes(banner)
			? banner
			: undefined

		const post: Post = {...meta, dir, image, content}

		if (slugs.has(post.slug))
			throw new Error(`dupe slug: "${post.slug}"`)

		slugs.add(post.slug)
		return post
	}))

	return posts.sort((a, b) => b.time - a.time)
}

