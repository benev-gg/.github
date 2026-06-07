
import {html} from "lit"
import {dom} from "@e280/sly"
import {errorString} from "@e280/stz"
import {Shell, Loader, headerComponent, menuComponent, loaderComponent} from "@benev/web"

const shell = new Shell()
const loader = new Loader({
	transitionDuration: 200,
	errorDisplay: err => html`<div class=error>error: ${errorString(err, "unknown")}</div>`,
})

dom.register({
	BenevHeader: headerComponent(shell),
	BenevMenu: menuComponent(shell),
	BenevLoader: loaderComponent(loader),
})

console.log("👼")

