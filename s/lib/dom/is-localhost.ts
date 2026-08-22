
export function isLocalhost(url = window.location.href) {
	return new URL(url).hostname === "localhost"
}

