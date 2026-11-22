---
title: "Profit Maximisation, Rational Function Investigation, Exponential Asymptotes & Vertical Tangents (2017 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2017 Moed A"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - implicit-function
  - horizontal-tangent
  - linear-demand
  - profit-maximisation
  - function-investigation
  - asymptotes
  - removable-discontinuity
  - vertical-tangent
  - definition-of-derivative
aliases:
  - Math I 2017 Moed A
  - PP17 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Profit Maximisation, Rational Function Investigation, Exponential Asymptotes & Vertical Tangents (2017 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2017 (Moed A)**, Hever Schulberg. 3 hours, 4 questions (20, 25, 30, 25 points), non-graphing calculator and a formula sheet allowed.
> Builds on: [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_02-Absolute Values, Business Functions and Exponential Equations]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The source PDF has the exam on pages 2 to 3 and a **handwritten, unsigned key (author unclear)** on pages 3 to 7 covering every part. Answers below follow that key, expanded into steps.

> [!warning] Points where the key needs a check
> - **Q2c:** the key writes "$p'(30)$" where it means $R'(30)$. The value $-100$ is correct.
> - **Q3g:** the key does not give a separate answer for "is there a hollow dot". The hole $(-1,\tfrac13)$ is found in part a.
> - **Q3h:** the key does not state that $g$ has the same hole, shifted to $(-1,\tfrac{11}{6})$; this is added below as an AI check.
> - No question is fully AI-solved. Anything extra is marked as AI-written where it appears.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Is an equation a function; horizontal tangent lines of a rational function | [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_07-The Derivative, Differentiability and Rules]] |
| Q2 | Linear demand, profit, break-even, maximum profit, derivative of revenue with respect to price | [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q3 | Full investigation of a rational function with a hole: asymptotes, monotonicity, concavity, intercepts, graph, then the effect of adding a constant | [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |
| Q4 | Exponential asymptotes, continuity interval with an absolute value, differentiability from the definition (vertical tangent) | [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |

> [!tip] Intuition: the one move behind each question
> - Q1: a function gives **one** output per input. A horizontal tangent is just $f'(x)=0$.
> - Q2: price and quantity are linked by the demand line. Write everything in terms of $x$, then profit is a downward parabola.
> - Q3: **factor and cancel first**. A cancelled factor is a hole, an uncancelled zero of the denominator is a vertical asymptote.
> - Q4: a vertical tangent is a derivative that blows up while the function itself stays continuous.

---

## Q1 — Two unrelated parts (20 points)

### a. Does $y^2+xy-6=0$ represent a function?

**Question.** Does the equation $y^2+xy-6=0$ represent a function when the domain is all $x$? If so, explain why; if not, can you find a reduced domain so that it becomes a function?

Solve for $y$ with the quadratic formula (it is a quadratic in $y$ with $a=1$, $b=x$, $c=-6$):

$$
y_{1,2}=\frac{-x\pm\sqrt{x^2+24}}{2}
$$

The expression under the root, $x^2+24$, is **always positive**, so for **every** $x$ there are **two different values** of $y$.

> [!success] Answer (the key)
> **Not a function**: each $x$ gives two values of $y$. A reduced domain cannot help, because the radicand is positive for every $x$: every $x$ in any domain would still have two $y$ values.

> [!tip] Intuition
> Restricting the domain only removes $x$ values. To get a function out of this equation you would have to restrict the **output** (for example keep only the "$+$" branch), which is a different move from changing the domain.

### b. Horizontal tangent lines of $f(x)=\dfrac{x^3}{(2-3x)^2}$

**Question.** Does the function have horizontal tangent lines? If not, explain why; if so, find their equations.

A horizontal tangent line is at a point where $f'(x)=0$. Quotient rule:

$$
f'(x)=\frac{3x^2(2-3x)^2-x^3\cdot2(2-3x)\cdot(-3)}{(2-3x)^4}
$$

Factor out $3x^2(2-3x)$ on top and cancel one power of $(2-3x)$:

$$
f'(x)=\frac{3x^2(2-3x)\left[(2-3x)+2x\right]}{(2-3x)^4}=\frac{3x^2\,(2-x)}{(2-3x)^3}
$$

$f'(x)=0$ when the numerator is zero: $x=0$ or $x=2$. Both are in the domain (the domain excludes only $x=\tfrac23$).

- $x=0$: $f(0)=0$, point $(0,0)$, tangent line $y=0$.
- $x=2$: $f(2)=\dfrac{8}{(2-6)^2}=\dfrac{8}{16}=\dfrac12$, point $\left(2,\tfrac12\right)$, tangent line $y=\tfrac12$.

> [!success] Answer (the key)
> Yes, two horizontal tangent lines: $\boxed{y=0}$ at $(0,0)$ and $\boxed{y=\tfrac12}$ at $\left(2,\tfrac12\right)$.

---

## Q2 — Linear demand and profit (25 points)

**Question.** A factory's price-demand equation is linear: at price $\$10$ the monthly demand was $400$ units, and at $\$45$ it was $50$ units. $x$ is monthly demand and $p$ the price per unit in $\$$. Monthly cost of production: $C(x)=3{,}000+10x$.

a. For which values of $x$ is the factory profitable?
b. Find the value of $x$ for which profit is maximised.
c. $R(p)$ is the monthly revenue as a function of $p$. Find $R'(p)$ at $p=30$ and explain the meaning.

### Setting up the demand line

Slope: $\dfrac{400-50}{10-45}=\dfrac{350}{-35}=-10$. Point-slope form with $(p,x)=(10,400)$:

$$
x-400=-10(p-10)\;\Rightarrow\; x=-10p+500\;\Rightarrow\; p=50-\frac{x}{10}
$$

Revenue and profit as functions of $x$:

$$
R(x)=x\cdot p=x\left(50-\frac{x}{10}\right)=-\frac1{10}x^2+50x
$$

$$
\Pi(x)=R(x)-C(x)=-\frac1{10}x^2+50x-3000-10x=-\frac1{10}x^2+40x-3000
$$

### a. Where is the factory profitable?

Solve $\Pi(x)>0$. Multiply by $-10$ (flipping the inequality) to get $x^2-400x+30000<0$. Its roots:

$$
x=\frac{400\pm\sqrt{160000-120000}}{2}=\frac{400\pm200}{2}\;\Rightarrow\; x=100,\; x=300
$$

$\Pi$ is a downward parabola, so it is positive **between** its roots.

> [!success] Answer (the key)
> The factory is profitable for $100<x<300$.

### b. Profit maximum

$$
\Pi'(x)=-\frac1{10}\cdot2x+40=0\;\Rightarrow\; x=200
$$

> [!success] Answer (the key)
> Profit is maximised at $x=200$ units (the vertex of the parabola, midway between the roots $100$ and $300$; $\Pi(200)=-4000+8000-3000=1000$).

### c. $R'(p)$ at $p=30$

Now revenue is written as a function of **price**. Use $x=500-10p$:

$$
R(p)=x\cdot p=(500-10p)\,p=-10p^2+500p
$$

$$
R'(p)=-20p+500\qquad R'(30)=-600+500=-100
$$

> [!success] Answer (the key)
> $R'(30)=-100$. When the price is $\$30$, raising the price by $\$1$ (to $\$31$) **lowers monthly revenue by about $\$100$**.

> [!tip] Intuition
> At $p=30$ the price is already above the revenue-maximising price ($R'(p)=0$ at $p=25$), so a higher price loses more in sales than it gains per unit.

---

## Q3 — Full investigation of $f(x)=\dfrac{x^2-1}{x^2-4x-5}$ (30 points)

**Question.** Given $f(x)=\dfrac{x^2-1}{x^2-4x-5}$.

a. Find asymptotes (if any) using the appropriate limits.
b. Find increase and decrease intervals.
c. Find concavity intervals.
d. Does the function have a vertical tangent line? If so, find its equation; if not, explain why.
e. Find axes intercept points.
f. Draw the graph.
g. Does the function have a discontinuity point ("hollow dot")? If so, find its coordinates.
h. Solve parts a to d again for $g(x)=\dfrac{x^2-1+1.5\,(x^2-4x-5)}{x^2-4x-5}$.

### Step 0: factor first

$x^2-1=(x-1)(x+1)$ and $x^2-4x-5=(x-5)(x+1)$. So

$$
f(x)=\frac{(x-1)(x+1)}{(x-5)(x+1)}=\frac{x-1}{x-5},\qquad x\neq5,\;x\neq-1
$$

The domain excludes both $x=5$ and $x=-1$, **even though the $(x+1)$ cancels**. That matters for every part below.

### a. Asymptotes (and part g, the hole)

**Horizontal.** Divide top and bottom by $x^2$:

$$
\lim_{x\to\pm\infty}\frac{x^2-1}{x^2-4x-5}=\lim_{x\to\pm\infty}\frac{x^2\left(1-\frac1{x^2}\right)}{x^2\left(1-\frac4x-\frac5{x^2}\right)}=1
$$

so $y=1$ is a horizontal asymptote on both sides.

**At $x=-1$.** The factor cancels, so the limit is finite:

$$
\lim_{x\to-1}\frac{(x-1)(x+1)}{(x+1)(x-5)}=\frac{-1-1}{-1-5}=\frac{-2}{-6}=\frac13
$$

This is a **hole** (discontinuity point) at $\left(-1,\tfrac13\right)$, not an asymptote.

**At $x=5$.** The factor $(x-5)$ stays in the denominator:

$$
\lim_{x\to5^+}\frac{x-1}{x-5}=\frac{4}{0^+}=+\infty\qquad\lim_{x\to5^-}\frac{x-1}{x-5}=\frac{4}{0^-}=-\infty
$$

> [!success] Answer (the key)
> - Horizontal asymptote: $y=1$.
> - Vertical asymptote: $x=5$.
> - **Part g:** yes, a hollow dot at $\left(-1,\tfrac13\right)$.

### b. Increase and decrease intervals

$$
f'(x)=\frac{(x-5)-(x-1)}{(x-5)^2}=\frac{-4}{(x-5)^2}
$$

The numerator is $-4$ and the denominator is a square, so $f'(x)<0$ everywhere on the domain.

> [!success] Answer (the key)
> $f$ **decreases** for all $x\neq5,-1$ and **never increases**.

### c. Concavity intervals

$$
f'(x)=-4(x-5)^{-2}\;\Rightarrow\; f''(x)=8(x-5)^{-3}=\frac{8}{(x-5)^3}
$$

The sign of $f''$ is the sign of $(x-5)$:

| Interval | $f''$ | Shape |
|---|---|---|
| $x<5$ (and $x\neq-1$) | $-$ | concave down ($\cap$) |
| $x>5$ | $+$ | concave up ($\cup$) |

> [!success] Answer (the key)
> Concave up ($\cup$): $x>5$. Concave down ($\cap$): $x<5$, $x\neq-1$.

### d. Vertical tangent line?

A vertical tangent needs a point where $f$ is defined and continuous but $f'$ is infinite. $f'(x)=\dfrac{-4}{(x-5)^2}$ is infinite only at $x=5$, and $f$ is **undefined** there (that is the vertical asymptote).

> [!success] Answer (the key)
> **No vertical tangent line.** The only $x$ where $f'$ is infinite is $x=5$, where $f$ is undefined.

### e. Axis intercepts

- $y$-axis: $f(0)=\dfrac{-1}{-5}=\dfrac15$, point $\left(0,\tfrac15\right)$.
- $x$-axis: $f(x)=0\Rightarrow x-1=0\Rightarrow x=1$, point $(1,0)$. ($x=-1$ would also make the original numerator zero, but it is not in the domain.)

> [!success] Answer (the key)
> $\left(0,\tfrac15\right)$ and $(1,0)$.

### f. The graph

![[PP17_q3_graph_of_f.png]]

> [!note] How to read the sketch
> Falling on both branches (part b). Left branch concave down and approaching $y=1$ from below as $x\to-\infty$, passing through the hollow dot, $(0,\tfrac15)$ and $(1,0)$, then plunging to $-\infty$ at $x=5^-$. Right branch comes down from $+\infty$ at $x=5^+$, concave up, towards $y=1$ from above. The figure is drawn from the formula $f(x)=\tfrac{x-1}{x-5}$ and the values found above.

### h. The function $g$

$$
g(x)=\frac{x^2-1}{x^2-4x-5}+\frac{1.5\,(x^2-4x-5)}{x^2-4x-5}=f(x)+1.5
$$

> [!success] Answer (the key)
> $g$ is $f$ shifted **vertically up by $1.5$**. So:
> - (a) the vertical asymptote is still $x=5$, and the horizontal asymptote moves to $y=1+1.5=\boxed{2.5}$.
> - (b), (c), (d): **no change**. A vertical shift does not change $g'=f'$ or $g''=f''$, so the monotonicity, concavity and absence of a vertical tangent are the same as for $f$.

> [!note] AI-written addition (not in the key)
> The hole also moves up: $g$ is undefined at $x=-1$ and the missing point is $\left(-1,\tfrac13+\tfrac32\right)=\left(-1,\tfrac{11}{6}\right)$.

---

## Q4 — Three unrelated parts (25 points)

### a. Asymptotes of $f(x)=\dfrac{2e^{2x}+1}{e^{2x+1}-e^2}$

**Vertical.** The denominator is zero when $e^{2x+1}=e^2$, that is $2x+1=2$, $x=\tfrac12$. At that point the numerator is $2e+1\neq0$, so check the one-sided limits:

$$
\lim_{x\to\frac12^+}f(x)=\frac{2e+1}{0^+}=+\infty\qquad\lim_{x\to\frac12^-}f(x)=\frac{2e+1}{0^-}=-\infty
$$

($e^{2x+1}-e^2$ is positive just right of $\tfrac12$ because $e^{2x+1}$ is increasing.)

**Horizontal at $+\infty$.** Divide top and bottom by $e^{2x}$, using $e^{2x+1}=e\cdot e^{2x}$:

$$
\lim_{x\to\infty}\frac{2e^{2x}+1}{e\,e^{2x}-e^2}=\lim_{x\to\infty}\frac{2+e^{-2x}}{e-e^2e^{-2x}}=\frac{2+0}{e-0}=\frac2e
$$

**Horizontal at $-\infty$.** Here $e^{2x}\to0$ and $e^{2x+1}\to0$:

$$
\lim_{x\to-\infty}\frac{2e^{2x}+1}{e^{2x+1}-e^2}=\frac{0+1}{0-e^2}=-\frac1{e^2}
$$

> [!success] Answer (the key)
> - Vertical asymptote: $x=\tfrac12$.
> - Horizontal asymptotes: $y=\dfrac2e$ (right) and $y=-\dfrac1{e^2}$ (left).

### b. Interval of continuity of $h(x)=\dfrac{\left|x^2+3x\right|}{x}$

$|x^2+3x|$ is continuous everywhere (absolute value of a polynomial), and dividing by $x$ keeps continuity wherever $x\neq0$. The key's wording is that it is not a piecewise ("compound") function, so its interval of continuity is the same as its domain.

> [!success] Answer (the key)
> $h$ is continuous on its domain, $\boxed{x\neq0}$, i.e. $(-\infty,0)\cup(0,\infty)$.

### c. Is $g(x)=\sqrt[3]{x-1}$ differentiable at $x=1$? Tangent line?

Use the definition of the derivative with $g(1)=0$:

$$
g'(1)=\lim_{h\to0}\frac{g(1+h)-g(1)}{h}=\lim_{h\to0}\frac{\sqrt[3]{h}-0}{h}=\lim_{h\to0}\frac{h^{1/3}}{h}=\lim_{h\to0}h^{-2/3}
$$

$$
\lim_{h\to0}\frac{1}{\sqrt[3]{h^2}}=\frac1{0^+}=+\infty
$$

$h^2>0$ for both signs of $h$, so the limit is $+\infty$ from **both** sides.

> [!success] Answer (the key)
> $g$ is **not differentiable** at $x=1$ (the limit is infinite, not a number), but $g$ is continuous there and the slope is $+\infty$, so it **has a vertical tangent line**: $\boxed{x=1}$.

> [!tip] Intuition
> The cube-root curve crosses the point $(1,0)$ going almost straight up. The slope blows up to $+\infty$, so the tangent is the vertical line through the point. Differentiable means the slope is a finite number; having a tangent line allows a vertical one.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result |
> |---|---|
> | Q1a | Not a function; no domain restriction fixes it |
> | Q1b | $y=0$ at $(0,0)$ and $y=\tfrac12$ at $(2,\tfrac12)$ |
> | Q2 | Demand $x=-10p+500$; profitable $100<x<300$; max at $x=200$; $R'(30)=-100$ |
> | Q3 | $f=\tfrac{x-1}{x-5}$; HA $y=1$, VA $x=5$, hole $(-1,\tfrac13)$; always decreasing; $\cup$ for $x>5$; no vertical tangent; intercepts $(0,\tfrac15)$, $(1,0)$; $g=f+1.5$ so HA $y=2.5$ |
> | Q4a | VA $x=\tfrac12$; HA $y=\tfrac2e$ and $y=-\tfrac1{e^2}$ |
> | Q4b | Continuous on $x\neq0$ |
> | Q4c | Not differentiable; vertical tangent $x=1$ |
