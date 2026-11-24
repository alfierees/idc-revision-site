---
title: "Function Investigation, Piecewise Continuity, Limits & Average Profit (2011 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed B 2011"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - piecewise-function
  - continuity
  - cusp
  - limits
  - marginal-function
  - profit-function
aliases:
  - Maths A Moed B 2011
  - PP06 Maths A
subject: maths-for-economists-a
in_scope: true
---

# Function Investigation, Piecewise Continuity, Limits & Average Profit (2011 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed B 2011**, 3 hours, 4 questions (35 / 30 / 15 / 20 points). Non-graphic calculator only, no other material.
> Builds on: [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]]
> Practice: [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]]

> [!info] Source
> Answers follow **the key (author unclear)**: a handwritten, unsigned solution, 6 pages. Terse working is expanded into steps. Where the key looks wrong it is kept and a `> [!warning]` shows the check. There are two such spots (Q2c and Q2d).

> [!warning] Parts with no key
> None. Every part has a handwritten answer. Q1 is also worth reading with care: the question says "plug $k=2$" but the printed function has no $k$ (see Q1).

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 (35) | Full [[Function Investigation]] of a rational function (domain, intercepts, asymptotes, [[Sign Table]]s for $f'$ and $f''$, graph), then the [[Chain Rule]] for $g(x)=f(2x)$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]] |
| Q2 (30) | [[Piecewise Function]]: domain, [[Continuity]] to find a parameter, [[Definition of the Derivative]] at a root point, increase and decrease | [[Lec_07-The Derivative, Differentiability and Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] |
| Q3 (15) | Two limits: an [[Euler Limit]] type and a conjugate trick with an [[Absolute Value Function]] | [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]] |
| Q4 (20) | [[Marginal Function]] of a demand equation, [[Profit Function]], maximising average profit | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]] |

> [!tip] Intuition: the one move behind each question
> - Q1: a fixed recipe. Domain, intercepts, asymptotes, then two sign tables ($f'$ then $f''$), then draw.
> - Q2: a [[Cusp]] is where a root makes the slope blow up with opposite signs on each side.
> - Q3: both limits are $\frac00$. One is cured by the standard exponential limit, the other by multiplying by the conjugate.
> - Q4: average profit is $P(x)/x$. Turn it into a sum of powers, differentiate, set to zero.

---

## Q1 — Investigating $f(x)=\dfrac{x^3}{x-1}$ (35 points)

**Question.** Let $f(x)=\dfrac{x^{3}}{x-1}$.

**a.** Plug $k=2$ and investigate the function by these criteria: domain; axis intersections; asymptotes; intervals of increase and decrease; points of relative extremum; intervals of concavity (upward or downward); inflection points. Draw the function's graph.

**b.** Given $g(x)=f(2x)$, find (using part a) $g'(1)$.

> [!note] About "plug $k=2$"
> The printed function contains no $k$. It looks like a template where the numerator was $x^{k+1}$, and $k=2$ gives the printed $x^3$. The key works with $\dfrac{x^3}{x-1}$, so this note does too.

### a. Investigation

**1. Domain.** The denominator vanishes at $x=1$, so

$$
x\neq 1, \qquad \text{domain} = (-\infty,1)\cup(1,\infty).
$$

**2. Axis intersections.** $f(0)=0$, and $f(x)=0$ only when $x^3=0$. The only intersection with either axis is **$(0,0)$**.

**3. Asymptotes.**

- **[[Vertical Asymptote]] at $x=1$.** The numerator tends to $1$, the denominator to $0$:

$$
\lim_{x\to1^+}\frac{x^3}{x-1}=\frac{1}{0^+}=+\infty,
\qquad
\lim_{x\to1^-}\frac{x^3}{x-1}=\frac{1}{0^-}=-\infty .
$$

- **No [[Horizontal Asymptote]].** Factor out the leading term:

$$
\lim_{x\to\pm\infty}\frac{x^3}{x-1}
=\lim_{x\to\pm\infty}\frac{x^2}{1-\frac1x}
=+\infty .
$$

The limit is infinite at both ends, so there is no horizontal asymptote. The numerator has degree 3 and the denominator degree 1 (a gap of 2), so there is no [[Oblique Asymptote]] either.

**4. Increase and decrease.** By the [[Quotient Rule]]:

$$
f'(x)=\frac{3x^2(x-1)-x^3}{(x-1)^2}=\frac{2x^3-3x^2}{(x-1)^2}=\frac{x^2(2x-3)}{(x-1)^2}.
$$

Zeros: $x^2(2x-3)=0$ gives $x=0$ or $x=1.5$. Undefined at $x=1$ (not in the domain). The denominator is always positive, and $x^2\ge0$, so the sign of $f'$ is the sign of $2x-3$ (except at $x=0$, where it is zero).

| $x$ | $x<0$ | $0<x<1$ | $1<x<1.5$ | $x>1.5$ |
|---|---|---|---|---|
| $f'(x)$ | $-$ | $-$ | $-$ | $+$ |
| $f(x)$ | decreasing | decreasing | decreasing | increasing |

- **Decreasing** for $x<1$ and for $1<x<1.5$. **Increasing** for $x>1.5$.

**5. Relative extremum.**

- $x=0$: $f'$ is negative on both sides, so **not an extremum** (a flat spot on the way down).
- $x=1.5$: $f'$ changes from $-$ to $+$, a **relative minimum**, at $f(1.5)=\dfrac{3.375}{0.5}=6.75$, the point **$(1.5,\,6.75)$**.

**6. Concavity.** Differentiate $f'$ with the quotient rule. The key factors out $2x(x-1)$ and simplifies to

$$
f''(x)=\frac{2x\,(x^2-3x+3)}{(x-1)^3}.
$$

> [!note] Quick check of $f''$ (mine)
> Polynomial division gives $f(x)=x^2+x+1+\dfrac{1}{x-1}$, so $f'(x)=2x+1-\dfrac{1}{(x-1)^2}$ and $f''(x)=2+\dfrac{2}{(x-1)^3}=\dfrac{2(x-1)^3+2}{(x-1)^3}=\dfrac{2x(x^2-3x+3)}{(x-1)^3}$. Same result.

The factor $x^2-3x+3$ has discriminant $9-12<0$, so it is always positive. The sign of $f''$ is the sign of $\dfrac{x}{(x-1)^3}$. Zero at $x=0$; undefined at $x=1$.

| $x$ | $x<0$ | $0<x<1$ | $x>1$ |
|---|---|---|---|
| $f''(x)$ | $+$ | $-$ | $+$ |
| $f(x)$ | concave up | concave down | concave up |

- **Concave up** for $x<0$ and $x>1$; **concave down** for $0<x<1$.

**7. Inflection point.** $f''$ changes sign at $x=0$ (and $x=1$ is not in the domain), so the only [[Inflection Point]] is **$(0,0)$**. There $f'(0)=0$ too, so the graph flattens horizontally while it bends.

**8. Graph.**

![[PP06_q1_cubic_over_x_minus_1.png]]

> [!tip] Intuition
> Left of $x=1$ the curve slides down, flattens through the origin, then plunges to $-\infty$ at the asymptote. Right of it, the curve comes down from $+\infty$, bottoms out at $(1.5,\,6.75)$ and climbs like a parabola.

### b. $g'(1)$ for $g(x)=f(2x)$

By the [[Chain Rule]], $g'(x)=2\,f'(2x)$, so

$$
g'(1)=2\,f'(2)=2\cdot\frac{2\cdot 2^3-3\cdot 2^2}{(2-1)^2}=2\cdot\frac{16-12}{1}=2\cdot4=8 .
$$

> [!success] Answer
> **$g'(1)=8$.** Using part a: $f'(2)=4$.

---

## Q2 — A piecewise function with a cube root (30 points)

**Question.** Given

$$
f(x)=\begin{cases}3\sqrt[3]{(x-1)^2}-x & x\ge 0\\[4pt] \dfrac{x+a}{x-1} & x<0\end{cases}
$$

**a.** Find the domain of the function.

**b.** Find the value of the parameter $a$ for which the function is continuous for all $x$ in its domain.

**c.** Use the definition of the derivative to find if the function is differentiable at $x=1$ and if a tangent line exists at that point.

**d.** Find intervals of increase and decrease and relative extremum of the function for $x>0$.

### a. Domain

The cube root exists for every real number, so the top branch is defined for all $x\ge0$. The bottom branch needs $x-1\neq0$, and $x=1$ is not in $x<0$, so nothing is excluded.

> [!success] Answer
> **Domain: all real $x$.**

### b. Continuity at $x=0$

Each piece is continuous on its own region, so only the joint $x=0$ matters. Check the three conditions:

1. $f(0)=3\sqrt[3]{(-1)^2}-0=3$.
2. From the right: $\lim_{x\to0^+}f(x)=3$. From the left: $\lim_{x\to0^-}\dfrac{x+a}{x-1}=\dfrac{a}{-1}=-a$.
3. Continuity needs the one-sided limits to equal $f(0)$:

$$
-a=3\quad\Longrightarrow\quad a=-3 .
$$

> [!success] Answer
> **$a=-3$.**

### c. Differentiability at $x=1$ from the definition

At $x=1$ we are in the top branch. $f(1)=3\sqrt[3]{0}-1=-1$, and $f(1+h)=3h^{2/3}-(1+h)$. So

$$
\lim_{h\to0}\frac{f(1+h)-f(1)}{h}
=\lim_{h\to0}\frac{3h^{2/3}-(1+h)+1}{h}
=\lim_{h\to0}\frac{3h^{2/3}-h}{h}
=\lim_{h\to0}\frac{3-h^{1/3}}{h^{1/3}} .
$$

The numerator tends to $3$, and $h^{1/3}$ takes the sign of $h$:

$$
h\to0^+:\ \frac{3}{0^+}=+\infty,
\qquad
h\to0^-:\ \frac{3}{0^-}=-\infty .
$$

The limit does not exist as a number, so **$f$ is not differentiable at $x=1$**.

> [!success] Answer (key)
> Not differentiable at $x=1$. The key adds: "but has a vertical tangent line $x=1$."

> [!warning] The key's "vertical tangent" conflicts with the course convention
> The one-sided slopes are $+\infty$ on the right and $-\infty$ on the left: **opposite infinities**. In [[Lec_07-The Derivative, Differentiability and Rules]] that is a [[Cusp]], with **no tangent line**. A [[Vertical Tangent]] needs the slope to be $+\infty$ on both sides or $-\infty$ on both sides. Check: here $f'(x)=2(x-1)^{-1/3}-1$ (see part d), which tends to $-\infty$ as $x\to1^-$ and $+\infty$ as $x\to1^+$. This matches the left and right limits above, and also matches the key's own sign table in part d (decreasing before $x=1$, increasing after, with a sharp point at the bottom). The answer kept here is the key's, but the safe exam answer is "not differentiable, cusp (a vertical-tangent reading is the key's)". Check with your lecturer's convention.

### d. Increase and decrease for $x>0$

On $x>0$, $f(x)=3(x-1)^{2/3}-x$. Differentiate with the [[Power Rule]] and chain rule:

$$
f'(x)=2(x-1)^{-1/3}-1=\frac{2-\sqrt[3]{x-1}}{\sqrt[3]{x-1}} .
$$

- $f'$ is **undefined at $x=1$**, which is a [[Critical Point]].
- $f'(x)=0$: $\sqrt[3]{x-1}=2$, cube both sides: $x-1=8$, so **$x=9$**.

| $x$ | $0<x<1$ | $1<x<9$ | $x>9$ |
|---|---|---|---|
| $f'(x)$ | $-$ | $+$ | $-$ |
| $f(x)$ | decreasing | increasing | decreasing |

Sign check: at $x=0.5$, $\sqrt[3]{-0.5}<0$, so $f'=\dfrac{2-(\text{neg})}{\text{neg}}<0$. At $x=2$, $f'=2-1=1>0$. At $x=10$, $\sqrt[3]{9}\approx2.08$, so $f'=\dfrac{2-2.08}{2.08}<0$.

- Increasing on $1<x<9$; decreasing on $0<x<1$ and on $x>9$.
- At $x=9$: $f(9)=3\cdot4-9=3$. The sign goes $+\to-$: a relative **maximum** at **$(9,\,3)$**.
- At $x=1$: $f(1)=-1$. The sign goes $-\to+$: a relative extremum at **$(1,\,-1)$**.

> [!warning] The key labels $(1,-1)$ as a "max"
> The handwritten label next to $(1,-1)$ reads "max", but the key's own sign table shows $f'$ going from $-$ to $+$ there, which is a **minimum** (and the graph near a cusp pointing down agrees). The coordinates and the table are kept as written; the label looks like a slip. Reported.

> [!success] Answer (key's table)
> Increasing: $1<x<9$. Decreasing: $0<x<1$ and $x>9$. Relative maximum $(9,3)$. At $(1,-1)$ the key writes "max"; the sign table says minimum.

---

## Q3 — Limits (15 points)

**Question.** Find the limits:

1. $\displaystyle\lim_{x\to0}\frac{x}{e^{-x}-1}$
2. $\displaystyle\lim_{x\to2}\frac{\sqrt{4x+1}-(x+1)}{|x-3|-1}$

### 3.1 An exponential limit

Direct substitution gives $\frac00$, an [[Indeterminate Form]]. The key rewrites $e$ as the [[Euler Limit]] form $(1+x)^{1/x}$ inside the exponent:

$$
e^{-x}\ \longrightarrow\ \Big[(1+x)^{1/x}\Big]^{-x}=(1+x)^{-1}=\frac{1}{1+x}.
$$

Then

$$
\lim_{x\to0}\frac{x}{\frac{1}{1+x}-1}
=\lim_{x\to0}\frac{x}{\frac{1-(1+x)}{1+x}}
=\lim_{x\to0}\frac{x(1+x)}{-x}
=\lim_{x\to0}-(1+x)=-1 .
$$

> [!success] Answer
> **$-1$.**

> [!note] A cleaner justification (mine, same answer)
> Replacing $e$ by $(1+x)^{1/x}$ inside a $\frac00$ limit is not an exact identity (only $(1+x)^{1/x}\to e$ in the limit), so the key's route is shaky even though the answer is right. Safer: use the standard limit $\lim_{t\to0}\dfrac{e^t-1}{t}=1$ with $t=-x$:
>
>
> $$
> \frac{x}{e^{-x}-1}=\frac{-t}{e^{t}-1}=-\frac{1}{\frac{e^t-1}{t}}\ \longrightarrow\ -\frac11=-1 .
> $$

### 3.2 A conjugate limit with an absolute value

Near $x=2$ we have $x-3<0$, so $|x-3|=-(x-3)=3-x$ and the denominator is $|x-3|-1=2-x$. Multiply top and bottom by the conjugate $\sqrt{4x+1}+(x+1)$:

$$
\frac{\sqrt{4x+1}-(x+1)}{2-x}\cdot\frac{\sqrt{4x+1}+(x+1)}{\sqrt{4x+1}+(x+1)}
=\frac{(4x+1)-(x+1)^2}{(2-x)\big(\sqrt{4x+1}+x+1\big)} .
$$

The numerator: $(4x+1)-(x^2+2x+1)=-x^2+2x=x(2-x)$. Cancel the factor $2-x$:

$$
\lim_{x\to2}\frac{x\,(2-x)}{(2-x)\big(\sqrt{4x+1}+x+1\big)}
=\lim_{x\to2}\frac{x}{\sqrt{4x+1}+x+1}
=\frac{2}{3+3}=\frac13 .
$$

> [!success] Answer
> **$\dfrac13$.**

---

## Q4 — Demand and average profit at a pastry shop (20 points)

**Question.** The daily demand equation in a pastry shop is $x=6000-6p$, where $p$ is the price in dollars for a loaf of bread and $x$ is the number of loaves sold.

**a)** Find the marginal daily demand function, and explain the meaning of the results.

**b)** The cost of producing $x$ loaves is $C(x)=\tfrac12 px+300$.

1. Find the profit function $P(x)$.
2. Find the number of loaves the pastry should sell daily for the **average profit per unit**, $y=\dfrac{P(x)}{x}$, to be maximal.

### a) Marginal demand

The [[Marginal Function]] is the derivative of demand with respect to price:

$$
x'(p)=\frac{dx}{dp}=-6 .
$$

> [!success] Answer
> **$x'=-6$.** At any price $p$, raising the price by \$1 lowers daily demand by about 6 loaves. It is constant because demand is linear in the price.

### b.1) Profit function

Profit is revenue minus cost, $P=px-C(x)$:

$$
P(x)=px-\tfrac12px-300=\tfrac12px-300 .
$$

To write it in terms of $x$ alone, invert the demand: $p=\dfrac{6000-x}{6}=1000-\dfrac{x}{6}$. Then

$$
P(x)=\tfrac12\Big(1000-\tfrac{x}{6}\Big)x-300=-\frac{1}{12}x^2+500x-300 .
$$

> [!success] Answer
> **$P(x)=-\dfrac{1}{12}x^2+500x-300$.**

### b.2) Maximising average profit

$$
y=\frac{P(x)}{x}=-\frac{1}{12}x+500-300x^{-1}.
$$

First derivative, set to zero:

$$
y'=-\frac{1}{12}+300x^{-2}=-\frac1{12}+\frac{300}{x^2}=0
\quad\Longrightarrow\quad x^2=3600
\quad\Longrightarrow\quad x=60 \ (x>0).
$$

Second derivative: $y''=-600x^{-3}=-\dfrac{600}{x^3}<0$ for $x>0$, so the point is a **maximum**.

> [!success] Answer
> **$x=60$ loaves per day** maximises average profit per loaf.

> [!tip] Intuition (and a check of mine, not in the key)
> Average profit has a falling fixed-cost share ($300/x$ shrinks as you sell more) but a falling margin ($-x/12$). The two balance at $x=60$. The maximum average profit is then $y(60)=-5+500-5=490$ dollars per loaf.
