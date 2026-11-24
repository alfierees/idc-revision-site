---
title: Variable Declaration in VBA
subject: excel-data-analysis
aliases: []
related: ["InputBox", "VBA Macro", "For Next Loop"]
source_folder: excel-data-analysis
ai_drafted: true
---

`Dim name As Type` reserves a typed variable. `Integer` holds whole numbers (roughly -32,768 to 32,767) and `Single` holds decimals.

## When to use

Choose the type deliberately: an `Integer` variable rounds 2.7 to 3, which is why the BMI macro declares height, weight and BMI as `Single`. The class `calc` macro declares both inputs as `Integer`.

See [[Lec_08-VBA Macros|Lec 08]].
