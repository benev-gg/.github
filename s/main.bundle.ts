
import {dom} from "@e280/sly"
import {setup} from "@benev/web"

const benev = await setup()
dom.register(benev.elements)

console.log("👼")

