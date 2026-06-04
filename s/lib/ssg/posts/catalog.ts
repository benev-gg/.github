
import {dedupe, got, guarantee} from "@e280/stz"
import {consts} from "../../../consts.js"
import {Catalog, Post, CatalogPost} from "./types.js"
import {sortByTime} from "../../utils/sort-by-time.js"

export function prepareCatalog(posts: Post[], limit = 5): Catalog {
	const allPosts = new Map<number, CatalogPost>()
	const byTag = new Map<string, number[]>()
	const touched = new Set<number>()

	for (const [id, post] of posts.entries()) {
		const url = `${consts.origin}/d/${post.slug}/`
		allPosts.set(id, {
			url,
			image: url + post.image,
			title: post.title,
			summary: post.summary,
			author: post.author,
			tags: post.tags,
			time: post.time,
		})

		for (const tag of post.tags) {
			const ids = guarantee(byTag, tag, () => [])
			if (ids.length < limit)
				ids.push(id)
		}
	}

	for (const ids of byTag.values())
		for (const id of ids)
			touched.add(id)

	return {
		posts: [...touched].map(id => [id, got(allPosts.get(id))]),
		byTag: [...byTag.entries()],
	}
}

export function readCatalog(catalog: Catalog) {
	return {
		posts: new Map(catalog.posts),
		byTag: new Map(catalog.byTag),
	}
}

export function readCatalogPostsByTag(catalog: Catalog, tags: string[]) {
	const {posts, byTag} = readCatalog(catalog)
	const wantedIds = new Set<number>()

	for (const tag of dedupe(tags)) {
		for (const id of byTag.get(tag) ?? [])
			wantedIds.add(id)
	}

	return [...wantedIds]
		.map(id => got(posts.get(id)))
		.sort(sortByTime)
}

