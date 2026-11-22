---
title: "Piecewise Root Function, Cube Root Investigation, Marginal Profit & Limits (2025 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2025 Moed A"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - piecewise-functions
  - definition-of-derivative
  - definite-integral
  - limits
  - euler-limit
  - function-investigation
  - cusp
  - marginal-profit
  - composite-tangent
aliases:
  - Math I 2025 Moed A
  - PP33 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Piecewise Root Function, Cube Root Investigation, Marginal Profit & Limits (2025 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2025 (Moed A)**, Hever Schulberg. 4 questions (20, 25, 30, 25 points), 3 hours, non-graphing calculator and formula sheet allowed.
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_04-Limits and Continuity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The exam is on pages 2 to 3 of the source PDF (page 1 is the cover sheet). The **handwritten, unsigned key (author unclear)** is on pages 4 to 9. Q1e, Q3 and Q4a-b are worked in the key. The other parts point to an exam or exercise ("segments a to d are question 1 from 2022 Moed A"); the answer is then taken from that source after checking that the wording and numbers match. Each part says where its answer comes from.

> [!warning] Parts that are AI-written, not from the key
> - **Q2c** ($\lim_{x\to-\infty}\frac{\sqrt{x^2+1}}{x}$): the key only says "second example in the lesson 5 video, more limits at infinity". Solved here.
> - **Inflection value in Q3d:** the key marks the inflection point $x=-1.2$ but does not give its height. The value $\approx-0.41$ is computed here.
>
> Every other part follows the key (author unclear), directly or through the exam or exercise it points to.

> [!note] Labels in the question 2 and the key
> The printed exam labels the segments of Q2 as **a, b, c, f** (there is no d or e). The key labels the last one "d". This note uses the printed label **f**.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Piecewise $x^2+2x$ and $\sqrt x$: domain, continuity, a one-sided infinite slope, extremes; then a definite integral that does not depend on $\alpha$ | [[Lec_04-Limits and Continuity]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q2 | Three limits (a conjugate, an Euler limit, a root at $-\infty$) and tangent lines of $f(2x)$ and $f(x^2+1)$ | [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |
| Q3 | Full investigation of $f(x)=x\,(x+1)^{2/3}$ (a **cusp**), then the graph of $\left|(x-1)\,x^{2/3}\right|$ by a shift and a reflection | [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |
| Q4 | Marginal cost and revenue, then maximum profit and the sign of marginal profit | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |

> [!tip] Intuition: the one move behind each question
> - Q1: $\sqrt x$ is vertical at $0$ (infinite slope on the right) while $x^2+2x$ has slope $2$ there, so no derivative at $0$.
> - Q2: for a limit at $-\infty$ with a square root, remember $\sqrt{x^2}=-x$.
> - Q3: $(x+1)^{2/3}$ has a sharp cusp at $x=-1$ because its derivative is undefined there.
> - Q4: "marginal" always means "the next unit": $C'(5)$ is the cost of unit number $5001$ when $x$ counts thousands.

---

## Q1 — A piecewise root function and an integral (20 points)

**Question.** Given

$$
f(x)=\begin{cases}x^2+2x&x<0\\ \sqrt x&x\ge0\end{cases}
$$

a. Find the function's domain. Explain your considerations.
b. Find the function's interval of continuity. Explain your considerations.
c. Use the definition of the derivative to find if the function is differentiable at $x=0$.
d. Find relative extreme points (if any) and increase and decrease intervals.

Unrelated to the previous segments:

e. Find the value of the definite integral $\displaystyle\int_0^{1/\alpha}\frac{2\alpha}{(1+\alpha x)^2}\,dx$ when $\alpha>0$ is a constant, and show that the result is independent of $\alpha$.

The key says segments a to d are **question 1 from 2022 Moed A**: same function, and its parts 1 to 8 include these. The answers below are that key's.

### a. Domain

The top piece $x^2+2x$ is a polynomial, defined for every $x<0$. The bottom piece $\sqrt x$ is defined for every $x\ge0$. Between them the two pieces cover the whole line.

> [!success] Answer (the key via 2022 Moed A Q1)
> The domain is **all $x$**.

### b. Continuity

Each piece is continuous on its own interval. Check the seam $x=0$:

1. $f(0)=\sqrt0=0$.
2. Right: $\displaystyle\lim_{x\to0^+}\sqrt x=0$. Left: $\displaystyle\lim_{x\to0^-}(x^2+2x)=0$. Both are $0$, so the limit exists.
3. The limit equals $f(0)$.

> [!success] Answer (the key via 2022 Moed A Q1)
> $f$ is **continuous for all $x$**.

### c. Differentiability at $x=0$ from the definition

$$
f'(0)=\lim_{h\to0}\frac{f(h)-f(0)}{h}=\lim_{h\to0}\frac{f(h)}{h}
$$

- **Right** ($h\to0^+$, use $\sqrt h$): $\displaystyle\lim_{h\to0^+}\frac{\sqrt h}{h}=\lim_{h\to0^+}\frac1{\sqrt h}=\frac1{0^+}=\infty$.
- **Left** ($h\to0^-$, use $h^2+2h$): $\displaystyle\lim_{h\to0^-}\frac{h^2+2h}{h}=\lim_{h\to0^-}(h+2)=2$.

> [!success] Answer (the key via 2022 Moed A Q1)
> The one-sided limits are $\infty$ and $2$, so the limit does not exist: **$f$ is not differentiable at $x=0$**.

### d. Extreme points and increase / decrease

$$
f'(x)=\begin{cases}2x+2 & x<0\\[4pt] \dfrac1{2\sqrt x} & x>0\end{cases}
$$

$f'(x)=0$ at $x=-1$ (from $2x+2=0$, and $-1<0$ is allowed). $f'$ is undefined at $x=0$ (the one-sided slopes above). So the critical points are $-1$ and $0$.

| Interval | $f'$ | $f$ |
|---|---|---|
| $x<-1$ | $-$ | decreasing |
| $-1<x<0$ | $+$ | increasing |
| $x>0$ | $+$ | increasing |

$f$ decreases and then increases at $x=-1$: a minimum with $f(-1)=1-2=-1$. At $x=0$ the sign does not change ($+$ on both sides), so there is **no extremum** there.

> [!success] Answer (the key via 2022 Moed A Q1)
> Relative **minimum at $(-1,\,-1)$**. Increasing for $x>-1$; decreasing for $x<-1$.

### e. $\displaystyle\int_0^{1/\alpha}\frac{2\alpha}{(1+\alpha x)^2}\,dx$

Pull out the constant $2\alpha$ and integrate $(1+\alpha x)^{-2}$. The inner function $1+\alpha x$ has derivative $\alpha$, so dividing by $\alpha$ compensates:

$$
2\alpha\int_0^{1/\alpha}(1+\alpha x)^{-2}\,dx=2\alpha\left[\frac{(1+\alpha x)^{-1}}{(-1)\,\alpha}\right]_0^{1/\alpha}=-2\left[\frac1{1+\alpha x}\right]_0^{1/\alpha}
$$

Substitute the limits. At the top, $\alpha\cdot\tfrac1\alpha=1$, so $\dfrac1{1+1}=\dfrac12$. At the bottom, $\dfrac1{1+0}=1$:

$$
-2\left(\frac12-1\right)=-2\cdot\left(-\frac12\right)=1
$$

> [!success] Answer (the key, author unclear)
> The integral equals **$1$**. The $\alpha$ cancelled at every step, so the result is independent of $\alpha$.

> [!tip] Intuition
> The upper limit $\tfrac1\alpha$ is chosen so that $\alpha x$ runs from $0$ to $1$ whatever $\alpha$ is. Substituting $u=\alpha x$ turns the integral into $\displaystyle\int_0^1\frac{2}{(1+u)^2}du$, which has no $\alpha$ in it.

---

## Q2 — Four unrelated segments (25 points)

### a. $\displaystyle\lim_{x\to3}\frac{1-\sqrt{x-2}}{x-3}$

Substituting $x=3$ gives $\tfrac00$. Multiply by the conjugate $1+\sqrt{x-2}$:

$$
\frac{1-\sqrt{x-2}}{x-3}\cdot\frac{1+\sqrt{x-2}}{1+\sqrt{x-2}}=\frac{1-(x-2)}{(x-3)\left(1+\sqrt{x-2}\right)}=\frac{-(x-3)}{(x-3)\left(1+\sqrt{x-2}\right)}=\frac{-1}{1+\sqrt{x-2}}
$$

$$
\lim_{x\to3}\frac{-1}{1+\sqrt{x-2}}=\frac{-1}{1+1}=-\frac12
$$

> [!success] Answer (the key via Exercise 4 Q7(8))
> $-\dfrac12$. See [[PS_04-Limits and Continuity]] (Q7, part 8): the same limit.

### b. $\displaystyle\lim_{x\to0}(1+x)^{2/x}$

Split the exponent: $(1+x)^{2/x}=\left[(1+x)^{1/x}\right]^2$. The standard Euler limit is $(1+x)^{1/x}\to e$ as $x\to0$.

$$
\lim_{x\to0}(1+x)^{2/x}=e^2
$$

> [!success] Answer (the key via Exercise 6 Q2(f))
> $e^2$. See [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]] (Q2f).

### c. $\displaystyle\lim_{x\to-\infty}\frac{\sqrt{x^2+1}}{x}$

> [!warning] AI-written answer, not official. Check before relying on it.
> The key says this is the second example of the lesson 5 video ("more limits at infinity"), with no written answer. The working below follows the reconstruction in [[Lec_05-Infinite Limits]] (item 9).

As $x\to-\infty$, $x$ is **negative**, so $\sqrt{x^2}=|x|=-x$. Pull $x^2$ out of the root:

$$
\sqrt{x^2+1}=\sqrt{x^2\left(1+\tfrac1{x^2}\right)}=|x|\sqrt{1+\tfrac1{x^2}}=-x\sqrt{1+\tfrac1{x^2}}
$$

$$
\frac{\sqrt{x^2+1}}{x}=\frac{-x\sqrt{1+\frac1{x^2}}}{x}=-\sqrt{1+\frac1{x^2}}\;\longrightarrow\;-\sqrt{1+0}=-1
$$

> [!success] Answer (AI-written)
> $-1$. (The same limit as $x\to+\infty$ would be $+1$: only the sign of $x$ changes.)

### f. Tangent lines of composites of $f$ (printed label f; the key calls it "d")

**Data.** $f$ is differentiable, and: the tangent slope at $x=0$ is $1$; the graph meets the $y$-axis at $y=2$; the graph goes through $(1,3)$.

i. For $y_2=f(2x)$, find the equation of the tangent line at $x=0$.
ii. For $y_1=f(x^2+1)$, find the equation of the tangent line at $x=0$.

The key says this is Exercise 9, Question 4. The data and both functions match [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] (Q4).

In notation the data is $f'(0)=1$, $f(0)=2$, $f(1)=3$.

**i. $y_2=f(2x)$.** The point is $y_2(0)=f(0)=2$. By the chain rule $y_2'(x)=2f'(2x)$, so $y_2'(0)=2f'(0)=2$. Tangent line: $y-2=2(x-0)$.

**ii. $y_1=f(x^2+1)$.** The point is $y_1(0)=f(0^2+1)=f(1)=3$. By the chain rule $y_1'(x)=f'(x^2+1)\cdot2x$, so $y_1'(0)=f'(1)\cdot0=0$ (whatever $f'(1)$ is). The tangent line is horizontal through $(0,3)$.

> [!success] Answer (the key via Exercise 9 Q4)
> i. $y=2x+2$. ii. $y=3$.

> [!tip] Intuition
> Compose first, then ask which point the inner function sends $x=0$ to: $2x\to0$ in (i), but $x^2+1\to1$ in (ii). In (ii) the inner function is flat at $x=0$ (its derivative $2x$ is $0$), which kills the slope.

---

## Q3 — Investigating $f(x)=x\,(x+1)^{2/3}$ (30 points)

**Question.** Given $f(x)=x\cdot(x+1)^{2/3}$.

a. Find the domain and the asymptotes (if any) using the appropriate limits.
b. Find axes intercept points (if any).
c. Show that $f'(x)=\dfrac{5x+3}{3(x+1)^{1/3}}$, find relative extreme points (if any) and categorise them as minimum or maximum.
d. Show that $f''(x)=\dfrac{10x+12}{9(x+1)^{4/3}}$ and find inflection points (if any).
e. Draw the graph.
f. Graph the function $y=\left|(x-1)\cdot x^{2/3}\right|$.

### a. Domain and asymptotes

$(x+1)^{2/3}=\left(\sqrt[3]{x+1}\right)^2$ and a cube root exists for every real number.

> [!success] Answer (the key, author unclear)
> The domain is **all $x$**. There is **no vertical asymptote** because $f$ is continuous everywhere.

Horizontal asymptotes need the limits at $\pm\infty$:

$$
\lim_{x\to\infty}x\sqrt[3]{(x+1)^2}=\infty\cdot\sqrt[3]{\infty}=\infty,\qquad \lim_{x\to-\infty}x\sqrt[3]{(x+1)^2}=-\infty\cdot\sqrt[3]{\infty}=-\infty
$$

> [!success] Answer (the key, author unclear)
> The limits are $+\infty$ and $-\infty$, so there is **no horizontal asymptote**.

> [!tip] Intuition
> $f$ behaves like $x\cdot x^{2/3}=x^{5/3}$ for large $|x|$, which grows faster than any straight line, so there is no oblique asymptote either (my remark, not asked).

### b. Intercepts

- $y$-axis: $f(0)=0$, the point $(0,\,0)$.
- $x$-axis: $x\,(x+1)^{2/3}=0$ gives $x=0$ or $(x+1)^{2/3}=0$, so $x=-1$.

> [!success] Answer (the key, author unclear)
> $(0,\,0)$ and $(-1,\,0)$.

### c. First derivative and extreme points

Product rule with $\dfrac{d}{dx}(x+1)^{2/3}=\dfrac23(x+1)^{-1/3}$:

$$
f'(x)=1\cdot(x+1)^{2/3}+x\cdot\frac23(x+1)^{-1/3}=(x+1)^{2/3}+\frac{2x}{3(x+1)^{1/3}}
$$

Common denominator: $(x+1)^{2/3}=\dfrac{3(x+1)}{3(x+1)^{1/3}}$, so

$$
f'(x)=\frac{3(x+1)+2x}{3(x+1)^{1/3}}=\frac{5x+3}{3(x+1)^{1/3}}
$$

- $f'(x)=0$ when $5x+3=0$, so $x=-\tfrac35$.
- $f'(x)$ is **undefined** at $x=-1$ (zero denominator), though $f(-1)$ exists.

Sign table. The denominator $3(x+1)^{1/3}$ has the sign of $x+1$; the numerator $5x+3$ is negative for $x<-\tfrac35$:

| Interval | $5x+3$ | $(x+1)^{1/3}$ | $f'$ | $f$ |
|---|---|---|---|---|
| $x<-1$ | $-$ | $-$ | $+$ | increasing |
| $-1<x<-\tfrac35$ | $-$ | $+$ | $-$ | decreasing |
| $x>-\tfrac35$ | $+$ | $+$ | $+$ | increasing |

> [!success] Answer (the key, author unclear)
> **Relative maximum at $x=-1$**, the point $(-1,\,0)$ (a cusp, since $f'$ is undefined there). **Relative minimum at $x=-\tfrac35$**, with $f\!\left(-\tfrac35\right)=-\tfrac35\left(\tfrac25\right)^{2/3}\approx-0.33$.

### d. Second derivative and inflection points

Quotient rule on $f'=\dfrac{5x+3}{3(x+1)^{1/3}}$:

$$
f''(x)=\frac{5\cdot3(x+1)^{1/3}-(5x+3)(x+1)^{-2/3}}{9(x+1)^{2/3}}
$$

Multiply top and bottom by $(x+1)^{2/3}$ to clear the negative power:

$$
f''(x)=\frac{15(x+1)-(5x+3)}{9(x+1)^{2/3}\cdot(x+1)^{2/3}}=\frac{10x+12}{9(x+1)^{4/3}}
$$

- $f''(x)=0$ at $x=-\tfrac{12}{10}=-1.2$.
- $f''(x)$ is **undefined** at $x=-1$.

The denominator $9(x+1)^{4/3}=9\left(\sqrt[3]{x+1}\right)^4$ is positive for every $x\neq-1$, so the sign of $f''$ is the sign of $10x+12$:

| Interval | $f''$ | $f$ |
|---|---|---|
| $x<-1.2$ | $-$ | concave down ($\cap$) |
| $-1.2<x<-1$ | $+$ | concave up ($\cup$) |
| $x>-1$ | $+$ | concave up ($\cup$) |

Concavity changes at $x=-1.2$ only. At $x=-1$ it stays concave up on both sides, so $x=-1$ is **not** an inflection point (it is the cusp).

> [!success] Answer (the key, author unclear)
> One inflection point, at **$x=-1.2$**. 

> [!warning] AI-written value, not official
> The key marks $x=-1.2$ but gives no $y$-value. Computed here: $f(-1.2)=(-1.2)(-0.2)^{2/3}=-1.2\cdot(0.2)^{2/3}\approx-0.41$, so the point is about $(-1.2,\,-0.41)$.

### e. The graph of $f$

Put the pieces together: rising and concave down for $x<-1.2$, still rising but concave up from $-1.2$ to the cusp at $(-1,0)$, falling to the minimum near $\left(-\tfrac35,-0.33\right)$, then rising through the origin without bound.

![[PP33_q3_graph_of_f.png]]

> [!success] Answer (the key, author unclear)
> The graph in the key shows exactly this: an upward cusp at $x=-1$ with the curve concave up either side of it, an inflection at $x=-1.2$, and a minimum between $-1$ and $0$.

### f. The graph of $y=\left|(x-1)\cdot x^{2/3}\right|$

Compare with $f(x)=x\,(x+1)^{2/3}$. Replace $x$ by $x-1$:

$$
f(x-1)=(x-1)\,\bigl((x-1)+1\bigr)^{2/3}=(x-1)\,x^{2/3}
$$

So the function inside the absolute value is **$f$ shifted one unit to the right**. Then the absolute value **reflects the negative part** above the $x$-axis.

1. **Shift right $1$** (see [[Horizontal Translation]]): every feature of $f$ moves $1$ to the right. The cusp $(-1,0)$ goes to $(0,0)$; the minimum $x=-\tfrac35$ goes to $x=\tfrac25$; the inflection $x=-1.2$ goes to $x=-0.2$; the other zero $(0,0)$ goes to $(1,0)$.
2. **Reflect the negative part.** The shifted graph is negative for $x<1$ (everywhere except at its zero at $0$), so the whole part to the left of $x=1$ is reflected up. For $x>1$ it is already positive.

Result: a cusp at $(0,0)$ (vertical tangent, because of $x^{2/3}$), a hump with its top at $x=\tfrac25$ (the reflected minimum, height about $0.33$), a corner at $(1,0)$, and branches that rise without bound on both sides. The key marks $-0.2$ and $1$ on its sketch.

![[PP33_q3_graph_abs_shifted.png]]

> [!success] Answer (the key, author unclear)
> The key: "translating the graph one unit to the right and reflecting the negative part". The sketch matches the figure above.

---

## Q4 — Monthly revenue, cost and profit (25 points)

**Question.** The monthly revenue (in thousands of dollars) from producing and selling $x$ **thousand** products is

$$
R(x)=40(x+6)^{3/2}+400x
$$

while the monthly cost (in thousands of dollars) of production is $C(x)=30x^2+40x$.

a. Find $C'(5)$ and explain the financial meaning of the result.
b. Find $R'(3)$ and explain the financial meaning of the result.
c. How many units should be sold monthly to achieve maximal profit?
d. Find the marginal profit at a monthly production level of $3000$ units and explain the financial meaning of the result.
e. Can you find an interval of $x$ on which the marginal profit is increasing with $x$? If so, find it, and if not, explain why not.

Segments c, d and e are from the 2011 Moed A exam, question 4 (its parts b, a and c in that order). The same $R$ and $C$ appear there; see [[PP_05-Parameter from an Extremum, W-Shaped Investigation, Piecewise Limits & Profit Maximisation (2011 Moed A)]].

### a. $C'(5)$

$$
C'(x)=60x+40\;\Longrightarrow\;C'(5)=340
$$

> [!success] Answer (the key, author unclear)
> $C'(5)=340$. At a monthly production level of $5{,}000$ units, producing $1{,}000$ units more would increase the cost by about **$\$340{,}000$**.

### b. $R'(3)$

Chain rule on $(x+6)^{3/2}$:

$$
R'(x)=40\cdot\frac32(x+6)^{1/2}+400=60\sqrt{x+6}+400\;\Longrightarrow\;R'(3)=60\cdot3+400=580
$$

> [!success] Answer (the key, author unclear)
> $R'(3)=580$. At a monthly sales level of $3{,}000$ units, selling $1{,}000$ units more would increase the revenue by about **$\$580{,}000$**.

### c. Units for maximal profit

Profit is revenue minus cost:

$$
P(x)=R(x)-C(x)=40(x+6)^{3/2}+400x-30x^2-40x=40(x+6)^{3/2}+360x-30x^2
$$

$$
P'(x)=60\sqrt{x+6}+360-60x
$$

Set $P'(x)=0$ and isolate the root:

$$
60\sqrt{x+6}=60x-360\;\Longrightarrow\;\sqrt{x+6}=x-6
$$

Square both sides:

$$
x+6=x^2-12x+36\;\Longrightarrow\;x^2-13x+30=0\;\Longrightarrow\;(x-10)(x-3)=0
$$

Squaring can create false solutions, so **check** both in $\sqrt{x+6}=x-6$:

- $x=3$: left $\sqrt9=3$, right $3-6=-3$. False, reject.
- $x=10$: left $\sqrt{16}=4$, right $10-6=4$. True.

The second derivative $P''(x)=\dfrac{30}{\sqrt{x+6}}-60$ gives $P''(10)=\tfrac{30}{4}-60=-52.5<0$, so $x=10$ is a maximum.

> [!success] Answer (the key via 2011 Moed A Q4)
> $x=10$ **thousand units**: sell **$10{,}000$ units** a month. (My addition, not asked: the maximal profit is $P(10)=2560+3600-3000=3160$ thousand dollars.)

### d. Marginal profit at $3000$ units

$x$ counts thousands, so $3000$ units is $x=3$:

$$
P'(3)=60\sqrt9+360-180=180+360-180=360
$$

> [!success] Answer (the key via 2011 Moed A Q4)
> $P'(3)=360$. At a monthly production level of $3{,}000$ units, selling an additional $1{,}000$ units would increase the profit by about **$\$360{,}000$**.

### e. Is the marginal profit ever increasing?

Marginal profit is $P'$, so look at the sign of $P''$:

$$
P''(x)=\frac{30}{\sqrt{x+6}}-60
$$

For $x\ge0$, $\sqrt{x+6}\ge\sqrt6>2$, so $\dfrac{30}{\sqrt{x+6}}<15<60$ and $P''(x)<0$.

> [!success] Answer (the key via 2011 Moed A Q4)
> **No.** $P''<0$ for every $x\ge0$, so the marginal profit is **decreasing on the whole domain** and there is no interval where it increases.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result | Source |
> |---|---|---|
> | Q1a-b | domain all $x$; continuous for all $x$ | key via 2022 Moed A Q1 |
> | Q1c | not differentiable at $0$ (slopes $\infty$ and $2$) | key via 2022 Moed A Q1 |
> | Q1d | minimum $(-1,-1)$; increasing $x>-1$, decreasing $x<-1$ | key via 2022 Moed A Q1 |
> | Q1e | $1$ | key |
> | Q2a | $-\tfrac12$ | key via Exercise 4 Q7(8) |
> | Q2b | $e^2$ | key via Exercise 6 Q2(f) |
> | Q2c | $-1$ | AI-written |
> | Q2f | $y=2x+2$ and $y=3$ | key via Exercise 9 Q4 |
> | Q3a-b | domain all $x$, no asymptotes; $(0,0)$ and $(-1,0)$ | key |
> | Q3c | max (cusp) at $x=-1$, min at $x=-\tfrac35$ | key |
> | Q3d | inflection at $x=-1.2$ only | key |
> | Q3e-f | graphs above | key |
> | Q4a-b | $C'(5)=340$; $R'(3)=580$ | key |
> | Q4c | $x=10$ (thousand units) | key via 2011 Moed A Q4 |
> | Q4d | $P'(3)=360$ | key via 2011 Moed A Q4 |
> | Q4e | no: $P''<0$ everywhere | key via 2011 Moed A Q4 |
