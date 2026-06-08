---
title: Abnormal Returns
subject: econometrics
aliases: ["AR", "abnormal return", "AP", "abnormal pollution"]
related: ["event-study", "estimation-period", "observation-period"]
source_folder: econometrics
ai_drafted: true
---

In an [[Event Study]], **abnormal returns** are the difference between actual outcomes and what the pre-event model predicted: $AR_t = y_t - \hat y_t$. They measure the market's (or system's) "surprise" at the event — the portion of the outcome that "business as usual" cannot explain. Cumulative abnormal returns over the event window quantify the total causal effect.

## When to use

Compute abnormal returns whenever you've run an event study. The pattern matters: AR ≈ 0 before the event and a discrete shift after = clean policy effect; nonzero AR *before* the event = anticipation (markets learned the news early); persistent post-event AR ≠ 0 = the model is missing something (or the event had a delayed effect). PS_3 calls the analogue "abnormal pollution" — `AP_t = log_nox_t - log_nox_hat_t` — and compares the post-period average against zero.
