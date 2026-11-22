---
title: "Parametric System, x minus e^x, Law Firm Lagrange & Level Curve Tangent (2017 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2017)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - parametric-systems
  - global-extrema
  - lagrange-multipliers
  - implicit-differentiation
  - tangent-line
aliases:
  - Math II Moed A 2017
  - Maths for Economists B 2017 Moed A
  - PP15 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Parametric System, x minus e^x, Law Firm Lagrange & Level Curve Tangent (2017 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2017)**, Maths for Economists B, Hever Schulberg. 3 hours, four questions of 25 points each, non-graphic calculator and a formula sheet allowed. "Justify anything you claim and explain all your calculations."
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 1 to 3) followed by the lecturer's **handwritten official solutions** (pages 4 to 9, headed "Solution for 2017A"). Every part follows that key, with one exception flagged below. **Q2e** is answered in the key by a one-line note in Hebrew; the answer below (no intersection) is my reading of it and is backed by the maximum value $-1<0$ from part d.

> [!warning] A gap in the key to know about
> **Q2a** concludes "no asymptotes". As $x\to-\infty$ the term $e^x\to0$, so $f(x)-x=-e^x\to0$: the line $y=x$ is an **oblique (slant) asymptote** on the left. The key only asks for horizontal and vertical asymptotes via limits, and the lectures in this course do not cover oblique ones, so the key's answer stands as the exam answer. The remark is mine.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A $3\times3$ system with a parameter $a$: no solution, infinitely many, unique, and the solution set | [[Lec_12-Systems with Parameters]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]] |
| Q2 | Complete study of $x-e^x$ including global extrema on three different intervals | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q3 | Marginal revenue comparison, then a budget-constrained maximum (Lagrange) | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q4 | Level curve of a surface: tangent line, $dx/dy$, and the tangent to a different slice | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]] |

> [!tip] Intuition: the moves that recur
> - The same interval can have a global extremum or not depending on whether the endpoint is **included**: $[0,3)$ has no minimum, $[-1,1]$ has both (Q2d).
> - "Marginal revenue from one more intern" is the partial derivative $f_x$ (Q3a).
> - A level curve and a **slice by a coordinate plane** are different curves: the first uses $dy/dx=-f_x/f_y$, the second just $f_y$ (Q4a versus Q4b).

---

## Q1 — A system with a parameter $a$ (25 points)

$$
\begin{cases}
1=ax_1+x_1+x_2+ax_3+x_3\\
2=ax_1+x_1+ax_2+x_2+ax_3+3x_3\\
a+4=2ax_1+2x_1+ax_2+2x_2+3ax_3+5x_3
\end{cases}
$$

Collect the terms (unknowns left, constants right):

$$
\left(\begin{array}{ccc|c} a+1&1&a+1&1\\ a+1&a+1&a+3&2\\ 2a+2&a+2&3a+5&a+4 \end{array}\right)
$$

> [!note] Reconstructed from the key
> The key's row operations are spelled out here; the end results are the key's.

$R_2\to R_2-R_1$ and $R_3\to R_3-2R_1$:

$$
\left(\begin{array}{ccc|c} a+1&1&a+1&1\\ 0&a&2&1\\ 0&a&a+3&a+2 \end{array}\right)
$$

Now divide $R_1$ by $a+1$ (legal only for $a\neq-1$) and replace $R_3\to R_3-R_2$:

$$
\left(\begin{array}{ccc|c} 1&\frac1{a+1}&1&\frac1{a+1}\\ 0&a&2&1\\ 0&0&a+1&a+1 \end{array}\right)
$$

Divide $R_2$ by $a$ (legal only for $a\neq0$) and $R_3$ by $a+1$:

$$
\left(\begin{array}{ccc|c} 1&\frac1{a+1}&1&\frac1{a+1}\\ 0&1&\frac2a&\frac1a\\ 0&0&1&1 \end{array}\right)
$$

Three pivots: **a unique solution whenever $a\neq0$ and $a\neq-1$.** The two forbidden values are checked separately.

**$a=0$:**

$$
\left(\begin{array}{ccc|c} 1&1&1&1\\ 0&0&2&1\\ 0&0&1&1 \end{array}\right)
\to \text{swap } R_2,R_3 \to
\left(\begin{array}{ccc|c} 1&1&1&1\\ 0&0&1&1\\ 0&0&2&1 \end{array}\right)
\xrightarrow{R_3-2R_2}
\left(\begin{array}{ccc|c} 1&1&1&1\\ 0&0&1&1\\ 0&0&0&-1 \end{array}\right)
$$

The last row is $0=-1$: **no solution**.

**$a=-1$:**

$$
\left(\begin{array}{ccc|c} 0&1&0&1\\ 0&-1&2&1\\ 0&-1&2&1 \end{array}\right)
\xrightarrow{R_2+R_1,\ R_3+R_1}
\left(\begin{array}{ccc|c} 0&1&0&1\\ 0&0&2&2\\ 0&0&2&2 \end{array}\right)
\to
\left(\begin{array}{ccc|c} 0&1&0&1\\ 0&0&1&1\\ 0&0&0&0 \end{array}\right)
$$

The first column is all zeros, so $x_1$ is free, and the system is consistent: **infinitely many solutions**.

### a. No solution

> [!success] Answer
> **$a=0$.**

### b. Infinitely many solutions

> [!success] Answer
> **$a=-1$.**

### c. Unique solution

> [!success] Answer
> **$a\neq0$ and $a\neq-1$.**

### d. The solutions when there are infinitely many

For $a=-1$: $x_2=1$, $x_3=1$ and $x_1$ is the free variable, $x_1=t$.

> [!success] Answer
> **$(x_1,x_2,x_3)=(t,\,1,\,1)$** for any real $t$.

> [!tip] Intuition
> At $a=-1$ every coefficient of $x_1$ is $a+1=0$, so $x_1$ drops out of all three equations: it can be anything. That is the "zero column means free variable" idea (and not "equals zero").

---

## Q2 — The function $f(x)=x-e^x$ (25 points)

### a. Asymptotes using limits

$$
\lim_{x\to\infty}(x-e^x)=\lim_{x\to\infty}x\left(1-\frac{e^x}{x}\right)=\infty\cdot(1-\infty)=-\infty
$$

where $\lim_{x\to\infty}\frac{e^x}{x}=\infty$ by L'Hopital ($\frac{e^x}{1}\to\infty$).

$$
\lim_{x\to-\infty}(x-e^x)=-\infty-e^{-\infty}=-\infty-0=-\infty
$$

Both limits are infinite, so there is no horizontal asymptote; the function is defined for all $x$, so there is no vertical asymptote.

> [!success] Answer
> **No horizontal or vertical asymptotes** (the key writes "no asymptotes"; see the warning above about the slant line $y=x$).

### b. Increase and decrease intervals

$$
f'(x)=1-e^x=0 \;\Rightarrow\; x=0
$$

$f'>0$ for $x<0$ (because $e^x<1$) and $f'<0$ for $x>0$.

> [!success] Answer
> **Increasing for $x<0$, decreasing for $x>0$.**

### c. Graph

![[PP15_q2_x_minus_exp.png|560]]

*An arch with its peak at $(0,-1)$; on the far left it follows the line $y=x$ closely, on the right it falls steeply.*

### d. $x$ coordinate of the global extreme points

**1. On the whole domain.** The function rises to $x=0$ and falls afterwards, so the peak $f(0)=0-1=-1$ is the global maximum. Both ends go to $-\infty$, so there is no global minimum.

> [!success] Answer
> **$x_{\max}=0$; no global minimum.**

**2. On $[0,3)$.** The function is decreasing on the whole interval, so the maximum is at the left endpoint $x=0$. The right endpoint $3$ is **not included**, so the values approach $f(3)$ without reaching it: no minimum.

> [!success] Answer
> **$x_{\max}=0$; no global minimum.**

**3. On $[-1,1]$.** The critical point $x=0$ is inside, so the maximum is at $x=0$. The minimum is at one of the endpoints:

$$
f(-1)=-1-e^{-1}\approx-1.37, \qquad f(1)=1-e\approx-1.72
$$

$-1.72<-1.37$, so the minimum is at $x=1$.

> [!success] Answer
> **$x_{\max}=0$ and $x_{\min}=1$.**

### e. Does the function intersect the $x$ axis?

The global maximum of $f$ is $-1<0$, so $f(x)\le-1$ for all $x$.

> [!success] Answer
> **No.** The graph never reaches $y=0$ (my reading of the key's Hebrew note; the argument above is the reason).

---

## Q3 — Law firm: marginal revenue and a budget (25 points)

Daily revenue is $f(x,y)=xy^2$, with $x$ interns and $y$ lawyers.

### a. Marginal revenue comparison

The marginal revenue from one more intern is $f_x=y^2$; from one more lawyer it is $f_y=2xy$.

"Marginal revenue from interns is 49 dollars less than from lawyers": $f_x+49=f_y$. Also the number of lawyers equals the number of interns, $y=x$.

$$
y^2+49=2xy \;\xrightarrow{y=x}\; x^2+49=2x^2 \;\Rightarrow\; x^2=49 \;\Rightarrow\; x=7
$$

> [!success] Answer
> **7 interns and 7 lawyers.** (Check: $f_x=49$ and $f_y=2\cdot7\cdot7=98=49+49$.)

### b. Maximal revenue under the salary budget

Interns cost 200 dollars a day and lawyers 500 dollars; the budget is 9,000 dollars:

$$
200x+500y=9000 \;\Rightarrow\; 2x+5y=90
$$

$$
L(x,y,\lambda)=xy^2-\lambda(2x+5y-90)
$$

$$
L_x=y^2-2\lambda=0 \;\Rightarrow\; \lambda=\frac{y^2}{2}, \qquad
L_y=2xy-5\lambda=0 \;\Rightarrow\; \lambda=\frac{2xy}{5}, \qquad
L_\lambda=-(2x+5y-90)=0
$$

Equate the two expressions for $\lambda$:

$$
\frac{y^2}{2}=\frac{2xy}{5} \;\Rightarrow\; 5y^2=4xy \;\Rightarrow\; 5y=4x \;\Rightarrow\; x=\frac54y \quad (y\neq0)
$$

Substitute into the budget:

$$
2\cdot\frac54y+5y=90 \;\Rightarrow\; 7.5y=90 \;\Rightarrow\; y=12, \quad x=15
$$

Revenue: $f(15,12)=15\cdot144=2160$. To confirm this is the maximum the key compares with another point on the budget line: $f(5,16)=5\cdot256=1280<2160$ (and $2\cdot5+5\cdot16=90$, so it is feasible).

![[PP15_q3b_budget_contour.png|560]]

*The budget line $2x+5y=90$ and two revenue contours. The contour $xy^2=2160$ just touches the budget line at $(15,12)$; the lower contour $xy^2=1280$ cuts it at $(5,16)$ (and another point), so those hires are feasible but earn less.*

> [!tip] Intuition: why it is a maximum
> On the budget line the endpoints $x=0$ or $y=0$ give revenue 0, so the single interior critical point must be the maximum.

> [!success] Answer
> **Hire 15 interns and 12 lawyers**, for a maximum daily revenue of 2160 dollars.

---

## Q4 — Level curve and tangent lines (25 points)

Surface: $f(x,y)=e^{x^2+y}+\ln(y^2+x)$. At $(0,1)$: $f=e^{1}+\ln1=e$.

### a. The curve cut by the plane $z=e$

The curve is $e=e^{x^2+y}+\ln(y^2+x)$, and $(0,1)$ lies on it (check: $e=e^1+\ln1$).

**1. Tangent line at $(0,1)$.** Differentiate implicitly with $x$ as the independent variable ($y=y(x)$):

$$
0=e^{x^2+y}\left(2x+y'\right)+\frac{1}{y^2+x}\left(2yy'+1\right)
$$

At $(0,1)$: $0=e\,y'+2y'+1$, so

$$
y'=-\frac{1}{e+2}
$$

Tangent line: $y-1=-\frac1{e+2}(x-0)$.

> [!success] Answer
> **$y=-\dfrac{1}{e+2}\,x+1$, with $z=e$.**

**2. $\dfrac{dx}{dy}$ at $(0,1)$.** Now $y$ is the independent variable and $x=x(y)$:

$$
0=e^{x^2+y}\left(2x\,x'+1\right)+\frac{1}{y^2+x}\left(2y+x'\right)
$$

At $(0,1)$: $0=e(0+1)+2+x'$, so

$$
\frac{dx}{dy}=-e-2
$$

> [!success] Answer
> **$\dfrac{dx}{dy}=-(e+2)$**, the reciprocal of $\dfrac{dy}{dx}=-\dfrac{1}{e+2}$, as it must be.

### b. The tangent line whose slope is $f_y'(0,1)$

The partial derivative with respect to $y$ is the slope of the slice where $x$ is held **constant**, here $x=0$. That slice is the curve

$$
z=e^{y}+\ln\left(y^2\right)
$$

$$
z'=e^y+\frac1{y^2}\cdot2y=e^y+\frac2y \;\Rightarrow\; z'(y=1)=e+2
$$

Tangent line through $(0,1,e)$: $z-e=(e+2)(y-1)$.

> [!success] Answer
> **$z=(e+2)y-2$, with $x=0$.** (Expanding: $(e+2)y-e-2+e=(e+2)y-2$.)

> [!warning] Exam trap
> The slope in part b is $+(e+2)$, a different curve from the level curve in part a, where $dy/dx=-\frac1{e+2}$. Do not mix them: part a holds $z=e$ fixed, part b holds $x=0$ fixed.

---

## Recap

| Part | Tool | Answer |
|---|---|---|
| Q1a | Gauss-Jordan with parameter | $a=0$ (no solution) |
| Q1b | Gauss-Jordan | $a=-1$ (infinitely many) |
| Q1c | Gauss-Jordan | $a\ne0,-1$ (unique) |
| Q1d | Free variable | $(t,1,1)$ |
| Q2a | Limits | No horizontal or vertical asymptotes |
| Q2b | Sign of $f'$ | Up for $x<0$, down for $x>0$ |
| Q2d | Global extrema | (1) $x_{\max}=0$, no min; (2) $x_{\max}=0$, no min; (3) $x_{\max}=0$, $x_{\min}=1$ |
| Q2e | Max value $-1<0$ | No $x$-axis intersection |
| Q3a | $f_x+49=f_y$, $y=x$ | 7 interns, 7 lawyers |
| Q3b | Lagrange, budget $2x+5y=90$ | 15 interns, 12 lawyers, revenue 2160 |
| Q4a1 | Implicit differentiation | $y=-\frac{1}{e+2}x+1$, $z=e$ |
| Q4a2 | Implicit differentiation | $dx/dy=-(e+2)$ |
| Q4b | Slice $x=0$ | $z=(e+2)y-2$, $x=0$ |

## Related notes

- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_01-Global Extrema and Optimisation]], [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]]
- Hub: [[Maths for Economists B]]
