
import {dom} from "@e280/sly"
import {setupBenev} from "@benev/web"

const benev = await setupBenev()
dom.register(benev.elements)

console.log("👼")

