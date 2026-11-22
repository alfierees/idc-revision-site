---
title: csv Module
subject: computational-thinking-python
aliases: ["csv"]
related: ["File IO", "With Statement", "Dictionary", "datetime Module", "Python Standard Library"]
source_folder: computational-thinking-python
ai_drafted: true
---

Library module for reading and writing CSV files. `csv.reader` wraps an open file and yields one list of strings per line, and `csv.DictReader` yields each row as a [[Dictionary]] keyed by the header names.

## When to use

It ships with the [[Python Standard Library]], so no install is needed. The Lecture 11 COVID example reads rows with `row['DATE']` and `row['NEW']`, and the 2022 Moed B paper has a question that sums the last cell of each line of a CSV file; see [[File IO]].

See [[Lec_11-Modules and the Standard Library|Lec 11]].
