---
title: Cutoff
subject: econometrics
aliases: ["threshold", "discontinuity point"]
related: ["regression-discontinuity", "running-variable", "bandwidth"]
source_folder: econometrics
ai_drafted: true
---

The **cutoff** is the threshold value of the [[Running Variable]] that switches treatment on or off in a [[Regression Discontinuity]] design. Above the cutoff units are treated (or treatment probability jumps); below they are not. The design exploits the fact that units just on either side of the cutoff are essentially comparable, while their treatment status differs.

## When to use

Identify the cutoff first — it is the institutional rule that creates the design. PS_5's cutoff is 0.50 (union forms iff >50% vote in favour). Other examples: Medicare eligibility at age 65, legal driving age at 16, scholarship eligibility at 1,200 SAT points. With the cutoff fixed, RDD estimation centres the running variable ($r - c$) so the coefficient on the treatment dummy reads off the jump at the threshold.
