---
title: "Cheat Sheet (Lec 1–12)"
subject: maths-for-economists-b
type: reference
description: "Everything the final uses from the 12 lectures, in exam order: global extrema, logs, limits and asymptotes, the full function study, implicit slopes, two-variable functions, marginal profit and the differential, critical points, Lagrange, and linear systems with parameters, each with a worked example from a past paper."
course: Maths for Economists B
instructor: Hever Schulberg
semester: 2
year: 1
order: 1
pinned: true
tags:
  - maths-for-economists-b
  - exam-prep
  - cheat-sheet
aliases:
  - Maths B Cheat Sheet
  - Math II Cheat Sheet
---

> **The exam:** 3 hours, the course formula sheet and a non-graphing calculator, **4 questions of 25 points**, all compulsory. "The use of any mathematical technique which was not covered in this course is strictly forbidden", so solve it the course's way (L'Hôpital, the $D$ test, Lagrange, Gauss-Jordan). The four slots have been stable since 2020:
>
> | Slot | What it is | Section |
> |---|---|---|
> | **Profit question** | Two products: build $P = R - C$, marginal profits $P_x$, $P_y$ and their meaning, a differential estimate, the critical point and its type, often a Lagrange part | §7, §8, §9 |
> | **Surface question** | Domain of $f(x,y)$, a level curve or a slice, the slope $y'$ by implicit differentiation, a critical point check | §5, §6 |
> | **Linear system** | A $3\times3$ or $3\times4$ system with a parameter $k$: unique, infinitely many, none, then one case solved. In every paper 2009 to 2023, **not** in 2024 or 2025 | §10, §11 |
> | **Function study** | One exp/log function: domain, limits and asymptotes (L'Hôpital, $0^0$), $f'$ and the extremum, global extrema on an interval | §1, §3, §4 |
>
> Limits and log differentiation also turn up as small parts inside the other questions. The best single preparation is the 2020 to 2025 papers on this site, all with official solutions.

---

## 0. Method picker: what does this question want?

| You see… | Do this | Section |
|---|---|---|
| "Global maximum / minimum on $[a, b)$" | Critical points **plus** the ends: value at a closed end, limit at an open end. A limit that is only approached is never an extremum | §1 |
| A word problem: fence, orchard, box, average cost | One variable: use the constraint to eliminate the other, differentiate, justify it is global | §1 |
| $\log_a$ of something, "solve", "domain" | Argument $> 0$ first, then combine into one log, then reject roots outside the domain | §2 |
| $\tfrac00$ or $\tfrac\infty\infty$ | L'Hôpital: differentiate top and bottom **separately** | §3 |
| $0\cdot\infty$ | Rewrite as a quotient, e.g. $x\ln x = \dfrac{\ln x}{1/x}$, then L'Hôpital | §3 |
| $0^0$, $1^\infty$, $\infty^0$, or $f(x)^{g(x)}$ | Write $e^{g\ln f}$, find the limit of $g\ln f$ | §3 |
| "Asymptotes" | Vertical: at the edges of the domain and where a denominator is 0, check the limit is $\pm\infty$. Horizontal: limit at $\pm\infty$ is finite | §3 |
| $x^x$, $x^{\ln x}$, $(\ln x)^x$: derivative or tangent | Log differentiation: $\ln y = g\ln f$, differentiate both sides | §3 |
| "Study the function" (the last question) | Domain, intercepts, limits and asymptotes, $f'$ sign table, extremum, global extrema on the interval | §4 |
| $F(x,y) = c$, "find $y'$" or "$dx/dt$" | $y' = -F_x/F_y$, after finding the point(s) on the curve | §5 |
| "Domain of $f(x,y)$, draw it" | Logs $> 0$ (dashed), roots $\ge 0$ (solid), denominators $\ne 0$; a product inside a log has two cases | §6 |
| "The slope of the curve cut by the plane $y = 2$" | That is $f_x(x, 2)$: the slice is a one-variable function | §6 |
| "Contour / level curve $z = c$" | Set $f = c$ and simplify: lines, circles, hyperbolas | §6 |
| "What does $P_x(20, 10) = 30$ mean?" | One more unit of $x$, $y$ held at 10, raises profit by about 30 | §7 |
| "Estimate the change from $(10,10)$ to $(11,9)$" | Differential: $dP = P_x\,dx + P_y\,dy$ | §7 |
| $\sum_j x_j \dfrac{\partial f}{\partial x_j}$ | Differentiate one term, multiply, add up. Homogeneous of degree $r$ gives $r f$ | §7 |
| "Find and classify the critical points" | $f_x = f_y = 0$, then $D = f_{xx}f_{yy} - f_{xy}^2$ at each point | §8 |
| "Show the point is not critical" | One non-zero partial is enough | §8 |
| "Subject to", "budget", "on the circle" | Lagrange: $\mathcal L = f - \lambda(g - c)$, all partials zero | §9 |
| A system of equations, "solve" | Augmented matrix, Gauss-Jordan to reduced echelon form | §10 |
| "For which $k$…" | Eliminate without dividing by $k$, then split the cases where a pivot is 0 | §11 |

---

## 1. Global extrema and optimisation (Lec 01)

**Recipe.** (1) Critical points: $f'(x) = 0$ or $f'$ undefined. (2) Values at closed ends, limits at open ends or $\pm\infty$. (3) Largest value is the global max, smallest the global min. A value that is only approached is not attained, so it is not an extremum.

> [!info] Two rules that save the comparison
> - **Closed interval:** a continuous function on $[a, b]$ has both a global max and a global min.
> - **One extremum:** if a continuous function has exactly **one** relative extremum on an interval, it is global.

| $f(x) = -x^2$ on | Max | Min | Why |
|---|---|---|---|
| all $x$ | 0 at 0 | none | $f \to -\infty$ |
| $[-1, 1]$ | 0 at 0 | $-1$ at $\pm1$ | closed interval |
| $(-1, 1)$ | 0 at 0 | none | $-1$ approached, never reached |
| $[-1, 2)$ | 0 at 0 | none | $f$ keeps falling towards $-4$ |

> [!example] Worked: the fence (Lec 01)
> A $10{,}800\ \text{m}^2$ area against a building; the side parallel to the building costs \$3 a metre, the other two \$2. With $xy = 10{,}800$: $C(x) = 3x + 4y = 3x + \dfrac{43{,}200}{x}$, so $C' = 3 - \dfrac{43{,}200}{x^2} = 0$ gives $x = 120$, $y = 90$. Only one critical point and $C'' > 0$, so it is the global minimum: **\$720**.

**Summation rules.** $\sum(a_i + b_i) = \sum a_i + \sum b_i$, $\sum \alpha a_i = \alpha\sum a_i$, and $\sum_{i=1}^n c = nc$. So $\sum_{i=1}^{10}(2^i + 3i - 5) = 2046 + 3(55) - 50 = 2161$.

---

## 2. Logs and exponentials (Lec 02)

$a^n = b \iff \log_a b = n$, for $a > 0$, $a \ne 1$, $b > 0$. **The argument of a log must be positive.**

| Rule | Formula |
|---|---|
| Inverse | $a^{\log_a b} = b$, $\ln e^x = x$ |
| Product | $\log(bc) = \log b + \log c$ |
| Quotient | $\log(b/c) = \log b - \log c$ |
| Power | $\log b^n = n\log b$ |
| Change of base | $\log_a c = \dfrac{\ln c}{\ln a}$ |

> [!example] Worked: $\log x + \log(x - 15) = 2$
> Domain $x > 15$. Combine: $x(x - 15) = 100$, so $x^2 - 15x - 100 = 0$, $x = 20$ or $-5$. **Reject $-5$**: $x = 20$.

$y = \log_a x$ is the inverse of $y = a^x$: reflect in $y = x$. Every log passes through $(1, 0)$, has the vertical asymptote $x = 0$, and is increasing when $a > 1$.

A variable base needs its own conditions: $\log_x(x - 1)$ needs $x > 0$, $x \ne 1$ **and** $x - 1 > 0$, so $x > 1$ ([[PP_30|2024 Moed A]] Q4). Convert to natural logs before differentiating.

---

## 3. Limits, asymptotes, $0^0$ and log differentiation (Lec 02 to 04)

**Derivatives you need.** $(e^x)' = e^x$, $(a^x)' = a^x\ln a$, $(\ln x)' = \tfrac1x$, $(\log_a x)' = \tfrac{1}{x\ln a}$, and with the chain rule $\big(e^{g}\big)' = g'e^g$, $\big(\ln g\big)' = \tfrac{g'}{g}$.

**L'Hôpital.** If $\lim \tfrac{f}{g}$ is $\tfrac00$ or $\tfrac{\pm\infty}{\pm\infty}$, then $\lim\tfrac fg = \lim\tfrac{f'}{g'}$. Repeat if needed. Not the quotient rule.

$$
\lim_{x\to0}\frac{e^{5x} - 5x - 1}{x^2} = \lim\frac{5e^{5x} - 5}{2x} = \lim\frac{25e^{5x}}{2} = \frac{25}{2}
$$

**Growth order** as $x \to \infty$: $\ln x \ll x^p \ll e^x$. So $\tfrac{(\ln x)^3}{x} \to 0$ and $\tfrac{x}{e^x} \to 0$.

| Form | Move | Example |
|---|---|---|
| $0\cdot(-\infty)$ | Make a quotient | $x^2\ln x = \dfrac{\ln x}{x^{-2}} \to \dfrac{1/x}{-2x^{-3}} = -\dfrac{x^2}{2} \to 0$ |
| $0^0$ | $e^{(\text{exponent})\ln(\text{base})}$ | $x^x = e^{x\ln x} \to e^0 = 1$ |
| $\infty - \infty$ | Factor out the biggest term | $\ln^2 x - x = x\left(\tfrac{\ln^2 x}{x} - 1\right) \to -\infty$ |

**Asymptotes.** Vertical $x = c$: $f \to \pm\infty$ as $x \to c$, checked at the edges of the domain and the zeros of a denominator. Horizontal $y = L$: $\lim_{x\to\pm\infty} f = L$ finite. A finite limit at an edge is a **hole**, not an asymptote: $x^2\ln x \to 0$ at $0^+$, so it has no vertical asymptote.

**Log differentiation** for a variable base and exponent: $y = f^g \Rightarrow \ln y = g\ln f \Rightarrow \dfrac{y'}{y} = g'\ln f + g\dfrac{f'}{f}$.

> [!example] Worked: $(x^x)' $ and $(x^{1/x})'$
> $\ln y = x\ln x$, so $\tfrac{y'}{y} = \ln x + 1$ and $(x^x)' = x^x(\ln x + 1)$.
>
> $\ln y = \tfrac{\ln x}{x}$, so $\tfrac{y'}{y} = \tfrac{1 - \ln x}{x^2}$ and $(x^{1/x})' = x^{1/x}\,\tfrac{1 - \ln x}{x^2}$.

---

## 4. The full function study (the last question)

Every paper since 2020 except 2020 B and C ends with one. The parts come in the same order:

1. **Domain.** Logs $> 0$, denominators $\ne 0$, even roots $\ge 0$, variable base $> 0$.
2. **Intercepts.** $f(0)$ if $0$ is in the domain; solve $f(x) = 0$.
3. **Limits at the edges and asymptotes** (§3).
4. **$f'$, its sign, the extremum.** A sign table, not just $f' = 0$.
5. **Global extrema on the given interval** (§1). Check where the critical point sits relative to the interval.

> [!example] Worked: $y = x^x + 1$, $x > 0$ ([[PP_32|2025 Moed A]] Q4)
> **a. Minimum.** $(x^x)' = x^x(\ln x + 1) = 0 \Rightarrow \ln x = -1 \Rightarrow x = \tfrac1e$. Sign: $-$ before, $+$ after, and it is the only critical point, so it is the global minimum: $y\!\left(\tfrac1e\right) = e^{-1/e} + 1 \approx 1.69$.
>
> **b. Asymptotes.** $x \to \infty$: $y \to \infty$, no horizontal asymptote. $x \to 0^+$: $x\ln x = \tfrac{\ln x}{1/x} \overset{L'H}{=} -x \to 0$, so $y \to e^0 + 1 = 2$, finite: **no vertical asymptote**.
>
> **c. On $[0.4, 1)$.** The minimum $\tfrac1e \approx 0.368$ is to the left of $0.4$, so the function only rises on the interval: **min $y(0.4) \approx 1.69$ at the closed end, no max** ($y \to 2$ at the open end, never reached).

Step through it, then switch to the other past-paper functions:

```graph
type: mathsb-function-study
fn: xx
```

---

## 5. Implicit differentiation (Lec 04, 06)

When $y$ is not isolated, $F(x, y) = c$:

$$
y' = \frac{dy}{dx} = -\frac{F_x}{F_y}
$$

Or differentiate both sides in $x$ with $y = y(x)$: every $y$-term gets a factor $y'$, and $xy^2$ needs the product rule ($y^2 + 2xyy'$). **First find the point(s)**: at a given $x$ there may be two $y$ values and two slopes.

> [!example] Worked: $y - xy^2 + x^2 + 1 = 0$ at $x = 1$ (Lec 04)
> At $x = 1$: $y^2 - y - 2 = 0$, so $y = 2$ or $y = -1$. Differentiating: $y'(1 - 2xy) = y^2 - 2x$, so $y' = \dfrac{y^2 - 2x}{1 - 2xy}$: $-\tfrac23$ at $(1, 2)$ and $-\tfrac13$ at $(1, -1)$.

Other letters work the same way: for $t\ln x = xe^t - 1$ with $x = x(t)$, $\;x' = -\dfrac{F_t}{F_x} = \dfrac{x(xe^t - \ln x)}{t - xe^t}$.

**Simplify the level condition first.** For $e^{2x/(x^2+y^2)} = e$, take logs: $x^2 + y^2 = 2x$, a circle. Then $2x + 2yy' = 2$; at $(1, -1)$ this gives $y' = 0$ ([[PP_32|2025 Moed A]] Q2).

> [!warning] $y'$ on a level curve is not $f_x$
> $f_x$ is the slope of the surface in the plane $y = $ const. $y' = -f_x/f_y$ is the slope of the **contour** in the $xy$ plane. [[PP_23|2020 Moed C]] Q1 asks exactly why they differ.

---

## 6. Two-variable functions: domain, slices, contours (Lec 04, 05)

$z = f(x, y)$ is a surface. Cut it with a plane to get a one-variable curve:

| Cut | Fixes | Curve | Its slope |
|---|---|---|---|
| $y = y_0$ | $y$ | $z$ against $x$ | $f_x(x, y_0)$ |
| $x = x_0$ | $x$ | $z$ against $y$ | $f_y(x_0, y)$ |
| $z = c$ | $z$ | contour in the $xy$ plane | $y' = -f_x/f_y$ |

> [!example] Worked: tangent lines on $z = x^2 + y^2$ (Lec 04)
> **Plane $z = 2$ at $(1, 1)$:** the circle $x^2 + y^2 = 2$, slope $-x/y = -1$, tangent $x + y = 2$ (in the plane $z = 2$).
>
> **Plane $x = 0$ at $y = 1$:** the parabola $z = y^2$ through $(0, 1, 1)$, slope $2y = 2$, tangent $z = 2y - 1$ (in the plane $x = 0$).

**Domain rules.** $\ln u$: $u > 0$ (dashed boundary). $\sqrt u$: $u \ge 0$ (solid). Denominator $\ne 0$ (remove a point or a line).

| $f(x, y)$ | Domain |
|---|---|
| $\dfrac{x - 4y}{x^2 + y^2}$ | plane minus the origin |
| $5\sqrt{x - 2} - \ln(2 - 2y)$ | $x \ge 2$ and $y < 1$ |
| $\ln(x - 2y) + \ln(y - 2x)$ | $2x < y < \tfrac x2$, which forces $x < 0$ |
| $\ln[x(y - x^2)]$ | $x > 0, y > x^2$ **or** $x < 0, y < x^2$ |

**Contours** $f = c$: $2y - 6x + 8 = c$ gives parallel lines; $\ln x + \ln y = c$ gives hyperbolas $xy = e^c$; $\max\{x, y\} = c$ gives L-shapes with the corner on $y = x$.

---

## 7. Partial derivatives, marginal profit, the differential (Lec 05 to 07)

$f_x$: differentiate in $x$ with $y$ frozen. $f(x,y) = 2x^2 - 3x^2y + 5y + 1$ gives $f_x = 4x - 6xy$, $f_y = 5 - 3x^2$.

**Profit questions.** Revenue $= \text{price}\times\text{quantity}$ for each product; $P = R - C$, so every cost term changes sign. $P_x(a, b)$ is the **marginal profit**: one more unit of $x$, with $y$ held at $b$, changes profit by about $P_x(a, b)$.

**The differential** estimates a change:

$$
dP = P_x\,dx + P_y\,dy, \qquad P(a + dx, b + dy) \approx P(a, b) + dP
$$

> [!example] Worked: import profit ([[PP_32|2025 Moed A]] Q1)
> Prices 3000 and 4000, $C = 2000x + 2000y + 5000\ln(x^2 + y^2)$, so $P = 1000x + 2000y - 5000\ln(x^2 + y^2)$.
>
> $P_x = 1000 - \dfrac{10000x}{x^2 + y^2}$, $P_y = 2000 - \dfrac{10000y}{x^2 + y^2}$. At $(10, 10)$: $P_x = 500$, $P_y = 1500$. One more type A unit adds about \$500, one more type B about \$1500.
>
> Move to $(11, 9)$: $dP = 500(1) + 1500(-1) = -1000$. Profit falls by about \$1000.

**Isoprofit slope.** Along $P = $ const, $y' = -P_x/P_y$. Surfboards (Lec 07): at $(10, 10)$, $P_x = 110$, $P_y = -20$, so $y' = 5.5$: each extra regular board needs 5.5 more competitive ones to keep profit fixed.

**Second partials.** $f_{xx}$, $f_{yy}$, and the mixed $f_{xy} = f_{yx}$. The sign of $f_{xy}$ says whether the marginal profit of $x$ rises with $y$ ([[PP_32|2025 Moed A]] Q1d: $P_{xy} = \tfrac{20000xy}{(x^2+y^2)^2} > 0$, rises).

**Sums over $n$ variables.** In $\sum_i g(x_i)$ only the $j$-th term survives $\partial/\partial x_j$:

| $f$ | $\partial f/\partial x_j$ | Sum |
|---|---|---|
| $\sum x_i^5$ | $5x_j^4$ | $\sum x_j f_{x_j} = 5f$ |
| $\sum\ln x_i$ | $1/x_j$ | $\sum x_j f_{x_j} = n$ |
| $e^{\sum x_i^2}$ | $2x_j f$ | $\sum \tfrac{1}{x_j}f_{x_j} = 2nf$ |

---

## 8. Critical points and the second derivative test (Lec 07, 08)

**Critical point:** $f_x = 0$ **and** $f_y = 0$. Necessary, not sufficient. To show a point is **not** critical, one non-zero partial is enough.

$$
D = f_{xx}f_{yy} - \big(f_{xy}\big)^2 \quad\text{at the point}
$$

| $D$ | $f_{xx}$ | Type |
|---|---|---|
| $> 0$ | $> 0$ | local minimum |
| $> 0$ | $< 0$ | local maximum |
| $< 0$ | any | saddle point |
| $= 0$ | | test says nothing |

> [!example] Worked: $f = x^3 + y^3 - 6xy$ (Lec 07, 08)
> $f_x = 3x^2 - 6y = 0 \Rightarrow y = \tfrac{x^2}{2}$; then $f_y = 3y^2 - 6x = 0$ gives $x^4 = 8x$, so $x = 0$ or $2$. Points $(0, 0)$, $(2, 2)$.
>
> $f_{xx} = 6x$, $f_{yy} = 6y$, $f_{xy} = -6$, so $D = 36xy - 36$. At $(0, 0)$: $D = -36$, **saddle**. At $(2, 2)$: $D = 108 > 0$, $f_{xx} = 12 > 0$, **local min** $f = -8$.

**Solving $f_x = f_y = 0$:** factor first ($3x(y^2 - 1) = 0$ gives $x = 0$ **or** $y = \pm1$, each a case), and drop points outside the domain ($x = 0$ is excluded when $\ln(x^2 + y^2)$ appears). With a log cost the trick is $S = x^2 + y^2$: $S = 10x$ and $S = 5y$ give $y = 2x$ at once (2025 A).

---

## 9. Constrained optimisation: Lagrange (Lec 08, 09)

Optimise $f$ subject to $g = c$:

$$
\mathcal L = f - \lambda\,(g - c), \qquad \mathcal L_{x_i} = 0 \text{ for every } i, \qquad g = c
$$

Several constraints: one $\lambda$ each. Solve, then compare $f$ at the candidates. $\lambda$ is the shadow price: relaxing $c$ by one unit changes the optimal $f$ by about $\lambda$.

> [!example] Worked: on the sphere (Lec 09)
> Extremes of $2x + 4y + 4z$ with $x^2 + y^2 + z^2 = 1$. $2 = 2\lambda x$, $4 = 2\lambda y$, $4 = 2\lambda z$, so $x = \tfrac1\lambda$, $y = z = \tfrac2\lambda$; the constraint gives $\tfrac9{\lambda^2} = 1$, $\lambda = \pm3$. **Max 6** at $\left(\tfrac13, \tfrac23, \tfrac23\right)$, **min $-6$** at the opposite point.

> [!example] Worked: ten variables ([[PP_32|2025 Moed A]] Q3)
> Minimise $\sum_{i=1}^{10} x_i^2$ subject to $\sum x_i = 2$. $2x_i = \lambda$ for every $i$, so all $x_i$ are equal: $x_i = \tfrac15$, and $f = 10\cdot\tfrac1{25} = \tfrac25$. In general, $\sum x_i = 1$ gives the minimum $\tfrac1n$.

If the constraint is easy to solve (a box with $a^2h = 2$, or $y = 4x$), substitution is just as good: $C(a) = a^2 + \tfrac2a$, $a = 1$, $h = 2$, cost \$3. Both methods agree.

---

## 10. Linear systems and Gauss-Jordan (Lec 10, 11)

A system has **one**, **none** or **infinitely many** solutions. The three row operations: add a multiple of one row to another, multiply a row by a **non-zero** number, swap rows.

**Gauss-Jordan:** make the first $x$-coefficient 1, clear $x$ from the other rows, repeat with the next variable and the next row. Stop at **reduced echelon form**: every leading entry is 1 and alone in its column, leading entries step right going down, zero rows at the bottom.

> [!example] Worked: Lec 10
> $\left(\begin{array}{ccc|c} 2 & 8 & 6 & 20 \\ 4 & 2 & -2 & -2 \\ 3 & -1 & 1 & 11 \end{array}\right) \to \left(\begin{array}{ccc|c} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & 4 \end{array}\right)$, so $(x, y, z) = (2, -1, 4)$.

| In the reduced matrix | Verdict |
|---|---|
| A row $(0 \cdots 0 \mid c)$ with $c \ne 0$ | **no solution** |
| Every variable column has a leading 1, no contradiction | **unique** |
| A column with no leading 1, no contradiction | **infinitely many**: that variable is free (independent), the leading-1 variables are dependent |

**Homogeneous** (all constants 0): the zero solution always works, so never "no solution". More unknowns than equations means a free variable, so infinitely many.

---

## 11. Systems with a parameter (Lec 12)

1. Eliminate, carrying $k$ along. **Never divide by an expression that could be 0.**
2. Factor the pivots and the last-row constant: $(k^2 - 5k)x_3 = -k^2 + 6k - 5$ is $k(k - 5)x_3 = -(k - 1)(k - 5)$.
3. Check each value that kills a pivot separately; the rest is the general case.

> [!example] Worked: Lec 12 Example 2 (four unknowns)
> $\left(\begin{array}{cccc|c} 1 & 2 & k & 3 & 4 \\ 0 & 1 & -(k+1) & 0 & k \\ 0 & 0 & k(k-5) & 0 & -(k-1)(k-5) \end{array}\right)$
>
> **Never unique:** 4 unknowns, at most 3 leading entries, and column 4 can never hold one, so $x_4$ is always free. $k = 0$: last row $0 = -5$, **no solution**. $k = 5$: last row $0 = 0$, infinitely many. Any other $k$: $x_3 = -\tfrac{k-1}{k}$, $x_4$ free, **infinitely many**.

> [!tip] Spot it before you eliminate
> Two equal columns (2021 Moed A) mean $x$ and $y$ only ever appear as $x + y$: a unique solution is impossible. More unknowns than equations: same conclusion. Say it in the words the question uses: "independent variable", "dependent variable".

Step through Lec 12 Example 1 and move $a$ yourself:

```graph
type: mathsb-parameter-system
```
