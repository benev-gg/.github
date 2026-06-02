
import {html} from "@e280/scute"

export function xTags(tags: string[]) {
	return tags.length
		? html`
			<ul x-tags>
				${tags.map(tag => html`
					<li>${tag}</li>
				`)}
			</ul>
		`
		: null
}

