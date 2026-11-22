---
title: "Piecewise Root Function, Cosmetics Profit, Bell Curve Investigation & Limits (2018 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2018 Moed A"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - piecewise-functions
  - continuity
  - definition-of-derivative
  - chain-rule
  - tangent-line
  - demand-function
  - profit-maximisation
  - function-investigation
  - limits
  - composition
aliases:
  - Math I 2018 Moed A
  - PP19 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Piecewise Root Function, Cosmetics Profit, Bell Curve Investigation & Limits (2018 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2018 (Moed A)**, Hever Schulberg. 4 questions (28, 28, 28, 16 points).
> Builds on: [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_03-Composition, Transformations and Exponential Graphs]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The exam is on page 2 of the source PDF (page 1 is the cover). The **handwritten, unsigned key (author unclear)** is on pages 3 to 8 and covers every part, but the pages are **out of order**: Q3 is first (pages 3 and 4), then Q1 (pages 5 and 6), then Q2 (pages 6 and 7), then Q4 (page 8). Answers below follow the key, expanded into steps, and are presented in exam order.
> **Pointers in the key:** Q2 is "copied from exam 2012B". That exam is not in the course as a paper, but its solution file (`solution_2012B.pdf`, Question 3b) is, and I checked it: same demand equation, same numbers, and the same answers ($p'(16)=-8$, $x=100$). Q4c is "copied from homework exercise 3", which matches [[PS_03-Composition, Transformations and Exponential Graphs]] Question 2.

> [!warning] Points where the key needs a check
> - The key is correct throughout as far as I checked. Only wording is loose: in Q1a it justifies "domain is all $x$" by the $\sqrt{x-1}$ branch alone, but the cube-root branch is defined for every real $x$ as well.
> - Small AI checks (exact form in Q3f) are marked where they appear. No part is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Piecewise function with a cube root and a square root: continuity at the seam, derivative from the definition, monotonicity of the rate of change, chain-rule tangent line | [[Lec_04-Limits and Continuity]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |
| Q2 | Demand equation with a root: marginal price, profit in kilograms vs grams, maximise, concavity as "marginal profit decreases" | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]] |
| Q3 | Full investigation of $f(x)=\dfrac1{\sqrt{x^2+2}}$: continuity, asymptotes, monotonicity, concavity, graph, tangent where the slope is steepest | [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |
| Q4 | Limits at $\pm\infty$ (a root and a power-to-$x$), and composition of functions | [[Lec_05-Infinite Limits]], [[Lec_03-Composition, Transformations, Exponentials and Limits]] |

> [!tip] Intuition: the one move behind each question
> - Q1: continuity at a seam needs three things: the value, and both one-sided limits, all equal.
> - Q2: units! Price is per **gram** but demand is in **kg**, so revenue is $p\cdot x\cdot1000$.
> - Q3: even function, so everything on the left mirrors the right. The point where the **slope** is largest is an inflection point (where $f''=0$).
> - Q4: for $x\to-\infty$, $\sqrt{x^2}=-x$, not $x$.

---

## Q1 — A piecewise root function (28 points)

**Question.**

$$
f(x)=\begin{cases}1+\sqrt{x-1} & x\ge1\\[2pt] \sqrt[3]{x} & x<1\end{cases}
$$

a. Find the function's interval of continuity.
b. Use the definition of the derivative to find if the function is differentiable at $x=2$.
c. Is the rate of change of $f(x)$ increasing or decreasing for $x>1$?
d. Use the chain rule and find the equation of the tangent line to $g(x)=f(x^2+4)$ at $x=1$.

### a. Interval of continuity

The domain is all $x$: $\sqrt{x-1}$ is defined for $x\ge1$ and $\sqrt[3]{x}$ is defined for every real $x$ (it is used only for $x<1$). Each branch is continuous on its own piece, so only the seam $x=1$ needs checking, with the three conditions:

1. $f(1)=1+\sqrt0=1$.
2. $\displaystyle\lim_{x\to1^+}f(x)=1+0=1$ and $\displaystyle\lim_{x\to1^-}f(x)=\sqrt[3]{1}=1$.
3. The value and both limits are equal ($1=1=1$).

> [!success] Answer (the key)
> $f$ is **continuous for all $x$**.

### b. Differentiability at $x=2$ from the definition

$f(2)=1+\sqrt1=2$. At $x=2$ the branch is $1+\sqrt{x-1}$:

$$
f'(2)=\lim_{h\to0}\frac{f(2+h)-f(2)}{h}=\lim_{h\to0}\frac{1+\sqrt{1+h}-2}{h}=\lim_{h\to0}\frac{\sqrt{1+h}-1}{h}
$$

Multiply by the conjugate $\dfrac{\sqrt{1+h}+1}{\sqrt{1+h}+1}$:

$$
\lim_{h\to0}\frac{(1+h)-1}{h\left(\sqrt{1+h}+1\right)}=\lim_{h\to0}\frac{1}{\sqrt{1+h}+1}=\frac12
$$

> [!success] Answer (the key)
> The limit exists and equals $\tfrac12$, so **$f$ is differentiable at $x=2$**, with $f'(2)=\tfrac12$.

### c. Is the rate of change increasing or decreasing for $x>1$?

For $x>1$:

$$
f'(x)=0+\frac12(x-1)^{-1/2}=\frac1{2\sqrt{x-1}}
$$

> [!success] Answer (the key)
> There is no need to find $f''$. $x$ appears **only in the denominator**, and a growing denominator makes the fraction smaller, so $f'$ is **decreasing**: the rate of change of $f$ is decreasing for $x>1$.

### d. Tangent line to $g(x)=f(x^2+4)$ at $x=1$

Chain rule: $g'(x)=f'(x^2+4)\cdot2x$. At $x=1$ the inner value is $1^2+4=5$ (which is $\ge1$, so use the $1+\sqrt{x-1}$ branch):

$$
g'(1)=f'(5)\cdot2=\frac{1}{2\sqrt{5-1}}\cdot2=\frac14\cdot2=\frac12
$$

$$
g(1)=f(5)=1+\sqrt4=3
$$

Point-slope form: $y-3=\tfrac12(x-1)$.

> [!success] Answer (the key)
>
> $$
> y=\frac12x+2\frac12
> $$

---

## Q2 — The face cream: price, demand and profit (28 points)

**Question.** The price-demand equation for a face cream is

$$
p=1201-40\sqrt x-3x
$$

where $p$ (in $) is the price per **gram** and $x$ is demand in **kg** (1 kg = 1,000 grams).

1. Find $p'(16)$ and explain the result.
2. Assuming each kg costs $\$1{,}000$ to produce:
 a. Show that the profit function is $P(x)=1000\left(-3x^2-40x\sqrt x+1200x\right)$.
 b. How many kg of cream should be sold in order to maximise the profit?
 c. Find intervals of concavity for $P(x)$ (if they exist) and explain the results in terms of the marginal function.

### 1. $p'(16)$

Write $p=1201-40x^{1/2}-3x$:

$$
p'(x)=-40\cdot\frac12x^{-1/2}-3=-\frac{20}{\sqrt x}-3
$$

$$
p'(16)=-\frac{20}{4}-3=-8
$$

> [!success] Answer (the key)
> When demand is $16$ kg, **increasing it by one more kg lowers the price by about $\$8$ per gram**.

### 2a. The profit function

Revenue = price per gram $\times$ grams sold. The quantity $x$ is in kg, so the number of grams is $1000x$:

$$
\text{revenue}=p\cdot x\cdot1000
$$

Cost is $1000$ dollars per kg, so $1000x$ in total.

$$
P(x)=1000\,p\,x-1000x=1000\left[(1201-40\sqrt x-3x)\,x-x\right]=1000\left[1201x-40x^{3/2}-3x^2-x\right]
$$

$$
P(x)=1000\left[-3x^2-40x\sqrt x+1200x\right]
$$

> [!tip] Intuition
> The $1000$ factor in front of the revenue is the unit conversion (grams per kg). Without it the revenue and the cost would be in different units.

### 2b. Profit-maximising quantity

$$
P'(x)=1000\left[-6x-60x^{1/2}+1200\right]=0
$$

Divide by $-6$ and substitute $t=\sqrt x$ (so $x=t^2$):

$$
t^2+10t-200=0\;\Rightarrow\;(t-10)(t+20)=0\;\Rightarrow\;t=10\ \text{or}\ t=-20
$$

$\sqrt x=-20$ is impossible, so $\sqrt x=10$, $x=100$.

Check with the second derivative:

$$
P''(x)=1000\left(-6-30x^{-1/2}\right)=1000\left(-6-\frac{30}{\sqrt x}\right)<0
$$

> [!success] Answer (the key)
> **Sell $x=100$ kg.** It is a **maximum** point.

### 2c. Concavity and the marginal function

$P''(x)<0$ for **every** $x$ in the domain ($x>0$), since both terms are negative.

> [!success] Answer (the key)
> $P(x)$ is **concave down on its whole domain**. In terms of the marginal function: $P'(x)$, the **marginal profit**, **decreases for all $x$** in the domain. Each extra kg adds less profit than the one before.

---

## Q3 — Investigating $f(x)=\dfrac1{\sqrt{x^2+2}}$ (28 points)

**Question.** Given $f(x)=\dfrac{1}{\sqrt{x^2+2}}$.

a. Find the interval of continuity.
b. Find asymptotes (if any) using the appropriate limits.
c. Find increase and decrease intervals.
d. Find concavity intervals.
e. Draw the graph.
f. Find the equation of the tangent line at the point on the graph where the rate of change of the function is **maximal** (decimals allowed).

Write $f(x)=(x^2+2)^{-1/2}$.

### a. Interval of continuity

$x^2+2>0$ for every $x$, so the root is always defined and the denominator never vanishes.

> [!success] Answer (the key)
> The domain and the interval of continuity are **all $x$**.

### b. Asymptotes

$$
\lim_{x\to\pm\infty}\frac{1}{\sqrt{x^2+2}}=\frac1\infty=0
$$

> [!success] Answer (the key)
> **Horizontal asymptote $y=0$** (both sides). **No vertical asymptote** (the function is defined and continuous everywhere).

### c. Increase and decrease

$$
f'(x)=-\frac12(x^2+2)^{-3/2}\cdot2x=-\frac{x}{(x^2+2)^{3/2}}
$$

$f'(x)=0$ only at $x=0$. The denominator is always positive, so the sign of $f'$ is the sign of $-x$:

| Interval | $f'$ | $f$ |
|---|---|---|
| $x<0$ | $+$ | increasing |
| $x>0$ | $-$ | decreasing |

> [!success] Answer (the key)
> Increasing for $x<0$, decreasing for $x>0$. There is a maximum at $x=0$, $f(0)=\tfrac1{\sqrt2}\approx0.71$.

### d. Concavity

Product rule on $-x\,(x^2+2)^{-3/2}$:

$$
f''(x)=-(x^2+2)^{-3/2}+3x^2(x^2+2)^{-5/2}=\frac{-(x^2+2)+3x^2}{(x^2+2)^{5/2}}=\frac{2x^2-2}{(x^2+2)^{5/2}}
$$

$f''=0$ when $2x^2-2=0$, so $x=\pm1$. The denominator is positive, so the sign of $f''$ follows $2x^2-2$:

| Interval | $f''$ | Shape |
|---|---|---|
| $x<-1$ | $+$ | concave up ($\cup$) |
| $-1<x<1$ | $-$ | concave down ($\cap$) |
| $x>1$ | $+$ | concave up ($\cup$) |

> [!success] Answer (the key)
> Concave up for $x<-1$ and $x>1$; concave down for $-1<x<1$. The concavity changes at $x=\pm1$, so these are **inflection points**, at $(\pm1,\;\tfrac1{\sqrt3})\approx(\pm1,\,0.58)$.

### e. The graph

![[PP19_q3_graph_of_f.png]]

> [!note] How to read the sketch
> A bell shape, symmetric about the $y$-axis (the function is even). Peak at $(0,0.71)$, inflection points at $x=\pm1$ where the curve changes from $\cup$ to $\cap$ to $\cup$, tails flattening towards $y=0$. Drawn from the values found above; the dashed line is the tangent found in part f.

### f. Tangent where the rate of change is maximal

The "rate of change" is $f'(x)$. Where is $f'$ largest? From part d, $f'$ is **increasing** for $x<-1$ (since $f''>0$) and **decreasing** for $-1<x<1$ (since $f''<0$), then increasing again for $x>1$. Its maximum is at $x=-1$; for $x>1$ the slope $f'$ is negative and rises towards $0$ but stays below its value at $x=-1$, because $f'(-1)=+0.19>0$.

$$
f'(-1)=\frac{-(-1)}{(1+2)^{3/2}}=\frac{1}{\sqrt{27}}\approx0.19
$$

$$
f(-1)=\frac1{\sqrt3}\approx0.58
$$

Point-slope form: $y-0.58=0.19\,(x+1)$.

> [!success] Answer (the key)
>
> $$
> y=0.19x+0.77
> $$

> [!note] Exact form (AI check, not in the key)
> $f'(-1)=\dfrac1{\sqrt{27}}$ and $f(-1)=\dfrac1{\sqrt3}=\dfrac{3}{\sqrt{27}}$, so the tangent is $y=\dfrac1{\sqrt{27}}\,x+\dfrac4{\sqrt{27}}\approx0.192x+0.770$, which agrees with the key's rounded line.

---

## Q4 — Three unrelated parts (16 points)

### a. $\displaystyle\lim_{x\to-\infty}\frac{x\sqrt{3x^2+x}}{x^2-8}$

Factor $x^2$ out of the root: $\sqrt{3x^2+x}=\sqrt{x^2\left(3+\tfrac1x\right)}=|x|\sqrt{3+\tfrac1x}$. For $x\to-\infty$, $x<0$, so $|x|=-x$:

$$
\lim_{x\to-\infty}\frac{x\cdot(-x)\sqrt{3+\frac1x}}{x^2\left(1-\frac8{x^2}\right)}=\lim_{x\to-\infty}\frac{-x^2\sqrt{3+\frac1x}}{x^2\left(1-\frac8{x^2}\right)}=\frac{-\sqrt{3+0}}{1-0}=-\sqrt3
$$

> [!success] Answer (the key)
> $-\sqrt3$.

> [!tip] Intuition
> The sign is the trap: for large negative $x$ the root is positive but the factor $x$ in front is negative, so the limit is negative. Writing $\sqrt{x^2}=x$ would give $+\sqrt3$, which is wrong.

### b. $\displaystyle\lim_{x\to\infty}\left(\frac{x}{1+2x}\right)^x$

Divide top and bottom of the base by $x$:

$$
\frac{x}{1+2x}=\frac{1}{\frac1x+2}\;\xrightarrow[x\to\infty]{}\;\frac12
$$

So the limit has the form $\left(\tfrac12\right)^\infty$, and a base strictly between $0$ and $1$ raised to infinity gives $0$.

> [!success] Answer (the key)
> $0$.

### c. Composition

**Question.** With $f(x)=x^2-2x+4$, $g(x)=\dfrac1{x^2}$, $h(x)=\dfrac1{(\sqrt x-1)}$, can you express $y=\dfrac{1-2x^2+4x^4}{x^4}$ as a composition of two of the given functions? If so, show it.

Try $f(g(x))$: replace $x$ in $f$ by $g(x)=\tfrac1{x^2}$:

$$
f(g(x))=\left(\frac1{x^2}\right)^2-2\cdot\frac1{x^2}+4=\frac1{x^4}-\frac2{x^2}+4=\frac{1-2x^2+4x^4}{x^4}
$$

> [!success] Answer (the key)
> Yes: $y=f(g(x))$. (Matches [[PS_03-Composition, Transformations and Exponential Graphs]], Question 2.)

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result |
> |---|---|
> | Q1a-c | Continuous for all $x$; differentiable at $2$ ($f'(2)=\tfrac12$); $f'$ decreasing for $x>1$ |
> | Q1d | Tangent to $g$ at $1$: $y=\tfrac12x+2\tfrac12$ |
> | Q2 | $p'(16)=-8$; $P=1000(-3x^2-40x\sqrt x+1200x)$; max at $x=100$ kg; concave down, marginal profit decreasing |
> | Q3a-b | Continuous everywhere; HA $y=0$, no VA |
> | Q3c-d | Up for $x<0$, down for $x>0$; concave up $|x|>1$, down $-1<x<1$ |
> | Q3f | Tangent at $x=-1$: $y=0.19x+0.77$ |
> | Q4 | $-\sqrt3$; $0$; $y=f(g(x))$ |
