
import path from "node:path"
import {base62} from "@e280/stz"
import fs from "node:fs/promises"
import * as toml from "smol-toml"
import {micromark} from "micromark"

export type Post = {
	id: string
	href: string
	content: string

	author: string
	title: string
	summary: string
	tags: string[]
}

export async function loadPosts(postsDir: string) {
	const ents = (await fs.readdir(postsDir, {withFileTypes: true}))
		.filter(d => d.isDirectory())

	return Promise.all(ents.map(async(ent): Promise<Post> => {
		const time = Number(ent.name)
		const id = base62.fromInteger(Math.floor(time / 1000 / 60))
		const dir = path.join(postsDir, ent.name)

		const meta = toml.parse(
			await fs.readFile(path.join(dir, "meta.toml"), "utf8")
		) as any

		const content = micromark(
			await fs.readFile(path.join(dir, "post.md"), "utf8")
		)

		return {
			id,
			content,
			href: `${id}/${meta.slug}`,
			author: meta.author,
			title: meta.title,
			summary: meta.summary,
			tags: meta.tags,
		}
	}))
}

