---
title: "Furniture Costs, Birthday Card Tax, Level Curves & ln x + ln(2-x) (2024 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II for Economics Final Exam, Moed B (2024)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - tangent-line
  - profit-maximisation
  - inverse-functions
  - global-extrema
  - implicit-differentiation
aliases:
  - Math II Moed B 2024
  - Maths for Economists B 2024 Moed B
  - PP31 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Furniture Costs, Birthday Card Tax, Level Curves & ln x + ln(2-x) (2024 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II for Economics Final Exam, Moed B (2024)**, Maths for Economists B, Hever Schulberg. 3 hours, formula sheet and non-graphic calculator allowed, four questions (Q1 is 20 points, Q2 is 30, Q3 and Q4 are 25 each). "The use of any mathematical technique which was not covered in this course is strictly forbidden."
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]]

> [!info] Source and answer provenance
> The PDF has the typed questions (pages 2 and 3) and then **only one page and a half of handwritten key** (pages 4 and 5). That key is a **reference list**, not worked solutions, except for Q3c and Q4 (**official**). Everything else is a pointer, and each pointer was checked against the source PDF:
> - Q1 is "2023B Q1": the 2023 Moed B Q1a to c are word for word the same, with a worked solution (Q1d there is not asked here).
> - Q2a is "Ex 2 Q5" and Q2b is "Ex 2 Q3a": the same questions, with final answers printed on the sheet.
> - Q2c is "2021A Q4c": the same limit, worked in the 2021 Moed A key.
> - Q3a and Q3b are "Ex 4 Q4": the same questions, with final answers printed.

> [!info] Every part has an official answer
> Q1a to c are official (2023 Moed B). Q2a, Q2b, Q3a and Q3b have official final answers (Exercises 2 and 4), with working written for this site. Q2c is official (2021 Moed A). Q3c and Q4 are official from this paper. One caution: the official 2023 Moed B wording for Q1b says "profit" where the function is a cost, see the warning under Q1b.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Slice a surface with a plane, tangent line, marginal cost, a marginal-profit equation | [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]] |
| Q2 | One-variable profit maximisation with and without a per-unit tax, inverse function intersection, a log limit | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q3 | Composition $g(x)=f(e^x,0)$ and its global extremum, a limit via L'Hopital, $y'$ on a level curve | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]] |
| Q4 | Complete study of $\ln x+\ln(2-x)$: domain, intercept, limit, extremum, global extrema | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]] |

> [!tip] Intuition: the moves that recur
> - Slice a two-variable function with a plane ($x=9$, $z=0$): you get a one-variable curve, and every one-variable tool applies.
> - A tax of $t$ per unit just adds $t$ to marginal cost.
> - The domain restricts which critical points count (Q4).

---

## Q1 — Production cost of tables and chairs (20 points)

> [!info] Official solution: from 2023 Moed B Q1a to Q1c
> The key says "2023B Q1". Q1a to c there are the same question with the same numbers ($f=24x\sqrt x+10y^2$, plane $x=9$, $y=3$, prices 900 and 1,000, marginal profits 540 and 760). Its Q1d (maximal profit) is not asked in this paper.

Weekly cost of $x$ tables and $y$ chairs: $f(x,y) = 24x\sqrt x + 10y^2 = 24x^{3/2} + 10y^2$.

### a. Tangent line to the curve $f(x,y)$ with the plane $x=9$, at $y=3$

On the plane $x=9$: $f(9,y) = 24\cdot9\cdot3 + 10y^2 = 648 + 10y^2$. At $y=3$ this is $648 + 90 = 738$, so the point is $(x,y,z) = (9,3,738)$.

The slope in the $y$ direction is the partial derivative $f_y = 20y$, so $f_y(9,3) = 60$.

Tangent line (in the plane $x=9$): $z - 738 = 60(y-3)$.

> [!success] Answer
> $z = 60y + 558$ (within the plane $x=9$).

### b. Financial meaning of the slope

> [!success] Answer (official wording)
> At a weekly production level of 9 tables and 3 chairs, producing and selling one more chair will increase the weekly **profit** by approx. 60 dollars (the official 2023 Moed B wording).

> [!warning] Check: the slope is a cost, not a profit
> I kept the official sentence, but $f$ is the weekly **cost** of production, so $f_y(9,3)=60$ is a **marginal cost**: one more chair raises the weekly production cost by about 60 dollars, with tables held at 9. Calling it a profit looks like a slip in the official wording. A safe exam answer says "cost".

### c. Number of tables and chairs when the marginal profits are 540 and 760

Tables sell at 900 each, chairs at 1,000 each. Profit is revenue minus cost: $P = 900x + 1000y - 24x^{3/2} - 10y^2$.

$$
P_x = 900 - 36\sqrt x, \qquad P_y = 1000 - 20y
$$

since $\dfrac{d}{dx}\,24x^{3/2} = 36x^{1/2}$.

- $P_x = 540 \Rightarrow 36\sqrt x = 360 \Rightarrow \sqrt x = 10 \Rightarrow x = 100$.
- $P_y = 760 \Rightarrow 20y = 240 \Rightarrow y = 12$.

> [!success] Answer
> **100 tables and 12 chairs** were produced and sold that week.

---

## Q2 — Three independent segments (30 points)

### a. Birthday cards: profit maximisation, with and without a tax

> [!info] Working written for this site; the final answer is from the official sheet (Exercise 2 Q5).
> The key says "Ex 2, Q5". The exercise is the same question; its printed answers are maximal profit 11,000 dollars at $x=4000$, $p=6$, and with the tax 4,000 dollars at $x=3000$, $p=7$.

Cost of $x$ cards ($0\le x\le8000$): $C(x) = 5000 + 2x$. Demand: $p = 10 - \dfrac{x}{1000}$.

**Revenue** $R = px = 10x - \dfrac{x^2}{1000}$, so profit is

$$
P(x) = R - C = 8x - \frac{x^2}{1000} - 5000
$$

**I and II: maximal profit and the demand and price at which it occurs.**

$$
P'(x) = 8 - \frac{x}{500} = 0 \;\Rightarrow\; x = 4000
$$

$P''(x) = -\frac1{500} < 0$, so this is a maximum. Check the endpoints of $[0,8000]$: $P(0) = -5000$ and $P(8000) = 64000 - 64000 - 5000 = -5000$, both lower. At the optimum: $p = 10 - 4 = 6$ and

$$
P(4000) = 32000 - 16000 - 5000 = 11000
$$

> [!success] Answer I and II
> Maximal profit **11,000**, at demand **$x=4000$** cards and price **$p=6$**.

**III: a new tax of 2 per card sold.** The tax adds 2 to the cost of every card: the cost becomes $C(x)=5000 + 4x$, so

$$
P(x) = 6x - \frac{x^2}{1000} - 5000, \qquad P'(x) = 6 - \frac{x}{500} = 0 \;\Rightarrow\; x = 3000
$$

Check: $P(0) = -5000$ and $P(8000)=48000-64000-5000=-21000$, both lower. Price: $p = 10 - 3 = 7$, and

$$
P(3000) = 18000 - 9000 - 5000 = 4000
$$

> [!success] Answer III
> With the tax: maximal profit **4,000**, at **$x=3000$** cards and price **$p=7$**. The tax cuts output by 1000 cards, raises the price by 1, and cuts the maximal profit by 7000.

> [!tip] Intuition
> The firm passes only part of the tax on: the price rises by 1 for a tax of 2, because demand slopes down. The question's "parts a and b" is a typo for parts I and II.

### b. Intercept of $f(x) = \frac15x + 2$ with its inverse

> [!info] Working written for this site; the final answer is from the official sheet (Exercise 2 Q3a, answer $(2.5,2.5)$).
> The key says "Ex 2, Q3a". Same function; the printed answer is $(2.5, 2.5)$.

Invert: $y = \frac x5 + 2 \Rightarrow x = 5(y-2)$, so $f^{-1}(x) = 5x - 10$. Set $f(x) = f^{-1}(x)$:

$$
\frac x5 + 2 = 5x - 10 \;\Rightarrow\; 12 = \frac{24x}{5} \;\Rightarrow\; x = \frac52
$$

Then $y = \frac12 + 2 = \frac52$.

> [!success] Answer
> They meet at **$\left(\frac52,\frac52\right)$**, on the line $y=x$ (a function and its inverse are mirror images across $y=x$, so any crossing here lies on that line).

### c. $\displaystyle\lim_{x\to0^+}\ln\left(\frac1x - 1\right)$

> [!info] Official solution: from 2021 Moed A Q4c
> The key says "2021A Q4c". That question is the same limit, $\lim_{x\to0^+}\ln\left(\frac1x-1\right)$. Its handwritten solution is one line, followed here.

$$
\lim_{x\to0^+}\ln\left(\frac1x-1\right) = \ln\left(\frac1{0^+}-1\right) = \ln\infty = \infty .
$$

> [!success] Answer
> The limit is **$+\infty$**.

---

## Q3 — Three independent segments (25 points)

$f(x,y) = x\ln(x+y^2) + y\ln(x^2+y)$.

### a. Global extremum of $g(x) = f(e^x, 0)$ on $[-2,0]$

> [!info] Working written for this site; the final answer is from the official sheet (Exercise 4 Q4a: $x_{\min}=-1$, $x_{\max}=0$).
> The key says "Ex 4, Q4". The exercise is the same function and interval.

Substitute $y=0$ and $x\to e^x$: $f(e^x,0) = e^x\ln(e^x) + 0 = x\,e^x$. So $g(x) = x\,e^x$ on $[-2,0]$.

$$
g'(x) = e^x + x e^x = e^x(1+x) = 0 \;\Rightarrow\; x=-1
$$

Compare the critical point and the endpoints:

| $x$ | $g(x)=xe^x$ |
|---|---|
| $-2$ | $-2e^{-2}\approx-0.271$ |
| $-1$ | $-e^{-1}\approx-0.368$ |
| $0$ | $0$ |

> [!success] Answer
> Global **minimum $-1/e$ at $x=-1$** and global **maximum $0$ at $x=0$** on $[-2,0]$.

### b. $\displaystyle\lim_{x\to\infty}\frac{f(x,x)}{x^2}$

> [!info] Working written for this site; the final answer is from the official sheet (Exercise 4 Q4b, answer 0).
> The key says "Ex 4, Q4", which also covers this limit.

$f(x,x) = x\ln(x+x^2) + x\ln(x^2+x) = 2x\ln(x^2+x)$, so the ratio is $\dfrac{2\ln(x^2+x)}{x}$, of the form $\infty/\infty$. L'Hopital:

$$
\lim_{x\to\infty}\frac{2\cdot\frac{2x+1}{x^2+x}}{1} = \lim_{x\to\infty}\frac{2(2x+1)}{x^2+x} = 0
$$

> [!success] Answer
> The limit is **0** (the logarithm grows more slowly than $x$).

### c. $y'=dy/dx$ on the curve $f(x,y)=0$ at $x=0$, $y>0$

At $x=0$ the curve equation $0 = x\ln(x+y^2)+y\ln(x^2+y)$ becomes $0 = y\ln y$. Since $y>0$, $\ln y = 0$ and $y=1$. The point is $(0,1)$.

Differentiate the curve equation implicitly with respect to $x$ (product rule, chain rule, $y=y(x)$):

$$
0 = \ln(x+y^2) + x\cdot\frac{1+2yy'}{x+y^2} + y'\ln(x^2+y) + y\cdot\frac{2x+y'}{x^2+y}
$$

Plug in $(0,1)$: $\ln 1 = 0$, the second term has factor $x=0$, the third has $\ln1=0$, and the last is $\frac{y'}{1}$:

$$
0 = 0 + 0 + 0 + y' \;\Rightarrow\; y' = 0
$$

> [!success] Answer
> The point is $(0,1)$ and **$y'=0$**.

---

## Q4 — Study of $f(x)=\ln x + \ln(2-x)$ (25 points)

### a. Domain

Both logarithms need positive arguments: $x>0$ and $2-x>0$, i.e. $x<2$.

> [!success] Answer
> $0<x<2$.

### b. $x$ intercept

$f(x) = \ln\left(x(2-x)\right) = 0 \Rightarrow x(2-x)=1 \Rightarrow x^2 - 2x + 1 = 0 \Rightarrow x = 1$.

> [!success] Answer
> The intercept is $(1,0)$.

### c. $\displaystyle\lim_{x\to0^+}f(x)$

As $x\to0^+$: $\ln x\to-\infty$ while $\ln(2-x)\to\ln2$.

> [!success] Answer
> The limit is $-\infty$.

### d. Relative extreme point

$$
f'(x) = \frac1x - \frac1{2-x} = \frac{2-x-x}{x(2-x)} = \frac{2-2x}{x(2-x)}
$$

The denominator is positive on the domain, so $f'=0$ at $x=1$; $f'>0$ for $x<1$ and $f'<0$ for $x>1$.

> [!success] Answer
> $x=1$ is a **relative maximum** (value $f(1)=0$).

### e. Global extrema on $(0,1.5]$

$x=1$ is the only relative extremum, so it is the global maximum. There is no global minimum: by part c, $f\to-\infty$ near $0$.

![[PP31_q4_ln_x_plus_ln_2_minus_x.png|600]]

*The curve is a hump with its peak at $(1,0)$ and falls to $-\infty$ at both edges of the domain.*

> [!success] Answer
> Global **maximum $f(1)=0$** at $x=1$. **No global minimum**, since the limit at $0^+$ is $-\infty$.

---

## Recap table

| Part | Tool | Answer | Source |
|---|---|---|---|
| Q1a | partial derivative along a slice | $z=60y+558$ | official (2023 Moed B Q1a) |
| Q1b | meaning of $f_y$ | about 60 per extra chair (official calls it profit, it is a cost) | official (2023 Moed B Q1b) |
| Q1c | marginal profit equations | $x=100$, $y=12$ | official (2023 Moed B Q1c) |
| Q2a | $P'=0$, tax shifts marginal cost | 11,000 at 4000 cards, price 6; with tax 4,000 at 3000, price 7 | official answer (Ex 2 Q5) |
| Q2b | invert and equate | $(\frac52,\frac52)$ | official answer (Ex 2 Q3a) |
| Q2c | log of a large number | $+\infty$ | official (2021 Moed A Q4c) |
| Q3a | $g=xe^x$, endpoints | min $-1/e$ at $-1$, max $0$ at $0$ | official answer (Ex 4 Q4a) |
| Q3b | L'Hopital | $0$ | official answer (Ex 4 Q4b) |
| Q3c | implicit differentiation | $y'=0$ at $(0,1)$ | official |
| Q4a-e | domain, intercept, limit, sign of $f'$ | $0<x<2$; $(1,0)$; $-\infty$; max at 1; global max, no global min | official |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Maths for Economists B]]
