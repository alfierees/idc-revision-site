---
title: "Exponential Surface Slopes, Global Extrema, Revenue & Linear Systems (2014 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2014)"
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
  - global-extrema
  - optimization
  - limits
  - linear-systems
aliases:
  - Math II 2014 Moed A
  - Maths B Moed A 2014
  - PP09 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Exponential Surface Slopes, Global Extrema, Revenue & Linear Systems (2014 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2014)**, Maths for Economists B, Hever Schulberg. 3 hours, 3 questions (this paper prints only three), non-graphic calculator.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (5 pages, every part solved). The paper has **three** questions. Nothing is AI-solved. The key is terse on Q2a and Q3a, which I expand.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Slopes of [[Cross Section of a Surface]] curves and which partial derivative they equal; a [[Tangent Line]]; a limit along the diagonal $f(x,x)$ | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q2 | Global extrema on open and closed intervals; a revenue-maximising price from a linear demand pattern | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]] |
| Q3 | True/false on counting equations; a 3 by 2 system with parameter $t$ | [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]] |

> [!tip] Intuition: the one move behind each question
> - Q1: fix one variable, and what is left is a one-variable function, whose derivative is the partial derivative in the other variable.
> - Q2: the maximum of a parabola on an interval is at the vertex or an endpoint; revenue is price times a demand line.
> - Q3: reduce, then ask which $t$ stops the last row from reading $0=\text{non-zero}$.

---

## Q1 — The surface $z=f(x,y)=e^{1-\frac1{\ln x}}-y-5$

### a. Slope of the tangent to the curve cut by $y=3$, at $x=e$

> [!success] Answer
> $\dfrac1e$.

Setting $y=3$ gives the curve $z=e^{1-1/\ln x}-3-5=e^{1-1/\ln x}-8$. Differentiate with the chain rule. The inner derivative of $1-\dfrac1{\ln x}$ is $\dfrac{1}{x(\ln x)^2}$ (since $\dfrac{d}{dx}\left(-(\ln x)^{-1}\right)=(\ln x)^{-2}\cdot\dfrac1x$):

$$
z' = e^{1-\frac1{\ln x}}\cdot\frac{1}{x(\ln x)^2} .
$$

At $x=e$: $\ln e=1$, so the exponent is $1-1=0$ and

$$
z'(e)=e^0\cdot\frac{1}{e\cdot1^2}=\frac1e .
$$

### b. Which partial derivative is it: $f_x(e,3)$ or $f_y(e,3)$?

> [!success] Answer
> $f_x(e,3)$.

The plane $y=3$ holds $y$ fixed, so the curve changes only with $x$, and the slope along it is the partial derivative with respect to $x$: $f_x(e,3)=\dfrac1e$. (A slice with $x$ fixed would give $f_y$ instead.)

### c. Tangent line to the curve cut by $z=-5$, at the point where $y=1$

> [!success] Answer
> $y=\dfrac1e\,x$ (in the plane $z=-5$).

With $z=-5$:

$$
-5=e^{1-\frac1{\ln x}}-y-5 \;\Rightarrow\; y=e^{1-\frac1{\ln x}} .
$$

**Find the point.** $y=1=e^0$ requires $1-\dfrac1{\ln x}=0$, so $\ln x=1$ and $x=e$. The point is $(e,1)$.

**Slope.**

$$
y'=e^{1-\frac1{\ln x}}\cdot\frac{1}{(\ln x)^2\,x}, \qquad y'(e)=\frac1e .
$$

**Line.** $y-1=\dfrac1e(x-e)=\dfrac xe-1$, so $y=\dfrac1e\,x$.

### d. $\displaystyle\lim_{x\to0^+}f(x,x)$

> [!success] Answer
> $e-5\;(\approx-2.28)$.

$$
f(x,x)=e^{1-\frac1{\ln x}}-x-5 .
$$

As $x\to0^+$: $\ln x\to-\infty$, so $\dfrac1{\ln x}\to0$ and the exponent tends to $1-0=1$. Also $-x\to0$. So

$$
\lim_{x\to0^+}f(x,x)=e^{1}-0-5=e-5\approx-2.28 .
$$

---

## Q2 — Three unconnected parts

### a. True or false: a continuous function on an open interval never has both a global max and a global min

> [!success] Answer
> **False.**

A continuous function on an open interval can have both. The key draws a curve that starts and ends on open circles (endpoints excluded) but rises to a peak and dips to a trough in the middle: the peak is a global maximum and the trough a global minimum. On $(-\infty,\infty)$ a wave such as $\sin x$ does the same.

> [!tip] Intuition
> What an open interval *can* take away is the endpoints. If the highest and lowest values both occur inside, nothing is lost.

### b. $y=x^2-6x+10$ on $2\le x\le k$, global maximum value $5$: find $k$ and the global minimum

> [!success] Answer
> $k=5$, and the global minimum is $(3,1)$.

The parabola opens upward with vertex at $x=3$: $y(3)=9-18+10=1$. An upward parabola's maximum on an interval is at an endpoint. The left endpoint has $y(2)=4-12+10=2\neq5$, so the maximum must be at $x=k$:

$$
k^2-6k+10=5 \;\Rightarrow\; k^2-6k+5=0 \;\Rightarrow\; (k-1)(k-5)=0 .
$$

$k=1$ is rejected: the right end cannot be to the left of the left end ($k>2$). So $k=5$. The vertex $x=3$ lies inside $[2,5]$, so the global minimum is at the vertex: $y=1$ at $x=3$.

### c. Price that maximises monthly revenue

Price \$80 sells $500$ units monthly; each \$4 drop sells $50$ more.

> [!success] Answer
> A price of **\$60 per unit** (revenue \$45,000 per month).

Let $x$ be the price and $y$ the units sold. The table is

| $x$ (price) | $y$ (units) |
|---|---|
| $80$ | $500$ |
| $76$ | $550$ |
| $72$ | $600$ |

The link is linear with slope $\dfrac{550-500}{76-80}=-12.5$:

$$
y-500=-12.5(x-80) \;\Rightarrow\; y=-12.5x+1500 .
$$

Revenue is price times units:

$$
R(x)=x\,(-12.5x+1500)=-12.5x^2+1500x .
$$

The domain needs $y\ge0$: $-12.5x+1500\ge0$, so $x\le120$. $R$ is a downward parabola, so its maximum is at the vertex:

$$
R'(x)=-25x+1500=0 \;\Rightarrow\; x=60 .
$$

$R(60)=60\cdot750=45{,}000$.

![[PP09_q2c_revenue_parabola.png|600]]

*Revenue is zero at a price of 0 and of 120, and peaks at the vertex, price 60.*

---

## Q3 — Linear systems

### a. Two true/false statements

> [!success] Answer
> 1. **False.** 2. **False.**

1. *More variables than equations means infinitely many solutions?* False: the system could also have **no solution** (for example $x+y=1$ and $x+y=2$ with an extra variable $z$ that appears nowhere).
2. *More equations than variables means never a unique solution?* False: during elimination some equations can become true statements ($0=0$) and drop out, leaving as many independent equations as variables, so a **unique solution** can still occur (for example $x=1,\;y=2,\;x+y=3$).

### b. The system with a constant $t$

$$
\begin{cases}
x+y-1=0\\
tx+y-t=0\\
(1+t)x+2y-3=0
\end{cases}
$$

> [!success] Answer
> 1. A solution exists only for $t=2$.
> 2. For $t=2$: $x=1,\;y=0$.

Rewrite as $x+y=1$, $tx+y=t$, $(1+t)x+2y=3$ and form the [[Augmented Matrix]]:

$$
\left(\begin{array}{cc|c}1&1&1\\t&1&t\\1+t&2&3\end{array}\right)
$$

Apply $-tR_1+R_2\to R_2$ and $-(1+t)R_1+R_3\to R_3$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{cc|c}1&1&1\\0&1-t&0\\0&1-t&2-t\end{array}\right)
$$

Then $-R_2+R_3\to R_3$:

$$
\left(\begin{array}{cc|c}1&1&1\\0&1-t&0\\0&0&2-t\end{array}\right)
$$

The last row reads $0=2-t$. Unless $t=2$ this is a false statement, so there is no solution. Hence $t=2$.

**Solve for $t=2$.**

$$
\left(\begin{array}{cc|c}1&1&1\\0&-1&0\\0&0&0\end{array}\right)
\xrightarrow{R_2+R_1\to R_1}
\left(\begin{array}{cc|c}1&0&1\\0&-1&0\\0&0&0\end{array}\right)
\xrightarrow{-R_2\to R_2}
\left(\begin{array}{cc|c}1&0&1\\0&1&0\\0&0&0\end{array}\right)
$$

So $x=1$, $y=0$.

> [!example] Check
> $t=2$: $1+0=1$; $2\cdot1+0=2=t$; $3\cdot1+2\cdot0=3$. All three hold.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | chain rule, slice $y=3$ | $1/e$ |
| Q1b | which variable is fixed | $f_x(e,3)$ |
| Q1c | slice $z=-5$, tangent | $y=x/e$ |
| Q1d | limit along $f(x,x)$ | $e-5$ |
| Q2a | counterexample | False |
| Q2b | endpoint or vertex | $k=5$, min $(3,1)$ |
| Q2c | linear demand, vertex | price \$60 |
| Q3a1 | possible no solution | False |
| Q3a2 | rows can vanish | False |
| Q3b | last row $0=2-t$ | $t=2$, $(x,y)=(1,0)$ |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]], [[PS_01-Global Extrema and Optimisation]], [[PS_02-Optimisation Models, Inverse Functions and Logarithms]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
