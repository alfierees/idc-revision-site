---
title: "Cube Root Piecewise with a Parameter, Limits, Hyperbola Investigation & Marginal Profit (2023 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2023 Moed B"
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
  - relative-extrema
  - limits
  - euler-limit
  - indefinite-integral
  - chain-rule
  - function-investigation
  - asymptotes
  - absolute-value
  - revenue-maximisation
  - marginal-profit
aliases:
  - Math I 2023 Moed B
  - PP30 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Cube Root Piecewise with a Parameter, Limits, Hyperbola Investigation & Marginal Profit (2023 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2023 (Moed B)**, Hever Schulberg. 4 questions (25, 25, 30, 20 points), 3 hours, non-graphing calculator and formula sheet allowed.
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_04-Limits and Continuity]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_08-Chain Rule, Exponential and Log Derivatives and Integrals]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]
> Repeats questions from: [[PP_04-Rational Function Sketch, Piecewise Differentiability with a Parameter, Limits & Tangent Line (2010 Moed B)]] (Q1 here is its Q2) and [[PP_07-Cube Root Investigation, Piecewise Differentiability, Marginal Profit & Limits (2012 Moed A)]] (Q4b here is its Q3a)

> [!info] Source
> The exam is on pages 2 and 3 of the source PDF (page 1 is the cover). The **handwritten, unsigned key (author unclear)** is on pages 4 to 9. It works Q1, Q2a, Q2c, Q2d and Q3 in full. Page 9 is an index of where Q4 came from, and a few parts are only pointers. I resolved each one:
>
> | Part | The key says | What I used |
> |---|---|---|
> | Q1 | "the question is from 2010 B" (and it is worked) | The key's own working. The same function is [[PP_04-Rational Function Sketch, Piecewise Differentiability with a Parameter, Limits & Tangent Line (2010 Moed B)]] Question 2, which I checked: same function, same $k=1$ extrema, same answers. |
> | Q2b | "Question 5 from ex 8" | [[PS_08-Chain Rule, Exponential and Log Derivatives and Integrals]] Question 5f: the same integral $\int\frac{1}{\sqrt[3]{4x^2-12x+9}}dx$. Printed answer checked by differentiating. |
> | Q4a | "Question 3b from 2020 A" | The 2020 A PDF, Question 3b: same price-demand equation $0.12x^2=1296-p$, same domain, same question. I used that paper's handwritten key (page 6). |
> | Q4b | "Question 3a from 2012 A" | [[PP_07-Cube Root Investigation, Piecewise Differentiability, Marginal Profit & Limits (2012 Moed A)]] Question 3a: same $P(x)=x^2-4\sqrt{(x+4)^3}$, same $P'(x)=28$. |
>
> For each pointer I compared the wording and every number, and they all match.

> [!warning] Points where the key needs a check
> - The key is correct throughout as far as I checked. Q1e adds the $y$-coordinates of the extreme points, which the key leaves out (marked as my addition there).
> - **AI-solved parts: none.** Everything comes from the key or from a pointer target I checked.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A piecewise function glued from a cubic and a $\frac43$-power: continuity, a limit at infinity, a parameter $k$ from the one-sided derivatives, then relative extrema | [[Lec_04-Limits and Continuity]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q2 | Four separate pieces: a limit at infinity, a perfect-square integral, a chain-rule value, and a $1^\infty$ limit | [[Lec_05-Infinite Limits]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]] |
| Q3 | Investigating the hyperbola $\frac{x+3}{x+2}$ in full, then the graph of $\lvert f(x)+3\rvert$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_03-Composition, Transformations, Exponentials and Limits]] |
| Q4 | Revenue maximisation from a price-demand equation, and a marginal-profit equation $P'(x)=28$ | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |

> [!tip] Intuition: the one move behind each question
> - Q1: differentiability at the seam means the two one-sided slopes match, and that pins down $k$. After that, extrema come from $f'=0$ on each side.
> - Q2: spot the structure first: $4x^2-12x+9$ is a perfect square, $\frac{x+2}{x+3}$ is $1+\frac{-1}{x+3}$, and the numerator $\sqrt x-\sqrt2$ is tiny compared with $x-2$ at infinity.
> - Q3: this is the textbook hyperbola. $f'=-\frac1{(x+2)^2}$ is always negative, so there are no extrema at all. The absolute value then reflects the part below the axis.
> - Q4: revenue is price times demand, and you maximise it with $R'=0$. Marginal profit equal to a number is just $P'(x)=$ that number.

---

## Q1 — A cubic glued to a $\tfrac43$-power (25 points)

**Question.**

$$
f(x)=\begin{cases}x^3-kx & x<0\\[2pt] 6\sqrt[3]{x^4}-x & x\ge0\end{cases}\qquad k\text{ is a constant.}
$$

a. Find the function's domain.
b. Show that the function is continuous in all of its domain.
c. Find the limit $\displaystyle\lim_{x\to\infty}f(x)$.
d. Use the definition of the derivative and find the value of $k$ for which the function would be differentiable at $x=0$.
e. Plug $k=1$ (even if you got a different value in part d) and find the relative extreme points of the function.

### a. Domain

$x^3-kx$ is a polynomial, defined for every $x<0$. $6\sqrt[3]{x^4}-x$ involves a cube root, defined for every real $x$, and it is used for $x\ge0$.

> [!success] Answer (the key)
> All $x$.

### b. Continuity everywhere

Each piece is continuous on its own part. Check the seam $x=0$:

1. $f(0)=6\sqrt[3]{0}-0=0$.
2. $\displaystyle\lim_{x\to0^+}f(x)=0$ and $\displaystyle\lim_{x\to0^-}(x^3-kx)=0$, for **every** $k$.
3. Value and both limits agree.

> [!success] Answer (the key)
> $f$ is continuous for all $x$ (whatever $k$ is).

### c. The limit at $+\infty$

For $x\to\infty$ use the right piece and factor out the dominant power:

$$
\lim_{x\to\infty}\left(6x^{4/3}-x\right)=\lim_{x\to\infty}x^{4/3}\left(6-\frac{1}{x^{1/3}}\right)=\infty\cdot(6-0)=\infty
$$

> [!success] Answer (the key)
> $+\infty$.

### d. Differentiability and the value of $k$

$$
f'(0)=\lim_{h\to0}\frac{f(h)-f(0)}{h}
$$

**From the right** ($h\to0^+$): $\dfrac{6h^{4/3}-h}{h}=6h^{1/3}-1\to-1$.

**From the left** ($h\to0^-$): $\dfrac{h^3-kh}{h}=h^2-k\to-k$.

The function is differentiable at $0$ exactly when the one-sided limits are equal: $-k=-1$.

> [!success] Answer (the key)
> $k=1$ (and then $f'(0)=-1$).

### e. Relative extrema for $k=1$

With $k=1$:

$$
f'(x)=\begin{cases}8x^{1/3}-1 & x\ge0\\[2pt] 3x^2-1 & x<0\end{cases}
$$

(For $x>0$: $\frac{d}{dx}6x^{4/3}=8x^{1/3}$. At $x=0$, $f'(0)=-1$ by part d.) Set each piece to zero:

- $x<0$: $3x^2=1$, so $x^2=\frac13$ and (negative root only) $x=-\sqrt{\tfrac13}\approx-0.577$.
- $x\ge0$: $8\sqrt[3]{x}=1$, so $\sqrt[3]{x}=\frac18$ and $x=\frac1{512}$.

Sign table (the key's):

| Interval | $x<-\sqrt{1/3}$ | $-\sqrt{1/3}<x<\frac1{512}$ | $x>\frac{1}{512}$ |
|---|---|---|---|
| $f'(x)$ | $+$ | $-$ | $+$ |
| $f(x)$ | increasing | decreasing | increasing |

On the middle interval $f'<0$ on both sides of $0$: $3x^2-1<0$ just left of $0$, $f'(0)=-1$, and $8\sqrt[3]{x}-1<0$ just right of $0$. So $x=0$ is not an extremum.

> [!success] Answer (the key)
> Relative **maximum** at $x=-\sqrt{\tfrac13}$ and relative **minimum** at $x=\tfrac1{512}$.

> [!tip] The $y$-coordinates (my own calculation, not in the key)
> $f\!\left(-\tfrac1{\sqrt3}\right)=x^3-x=-\tfrac1{3\sqrt3}+\tfrac1{\sqrt3}=\tfrac{2}{3\sqrt3}=\tfrac{2\sqrt3}{9}\approx0.385$, and $f\!\left(\tfrac1{512}\right)=6\cdot\tfrac1{4096}-\tfrac1{512}=-\tfrac1{2048}$. These agree with the same question's answer in [[PP_04-Rational Function Sketch, Piecewise Differentiability with a Parameter, Limits & Tangent Line (2010 Moed B)]].

---

## Q2 — Four separate pieces (25 points)

**Question.** There is no connection between the segments of this question.

a. Find the limit $\displaystyle\lim_{x\to\infty}\frac{\sqrt x-\sqrt2}{x-2}$.

b. Find the integral $\displaystyle\int\frac{1}{\sqrt[3]{4x^2-12x+9}}\,dx$.

c. Given $g(x)=\left[f\!\left(\dfrac1x\right)\right]^3$, with $f'(2)=4$ and $f(2)=2$. Find $g'\!\left(\dfrac12\right)$.

d. Find the limit $\displaystyle\lim_{x\to\infty}\left(\frac{x+2}{x+3}\right)^x$.

### a. The limit at infinity

Factor $\sqrt x$ from the numerator and $x$ from the denominator:

$$
\lim_{x\to\infty}\frac{\sqrt x\left(1-\frac{\sqrt2}{\sqrt x}\right)}{x\left(1-\frac2x\right)}=\lim_{x\to\infty}\frac{1}{\sqrt x}\cdot\frac{1-\frac{\sqrt2}{\sqrt x}}{1-\frac2x}=\frac1\infty\cdot\frac{1-0}{1-0}=0
$$

(The key writes it as $\frac{1-0}{\infty\,(1-0)}=0$.)

> [!success] Answer (the key)
> $0$.

### b. The integral

The key says only "question 5 from ex 8": it is [[PS_08-Chain Rule, Exponential and Log Derivatives and Integrals]] Question 5f. Recognise a perfect square: $4x^2-12x+9=(2x-3)^2$. So

$$
\frac{1}{\sqrt[3]{(2x-3)^2}}=(2x-3)^{-2/3}
$$

$$
\int(2x-3)^{-2/3}\,dx=\frac{(2x-3)^{1/3}}{\frac13\cdot2}+c=\frac32\sqrt[3]{2x-3}+c
$$

(Dividing by the inner derivative $2$ undoes the chain rule, and by the new exponent $\frac13$ undoes the power rule.)

> [!success] Answer (resolved from the problem set)
> $\dfrac32\sqrt[3]{2x-3}+c$.

> [!tip] Intuition (my own check)
> Differentiate the answer: $\frac32\cdot\frac13(2x-3)^{-2/3}\cdot2=(2x-3)^{-2/3}$, the original integrand.

### c. $g'\!\left(\tfrac12\right)$

Chain rule twice (outer power $3$, then the inner $\frac1x$ whose derivative is $-\frac1{x^2}$):

$$
g'(x)=3\left[f\!\left(\frac1x\right)\right]^2\cdot f'\!\left(\frac1x\right)\cdot\left(-\frac1{x^2}\right)
$$

At $x=\frac12$: $\frac1x=2$ and $-\frac1{x^2}=-4$:

$$
g'\!\left(\tfrac12\right)=3\,[f(2)]^2\,f'(2)\cdot(-4)=3\cdot2^2\cdot4\cdot(-4)=-192
$$

> [!success] Answer (the key)
> $g'\!\left(\tfrac12\right)=-192$.

### d. The $1^\infty$ limit

The base tends to $1$, so rewrite it as $1+(\text{something small})$:

$$
\frac{x+2}{x+3}=1+\frac{x+2}{x+3}-1=1+\frac{-1}{x+3}
$$

Then force the exponent to be the reciprocal of the small term, $-(x+3)$:

$$
\lim_{x\to\infty}\left(1+\frac{-1}{x+3}\right)^{x}=\lim_{x\to\infty}\left[\left(1+\frac{-1}{x+3}\right)^{-(x+3)}\right]^{\frac{-x}{x+3}}=e^{\lim\frac{-x}{x+3}}=e^{-1}
$$

because $\dfrac{-x}{x+3}=\dfrac{-1}{1+\frac3x}\to-1$.

> [!success] Answer (the key)
> $e^{-1}=\dfrac1e$.

---

## Q3 — Investigating $f(x)=\dfrac{x+3}{x+2}$ (30 points)

**Question.** Given $f(x)=\dfrac{x+3}{x+2}$.

a. Investigate the function by the following criteria:
1. Domain.
2. Axes intercept points (if any).
3. Asymptotes (if any) using the appropriate limits.
4. Find relative extreme points (if any) and increase/decrease intervals.
5. Find inflection points (if any) and concavity intervals.
6. Draw the graph.

b. Draw the graph of the function $y=\lvert f(x)+3\rvert$. (Write the coordinates of the x-intercept point in your graph.)

### a1. Domain

> [!success] Answer (the key)
> $x\neq-2$.

### a2. Intercepts

$f(0)=\dfrac32$. The x-axis: $x+3=0$, so $x=-3$.

> [!success] Answer (the key)
> y-intercept $\left(0,\tfrac32\right)$, x-intercept $(-3,0)$.

### a3. Asymptotes

**Horizontal.** Factor $x$ from both parts:

$$
\lim_{x\to\pm\infty}\frac{x+3}{x+2}=\lim_{x\to\pm\infty}\frac{x\left(1+\frac3x\right)}{x\left(1+\frac2x\right)}=\frac{1+0}{1+0}=1
$$

**Vertical** at $x=-2$ (the numerator is $1\neq0$ there):

- $x\to-2^+$: $\dfrac{1}{0^+}=+\infty$.
- $x\to-2^-$: $\dfrac{1}{0^-}=-\infty$.

> [!success] Answer (the key)
> Horizontal asymptote $y=1$ (both ends). Vertical asymptote $x=-2$.

### a4. Extrema and monotonicity

$$
f'(x)=\frac{(x+2)-(x+3)}{(x+2)^2}=\frac{-1}{(x+2)^2}<0
$$

> [!success] Answer (the key)
> $f$ is **decreasing** for every $x\neq-2$ (on each of the two pieces), so there are **no extreme points**.

### a5. Concavity and inflection points

$$
f''(x)=2(x+2)^{-3}=\frac{2}{(x+2)^3}
$$

| | $x<-2$ | $x>-2$ |
|---|---|---|
| $f''$ | $-$ | $+$ |
| Concavity | down | up |

> [!success] Answer (the key)
> Concave up for $x>-2$, concave down for $x<-2$. **No inflection points** (the sign changes only at $x=-2$, which is not in the domain).

### a6. The graph

![[PP30_q3a_hyperbola_graph.png]]

The two branches sit on either side of $x=-2$: the right branch falls from $+\infty$ through $\left(0,\tfrac32\right)$ towards $y=1$, and the left branch falls from $y=1$ through $(-3,0)$ down to $-\infty$.

### b. The graph of $y=\lvert f(x)+3\rvert$

**Step 1: shift up by 3.** $f(x)+3$ moves every point up three units. The horizontal asymptote moves from $y=1$ to $y=4$, the y-intercept becomes $\left(0,\tfrac92\right)$, and the vertical asymptote stays at $x=-2$. The new x-intercept:

$$
\frac{x+3}{x+2}+3=0\;\Rightarrow\;x+3+3(x+2)=0\;\Rightarrow\;4x=-9\;\Rightarrow\;x=-\frac94
$$

**Step 2: reflect the negative part.** The absolute value turns every part of the graph below the x-axis upwards. The shifted left branch dips below the axis between $x=-\frac94$ and the asymptote $x=-2$ (where it heads to $-\infty$), so that stretch is mirrored in the x-axis and now goes up to $+\infty$ along the asymptote. Everything else is already above the axis and stays.

![[PP30_q3b_abs_shifted_graph.png]]

> [!success] Answer (the key)
> The x-intercept is $\left(-\tfrac94,\,0\right)$ and it is now a **sharp corner** (a V-shaped tip). Horizontal asymptote $y=4$ at both ends, vertical asymptote $x=-2$ with the graph going to $+\infty$ on both sides, and the y-intercept $\left(0,\tfrac92\right)$.

---

## Q4 — Revenue maximisation and marginal profit (20 points)

**Question.** There is no connection between the segments of this question.

a. At a certain factory the price-demand equation is $0.12x^2=1296-p$, where $p$ denotes the price per unit (in \$) and $x$ denotes the demand (in units) in the domain $0<x<80$. Find the price per unit at which the factory's revenue is maximised.

b. The profit (in thousands of \$) of an ice-cream machines rental company is $P(x)=x^2-4\sqrt{(x+4)^3}$, where $x$ is the number of rented machines. Find the value of $x$ for which $P'(x)=28$ and explain the meaning of the results.

### a. Price that maximises revenue

> [!info] Source
> The key says "question 3b from 2020 A". I used the handwritten key on that paper (page 6): same equation, same domain, same question.

Solve the demand equation for the price: $p=1296-0.12x^2$. Revenue is price times quantity:

$$
R(x)=x\,(1296-0.12x^2)=1296x-0.12x^3
$$

$$
R'(x)=1296-0.36x^2=0\;\Rightarrow\;x^2=3600\;\Rightarrow\;x=60\quad(x=-60\text{ is outside the domain})
$$

Sign check: $R'>0$ for $0<x<60$ and $R'<0$ for $60<x<80$, so $x=60$ is the maximum. The question asks for the **price**, so substitute back:

$$
p(60)=1296-0.12\cdot60^2=1296-432=864
$$

> [!success] Answer (the key to 2020 A)
> The revenue is maximised at $x=60$ units, at a price of **\$864** per unit.

> [!tip] Intuition
> The question asks for the price, not the quantity, which is the classic trap: stopping at $x=60$ loses the marks.

### b. $P'(x)=28$

> [!info] Source
> The key says "question 3a from 2012 A". The wording and numbers match [[PP_07-Cube Root Investigation, Piecewise Differentiability, Marginal Profit & Limits (2012 Moed A)]] Question 3a. Its worked answer follows.

Write $P(x)=x^2-4(x+4)^{3/2}$:

$$
P'(x)=2x-4\cdot\frac32(x+4)^{1/2}=2x-6\sqrt{x+4}
$$

Set $P'(x)=28$ and isolate the root: $2x-6\sqrt{x+4}=28$, so $x-14=3\sqrt{x+4}$. Square both sides (which can add a false root, so check at the end):

$$
x^2-28x+196=9(x+4)\;\Rightarrow\;x^2-37x+160=0\;\Rightarrow\;(x-32)(x-5)=0
$$

**Check by substitution.** For $x=32$: left side $18$, right side $3\sqrt{36}=18$. Works. For $x=5$: left side $-9$, right side $3\sqrt9=9$. Fails, so reject it.

> [!success] Answer (from the 2012 A note)
> **$x=32$.** Renting the **33rd machine** increases the profit by approximately **28 thousand dollars (\$28,000)**, since profit is measured in thousands.
