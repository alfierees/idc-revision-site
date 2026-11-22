---
title: "Root Function Investigation, Absolute Value Root, Limits & Cream Profit (2012 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed B 2012"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - concavity
  - absolute-value
  - differentiability
  - limits
  - euler-limit
  - profit-function
  - marginal-function
aliases:
  - Maths A Moed B 2012
  - PP08 Maths A
subject: maths-for-economists-a
in_scope: true
---

# Root Function Investigation, Absolute Value Root, Limits & Cream Profit (2012 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed B 2012**, 3 hours, 3 questions (30 / 35 / 35 points). Non-graphic calculator only, no other material.
> Builds on: [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_05-Infinite Limits]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_03-Composition, Transformations, Exponentials and Limits]]
> Practice: [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_03-Composition, Transformations and Exponential Graphs]]

> [!info] Source
> The questions and the handwritten solution share one PDF (page 1 is the cover, questions on pages 2 to 3, solution on pages 4 to 10). Answers follow **the key (author unclear)**: handwritten and unsigned. Terse working is expanded into steps.

> [!warning] Parts with no key
> None. Every part has a handwritten answer. The key's asymptote check in Q1 stops at "no horizontal asymptote"; the oblique asymptotes added below are **mine**, labelled where they appear. No key answer needed changing.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 (30) | [[Function Investigation]] of a function with a square root that is concave everywhere, then reading $g'(x)=f(x+1)$ as a **shift** of $f$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]] |
| Q2 (35) | $\lvert x-6\rvert\sqrt{x}$: domain, splitting the [[Absolute Value Function]] into a [[Piecewise Function]], a corner at $x=6$, increase and decrease, a limit at $-\infty$ | [[Lec_07-The Derivative, Differentiability and Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] |
| Q3 (35) | An [[Euler Limit]] that goes to $\infty$, a conjugate limit, then a price-demand [[Profit Function]]: marginal meaning, a maximum, and [[Concavity]] explained through the [[Marginal Function]] | [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]] |

> [!tip] Intuition: the one move behind each question
> - Q1: a function whose second derivative is negative everywhere is one smooth hill. One maximum, no inflection point.
> - Q1b: $g'(x)=f(x+1)$ is just $f$ moved one unit **left**. If $f$ never goes above $0$, then $g'$ never does, so $g$ never rises.
> - Q2: an absolute value hides a corner wherever the inside is zero. The two one-sided slopes at $x=6$ are $\pm\sqrt6$.
> - Q3b: profit is revenue (price per gram times grams) minus cost. Watch the units: demand is in kg, price is per gram, so multiply by $1000$.

---

## Q1 — Investigating $f(x)=x+3-2\sqrt{x^2+3}$ (30 points)

**Question.** Given $f(x)=x+3-2\cdot\sqrt{x^{2}+3}$.

**a.** Investigate the function by these criteria: 1) Domain; 2) Axis intersections; 3) Asymptotes (show the relevant limits); 4) Intervals of increase and decrease; 5) Points of relative extremum; 6) Intervals of concavity (upward or downward); 7) Inflection points; 8) Draw the function's graph.

**b.** Given the function $g(x)$ so that its derivative $g'(x)$ satisfies $g'(x)=f(x+1)$. Find the intervals of increase and decrease for $g(x)$ (if they exist).

### a. Investigation

**1. Domain.** $x^2+3\ge3>0$ for every $x$, so the root always exists: **all $x$**.

**2. Axis intersections.**

- $y$-axis: $f(0)=3-2\sqrt3\approx-0.464$, the point **$(0,\,-0.464)$**.
- $x$-axis: set $f(x)=0$, isolate the root and square (check afterwards):

$$
2\sqrt{x^2+3}=x+3\ \Longrightarrow\ 4(x^2+3)=x^2+6x+9\ \Longrightarrow\ 3x^2-6x+3=0\ \Longrightarrow\ x=1 .
$$

Check: $x+3=4$ and $2\sqrt{1+3}=4$. The point is **$(1,0)$**.

**3. Asymptotes.**

- **[[Vertical Asymptote]]: none**, because $f$ is continuous for all $x$.
- **[[Horizontal Asymptote]]: none.** Factor $x^2$ out of the root, using $\sqrt{x^2}=|x|$ (it equals $x$ for large positive $x$):

$$
\lim_{x\to\infty}\Big(x+3-2\sqrt{x^2\big(1+\tfrac{3}{x^2}\big)}\Big)=\lim_{x\to\infty}x\Big(1+\frac3x-2\sqrt{1+\frac3{x^2}}\Big)=\infty\cdot(1+0-2)=-\infty .
$$

$$
\lim_{x\to-\infty}\Big(x+3-2\sqrt{x^2+3}\Big)=-\infty+3-2\sqrt{\infty}=-\infty .
$$

Both ends go to $-\infty$, so no horizontal asymptote.

> [!note] Oblique asymptotes (mine, the key does not look for them)
> The root behaves like $|x|$ for large $|x|$, so $f$ is nearly linear at each end.
> - As $x\to+\infty$: slope $\lim\frac{f(x)}{x}=1-2=-1$, and $\lim\big(f(x)+x\big)=\lim\big(2x+3-2\sqrt{x^2+3}\big)=3$. The [[Oblique Asymptote]] is **$y=-x+3$**.
> - As $x\to-\infty$: slope $\lim\frac{f(x)}{x}=1+2=3$, and $\lim\big(f(x)-3x\big)=3$. The oblique asymptote is **$y=3x+3$**.
>
> The graph below shows both as grey lines.

**4. Increase and decrease.**

$$
f'(x)=1-2\cdot\frac12(x^2+3)^{-1/2}\cdot2x=1-\frac{2x}{\sqrt{x^2+3}} .
$$

$f'$ is defined for all $x$, so the critical points come from $f'=0$:

$$
1=\frac{2x}{\sqrt{x^2+3}}\ \Longrightarrow\ \sqrt{x^2+3}=2x\ \Longrightarrow\ x^2+3=4x^2\ \Longrightarrow\ x^2=1 .
$$

So $x=1$ or $x=-1$. Check by substitution: $x=1$ gives $\sqrt4=2$, true. $x=-1$ gives $2=-2$, false (squaring invented it). Only **$x=1$**.

| $x$ | $x<1$ | $x>1$ |
|---|---|---|
| $f'(x)$ | $+$ | $-$ |
| $f(x)$ | increasing | decreasing |

Sign check: $f'(0)=1>0$; $f'(3)=1-\frac{6}{\sqrt{12}}\approx1-1.73<0$.

- **Increasing** for $x<1$; **decreasing** for $x>1$.

**5. Relative extremum.** $f'$ changes from $+$ to $-$ at $x=1$: a relative **maximum** at **$(1,\,0)$**.

**6. Concavity.** Quotient rule on $f'(x)=1-\dfrac{2x}{\sqrt{x^2+3}}$:

$$
f''(x)=-\frac{2\sqrt{x^2+3}-2x\cdot\dfrac{x}{\sqrt{x^2+3}}}{x^2+3}
=-\frac{\dfrac{2(x^2+3)-2x^2}{\sqrt{x^2+3}}}{x^2+3}
=-\frac{6}{(x^2+3)\sqrt{x^2+3}}<0 .
$$

The numerator is the constant $6$ and the denominator is always positive, so $f''<0$ for **all $x$**.

- **Concave down** on the whole line.

**7. Inflection points.** $f''$ never changes sign (it never equals zero), so there are **no inflection points**.

**8. Graph.**

![[PP08_q1_concave_down_root_function.png]]

> [!tip] Intuition
> One smooth hill with its top exactly on the $x$-axis at $(1,0)$, falling away toward $-\infty$ on both sides along the two oblique lines.

### b. Increase and decrease of $g$ when $g'(x)=f(x+1)$

The graph of $g'(x)=f(x+1)$ is the graph of $f$ **translated one unit to the left** (see [[Lec_03-Composition, Transformations, Exponentials and Limits]]). The maximum of $f$ at $(1,0)$ moves to $(0,0)$.

Since the maximum value of $f$ is $0$, we have $f(x+1)\le0$ for every $x$, with equality only at $x=0$. So $g'$ is negative everywhere except one point where it is zero.

> [!success] Answer
> **$g$ is decreasing for all $x$.** There are no intervals of increase. (The derivative touches $0$ only at $x=0$, which does not stop $g$ decreasing.)

---

## Q2 — $f(x)=|x-6|\cdot\sqrt{x}$ (35 points)

**Question.** Given $f(x)=|x-6|\cdot\sqrt{x}$.

**a.** Find the domain of the function.

**b.** Write $f(x)$ as a compound function.

**c.** Use the definition of the derivative to find if the function is differentiable at $x=6$, and if a tangent line exists at that point.

**d.** Find $f'(x)$ and the intervals of increase and decrease for $f(x)$.

**e.** Find $\displaystyle\lim_{x\to-\infty}\frac{f(x^2)}{1-2x^3}$.

### a. Domain

The absolute value is defined everywhere; the root needs $x\ge0$.

> [!success] Answer
> **Domain: $x\ge0$.**

### b. As a compound (piecewise) function

The key reads "compound function" as a [[Piecewise Function]]: split the absolute value at $x=6$, where $x-6$ changes sign.

$$
f(x)=\begin{cases}(x-6)\sqrt{x} & x\ge 6\\[4pt] (6-x)\sqrt{x} & 0\le x<6\end{cases}
$$

### c. Differentiability at $x=6$

Here $f(6)=0$. Use the [[Definition of the Derivative]] with the matching branch on each side.

**Right ($h\to0^+$, branch $(x-6)\sqrt x$):**

$$
\lim_{h\to0^+}\frac{(6+h-6)\sqrt{6+h}}{h}=\lim_{h\to0^+}\sqrt{6+h}=\sqrt6 .
$$

**Left ($h\to0^-$, branch $(6-x)\sqrt x$):**

$$
\lim_{h\to0^-}\frac{\big(6-(6+h)\big)\sqrt{6+h}}{h}=\lim_{h\to0^-}\frac{-h\sqrt{6+h}}{h}=-\sqrt6 .
$$

The two one-sided slopes are different finite numbers.

> [!success] Answer
> **Not differentiable at $x=6$, and no tangent line there**: a corner, with slopes $-\sqrt6$ on the left and $+\sqrt6$ on the right.

### d. The derivative and intervals of increase and decrease

Expand each branch into powers and differentiate:

$$
f(x)=\begin{cases}x^{3/2}-6x^{1/2} & x\ge6\\[4pt] 6x^{1/2}-x^{3/2} & 0\le x\le6\end{cases}
$$

$$
f'(x)=\begin{cases}\dfrac32\sqrt x-\dfrac{3}{\sqrt x}=\dfrac{3x-6}{2\sqrt x} & x>6\\[10pt] \dfrac{3}{\sqrt x}-\dfrac32\sqrt x=\dfrac{6-3x}{2\sqrt x} & 0<x<6\end{cases}
$$

- $f'$ is **not defined at $x=6$** (the corner) and **at $x=0$** (the edge of the domain, where $\frac{1}{\sqrt x}$ blows up).
- $f'(x)=0$: on $0<x<6$, $6-3x=0$ gives **$x=2$**. On $x>6$, $3x-6=0$ gives $x=2$, which is not in that range, so no zero there.

The denominator $2\sqrt x$ is positive, so the sign comes from the numerator:

| $x$ | $0<x<2$ | $2<x<6$ | $x>6$ |
|---|---|---|---|
| $f'(x)$ | $+$ | $-$ | $+$ |
| $f(x)$ | increasing | decreasing | increasing |

> [!success] Answer
> **Increasing** on $0<x<2$ and on $x>6$; **decreasing** on $2<x<6$.

### e. A limit at $-\infty$

Replace $x$ by $x^2$ in the formula. For large $|x|$ we have $x^2>6$, so $|x^2-6|=x^2-6$, and $\sqrt{x^2}=|x|$. As $x\to-\infty$, $|x|=-x$:

$$
\lim_{x\to-\infty}\frac{f(x^2)}{1-2x^3}=\lim_{x\to-\infty}\frac{(x^2-6)\sqrt{x^2}}{1-2x^3}=\lim_{x\to-\infty}\frac{(x^2-6)(-x)}{1-2x^3}=\lim_{x\to-\infty}\frac{-x^3+6x}{1-2x^3} .
$$

Divide top and bottom by $x^3$:

$$
\lim_{x\to-\infty}\frac{-1+\frac{6}{x^2}}{\frac{1}{x^3}-2}=\frac{-1}{-2}=\frac12 .
$$

> [!success] Answer
> **$\dfrac12$.** The sign step ($\sqrt{x^2}=-x$ for negative $x$) is the whole point of this part.

---

## Q3 — Limits and a face-cream profit problem (35 points)

**Question.**

**a.** Find the limits:

1. $\displaystyle\lim_{x\to\infty}\left(1+\frac{1}{e^x+1}\right)^{3^x+1}$
2. $\displaystyle\lim_{x\to-3}\frac{2x+6}{x+1+\sqrt{x^2-5}}$

**b.** A manufacturer of cosmetics found that its price demand equation for a face cream is $p=1201-40\sqrt{x}-3x$, where $p$ (\$) is the price per gram of the cream and $x$ is the demand for the cream in kg (note that $1\ \text{kg}=1000$ grams).

1. Find $p'(16)$ and explain the result.
2. Assuming each kg of cream costs \$1000 to produce:
   - a. Find the profit function $P(x)$.
   - b. How many kg of cream should be sold in order to maximise the profit?
   - c. Find intervals of concavity for $P(x)$ (if they exist) and explain the results in terms of the marginal function.

### a.1) A $1^\infty$ limit whose exponent wins

The base tends to $1$ and the exponent to $\infty$, an [[Euler Limit]] form with $u=\frac{1}{e^x+1}\to0$:

$$
\lim_{x\to\infty}\left[\Big(1+\frac{1}{e^x+1}\Big)^{e^x+1}\right]^{\frac{3^x+1}{e^x+1}}
=\lim_{x\to\infty}e^{\frac{3^x+1}{e^x+1}} .
$$

The inner bracket tends to $e$. Now the exponent:

$$
\frac{3^x+1}{e^x+1}=\frac{3^x\big(1+\frac1{3^x}\big)}{e^x\big(1+\frac1{e^x}\big)}\ \sim\ \Big(\frac3e\Big)^x\longrightarrow\infty ,
$$

because $\frac3e\approx1.10>1$. So the limit is $e^{\infty}$.

> [!success] Answer
> **$\infty$.** (Unlike the usual Euler limit, the exponent grows faster than $e^x+1$, so the power does not settle at $e$.)

### a.2) A conjugate limit

Direct substitution at $x=-3$: numerator $-6+6=0$; denominator $-2+\sqrt{9-5}=-2+2=0$. So $\frac00$. Multiply by the conjugate of the denominator, $(x+1)-\sqrt{x^2-5}$:

$$
\frac{2x+6}{(x+1)+\sqrt{x^2-5}}\cdot\frac{(x+1)-\sqrt{x^2-5}}{(x+1)-\sqrt{x^2-5}}
=\frac{(2x+6)\big((x+1)-\sqrt{x^2-5}\big)}{(x+1)^2-(x^2-5)} .
$$

The denominator simplifies: $(x+1)^2-(x^2-5)=x^2+2x+1-x^2+5=2x+6$. Cancel $2x+6$:

$$
\lim_{x\to-3}\Big((x+1)-\sqrt{x^2-5}\Big)=-3+1-\sqrt{9-5}=-2-2=-4 .
$$

> [!success] Answer
> **$-4$.**

### b.1) The marginal price

$$
p'(x)=-40\cdot\frac12x^{-1/2}-3=-\frac{20}{\sqrt x}-3,
\qquad
p'(16)=-\frac{20}{4}-3=-8 .
$$

> [!success] Answer
> **$p'(16)=-8$.** When demand is 16 kg, selling **one more kg** lowers the price by approximately **\$8 per gram**.

### b.2a) Profit function

Revenue in dollars is price per gram times the number of grams: $p\cdot(1000x)$. The cost is $1000x$ dollars. So

$$
P(x)=p\cdot x\cdot1000-1000x=1000\Big[1201x-40x^{3/2}-3x^2-x\Big],
$$

$$
P(x)=1000\Big[-3x^2-40x^{3/2}+1200x\Big].
$$

> [!success] Answer
> **$P(x)=1000\big(-3x^2-40x^{3/2}+1200x\big)$** (dollars, $x$ in kg).

### b.2b) Profit-maximising quantity

$$
P'(x)=1000\Big[-6x-60x^{1/2}+1200\Big]=0 .
$$

Divide by $-6$ and substitute $t=\sqrt x$ (so $x=t^2$):

$$
x+10\sqrt x-200=0\ \Longrightarrow\ t^2+10t-200=0\ \Longrightarrow\ (t-10)(t+20)=0 .
$$

So $t=10$ or $t=-20$. A root cannot be negative, so reject $t=-20$. Then $\sqrt x=10$, so $x=100$.

Second-derivative check:

$$
P''(x)=1000\Big(-6-30x^{-1/2}\Big)=1000\Big(-6-\frac{30}{\sqrt x}\Big)<0 .
$$

> [!success] Answer
> **$x=100$ kg** gives the maximum profit.

> [!tip] A number to anchor it (mine, not in the key)
> $P(100)=1000\,[-3(100)^2-40(100)^{3/2}+1200(100)]=1000\,[-30000-40000+120000]=50{,}000{,}000$ dollars.

### b.2c) Concavity and the marginal function

From the second derivative above: $-6-\frac{30}{\sqrt x}<0$ for every $x>0$.

> [!success] Answer
> $P$ is **concave down** (a cap) for all $x$ in its domain, with no inflection point. Meaning: $P'(x)$, the **marginal profit**, is **decreasing** for all $x$. Each extra kg adds less profit than the one before, and past $x=100$ it makes profit fall.
