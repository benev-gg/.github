
import {readdir} from "node:fs/promises"

export async function list(path: string) {
	const files: string[] = []
	const dirs: string[] = []

	for (const ent of await readdir(path, {withFileTypes: true})) {
		if (ent.isFile())
			files.push(ent.name)
		else if (ent.isDirectory())
			dirs.push(ent.name)
	}

	return {files, dirs}
}

