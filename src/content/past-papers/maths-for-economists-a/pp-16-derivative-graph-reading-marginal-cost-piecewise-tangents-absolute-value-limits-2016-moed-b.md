---
title: "Derivative Graph Reading, Marginal Cost, Piecewise Tangents & Absolute Value Limits (2016 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, 2016 Moed B"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - derivative-graph
  - marginal-cost
  - piecewise-functions
  - continuity
  - tangent-line
  - asymptotes
  - absolute-value
  - one-sided-limits
aliases:
  - Math I 2016 Moed B
  - PP16 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Derivative Graph Reading, Marginal Cost, Piecewise Tangents & Absolute Value Limits (2016 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, 2016 (Moed B)**, Hever Schulberg. 3 hours, 4 questions, 25 points each, non-graphing calculator only. "You must justify anything you claim."
> Builds on: [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_04-Limits and Continuity]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The source PDF has the exam on pages 2 to 3 and a **handwritten, unsigned key (author unclear)** on pages 4 to 11. Answers below follow that key. Where the key is terse it is expanded; where it is incomplete a `> [!warning]` says so.

> [!warning] Points where the key needs a check
> - **Q3e:** the key says g has **no asymptotes**, but $g(x)=xe^{1/x}$ for $x<0$ has the **oblique asymptote** $y=x+1$ as $x\to-\infty$ (shown below). Lecture 12 teaches oblique asymptotes, so this is a likely gap in the key.
> - **Q2d:** the key rounds $C(10)=98$; the exact value is about $98.01$. The verdict is unchanged.
> - No question in this paper is AI-solved. The extra checks are marked as such where they appear.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Read increase, decrease, extrema and concavity of $f$ **from the graph of $f'$**, then find the constants from a formula for $f'$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]] |
| Q2 | A cost function with a root: sign of $C'$, sign of $C''$ (marginal cost), interpret $C'(10)$, profit check | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_02-Piecewise Functions and Business Applications]] |
| Q3 | Piecewise function with $xe^{1/x}$: domain, continuity, tangent line (needs continuity), asymptotes | [[Lec_04-Limits and Continuity]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |
| Q4 | A limit with an absolute value, rewriting it piecewise, one-sided limits, a derivative | [[Lec_05-Infinite Limits]], [[Lec_04-Limits and Continuity]], [[Lec_07-The Derivative, Differentiability and Rules]] |

> [!tip] Intuition: the one move behind each question
> - Q1: **the sign of $f'$ decides increasing or decreasing; the slope of $f'$ decides concavity.** Everything is read off the picture of $f'$.
> - Q2: marginal cost is $C'$; whether it rises or falls is the sign of $C''$.
> - Q3: a tangent line needs continuity first. A jump kills it before any derivative is computed.
> - Q4: a limit that gives $\tfrac{\text{number}}{0}$ needs the **sign of the zero**, so split into one-sided limits or rewrite without the absolute value.

---

## Q1 — Reading the graph of the derivative (25 points)

**Question.** $f(x)$ has domain $x\neq b$. The graph of its **derivative** $f'(x)$ is given (a picture, not reproduced here). Reading it:

- $f'$ has a **vertical asymptote at $x=b$** and goes to $+\infty$ on both sides of it.
- Left of $b$, $f'$ is positive and rising towards $+\infty$ as $x\to b^-$.
- Right of $b$, $f'$ falls from $+\infty$, **crosses the $x$-axis at $x=a$** (so $a>b$), dips below the axis to a **lowest point at $x=c$** (so $c>a$) and then climbs back towards the axis, flattening out below it.

In parts a to c answer in terms of the constants $a$, $b$, $c$.

a. Find increase and decrease intervals for $f(x)$. Explain.
b. Find the $x$ value of the extreme points of $f(x)$ (if any) and their type. Explain.
c. Find concavity intervals for $f(x)$. Explain.
d. Given that $f'(x)=\dfrac{8-2x}{(x+1)^4}$, find the numerical values of $a$, $b$, $c$.

### a. Increase and decrease intervals

$f$ is **increasing where $f'$ is above the $x$-axis** and **decreasing where $f'$ is below it**.

> [!success] Answer (the key)
> - Increasing: $x<b$ and $b<x<a$ (that is, $x<a$, $x\neq b$).
> - Decreasing: $x>a$.

> [!note] Why two separate pieces
> $x=b$ is not in the domain, so the "increasing" part is two intervals, $(-\infty,b)$ and $(b,a)$. Do not join them into one interval through $b$.

### b. Extreme points

At $x=a$, $f'$ changes sign from **positive to negative**, so $f$ goes from increasing to decreasing.

> [!success] Answer (the key)
> $x=a$ is a **relative maximum** of $f$.

There is no extremum at $x=b$: it is outside the domain. At $x=c$, $f'$ does not touch zero, so $f$ has no extremum there either (see part c).

### c. Concavity intervals

$f''>0$ exactly where $f'$ is **increasing**, and $f''<0$ where $f'$ is **decreasing**.

- $f'$ is increasing for $x<b$ and for $x>c$, so $f$ is **concave up** ($\cup$) there.
- $f'$ is decreasing for $b<x<c$, so $f$ is **concave down** ($\cap$) there.

> [!success] Answer (the key)
> - Concave up: $x<b$ or $x>c$.
> - Concave down: $b<x<c$.

> [!tip] Intuition
> $x=c$ is the bottom of the dip in $f'$, the steepest descent of $f$. $f''$ changes sign there ($f''<0$ to $f''>0$), so $f$ has an **inflection point** at $x=c$. The question does not ask for it, but it is a natural follow-up.

### d. The constants from the formula

$f'(x)=\dfrac{8-2x}{(x+1)^4}$.

**Constant $b$.** $f'$ has a vertical asymptote where the denominator is $0$: $(x+1)^4=0$, so $x=-1$ and

$$
b=-1
$$

**Constant $a$.** $f'$ crosses the axis where the numerator is $0$:

$$
\frac{8-2a}{(a+1)^4}=0 \;\Rightarrow\; 2a=8 \;\Rightarrow\; a=4
$$

**Constant $c$.** $c$ is where $f'$ has its minimum, that is where $f''(c)=0$. Quotient rule:

$$
f''(x)=\frac{-2(x+1)^4-(8-2x)\cdot 4(x+1)^3}{(x+1)^8}
$$

Cancel a common factor $(x+1)^3$ from top and bottom, then pull out $-2$ (note $-4(8-2x)=-2\cdot(16-4x)$):

$$
f''(x)=\frac{-2(x+1)-4(8-2x)}{(x+1)^5}=\frac{-2\left[(x+1)+(16-4x)\right]}{(x+1)^5}
$$

The bracket is $x+1+16-4x=17-3x$, so

$$
f''(x)=\frac{-2\,(17-3x)}{(x+1)^5}=0 \;\Rightarrow\; x=\frac{17}{3}
$$

> [!success] Answer (the key)
> $b=-1,\quad a=4,\quad c=\dfrac{17}{3}\approx 5.67$

> [!note] Sanity check (own, not in the key)
> Order $b<a<c$: $-1<4<5.67$ matches the picture. Differentiating directly, $f''=\dfrac{-2(x+1)-4(8-2x)}{(x+1)^5}=\dfrac{6x-34}{(x+1)^5}$, which is zero at $x=\tfrac{17}{3}$. Sign check: for $x>\tfrac{17}{3}$ the numerator and $(x+1)^5$ are positive, so $f''>0$ (concave up, as in part c); for $-1<x<\tfrac{17}{3}$ the numerator is negative, so $f''<0$.

---

## Q2 — Cost function with a square root (25 points)

**Question.** A factory's monthly cost of production (in thousands of $) is

$$
C(x)=10x-\frac{20}{\sqrt{x^2+1}}
$$

where $x$ is the number of units per month ($x>2$). Answer only on $x>2$.

a. Is $C(x)$ increasing or decreasing with $x$? Explain.
b. Is the marginal cost increasing or decreasing with $x$? Explain.
c. Show that $C'(10)=10.197$ and explain what the number means.
d. If the factory produces 10 units a month and sells each unit for $10{,}000$, is it profitable (is profit positive)?

### a. Is $C(x)$ increasing?

The key gives two ways.

**Way I (looking at $C$).** $10x$ increases with $x$. The term $\dfrac{20}{\sqrt{x^2+1}}$ **decreases** with $x$, but it is **subtracted**, so subtracting something that gets smaller makes $C$ larger. Both effects push $C$ up.

**Way II (derivative).** Write $C(x)=10x-20(x^2+1)^{-1/2}$:

$$
C'(x)=10+20\cdot\frac12\,(x^2+1)^{-3/2}\cdot 2x=10+\frac{20x}{\sqrt{(x^2+1)^3}}
$$

For $x>2$ the fraction is positive, so $C'(x)>10>0$.

> [!success] Answer (the key)
> $C(x)$ is **increasing** for $x>2$, because $C'(x)>0$.

### b. Is marginal cost increasing?

Marginal cost is $C'(x)$, so look at the sign of $C''$. Differentiate $20x\,(x^2+1)^{-3/2}$ with the product rule:

$$
C''(x)=20(x^2+1)^{-3/2}-20x\cdot\frac32(x^2+1)^{-5/2}\cdot 2x
$$

Factor out $20(x^2+1)^{-5/2}$:

$$
C''(x)=\frac{20\left[(x^2+1)-3x^2\right]}{(x^2+1)^{5/2}}=\frac{20\,(1-2x^2)}{(x^2+1)^{5/2}}
$$

For $x>2$: $1-2x^2<1-8<0$, and the denominator is positive.

> [!success] Answer (the key)
> $C''(x)<0$ for all $x>2$, so **marginal cost $C'(x)$ is decreasing**.

> [!tip] Intuition
> $C'(x)=10+\dfrac{20x}{(x^2+1)^{3/2}}$. The fraction behaves like $\dfrac{20}{x^2}$ for large $x$, so it shrinks and marginal cost slides down towards $10$ (thousand dollars) from above.

### c. $C'(10)$ and its meaning

$$
C'(10)=10+\frac{20\cdot 10}{\sqrt{101^3}}=10+\frac{200}{\sqrt{101^3}}\approx 10+\frac{200}{1015.04}\approx 10.197
$$

> [!success] Answer (the key)
> At a production level of 10 units per month, producing **one more unit raises the cost of production by about $10.197$ thousand dollars, roughly $\$10{,}197$**.

### d. Is the factory profitable at 10 units?

$$
C(10)=100-\frac{20}{\sqrt{101}}\approx 100-1.99\approx 98.01
$$

The key rounds this to $98$ thousand, meaning the **total cost is about $\$98{,}000$**.

Revenue: $10\times 10{,}000=\$100{,}000$.

$$
\text{profit}\approx 100{,}000-98{,}010=1{,}990>0
$$

> [!success] Answer (the key)
> Revenue ($\$100{,}000$) exceeds cost ($\approx\$98{,}000$), so the factory **is profitable**.

> [!tip] Intuition (own, not in the key)
> Profitable overall does not mean the next unit pays: the marginal cost $\$10{,}197$ is above the price $\$10{,}000$, so a further unit would **lower** profit. That is the reason to separate "total profit positive" from "marginal profit positive".

---

## Q3 — A piecewise function with $xe^{1/x}$ (25 points)

**Question.**

$$
f(x)=\begin{cases} x\,e^{1/x} & x<0\\[2pt] \sqrt{x} & x\ge 0 \end{cases}
$$

a. Find the function's domain.
b. Find the function's interval of continuity.

$$
g(x)=\begin{cases} x\,e^{1/x} & x<0\\[2pt] \sqrt{x}+1 & x\ge 0 \end{cases}
$$

c. Is there a tangent line to the graph of $g(x)$ at $x=0$? Explain.
d. Find the equation of the tangent line to the graph of $g(x)$ at $x=25$.
e. Find asymptotes for $g(x)$ (if any).

### a. Domain of $f$

$\sqrt{x}$ is defined for all $x\ge 0$. $xe^{1/x}$ is defined for every $x$ except $x=0$, and that branch is only used for $x<0$, so $x=0$ causes no problem.

> [!success] Answer (the key)
> The domain is **all real $x$**.

### b. Continuity of $f$

Each branch is continuous on its own interval. The only suspect point is $x=0$, where the formula changes:

- $f(0)=\sqrt0=0$
- $\displaystyle\lim_{x\to0^+}f(x)=\sqrt0=0$
- $\displaystyle\lim_{x\to0^-}f(x)=\lim_{x\to0^-}x\,e^{1/x}=0^-\cdot e^{-\infty}=0\cdot 0=0$

Here $e^{1/x}\to e^{-\infty}=0$ because $1/x\to-\infty$ as $x\to0^-$. All three agree.

> [!success] Answer (the key)
> $f$ is **continuous for all $x$**.

### c. Tangent line of $g$ at $x=0$

Only the right branch changed (it has $+1$), so the one-sided limits at $0$ are now different:

- $\displaystyle\lim_{x\to0^-}g(x)=0$
- $\displaystyle\lim_{x\to0^+}g(x)=\sqrt0+1=1$

> [!success] Answer (the key)
> $g$ is **discontinuous at $x=0$** (a jump from $0$ to $1$), so it has **no tangent line** there. A function must be continuous at a point to be differentiable there.

### d. Tangent line at $x=25$

At $x=25$ we are on the branch $g(x)=\sqrt{x}+1$, so $g(25)=\sqrt{25}+1=6$, the point $(25,\,6)$. For $x>0$:

$$
g'(x)=\frac12x^{-1/2}=\frac{1}{2\sqrt x}\qquad g'(25)=\frac{1}{2\cdot5}=\frac1{10}
$$

Point-slope form:

$$
y-6=\frac1{10}(x-25)
$$

> [!success] Answer (the key)
>
> $$
> y=\frac{1}{10}x+3.5
> $$

### e. Asymptotes of $g$

**Vertical.** The only place a vertical asymptote could be is $x=0$, where the formula changes. But the one-sided limits there are the finite numbers $0$ and $1$ (part c), not infinite. There are no other trouble spots. So **none**.

**Horizontal.**

- $x\to+\infty$: $\sqrt x+1\to\infty$, no horizontal asymptote.
- $x\to-\infty$: the key writes $-\infty\cdot e^{0}=-\infty$, since $1/x\to0$ and $e^{1/x}\to1$. So $g\to-\infty$, no horizontal asymptote.

> [!success] Answer (the key)
> No vertical and no horizontal asymptotes: the key says **none**.

> [!warning] Check: there is an oblique asymptote on the left
> The key only tests vertical and horizontal asymptotes. As $x\to-\infty$ the function grows without bound, so look for an **oblique** asymptote $y=mx+k$ (taught in [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]). Use $e^{u}\approx 1+u+\tfrac{u^2}{2}$ for small $u=\tfrac1x$:
>
> $$
> x\,e^{1/x}\approx x\left(1+\frac1x+\frac1{2x^2}\right)=x+1+\frac{1}{2x}
> $$
>
> The leftover $\tfrac1{2x}\to0$, so
>
> $$
> \lim_{x\to-\infty}\Big[g(x)-(x+1)\Big]=0
> $$
>
> and $y=x+1$ is an oblique asymptote of $g$ as $x\to-\infty$. This is an AI check, not in the key. If the exam wanted only "vertical and horizontal", the key's "none" is correct; if it wanted all asymptotes, the key is incomplete. On the right there is none, because $\sqrt x$ grows more slowly than any line.

---

## Q4 — Absolute value limits (25 points)

**Question.** Given

$$
f(x)=\frac{x-1}{\left|-x^2+x\right|}
$$

a. Find $\displaystyle\lim_{x\to0}f(x)$.
b. Show that the function can also be written as
$$
f(x)=\begin{cases}-\dfrac1x & 0<x<1\\[6pt] \dfrac1x & x<0\ \text{ or }\ x>1\end{cases}
$$
c. Find $\displaystyle\lim_{x\to1}f(x)$.
d. Find $f'(2)$.

### a. $\displaystyle\lim_{x\to0}f(x)$

The numerator tends to $x-1\to-1$. The denominator $|-x^2+x|$ tends to $0$ and is an absolute value, so it approaches $0$ **from above** ($0^+$) from either side.

$$
\lim_{x\to0}\frac{x-1}{|-x^2+x|}=\frac{-1}{0^+}=-\infty
$$

> [!success] Answer (the key)
> The limit is $-\infty$.

> [!tip] Intuition
> Because $|\cdot|\ge0$, the denominator is a small positive number from both sides of $0$, so the sign is fixed by the numerator ($-1$). Both one-sided limits agree and the two-sided limit exists as $-\infty$.

### b. Rewriting without the absolute value

First factor the inside: $-x^2+x=-x(x-1)=x(1-x)$. This is a downward parabola with roots $0$ and $1$ (the key sketches it), so:

- **Inside positive** for $0<x<1$ (parabola above the axis).
- **Inside negative** for $x<0$ or $x>1$ (below the axis).

**Case $0<x<1$**, $|{-x^2+x}|=-x^2+x$:

$$
f(x)=\frac{x-1}{-x(x-1)}=-\frac1x
$$

**Case $x<0$ or $x>1$**, $|{-x^2+x}|=-(-x^2+x)=x(x-1)$:

$$
f(x)=\frac{x-1}{x(x-1)}=\frac1x
$$

We could cancel $x-1$ because $x\neq1$ in the domain, and $x\ne0$ likewise.

> [!success] Answer (the key)
> Exactly the piecewise form in the question: $-\dfrac1x$ on $0<x<1$ and $\dfrac1x$ on $x<0$ or $x>1$.

### c. $\displaystyle\lim_{x\to1}f(x)$

Use the piecewise form and the two sides of $1$:

$$
\lim_{x\to1^+}\frac1x=1\qquad\qquad \lim_{x\to1^-}\left(-\frac1x\right)=-1
$$

> [!success] Answer (the key)
> The one-sided limits are $1\neq-1$, so **the limit does not exist**.

> [!tip] Intuition
> $f$ has a **jump** at $x=1$ (from $-1$ up to $1$). It is not an infinite limit: both sides settle on a finite number, they just disagree.

### d. $f'(2)$

$x=2>1$, so $f(x)=\dfrac1x=x^{-1}$ near $x=2$:

$$
f'(x)=-x^{-2}=-\frac1{x^2}\qquad f'(2)=-\frac1{4}
$$

> [!success] Answer (the key)
>
> $$
> f'(2)=-\frac14
> $$

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result |
> |---|---|
> | Q1a | Increasing $x<b$, $b<x<a$; decreasing $x>a$ |
> | Q1b | Relative maximum at $x=a$ |
> | Q1c | Concave up $x<b$ or $x>c$; concave down $b<x<c$ |
> | Q1d | $b=-1$, $a=4$, $c=\tfrac{17}{3}$ |
> | Q2a, b | $C$ increasing; marginal cost decreasing |
> | Q2c, d | $C'(10)\approx10.197$ thousand dollars per extra unit; profitable |
> | Q3a, b | Domain all $x$; $f$ continuous everywhere |
> | Q3c, d | No tangent at $0$ (jump); tangent at $25$: $y=\tfrac1{10}x+3.5$ |
> | Q3e | Key: none (but oblique $y=x+1$ as $x\to-\infty$, AI check) |
> | Q4 | $-\infty$; piecewise form; $\lim_{x\to1}$ does not exist; $f'(2)=-\tfrac14$ |
