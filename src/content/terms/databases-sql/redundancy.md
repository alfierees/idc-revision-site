---
title: "Redundancy"
subject: databases-sql
aliases: []
related: ["Normalisation", "Update Anomaly"]
source_folder: databases-sql
ai_drafted: true
---

Storing the same fact in more than one place, which wastes space and risks inconsistent copies.

## When to use

Spot it when a value such as a department name repeats across rows. Normalization removes it. Taught in [[Lec_05-Normalization & SQL Syntax|Lecture 5]].
