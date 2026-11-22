---
title: "Exponential Piecewise Corner, Limits, Rational Root Investigation & Rate of Change (2023 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2023 Moed A"
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
  - corner-point
  - tangent-line
  - composition
  - limits
  - function-investigation
  - removable-discontinuity
  - asymptotes
  - rate-of-change
  - marginal-profit
  - chain-rule
aliases:
  - Math I 2023 Moed A
  - PP29 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Exponential Piecewise Corner, Limits, Rational Root Investigation & Rate of Change (2023 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2023 (Moed A)**, Hever Schulberg. 4 questions (25, 25, 30, 20 points), 3 hours, non-graphing calculator and formula sheet allowed.
> Builds on: [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_03-Composition, Transformations and Exponential Graphs]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]
> Repeats questions from: [[PP_28-Rational Root Function Investigation, Limits, Car Value & Euler Piecewise (2022 Moed B)]] (Q3 here is Q1 there) and [[PP_09-Piecewise Rational Function, Exponential Piecewise Differentiability, Limits & Marginal Profit (2013 Moed A)]] (Q4b here is Q3b there)

> [!info] Source
> The exam is on pages 2 and 3 of the source PDF (page 1 is the cover). The **handwritten, unsigned key (author unclear)** is on pages 4 to 6. Page 4 and the top of page 5 work Q1 in full, then Q2b, Q2c and Q2d are worked on page 5. Everything else is a **pointer** to another exam or problem set, and page 6 is only two pointers. I resolved each pointer:
>
> | Part | The key says | What I used |
> |---|---|---|
> | Q2a | "Question 2 from ex 3" | [[PS_03-Composition, Transformations and Exponential Graphs]] Question 2b: same three functions, same two targets. Printed answers match my own check. |
> | Q3 | "Question 1 from 2022 B" | The 2022 B paper, Question 1: **word for word the same function and sub-questions** (verified on the PDF). The full answer is in [[PP_28-Rational Root Function Investigation, Limits, Car Value & Euler Piecewise (2022 Moed B)]], reproduced below. |
> | Q4a | "Question 3c from 2020 A" | The 2020 A PDF, Question 3c (same function, same domain, same Dan claim) and **its handwritten key** on pages 6 and 7. |
> | Q4b | "Question 3b from 2013 A" | The 2013 A paper, Question 3b: same price-demand equation, same cost, same question. Worked in [[PP_09-Piecewise Rational Function, Exponential Piecewise Differentiability, Limits & Marginal Profit (2013 Moed A)]]. |
>
> For each pointer I compared the wording and every number, and they all match.

> [!warning] Points where the key needs a check
> - **Q2c:** the key concludes "no limit" and writes the one-sided limits as $+\infty$ and $-\infty$. That is correct. Note that "no limit" is the right wording here because the two sides disagree, even though both are infinite.
> - **Q1d vs Q1e:** the key says no tangent line and, in the next part, a corner point. These are consistent: a corner (two different finite one-sided slopes) has no tangent line.
> - **AI-solved parts: none.** Every answer comes from the key or from a pointer target I checked. Where I add my own check or intuition it is marked.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | $xe^{1/x}$ glued to a line: domain, continuity parameter, one-sided derivatives, tangent line, corner, and a chain-plus-product derivative | [[Lec_04-Limits and Continuity]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] |
| Q2 | Four separate pieces: composition, "is this equation a function", a one-sided limit of $\frac{e^x-1}{x^2}$, and a difference of two fractions | [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_05-Infinite Limits]] |
| Q3 | Investigating $\frac{\sqrt{x^2+5}-3}{2x-4}$: a hole, two horizontal asymptotes, no extrema, and its reflection | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q4 | Is a rate of change ever zero on an interval (a derivative sign check), and marginal daily profit from a price-demand equation | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |

> [!tip] Intuition: the one move behind each question
> - Q1: pick $b$ so that the left limit ($0$, since $e^{1/x}\to0$) meets the right value $3+b$. Then compare the two one-sided slopes: $0$ on the left, $1$ on the right. Different and finite means a corner.
> - Q2: when a limit has the form $\frac{\text{something}\to1}{x^2}$, look at the sign on each side of $0$ separately.
> - Q3: a $\frac00$ at a point of the domain boundary usually means a hole (conjugate it away), not an asymptote.
> - Q4: "the rate of change is zero" means $f'(x)=0$. Check whether a root of $f'$ falls **inside the stated domain**.

---

## Q1 — A piecewise function with $xe^{1/x}$ (25 points)

**Question.**

$$
f(x)=\begin{cases}x\,e^{1/x} & x<0\\[2pt] x+3+b & x\ge0\end{cases}\qquad(b\text{ is a constant})
$$

a. Find the function's domain.
b. Find the value of the constant $b$ for which the function is continuous in all of its domain.

Answer the following segments using the value of $b$ found in the previous segment:

c. Use the definition of the derivative and find if the function is differentiable at $x=0$.
d. Does the function have a tangent line at $x=0$? Explain.
e. Is $x=0$ a corner point? Explain.
f. Given $g(x)=\left[x\cdot f\!\left(\sqrt x\right)\right]^3$. Use the chain rule and find $g'(4)$.

The key notes that this question is almost identical to a question in the exercise on piecewise functions and one in the function-investigation exercise (compare [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] Question 1 and [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]).

### a. Domain

$x\,e^{1/x}$ is used for $x<0$: the exponential is defined everywhere and $\frac1x$ is defined for $x<0$ because the denominator is not zero. The line $x+3+b$ is defined for all $x\ge0$.

> [!success] Answer (the key)
> All $x$.

### b. The value of $b$

Check continuity at the seam $x=0$ with the three conditions.

1. $f(0)=3+b$.
2. From the right: $\displaystyle\lim_{x\to0^+}f(x)=3+b$. From the left: $\displaystyle\lim_{x\to0^-}xe^{1/x}$. As $x\to0^-$, $\frac1x\to-\infty$, so $e^{1/x}\to e^{-\infty}=0$ and the product is $0\cdot0=0$.

> [!warning] Exam-writing tip from the key
> The key notes it is important **not to write the answer straight away** at the step "$0\cdot e^{-\infty}$", because at that moment you do not yet know whether you get an indeterminate form like "$0\cdot\infty$". Here $x\to0$ and $e^{1/x}\to0$, both go to zero, so the product is clearly $0$ and not indeterminate.

3. For the value to equal both limits: $3+b=0$, so

> [!success] Answer (the key)
> $b=-3$. With this $b$, $f$ is continuous for all $x$.

From now on $f(x)=x+3+b=x$ for $x\ge0$, and $f(0)=0$.

### c. Differentiability at $x=0$ (definition)

$$
f'(0)=\lim_{h\to0}\frac{f(h)-f(0)}{h}
$$

**From the right** ($h\to0^+$): $f(h)=h$, so $\dfrac{h-0}{h}=1$, and the limit is $1$.

**From the left** ($h\to0^-$): $f(h)=he^{1/h}$, so $\dfrac{he^{1/h}-0}{h}=e^{1/h}\to e^{-\infty}=0$.

> [!success] Answer (the key)
> The one-sided limits are $1$ and $0$, so the limit does not exist: **$f$ is not differentiable at $x=0$**.

![[PP29_q1_corner_at_zero.png]]

### d. Does it have a tangent line at $x=0$?

> [!success] Answer (the key)
> **No**, because the two one-sided limits (slopes) are not identical, and they are not $\pm\infty$ (so it is not a vertical tangent either).

### e. Is $x=0$ a corner point?

> [!success] Answer (the key)
> **Yes**: $f$ is continuous at $x=0$ (part b) and the one-sided derivative limits are different ($0$ on the left, $1$ on the right).

### f. $g'(4)$ for $g(x)=\left[x\cdot f\!\left(\sqrt x\right)\right]^3$

Chain rule on the cube, then the product rule, then the chain rule inside $f(\sqrt x)$ (the inner derivative of $\sqrt x$ is $\frac1{2\sqrt x}$):

$$
g'(x)=3\left[x\,f\!\left(\sqrt x\right)\right]^2\left(f\!\left(\sqrt x\right)+x\,f'\!\left(\sqrt x\right)\cdot\frac{1}{2\sqrt x}\right)
$$

At $x=4$ we have $\sqrt x=2>0$, so the right branch applies: $f(x)=x$, giving $f(2)=2$ and $f'(2)=1$ (the key notes $f'(x)=1$ for $x>0$):

$$
g'(4)=3\left[4\cdot2\right]^2\left(2+4\cdot1\cdot\frac14\right)=3\cdot64\cdot(2+1)=576
$$

> [!success] Answer (the key)
> $g'(4)=576$.

---

## Q2 — Four separate pieces (25 points)

**Question.** There is no connection between the segments of this question.

a. Given $f(x)=x^2-2x+4$, $g(x)=\dfrac1{x^2}$, $h(x)=\dfrac1{\sqrt x-1}$. Express each one of the following as a composition of two of the given functions: 1. $y=\dfrac1{(x^2-2x+4)^2}$, 2. $y=(\sqrt x-1)^2$.

b. Given the equation $y^2+xy-6=0$. Can you find a domain for which the equation will represent $y$ as a function of $x$? Explain.

c. Find the limit $\displaystyle\lim_{x\to0}\frac{e^x-1}{x^2}$.

d. Find the limit $\displaystyle\lim_{x\to1}\left(\frac{1}{(x-1)(x+1)}-\frac{3}{2(x-1)(x^2+x+1)}\right)$.

### a. Compositions

The key only says "question 2 from ex 3". The same functions and the same two targets are [[PS_03-Composition, Transformations and Exponential Graphs]] Question 2b, and its printed answers are:

1. $y=\dfrac1{(x^2-2x+4)^2}=g\!\left(f(x)\right)$: put $f$ inside $g$, since $g(u)=\frac1{u^2}$ and $u=x^2-2x+4$.
2. $y=(\sqrt x-1)^2=g\!\left(h(x)\right)$: since $g(h(x))=\dfrac1{\left(\frac1{\sqrt x-1}\right)^2}=(\sqrt x-1)^2$.

> [!success] Answer (resolved from the problem set)
> 1. $g(f(x))$.  2. $g(h(x))$.

### b. Is $y^2+xy-6=0$ a function of $x$?

The key notes this was solved in the first lesson of the course. Treat it as a quadratic in $y$ and solve with the quadratic formula:

$$
y_{1,2}=\frac{-x\pm\sqrt{x^2+24}}{2}
$$

The expression under the root, $x^2+24$, is **positive for every $x$**, so for each $x$ there are always **two different** values of $y$.

> [!success] Answer (the key)
> **No.** There is no domain for which this equation represents $y$ as a function of $x$, because every $x$ gives two different $y$-values.

> [!tip] Intuition
> To make it a function you would have to pick one sign (the $+$ or the $-$) on the root. Restricting $x$ cannot do that, since the choice of two roots is there for every single $x$.

### c. The limit of $\dfrac{e^x-1}{x^2}$ at $0$

Split off the standard limit $\frac{e^x-1}{x}\to1$ (see [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]]):

$$
\frac{e^x-1}{x^2}=\frac{e^x-1}{x}\cdot\frac1x
$$

The first factor tends to $1$. The second, $\frac1x$, has different behaviour on the two sides:

- $x\to0^+$: $\frac1x\to+\infty$, so the product $\to+\infty$.
- $x\to0^-$: $\frac1x\to-\infty$, so the product $\to-\infty$.

> [!success] Answer (the key)
> **The limit does not exist** (the one-sided limits are $+\infty$ and $-\infty$). The line $x=0$ is a vertical asymptote.

### d. The limit of the difference

Both fractions blow up at $x=1$, so combine them over the common denominator $2(x-1)(x+1)(x^2+x+1)$:

$$
\frac{2(x^2+x+1)-3(x+1)}{2(x-1)(x+1)(x^2+x+1)}=\frac{2x^2+2x+2-3x-3}{2(x-1)(x+1)(x^2+x+1)}=\frac{2x^2-x-1}{2(x-1)(x+1)(x^2+x+1)}
$$

Factor the numerator: $2x^2-x-1=(2x+1)(x-1)$. Cancel $(x-1)$:

$$
\lim_{x\to1}\frac{2x+1}{2(x+1)(x^2+x+1)}=\frac{3}{2\cdot2\cdot3}=\frac14
$$

> [!success] Answer (the key)
> $\dfrac14$.

---

## Q3 — Investigating $f(x)=\dfrac{\sqrt{x^2+5}-3}{2x-4}$ (30 points)

**Question.** Given $f(x)=\dfrac{\sqrt{x^2+5}-3}{2x-4}$.

a. Investigate the function by the following criteria:
1. Domain.
2. Axes intercept points (if any).
3. Asymptotes (if any) using the appropriate limits.
4. Show that the derivative is $f'(x)=\dfrac{3\sqrt{x^2+5}-2x-5}{2(x-2)^2\sqrt{x^2+5}}$.
5. Find relative extreme points (if any) and increase/decrease intervals.
6. Draw the graph.

b. Draw the graph of the function $y=\dfrac{\sqrt{x^2+5}-3}{-2x-4}$.

> [!info] Same question as 2022 Moed B
> The key says "Question 1 from 2022 B". I checked the 2022 B PDF: it is the same function and the same sub-questions, word for word. The worked answer follows the key to that paper, written up in [[PP_28-Rational Root Function Investigation, Limits, Car Value & Euler Piecewise (2022 Moed B)]] Question 1 (which has the longer step-by-step versions).

### a1. Domain

$x^2+5>0$ always, so the root is defined everywhere. The denominator needs $2x-4\neq0$.

> [!success] Answer
> $x\neq2$.

### a2. Intercepts

$f(0)=\dfrac{\sqrt5-3}{-4}=\dfrac{3-\sqrt5}{4}\approx0.19$. For the x-axis, $\sqrt{x^2+5}=3$ gives $x=\pm2$, and $x=2$ is not in the domain.

> [!success] Answer
> y-intercept $(0,\,0.19)$. x-intercept $(-2,\,0)$.

### a3. Asymptotes

**Horizontal.** For large $\lvert x\rvert$, $\sqrt{x^2+5}\approx\lvert x\rvert$, so the limits are $\pm\frac12$ (the sign follows $x$):

$$
\lim_{x\to\pm\infty}\frac{\pm x\sqrt{1+\frac5{x^2}}-3}{x\left(2-\frac4x\right)}=\pm\frac12
$$

**Vertical at $x=2$?** The form is $\frac00$. Multiply by the conjugate:

$$
\lim_{x\to2}\frac{x^2-4}{2(x-2)\left(\sqrt{x^2+5}+3\right)}=\lim_{x\to2}\frac{x+2}{2\left(\sqrt{x^2+5}+3\right)}=\frac4{2\cdot6}=\frac13
$$

A finite limit means a **hole**, not an asymptote.

> [!success] Answer
> Horizontal asymptotes $y=\frac12$ (right) and $y=-\frac12$ (left). **No vertical asymptote**: a removable discontinuity at $\left(2,\frac13\right)$.

### a4. The derivative

Quotient rule with $u=\sqrt{x^2+5}-3$, $u'=\dfrac{x}{\sqrt{x^2+5}}$, $v=2x-4$, $v'=2$:

$$
f'(x)=\frac{\frac{x(2x-4)}{\sqrt{x^2+5}}-2\left(\sqrt{x^2+5}-3\right)}{4(x-2)^2}=\frac{6\sqrt{x^2+5}-4x-10}{4(x-2)^2\sqrt{x^2+5}}=\frac{3\sqrt{x^2+5}-2x-5}{2(x-2)^2\sqrt{x^2+5}}
$$

### a5. Extrema and monotonicity

$f'=0$ needs $3\sqrt{x^2+5}=2x+5$. Squaring: $9x^2+45=4x^2+20x+25$, so $5x^2-20x+20=0$ and $x=2$, which is **not in the domain**. So $f'$ is never $0$, and it is undefined only at $x=2$.

Because $9(x^2+5)-(2x+5)^2=5(x-2)^2\ge0$, the numerator $3\sqrt{x^2+5}-2x-5$ is never negative, so $f'>0$ on both sides of $x=2$.

> [!success] Answer
> Increasing for $x\neq2$ (on $(-\infty,2)$ and on $(2,\infty)$). No decrease. **No relative extreme points.**

### a6. The graph

![[PP28_q1_investigation_graph.png]]

### b. The graph of $y=\dfrac{\sqrt{x^2+5}-3}{-2x-4}$

This is $f(-x)$, the graph of $f$ **reflected in the y-axis**: x-intercept $(2,0)$, y-intercept $(0,0.19)$, a hole at $\left(-2,\frac13\right)$, a decreasing curve, with asymptote $y=\frac12$ on the left and $y=-\frac12$ on the right.

![[PP28_q1b_reflected_graph.png]]

---

## Q4 — A zero rate of change, and marginal daily profit (20 points)

**Question.** There is no connection between the segments of this question.

a. Given $f(x)=\dfrac{x^3}{(2-3x)^5}$ in the domain $-3<x<-0.5$. Dan claims that in the given domain there is no point on the function's graph at which the rate of change of $f(x)$ is zero. Is Dan right? Explain using calculations.

b. The price-demand equation for a given product is $p=\dfrac{500+30\sqrt[3]{(x-12)^2}}{x}$ for $x>0$, where $p$ is the retail price for a single product (in \$) and $x$ is the daily demand. It is also known that every single product costs \$4 to produce. Find the interval of $x$ at which the marginal daily profit function is positive.

### a. Is Dan right?

> [!info] Source
> The key says "question 3c from 2020 A". The 2020 A question has the same function, the same domain and the same claim. I used the handwritten key on that paper (pages 6 and 7).

The rate of change is the derivative. Write $f(x)=x^3(2-3x)^{-5}$ and use the product rule (the inner derivative of $2-3x$ is $-3$):

$$
f'(x)=\frac{3x^2(2-3x)^5-x^3\cdot5(2-3x)^4\cdot(-3)}{(2-3x)^{10}}
$$

Pull out the common factor $3x^2(2-3x)^4$ (the key keeps the bracket as $2-3x+5x$):

$$
f'(x)=\frac{3x^2(2-3x)^4\left[(2-3x)+5x\right]}{(2-3x)^{10}}=\frac{3x^2(2+2x)}{(2-3x)^6}
$$

Set $f'(x)=0$: either $x=0$ or $2+2x=0$, that is $x=-1$.

- $x=0$ is **outside** the domain $-3<x<-0.5$ (the key writes "$x=0$" crossed out).
- $x=-1$ is **inside** the domain, since $-3<-1<-0.5$.

> [!success] Answer (the key to 2020 A)
> **Dan is wrong.** At $x=-1$ the rate of change of $f$ is zero, a point on the graph at $\left(-1,\,f(-1)\right)=\left(-1,\,-\tfrac1{3125}\right)$.

> [!tip] Intuition (my own check)
> For $-3<x<-1$ we have $2+2x<0$, so $f'<0$ (falling). For $-1<x<-0.5$ we have $2+2x>0$, so $f'>0$ (rising). So $x=-1$ is a turning point (a minimum), and the tangent there is horizontal. The values are tiny ($f(-1)=-\frac{1}{5^5}$) because the denominator is huge.

![[PP29_q4a_horizontal_tangent.png]]

### b. Where is the marginal daily profit positive?

> [!info] Source
> The key says "question 3b from 2013 A". The wording and numbers match [[PP_09-Piecewise Rational Function, Exponential Piecewise Differentiability, Limits & Marginal Profit (2013 Moed A)]] Question 3b (same $p$, same cost of \$4, same question). Its worked answer follows.

Revenue is price times quantity, so the $x$ in the denominator cancels:

$$
R(x)=x\cdot p=500+30\sqrt[3]{(x-12)^2}=500+30(x-12)^{2/3}
$$

Cost is $C(x)=4x$, so the daily profit is $P(x)=500+30(x-12)^{2/3}-4x$. The marginal daily profit is its derivative:

$$
P'(x)=30\cdot\frac23(x-12)^{-1/3}-4=\frac{20}{\sqrt[3]{x-12}}-4=\frac{20-4\sqrt[3]{x-12}}{\sqrt[3]{x-12}}
$$

- $P'$ is undefined at $x=12$.
- $P'(x)=0$: $20=4\sqrt[3]{x-12}$, so $\sqrt[3]{x-12}=5$ and $x-12=125$, giving $x=137$.

Sign table (the demand is positive, so $x>0$):

| $x$ | $0<x<12$ | $12<x<137$ | $x>137$ |
|---|---|---|---|
| numerator $20-4\sqrt[3]{x-12}$ | $+$ | $+$ | $-$ |
| denominator $\sqrt[3]{x-12}$ | $-$ | $+$ | $+$ |
| $P'(x)$ | $-$ | $+$ | $-$ |

> [!success] Answer (from the 2013 A note)
> The marginal daily profit is positive for **$12<x<137$**.

> [!tip] Intuition
> Between $12$ and $137$ the revenue grows faster than the \$4 cost of each extra unit, so each extra unit adds profit. After $137$ the revenue term rises more slowly than \$4 per unit, so each extra unit loses money.
