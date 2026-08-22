
import {dom} from "@e280/sly"
import {hostHub} from "@benev/web"
import {makeAuthWidget} from "@e280/authlocal"
import {isLocalhost} from "../lib/dom/is-localhost.js"

const {auth} = await hostHub({
	allowedOrigins: new Set(isLocalhost()
		? [
			"http://localhost:8080",
			"http://localhost:8081",
			"http://localhost:8082",
		]
		: [
			"https://benev.gg",
			"https://praxis.benev.gg",
			"https://nano.benev.gg",
			"https://solstice.benev.gg",
		],
	),
})

dom.register({
	AuthWidget: makeAuthWidget(auth),
})

