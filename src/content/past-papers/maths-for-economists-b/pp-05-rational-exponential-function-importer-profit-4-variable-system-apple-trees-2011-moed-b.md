---
title: "Rational Exponential Function, Importer Profit, 4-Variable System & Apple Trees (2011 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed B (2011)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - partial-derivatives
  - tangent-line
  - limits
  - saddle-point
  - lagrange-multipliers
  - parametric-system
  - global-extrema
aliases:
  - Math II 2011 Moed B
  - Maths B Moed B 2011
  - PP05 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Rational Exponential Function, Importer Profit, 4-Variable System & Apple Trees (2011 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed B (2011)**, Maths for Economists B, Hever Schulberg. 3 hours, 4 questions, non-graphic calculator only (no formula sheet mentioned). Marks per part are not printed.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]
> Related problem sets: [[PS_01-Global Extrema and Optimisation]], [[PS_02-Optimisation Models, Inverse Functions and Logarithms]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_07-Applications of Partial Derivatives]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (6 pages, titled "Solution for 2011 B"). Every part has an official answer. The key says Q4 "is the question from lesson 2" but then works it in full, so no outside source is needed. Q2 is the same air-conditioner importer problem that reappears in a later paper, with the same numbers.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A tangent line to a cross-section curve, a mixed second derivative that simplifies to a constant, and a limit at infinity by [[L'Hopital's Rule]] | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q2 | Profit function, [[Marginal Profit]] and its meaning, [[Critical Point]] and [[Saddle Point]], and a [[Lagrange Multiplier Method]] problem on cost | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q3 | A $3\times4$ [[Parametric System]]: the homogeneous case, infinitely many versus no solution, and the explicit solution for $m=1$, $k=3$ | [[Lec_12-Systems with Parameters]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |
| Q4 | A word problem turned into a quadratic and maximised on a closed interval | [[Lec_01-Global Extrema, Optimization and Summation]] |

> [!tip] Intuition: the one move behind each question
> - Q1: fixing $x=1$ turns the surface into a curve in $y$ and $z$, so the tangent line is a one-variable derivative.
> - Q2: partial derivatives give marginal profits (b) and the critical points (c); a circle constraint with $\lambda$ eliminated gives $x=y$ by symmetry (d).
> - Q3: more unknowns than equations means a homogeneous system always has infinitely many solutions. For $m=1$, read the rows that carry the parameter $k$.
> - Q4: total yield is trees times yield per tree, so write both in terms of the number of trees.

---

## Q1 — A rational function of $x$ and $e^y$

$$
z = f(x,y) = \frac{x\,e^{y}}{x+e^{y}} .
$$

### a. Tangent line to the curve cut by the plane $x=1$ at the point where $y=0$

> [!success] Answer
> $z = \tfrac14\,y + \tfrac12$, in the plane $x=1$.

Setting $x=1$ gives the curve (a [[Cross Section of a Surface]])

$$
z = \frac{e^{y}}{1+e^{y}} .
$$

Differentiate with the quotient rule:

$$
\frac{dz}{dy} = \frac{e^{y}(1+e^{y}) - e^{y}\cdot e^{y}}{(1+e^{y})^2} = \frac{e^{y}}{(1+e^{y})^2} .
$$

At $y=0$: the slope is $\dfrac{1}{(1+1)^2} = \dfrac14$, and the height is $z=\dfrac{1}{1+1}=\dfrac12$, so the point is $(1,0,\tfrac12)$. The tangent line ([[Tangent Line]]) is

$$
z - \tfrac12 = \tfrac14\,(y-0) \;\Rightarrow\; z = \tfrac14 y + \tfrac12, \qquad x=1 .
$$

### b. Show that $\dfrac{(x+e^{y})\,x\,f_{xy}}{f^2}$ does not depend on $x$ or $y$

> [!success] Answer
> The expression equals the constant $2$.

**First partial in $x$** (quotient rule):

$$
f_x = \frac{e^{y}(x+e^{y}) - x\,e^{y}}{(x+e^{y})^2} = \frac{e^{2y}}{(x+e^{y})^2} .
$$

**Differentiate $f_x$ with respect to $y$** ($f_{xy}$):

$$
f_{xy} = \frac{2e^{2y}(x+e^{y})^2 - e^{2y}\cdot 2(x+e^{y})\,e^{y}}{(x+e^{y})^4} = \frac{2e^{2y}\left[(x+e^{y})-e^{y}\right]}{(x+e^{y})^3} = \frac{2x\,e^{2y}}{(x+e^{y})^3} .
$$

**Form the expression.** The numerator is

$$
(x+e^{y})\,x\,f_{xy} = \frac{2x^2e^{2y}}{(x+e^{y})^2}, \qquad f^2 = \frac{x^2e^{2y}}{(x+e^{y})^2} .
$$

The two share the same factors $x^2e^{2y}/(x+e^{y})^2$, which cancel:

$$
\frac{(x+e^{y})\,x\,f_{xy}}{f^2} = 2 .
$$

### c. $\displaystyle\lim_{x\to\infty} f(3x,x)$

> [!success] Answer
> $\infty$.

Here $x$ plays the role of $y$ and $3x$ of $x$:

$$
f(3x,x) = \frac{3x\,e^{x}}{3x+e^{x}} .
$$

Both numerator and denominator tend to $\infty$, so apply [[L'Hopital's Rule]]:

$$
\lim_{x\to\infty}\frac{3x\,e^{x}}{3x+e^{x}} = \lim_{x\to\infty}\frac{3e^{x}+3x\,e^{x}}{3+e^{x}} = \lim_{x\to\infty}\frac{3e^{x}(1+x)}{3+e^{x}} .
$$

Still $\infty/\infty$, so apply it again:

$$
\lim_{x\to\infty}\frac{3e^{x}(1+x)+3e^{x}}{e^{x}} = \lim_{x\to\infty}\,(3+3x+3) = \infty .
$$

> [!tip] Intuition
> For large $x$ the exponential $e^{x}$ dwarfs $3x$ in the denominator, so $f(3x,x)\approx 3x\to\infty$.

---

## Q2 — Air-conditioner importer

| | Units sold | Retail price per unit |
|---|---|---|
| Type A | $x$ | \$3000 |
| Type B | $y$ | \$4000 |

The monthly import cost is

$$
C(x,y) = 2000x + 2000y + 5000\ln\left(x^2+y^2\right) .
$$

### a. Monthly profit function

> [!success] Answer
> $$P(x,y) = 1000x + 2000y - 5000\ln\left(x^2+y^2\right)$$

Profit is revenue minus cost:

$$
P = 3000x + 4000y - 2000x - 2000y - 5000\ln\left(x^2+y^2\right) = 1000x + 2000y - 5000\ln\left(x^2+y^2\right) .
$$

### b. The two marginal profits at 10 units of each type

> [!success] Answer
> $P_x(10,10)=500$ and $P_y(10,10)=1500$ (dollars).

$$
P_x = 1000 - 5000\cdot\frac{2x}{x^2+y^2} \;\Rightarrow\; P_x(10,10) = 1000 - \frac{100{,}000}{200} = 500 ,
$$

$$
P_y = 2000 - 5000\cdot\frac{2y}{x^2+y^2} \;\Rightarrow\; P_y(10,10) = 2000 - \frac{100{,}000}{200} = 1500 .
$$

**Meaning** ([[Marginal Profit]]): at an import level of 10 air conditioners of each kind, importing one more type A unit raises monthly profit by approximately **\$500**, and importing one more type B unit raises it by approximately **\$1500**.

### c. Critical points and their types

> [!success] Answer
> The only critical point in the domain is $(2,4)$, a **saddle point** ($\Delta=-250{,}000<0$).

**First-order conditions** (see [[Critical Point]]):

$$
P_x = 0 \;\Rightarrow\; 1000 = \frac{10{,}000x}{x^2+y^2} \;\Rightarrow\; x^2+y^2 = 10x ,
$$

$$
P_y = 0 \;\Rightarrow\; 2000 = \frac{10{,}000y}{x^2+y^2} \;\Rightarrow\; x^2+y^2 = 5y .
$$

So $10x=5y$, i.e. $y=2x$. Substitute: $x^2+4x^2=10x$, so $5x(x-2)=0$, giving $x=0$ or $x=2$. The case $x=0$ gives $(0,0)$, which is **not in the domain** (the logarithm is undefined there; the key crosses it out). Hence the only critical point is $(2,4)$.

**Second derivatives.**

$$
P_{xx} = \frac{10{,}000\,(x^2-y^2)}{(x^2+y^2)^2}, \qquad P_{xy} = \frac{20{,}000\,xy}{(x^2+y^2)^2}, \qquad P_{yy} = \frac{10{,}000\,(y^2-x^2)}{(x^2+y^2)^2} .
$$

At $(2,4)$, $x^2+y^2=20$ and $(x^2+y^2)^2=400$, so

$$
A = P_{xx}(2,4) = -300, \qquad B = P_{xy}(2,4) = 400, \qquad C = P_{yy}(2,4) = 300 .
$$

$$
\Delta = AC - B^2 = (-300)(300) - 400^2 = -250{,}000 < 0 \;\Rightarrow\; \text{saddle point.}
$$

(See [[Second Derivative Test]].) There is no local maximum or minimum of profit.

### d. Extremum of the cost $C$ under $x^2+y^2=200$

> [!success] Answer
> $x=y=10$: import **10 units of each type**.

The key notes that $\ln(x^2+y^2)$ "can be substituted by 200" on the constraint, but the Lagrange method works directly with the cost:

$$
L(x,y,\lambda) = 2000x + 2000y + 5000\ln(x^2+y^2) - \lambda\,(x^2+y^2-200) .
$$

$$
L_x = 2000 + 5000\cdot\frac{2x}{x^2+y^2} - 2x\lambda = 0, \qquad L_y = 2000 + 5000\cdot\frac{2y}{x^2+y^2} - 2y\lambda = 0 .
$$

Multiply $L_x$ by $y$ and $L_y$ by $x$, then subtract. The terms $\dfrac{10{,}000xy}{x^2+y^2}$ and $2xy\lambda$ cancel, leaving

$$
2000y - 2000x = 0 \;\Rightarrow\; x=y .
$$

Plug into the constraint: $2x^2=200$, so $x=\pm10$ and $y=\pm10$. Production cannot be negative, so the meaningful answer is **10 units of each kind**.

> [!tip] Intuition
> On the circle the log term is constant, so the cost differs only through $2000(x+y)$. That is largest at the symmetric point $(10,10)$ (a maximum of cost on the circle) and smallest at $(-10,-10)$, which is not a feasible production level. The question only asks for the extremum point; it does not ask which kind.

---

## Q3 — A $3\times4$ system with parameters $k$ and $m$

$$
\begin{cases}
k x_1 - k x_2 + 2x_3 + k x_4 = 8m \\
2k x_1 - 2k x_2 + 4x_3 + 6x_4 = (2k+10)m \\
k x_1 - 6x_2 + 2x_3 + k x_4 = (k+4)m
\end{cases}
$$

### a. How many solutions when $m=0$?

> [!success] Answer
> Infinitely many.

With $m=0$ every right-hand side is $0$, so it is a [[Homogeneous System]], which always has the zero solution (it is consistent). There are 4 unknowns and only 3 equations, so at least one variable is free: **infinitely many solutions**.

### b. $m=1$: which $k$ give infinitely many solutions, and which give none

The augmented matrix is

$$
\left(\begin{array}{cccc|c}
k & -k & 2 & k & 8 \\
2k & -2k & 4 & 6 & 2k+10 \\
k & -6 & 2 & k & k+4
\end{array}\right)
$$

Apply $R_2\to-2R_1+R_2$ and $R_3\to-R_1+R_3$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{cccc|c}
k & -k & 2 & k & 8 \\
0 & 0 & 0 & 6-2k & 2k-6 \\
0 & k-6 & 0 & 0 & k-4
\end{array}\right)
$$

Swap $R_2\leftrightarrow R_3$ and divide $R_1$ by $k$ (for $k\neq0$):

$$
\left(\begin{array}{cccc|c}
1 & -1 & \tfrac2k & 1 & \tfrac8k \\
0 & k-6 & 0 & 0 & k-4 \\
0 & 0 & 0 & 6-2k & 2k-6
\end{array}\right)
$$

The special values are $k=0$, $k=6$ and $k=3$.

> [!success] Answer (1): infinitely many solutions
> For **every $k\neq6$**.

> [!success] Answer (2): no solution
> $k=6$.

**$k=6$.** The second row becomes $0\cdot x_2=2$ (since $k-4=2$), a contradiction, so there is **no solution**.

**$k=3$.** The last row becomes $\left(0\;0\;0\;0\mid0\right)$ (since $6-2k=0$ and $2k-6=0$). Row 2 reads $-3x_2=-1$, so $x_2=\tfrac13$, and we have two free variables: infinitely many solutions.

**$k=0$.** The matrix is $\left(\begin{smallmatrix}0&0&2&0&|&8\\0&0&0&6&|&-6\\0&-6&0&0&|&-4\end{smallmatrix}\right)$, which fixes $x_3=4$, $x_4=-1$, $x_2=\tfrac23$ and leaves $x_1$ free: infinitely many solutions again.

**Every other $k$** ($k\neq0,3,6$): three pivots (columns 1, 2 and 4) and four unknowns, so exactly one free variable: infinitely many solutions.

| $k$ | Outcome ($m=1$) |
|---|---|
| $k=6$ | no solution |
| any $k\neq6$ | infinitely many solutions |

### c. Solutions for $m=1$, $k=3$

> [!success] Answer
> $(x_1,x_2,x_3,x_4) = \left(3-\tfrac23\,t-p,\;\tfrac13,\;t,\;p\right)$ for any real $t$ and $p$.

For $k=3$ the reduced system is

$$
\left(\begin{array}{cccc|c}
1 & -1 & \tfrac23 & 1 & \tfrac83 \\
0 & -3 & 0 & 0 & -1 \\
0 & 0 & 0 & 0 & 0
\end{array}\right)
$$

Scale $R_2$ by $-\tfrac13$, giving $x_2=\tfrac13$, then add $R_2$ to $R_1$ (this reaches [[Reduced Echelon Form]]):

$$
\left(\begin{array}{cccc|c}
1 & 0 & \tfrac23 & 1 & 3 \\
0 & 1 & 0 & 0 & \tfrac13
\end{array}\right)
$$

Let the free variables be $x_3=t$ and $x_4=p$. Then $x_2=\tfrac13$ and $x_1 = 3 - \tfrac23 t - p$.

> [!tip] Quick check
> Plug into equation 1 with $k=3$: $3x_1-3x_2+2x_3+3x_4 = 9-2t-3p-1+2t+3p = 8 = 8m$. Equation 3: $3x_1-6x_2+2x_3+3x_4 = 8-3x_2 = 7 = k+4$. Both hold for all $t,p$.

---

## Q4 — Apple trees

A farmer has 20 trees, each producing 60 kg of apples a year. Each additional tree (up to 15 more) lowers the yield of every tree by 2 kg. How many trees maximise total annual production, and what is the maximum?

### Setting up

> [!success] Answer
> Plant **25 trees in total (5 additional)**; the maximum total production is **1250 kg**.

Let $x$ be the **total number** of trees, so $20\le x\le35$, and let $y$ be the yield of each tree in kg. Then total production is $f=x\,y$.

**Express $y$ in terms of $x$.** The table of values is

| $x$ | 20 | 21 | 22 | $\dots$ |
|---|---|---|---|---|
| $y$ | 60 | 58 | 56 | $\dots$ |

The slope is $-2$, so $y-60=-2(x-20)$, i.e. $y=-2x+100$. Then

$$
f(x) = x(-2x+100) = -2x^2 + 100x .
$$

**Maximise** ([[Closed Interval Rule]]):

$$
f'(x) = -4x+100 = 0 \;\Rightarrow\; x=25 .
$$

This lies in $[20,35]$. Compare the critical point with the two endpoints:

| $x$ | $f(x)$ |
|---|---|
| $20$ | $1200$ |
| $25$ | $1250$ (global maximum) |
| $35$ | $1050$ |

![[PP05_q4_orchard_yield.png|600]]

*Total yield is a downward parabola in the number of trees. Its peak at 25 trees (1250 kg) beats both endpoints.*

> [!warning] Total versus additional
> The question asks how many trees to **plant**, but the key defines $x$ as the **total** number of trees. The key's conclusion: a total of 25 trees, meaning 5 additional trees. State both numbers to be safe.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | cross-section $x=1$, quotient rule | $z=\tfrac14y+\tfrac12$, $x=1$ |
| Q1b | $f_x$ then $f_{xy}$, cancel | $2$ |
| Q1c | L'Hopital twice | $\infty$ |
| Q2a | revenue minus cost | $1000x+2000y-5000\ln(x^2+y^2)$ |
| Q2b | $P_x$, $P_y$ at $(10,10)$ | \$500 and \$1500 per extra unit |
| Q2c | $P_x=P_y=0$, $\Delta$ test | $(2,4)$ saddle |
| Q2d | Lagrange on the cost | $x=y=10$ |
| Q3a | homogeneous, 4 unknowns, 3 equations | infinitely many |
| Q3b | row reduction, $m=1$ | infinitely many if $k\neq6$; none if $k=6$ |
| Q3c | reduced echelon form | $(3-\tfrac23t-p,\tfrac13,t,p)$ |
| Q4 | $f=-2x^2+100x$ on $[20,35]$ | 25 trees, 1250 kg |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]], [[PS_02-Optimisation Models, Inverse Functions and Logarithms]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
