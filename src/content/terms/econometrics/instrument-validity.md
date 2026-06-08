---
title: Instrument Validity
subject: econometrics
aliases: ["exclusion restriction", "validity condition"]
related: ["instrumental-variables", "instrument-relevance"]
source_folder: econometrics
ai_drafted: true
---

**Validity** (the exclusion restriction) is the second IV condition: the instrument $Z$ must affect the outcome $Y$ *only through* the endogenous regressor $X$, with $\text{cov}(Z, u) = 0$. Unlike [[Instrument Relevance|relevance]], validity is **not directly testable** — the error term $u$ is unobservable, so no statistical procedure can confirm validity. It must be defended by a theoretical argument: the instrument is randomly assigned, or its only plausible channel to $Y$ runs through $X$.

## When to use

Every IV paper stands or falls on its exclusion-restriction argument. Critics attack instruments by proposing alternative pathways from $Z$ to $Y$ — e.g. PS_2 worries that parents' education might affect daughters' fertility *directly* through transmitted preferences, not just through her schooling. With multiple instruments you can run a **Sargan overidentification test**: if the over-identifying restrictions hold (p > 0.05), it's *weak* evidence of validity — but the test is blind to violations that affect all instruments in the same direction. Validity is ultimately a *theoretical* commitment, not a statistical one.
