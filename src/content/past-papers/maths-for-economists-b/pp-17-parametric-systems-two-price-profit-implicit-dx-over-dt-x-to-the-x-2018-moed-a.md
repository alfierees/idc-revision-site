---
title: "Parametric Systems, Two-Price Profit, Implicit dx/dt & x^x (2018 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2018)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - linear-systems
  - profit-maximisation
  - lagrange-multipliers
  - implicit-differentiation
  - global-extrema
aliases:
  - Math II Moed A 2018
  - Maths for Economists B 2018 Moed A
  - PP17 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Parametric Systems, Two-Price Profit, Implicit dx/dt & x^x (2018 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2018)**, Maths for Economists B, Hever Schulberg. 3 hours, formula sheet and non-graphic calculator allowed, 4 questions (30, 30, 30 and 10 points). "Justify anything you claim and explain all your calculations."
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 2 and 3) followed by the lecturer's **handwritten official solutions** (pages 4 to 10). Every part follows that key. The key says Q4 is a repeat of the 2014 Moed B exam and works it out on the page. Where the key lists only the final solution rows (Q1a for $a=0,\pm1$), I completed the solution sets and marked them.

> [!info] Mark weights
> This paper has unusual weights: Q1 to Q3 are 30 points each and Q4 is only 10.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | 3 by 3 system with parameter $a$; the matching homogeneous system | [[Lec_12-Systems with Parameters]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |
| Q2 | Profit from price-demand equations, a profit target, unconstrained maximum, Lagrange with $x+y=50$, meaning of $R_q'$ | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q3 | Implicit $dx/dt$, partials of a surface, global extrema of $f(x,x)\ln x$ | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_01-Global Extrema, Optimization and Summation]] |
| Q4 | Global minimum of $x^x$ by logarithmic differentiation | [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |

---

## Q1 — A system with a parameter $a$ (30 points)

$$
\begin{cases}
3a=2x_1+ax_2-ax_3\\
3=2ax_1+x_2-x_3\\
3a=4ax_1+2a^2x_2+ax_3
\end{cases}
\qquad (a \text{ is a constant})
$$

### a. Infinitely many solutions, no solution, unique solution

> [!note] Official solution: handwritten key, pages 4 and 5

The augmented matrix is

$$
\left(\begin{array}{ccc|c}
2&a&-a&3a\\
2a&1&-1&3\\
4a&2a^2&a&3a
\end{array}\right)
$$

Eliminate below the first pivot with $R_2\to R_2-aR_1$ and $R_3\to R_3-2aR_1$:

$$
\left(\begin{array}{ccc|c}
2&a&-a&3a\\
0&1-a^2&a^2-1&3-3a^2\\
0&0&2a^2+a&3a-6a^2
\end{array}\right)
$$

The pivots are $2$, $1-a^2$ and $2a^2+a=a(2a+1)$. Dividing each row by its pivot is possible exactly when $a\neq\pm1$, $a\neq0$ and $a\neq-\tfrac12$.

**Unique solution** when $a\neq\pm1,\ 0,\ -\tfrac12$.

Now each special value:

- **$a=0$.** The matrix becomes $\left(\begin{smallmatrix}2&0&0&|&0\\0&1&-1&|&3\\0&0&0&|&0\end{smallmatrix}\right)$. A zero row with a zero right side leaves a free variable: **infinitely many solutions**.
- **$a=-\tfrac12$.** The last pivot is $2a^2+a=\tfrac12-\tfrac12=0$ but the right side is $3a-6a^2=-\tfrac32-\tfrac32=-3$. The row $(0,0,0\,|\,-3)$ is a contradiction: **no solution**.
- **$a=1$.** Row 2 becomes all zeros. Row 3 is $(0,0,3\,|\,-3)$. One free variable remains: **infinitely many solutions**.
- **$a=-1$.** Row 2 becomes all zeros. Row 3 is $(0,0,1\,|\,-9)$. One free variable remains: **infinitely many solutions**.

> [!success] Answer
> 1. Infinitely many solutions: $a=1,\ a=-1,\ a=0$.
> 2. No solution: $a=-\tfrac12$.
> 3. Unique solution: $a\neq\pm1,\ 0,\ -\tfrac12$.

> [!tip] Intuition
> The determinant is $-2a(a-1)(a+1)(2a+1)$, so the four special values are exactly where the pivots vanish. At each of them you then check whether the right side is consistent. Only $a=-\tfrac12$ is inconsistent.

> [!info] Solution sets for the infinite cases (my completion of the key's row forms, checked by substitution)
> - $a=0$: $(0,\ 3+t,\ t)$.
> - $a=1$: $\left(1-\tfrac{t}{2},\ t,\ -1\right)$.
> - $a=-1$: $\left(3+\tfrac{t}{2},\ t,\ -9\right)$.
> For $a=1$ and $a=-1$ the key gives the reduced rows (it ends with $x_3=-1$ and $x_3=-9$) and marks $x_2$ as the free variable; it does not write out these vectors.

### b. The homogeneous system with the same coefficients

> [!note] Official solution: handwritten key, page 5

$$
\begin{cases}
0=2x_1+ax_2-ax_3\\
0=2ax_1+x_2-x_3\\
0=4ax_1+2a^2x_2+ax_3
\end{cases}
$$

The coefficient matrix is identical to part a, and only the right-hand sides change to zero. A homogeneous system always has the zero solution, so **there is never a "no solution" case**. Whether it is unique or infinite depends on the same pivots.

> [!success] Answer
> 1. Infinitely many solutions: $a=\pm1,\ 0,\ -\tfrac12$.
> 2. Unique solution (only the zero solution): $a\neq\pm1,\ 0,\ -\tfrac12$.

> [!tip] Intuition
> At $a=-\tfrac12$ the non-homogeneous system had no solution. The homogeneous one still has the zero solution there, and since a pivot vanishes it has infinitely many.

### c. The homogeneous system with $a=1$

> [!note] Official solution: handwritten key, page 5

For $a=1$ the reduced homogeneous matrix is

$$
\left(\begin{array}{ccc|c}
1&\tfrac12&-\tfrac12&0\\
0&0&1&0
\end{array}\right)
$$

Row 2 gives $x_3=0$. Add $\tfrac12R_2$ to $R_1$ to clear the $-\tfrac12$:

$$
\left(\begin{array}{ccc|c}
1&\tfrac12&0&0\\
0&0&1&0
\end{array}\right)
$$

Let $x_2=t$. Then $x_1+\tfrac12t=0$.

> [!success] Answer
> $$(x_1,x_2,x_3)=\left(-\tfrac12t,\ t,\ 0\right),\quad t\in\mathbb{R}$$

See also [[Lec_12-Systems with Parameters]] and [[PS_12-Systems with Parameters]].

---

## Q2 — Two fabrics with price-demand equations (30 points)

A factory sells $x$ kg of fabric A at price $p$ per kg and $y$ kg of fabric B at price $q$ per kg. Demand: $x=206-p$ and $y=204-q$. Weekly cost: $C(x,y)=x^2+y^2+xy-16x-14y$. *(In parts c and d the results are not necessarily whole numbers.)*

> [!note] Official solution: handwritten key, pages 6, 7 and 8

### a. Profit as a function of $x$ and $y$

Invert the demand: $p=206-x$ and $q=204-y$. Revenue is $R=xp+yq$:

$$
P(x,y)=x(206-x)+y(204-y)-x^2-y^2-xy+16x+14y
$$

> [!success] Answer
> $$P(x,y)=-2x^2-2y^2-xy+222x+218y$$

### b. Price of A is \$166: what price of B gives weekly profit \$9600?

$p=166$ means $x=206-166=40$. Set $P(40,y)=9600$:

$$
9600=-2\cdot40^2-2y^2-40y+222\cdot40+218y
$$

$$
2y^2-178y+3920=0
$$

so $y=49$ or $y=40$. Since $q=204-y$:

> [!success] Answer
> $y=49\Rightarrow q=\$155$, or $y=40\Rightarrow q=\$164$. Either price of B gives \$9600.

> [!info] Check
> $y^2-89y+1960=0$ has discriminant $7921-7840=81$, so $y=\frac{89\pm9}{2}=49$ or $40$.

### c. Prices that maximise weekly profit

$$
P_x=-4x-y+222=0,\qquad P_y=-4y-x+218=0
$$

$$
\begin{cases}4x+y=222\\ x+4y=218\end{cases}
$$

Solving: $x=44\tfrac23$ and $y=43\tfrac13$. Second derivatives:

$$
A=P_{xx}=-4,\quad B=P_{xy}=-1,\quad C=P_{yy}=-4,\quad \Delta=16-1=15>0,\quad A<0
$$

so it is a maximum. The prices are $p=206-44\tfrac23$ and $q=204-43\tfrac13$.

> [!success] Answer
> $p\approx\$161.33$ per kg of A and $q\approx\$160.67$ per kg of B.

> [!tip] Intuition
> The profit is a concave quadratic (the quadratic part is negative definite since $A<0$ and $\Delta>0$), so the single critical point is the global maximum.

### d. Total output limited to $x+y=50$: maximal profit with Lagrange

$$
L(x,y,\lambda)=-2x^2-2y^2-xy+222x+218y-\lambda(x+y-50)
$$

$$
L_x=-4x-y+222-\lambda=0,\qquad L_y=-4y-x+218-\lambda=0
$$

Subtract the second from the first to remove $\lambda$:

$$
-3x+3y+4=0\ \Rightarrow\ 3x-3y=4
$$

With $x+y=50$ this gives $x=25\tfrac23$ and $y=24\tfrac13$.

> [!success] Answer
> Maximal profit $P\!\left(25\tfrac23,\ 24\tfrac13\right)\approx\$7876.3$. The key marks this as the maximum and compares it with the corner $P(0,50)=\$5900$.

> [!info] Why it is a maximum
> On the line $y=50-x$ the profit is $-3x^2+154x+5900$, a concave parabola with its peak at $x=\frac{154}{6}=25\tfrac23$. The constrained maximum is therefore below the unconstrained one (about \$7876 against about \$9681 at $(44\tfrac23,43\tfrac13)$).

### e. Revenue as a function of prices, and the meaning of $R_q'(150,100)$

Revenue is $R=xp+yq=(206-p)p+(204-q)q$:

$$
R(p,q)=-p^2-q^2+206p+204q
$$

$$
R_q'=-2q+204\ \Rightarrow\ R_q'(150,100)=-200+204=4
$$

> [!success] Answer
> $R_q'(150,100)=4$. At prices \$150 per kg for A and \$100 per kg for B, raising the price of fabric B by \$1 increases weekly revenue by approximately \$4.

> [!warning] Reading note
> The key labels the revenue part as segment "d" (its handwritten letters are shifted by one against the typed paper). The typed paper has five parts, a to e, and this is part e.

See also [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[PS_07-Applications of Partial Derivatives]] and [[PS_09-Lagrange Multipliers]].

---

## Q3 — The surface $f(t,x)=\dfrac{3t^3}{x^2}+\dfrac{2x^2}{t}$ (30 points)

### a. $\dfrac{dx}{dt}$ on the curve $f(t,x)=-5$ at the point with $t=-1$

> [!note] Official solution: handwritten key, page 8

Set $t=-1$ in $f=-5$:

$$
-5=\frac{-3}{x^2}-2x^2\ \Rightarrow\ 5x^2=3+2x^4
$$

Put $u=x^2$: $2u^2-5u+3=0$, so $u=1$ or $u=\tfrac32$. The point with $x$ positive **and a whole number** is $x=1$. The point is $(t,x)=(-1,1)$.

Differentiate $f(t,x(t))=-5$ with respect to $t$ (quotient rule on both terms):

$$
0=\frac{9t^2x^2-3t^3\cdot2x\,x'}{x^4}+\frac{4x\,x'\,t-2x^2}{t^2}
$$

At $(-1,1)$: the first term is $9+6x'$ and the second is $-4x'-2$, so

$$
0=9+6x'-4x'-2\ \Rightarrow\ 2x'=-7
$$

> [!success] Answer
> $$\frac{dx}{dt}=-3.5$$

> [!info] Check with partial derivatives
> $f_t(-1,1)=\frac{9t^2}{x^2}-\frac{2x^2}{t^2}=9-2=7$ and $f_x(-1,1)=-\frac{6t^3}{x^3}+\frac{4x}{t}=6-4=2$. Then $\frac{dx}{dt}=-\frac{f_t}{f_x}=-\frac{7}{2}$.

### b. Can $\frac{dx}{dt}$ be written as a partial derivative of the surface?

> [!note] Official solution: handwritten key, page 8

> [!success] Answer
> **No.** A partial derivative is a derivative of $f$, and along this curve $f$ is the constant $-5$, so any derivative of $f$ along the curve is zero. The number $-3.5$ is the derivative of $x$ with respect to $t$ along the curve, not a derivative of $f$.

> [!tip] Intuition
> What we can say is that $\frac{dx}{dt}=-\frac{f_t}{f_x}$, a **ratio** of two partials (the check in part a). It is never a single partial derivative of $f$.

### c. Is $\dfrac{\partial f}{\partial x}=\dfrac{4x^4-6t^4}{x^3t}$?

> [!note] Official solution: handwritten key, page 8

Differentiate $f=3t^3x^{-2}+2x^2t^{-1}$ with respect to $x$:

$$
\frac{\partial f}{\partial x}=3t^3(-2x^{-3})+\frac{1}{t}\cdot4x=-\frac{6t^3}{x^3}+\frac{4x}{t}
$$

Common denominator $x^3t$:

$$
\frac{\partial f}{\partial x}=\frac{-6t^4+4x^4}{x^3t}
$$

> [!success] Answer
> **Yes.** The numerator is $-6t^4+4x^4=4x^4-6t^4$, the same as the claim.

### d. Global extreme points of $y=f(x,x)\ln x$ on $(0,1]$

> [!note] Official solution: handwritten key, page 9

Here $f(x,x)$ means $t=x$:

$$
f(x,x)=\frac{3x^3}{x^2}+\frac{2x^2}{x}=3x+2x=5x
$$

so $y=5x\ln x$. Differentiate with the product rule:

$$
y'=5\ln x+5x\cdot\frac{1}{x}=5\ln x+5=0\ \Rightarrow\ \ln x=-1,\quad x=\frac{1}{e}
$$

Compare the candidates on $(0,1]$:

- $y(1)=5\cdot1\cdot\ln1=0$.
- $y\!\left(\tfrac1e\right)=\frac{5}{e}\ln e^{-1}=-\frac{5}{e}\approx-1.84$.
- As $x\to0^+$: $\lim 5x\ln x=\lim\frac{5\ln x}{x^{-1}}$, and by L'Hopital this is $\lim(-5x)=0$. The value 0 is **approached** at the open end but the endpoint $0$ is not in the domain.

> [!success] Answer
> Global **maximum** at $x=1$ with value $0$. Global **minimum** at $x=\frac{1}{e}$ with value $-\frac{5}{e}$.

![[PP17_q3_five_x_ln_x.png|540]]

*The curve falls from $0$ (open end at $x=0$) to the minimum at $x=1/e$ and rises back to $0$ at $x=1$. The value $0$ is attained at $x=1$, so it is the global maximum.*

See also [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]] and [[PS_04-Implicit Differentiation and Two-Variable Functions]].

---

## Q4 — Global minimum of $f(x)=x^x$ for $x>0$ (10 points)

> [!note] Official solution: handwritten key, page 10 (the key says this question is from the 2014 Moed B exam)

The function $x^x$ has the variable in both base and exponent, so the plain power rule does not apply. The key gives two routes.

**Route 1, rewrite with $e$.** $x^x=e^{x\ln x}$, then differentiate with the chain rule.

**Route 2, logarithmic differentiation.** Take the log of $y=x^x$:

$$
\ln y=x\ln x
$$

Differentiate both sides in $x$:

$$
\frac{y'}{y}=\ln x+x\cdot\frac{1}{x}=\ln x+1\ \Rightarrow\ y'=x^x(\ln x+1)
$$

Set $y'=0$. Since $x^x>0$, the only solution comes from $\ln x+1=0$:

$$
x=\frac{1}{e}
$$

**Sign check.** For $0<x<\frac1e$ we have $\ln x<-1$, so $y'<0$ (decreasing). For $x>\frac1e$, $\ln x>-1$, so $y'>0$ (increasing). A fall then a rise means a **global minimum** at $x=\frac1e$.

> [!success] Answer
> Global minimum at $x=\frac{1}{e}$, with value $\left(\frac1e\right)^{1/e}\approx0.69$.

> [!info] Check
> $\left(\tfrac1e\right)^{1/e}=e^{-1/e}=e^{-0.3679}\approx0.6922$. Matches the key.

See also [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] and [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]].

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| Q1a | Gauss-Jordan with parameter | Infinite: $a=0,\pm1$. None: $a=-\frac12$. Unique: otherwise |
| Q1b | Homogeneous, same pivots | Infinite: $a=\pm1,0,-\frac12$. Unique: otherwise. Never none |
| Q1c | Reduced echelon form | $\left(-\frac t2,\ t,\ 0\right)$ |
| Q2a | Revenue minus cost | $-2x^2-2y^2-xy+222x+218y$ |
| Q2b | Quadratic in $y$ | $q=\$155$ or $\$164$ |
| Q2c | Second derivative test | $p\approx161.33$, $q\approx160.67$ |
| Q2d | Lagrange | $\left(25\frac23,24\frac13\right)$, profit $\approx\$7876.3$ |
| Q2e | Partial derivative | $R_q'=4$: raising $q$ by \$1 raises revenue by about \$4 |
| Q3a | Implicit differentiation | $dx/dt=-3.5$ |
| Q3b | Concept | No: $f$ is constant on the curve |
| Q3c | Partial derivative | Yes |
| Q3d | Global extrema on $(0,1]$ | Max $0$ at $x=1$; min $-\frac5e$ at $x=\frac1e$ |
| Q4 | Logarithmic differentiation | Global minimum at $x=\frac1e$, value $\approx0.69$ |

## Related notes

- Lectures: [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_07-Applications of Partial Derivatives]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]]
- Hub: [[Maths for Economists B]]
