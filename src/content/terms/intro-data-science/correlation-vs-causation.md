---
title: Correlation vs Causation
subject: intro-data-science
aliases: []
related: ["Confounding Variable", "Survivorship Bias", "Linear Regression"]
source_folder: intro-data-science
ai_drafted: true
---

Two variables moving together does not mean one causes the other; a hidden third variable can drive both. In the lecture's food-delivery data, ad spend and revenue correlate at about 0.99, yet temperature plausibly drives both.

## When to use

Before accepting a causal claim such as "double the ad budget", ask whether it is causal or confounded and what the return per extra shekel is. The same caution applies to regression: a coefficient quantifies association, not causation.

See [[Lecture 2 - EDA and Charts|DS Lec 2]].
