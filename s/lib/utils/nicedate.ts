
export function nicedate(time: number) {
	const date = new Date(time)
	const yyyy = date.getFullYear()
	const mm = String(date.getMonth() + 1).padStart(2, "0")
	const dd = String(date.getDate()).padStart(2, "0")
	return `${yyyy}-${mm}-${dd}`
}

export function nicetime(time: number) {
	const date = new Date(time)
	const hh = String(date.getHours()).padStart(2, "0")
	const mm = String(date.getMinutes()).padStart(2, "0")
	return `${hh}:${mm}`
}

