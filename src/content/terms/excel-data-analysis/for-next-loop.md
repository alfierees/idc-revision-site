---
title: For Next Loop
subject: excel-data-analysis
aliases: ["Loops"]
related: ["VBA Macro", "Variable Declaration in VBA", "Nested IF"]
source_folder: excel-data-analysis
ai_drafted: true
---

Repeats a block of VBA code while a counter changes: `For i = 2 To 4 ... Next i` runs three times with `i` taking the values 2, 3 and 4.

## When to use

In the BMI macro the loop fills three people's rows, because `Cells(i, column)` writes one row lower on each pass. Combine it with `Cells(row, col)` when the position is calculated.

See [[Lec_08-VBA Macros|Lec 08]].
