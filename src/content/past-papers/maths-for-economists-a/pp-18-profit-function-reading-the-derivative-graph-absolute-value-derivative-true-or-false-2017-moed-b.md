---
title: "Profit Function, Reading the Derivative Graph, Absolute Value Derivative & True or False (2017 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2017 Moed B"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - marginal-profit
  - derivative-graph
  - chain-rule
  - quotient-rule
  - absolute-value
  - differentiability
  - tangent-line
  - true-or-false
  - concavity
aliases:
  - Math I 2017 Moed B
  - PP18 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Profit Function, Reading the Derivative Graph, Absolute Value Derivative & True or False (2017 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2017 (Moed B)**, Hever Schulberg. 3 hours, 4 questions, 25 points each.
> Builds on: [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_05-Infinite Limits]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_08-Chain Rule, Exponential and Log Derivatives and Integrals]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source: what the key covers
> The key is **handwritten and typed, unsigned (author unclear)**, source PDF pages 4 to 8. It covers **all four questions in full**, but as a mix:
> - **Q1** (typed): headed "taken from exam 2009B". I checked it against the 2009 Moed B exam and its solution: the question is the same as part 3c there (same function and same numbers), and the solution here matches the 2009 B solution line for line.
> - **Q2** (typed): headed "taken from exam 2009A". Same check against 2009 Moed A Question 2: identical graph, same $f(3)=0$, same $g$, same $g'(3)=-9$; the answer matches the 2009 A solution.
> - **Q3 and Q4** (handwritten): headed "taken from exam 2014A" (the 2014 Moed A paper; its question text matches). The key gives its own working here, so that is what is followed.
>
> Answers below follow the key, expanded into steps.

> [!warning] Points where the key needs a check
> - **Q4b:** the key says "we've seen a lot of examples" and shows a rough sketch of a point that is both a maximum and an inflection point. The concrete example below is **AI-written** (marked there) to make the claim checkable.
> - **Q4d:** the key's reasoning is one sentence; the concrete example is **AI-written**.
> - Nothing else is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Profit function with a root: increasing, positive, marginal profit, profit per unit as $x\to\infty$ | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_05-Infinite Limits]] |
| Q2 | From the **graph of $f'$** to continuity, monotonicity, extrema and concavity of $f$; then a quotient and chain rule at a point | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_07-The Derivative, Differentiability and Rules]] |
| Q3 | $x^2-2|x|$: continuity, piecewise form, differentiability at $0$ from the definition, tangent line | [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_07-The Derivative, Differentiability and Rules]] |
| Q4 | Four true or false statements about tangents, extrema, inflection, derivatives and piecewise discontinuities | [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_04-Limits and Continuity]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the sign of $P'$ is monotonicity; the sign of $P''$ is whether **marginal** profit rises or falls.
> - Q2: read $f'$ from the picture. Above the axis means $f$ increases; the **slope of $f'$** is the concavity of $f$.
> - Q3: at a corner the two one-sided slopes disagree, so no derivative.
> - Q4: for true or false, either draw a picture that shows it, or find one counterexample.

---

## Q1 — Weekly profit of a factory (25 points)

**Question.** The weekly profit (in thousands of $) from producing and selling $x$ units ($x\ge2$) is

$$
P(x)=10x-\frac{20}{\sqrt{x^2+1}}
$$

a. Find the intervals (in the given domain) where profit is increasing and where it is decreasing.
b. Find the weekly profit when 2 units are produced and sold, and use the result to explain why the profit is always positive in the given domain.
c. Find the intervals where **marginal profit** is increasing and where it is decreasing.
d. Find $\displaystyle\lim_{x\to\infty}\frac{P(x)}{x}$, the profit per unit as the number of units goes to infinity.

### a. Increasing or decreasing

Write $P(x)=10x-20(x^2+1)^{-1/2}$:

$$
P'(x)=10-20\left(-\frac12\right)(x^2+1)^{-3/2}\cdot2x=10+\frac{20x}{\sqrt{(x^2+1)^3}}
$$

For $x\ge2$ the fraction is positive, so $P'(x)>10>0$.

> [!success] Answer (the key)
> The profit is **increasing for all $x$** in the domain; there is no decreasing interval.

### b. Profit at $x=2$ and why it is always positive

$$
P(2)=20-\frac{20}{\sqrt5}\approx20-8.944=11.055
$$

> [!success] Answer (the key)
> $P(2)\approx11.055$ thousand dollars, that is **$11{,}055$**, which is positive. Because $P$ is increasing everywhere on the domain ($x\ge2$), it never drops below its value at the start of the domain, so **the profit is always positive**.

### c. Marginal profit

Marginal profit is $P'(x)$, so look at the sign of $P''$. Product rule on $20x\,(x^2+1)^{-3/2}$:

$$
P''(x)=20\left[(x^2+1)^{-3/2}-x\cdot\frac32(x^2+1)^{-5/2}\cdot2x\right]=20\left[\frac{1}{\sqrt{(x^2+1)^3}}-\frac{3x^2}{\sqrt{(x^2+1)^5}}\right]
$$

Put over a common denominator:

$$
P''(x)=20\cdot\frac{(x^2+1)-3x^2}{\sqrt{(x^2+1)^5}}=20\cdot\frac{1-2x^2}{\sqrt{(x^2+1)^5}}
$$

For $x\ge2$, $1-2x^2<0$ and the denominator is positive.

> [!success] Answer (the key)
> $P''(x)<0$ on the whole domain $x\ge2$, so **marginal profit is decreasing** everywhere (never increasing).

### d. Profit per unit at infinity

$$
\frac{P(x)}{x}=10-\frac{20}{x\sqrt{x^2+1}}
$$

The fraction has a denominator that grows without bound, so it tends to $0$:

$$
\lim_{x\to\infty}\frac{P(x)}{x}=\lim_{x\to\infty}\left(10-\frac{20}{x\sqrt{x^2+1}}\right)=10
$$

> [!success] Answer (the key)
> The profit per unit converges to $10$ thousand dollars, that is **$10{,}000$ per unit**, at infinity.

> [!tip] Intuition
> The "$-20/\sqrt{x^2+1}$" term fades away as output grows, so each extra unit eventually earns about the full $10$ thousand. Total profit keeps rising ($P'>0$), but its growth rate falls towards $10$ from above ($P''<0$).

---

## Q2 — Reading the graph of $f'$ (25 points)

**Question.** $f$ satisfies $f(3)=0$. The graph of its **derivative** $f'(x)$ is given. Reading it:

- For $x<3$, $f'$ is a **straight line through the origin** with slope $1$, rising from the lower left (it is negative for $x<0$, zero at $x=0$ and positive for $0<x<3$), reaching height $3$ at $x=3$.
- At $x=3$ it turns into a curve that **bends downward**: for $x>3$, $f'$ falls from $3$, crossing the axis at $x=6$ and carrying on below the axis.
- Given: $f'(3)=3$, $f'(6)=0$, $f'(0)=0$.

a. Find the interval of continuity of $f$.
b. Find intervals of increase and decrease for $f$.
c. Find relative extremum (only $x$ values) for $f$.
d. Find intervals of concavity for $f$.
e. Given $g(x)=\dfrac{f(2x)}{\sqrt{f(x)+1}}$ and $g'(3)=-9$, find $f(6)$.

### a. Continuity

> [!success] Answer (the key)
> $f'$ exists for every $x$, so $f$ is differentiable for all $x$, and a differentiable function must be continuous. **$f$ is continuous for all $x$.**

### b. Increase and decrease

$f$ increases where $f'>0$ and decreases where $f'<0$. From the picture, $f'>0$ exactly for $0<x<6$ and $f'<0$ for $x<0$ and $x>6$.

> [!success] Answer (the key)
> - Increasing: $0<x<6$.
> - Decreasing: $x<0$ and $x>6$.

### c. Relative extrema

- At $x=0$, $f'$ goes from negative to positive, so $f$ goes from decreasing to increasing: **relative minimum**.
- At $x=6$, $f'$ goes from positive to negative: **relative maximum**.

> [!success] Answer (the key)
> $x_{\min}=0$ and $x_{\max}=6$.

### d. Concavity

Concavity of $f$ is the monotonicity of $f'$. $f'$ is **increasing** for $x<3$ (the straight line) and **decreasing** for $x>3$ (after the peak at height $3$).

> [!success] Answer (the key)
> - $x<3$: $f'$ is increasing, so $f$ is **concave up**.
> - $x>3$: $f'$ is decreasing, so $f$ is **concave down**.

> [!tip] Intuition
> The peak of $f'$ at $x=3$ is where the slope of $f$ is steepest, which is an **inflection point** of $f$ at $x=3$ (concavity changes there). It is not asked, but it follows from the answer to d. There is no extremum at $x=3$ because $f'(3)=3\neq0$.

### e. Finding $f(6)$ from $g'(3)=-9$

Quotient rule on $g(x)=\dfrac{f(2x)}{\sqrt{f(x)+1}}$. The numerator differentiates by the chain rule to $2f'(2x)$, and the denominator $\sqrt{f(x)+1}$ differentiates to $\dfrac{f'(x)}{2\sqrt{f(x)+1}}$:

$$
g'(x)=\frac{2f'(2x)\sqrt{f(x)+1}-f(2x)\cdot\dfrac{1}{2\sqrt{f(x)+1}}\cdot f'(x)}{f(x)+1}
$$

Now put $x=3$ and use $f(3)=0$, $f'(3)=3$, $f'(6)=0$:

$$
-9=g'(3)=\frac{2\cdot f'(6)\cdot\sqrt{0+1}-f(6)\cdot\dfrac{1}{2\sqrt{0+1}}\cdot3}{0+1}=\frac{0-\tfrac32f(6)}{1}=-\frac32f(6)
$$

Solving $-\tfrac32f(6)=-9$:

> [!success] Answer (the key)
>
> $$
> f(6)=6
> $$

---

## Q3 — $f(x)=x^2-2|x|$ (25 points)

**Question.** Given $f(x)=x^2-2\cdot|x|$.

a. Find the function's intervals of continuity.
b. Write $f(x)$ as a compound (piecewise) function.
c. Use the **definition of the derivative** to decide whether $f$ is differentiable at $x=0$.
d. Find the equation of the tangent line to the graph at $x=2$.

### a. Continuity

> [!success] Answer (the key)
> $x^2$ and $|x|$ are both continuous for every $x$, so $f$ has no seam to worry about: its interval of continuity is the same as its domain, **all $x$**.

### b. Piecewise form

$|x|=x$ for $x\ge0$ and $|x|=-x$ for $x<0$:

$$
f(x)=\begin{cases}x^2-2x & x\ge0\\[2pt] x^2+2x & x<0\end{cases}
$$

### c. Differentiability at $x=0$ from the definition

$f(0)=0$. One-sided limits of the difference quotient $\dfrac{f(0+h)-f(0)}{h}$:

$$
h\to0^+:\quad\lim\frac{h^2-2h-0}{h}=\lim\frac{h(h-2)}{h}=-2
$$

$$
h\to0^-:\quad\lim\frac{h^2+2h-0}{h}=\lim\frac{h(h+2)}{h}=2
$$

> [!success] Answer (the key)
> The one-sided limits are $-2$ and $2$, which differ, so **$f$ is not differentiable at $x=0$**.

> [!tip] Intuition
> $f$ has a **corner** at the origin: slope $+2$ approaching from the left, slope $-2$ leaving to the right. $f$ is continuous there but has no single tangent line.

### d. Tangent line at $x=2$

At $x=2$ we are on the branch $x^2-2x$ (as $2>0$):

$$
f'(x)=\begin{cases}2x-2 & x>0\\ 2x+2 & x<0\end{cases}\qquad\Rightarrow\qquad f'(2)=4-2=2
$$

$$
f(2)=2^2-2\cdot2=0
$$

Point-slope form: $y-0=2(x-2)$.

> [!success] Answer (the key)
>
> $$
> y=2x-4
> $$

![[PP18_q3_abs_corner_and_tangent.png]]

> [!note] How to read the sketch
> Drawn from the piecewise formula in part b. The two valleys are at $x=\pm1$ (value $-1$), the corner at the origin points upward, and the dashed tangent touches the right branch at $(2,0)$ with slope $2$.

---

## Q4 — True or false (25 points)

**Question.** Answer **true or false** and explain briefly (using words, mathematics, a graph or an example).

a. Every tangent line at a point where the function concaves down lies **above** the graph of that function.
b. A relative extreme point of a function **cannot** be an inflection point of that function.
c. There **cannot** be an interval at which the **derivative** of a function is both **positive** and **decreasing**.
d. The only places at which a compound function could be discontinuous are its seam points (the $x$ values at which the function "splits").

### a. Tangent line above the graph where concave down

> [!success] Verdict (the key): **True**
> Draw it: where the function is concave down ($\cap$), it bends **away below** its tangent line, so the tangent line lies above the graph.

> [!tip] Intuition
> Concave up ($\cup$) is a bowl, whose tangent lines lie **below** the bowl. Concave down is a cap, whose tangents lie **above** it. (This holds on the interval where the function is concave down.)

### b. Extreme point cannot be an inflection point

> [!success] Verdict (the key): **Not true** (false)
> We have seen several examples in the course in which an extreme point was also an inflection point. The key's sketch shows a curve rising concave down to a peak and then falling with the opposite bend, the peak marked as both "inflection" and "max".

A worked example from the course is the piecewise function in [[Lec_11-Concavity, Inflection Points and Asymptotes]] section 3, where $(0,0)$ is both a relative minimum and an inflection point.

> [!note] AI-written example (not in the key)
> Take $f(x)=\begin{cases}-x^2 & x\le0\\ x^2-2x & x>0\end{cases}$. It is continuous at $0$, with $f(0)=0$.
>
> - It rises on the left ($f'=-2x>0$ for $x<0$) and falls on the right ($f'=2x-2<0$ for $0<x<1$), so $x=0$ is a **relative maximum**.
> - $f''=-2<0$ for $x<0$ and $f''=2>0$ for $x>0$, so the concavity **changes** at $0$.
>
> Under the course definition (continuous point where concavity changes, no need for $f''(c)=0$), $(0,0)$ is an inflection point. This works because $f$ has a corner at $0$ (no tangent line there); the course example has a vertical tangent instead, but in both cases the function is not smooth at the point.

### c. Derivative both positive and decreasing

> [!success] Verdict (the key): **Not true** (false)
> There is no connection between the two. $f'>0$ only says $f$ **increases**. $f'$ decreasing ($f''<0$) only says $f$ is **concave down**. Both can happen at once: a function that rises while bending over, like the key's sketch of an increasing concave-down curve.

> [!note] Concrete example (AI-written, not in the key)
> $f(x)=\sqrt x$ for $x>0$: $f'(x)=\dfrac1{2\sqrt x}>0$ and $f'$ is decreasing, since $f''=-\tfrac14x^{-3/2}<0$.

### d. Discontinuities only at seam points

> [!success] Verdict (the key): **Not true** (false)
> Besides the seam points, a compound function is also discontinuous at **any $x$ where it is undefined**.

> [!note] Concrete example (AI-written, not in the key)
> $f(x)=\begin{cases}\dfrac1{x-2} & x<3\\[4pt] x & x\ge3\end{cases}$ is undefined and unbounded at $x=2$, which is **not** the seam ($x=3$). So it is discontinuous at a point other than the seam.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result |
> |---|---|
> | Q1a-b | $P$ always increasing; $P(2)\approx11.055$ so always positive |
> | Q1c-d | Marginal profit decreasing ($P''<0$); $P(x)/x\to10$ (that is $\$10{,}000$ per unit) |
> | Q2a-d | $f$ continuous; up on $0<x<6$, down elsewhere; min at $0$, max at $6$; concave up $x<3$, down $x>3$ |
> | Q2e | $f(6)=6$ |
> | Q3 | Continuous everywhere; not differentiable at $0$ (slopes $\mp2$); tangent at $2$: $y=2x-4$ |
> | Q4 | a. True; b. False; c. False; d. False |
