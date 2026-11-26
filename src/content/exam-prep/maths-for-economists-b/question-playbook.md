---
title: "Exam Question Playbook"
subject: maths-for-economists-b
type: reference
description: "A step-by-step script for every question type on the Maths B final, with the sentence to write for each 'explain' part: profit and marginal profit, the differential, critical points, Lagrange, level curves and slices, domains, limits, the function study and parametric systems."
course: Maths for Economists B
instructor: Hever Schulberg
semester: 2
year: 1
order: 4
tags:
  - maths-for-economists-b
  - exam-prep
  - playbook
---

> Each play is the order of moves the official solutions use, with the sentence that earns the "explain" marks. Formulas are on the [[Calculus and Systems Formula Sheet]]; worked examples on the [[Cheat Sheet (Lec 1–12)]].

## A. Build the profit function

1. Revenue for each product is **price × quantity**. If prices depend on quantities ($p = 240 - 4x + y$), multiply out: $R = px + qy$.
2. $P = R - C$. Every cost term changes sign; a fixed cost is a constant.
3. If the question works in **prices** instead of quantities, substitute the demand equations the other way round, and say so: the partial derivative now means "the price one dollar higher".
4. Evaluate at the given point and keep the number: later parts reuse it.

## B. "Compute and explain the marginal profit"

1. $P_x$ with $y$ frozen, $P_y$ with $x$ frozen. Evaluate at the point.
2. Write: **"If the firm produces one more unit of A, with B held at 10, monthly profit rises by about 500."** The words "about", "one more unit" and "the other held fixed" are what is graded.
3. "Which product should it add?" The one with the larger marginal profit. "Where are they equal?" Solve $P_x = P_y$ together with the condition given ($x = 2y$, say).
4. "Is it worth producing more of A?" Look at the sign of $P_x$.

## C. Estimate a change with the differential

1. $dx$ and $dy$ are the **changes**, with sign: $(10, 10) \to (11, 9)$ is $dx = 1$, $dy = -1$.
2. $dP = P_x\,dx + P_y\,dy$ with the partials at the **starting** point.
3. Write: "Profit falls by about 1000", and if asked, the estimate $P(11, 9) \approx P(10, 10) + dP$.

## D. Find and classify critical points

1. Write $f_x = 0$ and $f_y = 0$. **Factor** before you divide; each factor is a case.
2. Solve, and drop any point outside the domain (a log of 0, a denominator of 0).
3. Second partials, then $D = f_{xx}f_{yy} - f_{xy}^2$ **at each point**, in a table.
4. $D > 0$: extremum, $f_{xx}$ decides. $D < 0$: saddle. Give the value $f$ at an extremum.
5. "Show it is not critical": compute one partial at the point and show it is not 0.
6. "Find the parameters so that $(1, 2)$ is critical": substitute the point into $f_x = 0$ and $f_y = 0$ and solve for the parameters.

## E. Lagrange

1. Name $f$ and the constraint $g = c$. Write $\mathcal L = f - \lambda(g - c)$.
2. $\mathcal L_x = 0$, $\mathcal L_y = 0$ (and $\mathcal L_z = 0$...), plus the constraint.
3. Solve each $\mathcal L$ equation for $\lambda$ and set them equal: that gives a relation like $x = 2y$. Put it in the constraint.
4. Value of $f$ at each candidate. Two candidates: the larger is the max, the smaller the min. One candidate: say why it is a min or max (a sum of squares is convex; the question may say you need not prove it).
5. "What does $\lambda$ mean?" One more unit of the constraint constant changes the optimal value by about $\lambda$.

## F. Level curves, slices and tangent lines

1. Find the point: substitute the given coordinate into $f = c$ and solve for the other one. Keep the root the question asks for ($y < 0$).
2. Slope: $y' = -F_x/F_y$, or differentiate both sides. **Simplify the equation first** (take logs of $e^{(\dots)} = e$).
3. A slice $x = 9$: the curve is $z = f(9, y)$, its slope is $f_y(9, y)$.
4. Tangent line: $y - y_0 = m(x - x_0)$. In 3D say which plane it lies in ("$z = 2$, $x + y = 2$").
5. "Explain the meaning of $dx/dy$ on a cost curve": along the curve of constant cost, one more unit of $y$ needs about $|dx/dy|$ fewer units of $x$.

## G. The domain of $f(x, y)$, drawn

1. One condition per log, root and denominator.
2. Turn each into a region: $y < 1$, $y > x^2$, $x^2 + y^2 \ne 0$.
3. A product inside a log: **two cases** (both positive, or both negative).
4. Sketch: boundary dashed for a strict inequality, solid for $\ge$, a hollow point for a removed point. Shade the region and say it in words.

## H. Limits

1. Substitute first. Name the form you get.
2. $\tfrac00$ or $\tfrac\infty\infty$: L'Hôpital. $0\cdot\infty$: make it a quotient. $0^0$: $e^{(\cdot)\ln(\cdot)}$.
3. Write the form at every step ("form $\tfrac00$, so by L'Hôpital…"): the method is graded, not only the number.

## I. The function study (last question)

1. **Domain**, from every log, root, denominator and variable base.
2. **Intercepts**: $f(0)$ if allowed; $f = 0$.
3. **Limits at both ends** of the domain and at any excluded point. Infinite at a finite point: vertical asymptote. Finite at $\pm\infty$: horizontal asymptote. Finite at an edge: no asymptote, say so.
4. **$f'$**, simplified and factored. A sign table: intervals, sign, ↗ or ↘. Name the extremum and its value.
5. **Global extrema on the interval**: where is the critical point relative to the interval? Values at closed ends, limits at open ends. Write "no maximum, because the value 2 is approached but not attained at the open end $x = 1$".
6. A sketch if asked: asymptotes dashed, the extremum marked, the interval shaded.

## J. A linear system with a parameter

1. Augmented matrix. Constants to the right, unknowns in order.
2. Eliminate with $R_2 - R_1$-type moves; **never divide by** $k$, $k - 1$, $a$...
3. Reach a staircase. Factor every pivot and the last constant.
4. A table of cases: each value that makes a pivot 0, then "all other $k$". Read each case off the rule: $0 = c \ne 0$ none, a free column infinitely many, otherwise unique.
5. "Explain why there is never a unique solution": "There are 4 unknowns and only 3 equations, so at most 3 leading entries. At least one variable, here $x_4$, is independent (free), so whenever there is a solution there are infinitely many."
6. "Solve for $k = 5$": substitute, finish Gauss-Jordan, set the free variables to $s$, $t$ and write the dependent ones in terms of them. An extra condition ($x_1 = x_2 = 0$) gives equations for $s$, $t$.
7. Homogeneous? Only if every constant is 0 for that $k$; then the zero vector is a solution.
