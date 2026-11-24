---
title: "Conditional Slicing"
subject: intro-to-r
aliases: []
related: ["Dataframe", "Observation", "Working Directory"]
source_folder: intro-to-r
ai_drafted: true
---

Keeping dataframe rows by placing a logical vector in the row position.

## When to use

Example: `yad2[yad2$Maker == "Toyota", ]`. In dplyr, [[filter()]] does the same job more cleanly.

See [[Lec_04-Dataframes|Lec 04]].
