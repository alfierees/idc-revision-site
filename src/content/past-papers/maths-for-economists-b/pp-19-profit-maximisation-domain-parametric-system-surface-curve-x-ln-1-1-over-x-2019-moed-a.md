---
title: "Profit Maximisation, Domain, Parametric System, Surface Curve & x ln(1+1/x) (2019 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2019)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - profit-maximisation
  - linear-systems
  - implicit-differentiation
  - lagrange-multipliers
  - asymptotes
aliases:
  - Math II Moed A 2019
  - Maths for Economists B 2019 Moed A
  - PP19 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Profit Maximisation, Domain, Parametric System, Surface Curve & x ln(1+1/x) (2019 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2019)**, Maths for Economists B, Hever Schulberg. 3 hours, formula sheet and non-graphic calculator allowed, 4 questions (27, 23, 27 and 23 points). "Justify anything you claim and explain all your calculations."
> Builds on: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 2 and 3) followed by the lecturer's **handwritten official solutions** (pages 4 to 10). Every part below follows that key. The key notes that Q1a, Q1b and Q3d are repeats from the 2010, 2012 and 2015 Moed B exams, but it works each one out on the page, so no outside source is needed. Two small extras (a limit at minus infinity in Q4c, a graph note in Q3c) are marked as additions.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1a | Find an unknown constant from a marginal-profit condition, then maximise a two-variable profit with square roots | [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]] |
| Q1b | Write a production domain as inequalities and shade it | [[Lec_05-Two Variable Functions]] |
| Q2 | 3 by 3 system with a parameter $m$: unique, infinitely many, none; then solve one case | [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_12-Systems with Parameters]] |
| Q3a, Q3b | Slope of a level curve by implicit differentiation, and the same number as $-f_x/f_y$ | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]] |
| Q3c | Substitute $y=1/x$ to get a one-variable function on a half-open interval | [[Lec_01-Global Extrema, Optimization and Summation]] |
| Q3d | Lagrange with a constraint, solve for the constant $k$ | [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q4 | Domain, tangent line and asymptotes of $x\ln(1+1/x)$ | [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |

> [!tip] Intuition: the moves that recur
> - "The marginal profit from one more B is \$10 lower than from one more A" is an **equation** between two partial derivatives at a given point. It pins down the unknown constant $a$ (Q1a).
> - On a level curve $F(x,y)=c$ the slope is $-F_x/F_y$ (Q3a and Q3b are the same number, 2).
> - A $0\cdot\infty$ limit is rewritten as a fraction so L'Hopital applies (Q4c).

---

## Q1 — Profit and a production domain (27 points)

*There is no connection between the two segments.*

### a. Two fabrics, find the maximal weekly profit

Fabric A sells at \$20 per meter ($x$ meters) and fabric B at \$25 per meter ($y$ meters). Weekly cost, with $a$ a constant:

$$
C(x,y)=30x+40y-4a\sqrt{x}-(2a+50)\sqrt{y}-20000
$$

At $x=y=25$ the marginal weekly profit from one more meter of B is \$10 lower than from one more meter of A. Find the maximal possible weekly profit.

> [!note] Official solution: handwritten key, page 4 (the key says this question appeared in the 2010 exam)

**Step 1: profit function.** Revenue minus cost:

$$
P(x,y)=20x+25y-30x-40y+4a\sqrt{x}+(2a+50)\sqrt{y}+20000
$$

$$
P(x,y)=-10x-15y+4a\sqrt{x}+(2a+50)\sqrt{y}+20000
$$

**Step 2: marginal profits.**

$$
P_x=-10+\frac{2a}{\sqrt{x}},\qquad P_y=-15+\frac{a+25}{\sqrt{y}}
$$

**Step 3: use the condition.** "B is \$10 lower than A" means $P_y(25,25)=P_x(25,25)-10$. The key writes it as $P_x(25,25)=10+P_y(25,25)$:

$$
-10+\frac{2a}{5}=10+\left(-15+\frac{a+25}{5}\right)
$$

The right side is $-5+\frac{a}{5}+5=\frac{a}{5}$, so $\frac{2a}{5}-\frac{a}{5}=10$ and

$$
a=50
$$

**Step 4: the profit function with $a=50$.**

$$
P(x,y)=-10x-15y+200\sqrt{x}+150\sqrt{y}+20000
$$

**Step 5: critical point.**

$$
P_x=-10+\frac{100}{\sqrt{x}}=0\ \Rightarrow\ \sqrt{x}=10,\ x=100
$$

$$
P_y=-15+\frac{75}{\sqrt{y}}=0\ \Rightarrow\ \sqrt{y}=5,\ y=25
$$

**Step 6: second derivative test.**

$$
A=P_{xx}=-50x^{-3/2}=-\frac{50}{x\sqrt{x}}\ \Rightarrow\ A=-0.05
$$

$$
B=P_{xy}=0
$$

$$
C=P_{yy}=-37.5\,y^{-3/2}=-\frac{37.5}{y\sqrt{y}}\ \Rightarrow\ C=-0.3
$$

$$
\Delta=AC-B^2=0.015>0,\quad A<0
$$

So the critical point is a **maximum**.

> [!success] Answer
> Make **100 meters of fabric A and 25 meters of fabric B**. Maximal weekly profit $P(100,25)=\$21{,}375$.

> [!info] Check
> $P(100,25)=-1000-375+2000+750+20000=21375$. Matches the key.

See also [[Lec_07-Partial Derivatives in Applications and Local Extrema]] and [[PS_08-Local Extrema and Critical Points]].

### b. The factory's daily domain

A factory makes $x$ pencils and $y$ erasers per day. It can make at most 50 of each, and at most 75 units altogether. Find the daily domain and graph it on the $[x,y]$ plane.

> [!note] Official solution: handwritten key, page 5 (the key says this question appeared in the 2012 exam)

> [!success] Answer
> $$0\le x\le 50,\quad 0\le y\le 50,\quad x+y\le 75$$

Quantities cannot be negative, so $x\ge 0$ and $y\ge 0$ are part of the domain even though the question does not say so. The three upper bounds cut the square $[0,50]\times[0,50]$ with the line $y=75-x$. That line meets $y=50$ at $x=25$ and meets $x=50$ at $y=25$, so the corner $(50,50)$ is removed.

![[PP19_q1_domain.png|480]]

*The domain is the five-sided shaded region with corners $(0,0)$, $(50,0)$, $(50,25)$, $(25,50)$ and $(0,50)$. The dashed line is $x+y=75$ beyond the region.*

See also [[Lec_05-Two Variable Functions]] and [[PS_05-Domains and Contour Lines of Two-Variable Functions]].

---

## Q2 — A linear system with a parameter (23 points)

$$
\begin{cases}
mx_1-3x_1+x_2+mx_3-m=-1\\
x_1+x_2+mx_3=m\\
3x_1+3x_2+6x_3-m=4
\end{cases}
\qquad (m \text{ is a constant})
$$

> [!note] Official solution: handwritten key, page 6

Collect the unknowns on the left. The augmented matrix is

$$
\left(\begin{array}{ccc|c}
m-3&1&m&m-1\\
1&1&m&m\\
3&3&6&m+4
\end{array}\right)
$$

### a. Values of $m$ for each type of solution

Swap $R_1\leftrightarrow R_2$ so the leading entry is 1, then clear the first column with $R_2\to R_2-(m-3)R_1$ and $R_3\to R_3-3R_1$:

$$
\left(\begin{array}{ccc|c}
1&1&m&m\\
0&4-m&4m-m^2&4m-m^2-1\\
0&0&6-3m&4-2m
\end{array}\right)
$$

Reading the rows:

- Dividing $R_2$ by $4-m$ needs $m\neq 4$. Dividing $R_3$ by $6-3m$ needs $m\neq 2$. If both hold, every row has a leading 1 and there is a **unique solution**.
- **$m=4$:** $R_2$ becomes $(0,0,0\,|\,-1)$, a contradiction, so **no solution**.
- **$m=2$:** $R_3$ becomes $(0,0,0\,|\,0)$ and $R_2$ is a real equation, so there is a free variable: **infinitely many solutions**.

> [!success] Answer
> 1. Unique solution: $m\neq 2$ and $m\neq 4$.
> 2. Infinitely many solutions: $m=2$.
> 3. No solution: $m=4$.

> [!tip] Intuition
> A parameter system fails where a row of the reduced matrix has zero coefficients. Look at the two "pivot" entries, $4-m$ and $6-3m$, and check each zero separately. A zero pivot with a **zero** right side gives a free variable. A zero pivot with a **non-zero** right side gives a contradiction.

### b. Solve for $m=2$

> [!note] Official solution: handwritten key, page 6

With $m=2$ the reduced matrix is

$$
\left(\begin{array}{ccc|c}
1&1&2&2\\
0&1&2&1.5\\
0&0&0&0
\end{array}\right)
$$

The leading variables are $x_1$ and $x_2$ and $x_3$ is free. Apply $R_1\to R_1-R_2$:

$$
\left(\begin{array}{ccc|c}
1&0&0&0.5\\
0&1&2&1.5\\
0&0&0&0
\end{array}\right)
$$

Set $x_3=t$. Then $x_1=0.5$ and $x_2+2t=1.5$.

> [!success] Answer
> $$(x_1,x_2,x_3)=(0.5,\ 1.5-2t,\ t),\quad t\in\mathbb{R}$$

> [!info] Check
> First original equation with $m=2$: $(2-3)(0.5)+(1.5-2t)+2t=1$ and the right side is $m-1=1$. It holds for every $t$.

See also [[Lec_12-Systems with Parameters]] and [[PS_12-Systems with Parameters]].

---

## Q3 — A surface, its level curve and constrained extrema (27 points)

The surface is

$$
z=f(x,y)=e^{xy}-x^2+\frac{x}{y}+y+1
$$

### a. Slope of the curve $z=1$ at $x=0$

> [!note] Official solution: handwritten key, page 7

On the plane $z=1$ the curve is $f(x,y)=1$. The $+1$ on each side cancels:

$$
0=e^{xy}-x^2+\frac{x}{y}+y
$$

At $x=0$: $0=1+y$, so $y=-1$. The point is $(0,-1)$.

Differentiate both sides with respect to $x$, treating $y$ as a function of $x$:

$$
0=e^{xy}(y+xy')-2x+\frac{y-xy'}{y^2}+y'
$$

Plug in $x=0,\ y=-1$: $0=1\cdot(-1)-0+\frac{-1}{1}+y'$, that is $0=-1+(-1)+y'$.

> [!success] Answer
> $$y'(0,-1)=2$$

### b. The value of $-\dfrac{f_x'(0,-1)}{f_y'(0,-1)}$

> [!note] Official solution: handwritten key, page 7

$$
f_x=ye^{xy}-2x+\frac{1}{y},\qquad f_x(0,-1)=-1-0-1=-2
$$

$$
f_y=xe^{xy}-\frac{x}{y^2}+1,\qquad f_y(0,-1)=0-0+1=1
$$

> [!success] Answer
> $$-\frac{f_x'(0,-1)}{f_y'(0,-1)}=-\frac{-2}{1}=2$$

> [!tip] Intuition
> Parts a and b give the **same number**. For a level curve $f(x,y)=c$, differentiating gives $f_x+f_y\,y'=0$, so $y'=-f_x/f_y$. Part b is the shortcut for part a.

See also [[Lec_04-Implicit Differentiation and Two-Variable Functions]] and [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]].

### c. Global extrema of $f(x,1/x)$ on $(1,3]$

> [!note] Official solution: handwritten key, page 7

Substitute $y=1/x$:

$$
f\!\left(x,\frac{1}{x}\right)=e^{x\cdot\frac{1}{x}}-x^2+x\cdot x+\frac{1}{x}+1=e+\frac{1}{x}+1
$$

so the one-variable function is $g(x)=e+\frac{1}{x}+1$. Its derivative is

$$
g'(x)=-\frac{1}{x^2}<0
$$

so $g$ is **decreasing** on the whole interval. A decreasing function has its largest value at the left end and its smallest at the right end. The left end $x=1$ is **excluded** from $(1,3]$, so the value $g(1)$ is approached but never reached.

> [!success] Answer
> No global maximum (open end at $x=1$). Global minimum at $x=3$, with value $g(3)=e+\tfrac{1}{3}+1$.

> [!warning] Value not written in the key
> The key states only $x_{\min}=3$. The value $g(3)=e+\frac{1}{3}+1\approx 4.05$ is my addition.

### d. A constrained extremum with an unknown constant

Given $f(x,y)=1-x^2-y^2$. Its value at the extreme point under the constraint $2x+y=k$ is $-4$. Find the positive constant $k$.

> [!note] Official solution: handwritten key, page 8 (the key says this question appeared in the 2015 Moed B exam, and gives two methods)

**Method 1, Lagrange.**

$$
L(x,y,\lambda)=1-x^2-y^2-\lambda(2x+y-k)
$$

$$
L_x=-2x-2\lambda=0\Rightarrow\lambda=-x,\qquad L_y=-2y-\lambda=0\Rightarrow\lambda=-2y
$$

So $x=2y$. Put this in the constraint: $4y+y=k$, so

$$
y=\frac{k}{5},\quad x=\frac{2k}{5}
$$

Plug into $f$ and set it equal to $-4$:

$$
1-\frac{4k^2}{25}-\frac{k^2}{25}=-4\ \Rightarrow\ 5=\frac{k^2}{5}\ \Rightarrow\ k^2=25
$$

**Method 2, without Lagrange.** Substitute $y=k-2x$:

$$
f(x)=1-x^2-(k-2x)^2,\qquad f'(x)=-10x+4k=0\Rightarrow x=\frac{2}{5}k
$$

This gives the same point $\left(\frac{2k}{5},\frac{k}{5}\right)$ and the same equation.

> [!success] Answer
> $k^2=25$ and $k>0$, so $k=5$.

> [!tip] Intuition
> The function $1-x^2-y^2$ is a downward bowl with its peak at the origin. The constraint line $2x+y=k$ misses the origin when $k\neq0$, so the best point on the line sits below the peak. The further the line is from the origin, the lower that best value. Setting it equal to $-4$ fixes how far the line is.

See also [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] and [[PS_09-Lagrange Multipliers]].

---

## Q4 — The function $f(x)=x\ln\!\left(1+\frac{1}{x}\right)$ (23 points)

### a. Domain

> [!note] Official solution: handwritten key, page 9

The logarithm needs a positive argument:

$$
1+\frac{1}{x}>0\iff\frac{x+1}{x}>0
$$

A fraction is positive when numerator and denominator have the same sign. The sign table has zeros at $x=-1$ and $x=0$: the fraction is positive for $x<-1$, negative on $(-1,0)$ and positive for $x>0$. Also $x\neq0$ because of the $\frac{1}{x}$.

> [!success] Answer
> Domain: $x<-1$ or $x>0$.

### b. Tangent line at $x=1$

> [!note] Official solution: handwritten key, page 9

By the product rule and the chain rule:

$$
f'(x)=\ln\!\left(1+\frac{1}{x}\right)+x\cdot\frac{1}{\frac{x+1}{x}}\cdot\left(-\frac{1}{x^2}\right)
$$

The middle factor is $\frac{x}{x+1}$, so $x\cdot\frac{x}{x+1}\cdot\left(-\frac{1}{x^2}\right)=-\frac{1}{x+1}$ and

$$
f'(x)=\ln\!\left(1+\frac{1}{x}\right)-\frac{1}{x+1}
$$

At $x=1$: $f(1)=\ln 2\approx0.69$ and $f'(1)=\ln 2-\frac{1}{2}\approx0.19$. The tangent line is $y-\ln 2=\left(\ln 2-\tfrac{1}{2}\right)(x-1)$.

> [!success] Answer
> $$y=\left(\ln 2-\tfrac{1}{2}\right)x+\tfrac{1}{2}$$
> (about $y=0.19x+0.5$; the question allows two decimals or $\ln$ in the answer.)

### c. Asymptotes

> [!note] Official solution: handwritten key, pages 9 and 10

**Horizontal, $x\to+\infty$.** The limit is of type $\infty\cdot 0$. Rewrite as a fraction so L'Hopital applies ($\frac{0}{0}$):

$$
\lim_{x\to\infty}x\ln\!\left(1+\frac{1}{x}\right)=\lim_{x\to\infty}\frac{\ln\!\left(1+\frac{1}{x}\right)}{x^{-1}}
$$

Differentiate top and bottom. The top becomes $\frac{x}{x+1}\cdot\left(-\frac{1}{x^2}\right)$ and the bottom becomes $-x^{-2}$, so

$$
\lim_{x\to\infty}\frac{x}{x+1}=1
$$

**Horizontal asymptote $y=1$.**

**Vertical, $x\to0^+$.** The form is $0\cdot\infty$. The same rewrite gives $\frac{\infty}{\infty}$, and L'Hopital produces the same fraction:

$$
\lim_{x\to0^+}\frac{\ln\!\left(1+\frac{1}{x}\right)}{x^{-1}}=\lim_{x\to0^+}\frac{x}{x+1}=\frac{0}{1}=0
$$

The limit is finite, so **no vertical asymptote at $x=0$** (the graph just starts at the point $(0,0)$ on the right).

**Vertical, $x\to-1^-$.** Here $x\to-1$ and $1+\frac{1}{x}\to0^+$, so $\ln\!\left(1+\frac{1}{x}\right)\to-\infty$. With the factor $x\to-1$:

$$
\lim_{x\to-1^-}x\ln\!\left(1+\frac{1}{x}\right)=(-1)\cdot(-\infty)=+\infty
$$

**Vertical asymptote $x=-1$.**

> [!success] Answer
> Horizontal asymptote $y=1$ (as $x\to+\infty$). Vertical asymptote $x=-1$. No vertical asymptote at $x=0$.

> [!warning] Addition not in the key
> The key checks only $x\to+\infty$. The domain also reaches $x\to-\infty$, and the same limit gives $y=1$ there as well (the substitution and L'Hopital steps are identical). The graph below shows both branches approaching $y=1$.

![[PP19_q4_x_ln_one_plus_one_over_x.png|560]]

*The right branch rises from $(0,0)$ through $(1,\ln 2)$ towards $y=1$. The left branch comes down from $+\infty$ at $x=-1$ to $y=1$ as $x\to-\infty$.*

See also [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] and [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]].

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| Q1a | Marginal condition, second derivative test | $a=50$; $100$ m of A and $25$ m of B; profit $\$21{,}375$ |
| Q1b | Inequalities | $0\le x\le50$, $0\le y\le50$, $x+y\le75$ |
| Q2a | Gauss-Jordan with a parameter | Unique: $m\neq2,4$. Infinite: $m=2$. None: $m=4$ |
| Q2b | Reduced echelon form | $(0.5,\ 1.5-2t,\ t)$ |
| Q3a | Implicit differentiation | $y'=2$ |
| Q3b | $-f_x/f_y$ | $2$ (same as Q3a) |
| Q3c | Substitute $y=1/x$ | $g(x)=e+\frac{1}{x}+1$ decreasing: no max, minimum at $x=3$ |
| Q3d | Lagrange | $k=5$ |
| Q4a | Sign table | $x<-1$ or $x>0$ |
| Q4b | Product and chain rule | $y=\left(\ln2-\frac12\right)x+\frac12$ |
| Q4c | L'Hopital | $y=1$ horizontal; $x=-1$ vertical |

## Related notes

- Lectures: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_12-Systems with Parameters]]
- Problem sets: [[PS_05-Domains and Contour Lines of Two-Variable Functions]], [[PS_08-Local Extrema and Critical Points]], [[PS_09-Lagrange Multipliers]], [[PS_12-Systems with Parameters]]
- Hub: [[Maths for Economists B]]
