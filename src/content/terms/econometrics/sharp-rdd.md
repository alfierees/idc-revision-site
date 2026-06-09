---
title: Sharp RDD
subject: econometrics
aliases: ["sharp regression discontinuity", "sharp RD"]
related: ["regression-discontinuity", "fuzzy-rdd", "running-variable", "cutoff"]
source_folder: econometrics
ai_drafted: true
---

In a **sharp RDD**, treatment is **deterministic** at the cutoff: every unit with $r > c$ is treated, every unit with $r \le c$ is not. The probability of treatment jumps cleanly from 0 to 1 at the threshold. The standard estimator is interacted OLS with the running variable centred at the cutoff: $y = \beta_0 + \beta_1(r - c) + \beta_2 \cdot \mathbf 1[r > c] + \beta_3 (r - c) \cdot \mathbf 1[r > c] + u$, with $\hat\beta_2$ giving the jump at the cutoff.

## When to use

Choose sharp RDD whenever the assignment rule is mechanical: legal-drinking-age effects (age in days), close elections (>50% vote share, PS_5), passing/failing exams. If treatment probability only *changes* at the cutoff but isn't 0/1 — for instance, some students above a scholarship cutoff still decline the scholarship — it is [[Fuzzy RDD]], estimated via IV with the cutoff dummy as instrument.
