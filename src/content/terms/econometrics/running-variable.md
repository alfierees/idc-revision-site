---
title: Running Variable
subject: econometrics
aliases: ["forcing variable", "assignment variable"]
related: ["regression-discontinuity", "cutoff", "bandwidth"]
source_folder: econometrics
ai_drafted: true
---

The **running variable** (or forcing variable) is the continuous variable whose value at the [[Cutoff]] determines treatment in a [[Regression Discontinuity]] design. Test score, income, vote share, age, date of birth — anything where crossing a threshold flips treatment on or off. By convention the running variable is **centered at the cutoff** ($\tilde r = r - c$) before estimation, so the regression intercept is read off *at* the threshold.

## When to use

The credibility of an RDD rests on whether units can manipulate their position relative to the cutoff. If they can't (the cutoff was unannounced or the running variable is exogenous like a vote total), comparability holds. If they can (e.g. test takers studying just enough to clear the cutoff), the design is compromised — test with a [[McCrary Density Test]]. PS_5's running variable is `pct_vote_union`, centred at 0.5.
