---
title: "Rational Function Investigation, Reading f Prime, Limits & Hat Profit (2009 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed A 2009"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - asymptotes
  - derivative-graph
  - chain-rule
  - limits
  - definition-of-derivative
  - profit-maximisation
aliases:
  - Math I Moed A 2009
  - PP01 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Rational Function Investigation, Reading f Prime, Limits & Hat Profit (2009 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed A 2009**, 3 hours, three printed questions (35 + 30 + 35 points), non-graphing calculator only.
> Key concepts: [[Function Investigation]], [[Vertical Asymptote]], [[Horizontal Asymptote]], [[Oblique Asymptote]], [[Relative Extremum]], [[Inflection Point]], [[Concavity]], [[Continuity]], [[Chain Rule]]
> Builds on: [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]]
> Practice: [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]]

> [!info] Source and provenance
> Answers follow **the key (author unclear)**, a typed three-page solution titled "Solution for 2009A". It is unsigned, so it is not labelled official. The key's working is terse; the steps below fill the gaps without changing any of its answers.
> **Question count.** The cover sheet has four score boxes ("Question 1" to "Question 4"), but the paper prints only **three** questions (35 + 30 + 35 = 100 points) and the key answers three. Nothing is missing from the PDF: the fourth box is a leftover from the cover template.

> [!success] AI-solved questions
> **None.** Every part has an answer in the key. The callouts marked `[!tip] Extra` are my own additions (they never replace a key answer).

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Simplify a root expression, when two functions are identical (domain), full investigation of $\dfrac{x^2}{x-2}$, increase and concavity together | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]] |
| Q2 | Everything about $f$ read from the **graph of $f'$**, then a quotient-rule problem with given values | [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |
| Q3 | Derivative from the definition, a conjugate limit, and a demand and profit problem with a parameter | [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_04-Limits and Continuity]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]] |

> [!tip] Intuition: the one move behind each question
> - Q1: rewrite the roots as powers, cancel, and remember what the cancellation hid (the domain).
> - Q2: the graph of $f'$ tells you the sign of $f'$ (increase or decrease), where it crosses zero (extrema) and whether $f'$ itself rises or falls (concavity).
> - Q3: a profit parabola peaks where the slope is zero, so the parameter $\alpha$ is found by forcing $P'(120)=0$.

---

## Q1 — Investigate $f(x)=\dfrac{\sqrt{x^5}}{\sqrt{x^3}-2\sqrt{x}}$ (35 points)

**Question.** Let $f(x)=\dfrac{\sqrt{x^5}}{\sqrt{x^3}-2\sqrt{x}}$.

- a. What is the condition for $f(x)$ to be identical to $g(x)=\dfrac{x^2}{x-2}$?
- b. Investigate the function by these criteria: Domain; Axis intersections; Asymptotes (use limits in your calculations); Intervals of increase and decrease; Points of relative extremum; Intervals of concavity (upward or downward); Inflection points. Draw the function's graph.
- c. Find an interval on which $f(x)$ decreases but the rate of change of $f(x)$ increases.

### a. When is $f$ identical to $g$?

Write every root as a power, then factor out the smallest power of $x$ in the denominator:

$$
f(x)=\frac{x^{2.5}}{x^{1.5}-2x^{0.5}}=\frac{x^{0.5}\cdot x^{2}}{x^{0.5}(x-2)}=\frac{x^{2}}{x-2}.
$$

The formulas agree, but two functions are identical only if their **domains** also agree. The original $f$ needs $x>0$ (a root of $x$ is taken, and at $x=0$ the denominator is $0$) and $x\neq 2$ (the denominator is $x^{0.5}(x-2)$).

> [!success] Answer from the key (author unclear)
> $f=g$ as long as the domain of $g$ is cut down to the domain of $f$: **$0<x<2$ and $x>2$**. Without that restriction $g$ also accepts negative $x$, so it is a different function.

### b. Investigation of $g(x)=\dfrac{x^2}{x-2}$ on $0<x<2,\ x>2$

**Domain.** $0<x<2$ and $x>2$ (the condition from part a).

**Axis intersections.** $g(x)=0$ only at $x=0$, which is **not** in the domain, so there is no real intersection. The curve approaches the origin $(0,0)$ from the right; see the hollow dot below. There is no $y$-intercept because $x=0$ is excluded.

**Asymptotes.**

Vertical, at the excluded point $x=2$:

$$
\lim_{x\to 2^+}\frac{x^2}{x-2}=\frac{4}{0^+}=\infty,\qquad \lim_{x\to 2^-}\frac{x^2}{x-2}=\frac{4}{0^-}=-\infty,
$$

so **$x=2$ is a vertical asymptote**.

The other excluded point is $x=0$, and there the value is finite:

$$
\lim_{x\to 0^+}\frac{x^2}{x-2}=\frac{0}{-2}=0,
$$

so there is no asymptote at $x=0$; the graph just has a **hollow dot** at $(0,0)$.

Horizontal:

$$
\lim_{x\to\infty}\frac{x^2}{x-2}=\lim_{x\to\infty}\frac{x^2}{x\left(1-\frac{2}{x}\right)}=\lim_{x\to\infty}\frac{x}{1-\frac{2}{x}}=\infty,
$$

so there is **no horizontal asymptote**. (Only $x\to+\infty$ is relevant, since the domain has no negative $x$.)

> [!tip] Extra: the oblique asymptote the key does not mention
> Polynomial division gives $\dfrac{x^2}{x-2}=x+2+\dfrac{4}{x-2}$, so the curve hugs the line $y=x+2$ for large $x$. The key stops at "no horizontal", but [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] teaches oblique asymptotes, so $y=x+2$ is worth stating.

**Increase and decrease.** Quotient rule:

$$
g'(x)=\frac{2x(x-2)-x^2}{(x-2)^2}=\frac{x^2-4x}{(x-2)^2}=\frac{x(x-4)}{(x-2)^2}.
$$

The denominator is positive, so only $x(x-4)$ matters. On the domain $x>0$ the sign is that of $x-4$. The only critical point in the domain is $x=4$.

| Interval | $0<x<2$ | $2<x<4$ | $x>4$ |
|---|---|---|---|
| sign of $g'$ | $-$ | $-$ | $+$ |
| $g$ | decreasing | decreasing | increasing |

**Relative extremum.** $g'$ changes from $-$ to $+$ at $x=4$, so there is a **relative minimum at $(4,8)$** since $g(4)=\frac{16}{2}=8$. There is no relative maximum.

**Concavity.** Quotient rule again:

$$
g''(x)=\frac{(2x-4)(x-2)^2-(x^2-4x)\cdot 2(x-2)}{(x-2)^4}=\frac{2(x-2)^2-2(x^2-4x)}{(x-2)^3}=\frac{8}{(x-2)^3}.
$$

So $g''<0$ for $0<x<2$ (concave down) and $g''>0$ for $x>2$ (concave up). The sign change happens at $x=2$, which is **not** in the domain, so there are **no inflection points**.

![[PP01_q1_investigation_graph.png]]

> [!success] Answer from the key (author unclear)
> - Domain $0<x<2,\ x>2$; no axis intersection (the origin is a hollow dot).
> - Vertical asymptote $x=2$; no horizontal asymptote.
> - Decreasing on $(0,2)$ and $(2,4)$; increasing on $(4,\infty)$; **relative minimum $(4,8)$**.
> - Concave down on $(0,2)$; concave up on $(2,\infty)$; **no inflection**.

### c. $f$ decreasing while its rate of change increases

"Decreases" means $f'<0$. "The rate of change of $f$ increases" means $f'$ is increasing, which means $f''>0$.

- $f'<0$ on $(0,2)$ and $(2,4)$.
- $f''>0$ on $x>2$.

Both hold together exactly on $2<x<4$.

> [!success] Answer from the key (author unclear)
> **$2<x<4$.** On $(0,2)$ the function also decreases, but there $f''<0$ (the decrease speeds up), so that interval does not qualify.

---

## Q2 — Everything about $f$ from the graph of $f'$ (30 points)

**Question.** $f(x)$ is a function which satisfies $f(3)=0$. The question shows the graph of the function's **derivative** $y=f'(x)$: a straight line through the origin with slope $1$ up to the peak $(3,3)$, then an arc falling through $(6,0)$ and continuing below the axis. The sheet notes: $f'(3)=3$, $f'(0)=0$, $f'(6)=0$.

- a. Find the interval of continuity of $f(x)$.
- b. Find intervals of increase and decrease for $f(x)$.
- c. Find relative extremum (only $x$ values) for $f(x)$.
- d. Find intervals of concavity for $f(x)$.
- e. Given $g(x)=\dfrac{f(2x)}{\sqrt{f(x)+1}}$, and $g'(3)=-9$, find $f(6)$.

> [!note] The graph is not reproduced here
> The sketch is a hand-drawn picture, so it is described in words above rather than copied. Everything below uses only the printed facts: the line $f'(x)=x$ on the left, the peak $f'(3)=3$, and zeros of $f'$ at $0$ and $6$.

### a. Continuity

The graph of $f'$ is defined for every $x$, so $f'(x)$ exists everywhere. A function that is **differentiable everywhere is continuous everywhere**.

> [!success] Answer from the key (author unclear)
> $f$ is continuous on all of $\mathbb{R}$, i.e. on $(-\infty,\infty)$.

### b. Increase and decrease

The sign of $f'$ is read straight off the graph of $f'$: above the axis means $f'>0$.

> [!success] Answer from the key (author unclear)
> - $f'(x)>0$ for $0<x<6$, so **$f$ increases on $(0,6)$**.
> - $f'(x)<0$ for $x<0$ and for $x>6$, so **$f$ decreases on $(-\infty,0)$ and on $(6,\infty)$**.

### c. Relative extremum

A relative extremum of $f$ is where $f'=0$ **and changes sign**.

> [!success] Answer from the key (author unclear)
> - $x=6$: $f'$ goes from $+$ to $-$, so $f$ has a **relative maximum at $x=6$**.
> - $x=0$: $f'$ goes from $-$ to $+$, so $f$ has a **relative minimum at $x=0$**.

### d. Concavity

Concavity of $f$ is the direction of $f'$: if $f'$ is rising, $f''>0$ and $f$ is concave up.

> [!success] Answer from the key (author unclear)
> - For $x<3$, $f'$ is increasing, so **$f$ is concave up on $(-\infty,3)$**.
> - For $x>3$, $f'$ is decreasing, so **$f$ is concave down on $(3,\infty)$**.
>
> The concavity switches at $x=3$, so $x=3$ is an inflection point of $f$ (this last sentence is my reading; the key only gives the two intervals).

### e. Finding $f(6)$ from $g'(3)=-9$

Differentiate $g(x)=\dfrac{f(2x)}{\sqrt{f(x)+1}}$ with the quotient rule. The top function $f(2x)$ has derivative $2f'(2x)$ (chain rule), and the bottom function $\sqrt{f(x)+1}$ has derivative $\dfrac{f'(x)}{2\sqrt{f(x)+1}}$:

$$
g'(x)=\frac{2f'(2x)\sqrt{f(x)+1}-f(2x)\cdot\dfrac{f'(x)}{2\sqrt{f(x)+1}}}{f(x)+1}.
$$

Now plug in $x=3$ and use the three given values $f(3)=0$, $f'(3)=3$, $f'(6)=0$:

$$
-9=g'(3)=\frac{2\cdot f'(6)\sqrt{f(3)+1}-f(6)\cdot\dfrac{f'(3)}{2\sqrt{f(3)+1}}}{f(3)+1}=\frac{2\cdot 0\cdot 1-f(6)\cdot\dfrac{3}{2}}{1}=-\frac{3}{2}f(6).
$$

Hence $f(6)=\dfrac{-9}{-3/2}=6$.

> [!success] Answer from the key (author unclear)
> **$f(6)=6$.**

---

## Q3 — Derivative from the definition, a limit and the hat factory (35 points)

### a. Derivative of $f(x)=\dfrac{x}{x+1}$ at $x=2$ using the definition

**Question.** Use the definition of the derivative to find the derivative of $f(x)=\dfrac{x}{x+1}$ at $x=2$.

$$
f'(2)=\lim_{h\to 0}\frac{f(2+h)-f(2)}{h}=\lim_{h\to 0}\frac{\dfrac{2+h}{3+h}-\dfrac{2}{3}}{h}.
$$

Put the top on a common denominator:

$$
\frac{3(2+h)-2(3+h)}{3(3+h)}=\frac{h}{3(3+h)},
$$

so

$$
f'(2)=\lim_{h\to 0}\frac{h}{3h(3+h)}=\lim_{h\to 0}\frac{1}{3(3+h)}=\frac{1}{9}.
$$

> [!success] Answer from the key (author unclear)
> **$f'(2)=\dfrac{1}{9}$.** Check with the rules: $f'(x)=\dfrac{1}{(x+1)^2}$, so $f'(2)=\dfrac{1}{9}$.

### b. The limit

**Question.** Find $\displaystyle\lim_{x\to-2}\frac{3x^2+7x+2}{\sqrt{x^2+3}-\sqrt{7}}$.

At $x=-2$ both top and bottom are $0$ ($\sqrt{4+3}-\sqrt7=0$), a $\frac00$ form. Factor the top and multiply by the **conjugate** of the bottom:

$$
\frac{3x^2+7x+2}{\sqrt{x^2+3}-\sqrt7}\cdot\frac{\sqrt{x^2+3}+\sqrt7}{\sqrt{x^2+3}+\sqrt7}=\frac{(x+2)(3x+1)\left(\sqrt{x^2+3}+\sqrt7\right)}{x^2+3-7}.
$$

Since $x^2-4=(x-2)(x+2)$, the factor $x+2$ cancels:

$$
\lim_{x\to-2}\frac{(3x+1)\left(\sqrt{x^2+3}+\sqrt7\right)}{x-2}=\frac{(-5)\cdot 2\sqrt7}{-4}=\frac{5\sqrt7}{2}.
$$

> [!success] Answer from the key (author unclear)
> **$\dfrac{5\sqrt7}{2}$.**

### c. Demand for hats and profit

**Question.** The daily demand for hats (when the price of a single hat is $p$ dollars) is $x(p)=1600-8p$.

- a) Find $x'(100)$ and explain the meaning of the result.
- b) If every hat costs $\alpha$ dollars to produce, find the daily profit function as a function of the price per hat (use $\alpha$ in your answer).
- c) Find $\alpha$ so that the maximal profit is obtained when the price per hat is $120.

**a) Meaning of $x'(100)$.** $x'(p)=-8$ for every $p$, so $x'(100)=-8$.

> [!success] Answer from the key (author unclear)
> $x'(100)=-8$. When the price per hat is 100 dollars, raising it by 1 dollar will **decrease the demand by 8 hats** per day.

**b) Profit.** Profit is revenue minus cost. Revenue is quantity times price, cost is quantity times unit cost $\alpha$:

$$
P(p)=R(p)-C(p)=xp-x\alpha=(1600-8p)(p-\alpha)=-8p^2+1600p+8\alpha p-1600\alpha.
$$

**c) Choosing $\alpha$.** Differentiate and force the maximum at $p=120$:

$$
P'(p)=-16p+1600+8\alpha,\qquad 0=P'(120)=-16(120)+1600+8\alpha=-320+8\alpha,
$$

so $8\alpha=320$ and $\alpha=40$. Since $P''(p)=-16<0$, the stationary point is a maximum.

> [!success] Answer from the key (author unclear)
> $P(p)=-8p^2+1600p+8\alpha p-1600\alpha$ and **$\alpha=40$**.

> [!tip] Intuition
> The profit-maximising price of a linear demand sits halfway between the choke price and the cost: $p^*=100+\alpha/2$. Setting it to $120$ gives $\alpha=40$, the same answer as the derivative route.

---

## Summary of answers

| Part | Answer |
|---|---|
| Q1a | Same function if the domain of $g$ is restricted to $0<x<2,\ x>2$ |
| Q1b | VA $x=2$, no HA; min $(4,8)$; concave down $(0,2)$, up $(2,\infty)$; no inflection |
| Q1c | $2<x<4$ |
| Q2a to d | Continuous on $\mathbb{R}$; increasing $(0,6)$, decreasing $(-\infty,0)$ and $(6,\infty)$; max at $x=6$, min at $x=0$; concave up $x<3$, down $x>3$ |
| Q2e | $f(6)=6$ |
| Q3a | $f'(2)=\tfrac19$ |
| Q3b | $\tfrac{5\sqrt7}{2}$ |
| Q3c | $x'(100)=-8$; $P(p)=-8p^2+(1600+8\alpha)p-1600\alpha$; $\alpha=40$ |

## Related notes

- [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
- [[Lec_07-The Derivative, Differentiability and Rules]]
- [[Lec_09-Marginal Functions and Tangent Lines of Composites]]
- [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]
