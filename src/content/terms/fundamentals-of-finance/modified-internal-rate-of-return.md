---
title: Modified Internal Rate of Return
subject: fundamentals-of-finance
aliases:
  - MIRR
related:
  - Internal Rate of Return
  - Net Present Value
source_folder: fundamentals-of-finance
ai_drafted: true
---

MIRR compounds all positive cash flows forward to the end, discounts all negative cash flows back to today, and takes the single-period growth rate between the two: $MIRR=\left(\frac{FV_{\text{positive}}}{PV_{\text{negative}}}\right)^{1/n}-1$. This avoids the multiple-[[Internal Rate of Return]] problem.

## When to use

On the cheat sheet's decision tree, for mutually exclusive projects pick the greatest [[Net Present Value]] or the greatest MIRR. Excel: `MIRR`.

See [[Read_01-Finance Cheat Sheet|Cheat sheet]].
