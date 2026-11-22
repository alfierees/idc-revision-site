---
title: Cross-Sheet Reference
subject: excel-data-analysis
aliases: []
related: ["Absolute Reference", "IF Function"]
source_folder: excel-data-analysis
ai_drafted: true
---

A reference to a cell on another sheet, written `'Sheet name'!J2`. Single quotes are needed when the sheet name contains spaces, and a lookup range can be on another sheet too, as in `feedback!$A$2:$A$51`.

## When to use

Seen in the `If statements` formulas, which read salary from `'Filters advanced'!J2` while the rule cells sit on the current sheet, and in the lookups into the `feedback` and `Branches` sheets. A formula can mix references to two sheets.

See [[Lec_02-IF Statements & Logical Functions|Lec 02]].
