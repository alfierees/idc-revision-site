---
title: Event Study
subject: econometrics
aliases: ["event-study methodology"]
related: ["abnormal-returns", "estimation-period", "observation-period"]
source_folder: econometrics
ai_drafted: true
---

An **event study** measures the causal effect of a discrete event by comparing the *actual* outcome in a post-event window to the outcome the **pre-event model** would have predicted. The difference is the **[[Abnormal Returns|abnormal return]]** $AR_t = y_t - \hat y_t$. Significant abnormal returns concentrated around the event date are evidence that the event itself caused them.

## When to use

Event studies are everywhere in finance (M&A announcements, regulatory actions, earnings surprises) and increasingly in environmental and policy economics. The PS_3 HNC analysis is the textbook environmental application: estimate a pre-1989 model of `log_nox` on weather + season + trend, predict it forward, then check whether actual post-policy pollution deviates from the prediction. Validity rests on the [[Estimation Period]] being long enough to estimate the baseline reliably and free of anticipation effects, and on the predictor set being rich enough to capture "business as usual."
