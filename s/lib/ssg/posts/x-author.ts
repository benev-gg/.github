
import {html} from "@e280/scute"
import {Post} from "./types.js"
import {avatar} from "../../utils/avatar.js"
import {nicedate, nicetime} from "../../utils/nicedate.js"

export function xAuthor(post: Post) {
	return html`
		<div x-author>
			<img src="${avatar(post.author)}" alt=""/>
			<div>
				<span>${post.author}</span>
				<time datetime="${new Date(post.time).toISOString()}">
					<span>${nicedate(post.time)}</span>
					<span>${nicetime(post.time)}</span>
				</time>
			</div>
		</div>
	`
}

