
import {html} from "lit"
import {dom} from "@e280/sly"
import {setupBenev, hubIframe} from "@benev/web"

const benev = await setupBenev()
dom.register(benev.elements)

const hub = hubIframe({src: "http://localhost:8080/hub/"})

dom.in("benev-menu").render(html`
	${hub.iframe}
`)

await hub.connect()

console.log("👼", hub.$user())

