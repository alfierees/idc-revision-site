---
title: "Cocktail Revenue, Parametric System, Level Curve & Exponential Rational Function (2021 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II for Economics Final Exam, Moed B (2021)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths-for-economists-b
  - past-paper
  - worked-solution
  - partial-derivatives
  - marginal-revenue
  - linear-systems
  - parametric-system
  - implicit-differentiation
  - lhopital
  - critical-points
  - global-extrema
  - asymptotes
aliases:
  - Math II 2021 Moed B
  - Maths B Moed B 2021
  - PP25 Maths for Economists B
subject: maths-for-economists-b
in_scope: true
---

# Cocktail Revenue, Parametric System, Level Curve & Exponential Rational Function (2021 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II for Economics Final Exam, Moed B (2021)**, Maths for Economists B, Hever Schulberg. 3 hours, 4 questions. Marks on this paper: Q1 24, Q2 21, Q3 30, Q4 25. The cover page does not mention a calculator or formula sheet.
> Builds on: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source
> Answers follow the **official handwritten solution** (6 pages). Question 2a is marked in the key as "the solution can be found in question 1 from ex 12"; the ex12 sheet in the source folder holds only the **final answer** for the same system, so the working in Q2a is written for this site and checked against that printed answer. Every other part is fully worked in the key. No answer is AI-written.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Express quantities through prices (and the reverse), build revenue and cost, take a [[Partial Derivative]], and say what it means in business terms | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q2 | A $3\times3$ [[Parametric System]]: unique, infinitely many, none; homogeneous check; solutions at $k=0$ | [[Lec_12-Systems with Parameters]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |
| Q3 | [[Implicit Differentiation]] of a log surface; a limit by [[L'Hopital's Rule]]; critical points and classification of $x^2+y^2-x^2y^2$ | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]] |
| Q4 | $\dfrac{3}{(e^x-4)(e^x-1)}$: domain, both [[Horizontal Asymptote]]s, expanding the denominator, critical point and [[Global Extremum]] on $[\tfrac12,1]$ | [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_01-Global Extrema, Optimization and Summation]] |

> [!tip] Intuition: the one move behind each question
> - Q1: $R=\text{price}\times\text{quantity}$ for each cocktail. Write it in whichever variables the question asks for ($x,y$ or $p,q$): the partial derivative then changes meaning.
> - Q2: three equations, three unknowns, but two columns of the coefficient matrix are almost equal. Factor the determinant-like term $k^2(k-1)$ to see the three cases.
> - Q3: for a classification question, one critical point is enough ("choose one of the critical points").
> - Q4: the denominator factors into the two exponential terms, so the domain excludes $x=0$ and $x=\ln4$; the interval $[\tfrac12,1]$ avoids both.

---

## Q1 — A cocktail bar (24 points)

A Tel Aviv bar sells the first cocktail for \$$p$ and the second for \$$q$. Monthly demand is

$$
x = 30 - p \quad\text{(first cocktail)}, \qquad y = 20 + p - q \quad\text{(second cocktail)} .
$$

**Revenue** is price times quantity for each cocktail: $R = p\,x + q\,y$.

### a. Revenue in terms of $x,y$; $R_y(20,10)$

> [!success] Answer
> $R(x,y)=-x^2-y^2-xy+30x+50y$ and $R_y(20,10)=10$. At 20 first and 10 second cocktails a month, selling one more second cocktail raises monthly revenue by about \$10.

**Prices in terms of quantities.** From $x=30-p$: $p=30-x$. From $y=20+p-q$: $q=20+p-y=20+30-x-y=50-x-y$.

$$
R(x,y) = (30-x)\,x + (50-x-y)\,y = 30x - x^2 + 50y - xy - y^2 .
$$

$$
R_y = 50 - x - 2y \;\Rightarrow\; R_y(20,10) = 50-20-20 = 10 .
$$

> [!warning] Handwriting in the key
> The key writes the expanded revenue as "$-x^2y^2-xy+30x+50y$", but the line above it, $(30-x)x+(50-x-y)y$, expands to $-x^2-y^2-xy+30x+50y$, and the derivative it takes, $R_y=-2y-x+50$, only fits that. I use the correct expansion; the answer $10$ is unchanged.

### b. Revenue in terms of $p,q$; $R_p(20,21)$

> [!success] Answer
> $R(p,q)=-p^2-q^2+pq+30p+20q$ and $R_p(20,21)=11$. When the first cocktail costs \$20 and the second \$21, raising the first cocktail's price by \$1 raises monthly revenue by about \$11.

$$
R = x p + y q = (30-p)\,p + (20+p-q)\,q = 30p - p^2 + 20q + pq - q^2 .
$$

$$
R_p = -2p + q + 30 \;\Rightarrow\; R_p(20,21) = -40+21+30 = 11 .
$$

> [!tip] Why a price rise can increase revenue here
> Raising $p$ lowers the first cocktail's demand ($x=30-p$) but **raises** the second's demand ($y=20+p-q$): the two cocktails are substitutes in this model. At these prices the net effect on revenue is positive. This remark is mine.

Now the cost of producing each cocktail: \$7 per unit for the first, \$10 for the second.

### c. Cost in terms of $x,y$; $C_x(20,10)$

> [!success] Answer
> $C(x,y)=7x+10y$ and $C_x(20,10)=7$. Producing one more first cocktail raises monthly cost by \$7 (exactly, and at any production level).

$$
C(x,y) = 7x + 10y \;\Rightarrow\; C_x = 7 .
$$

Because cost is linear, the increase is exactly \$7 and not just approximately.

### d. Cost in terms of $p,q$; $C_q(20,21)$

> [!success] Answer
> $C(p,q)=410+3p-10q$ and $C_q(20,21)=-10$. Raising the second cocktail's price by \$1 lowers monthly cost by exactly \$10 (at any price level).

$$
C = 7x + 10y = 7(30-p) + 10(20+p-q) = 210 - 7p + 200 + 10p - 10q = 410 + 3p - 10q .
$$

$$
C_q = -10 .
$$

> [!tip] Intuition
> A higher price $q$ cuts demand for the second cocktail by 1 unit per dollar ($y=20+p-q$), and each unit costs \$10 to produce, so cost falls by \$10. This remark is mine.

---

## Q2 — A parametric linear system (21 points)

$$
\begin{cases}
kx + 2ky - y + 2kz - z - 2k = 0 \\
2kx + 3ky - y + 3kz - z - 3k = 0 \\
kx + 2ky - y + 3kz - z - 3k = 0
\end{cases}
\qquad (k \text{ constant})
$$

Collect terms and move the constants right:

$$
\begin{cases}
kx + (2k-1)y + (2k-1)z = 2k \\
2kx + (3k-1)y + (3k-1)z = 3k \\
kx + (2k-1)y + (3k-1)z = 3k
\end{cases}
$$

### a. Unique, infinitely many, or no solution

> [!success] Answer
> 1. **Unique solution:** $k \neq 0$ and $k\neq 1$.
> 2. **Infinitely many solutions:** $k = 0$.
> 3. **No solution:** $k = 1$.
>
> Official solution: from ex 12, question 1 (the key points to it; the sheet prints only these final answers, and it is the same system with $a$ in place of $k$).

> [!info] Working written for this site; the final answer is from the official sheet.

[[Augmented Matrix]], then $-2R_1+R_2\to R_2$ and $-R_1+R_3\to R_3$ (see [[Elementary Row Operations]]):

$$
\left(\begin{array}{ccc|c}
k & 2k-1 & 2k-1 & 2k \\
2k & 3k-1 & 3k-1 & 3k \\
k & 2k-1 & 3k-1 & 3k
\end{array}\right)
\longrightarrow
\left(\begin{array}{ccc|c}
k & 2k-1 & 2k-1 & 2k \\
0 & 1-k & 1-k & -k \\
0 & 0 & k & k
\end{array}\right)
$$

Row 2: $3k-1-2(2k-1)=1-k$ in both the $y$ and $z$ columns, right side $3k-4k=-k$. Row 3: $3k-1-(2k-1)=k$ in the $z$ column, right side $3k-2k=k$.

**Row 3 says $kz=k$.**

- **$k\neq0$:** $z=1$. Row 2 then gives $(1-k)y + (1-k)\cdot1=-k$.
  - If $k\neq1$: $y = \dfrac{-k-(1-k)}{1-k}=\dfrac{-1}{1-k}=\dfrac{1}{k-1}$. Row 1 gives $x$ (since $k\neq0$). Three pivots: **unique solution**. The solution is $x=\dfrac{1}{1-k}$, $y=\dfrac1{k-1}$, $z=1$.
  - If $k=1$: row 2 reads $0\cdot y+0\cdot z=-1$, i.e. $0=-1$: **no solution**.
- **$k=0$:** row 1 is $-y-z=0$ and row 2 is $y+z=0$, row 3 is $0=0$. Only one independent equation, $y+z=0$, with $x$ and one other variable free: **infinitely many solutions**.

> [!example] Check at $k=\tfrac12$
> The solution is $x=\dfrac1{1-\frac12}=2$, $y=\dfrac1{\frac12-1}=-2$, $z=1$. Here $2k-1=0$ and $3k-1=\tfrac12$. Equation 1: $\tfrac12\cdot2+0+0=1=2k$ ✓. Equation 2: $2+\tfrac12(-2)+\tfrac12(1)=\tfrac32=3k$ ✓. Equation 3: $1+0+\tfrac12(1)=\tfrac32=3k$ ✓.

### b. Is there a $k$ making the system homogeneous?

> [!success] Answer
> **Yes, $k=0$**, since then all the constants are zero.

The constant terms in the equations are $-2k$, $-3k$ and $-3k$. All three vanish only at $k=0$.

### c. Plug in $k=0$

At $k=0$ every equation becomes $-y-z=0$.

**1. Find the solutions.**

> [!success] Answer
> $(x,y,z)=(t,\,-m,\,m)$ for any real $t,m$.

The augmented matrix is $\left(\begin{array}{ccc|c}0&1&1&0\\0&0&0&0\\0&0&0&0\end{array}\right)$ (after clearing signs). The pivot is in column 2 ($y$), so $x$ and $z$ are free: let $x=t$, $z=m$. Then $y+m=0$, so $y=-m$.

> [!warning] Typo in the key
> The key's heading for this part reads "for $k<0$", but the matrix it writes is the $k=0$ case and the question says $k=0$. I treat it as $k=0$.

**2. Is there a solution with $x=y=z$?**

> [!success] Answer
> **Yes**, the solution $(0,0,0)$.

Substitute $x=t$, $y=-m$, $z=m$ into $x=y=z$: $t=-m$ and $-m=m$. The second gives $m=0$, then $t=0$. So $(0,0,0)$ is the only such solution.

---

## Q3 — Three unrelated parts (30 points)

### a. Slope of the curve $z=0$ on $z=\ln^2x+1-5\ln\big((xy)^{1/2}\big)$ at $y=1$ (with $x>e$, $y>0$)

> [!success] Answer
> $$y'(e^2,1) = \frac{3}{5e^2}\approx 0.081$$

The key says this question is from exercise 4. The exponent $\tfrac12$ is on $xy$ inside the log, so $5\ln\big((xy)^{1/2}\big)=2.5\ln(xy)$.

**The curve.** $0=\ln^2x - 2.5\ln(xy) + 1$.

**The point.** At $y=1$: $\ln(xy)=\ln x$. Let $t=\ln x$:

$$
0 = t^2 - 2.5\,t + 1 \;\Rightarrow\; t = 2 \ \text{ or }\ t=\tfrac12 .
$$

So $x=e^2$ or $x=e^{1/2}$. The condition $x>e$ rules out $e^{1/2}<e$. The point is $(e^2,1)$.

**The slope.** Differentiate with respect to $x$ ([[Implicit Differentiation]], $y$ a function of $x$):

$$
0 = 2\ln x\cdot\frac1x - 2.5\cdot\frac{1}{xy}\,(y + x\,y') .
$$

At $(e^2,1)$ ($\ln x=2$, $xy=e^2$):

$$
0 = \frac{4}{e^2} - \frac{2.5}{e^2}\,(1+e^2y') .
$$

Multiply by $e^2$: $0 = 4 - 2.5 - 2.5e^2y'$, so $2.5e^2y'=1.5$ and $y'=\dfrac{1.5}{2.5e^2}=\dfrac{3}{5e^2}\approx0.081$.

### b. $\displaystyle\lim_{x\to0^+}\frac{e^{2x}-2x-1}{x\sqrt{x}}$

> [!success] Answer
> $0$.

The key says this question is from exercise 4. At $x=0$ the top is $1-0-1=0$ and the bottom is $0$: a $\tfrac00$ [[Indeterminate Form]]. Apply [[L'Hopital's Rule]] (write $x\sqrt x=x^{3/2}$):

$$
\lim_{x\to0^+}\frac{2e^{2x}-2}{\tfrac32x^{1/2}} = \lim_{x\to0^+}\frac{4\,(e^{2x}-1)}{3\sqrt{x}} .
$$

Still $\tfrac00$, so apply it again:

$$
\lim_{x\to0^+}\frac{4\cdot2e^{2x}}{\tfrac32x^{-1/2}} = \lim_{x\to0^+}\frac{16}{3}\sqrt{x}\,e^{2x} = 0\cdot e^0 = 0 .
$$

> [!tip] Intuition
> Near 0, $e^{2x}-2x-1\approx 2x^2$ (the next term of the series), and $2x^2/x^{3/2}=2\sqrt x\to0$. This check is mine.

### c. Critical points of $g(x,y)=x^2+y^2-x^2y^2$

**1. All critical points.**

> [!success] Answer
> $(0,0),\ (1,1),\ (1,-1),\ (-1,1),\ (-1,-1)$.

$$
g_x = 2x - 2xy^2 = 2x(1-y^2) = 0 \;\Rightarrow\; x=0 \ \text{ or } \ y=\pm1,
$$

$$
g_y = 2y - 2x^2y = 2y(1-x^2) = 0 \;\Rightarrow\; y=0 \ \text{ or } \ x=\pm1 .
$$

A [[Critical Point]] must satisfy **both**, so combine each option from the first with each from the second:

- $x=0$ with $y=0$: $(0,0)$. ($x=0$ with $x=\pm1$ is impossible.)
- $y=\pm1$ with $x=\pm1$: the four points $(\pm1,\pm1)$. ($y=\pm1$ with $y=0$ is impossible.)

**2. Classify one of them.**

> [!success] Answer
> $(0,0)$ is a **minimum**.

Second derivatives ([[Second Derivative Test]]):

$$
A = g_{xx} = 2-2y^2, \qquad B = g_{xy} = -4xy, \qquad C = g_{yy} = 2-2x^2 .
$$

At $(0,0)$: $A=2$, $B=0$, $C=2$, so $\Delta=AC-B^2=4>0$ and $A>0$: minimum.

> [!example] Extra: the other four points (not required by the question)
> At $(\pm1,\pm1)$: $A=0$, $C=0$, $B=-4xy=\mp4$ (non-zero), so $\Delta=-16<0$ and all four are [[Saddle Point]]s. This check is mine.

---

## Q4 — The function $f(x)=\dfrac{3}{(e^x-4)(e^x-1)}$ (25 points)

### a. Domain

> [!success] Answer
> All $x$ except $x=0$ and $x=\ln4$.

The denominator is zero when $e^x=1$ (so $x=0$) or $e^x=4$ (so $x=\ln4$). The function is defined everywhere else.

### b. Horizontal asymptotes

> [!success] Answer
> $y=0$ as $x\to\infty$ and $y=\tfrac34$ as $x\to-\infty$.

- **$x\to\infty$:** both $e^x-4\to\infty$ and $e^x-1\to\infty$, so the denominator $\to\infty$ and $f\to\dfrac{3}{\infty\cdot\infty}=0$.
- **$x\to-\infty$:** $e^x\to0$, so $f\to\dfrac{3}{(0-4)(0-1)}=\dfrac34$.

See [[Horizontal Asymptote]]. Also $x=0$ and $x=\ln4$ are [[Vertical Asymptote]]s.

### c. Show that $f(x)=\dfrac{3}{e^{2x}-5e^x+4}$

Multiply out the denominator:

$$
(e^x-4)(e^x-1) = e^{2x} - e^x - 4e^x + 4 = e^{2x} - 5e^x + 4 . \qquad\blacksquare
$$

### d. Critical point

> [!success] Answer
> $x=\ln\tfrac52=\ln2.5\approx0.916$.

Use the form from part c and the quotient rule on $3\,(e^{2x}-5e^x+4)^{-1}$:

$$
f'(x) = \frac{-3\,(2e^{2x}-5e^x)}{(e^{2x}-5e^x+4)^2} = \frac{e^x\,(-6e^x+15)}{(e^{2x}-5e^x+4)^2} .
$$

The denominator is never 0 in the domain, and $e^x>0$, so $f'=0$ only when $-6e^x+15=0$:

$$
e^x=\frac{15}{6}=\frac52 \;\Rightarrow\; x=\ln\tfrac52 .
$$

### e. Global extremes on $\left[\tfrac12,1\right]$

> [!success] Answer
> **Global maximum** at $x=\ln2.5\approx0.916$ with $f=-\tfrac43\approx-1.33$. **Global minimum** at the endpoint $x=\tfrac12$ with $f\approx-1.97$.

The interval $[\tfrac12,1]$ is closed and contains neither singularity ($0$ and $\ln4\approx1.386$), so $f$ is continuous on it and the [[Closed Interval Rule]] applies. Candidates: the critical point and both endpoints.

$$
f(\ln2.5) = \frac{3}{(2.5-4)(2.5-1)} = \frac{3}{-2.25} = -\frac43 \approx -1.33 ,
$$

$$
f\!\left(\tfrac12\right) = \frac{3}{(e^{1/2}-4)(e^{1/2}-1)} \approx -1.97, \qquad f(1) = \frac{3}{(e-4)(e-1)} \approx -1.36 .
$$

The largest value is $-1.33$ at $x=\ln2.5$ (global max) and the smallest is $-1.97$ at $x=\tfrac12$ (global min). Check of type: the numerator of $f'$, $e^x(15-6e^x)$, is positive for $e^x<2.5$ and negative after, so $f$ rises then falls, confirming a maximum at $\ln2.5$.

![[PP25_q4_rational_exponential.png|620]]

*On the shaded interval $[\tfrac12,1]$ the curve sits between the two vertical asymptotes, rises to its maximum at $x=\ln2.5$ and falls again; the left endpoint gives the lowest value. The curve also tends to $y=\tfrac34$ on the far left and to $y=0$ on the far right.*

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| Q1a | $R$ in $(x,y)$, derivative in $y$ | $R_y(20,10)=10$: one more second cocktail adds about \$10 |
| Q1b | $R$ in $(p,q)$, derivative in $p$ | $R_p(20,21)=11$: \$1 higher first price adds about \$11 |
| Q1c | linear cost | $C_x=7$ exactly |
| Q1d | $C=410+3p-10q$ | $C_q=-10$ exactly |
| Q2a | last row $kz=k$ | Unique for $k\neq0,1$; infinitely many for $k=0$; none for $k=1$ |
| Q2b | constants vanish | Yes, $k=0$ |
| Q2c | $y+z=0$ | $(t,-m,m)$; $x=y=z$ gives $(0,0,0)$ |
| Q3a | quadratic in $\ln x$, implicit derivative | $x=e^2$, $y'=\dfrac{3}{5e^2}$ |
| Q3b | L'Hopital twice | $0$ |
| Q3c | $g_x=g_y=0$ | Five points; $(0,0)$ is a minimum |
| Q4a | zeros of the denominator | $x\neq0,\ \ln4$ |
| Q4b | limits at $\pm\infty$ | $y=0$ and $y=\tfrac34$ |
| Q4c | expand | $e^{2x}-5e^x+4$ |
| Q4d | $f'=0$ | $x=\ln2.5$ |
| Q4e | closed interval rule | Max at $\ln2.5$ ($-\tfrac43$); min at $x=\tfrac12$ ($-1.97$) |

## Related Notes

- Hub: [[Maths for Economists B]]
- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_07-Applications of Partial Derivatives]], [[PS_08-Local Extrema and Critical Points]], [[PS_12-Systems with Parameters]]
