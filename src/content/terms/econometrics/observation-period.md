---
title: Observation Period
subject: econometrics
aliases: ["event window", "post-event window"]
related: ["event-study", "estimation-period", "abnormal-returns"]
source_folder: econometrics
ai_drafted: true
---

The **observation period** in an [[Event Study]] is the post-event window in which abnormal returns are computed. The baseline model fit during the [[Estimation Period]] is projected into this window; any deviation from the model's predictions is attributed to the event. The window length depends on how quickly you expect effects to unfold: instantly for financial news, over years for policy interventions with behavioural adjustment.

## When to use

PS_3's observation window is Nov 20 1989 – Dec 31 1993 (~4.1 years post-HNC) — long enough to detect *delayed* effects from behavioural responses (the second-car-purchase substitution Davis 2008 documents takes time). A too-short window misses delayed responses; a too-long window risks contaminating with other concurrent events. State the window choice and its justification explicitly in any event-study writeup.
