---
title: "Two-Price Profit, Tangent Lines, Limits & Extrema (2025 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed B (2025)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - partial-derivatives
  - profit-maximisation
  - lhopital
  - lagrange-multipliers
  - global-extrema
aliases:
  - Math II Moed B 2025
  - Maths for Economists B 2025 Moed B
  - PP33 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Two-Price Profit, Tangent Lines, Limits & Extrema (2025 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed B (2025)**, Maths for Economists B, Hever Schulberg. 3 hours, formula sheet and non-graphic calculator allowed, 4 questions, 25 points each. "Justify anything you claim and explain all your calculations."
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]]

> [!info] Source and answer provenance
> The PDF holds the typed questions followed by the lecturer's **handwritten official solutions** (pages 4 to 8). Every part below follows that key **except Q3a and Q3b**: the key only says "solution can be found in exam 2019a, Q3a" and "in the video". Q3a was checked against the 2019 Moed A paper (same surface and same question, fully worked) and now follows that solution. Q3b points to a video, so it stays AI-written.

> [!warning] AI-solved parts in this note
> **Q3b** only. Its key says "solution can be found in the video", and there is no written solution, so it is solved here by me and checked symbolically. Check before relying on it. Q3a is official (2019 Moed A Q3a); everything else is from this paper's own key.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Profit as a function of two quantities, solve a profit target, maximise with the second derivative test, revenue as a function of **prices** and the meaning of a partial derivative | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q2 | Tangent line of $(\ln x)^x$, a $0\cdot\infty$ limit by L'Hopital, critical points and classification of a product with $e^{x+y}$ | [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q3 | Implicit differentiation on a level curve, the $0^0$ limit, constrained extrema with Lagrange | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q4 | Full study of $x e^{-\sqrt x}$: domain, intercept, limits, global extrema on a half-open interval | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |

> [!tip] Intuition: the moves that recur
> - A "$0\cdot\infty$" or "$\infty\cdot 0$" limit is rewritten as a fraction so L'Hopital applies (Q2b, Q4d).
> - A level curve $F(x,y)=c$ gives $y' = -F_x/F_y$ (Q3a).
> - On a half-open interval, a value approached but never reached is **not** a maximum (Q4e).

---

## Q1 — Profit with two prices (25 points)

A factory sells $x$ kg of fabric A at price $p$ per kg and $y$ kg of fabric B at price $q$ per kg. Demand: $x = 206 - p$ and $y = 204 - q$. Weekly cost: $C(x,y)=x^2+y^2+xy-16x-14y$.

**Step 0: profit as a function of the quantities.** Prices in terms of quantities are $p = 206 - x$ and $q = 204 - y$. Revenue is $R = xp + yq$, so

$$
P(x,y) = x(206-x) + y(204-y) - \left(x^2+y^2+xy-16x-14y\right)
$$

$$
P(x,y) = -2x^2 - 2y^2 - xy + 222x + 218y
$$

### a. Price of B that gives a weekly profit of 9600 dollars when $p = 166$

Since $x = 206 - 166 = 40$, substitute $x=40$ and $P = 9600$:

$$
9600 = -2(40)^2 - 2y^2 - 40y + 222(40) + 218y
$$

$$
9600 = -3200 - 2y^2 + 178y + 8880
$$

$$
2y^2 - 178y + 3920 = 0 \quad\Longrightarrow\quad y^2 - 89y + 1960 = 0
$$

so $y = 49$ or $y = 40$. Convert back with $q = 204 - y$.

> [!success] Answer
> Either $y=49$, giving **$q = 155$ dollars**, or $y=40$, giving **$q = 164$ dollars**. Both prices give 9600 dollars of profit (the profit surface is a hill, so a given height is reached on two sides).

### b. Profit-maximising prices

First-order conditions:

$$
P_x = -4x - y + 222 = 0, \qquad P_y = -4y - x + 218 = 0
$$

That is $4x + y = 222$ and $x + 4y = 218$. Multiply the second by 4 to get $4x + 16y = 872$, subtract the first: $15y = 650$, so $y = 43\tfrac13$ and then $x = (222 - 43\tfrac13)/4 = 44\tfrac23$.

Second-order test: $P_{xx} = -4$, $P_{xy} = -1$, $P_{yy} = -4$, so $\Delta = P_{xx}P_{yy} - P_{xy}^2 = 16 - 1 = 15 > 0$ and $P_{xx} < 0$, hence a **local maximum** (the only critical point, and $P$ is a concave quadratic, so it is the global maximum).

Back to prices: $q = 204 - 43\tfrac13 \approx 160.67$ and $p = 206 - 44\tfrac23 \approx 161.33$.

> [!success] Answer
> **$p \approx 161.33$ dollars per kg of A and $q \approx 160.67$ dollars per kg of B** (from $x = 44\tfrac23$, $y = 43\tfrac13$).

> [!warning] Trap
> The first-order conditions give **quantities**. The question asks for **prices**, so one more step ($p = 206 - x$, $q = 204 - y$) is needed.

### c. Revenue as a function of prices and $R_q'(150,100)$

Now write everything in prices: $x = 206 - p$ and $y = 204 - q$, so

$$
R(p,q) = p(206 - p) + q(204 - q) = -p^2 - q^2 + 206p + 204q
$$

$$
R_q'(p,q) = -2q + 204 \quad\Rightarrow\quad R_q'(150,100) = -200 + 204 = 4
$$

> [!success] Answer
> $R_q'(150,100) = 4$. At prices of 150 dollars per kg for A and 100 dollars per kg for B, raising the price of B by 1 dollar raises weekly revenue by about **4 dollars**.

> [!tip] Intuition
> Revenue from B is $q(204-q)$. Below the revenue-maximising price $q = 102$, a price rise gains more on each kg sold than it loses in lost sales, so the derivative is positive. At $q=100$ it is only slightly below 102, hence the small value 4.

---

## Q2 — Three independent segments (25 points)

### a. Tangent line to $y = (\ln x)^x$ at $x = e$

The point: $y(e) = (\ln e)^e = 1^e = 1$, so the point is $(e, 1)$.

Take logs first (logarithmic differentiation): $\ln y = x\ln(\ln x)$. Differentiate both sides:

$$
\frac{y'}{y} = \ln(\ln x) + x\cdot\frac{1}{\ln x}\cdot\frac1x = \ln(\ln x) + \frac{1}{\ln x}
$$

$$
y' = y\left(\ln(\ln x) + \frac{1}{\ln x}\right)
$$

At $x = e$: $\ln e = 1$, $\ln 1 = 0$, so $y'(e) = 1\cdot(0 + 1) = 1$.

Tangent: $y - 1 = 1\cdot(x - e)$.

> [!success] Answer
> $y = x - e + 1$

### b. $\displaystyle\lim_{x\to 0^-} x\cdot e^{-2/x}$

As $x\to0^-$, $-2/x \to +\infty$, so $e^{-2/x}\to\infty$ while $x\to 0$: a $0\cdot\infty$ form. Rewrite as a fraction:

$$
x e^{-2/x} = \frac{e^{-2/x}}{1/x}
$$

Both numerator and denominator tend to infinity in absolute value ($\infty/-\infty$), so apply L'Hopital. The numerator's derivative is $e^{-2/x}\cdot\dfrac{2}{x^2}$ and the denominator's derivative is $-\dfrac{1}{x^2}$:

$$
\lim_{x\to0^-}\frac{e^{-2/x}\cdot \frac{2}{x^2}}{-\frac{1}{x^2}} = \lim_{x\to0^-} -2e^{-2/x} = -2\cdot\infty
$$

> [!success] Answer
> The limit is **$-\infty$**.

### c. Relative extreme points of $f(x,y) = (x-2)(y+3)e^{x+y}$

**Partial derivatives** (product rule; $e^{x+y}$ differentiates to itself in both variables):

$$
f_x = (y+3)e^{x+y} + (x-2)(y+3)e^{x+y} = e^{x+y}(y+3)(x-1)
$$

$$
f_y = (x-2)e^{x+y} + (x-2)(y+3)e^{x+y} = e^{x+y}(x-2)(y+4)
$$

**Critical points.** $e^{x+y}>0$, so $f_x = 0$ means $y=-3$ or $x=1$, and $f_y=0$ means $x=2$ or $y=-4$. The compatible pairs are $x=1,\ y=-4$ and $x=2,\ y=-3$. (The other two combinations, $y=-3$ with $y=-4$, and $x=1$ with $x=2$, are impossible.)

**Second derivatives:**

$$
f_{xx} = e^{x+y}(y+3)x, \qquad f_{xy} = e^{x+y}(x-1)(y+4), \qquad f_{yy} = e^{x+y}(x-2)(y+5)
$$

| Point | $A=f_{xx}$ | $B=f_{xy}$ | $C=f_{yy}$ | $\Delta = AC-B^2$ | Type |
|---|---|---|---|---|---|
| $(1,-4)$ | $-e^{-3}$ | $0$ | $-e^{-3}$ | $e^{-6} > 0$, $A<0$ | **local maximum** |
| $(2,-3)$ | $0$ | $e^{-1}$ | $0$ | $-e^{-2} < 0$ | **saddle point** |

> [!success] Answer
> $(1,-4)$ is a local maximum and $(2,-3)$ is a saddle point.

---

## Q3 — Three independent segments (25 points)

### a. $y'$ on the level curve $z=1$ of $z = e^{xy} - x^2 + \dfrac{x}{y} + y + 1$, at $x=0$

> [!info] Official solution: from 2019 Moed A Q3a
> The key says "solution can be found in exam 2019a, Q3a". That question is the same surface $z=e^{xy}-x^2+\frac xy+y+1$, the same plane $z=1$ and the same point $x=0$. Its handwritten solution is followed here.

Setting $z=1$ gives the curve

$$
0 = e^{xy} - x^2 + \frac{x}{y} + y .
$$

At $x=0$: $0 = 1 + y$, so $y=-1$. The point is $(0,-1)$.

Differentiate with respect to $x$, with $y=y(x)$ (quotient rule on $x/y$):

$$
0 = e^{xy}\left(y + xy'\right) - 2x + \frac{y - xy'}{y^2} + y' .
$$

Plug in $(0,-1)$:

$$
0 = -1 + (-1) + y' \;\Rightarrow\; y' = 2 .
$$

> [!success] Answer
> $y' = 2$ at the point $(0,-1)$.

### b. $\displaystyle\lim_{x\to 0^+} x^{x^2}$

> [!warning] AI-written answer, not official. Check before relying on it.
> The official page only says "solution can be found in the video: $0$ to the power of $0$, limits". A video has no written key, so this stays AI-written.

This is a $0^0$ form. Write $x^{x^2} = e^{x^2\ln x}$ and study the exponent. As $x\to0^+$, $x^2\ln x = \dfrac{\ln x}{x^{-2}}$ is $-\infty/\infty$; L'Hopital gives

$$
\lim_{x\to0^+}\frac{1/x}{-2x^{-3}} = \lim_{x\to0^+}\left(-\frac{x^2}{2}\right) = 0
$$

so the limit is $e^0$.

> [!success] Answer (AI-written)
> The limit is **1**.

### c. Extrema of $f(x,y) = x^2+y^2$ under $x^2+2y=-y^2+4x+40$

Rewrite the constraint as $g(x,y) = x^2 + y^2 + 2y - 4x - 40 = 0$ and set up the Lagrangian $L = x^2 + y^2 - \lambda\left(x^2 + y^2 + 2y - 4x - 40\right)$.

$$
L_x = 2x - 2\lambda x + 4\lambda = 0 \;\Rightarrow\; \lambda = \frac{x}{x-2}
$$

$$
L_y = 2y - 2\lambda - 2\lambda y = 0 \;\Rightarrow\; \lambda = \frac{y}{y+1}
$$

Equate the two expressions for $\lambda$ and cross-multiply:

$$
\frac{x}{x-2} = \frac{y}{y+1} \;\Rightarrow\; xy + x = xy - 2y \;\Rightarrow\; x = -2y
$$

Substitute into the constraint:

$$
(-2y)^2 + 2y + y^2 - 4(-2y) - 40 = 0 \;\Rightarrow\; 5y^2 + 10y - 40 = 0 \;\Rightarrow\; y^2 + 2y - 8 = 0
$$

so $(y+4)(y-2) = 0$ and $y = -4$ or $y = 2$. With $x = -2y$ the candidates are $(8,-4)$ and $(-4,2)$.

$$
f(8,-4) = 64 + 16 = 80, \qquad f(-4,2) = 16 + 4 = 20
$$

> [!success] Answer
> $(8,-4)$ is the **maximum** (value 80) and $(-4,2)$ is the **minimum** (value 20).

> [!tip] Intuition
> The constraint is the circle $(x-2)^2 + (y+1)^2 = 45$, a closed bounded curve, so a max and a min exist. $f$ is the squared distance from the origin. The centre $(2,-1)$ is $\sqrt5$ from the origin and the radius is $3\sqrt5$, so the nearest point is $2\sqrt5$ away (squared: 20) and the farthest $4\sqrt5$ away (squared: 80). This matches the key.

> [!warning] Dividing by $x-2$ and $y+1$
> Dividing assumes $x\ne2$ and $y\ne-1$. Both exclusions are safe: $x=2$ would make $L_x = 4 \neq 0$ and $y=-1$ would make $L_y = -2 \neq 0$.

---

## Q4 — Study of $f(x) = x\,e^{-\sqrt x}$ (25 points)

### a. Domain

$\sqrt x$ requires $x\ge0$ and the exponential is defined everywhere.

> [!success] Answer
> $x \ge 0$.

### b. Axis intercepts

$f(0) = 0\cdot e^{0} = 0$. For $f(x)=0$ we need $x\,e^{-\sqrt x}=0$; the exponential is never zero, so $x=0$.

> [!success] Answer
> The only intercept is $(0,0)$.

### c. $\displaystyle\lim_{x\to0^+} f(x)$

Direct substitution: $0\cdot e^{-0} = 0\cdot1$.

> [!success] Answer
> The limit is $0$.

### d. $\displaystyle\lim_{x\to\infty} f(x)$

A $\infty\cdot0$ form. Write $f(x) = x/e^{\sqrt x}$ ($\infty/\infty$) and use L'Hopital. The derivative of the denominator is $e^{\sqrt x}\cdot\dfrac{1}{2\sqrt x}$:

$$
\lim_{x\to\infty}\frac{1}{e^{\sqrt x}\cdot\frac{1}{2\sqrt x}} = \lim_{x\to\infty}\frac{2\sqrt x}{e^{\sqrt x}}
$$

Still $\infty/\infty$, apply L'Hopital again ($\frac{d}{dx}2\sqrt x = 1/\sqrt x$, and the denominator's derivative is $e^{\sqrt x}/(2\sqrt x)$):

$$
\lim_{x\to\infty}\frac{\frac{1}{\sqrt x}}{\frac{e^{\sqrt x}}{2\sqrt x}} = \lim_{x\to\infty}\frac{2}{e^{\sqrt x}} = \frac{2}{\infty}=0
$$

> [!success] Answer
> The limit is $0$, so $y=0$ is a horizontal asymptote on the right.

### e. Global extrema on $[0,2)$

Differentiate with the product rule, using $\frac{d}{dx}e^{-\sqrt x} = -\frac{1}{2\sqrt x}e^{-\sqrt x}$:

$$
f'(x) = e^{-\sqrt x} + x e^{-\sqrt x}\left(-\frac{1}{2}x^{-1/2}\right) = e^{-\sqrt x}\left(1 - \frac{\sqrt x}{2}\right)
$$

$f'(x)=0$ needs $\sqrt x = 2$, so $x = 4$, which is **outside** $[0,2)$. On $[0,2)$ we have $\sqrt x < \sqrt 2 < 2$, so $f' > 0$ and $f$ is increasing throughout.

- Minimum: at the left endpoint, $f(0) = 0$.
- Maximum: the supremum is the limit at the missing endpoint, $\lim_{x\to2^-}f(x) = 2e^{-\sqrt2}$, but $x=2$ is not in the interval, so the value is never attained.

![[PP33_q4_x_exp_minus_sqrt_x.png|600]]

*The function rises from the origin and approaches $2e^{-\sqrt2}$ as $x\to2$, but the interval stops short of 2.*

> [!success] Answer
> Global **minimum** $f(0)=0$ at $x=0$. **No global maximum** (the value $2e^{-\sqrt2}$ is approached but not reached).

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | substitute $x=40$, quadratic in $y$ | $q = 155$ or $q = 164$ |
| Q1b | $P_x=P_y=0$, $\Delta>0$, $A<0$ | $p\approx161.33$, $q\approx160.67$ (max) |
| Q1c | $R(p,q)$, partial derivative | $R_q'(150,100)=4$: +1 dollar on B's price adds about 4 dollars |
| Q2a | log differentiation | $y = x - e + 1$ |
| Q2b | $0\cdot\infty$ then L'Hopital | $-\infty$ |
| Q2c | critical points, $\Delta$ test | $(1,-4)$ max, $(2,-3)$ saddle |
| Q3a | implicit differentiation at $(0,-1)$ | $2$ (official, 2019 Moed A Q3a) |
| Q3b (AI) | $e^{x^2\ln x}$ | $1$ |
| Q3c | Lagrange | max $(8,-4)$, min $(-4,2)$ |
| Q4a-d | domain, intercept, limits | $x\ge0$; $(0,0)$; $0$; $0$ |
| Q4e | monotonic on $[0,2)$ | min $f(0)=0$, no max |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Maths for Economists B]]
