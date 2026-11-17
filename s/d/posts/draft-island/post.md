+++
draft = true

slug = "big-island"
title = "building a really big island"
summary = "the land of falrysk rises from the sea"

time = 1794867468509
author = "chase"
tags = ["benev", "falrysk"]
+++

falrysk is an ambitious game project.

we're starting to build a truly enormous island. vast forests. tall mountains. deep valleys. an expanse so massive, that you can explore it with friends for hours, days, even weeks... and you'll still wonder what's over the distant mountains.

i didn't fully appreciate the true scale, until i set my spectator camera to fly at mach 2, and it felt really slow! wow. this place is *huge.* suddenly our ballpark estimate, that we'll need 50 million trees, made sense.

## geology matters.

i'm no wilderness expert, but it's really important to me that an experienced woodsman exploring falrysk will recognize the logic of the landscape. it has to ring true.

what i mean is, real-world orienteering skills should actually apply. follow a creek upstream, you may find a spring at its source. follow it downstream, it grows in size and merges with others. lakes settle into basins. rivers lead to the sea. wind hits mountains, squeezing rain out of the air, leaving it dry as it flows down the other side. *rainshadow microclimates.*

everything about a landscape follows natural laws. the way water flows. the way mountain ridges connect. where coastal plains lay.

so, i'm basically trying to learn how the real world works and then apply it as faithfully as i can muster.

## an infinite number of giant islands.

some modern games weigh like 200 gigabytes, but we want falrysk to be like 25 megabytes.

so, we have to be very frugal. and very clever.

procedural generation is the key. instead of modeling a giant island ahead of time, it's more like we're modeling it mathematically, and creatively coaxing it out of an infinite fractal.

we build a mathematical model, an oracle, that can answer questions about the island like *"what's the elevation at these coordinates?".* then, we build a rendering machine that uses the oracle to answer another question, *"how should we spend our 1-million triangle budget to render what the camera can see?"*

this means we're not just making an island. *we're making an infinite number of islands.* each player gets their own. no two are the same.

even still, procgen doesn't make it instant. when a player hits "new game", even after we've loaded our 25 megabytes, we still want to go from "nothing" to "you're now running around your own giant bespoke island" in about one second. that means we need to run geology simulation, erosion, hydrology and rivers etc, all of that, before the game even starts.

technically, world rendering is orchestrated by a dynamic quadtree. as you explore the island, it reconfigures itself so the camera is surrounded by high-detail sectors. as you move, it orders fresh world sectors from a pool of web-workers that operate in parallel on multiple cpu cores.

