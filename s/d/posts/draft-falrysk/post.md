+++
draft = true

slug = "big-island"
title = "building a really big island"
summary = "the land of falrysk rises from the sea"

time = 1794867468509
author = "chase"
tags = ["benev", "falrysk"]
+++

falrysk is an ambitious game.

it's set on a truly enormous procedurally generated island. vast forests. tall mountains. deep valleys. an expanse so massive, that you can explore it with friends for hours, days, weeks -- and you'll still wonder what's over the distant mountains.

i didn't fully appreciate the true scale of what we were building, until i set my spectator camera to fly at mach 2 -- and it felt really slow! wow. this place is *huge.* suddenly, our ballpark estimate that we'll need 50 million trees, made sense.

## geology matters.

i'm no wilderness expert, but it's really important to me that an experienced woodsman exploring falrysk will recognize the logic of the landscape. it has to ring true.

what i mean is, real-world orienteering skills should actually apply. follow a creek upstream, you may find a spring at its source. follow it downstream, it grows in size and merges with others. lakes settle in basins. rivers lead to the sea. rain shadows form where wind hits mountains, squeezing rain out of the air, leaving it dry as it flows down the other side.

everything about a landscape follows natural laws. the way water flows. the way mountain ridges connect. where coastal plains sit.

i'm trying to learn as much as i can about the real world, and model it mathematically.

## okay, but it has to load in seconds.

some modern games weigh like 200 gigabytes, but we want falrysk to be like 20 megabytes. that's a bit smaller.

so, we have to be frugal. and clever. procedural generation techniques are obviously the key. instead of modeling a giant island, it's more like we're creatively coaxing it out of an infinite mathematical fractal. but, procgen doesn't automatically mean it's free or instant. we still need to build sophisticated systems to do this efficiently.

falrysk's architecture leverages web-worker multithreading. each worker runs on a separate processor at the same time. each splitscreen player gets a separate render worker. world rendering is orchestrated by a dynamic asynchronous quadtree. as you move around the island, the quadtree reconfigures itself to distribute higher-quality details nearby the camera. jobs to generate fresh world sectors get distributed across a pool of workers.

