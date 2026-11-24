---
title: Criteria Range
subject: excel-data-analysis
aliases: []
related: ["Advanced Filter", "Database Function", "Wildcard", "FILTER"]
source_folder: excel-data-analysis
ai_drafted: true
---

A block of cells whose top row copies the exact column headers from the data, with the conditions written underneath. Conditions on the same row are ANDed and conditions on different rows are ORed; a blank cell means no condition on that column.

## When to use

It drives the [[Advanced Filter]] and the [[Database Function]]s (`DSUM`, `DAVERAGE`, `DCOUNT`). Headers must match the data exactly, and a blank row in the range matches every record, so select only rows that contain conditions.

See [[Lec_01-Sorting, Filters & Database Functions|Lec 01]].
