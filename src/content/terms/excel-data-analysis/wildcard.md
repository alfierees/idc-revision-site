---
title: Wildcard
subject: excel-data-analysis
aliases: [Wildcards]
related: ["AutoFilter", "Advanced Filter", "Criteria Range", "Match Mode"]
source_folder: excel-data-analysis
ai_drafted: true
---

`*` stands for any run of characters (including none), `?` for exactly one character, and `~` escapes them. They work on text only and are not case sensitive.

## When to use

Patterns such as `a*` (starts with a), `*Haifa*` (contains Haifa) and `a???` (a four-letter word starting with a) work in [[AutoFilter]] text filters, [[Advanced Filter]] criteria, database-function criteria and `COUNTIF`. To find a literal asterisk, put `~` in front.

See [[Lec_01-Sorting, Filters & Database Functions|Lec 01]].
