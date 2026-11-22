---
title: "Graph from Data, Asymptotes & Concavity, Absolute Value Differentiability (2014 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed A 2014"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-from-data
  - asymptotes
  - concavity
  - absolute-value
  - differentiability
  - true-false
aliases:
  - Maths A Moed A 2014
  - PP11 Maths A
subject: maths-for-economists-a
in_scope: true
---

# Graph from Data, Asymptotes & Concavity, Absolute Value Differentiability (2014 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed A 2014**, 3 hours, 4 questions of 25 points each. Answer all questions, justify every claim, non-graphing calculator only, no other material.
> Builds on: [[Lec_05-Infinite Limits]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> Answers follow **the key (author unclear)**: a handwritten, unsigned solution (5 pages). Terse working is expanded into steps. Where the key says only "we can see from the graph", the reasoning is filled in and marked as an expansion. Nothing in the key is changed.

> [!warning] Parts with no key
> None. Every part of every question has a handwritten answer.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Reading the properties of a function from given data (limits, one extreme point) and sketching a graph that fits: [[Domain]], [[Vertical Asymptote]] and [[Horizontal Asymptote]], [[Tangent Line]] at an extremum, [[Inflection Point]] | [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[PS_11-Concavity, Inflection Points & Asymptotes]] |
| Q2 | Asymptotes with limits, then [[Concavity Intervals]] of a sum of negative powers with a [[Sign Table]] | [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]] |
| Q3 | [[Absolute Value Function]] as a [[Piecewise Function]]: [[Continuity]], [[Definition of the Derivative]] at the seam, tangent line | [[Lec_07-The Derivative, Differentiability and Rules]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]] |
| Q4 | Four true or false claims about tangent lines, extrema, inflection points, derivative sign and discontinuity | [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |

> [!tip] Intuition: the one move behind each question
> - Q1: every given fact becomes a feature of the sketch. "Continuous for all $x$" kills vertical asymptotes, "only extreme point" means the function is monotone on each side of it.
> - Q2: negative powers blow up at $0$ and vanish at infinity. Put everything over one denominator and the signs read themselves.
> - Q3: split $|x|$ into its two rules, then compare the two one-sided slopes at the seam.
> - Q4: for each claim, either draw the picture that makes it true or find one counterexample.

---

## Q1 — Reading a function from given data (25 points)

**Question.** $f(x)$ is continuous for all $x$ and differentiable for all $x$. It is also given that:

- $f(0)=0$
- its only extreme point is $(1,2)_{\max}$
- $\displaystyle\lim_{x\to\infty}f(x)=-1.5$ and $\displaystyle\lim_{x\to-\infty}f(x)=-\infty$

a. What is the function's domain? Explain.
b. Find asymptotes (if there are any). Explain.
c. Find the equation of the tangent line to the function at its extreme point. Explain.
d. Draw a graph of $f(x)$ that fits the given data.
e. How many $x$ intercepts does the function have?
f. Is it possible that $f(x)$ does not have an inflection point? Explain.

### a. Domain

> [!success] Answer
> The domain is **all real numbers**.

A function that is continuous at every $x$ must be defined at every $x$: continuity at a point needs the value to exist there. So no real number is missing from the domain.

### b. Asymptotes

> [!success] Answer
> **No vertical asymptote.** **Horizontal asymptote $y=-1.5$ on the right only.**

- **Vertical:** a [[Vertical Asymptote]] at $x=a$ needs $f$ to blow up near $a$, which is impossible when $f$ is continuous at every $x$ (the limit at each point equals a finite value $f(a)$).
- **Horizontal:** $\displaystyle\lim_{x\to\infty}f(x)=-1.5$ gives the [[Horizontal Asymptote]] $y=-1.5$. On the left the limit is $-\infty$, not a number, so there is no horizontal asymptote on that side.

### c. Tangent line at the extreme point

> [!success] Answer
>
> $$
> y=2
> $$

$f$ is differentiable everywhere, so at the extreme point $(1,2)$ the derivative cannot be undefined. At a relative extremum where the derivative exists it must be zero, so $f'(1)=0$: the tangent is **horizontal** through $(1,2)$, i.e. $y=2$.

### d. A graph that fits the data

![[PP11_q1_function_sketch.png]]

*Illustrative sketch (one of many that fit). Only the labelled features come from the question.*

The graph passes through $(0,0)$, rises smoothly to a peak at $(1,2)$ with a flat tangent, then falls and flattens out toward the dashed line $y=-1.5$ on the right. On the far left it keeps heading down to $-\infty$.

### e. Number of $x$ intercepts

> [!success] Answer
> Exactly **two**.

**Expansion of the key's "from the graph we can see".** Because $(1,2)$ is the *only* extreme point, $f$ cannot turn around anywhere else, so it is monotone on each side of $x=1$:

- **Left of $1$:** $f$ increases from $-\infty$ up to $2$. It crosses the $x$-axis exactly once, and we are told where: $f(0)=0$.
- **Right of $1$:** $f$ decreases from $2$ toward $-1.5$. It starts above $0$ and ends below $0$, so it crosses the axis exactly once more.

Total: $x=0$ and one positive $x$ beyond $1$.

### f. Must there be an inflection point?

> [!success] Answer
> **No, it is not possible to have none.** There must be an [[Inflection Point]].

- Near the maximum $(1,2)$ the function is **concave down** ($\cap$).
- Far to the right, $f$ approaches its horizontal asymptote from above while falling and flattening. The slope rises toward $0$, so the function is **concave up** ($\cup$) there.

Since $f$ is continuous and its concavity switches from $\cap$ to $\cup$, the second derivative changes sign somewhere between: that point is an inflection point.

---

## Q2 — Asymptotes and concavity of $f(x)=\dfrac{2}{3x^{6}}-\dfrac{1}{4x^{4}}$ (25 points)

**Question.** Given $f(x)=\dfrac{2}{3x^{6}}-\dfrac{1}{4x^{4}}$.

a. Find all asymptotes using the appropriate limits.
b. Find concavity intervals.

### a. Asymptotes

> [!success] Answer
> **Horizontal asymptote $y=0$** (both directions). **Vertical asymptote $x=0$.**

**Horizontal.** Both terms have a power of $x$ in the denominator, so each tends to $0$:

$$
\lim_{x\to\infty}\left(\frac{2}{3x^{6}}-\frac{1}{4x^{4}}\right)=\frac{2}{\infty}-\frac{1}{\infty}=0-0=0,
\qquad
\lim_{x\to-\infty}\left(\frac{2}{3x^{6}}-\frac{1}{4x^{4}}\right)=0 .
$$

So $y=0$ is a horizontal asymptote at both ends.

**Vertical.** The function is continuous everywhere except $x=0$, the only value outside the domain, so that is the only candidate. Put everything over the common denominator $12x^{6}$:

$$
\frac{2}{3x^{6}}-\frac{1}{4x^{4}}=\frac{8-3x^{2}}{12x^{6}} .
$$

Near $0$ the numerator tends to $8$ and the denominator to $0^{+}$ (an even power is positive on both sides of $0$):

$$
\lim_{x\to0}\frac{8-3x^{2}}{12x^{6}}=\frac{8}{0^{+}}=+\infty .
$$

The limit is infinite, so **$x=0$ is a vertical asymptote**.

### b. Concavity intervals

Rewrite with negative powers and differentiate twice:

$$
f(x)=\tfrac23x^{-6}-\tfrac14x^{-4},
\qquad
f'(x)=-4x^{-7}+x^{-5},
\qquad
f''(x)=28x^{-8}-5x^{-6}=\frac{28}{x^{8}}-\frac{5}{x^{6}}=\frac{28-5x^{2}}{x^{8}} .
$$

Where is $f''$ zero or undefined?

- $f''(x)=0$ when $28-5x^{2}=0$, i.e. $x=\pm\sqrt{\tfrac{28}{5}}\approx\pm2.37$.
- $f''$ is undefined at $x=0$, which is **not in the domain**.

The denominator $x^{8}$ is positive for $x\neq0$, so the sign of $f''$ is the sign of $28-5x^{2}$.

| $x$ | $x<-2.37$ | $-2.37<x<0$ | $0<x<2.37$ | $x>2.37$ |
|---|---|---|---|---|
| $f''(x)$ | $-$ | $+$ | $+$ | $-$ |
| $f(x)$ | concave down $\cap$ | concave up $\cup$ | concave up $\cup$ | concave down $\cap$ |

> [!success] Answer
> - **Concave up ($\cup$):** $-2.37<x<0$ and $0<x<2.37$.
> - **Concave down ($\cap$):** $x<-2.37$ and $x>2.37$.

> [!tip] Intuition
> The concavity changes sign at $x=\pm2.37$, and both values are in the domain, so those are the inflection points. The sign also stays the same across $x=0$ (and $0$ is excluded anyway), so $x=0$ is not one. Excluded values split intervals but can never be inflection points. This is the same function as Exercise 3 in [[Lec_10-Increase and Decrease Intervals and Relative Extrema]].

---

## Q3 — Differentiability of $f(x)=x^{2}-2|x|$ (25 points)

**Question.** Given $f(x)=x^{2}-2\cdot|x|$.

a. Find the function's intervals of continuity.
b. Write $f(x)$ as a compound function.
c. Use the definition of the derivative to find if $f(x)$ is differentiable at $x=0$.
d. Find the equation of the tangent line to the graph of $f(x)$ at $x=2$.

### a. Intervals of continuity

> [!success] Answer
> $f$ is continuous for **all $x$**.

As written, $f$ is built from $x^{2}$ and $|x|$, which are continuous everywhere, and it is defined for every $x$. The key's argument: the function is not written as a [[Piecewise Function]], so its interval of continuity equals its domain, all $x$.

### b. As a compound (piecewise) function

For $x\ge0$, $|x|=x$. For $x<0$, $|x|=-x$. Therefore

$$
f(x)=\begin{cases}x^{2}-2x & x\ge0\\[2pt] x^{2}+2x & x<0\end{cases}
$$

Both rules give $f(0)=0$, so the pieces meet at the seam.

### c. Differentiability at $x=0$

> [!success] Answer
> **Not differentiable at $x=0$.** The one-sided slopes are $-2$ and $2$.

Use the [[Definition of the Derivative]] with $f(0)=0$:

$$
f'(0)=\lim_{h\to0}\frac{f(0+h)-f(0)}{h}.
$$

- **From the right** ($h\to0^{+}$, use the $x\ge0$ rule):

$$
\lim_{h\to0^{+}}\frac{h^{2}-2h-0}{h}=\lim_{h\to0^{+}}\frac{h(h-2)}{h}=\lim_{h\to0^{+}}(h-2)=-2 .
$$

- **From the left** ($h\to0^{-}$, use the $x<0$ rule):

$$
\lim_{h\to0^{-}}\frac{h^{2}+2h-0}{h}=\lim_{h\to0^{-}}\frac{h(h+2)}{h}=\lim_{h\to0^{-}}(h+2)=2 .
$$

The two [[One-Sided Limit]]s differ ($-2\neq2$), so the limit does not exist: $f$ is **not differentiable** at $0$. The graph has a corner there.

### d. Tangent line at $x=2$

> [!success] Answer
>
> $$
> y=2x-4
> $$

At $x=2$ we are on the $x>0$ piece, so $f'(x)=2x-2$ and the slope is $f'(2)=4-2=2$. The point: $f(2)=2^{2}-2\cdot2=0$, so the tangent passes through $(2,0)$.

$$
y-0=2(x-2)\quad\Longrightarrow\quad y=2x-4 .
$$

---

## Q4 — True or false (25 points)

**Question.** Answer true or false and explain briefly (using words, mathematics, a graph or an example).

### a. "Every tangent line at a point where the function concaves down lies above the graph of that function."

> [!success] Verdict
> **True.**

Concave down ($\cap$) means the slope is decreasing, so the curve bends away *below* its tangent on both sides of the point of tangency. Draw a hill: the tangent touches the top of a small arc and the arc stays under it. The key's justification is "simply draw it".

### b. "A relative extreme point of a function cannot be an inflection point of that function."

> [!success] Verdict
> **False.**

The key says the course has seen several examples where an extreme point is also an inflection point. Its sketch shows a peak where the curve is concave down on the left and concave up on the right.

An inflection point needs only two things: $f$ is continuous there and $f''$ changes sign. Nothing forbids that point from also being a maximum.

> [!tip] Intuition (my own concrete example, not from the key)
> Take $f(x)=-x^{2}$ for $x\le0$ and $f(x)=x^{2}-x$ for $x>0$. It is continuous at $0$ with $f(0)=0$. Left of $0$ it is concave down ($f''=-2$) and right of $0$ concave up ($f''=2$), so $x=0$ is an inflection point. Both pieces are $\le0$ near $0$ (the right piece is negative for $0<x<1$), so $(0,0)$ is also a relative maximum.

### c. "There cannot be an interval at which the derivative of a function is both positive and decreasing."

> [!success] Verdict
> **False.**

The key: the two ideas are unrelated. A positive derivative only says the function is **increasing**. A decreasing derivative ($f''<0$) only says the function is **concave down** ($\cap$). Both can hold at once: a function that rises while flattening out, as in the key's small sketch of an increasing, concave-down curve.

> [!tip] Intuition
> Example: $f(x)=\sqrt{x}$ on $x>0$ has $f'(x)=\dfrac{1}{2\sqrt{x}}>0$, and this derivative is decreasing as $x$ grows. So $f'$ is positive and decreasing on the whole interval.

### d. "The only places at which a compound function could be discontinuous are its seam points (the $x$ values at which the function 'splits')."

> [!success] Verdict
> **False.**

The key: besides the seam points, any compound function is surely discontinuous at any $x$ value at which it is **undefined**.

> [!tip] Intuition
> Example: $f(x)=x-3$ for $x<2$ and $f(x)=\dfrac{1}{x-3}$ for $x\ge2$. At the seam $x=2$ both rules give $-1$, so it is continuous there. But $x=3$ is not a seam and not in the domain: the function has a vertical asymptote there, so it is discontinuous at a non-seam point.
