
export type Post = {
	dir: string
	slug: string
	time: number
	author: string
	title: string
	summary: string
	tags: string[]
	content: string
	image?: string
}

export type CatalogPost = {
	url: string
	time: number
	author: string
	title: string
	summary: string
	tags: string[]
	image?: string
}

export type Catalog = {
	posts: [number, CatalogPost][]
	byTag: [string, number[]][]
}

