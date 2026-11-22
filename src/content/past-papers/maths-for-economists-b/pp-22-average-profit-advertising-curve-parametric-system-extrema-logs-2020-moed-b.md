---
title: "Average Profit, Advertising Curve, Parametric System, Extrema & Logs (2020 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed B (2020)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - average-profit
  - implicit-differentiation
  - linear-systems
  - local-extrema
  - global-extrema
  - lhopital
aliases:
  - Math II Moed B 2020
  - Maths for Economists B 2020 Moed B
  - PP22 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Average Profit, Advertising Curve, Parametric System, Extrema & Logs (2020 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed B (2020)**, Maths for Economists B, Hever Schulberg. 3 hours, 4 questions worth 20, 25, 30 and 25 points. "Justify anything you claim, and explain all your calculations." Some parts use $k$ = the last digit of the student's ID number.
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]], [[Lec_12-Systems with Parameters]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 2 and 3) followed by the lecturer's **handwritten official solutions** (pages 4 to 10). Every part follows that key. Nothing here is AI-solved. **One official answer looks wrong (Q3a); it is kept and flagged below.**

> [!warning] Possible error in the official key
> **Q3a** (the slope $y'$): the key gives $\dfrac{e-\sqrt e-2}{e+1}$, but the key's own working line $0=\sqrt e - e + ey' + y' - 2$ solves to $\dfrac{e-\sqrt e+2}{e+1}$. See the check inside Q3a.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 (20) | Maximise **average** profit $P(x)/x$; slope $dx/dy$ on a level curve and what it means for a business | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]] |
| Q2 (25) | A 3x3 system with a parameter $k$ and four unknowns: homogeneous?, unique, infinite, none, particular solutions | [[Lec_12-Systems with Parameters]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |
| Q3 (30) | Slope on a level curve, a limit with $\ln^2(-x)$, local extrema of $(x-2)(y+3)e^{x+y}$ | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q4 (25) | Mixed partials, a one-variable function from a slice, a limit, log differentiation | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]] |

Related practice: [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_08-Local Extrema and Critical Points]], [[PS_12-Systems with Parameters]].

---

## Q1 — Average profit and an advertising curve (20 points)

There is no connection between the two segments.

### a. Maximal average profit per unit

Profit from selling $x$ units: $P(x) = 100\ln x - 600 + 100x$. Average profit per unit:

$$
AP(x) = \frac{P(x)}{x} = \frac{100\ln x - 600}{x} + 100
$$

Differentiate with the quotient rule (the constant $100$ drops out):

$$
AP'(x) = \frac{100\cdot\frac1x\cdot x - (100\ln x - 600)}{x^2} = \frac{700 - 100\ln x}{x^2}
$$

Set to zero: $\ln x = 7$, so $x = e^7 \approx 1097$ (the question allows rounding to a whole number).

Sign of $AP'$: positive for $x < e^7$ (numerator $>0$) and negative after. So $AP$ rises then falls: a **maximum**.

$$
AP(1097) = \frac{100\ln 1097 - 600}{1097} + 100 \approx 100.09
$$

> [!success] Answer
> Maximal average profit per unit is about **\$100.09**, at $x \approx 1097$ units.

> [!tip] Intuition
> Average profit is maximised where it equals marginal profit: $AP' = 0 \iff P'(x) = P(x)/x$. Check: $P'(x) = 100/x + 100$ and $AP(x) = (100\ln x - 600)/x + 100$ are equal when $100\ln x - 600 = 100$, i.e. $\ln x = 7$.

### b. A point on $f(x,y) = 2240$ and $x' = dx/dy$

$f(x,y) = 100 + 3x + 15y + xy$ is the number of units sold when advertising $x$ minutes on Facebook and $y$ minutes on Instagram (both above 15). The curve is

$$
3x + 15y + xy = 2140
$$

Choose a point. Take $x = 20$:

$$
60 + 15y + 20y = 2140 \quad\Longrightarrow\quad 35y = 2080 \quad\Longrightarrow\quad y \approx 59.43
$$

So $(20,\ 59.43)$ is on the curve. Differentiate the curve with respect to $y$ (treating $x$ as a function of $y$):

$$
3x' + 15 + x'y + x = 0
$$

At $(20,\ 59.43)$:

$$
3x' + 15 + 59.43x' + 20 = 0 \quad\Longrightarrow\quad 62.43x' = -35 \quad\Longrightarrow\quad x' \approx -0.56
$$

> [!success] Answer
> $x' \approx -0.56$ at $(20,\ 59.43)$.
> **Meaning:** at 20 monthly minutes on Facebook and 59.43 on Instagram, adding **one more minute on Instagram** while still selling 2,240 units a month is achieved by **cutting Facebook advertising by about 0.56 minutes**. This is the substitution rate between the two channels at constant sales.

> [!warning] Your point can differ
> The question asks you to choose a point, so any $(x,y)$ on the curve with $x,y>15$ is fine. In general $x' = -\dfrac{15+x}{3+y}$, which gives $-35/62.43$ at the point above.

---

## Q2 — The system with parameter $k$ (25 points)

$$
\begin{cases}
2x_1 + kx_2 + kx_3 - kx_4 - 8 = 0\\
4x_1 + 6x_2 + 2kx_3 - 2kx_4 = 2k+10\\
2x_1 + kx_2 + kx_3 - 6x_4 = k+4
\end{cases}
$$

Write the first equation as $2x_1 + kx_2 + kx_3 - kx_4 = 8$.

### a. Is there a value of $k$ making it homogeneous?

> [!success] Answer
> **No.** In the first equation the constant is $8$, whatever $k$ is, and a homogeneous system has all constants equal to zero.

### b. Unique, infinitely many, or no solutions

Augmented matrix, then $\tfrac12R_1 \to R_1$, then $R_2 - 4R_1$ and $R_3 - 2R_1$:

$$
\left(\begin{array}{cccc|c} 1 & \tfrac k2 & \tfrac k2 & -\tfrac k2 & 4\\ 0 & 6-2k & 0 & 0 & 2k-6\\ 0 & 0 & 0 & k-6 & k-4 \end{array}\right)
$$

(Row 2: $2k+10-16 = 2k-6$. Row 3: $-6-(-k) = k-6$ and $k+4-8 = k-4$.)

**Row 3 decides solvability.** It reads $(k-6)x_4 = k-4$.

- If $k \neq 6$: $x_4 = \dfrac{k-4}{k-6}$, a valid value. The system is consistent.
- If $k = 6$: the row becomes $0 = 2$, a contradiction. **No solution.**

**Row 2** reads $(6-2k)x_2 = 2k-6$. For $k \neq 3$ divide: $x_2 = -1$. (For $k=3$ the row is $0=0$, handled in part c.)

In every consistent case $x_3$ never appears as a pivot (its column is a multiple of the column of $x_2$ in rows 1 and 3, and has a zero in row 2). So $x_3$ is always a free variable, and the system never has a unique solution.

> [!success] Answer
> 1. **Unique solution:** no value of $k$.
> 2. **Infinitely many solutions:** $k \neq 6$.
> 3. **No solution:** $k = 6$.

> [!tip] Intuition
> Four unknowns and only three equations: a unique solution is impossible, so the only question is "consistent or not". The inconsistent row appears only at $k=6$.

### c. Plug in $k = 3$ and solve

At $k = 3$: row 2 becomes $0 = 0$ (since $6-2k = 0$ and $2k-6 = 0$) and row 3 becomes $-3x_4 = -1$.

$$
\left(\begin{array}{cccc|c} 1 & 1.5 & 1.5 & -1.5 & 4\\ 0 & 0 & 0 & 0 & 0\\ 0 & 0 & 0 & -3 & -1 \end{array}\right)
$$

So $x_4 = \tfrac13$. Put $x_2 = t$ and $x_3 = m$ (free). Row 1 gives

$$
x_1 + 1.5t + 1.5m - 1.5\cdot\tfrac13 = 4 \quad\Longrightarrow\quad x_1 = 4.5 - 1.5t - 1.5m
$$

> [!success] Answer
> $(x_1,x_2,x_3,x_4) = \left(4.5 - 1.5t - 1.5m,\ t,\ m,\ \tfrac13\right)$ for any real $t, m$ (two free parameters).

### d. Another $k$ (not 3) with infinitely many solutions

Choose $k = 0$ (any $k \neq 3,6$ works). Then row 2 gives $x_2 = -1$, row 3 gives $x_4 = \dfrac{0-4}{0-6} = \dfrac23$, and row 1 becomes simply $x_1 = 4$ (every other term has a factor $k = 0$). $x_3$ is free.

> [!success] Answer (for $k=0$)
> $(x_1,x_2,x_3,x_4) = \left(4,\ -1,\ t,\ \tfrac23\right)$.

### e. Is there a solution with $x_1$ equal to the last digit of your ID?

For $k = 0$ the key found $x_1 = 4$ always.

> [!success] Answer
> **Yes, only if the last digit of the ID is 4.** If you chose a different $k$ in part d you get a different expression for $x_1$, and this answer changes with it.

> [!info] Extra detail (mine)
> For a general $k\ne 3,6$: $x_2=-1$, $x_4=\dfrac{k-4}{k-6}$, and $x_1 = 4 - \tfrac k2\left(x_2+x_3-x_4\right)$. Because $x_3$ is free, $x_1$ can take any value when $k \neq 0$. So with $k\ne0$ the answer to e would be "yes" for every digit. Choosing $k=0$ makes the question restrictive, which is what the key uses.

---

## Q3 — Three independent segments (30 points)

### a. The curve $z = a$ of $z = f(x,y) = x e^{x-y} + \ln(y-2x)$ through $\left(-\sqrt e,-\sqrt e\right)$

**Value of $a$.** At the point $x - y = 0$ and $y - 2x = -\sqrt e + 2\sqrt e = \sqrt e$:

$$
a = -\sqrt e\cdot e^0 + \ln\sqrt e = -\sqrt e + \tfrac12
$$

**Slope $y'$ on the curve.** Differentiate $x e^{x-y} + \ln(y-2x) = a$ with respect to $x$:

$$
e^{x-y} + x e^{x-y}(1-y') + \frac{y'-2}{y-2x} = 0
$$

At the point, $e^{x-y} = 1$, $x = -\sqrt e$ and $y - 2x = \sqrt e$:

$$
1 - \sqrt e\,(1-y') + \frac{y'-2}{\sqrt e} = 0
$$

Multiply by $\sqrt e$:

$$
\sqrt e - e + e\,y' + y' - 2 = 0
$$

> [!success] Official answer
> $a = \tfrac12 - \sqrt e$ and $y' = \dfrac{e - \sqrt e - 2}{e+1}$ (as written on the key).

> [!warning] My check disagrees with the key's last step
> From the key's own line $\sqrt e - e + ey' + y' - 2 = 0$, move the constants across: $(e+1)y' = e - \sqrt e + 2$, so
>
> $$y' = \frac{e - \sqrt e + 2}{e+1} \approx 0.83$$
>
> The key's $\dfrac{e-\sqrt e-2}{e+1}\approx -0.25$ has the opposite sign on the $2$. I confirmed $y'\approx0.83$ symbolically via $y' = -f_x/f_y$ at the point. **The official answer is kept above; expect marks for the key's version but know the arithmetic.**

### b. $\displaystyle\lim_{x\to-\infty}\left(\ln^2(-x) + x(k+1)\right)$, $k$ = last digit of ID

Factor out $x$:

$$
x\left[\frac{\ln^2(-x)}{x} + (k+1)\right]
$$

The fraction $\dfrac{\ln^2(-x)}{x} \to 0$ (L'Hopital, applied twice: $\dfrac{2\ln(-x)\cdot\frac1x}{1} = \dfrac{2\ln(-x)}{x}$, then $\dfrac{2/x}{1}\to0$). So the bracket tends to $k+1$, which is **positive** (a digit $k\ge0$ gives $k+1\ge1$), and $x\to-\infty$.

> [!success] Answer
> $-\infty\cdot(\text{positive}) = \mathbf{-\infty}$.

> [!tip] Intuition
> The linear term $x(k+1)$ beats any power of a log, so it decides the limit, and it goes to $-\infty$.

### c. Extreme points of $f(x,y) = (x-2)(y+3)e^{x+y}$

**First derivatives:**

$$
f_x = (y+3)e^{x+y} + (x-2)(y+3)e^{x+y} = e^{x+y}(y+3)(x-1)
$$

$$
f_y = (x-2)e^{x+y} + (x-2)(y+3)e^{x+y} = e^{x+y}(x-2)(y+4)
$$

**Critical points.** $f_x = 0$ gives $y=-3$ or $x=1$; $f_y = 0$ gives $x=2$ or $y=-4$. Compatible pairs: $(1,-4)$ and $(2,-3)$.

**Second derivatives:**

$$
f_{xx} = e^{x+y}(y+3)x, \qquad f_{xy} = e^{x+y}(x-1)(y+4), \qquad f_{yy} = e^{x+y}(x-2)(y+5)
$$

| Point | $A=f_{xx}$ | $B=f_{xy}$ | $C=f_{yy}$ | $\Delta = AC-B^2$ | Type |
|---|---|---|---|---|---|
| $(1,-4)$ | $-e^{-3}$ | $0$ | $-e^{-3}$ | $e^{-6} > 0$, $A<0$ | **local maximum** |
| $(2,-3)$ | $0$ | $e^{-1}$ | $0$ | $-e^{-2} < 0$ | **saddle point** |

> [!success] Answer
> $(1,-4)$ is a local **maximum** and $(2,-3)$ is a **saddle point**.

---

## Q4 — Function $f(x,y) = x\ln\left(x+y^2\right) + y\ln\left(x^2+y\right)$ (25 points)

### a. Show $f_x'(1,2) = f_y'(2,1)$

Differentiate each term with the product and chain rules:

$$
f_x = \ln\left(x+y^2\right) + \frac{x}{x+y^2} + \frac{2xy}{x^2+y}
$$

$$
f_y = \frac{2xy}{x+y^2} + \ln\left(x^2+y\right) + \frac{y}{x^2+y}
$$

Evaluate:

$$
f_x(1,2) = \ln5 + \frac15 + \frac43, \qquad f_y(2,1) = \frac43 + \ln 5 + \frac15
$$

> [!success] Answer
> Both equal $\ln5 + \tfrac15 + \tfrac43$, so $f_x'(1,2) = f_y'(2,1)$. (The function is symmetric under swapping $x$ and $y$, which is why this works.)

### b. Global extrema of $g(x) = f(e^x, 0)$ on $[-k-2, 0)$, $k$ = last digit of ID

Set $y=0$ and $x\to e^x$ in $f$: $g(x) = e^x\ln\left(e^x\right) + 0 = x e^x$.

$$
g'(x) = e^x + xe^x = e^x(1+x) = 0 \quad\Longrightarrow\quad x = -1
$$

The interval $[-k-2, 0)$ starts at $-k-2 \le -2$, so $x=-1$ is inside. Signs of $g'$: negative for $x<-1$, positive for $-1<x<0$. So $x=-1$ is a minimum, and it is the **only** critical point, so it is the global minimum there: $g(-1) = -1/e$.

**Maximum?** As $x\to0^-$, $g\to0\cdot e^0 = 0$, but $x=0$ is **not** in the interval. At the left end $g(-k-2) = -(k+2)e^{-k-2} < 0$. So the function climbs towards $0$ without reaching it.

> [!success] Answer
> Global **minimum** at $x=-1$ (value $-1/e$). **No global maximum** (the value $0$ is approached but not attained).

![[PP22_q4b_x_exp_x.png|600]]

*Illustration with $k=4$, so the interval is $[-6,0)$. The minimum is at $-1$, and the open right end at $0$ is never reached.*

### c. $\displaystyle\lim_{x\to0^+} f\left(\sqrt x, 0\right)$

$f(\sqrt x,0) = \sqrt x\ln\sqrt x = \tfrac12\sqrt x\ln x$, a "$0\cdot(-\infty)$" form. Write it as a fraction and use L'Hopital:

$$
\lim_{x\to0^+}\frac{\ln x}{2x^{-1/2}} = \lim_{x\to0^+}\frac{\frac1x}{-x^{-3/2}} = \lim_{x\to0^+}\left(-\sqrt x\right) = 0
$$

> [!success] Answer
> The limit is $0$.

### d. Derivative of $y = x^{f(x,0)}$ at $x=e$

Since $f(x,0) = x\ln x$, the function is $y = x^{x\ln x}$. Take logs:

$$
\ln y = x\ln x\cdot\ln x = x(\ln x)^2
$$

Differentiate both sides:

$$
\frac{y'}{y} = (\ln x)^2 + x\cdot2\ln x\cdot\frac1x = (\ln x)^2 + 2\ln x
$$

At $x = e$: $y(e) = e^{e\cdot1} = e^e$ and $(\ln e)^2 + 2\ln e = 1 + 2 = 3$.

> [!success] Answer
> $y'(e) = 3e^e$.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | maximise $P(x)/x$ | $x\approx1097$, average profit about \$100.09 |
| Q1b | implicit differentiation on $f=2240$ | $x'\approx-0.56$ at $(20,59.43)$: cut Facebook by 0.56 min per extra Instagram minute |
| Q2a | constant term 8 | not homogeneous |
| Q2b | row-reduce, last row | unique: none; infinite: $k\ne6$; none: $k=6$ |
| Q2c | $k=3$ | $(4.5-1.5t-1.5m,\ t,\ m,\ \tfrac13)$ |
| Q2d | $k=0$ | $(4,-1,t,\tfrac23)$ |
| Q2e | $x_1=4$ at $k=0$ | yes only if last digit is 4 |
| Q3a | implicit differentiation | $a=\tfrac12-\sqrt e$; key $y'=\tfrac{e-\sqrt e-2}{e+1}$, my check $\tfrac{e-\sqrt e+2}{e+1}$ |
| Q3b | factor out $x$ | $-\infty$ |
| Q3c | critical points, $\Delta$ | $(1,-4)$ max, $(2,-3)$ saddle |
| Q4a | partial derivatives | both $\ln5+\tfrac15+\tfrac43$ |
| Q4b | $g=xe^x$ on $[-k-2,0)$ | min at $x=-1$, no max |
| Q4c | $0\cdot\infty$, L'Hopital | $0$ |
| Q4d | log differentiation | $3e^e$ |

## Related notes

[[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_12-Systems with Parameters]], [[PS_08-Local Extrema and Critical Points]], [[PS_12-Systems with Parameters]], [[Maths for Economists B]]
