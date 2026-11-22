---
title: "Rational Root Function Investigation, Limits, Car Value & Euler Piecewise (2022 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2022 Moed B"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - removable-discontinuity
  - asymptotes
  - reflection
  - domain
  - limits
  - composition
  - definition-of-derivative
  - car-value
  - marginal-value
  - euler-limit
  - continuity
  - chain-rule
aliases:
  - Math I 2022 Moed B
  - PP28 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Rational Root Function Investigation, Limits, Car Value & Euler Piecewise (2022 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2022 (Moed B)**, Hever Schulberg. 4 questions (30, 25, 25, 20 points), 3 hours, non-graphing calculator and formula sheet allowed.
> Builds on: [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_03-Composition, Transformations and Exponential Graphs]], [[PS_04-Limits and Continuity]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]
> Same car as: [[PP_12-Domain, Extrema, Vertical Tangent, Car Value Piecewise (2014 Moed B)]] (Q3)

> [!info] Source
> The exam is on pages 2 and 3 of the source PDF (page 1 is the cover). The **handwritten, unsigned key (author unclear)** is on pages 4 to 7. It works **Q1 and Q4 in full** and gives **only Q3c** worked. For the rest it points elsewhere ("question 5b from ex 3", "lesson 5 in class", "lesson 3 in class", "question 4 from ex 6", "question 3 from exam 2014 B").
> - **Q3a and Q3b:** the key points to exam 2014 B. I read that exam's note, [[PP_12-Domain, Extrema, Vertical Tangent, Car Value Piecewise (2014 Moed B)]], Question 3, and checked the wording and numbers: same car ($\$25{,}000$), same $V(x)=\frac{22{,}000}{0.5x+1}+3000$, same 2 years constant, same linear rise to $\$20{,}000$ at year 30. They match, so I use that note's worked answers and cite it.
> - **Q2a to Q2d:** the key gives no worked answer (only lesson or problem-set pointers). I solved them myself. Q2d also matches [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]] Question 4c, which I checked (see the warning below).

> [!warning] AI-solved parts in this note
> **Q2a, Q2b, Q2c and Q2d** are **AI-written, not from the key.** Each opens with its own warning callout. Check them before relying on them. Q3a and Q3b are taken from the 2014 B note (same numbers, verified), and everything in Q1, Q3c and Q4 follows the key.

> [!warning] Points where the key needs a check
> - **Q3c:** the key writes $V'(x)=1.875$ and "constant at 1.875 \$ per year". In dollars the slope is $\frac{20{,}000-5000}{30-22}=1875$ dollars per year (see Q3). I read the key's "1.875" as **1,875** written with a point as the thousands separator, but as written it is off by a factor of 1000. Kept visible here and not silently changed.
> - **Q1a5:** the key writes "$f'(x)=0$: none" and shows the squaring step, which does give $x=2$, a value outside the domain. That is consistent. I add why the sign is positive on both sides.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Investigating a root-over-linear function with a **removable discontinuity** (hole) at $x=2$ and two different horizontal asymptotes; then the graph of $f(-x)$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_03-Composition, Transformations, Exponentials and Limits]] |
| Q2 | Four separate pieces: domain of an exponential quotient, a limit with an absolute value, composition, and a tangent slope from the definition | [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_05-Infinite Limits]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_07-The Derivative, Differentiability and Rules]] |
| Q3 | A three-stage car value function: write the piecewise equation, the direction of the rate of change, and a constant marginal value | [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |
| Q4 | A piecewise function with an Euler piece: a limit at $-\infty$, continuity with a parameter, and a derivative through a chain rule | [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_04-Limits and Continuity]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] |

> [!tip] Intuition: the one move behind each question
> - Q1: $\sqrt{x^2+5}-3$ vanishes at $x=2$, exactly where the denominator does. After rationalising, the zero cancels, which gives a **hole**, not a vertical asymptote.
> - Q2: factor first. A quadratic in $e^x$ becomes $(t+1)(t-e)$, and a quotient with $\lvert x\rvert$ hides a $\frac{1}{\lvert x\rvert}$.
> - Q3: the car's value falls steeply, then flattens, then stays constant, then rises along a line. The slope on the last stretch is just rise over run.
> - Q4: a limit of the form $(1+ax)^{a/x}$ becomes $e$ to a power once you rewrite the exponent as a multiple of $\frac1{ax}$, the reciprocal of the small term inside the bracket.

---

## Q1 — Investigating $f(x)=\dfrac{\sqrt{x^2+5}-3}{2x-4}$ (30 points)

**Question.** Given $f(x)=\dfrac{\sqrt{x^2+5}-3}{2x-4}$.

a. Investigate the function by the following criteria:
1. Domain.
2. Axes intercept points (if any).
3. Asymptotes (if any) using the appropriate limits.
4. Show that the derivative is $f'(x)=\dfrac{3\sqrt{x^2+5}-2x-5}{2(x-2)^2\sqrt{x^2+5}}$.
5. Find relative extreme points (if any) and increase/decrease intervals.
6. Draw the graph.

b. Draw the graph of the function $y=\dfrac{\sqrt{x^2+5}-3}{-2x-4}$.

### a1. Domain

The root $\sqrt{x^2+5}$ is defined for every $x$ since $x^2+5>0$. The denominator must not be zero: $2x-4\neq0$.

> [!success] Answer (the key)
> $x\neq2$.

### a2. Intercepts

**y-axis:** $f(0)=\dfrac{\sqrt5-3}{-4}=\dfrac{3-\sqrt5}{4}\approx0.19$.

**x-axis:** the numerator must be zero:

$$
\sqrt{x^2+5}=3\;\Rightarrow\;x^2+5=9\;\Rightarrow\;x^2=4\;\Rightarrow\;x=\pm2
$$

$x=2$ is **not in the domain**, so it is rejected (the key crosses it out). Only $x=-2$ is left.

> [!success] Answer (the key)
> y-intercept $(0,\,0.19)$. x-intercept $(-2,\,0)$.

### a3. Asymptotes

**Horizontal.** Take the limit at both ends. For large $\lvert x\rvert$ the root is about $\lvert x\rvert$, so the sign of $x$ matters:

$$
\lim_{x\to\pm\infty}\frac{\sqrt{x^2\left(1+\frac5{x^2}\right)}-3}{2x-4}=\lim_{x\to\pm\infty}\frac{\pm x\sqrt{1+\frac5{x^2}}-3}{x\left(2-\frac4x\right)}=\pm\frac{1}{2}
$$

(For $x\to+\infty$, $\sqrt{x^2}=x$. For $x\to-\infty$, $\sqrt{x^2}=-x$, which flips the sign.)

**Vertical, the suspect at $x=2$.** At $x=2$ the numerator is $\sqrt9-3=0$ and the denominator is $0$: it is a $\frac00$ form. Multiply by the conjugate:

$$
\lim_{x\to2}\frac{\sqrt{x^2+5}-3}{2x-4}\cdot\frac{\sqrt{x^2+5}+3}{\sqrt{x^2+5}+3}=\lim_{x\to2}\frac{x^2-4}{2(x-2)\left(\sqrt{x^2+5}+3\right)}=\lim_{x\to2}\frac{x+2}{2\left(\sqrt{x^2+5}+3\right)}=\frac{4}{2(3+3)}=\frac13
$$

The limit is a finite number, so the function does not blow up at $x=2$: this is a **removable discontinuity** (a hole) at $\left(2,\frac13\right)$.

> [!success] Answer (the key)
> Horizontal asymptotes $y=\frac12$ (as $x\to\infty$) and $y=-\frac12$ (as $x\to-\infty$). **No vertical asymptote at $x=2$**: it is a discontinuity point (hole) at $\left(2,\frac13\right)$.

### a4. The derivative

Quotient rule with $u=\sqrt{x^2+5}-3$ (so $u'=\frac{x}{\sqrt{x^2+5}}$) and $v=2x-4$ (so $v'=2$):

$$
f'(x)=\frac{\dfrac{x}{\sqrt{x^2+5}}(2x-4)-\left(\sqrt{x^2+5}-3\right)\cdot2}{(2x-4)^2}
$$

Put the numerator over the common denominator $\sqrt{x^2+5}$:

$$
\frac{x(2x-4)-2(x^2+5)+6\sqrt{x^2+5}}{\sqrt{x^2+5}}=\frac{2x^2-4x-2x^2-10+6\sqrt{x^2+5}}{\sqrt{x^2+5}}=\frac{6\sqrt{x^2+5}-4x-10}{\sqrt{x^2+5}}
$$

With $(2x-4)^2=4(x-2)^2$:

$$
f'(x)=\frac{6\sqrt{x^2+5}-4x-10}{4(x-2)^2\sqrt{x^2+5}}=\frac{3\sqrt{x^2+5}-2x-5}{2(x-2)^2\sqrt{x^2+5}}
$$

(dividing top and bottom by $2$), which is the form requested.

### a5. Extrema and monotonicity

- **$f'$ undefined** at $x=2$ (outside the domain).
- **$f'=0$** needs $3\sqrt{x^2+5}=2x+5$. Square both sides:

$$
9(x^2+5)=4x^2+20x+25\;\Rightarrow\;5x^2-20x+20=0\;\Rightarrow\;x=2
$$

But $x=2$ is not in the domain, so **there is no point with $f'=0$**.

So the sign of $f'$ never changes. The key's sign table shows $+$ on both sides of $x=2$. To see why: $9(x^2+5)-(2x+5)^2=5(x-2)^2\ge0$, so $3\sqrt{x^2+5}\ge\lvert2x+5\rvert\ge2x+5$, and the numerator $3\sqrt{x^2+5}-2x-5$ is never negative. The denominator is positive for $x\neq2$. For example $f'(0)\approx\dfrac{3\sqrt5-5}{2\cdot4\cdot\sqrt5}>0$.

> [!success] Answer (the key)
> Increasing for $x\neq2$ (on $(-\infty,2)$ and on $(2,\infty)$). Decreasing: none. **No relative extreme points.**

### a6. The graph

![[PP28_q1_investigation_graph.png]]

The graph rises steadily from the lower asymptote $y=-\frac12$ on the left, through $(-2,0)$ and $(0,0.19)$, with an open hole at $\left(2,\frac13\right)$, and levels off towards $y=\frac12$ on the right.

### b. The graph of $y=\dfrac{\sqrt{x^2+5}-3}{-2x-4}$

Replace $x$ by $-x$ in $f$:

$$
f(-x)=\frac{\sqrt{(-x)^2+5}-3}{2(-x)-4}=\frac{\sqrt{x^2+5}-3}{-2x-4}
$$

So this is $f(-x)$: the graph of $f$ **reflected in the y-axis**. Each feature mirrors:

| Feature of $f$ | In $f(-x)$ |
|---|---|
| x-intercept $(-2,0)$ | $(2,0)$ |
| y-intercept $(0,0.19)$ | $(0,0.19)$ (on the axis, unchanged) |
| hole $\left(2,\frac13\right)$ | hole $\left(-2,\frac13\right)$ |
| asymptote $y=\frac12$ at the right end | $y=\frac12$ at the **left** end |
| asymptote $y=-\frac12$ at the left end | $y=-\frac12$ at the **right** end |
| increasing | decreasing |

![[PP28_q1b_reflected_graph.png]]

> [!success] Answer (the key)
> The reflection of the graph in the y-axis: a decreasing curve through $(0,0.19)$ and $(2,0)$, with a hole at $\left(-2,\frac13\right)$, and asymptotes $y=\frac12$ on the left and $y=-\frac12$ on the right.

---

## Q2 — Four separate pieces (25 points)

**Question.** There is no connection between the parts.

a. Find the domain of the function $f(x)=\dfrac{e^x}{e^{2x}+e^x-e\cdot e^x-e}$.

b. Find the limit $\displaystyle\lim_{x\to0}\frac{x-2}{\lvert x^2-2x\rvert}$.

c. Given $f(x)=2-x$ and $g(x)=\sqrt x$. Can we write the function $y=2-\sqrt x$ as a composition of the two given functions? If so, show it, and if not, explain why.

d. Given $f(x)=\dfrac1{x+2}$. Use the **definition of the derivative** to find the slope of the tangent line to the graph at $x=1$.

> [!info] No worked key
> The key only points ("question 5b from ex 3", "lesson 5 in class, video: infinite limits", "lesson 3 in class, video: composition of functions", "question 4 from ex 6"). All four answers below are mine.

### a. Domain

> [!warning] AI-written answer, not official. Check before relying on it.

The exponential is defined everywhere, so the only restriction is that the denominator is not zero. Substitute $t=e^x$ (so $t>0$):

$$
e^{2x}+e^x-e\cdot e^x-e=t^2+t-et-e=t(t+1)-e(t+1)=(t+1)(t-e)
$$

This is zero when $t=-1$ or $t=e$. The case $t=e^x=-1$ is impossible, since $e^x>0$. The case $t=e$ means $e^x=e$, so $x=1$.

> [!success] Answer (AI-written)
> The domain is **all real $x$ except $x=1$**.

### b. The limit at $0$

> [!warning] AI-written answer, not official. Check before relying on it.

Factor the absolute value: $\lvert x^2-2x\rvert=\lvert x\rvert\,\lvert x-2\rvert$. Near $x=0$ we have $x-2<0$, so $\lvert x-2\rvert=2-x=-(x-2)$:

$$
\frac{x-2}{\lvert x\rvert\,\lvert x-2\rvert}=\frac{x-2}{\lvert x\rvert\cdot\left(-(x-2)\right)}=-\frac{1}{\lvert x\rvert}
$$

As $x\to0$ from either side, $\lvert x\rvert\to0^+$, so $-\frac1{\lvert x\rvert}\to-\infty$.

> [!success] Answer (AI-written)
> $\displaystyle\lim_{x\to0}\frac{x-2}{\lvert x^2-2x\rvert}=-\infty$ (the same from both sides, so the line $x=0$ is a vertical asymptote).

> [!tip] Intuition
> Numerator near $0$ is about $-2$ and the denominator is a tiny positive number, so the quotient is a large negative number.

### c. Composition

> [!warning] AI-written answer, not official. Check before relying on it.

Put $g$ inside $f$:

$$
f(g(x))=f\left(\sqrt x\right)=2-\sqrt x
$$

> [!success] Answer (AI-written)
> **Yes**: $y=2-\sqrt x=f(g(x))$, with domain $x\ge0$. (The other order does not work: $g(f(x))=\sqrt{2-x}$.)

### d. Slope of the tangent at $x=1$ from the definition

> [!warning] AI-written answer, not official. Check before relying on it.

$f(1)=\frac13$. Then:

$$
f'(1)=\lim_{h\to0}\frac{f(1+h)-f(1)}{h}=\lim_{h\to0}\frac{\frac1{3+h}-\frac13}{h}=\lim_{h\to0}\frac{3-(3+h)}{3h(3+h)}=\lim_{h\to0}\frac{-1}{3(3+h)}=-\frac19
$$

Check with the rule: $\frac{d}{dx}\frac1{x+2}=-\frac1{(x+2)^2}=-\frac19$ at $x=1$.

> [!success] Answer (AI-written)
> The slope is **$-\dfrac19$**.

> [!warning] A note on the matching problem set
> [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]] Question 4c uses the same function. Its printed answer for part c is $\frac14$, which looks swapped with the printed answer for part b (see the warning there). My $-\frac19$ agrees with that note's own working.

---

## Q3 — A car's value over 30 years (25 points)

**Question.** A car was purchased at a price of $\$25{,}000$. During the next 20 years the car's value $V(x)$ decreased according to

$$
V(x)=\frac{22{,}000}{0.5x+1}+3000
$$

where $x$ is the time in years since the purchase. For the next two years the car's value remained constant, and then, being considered a collector's item, its value began to increase **linearly** so that 30 years after its purchase it was worth $\$20{,}000$.

a. Write the equation of $V(x)$, the car's value in dollars $x$ years after its purchase, for the domain $0\le x\le30$.
b. Is the **rate of change** of the car's value increasing or decreasing during the first 20 years?
c. Find $V'(x)$ in the interval $22<x<30$ and explain the meaning of the result.

> [!info] Source of the answers
> The key says this is "question 3 from exam 2014 B (a similar question also appeared in ex 2)" and works only part c. Parts a and b follow the worked answers in [[PP_12-Domain, Extrema, Vertical Tangent, Car Value Piecewise (2014 Moed B)]] Question 3. I compared the question text and every number and they match.

### a. The piecewise equation

Value at the end of the first phase:

$$
V(20)=\frac{22{,}000}{0.5\cdot20+1}+3000=\frac{22{,}000}{11}+3000=5000
$$

- **Years 0 to 20:** the given formula.
- **Years 20 to 22:** constant at $5000$.
- **Years 22 to 30:** a line through $(22,5000)$ and $(30,20{,}000)$, with slope $\dfrac{20{,}000-5000}{30-22}=\dfrac{15{,}000}{8}=1875$. Point-slope form: $y-5000=1875(x-22)$, so $y=1875x-36{,}250$.

> [!success] Answer (from the 2014 B note, numbers checked)
>
> $$
> V(x)=\begin{cases}
> \dfrac{22{,}000}{0.5x+1}+3000 & 0\le x\le20\\[8pt]
> 5000 & 20\le x\le22\\[4pt]
> 1875x-36{,}250 & 22\le x\le30
> \end{cases}
> $$

Check: $V(0)=25{,}000$ (the purchase price), and $1875\cdot30-36{,}250=20{,}000$.

![[PP12_q3_car_value.png]]

### b. Is the rate of change increasing or decreasing in the first 20 years?

$$
V'(x)=-\frac{11{,}000}{(0.5x+1)^2}
$$

The denominator grows with $x$, so the fraction shrinks towards $0$ and $V'$ is a negative number that rises towards $0$. Equivalently $V''(x)=\dfrac{11{,}000}{(0.5x+1)^3}>0$.

> [!success] Answer (from the 2014 B note, numbers checked)
> The rate of change is **increasing**.

> [!tip] Intuition
> The value is still falling ($V'<0$), but the yearly loss gets smaller: steep depreciation at first, slower later.

### c. $V'(x)$ on $22<x<30$

On this stretch $V(x)=1875x-36{,}250$, a straight line, so

$$
V'(x)=1875
$$

> [!success] Answer (the key, with a unit check)
> On the interval $22<x<30$ the **marginal value per year is constant**: the car gains about **\$1,875 in value every year**.

> [!warning] The key's number
> The key writes "$V'(x)=1.875$" and "1.875 \$ per year". Since $V$ is measured in dollars, the slope is $1875$ dollars per year. I read the key's "1.875" as "1,875" (a point used as a thousands separator). If it were literal, it would be a factor 1000 too small. Treat $1875$ as the answer.

---

## Q4 — Euler piecewise function (20 points)

**Question.** Given

$$
f(x)=\begin{cases}e\left(1+e^{1/x}\right) & x<0\\[2pt] e & x=0\\[2pt] (1+ax)^{a/x} & x>0\end{cases}
$$

where $a>0$ is a constant.

a. Find the limit $\displaystyle\lim_{x\to-\infty}f(x)$.
b. Can you find $a>0$ for which the function would be continuous at $x=0$? If so, find it, and if not, explain why not.
c. Given $g(x)=\left[f\!\left(\dfrac1x\right)\right]^3$. Find $g'(-1)$.

### a. Limit at $-\infty$

For $x\to-\infty$ we use the first piece. $\frac1x\to0$, so $e^{1/x}\to e^0=1$:

$$
\lim_{x\to-\infty}e\left(1+e^{1/x}\right)=e(1+1)=2e
$$

> [!success] Answer (the key)
> $2e$.

### b. Continuity at $x=0$ and the value of $a$

The value is $f(0)=e$. Check both one-sided limits.

**From the left** ($x\to0^-$): $\frac1x\to-\infty$, so $e^{1/x}\to e^{-\infty}=0$:

$$
\lim_{x\to0^-}f(x)=e(1+0)=e
$$

**From the right** ($x\to0^+$): force the exponent into Euler's form. The base is $1+ax$, so the matching exponent is $\frac1{ax}$. Rewrite $\frac ax=a^2\cdot\frac{1}{ax}$:

$$
\lim_{x\to0^+}(1+ax)^{a/x}=\lim_{x\to0^+}\left[(1+ax)^{\frac1{ax}}\right]^{a^2}=e^{a^2}
$$

Continuity needs value = left limit = right limit, that is $e^{a^2}=e$:

$$
a^2=1\;\Rightarrow\;a=1\qquad(a>0)
$$

> [!success] Answer (the key)
> Yes: **$a=1$**.

### c. $g'(-1)$

By the chain rule, with the inner function $\frac1x$ and the outer cube:

$$
g'(x)=3\left[f\!\left(\frac1x\right)\right]^2\cdot f'\!\left(\frac1x\right)\cdot\left(-\frac1{x^2}\right)
$$

At $x=-1$ we have $\frac1x=-1<0$, so use the first piece $f(u)=e\left(1+e^{1/u}\right)$:

$$
f(-1)=e\left(1+e^{-1}\right),\qquad f'(u)=e\cdot e^{1/u}\cdot\left(-\frac1{u^2}\right)\ \Rightarrow\ f'(-1)=e\cdot e^{-1}\cdot(-1)=-1
$$

Then:

$$
g'(-1)=3\left[e\left(1+e^{-1}\right)\right]^2\cdot(-1)\cdot(-1)=3e^2\left(1+\frac1e\right)^2=3e^2\cdot\frac{(e+1)^2}{e^2}=3(e+1)^2
$$

**The key's second route (as a check).** For $x<0$, $\frac1x<0$ as well, so $f\!\left(\frac1x\right)=e\left(1+e^{x}\right)$ (because $e^{1/(1/x)}=e^x$). Then $g(x)=e^3\left(1+e^x\right)^3$, and

$$
g'(x)=e^3\cdot3\left(1+e^x\right)^2e^x\;\Rightarrow\;g'(-1)=3e^3\left(1+\frac1e\right)^2\frac1e=3e^2\cdot\frac{(e+1)^2}{e^2}=3(e+1)^2
$$

The two routes agree.

> [!success] Answer (the key)
> $g'(-1)=3(e+1)^2$.
