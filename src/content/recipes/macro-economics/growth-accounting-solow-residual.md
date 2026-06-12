---
title: "Growth Accounting — Decomposing Output Growth (the Solow Residual)"
subject: macro-economics
related_terms: ["solow-residual", "total-factor-productivity", "growth-models", "cobb-douglas", "production-function", "development-accounting"]
source_folder: macro-economics
ai_drafted: true
---

Use growth accounting to decompose a country's output growth over time into the contributions of capital growth, labor growth, and [[Total Factor Productivity]] growth (the [[Solow Residual]]). Starting from $Y = AF(K,N)$, differentiating and dividing by $Y$ gives
$$\frac{\Delta Y}{Y} = \frac{\Delta A}{A} + \varepsilon_{Y,K}\frac{\Delta K}{K} + \varepsilon_{Y,N}\frac{\Delta N}{N},$$
so the Solow Residual is $g_A = g_Y - \varepsilon_{Y,K}\, g_K - \varepsilon_{Y,N}\, g_N$.

1. **Collect data** on $g_Y$, $g_K$, $g_N$ (with quality adjustments if possible).
2. **Estimate the elasticities** $\varepsilon_{Y,K}$ and $\varepsilon_{Y,N}$ — for [[Cobb-Douglas]] these equal the income shares $\alpha$ and $\beta$, read from national accounts.
3. **Calculate the capital and labor contributions** ($\alpha g_K$ and $\beta g_N$).
4. **Calculate TFP growth as the residual** — everything in output growth left unexplained by inputs.

## Common pitfalls

- The elasticities equal income shares **only under Cobb-Douglas** (competitive markets); otherwise estimate them directly.
- TFP is a *residual*, so it absorbs all measurement error in $g_Y$, $g_K$, $g_N$ — quality-adjust inputs where you can.

## Worked example

$g_Y = 0.10$, $g_K = 0.05$, $g_N = 0.02$, $\alpha = 1/3$, $\beta = 2/3$:
$$g_A = 0.10 - \tfrac{1}{3}(0.05) - \tfrac{2}{3}(0.02) = 0.10 - 0.0167 - 0.0133 = 0.07,$$
so 70% of growth is explained by TFP — capital and labor contributions are much smaller. See [[Lec_04-Production]].
