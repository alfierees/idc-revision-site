---
title: Explicit Feedback
subject: intro-data-science
aliases: []
related: ["Implicit Feedback", "Recommendation System", "User-Item Matrix"]
source_folder: intro-data-science
ai_drafted: true
---

Direct signals of preference such as star ratings. They are clear but rare, since most users do not rate.

## When to use

Contrast it with [[Implicit Feedback]] (watch time, clicks), which is abundant but noisy. The lecture notes a mismatch problem (rating 3 stars but watching 100%), yet uses explicit ratings because they are cleaner to evaluate; in the Seret+ data they are the `rating` column versus `watch_pct`.

See [[Lecture 6 - Recommendation Systems|Lec 6]].
