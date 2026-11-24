---
title: Single Sample Z Test
subject: statistics-b
aliases: []
related: ["Z Test", "Single Sample t Test", "Critical Value", "P-Value", "Directional Hypothesis", "Non-Directional Hypothesis", "Central Limit Theorem", "Standard Error"]
source_folder: statistics-b
ai_drafted: true
---

Tests the expected value of a single population when the variance is known and the average is normal under H0. The statistic is $Z_{\bar X}=(\bar X-\mu_{H_0})/(\sigma_X/\sqrt{n})\sim N(0,1)$.

## When to use

Check first that the average is normal ($n\ge30$ by the [[Central Limit Theorem]], or a normal population) and that $\sigma$ is known, for example from previous experience. The tail you check follows H1; at $\alpha=0.05$ the critical values are 1.65, $-1.65$ or $\pm1.96$. In the sprinters example $Z=-1.83$ and $p=0.0336$, so H0 is rejected.

See [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]].
