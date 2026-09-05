
import {Orb} from "@e280/scute"
import {consts} from "../../consts.js"

export function canonicalUrl(orb: Orb) {
	return consts.origin + orb.url('@/', true) + '/'
}

