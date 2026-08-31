
import {html} from "@e280/scute"
import {Post} from "./types.js"
import {avatar} from "../../utils/avatar.js"
import {nicedate, nicetime} from "../../utils/nicedate.js"

export function xAuthor(post: Post) {
	const date = new Date(post.time)
	const prettyTime = new Intl.DateTimeFormat(undefined, {
		dateStyle: "long",
		timeStyle: "short",
	}).format(date)

	const avatarStyle = `--avatar-url: url('${avatar(post.author)}');`

	return html`
		<div x-author>
			<div class=avatar style="${avatarStyle}"></div>
			<div>
				<span>${post.author}</span>
				<time datetime="${date.toISOString()}" title="${prettyTime}">
					<span>${nicedate(post.time)}</span>
					<span>${nicetime(post.time)}</span>
				</time>
			</div>
		</div>
	`
}

