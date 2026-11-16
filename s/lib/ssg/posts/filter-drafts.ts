
import {Post} from "./types.js"
import {getEnv} from "../../utils/get-env.js"

export function filterDrafts() {
	return (getEnv().drafts)
		? () => true
		: (post: Post) => !post.draft
}

