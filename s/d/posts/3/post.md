+++
time = 1781756389581
author = "chase"
slug = "babylon-lite"
title = "babylon lite"
summary = "let's make nano an early adopter"
tags = ["dev", "tutorial"]
+++

[babylon lite](https://www.babylonjs.com/lite/) came out recently.  
as i'm now wiring it into [nano](https://nano.benev.gg/), i thought i'd make this tutorial.

### install lite via npm

```bash
npm install @babylonjs/lite
```

### setup the basics

```ts
import {createEngine, createSceneContext, createHemisphericLight, addToScene} from "@babylonjs/lite"

const engine = await createEngine(canvas)
const scene = createSceneContext(engine)
const light = createHemisphericLight([0, 1, 0], 1)

addToScene(scene, light)
```
- ***engine*** is what talks to the gpu and paints onto the canvas.
- ***scene*** is an ethereal place where we plop all of our loaded resources (visible or otherwise).

*wip*

