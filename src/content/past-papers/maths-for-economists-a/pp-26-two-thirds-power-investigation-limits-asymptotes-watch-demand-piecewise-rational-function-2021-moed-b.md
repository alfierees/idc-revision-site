---
title: "Two-Thirds Power Investigation, Limits & Asymptotes, Watch Demand & Piecewise Rational Function (2021 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, 2021 Moed B"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - cusp
  - asymptotes
  - limits
  - absolute-value
  - marginal-revenue
  - demand-function
  - piecewise-functions
  - definition-of-derivative
  - continuity
  - chain-rule
aliases:
  - Math I 2021 Moed B
  - PP26 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Two-Thirds Power Investigation, Limits & Asymptotes, Watch Demand & Piecewise Rational Function (2021 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, 2021 (Moed B)**, Hever Schulberg. 4 questions (35, 20, 20, 25 points), 3 hours, non-graphing calculator and formula sheet allowed.
> Builds on: [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_04-Limits and Continuity]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The exam is on pages 2 and 3 of the source PDF (page 1 is the cover sheet). The **handwritten, unsigned key (author unclear)** is on pages 4 to 8 and covers every part. Answers below follow the key, expanded into steps.
> **The constant $d$.** The cover says each student substitutes the last digit of their own ID for $d$. The key picks one digit per part (Q1c: $d=1$; Q2a: $d=2$; Q2b: $d=1$; Q2c: $d=0$; Q4d and Q4e do not depend on $d$ in any way that matters). I follow the key's digits first, and then add a short check that the conclusion holds for every digit $0$ to $9$ where that is true.

> [!warning] Points where the key needs a check
> - **Q1c:** the key writes the shift twice. The first is $3.51$ (correct for $d=1$, since $(350+1)/100=3.51$). The second reads like "3.18 units", which looks like a slip for $3.51$. The conclusion (4 intercepts) is unaffected. Kept as is.
> - Everything else checks out. **No part is AI-solved.** The "all digits" remarks marked as my own are checks, not part of the key.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Full investigation of $x^{4/3}-2x^{2/3}-3$ (a cusp function), then how $\lvert f\rvert$ and a vertical shift change extrema and x-intercepts | [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |
| Q2 | Three unrelated pieces: a limit with an absolute value, asymptotes of a root-over-linear function, and "is this equation a function?" | [[Lec_05-Infinite Limits]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_01-Functions, Domain and Sigma Notation]] |
| Q3 | Demand for watches: value, derivative, how the derivative changes, revenue and marginal revenue | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q4 | Piecewise function with a root piece and a rational piece: domain, simplification, derivative from the definition, continuity, chain rule | [[Lec_04-Limits and Continuity]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] |

> [!tip] Intuition: the one move behind each question
> - Q1: substitute $t=x^{2/3}$ to turn the intercept equation into a quadratic. Reflecting with $\lvert f\rvert$ turns every minimum below the axis into a maximum, and every maximum below the axis into a minimum.
> - Q2: for a root over a linear term, factor out the dominant power. The denominator going to zero while the numerator does not gives a vertical asymptote.
> - Q3: in $D'(x)$ the variable sits in the denominator, so the sign of $D'$ and the direction it moves can be read without a second derivative.
> - Q4: on $x>3$ the absolute value is just $x-3$, so the two fractions combine and the problem collapses to $\frac1{x+3}$.

---

## Q1 — Investigating $f(x)=x^{4/3}-2x^{2/3}-3$ (35 points)

**Question.** Given $f(x)=x^{4/3}-2x^{2/3}-3$.

a. Investigate the function by the following criteria:
1. Domain.
2. Axes intercept points (if any).
3. Asymptotes (if any) using the appropriate limits.
4. Show that the derivative is $f'(x)=\dfrac{4x^{2/3}-4}{3x^{1/3}}$.
5. Find relative extreme points (if any) and increase/decrease intervals.
6. Show that the second derivative is $f''(x)=\dfrac{4}{9x^{2/3}}+\dfrac{4}{9x^{4/3}}$.
7. Find inflection points (if any) and concavity intervals.
8. Draw the graph.

b. How many extreme points does $y_1=\lvert f(x)\rvert$ have? Explain.

c. How many x-intercept points does $y_2=f(x)+\dfrac{350+d}{100}$ have? Explain.

### a1. Domain

$f(x)=\sqrt[3]{x^4}-2\sqrt[3]{x^2}-3$. A cube root is defined for every real number.

> [!success] Answer (the key)
> The domain is **all real $x$**.

### a2. Axes intercepts

**y-axis:** $f(0)=-3$, so the point is $(0,-3)$.

**x-axis:** set $f(x)=0$. Because $x^{4/3}=\left(x^{2/3}\right)^2$, substitute $t=x^{2/3}$:

$$
t^2-2t-3=0 \;\Rightarrow\; (t-3)(t+1)=0 \;\Rightarrow\; t=3 \ \text{or}\ t=-1
$$

- $t=-1$: $\sqrt[3]{x^2}=-1$ is impossible, because $x^{2/3}\ge0$ always. Rejected.
- $t=3$: $\sqrt[3]{x^2}=3 \Rightarrow x^2=27 \Rightarrow x=\pm\sqrt{27}$.

> [!success] Answer (the key)
> y-intercept $(0,-3)$. x-intercepts $(\pm\sqrt{27},\,0)$, that is $x\approx\pm5.196$.

### a3. Asymptotes

**Horizontal.** Factor out the highest power:

$$
\lim_{x\to\pm\infty} x^{4/3}\left(1-\frac{2}{x^{2/3}}-\frac{3}{x^{4/3}}\right)=\sqrt[3]{(\pm\infty)^4}\cdot(1-0-0)=\infty
$$

The limit is $+\infty$ in both directions (an even power of the cube root), so there is **no horizontal asymptote**.

**Vertical.** $f$ is continuous for all $x$ (domain is all reals, and it is built from continuous pieces), so there is **no vertical asymptote**.

> [!success] Answer (the key)
> No asymptotes of either kind.

### a4. The derivative

$$
f'(x)=\frac43x^{1/3}-\frac43x^{-1/3}=\frac{4x^{2/3}-4}{3x^{1/3}}
$$

To combine, put both terms over $3x^{1/3}$: $\frac43x^{1/3}=\frac{4x^{1/3}\cdot x^{1/3}}{3x^{1/3}}=\frac{4x^{2/3}}{3x^{1/3}}$, and $\frac43x^{-1/3}=\frac{4}{3x^{1/3}}$. This is the form the question asks for.

$f'(x)$ is **undefined at $x=0$** (a zero in the denominator), while $f$ itself is defined there. And $f'(x)=0$ when $x^{2/3}=1$, that is $\sqrt[3]{x^2}=1$, so $x=\pm1$.

### a5. Extrema and monotonicity

The critical points are $x=-1$, $x=0$ (where $f'$ is undefined) and $x=1$. Sign of $f'$ on each interval:

| Interval | $x<-1$ | $-1<x<0$ | $0<x<1$ | $x>1$ |
|---|---|---|---|---|
| numerator $4x^{2/3}-4$ | $+$ | $-$ | $-$ | $+$ |
| denominator $3x^{1/3}$ | $-$ | $-$ | $+$ | $+$ |
| $f'(x)$ | $-$ | $+$ | $-$ | $+$ |
| $f(x)$ | decreasing | increasing | decreasing | increasing |

Function values: $f(\pm1)=1-2-3=-4$ and $f(0)=-3$.

> [!success] Answer (the key)
> - Increasing on $(-1,0)$ and on $(1,\infty)$.
> - Decreasing on $(-\infty,-1)$ and on $(0,1)$.
> - Relative **minima** at $(-1,-4)$ and $(1,-4)$. Relative **maximum** at $(0,-3)$.

> [!tip] Intuition
> At $x=0$ the derivative blows up with opposite signs on the two sides (it goes to $+\infty$ from the left and $-\infty$ from the right). The graph forms a pointed peak, a **cusp**, rather than a smooth hill. It is still a maximum because $f$ rises into it and falls away from it.

### a6. The second derivative

$$
f''(x)=\frac49x^{-2/3}+\frac49x^{-4/3}=\frac{4}{9x^{2/3}}+\frac{4}{9x^{4/3}}
$$

### a7. Concavity and inflection points

Both terms are positive for every $x\neq0$ (even powers of a cube root are positive), so $f''(x)>0$ for all $x\neq0$.

> [!success] Answer (the key)
> Concave **up** for $x\neq0$ (the key notes that "all $x$" is also acceptable). Concave down: nowhere. **No inflection points.**

### a8. The graph

![[PP26_q1_investigation_graph.png]]

The two valleys at $(\pm1,-4)$ are concave up, joined by a pointed peak at $(0,-3)$, and the arms rise through $(\pm\sqrt{27},0)$ without bound.

### b. Extreme points of $y_1=\lvert f(x)\rvert$

Reflect the part of the graph below the x-axis upwards. $f$ is negative on the whole interval $-\sqrt{27}<x<\sqrt{27}$, so that entire part flips.

| Point of $f$ | Becomes on $\lvert f\rvert$ | Type |
|---|---|---|
| $(-1,-4)$ min | $(-1,4)$ | maximum |
| $(1,-4)$ min | $(1,4)$ | maximum |
| $(0,-3)$ max | $(0,3)$ | minimum |
| $(-\sqrt{27},0)$ crossing | $(-\sqrt{27},0)$ | minimum (a corner) |
| $(\sqrt{27},0)$ crossing | $(\sqrt{27},0)$ | minimum (a corner) |

> [!success] Answer (the key)
> **5 extreme points.**

The left panel of the figure at the end of this question shows them.

### c. X-intercepts of $y_2=f(x)+\dfrac{350+d}{100}$

The key takes $d=1$: $y_2=f(x)+3.51$, so the graph **moves up by 3.51**. Track the three turning points:

| Point of $f$ | After the shift | Position |
|---|---|---|
| $(\pm1,-4)$ min | $(\pm1,-0.49)$ | below the x-axis |
| $(0,-3)$ cusp max | $(0,0.51)$ | above the x-axis |

The two valleys dip below the axis and the cusp peak pokes above it. Starting from far left (high above the axis), the graph crosses down, comes back up through the cusp area, crosses down again, comes back up, and rises: that is a total of 4 crossings.

> [!success] Answer (the key)
> **4 x-intercepts** (with $d=1$).

![[PP26_q1bc_abs_and_shifted_graphs.png]]

> [!tip] Intuition: does the digit $d$ matter? (my own check, not in the key)
> For any digit $d=0,\dots,9$ the shift $\frac{350+d}{100}$ lies between $3.50$ and $3.59$. That is always between $3$ and $4$, so the minima ($-4+\text{shift}<0$) stay below the axis and the cusp maximum ($-3+\text{shift}>0$) stays above it. The answer is 4 for every student's $d$.

---

## Q2 — Three separate pieces (20 points)

**Question.** There is no connection between the parts.

a. Find $\displaystyle\lim_{x\to-\infty}\frac{x}{\lvert x+(d+1)\rvert}$.

b. Find asymptotes (if any) for $f(x)=\dfrac{\sqrt{x+1}-(d+1)}{(d+1)-x}$.

c. Does the equation $xy+y-x=d+2$ represent $y$ as a function of $x$ when the domain is all real numbers? If so, find its minimal range. If not, find a reduced domain so that it would become a function.

### a. The limit (key uses $d=2$)

With $d=2$ the expression is $\dfrac{x}{\lvert x+3\rvert}$. As $x\to-\infty$ we have $x+3<0$, so $\lvert x+3\rvert=-(x+3)=-x-3$:

$$
\lim_{x\to-\infty}\frac{x}{\lvert x+3\rvert}=\lim_{x\to-\infty}\frac{x}{-x-3}=\lim_{x\to-\infty}\frac{x}{x\left(-1-\frac3x\right)}=\frac{1}{-1-0}=-1
$$

> [!success] Answer (the key)
> $-1$.

> [!tip] Intuition: any $d$ (my own check)
> For any $d\ge0$, $x+(d+1)$ is negative once $x$ is far enough left, so the denominator is $-x-(d+1)$ and the ratio tends to $\frac{x}{-x}=-1$. The shift is negligible against $x$ itself.

### b. Asymptotes (key uses $d=1$)

With $d=1$:

$$
f(x)=\frac{\sqrt{x+1}-2}{2-x}
$$

**Domain.** $x+1\ge0$ gives $x\ge-1$, and the denominator needs $x\neq2$. So the domain is $x\ge-1$, $x\neq2$.

**Horizontal.** Only $x\to+\infty$ is inside the domain. Factor $x$ out of numerator and denominator:

$$
\lim_{x\to\infty}\frac{\sqrt{x\left(1+\frac1x\right)}-2}{2-x}
=\lim_{x\to\infty}\frac{\sqrt x\left(\sqrt{1+\frac1x}-\frac2{\sqrt x}\right)}{x\left(\frac2x-1\right)}
=\lim_{x\to\infty}\frac{1}{\sqrt x}\cdot\frac{\sqrt{1+\frac1x}-\frac2{\sqrt x}}{\frac2x-1}
=\frac{1}{\infty}\cdot\frac{1-0}{0-1}=0
$$

So there is a **horizontal asymptote $y=0$** (to the right).

**Vertical.** The only suspect is $x=2$, where the denominator is $0$ and the numerator is $\sqrt3-2<0$ (not zero). So the quotient blows up. Check the sign on each side:

- $x\to2^+$: numerator $\sqrt3-2<0$, denominator $2-x\to0^-$. Negative over negative gives $+$, so the limit is $+\infty$.
- $x\to2^-$: numerator $<0$, denominator $\to0^+$. Negative over positive gives $-$, so the limit is $-\infty$.

> [!success] Answer (the key)
> Horizontal asymptote $y=0$ (as $x\to\infty$). Vertical asymptote $x=2$.

> [!tip] Intuition
> Note the numerator is zero at $x=3$ (since $\sqrt4=2$), not at $x=2$. So $x=2$ is a genuine vertical asymptote and not a removable hole. For general $d$ the numerator vanishes at $x=d^2+2d$ and the denominator at $x=d+1$. These never coincide for a whole-number $d$, so the same two asymptotes appear for every digit (my own check; for other $d$ the vertical asymptote is at $x=d+1$).

### c. Is it a function? (key uses $d=0$)

The key notes that this question appeared in the homework exercises. With $d=0$ the equation is $xy+y-x=2$. Solve for $y$:

$$
y(x+1)=x+2 \;\Rightarrow\; y=\frac{x+2}{x+1}
$$

For $x=-1$ the equation becomes $0\cdot y=1$, which no $y$ satisfies. So $x=-1$ has **no** $y$-value.

> [!success] Answer (the key)
> **No**, not a function on all of $\mathbb R$, because there is no $y$ for $x=-1$. The reduced domain is **$x\neq-1$**.

> [!tip] Intuition: any $d$ (my own check)
> For general $d$, $y(x+1)=x+d+2$, and at $x=-1$ this reads $0=d+1$, which is false for every $d\ge0$. So the answer is the same for every digit.

---

## Q3 — Demand for premium watches (20 points)

**Question.** The demand for premium watches is given by $D(x)=1000-243\cdot\sqrt[3]{x}$, where $x>0$ denotes the retail price for one watch in thousands of dollars.

a. Find $D(27)$ and explain the financial meaning of the result.
b. Find $D'(1)$ and explain the financial meaning of the result.
c. Is the marginal demand function increasing or decreasing when the price is increased?
d. Write the revenue function as a function of $x$, meaning $R(x)$.
e. Find the price for which the marginal revenue equals 352 thousand dollars.

### a. $D(27)$

$$
D(27)=1000-243\cdot\sqrt[3]{27}=1000-243\cdot3=1000-729=271
$$

> [!success] Answer (the key)
> If the price is set at $27$ thousand dollars (that is, $\$27{,}000$) per watch, the demand will be **271 watches**.

### b. $D'(1)$

$$
D'(x)=-243\cdot\frac13x^{-2/3}=-\frac{81}{\sqrt[3]{x^2}}
\qquad\Rightarrow\qquad
D'(1)=-\frac{81}{\sqrt[3]{1}}=-81
$$

> [!success] Answer (the key)
> When the price of a watch goes up by one thousand dollars (from $\$1{,}000$ to about $\$2{,}000$), the demand falls by about **81 watches**.

### c. Is the marginal demand increasing or decreasing?

$D'(x)=-\dfrac{81}{\sqrt[3]{x^2}}$. The key avoids $D''$: in $D'(x)$, $x$ is in the denominator. As $x$ grows, $\sqrt[3]{x^2}$ grows, so the fraction $\frac{81}{\sqrt[3]{x^2}}$ shrinks, and because of the minus sign $D'(x)$ is negative and gets **closer to zero**, which means it rises.

> [!success] Answer (the key)
> $D'(x)$ is **increasing** as the price rises.

Check with the second derivative: $D''(x)=\frac{54}{x^{5/3}}>0$ for $x>0$, so $D'$ is increasing. This agrees.

> [!tip] Intuition
> Demand falls steeply at low prices and the fall flattens out as the price grows: each extra thousand dollars costs fewer lost sales when the price is already high.

### d. Revenue

Revenue is price times quantity sold. Here the price is $x$ (thousand dollars) and the quantity is $D(x)$:

$$
R(x)=x\cdot D(x)=x\left(1000-243x^{1/3}\right)=1000x-243x^{4/3}
$$

> [!success] Answer (the key)
> $R(x)=1000x-243x^{4/3}$ (in thousands of dollars).

### e. Price at which $R'(x)=352$

$$
R'(x)=1000-243\cdot\frac43x^{1/3}=1000-324\sqrt[3]{x}
$$

$$
1000-324\sqrt[3]{x}=352 \;\Rightarrow\; 324\sqrt[3]{x}=648 \;\Rightarrow\; \sqrt[3]{x}=2 \;\Rightarrow\; x=8
$$

> [!success] Answer (the key)
> $x=8$ thousand dollars, so the price is **\$8,000**.

---

## Q4 — A piecewise function with a root and a rational piece (25 points)

**Question.** Given

$$
f(x)=\begin{cases}\sqrt{x^2-3x+2} & x<3\\[2pt] d+1 & x=3\\[2pt] \dfrac{1}{\lvert3-x\rvert}+\dfrac{6}{9-x^2} & x>3\end{cases}
$$

a. Find the function's domain. Explain.
b. Show that for $x>3$ the function is actually $f(x)=\dfrac{1}{x+3}$.
c. For $x>3$ use the **definition of the derivative** and find $f'(x)$.
d. Is the function continuous at $x=3$? Explain.
e. Given $g(x)=\left[f(3x)\right]^3$. Find $g'(3)$.

### a. Domain

- **$x>3$:** the denominators $\lvert3-x\rvert$ and $9-x^2$ vanish only at $x=3$ and $x=\pm3$, and none of those is inside the interval $x>3$. So $f$ is defined for every $x>3$.
- **$x=3$:** defined, $f(3)=d+1$.
- **$x<3$:** the root needs $x^2-3x+2\ge0$, that is $(x-1)(x-2)\ge0$. A parabola opening upwards is non-negative outside its roots: $x\le1$ or $x\ge2$. Intersected with $x<3$, this gives $x\le1$ or $2\le x<3$.

Putting the three pieces together:

> [!success] Answer (the key)
> The domain is $x\le1$ or $x\ge2$, that is $(-\infty,1]\cup[2,\infty)$.

### b. Simplifying for $x>3$

For $x>3$ we have $3-x<0$, so $\lvert3-x\rvert=-(3-x)$. Also $9-x^2=(3-x)(3+x)$:

$$
f(x)=-\frac{1}{3-x}+\frac{6}{(3-x)(3+x)}=\frac{-(3+x)+6}{(3-x)(3+x)}=\frac{3-x}{(3-x)(3+x)}=\frac{1}{3+x}
$$

The factor $3-x$ cancels (legitimate, since $x\neq3$ on this piece).

### c. $f'(x)$ from the definition ($x>3$)

Using $f(x)=\dfrac1{x+3}$:

$$
f'(x)=\lim_{h\to0}\frac{\frac{1}{3+x+h}-\frac{1}{3+x}}{h}
=\lim_{h\to0}\frac{(3+x)-(3+x+h)}{h\,(3+x+h)(3+x)}
=\lim_{h\to0}\frac{-h}{h\,(3+x+h)(3+x)}
=\lim_{h\to0}\frac{-1}{(3+x+h)(3+x)}
$$

$$
f'(x)=\frac{-1}{(3+x)^2}
$$

> [!success] Answer (the key)
> $f'(x)=-\dfrac{1}{(3+x)^2}$.

### d. Continuity at $x=3$

Compare the value with both one-sided limits:

- Value: $f(3)=d+1$.
- From the right: $\displaystyle\lim_{x\to3^+}f(x)=\lim_{x\to3^+}\frac1{x+3}=\frac16$.
- From the left: $\displaystyle\lim_{x\to3^-}f(x)=\sqrt{9-9+2}=\sqrt2$.

The two one-sided limits are different ($\frac16\neq\sqrt2$), so the limit at $x=3$ does not exist, whatever $d$ is.

> [!success] Answer (the key)
> **Discontinuous** at $x=3$.

> [!tip] Intuition
> This is a **jump** discontinuity: the left piece arrives at height $\sqrt2\approx1.41$ and the right piece starts at height $\frac16$, so the graph jumps. The stated value $d+1$ cannot repair this, because it would have to equal two different numbers at once.

### e. $g'(3)$ for $g(x)=\left[f(3x)\right]^3$

Chain rule twice (outer power, then inner $3x$):

$$
g'(x)=3\left[f(3x)\right]^2\cdot f'(3x)\cdot3=9\left[f(3x)\right]^2f'(3x)
$$

At $x=3$ the inner argument is $3x=9>3$, so use the $x>3$ formulas:

$$
f(9)=\frac1{9+3}=\frac1{12},\qquad f'(9)=-\frac{1}{(9+3)^2}=-\frac1{144}
$$

$$
g'(3)=9\left(\frac1{12}\right)^2\left(-\frac1{12^2}\right)=-\frac{9}{12^4}=-\frac{9}{20736}=-\frac1{2304}\approx-0.00043
$$

> [!success] Answer (the key)
> $g'(3)=-\dfrac{1}{2304}\approx-0.00043$.
