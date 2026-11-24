---
title: "4. The Lagrange multipliers method"
subject: maths-for-economists-b
related_terms:
  - lagrange-multiplier
  - lagrangian
  - constrained-optimisation
source_folder: maths-for-economists-b
ai_drafted: true
---

Use this method to optimise $f(x_1,\dots,x_n)$ subject to one or more constraints $g_k(x_1,\dots,x_n)=c_k$, without first solving a constraint for one variable.

1. Form $\mathcal L=f-\sum_k\lambda_k\,(g_k-c_k)$, with one multiplier $\lambda_k$ per constraint.
2. Set every partial derivative to zero: $\partial\mathcal L/\partial x_i=0$ for all $i$, plus the constraints themselves.
3. Solve the system for the $x_i$ and the $\lambda_k$, then evaluate $f$ at the solution.

## Common pitfalls

Pitfalls not covered in source — review and add.

## Worked example

Minimise $C=a^2+ah$ subject to $a^2h=2$. Form $\mathcal L=a^2+ah-\lambda(a^2h-2)$. Then $\mathcal L_h=a-\lambda a^2=0$ gives $\lambda=\tfrac1a$, and $\mathcal L_a=2a+h-2\lambda ah=0$ becomes $2a+h-2h=0$, so $h=2a$. The constraint gives $a^2\cdot 2a=2$, so $a=1$ and $h=2$.

See [[Lec_08-Second Derivative Test and Lagrange Multipliers|Lec 08]].
