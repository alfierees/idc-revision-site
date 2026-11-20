---
title: InputBox
subject: excel-data-analysis
aliases: []
related: ["VBA Macro", "Variable Declaration in VBA", "MsgBox"]
source_folder: excel-data-analysis
ai_drafted: true
---

A VBA dialog, `InputBox(prompt, title)`, that waits for the user to type and returns what they typed, so `num1 = InputBox(...)` stores the answer.

## When to use

Used in the calculator and BMI macros to ask for numbers. It returns text, so typing letters or clicking Cancel into a numeric variable causes an error, since the class code has no error handling.

See [[Lec_08-VBA Macros|Lec 08]].
