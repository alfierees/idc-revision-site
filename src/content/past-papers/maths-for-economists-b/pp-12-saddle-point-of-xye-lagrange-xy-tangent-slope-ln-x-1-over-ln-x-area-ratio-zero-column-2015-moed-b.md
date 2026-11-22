---
title: "Saddle Point of xye, Lagrange xy, Tangent Slope, ln x + 1 over ln x, Area Ratio & Zero Column (2015 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed B (2015)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - critical-points
  - lagrange-multipliers
  - global-extrema
  - asymptotes
  - reduced-echelon-form
aliases:
  - Math II Moed B 2015
  - Maths for Economists B 2015 Moed B
  - PP12 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Saddle Point of xye, Lagrange xy, Tangent Slope, ln x + 1 over ln x, Area Ratio & Zero Column (2015 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed B (2015)**, Maths for Economists B, Hever Schulberg. 3 hours, non-graphic calculator only (no formula sheet in this sitting), 4 questions. "Justify anything you claim and explain all your calculations." The typed paper does not print point values per question.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 1 to 3) followed by the lecturer's **handwritten official solutions** (pages 4 to 9, headed "Solution to 2015B"). Every part below follows that key. The key numbers the last question "3" (the page headed "3 a") although the paper calls it Question 4; this note uses the paper's numbering. No part needed an AI-written answer.

> [!note] A flag on the key
> - **Q3** is an **area by definite integral**. Integration is not taught in the lectures of this course (it is assumed from Maths A), so there is no lecture link for that step.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Critical points of $xye^{-x-y}$, second derivative test (saddle), a one-constraint Lagrange problem with a parameter | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q2 | Slope of a tangent line to a slice of a profit surface and what it means, global extremum on $(0,1)$, vertical asymptote | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q3 | Area between a curve and a square, as a ratio | Definite integral (assumed from Maths A) |
| Q4 | True/false about a zero column in Gauss-Jordan, reading a reduced echelon matrix | [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |

> [!tip] Intuition: the moves that recur
> - "Is this point critical?" means **both** first partials must vanish. One zero is not enough (Q1a).
> - When $f_{xx}=f_{yy}=0$ the second derivative test collapses to $\Delta=-B^2<0$, so the point is a saddle (Q1b).
> - A constrained maximum of a product on a straight budget line spends the budget in proportion to the exponents (Q1c).
> - Always interpret a derivative with units: "per extra ton, thousands of dollars" (Q2a).

---

## Q1 — Critical points, a saddle and a constrained value

Given $z=f(x,y)=xy\,e^{-x-y}$.

First derivatives (product rule, the exponential differentiates to $-e^{-x-y}$ in each variable):

$$
f_x = y e^{-x-y} + xy e^{-x-y}(-1) = y e^{-x-y}(1-x)
$$

$$
f_y = x e^{-x-y} + xy e^{-x-y}(-1) = x e^{-x-y}(1-y)
$$

### a. Is $(1,0)$ a critical point?

Evaluate at $(1,0)$: $f_x(1,0)=0\cdot e^{-1}(1-1)=0$, but

$$
f_y(1,0) = 1\cdot e^{-1}(1-0) = e^{-1} \neq 0
$$

> [!success] Answer
> **No.** A critical point needs $f_x=0$ **and** $f_y=0$. Here $f_x(1,0)=0$ but $f_y(1,0)=e^{-1}\neq 0$.

### b. Given that $(0,0)$ is critical, is it a saddle point?

Second derivatives (the key corrects its first line in red to $f_{xx}=ye^{-x-y}(x-2)$ and $f_{yy}=xe^{-x-y}(y-2)$):

$$
f_{xx} = y e^{-x-y}(x-2), \qquad f_{xy} = (1-x)(1-y)e^{-x-y}, \qquad f_{yy} = x e^{-x-y}(y-2)
$$

At $(0,0)$: $A=f_{xx}=0$, $B=f_{xy}=1$, $C=f_{yy}=0$.

$$
\Delta = AC - B^2 = 0\cdot 0 - 1^2 = -1 < 0
$$

> [!success] Answer
> **Yes, a saddle point**, because $\Delta=-1<0$.

> [!tip] Intuition
> Near the origin $f\approx xy$, which is positive when $x,y$ have the same sign and negative when they differ. A surface that rises in some directions and falls in others is a saddle.

### c. Constrained value of $f(x,y)=xy$ under $2x+y=a$

Regardless of the previous parts. Lagrange function:

$$
L(x,y,\lambda) = xy - \lambda(2x+y-a)
$$

$$
L_x = y - 2\lambda = 0 \;\Rightarrow\; \lambda = \tfrac{y}{2}, \qquad
L_y = x - \lambda = 0 \;\Rightarrow\; \lambda = x, \qquad
L_\lambda = -(2x+y-a)=0
$$

Equating the two expressions for $\lambda$ gives $y=2x$. Substitute into the constraint: $2x+2x=a$, so

$$
x=\frac{a}{4}, \qquad y=\frac{a}{2}
$$

The value at this critical point is $f=\frac{a}{4}\cdot\frac{a}{2}=\frac{a^2}{8}$. Set it equal to 32:

$$
\frac{a^2}{8}=32 \;\Rightarrow\; a^2=256 \;\Rightarrow\; a=16 \quad (a>0)
$$

> [!success] Answer
> **$a=16$.** (Critical point $(4,8)$, value $32$.)

> [!tip] Intuition
> The product $xy$ with price 2 on $x$ and price 1 on $y$ is maximised by spending half the budget on each: $2x=y$ means $2x=\tfrac a2$ and $y=\tfrac a2$. The constraint line is a straight line, so the single critical point is the maximum.

---

## Q2 — Profit slice, a global maximum and an asymptote

### a. Slope of the profit curve at $x=46$

Monthly profit (thousands of dollars): $P(x,y)=yx-50x-10x\ln x$, where $x$ is tons of fruit and $y$ is the price in thousand dollars per ton. The curve is the slice $z=P(x,100)$.

Set $y=100$:

$$
z = 100x - 50x - 10x\ln x = 50x - 10x\ln x
$$

Differentiate with the product rule:

$$
z' = 50 - \left(10\ln x + 10x\cdot\frac1x\right) = 40 - 10\ln x
$$

$$
z'(46) = 40 - 10\ln 46 \approx 1.71
$$

> [!success] Answer
> **Slope $\approx 1.71$ (thousand dollars per ton).**

> [!info] Meaning of the result (as in the key)
> When the price is 100,000 dollars per ton, raising monthly sales from 46 tons to 47 tons raises monthly profit by about **1,710 dollars**.

### b. $y=\ln x+\dfrac{1}{\ln x}$ on $0<x<1$

**1. Global extremum.**

$$
y' = \frac1x + \frac{0-1\cdot\frac1x}{(\ln x)^2} = \frac{(\ln x)^2-1}{x(\ln x)^2}
$$

Set $y'=0$: $(\ln x)^2=1$, so $\ln x=1$ or $\ln x=-1$. The root $x=e$ is outside the interval (it is greater than 1), so the only candidate is $x=e^{-1}=\frac1e$.

Sign of $y'$ on the interval: $y'(0.1)>0$ and $y'(0.5)<0$, so $y$ increases up to $\frac1e$ and decreases afterwards. A single critical point where the function changes from increasing to decreasing is a **global maximum** on the interval.

$$
y\!\left(e^{-1}\right) = \ln e^{-1} + \frac{1}{\ln e^{-1}} = -1 + \frac1{-1} = -2
$$

![[PP12_q2b_ln_plus_inverse.png|560]]

*The curve rises from $-\infty$ at the left edge to its peak at $(1/e,-2)$, then falls towards $-\infty$ as $x\to 1^-$ (where $\ln x\to 0^-$ and $1/\ln x\to-\infty$).*

> [!success] Answer
> **Global maximum at $x=\dfrac1e$, with $y=-2$.** There is no global minimum on the open interval.

**2. Vertical asymptote at $x=0$?**

$$
\lim_{x\to0^+}\left(\ln x+\frac1{\ln x}\right) = -\infty + \frac{1}{-\infty} = -\infty
$$

> [!success] Answer
> **Yes**, $x=0$ is a vertical asymptote (the one-sided limit is $-\infty$).

---

## Q3 — Ratio of two areas in a square

The graph of $f(x)=\dfrac4x-2$, with $A$ the $x$-intercept and $OABC$ a square. Find the ratio between the dotted region and the striped region.

**Setting up.** The $x$-intercept is $\frac4x-2=0\Rightarrow x=2$, so $A=(2,0)$ and the square has side 2, with area $2\cdot2=4$. The curve meets the top side $y=2$ where $\frac4x-2=2$, i.e. $x=1$, at the point $(1,2)$.

The dotted region lies in the square **above the curve** between $x=1$ and $x=2$; its height at each $x$ is $2-\left(\frac4x-2\right)$.

$$
S_{\text{dotted}} = \int_1^2 \left(2-\frac4x+2\right)dx = \Big[\,4x-4\ln|x|\,\Big]_1^2
= (8-4\ln2)-(4-4\ln1) = 4-4\ln2
$$

The striped region is the rest of the square:

$$
S_{\text{striped}} = 4-(4-4\ln2) = 4\ln2
$$

Ratio:

$$
\frac{S_{\text{dotted}}}{S_{\text{striped}}} = \frac{4-4\ln2}{4\ln2} = \frac{1}{\ln2}-1 \approx 0.44
$$

![[PP12_q3_square_area_ratio.png|560]]

*The curve passes through $(1,2)$ and $A=(2,0)$. Red (dotted in the exam) has area $4-4\ln2\approx1.23$; green (striped) has area $4\ln2\approx2.77$.*

> [!success] Answer
> **$\dfrac{\text{dotted}}{\text{striped}}=\dfrac1{\ln2}-1\approx 0.44$.**

---

## Q4 — Zero column and a reduced echelon matrix

### a. True or false: if a column becomes all zeros during elimination, the variable it represents must equal 0

> [!success] Answer
> **False.** A column of zeros has no pivot, so its variable is an **independent (free) variable** and can take **any** value.

> [!tip] Intuition
> The zero column means that variable never appears in any equation once elimination is done, so no equation restricts it. Free variables are named with a parameter, for example $x_2=t$. (Compare Q1 of the 2017 Moed A paper at $a=-1$, where the first column is all zeros and the solution is $(t,1,1)$.)

### b. Is the matrix in reduced echelon form, and what are the solutions?

$$
\left(\begin{array}{ccc|c} 1 & 0 & 0 & 7 \\ 0 & 0 & 1 & 0 \end{array}\right)
$$

**Reduced echelon form?** Each non-zero row starts with a leading 1, each leading 1 is to the right of the one above, and every pivot column has zeros elsewhere (columns 1 and 3 are pivot columns). So **yes**.

Reading the equations: $x_1=7$ and $x_3=0$. Column 2 has no pivot, so $x_2$ is free; call it $t$.

> [!success] Answer
> **Yes, it is in reduced echelon form.** The solutions are $(x_1,x_2,x_3)=(7,\,t,\,0)$ for any real $t$ (infinitely many).

---

## Recap

| Part | Tool | Answer |
|---|---|---|
| Q1a | First partials both zero? | No: $f_y(1,0)=e^{-1}\ne0$ |
| Q1b | Second derivative test | Saddle, $\Delta=-1$ |
| Q1c | Lagrange | $a=16$ |
| Q2a | Slice $y=100$, derivative | $1.71$ thousand dollars per ton |
| Q2b(1) | Sign chart of $y'$ | Global max at $x=1/e$, $y=-2$ |
| Q2b(2) | One-sided limit | Vertical asymptote at $x=0$ |
| Q3 | Definite integral | Ratio $\frac1{\ln2}-1\approx0.44$ |
| Q4a | Free variable | False |
| Q4b | Reduced echelon form | Yes; $(7,t,0)$ |

## Related notes

- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]]
- Problem sets: [[PS_01-Global Extrema and Optimisation]], [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_11-Reduced Echelon Form and Solutions]]
- Hub: [[Maths for Economists B]]
