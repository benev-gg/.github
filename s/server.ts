
import express from "express"
import compression from "compression"

const port = 8080

express()
	.use(compression())
	.use(express.static("x"))
	.listen(port, "0.0.0.0", () => console.log(`📡 listening on ${port}`))

