---
title: "Absolute Value Quotient, Limits, Advertising Sales & Horizontal Tangents (2024 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2024 Moed A"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - absolute-value
  - limits
  - euler-limit
  - definition-of-derivative
  - chain-rule
  - marginal-sales
  - horizontal-tangent
  - exponential-graph
aliases:
  - Math I 2024 Moed A
  - PP31 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Absolute Value Quotient, Limits, Advertising Sales & Horizontal Tangents (2024 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2024 (Moed A)**, Hever Schulberg. 4 questions (20, 35, 20, 25 points), 3 hours, non-graphing calculator and formula sheet allowed.
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]]
> Practice: [[PS_01-Functions, Domain and Piecewise Graphs]], [[PS_04-Limits and Continuity]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]]

> [!info] Source
> The exam is on pages 2 to 3 of the source PDF (page 1 is the cover sheet). The **handwritten, unsigned key (author unclear)** is on pages 4 to 7. It is a mix: some parts are worked in full, others only say "this question comes from exam X / exercise Y". Where the key points elsewhere, the answer below is taken from that source after checking that the wording and numbers match. Each part says where its answer comes from.

> [!warning] Parts that are AI-written, not from the key
> - **Q1c** (limit at $0$): the key points to the 2022 Moed B exam, whose own key only says "watch the lesson 5 video", so there is no written answer. Solved here.
> - **Q2b** (differentiability of $xe^{1/x}$): the key points to a 2023 Moed B question, but that question uses a different function ($x^3-kx$ and $6\sqrt[3]{x^4}-x$), so its answer cannot be reused. Solved here.
> - **Q4b** (graph of $8\cdot2^x-5$): the key only says "solved in class in week 3". Solved here from the lecture note.
>
> Every other part follows the key (author unclear), directly or through the exam or exercise it points to.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | $f(x)=\dfrac{x-2}{\lvert x^2-2x\rvert}$: domain, continuity, and two limits where the absolute value decides the sign | [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]] |
| Q2 | Five unrelated parts: a $\tfrac00$ limit, differentiability from the definition, a tangent slope of a quotient of composites, and two limits of the form $\text{base}^x$ | [[Lec_04-Limits and Continuity]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |
| Q3 | Advertising and sales: marginal sales $N'(x)$, its sign, its direction, and $N'(26)$ | [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |
| Q4 | Is an equation a function, an exponential graph from transformations, and horizontal tangents of a quotient | [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_07-The Derivative, Differentiability and Rules]] |

> [!tip] Intuition: the one move behind each question
> - Q1: an absolute value in a denominator is a small **positive** number near its zero, so the sign of a limit comes from the numerator and from which side of the zero you are on.
> - Q2: $\text{base}^x$ is an Euler limit only when the base tends to $1$. If the base tends to something else, just look at whether it is above or below $1$.
> - Q3: marginal sales is positive but shrinking: diminishing returns.
> - Q4: a function gives one output per input, so test by solving for $y$.

---

## Q1 — Investigating $f(x)=\dfrac{x-2}{\left|x^2-2x\right|}$ (20 points)

**Question.** Given $f(x)=\dfrac{x-2}{\left|x^2-2x\right|}$.

a. Find the function's domain. Explain.
b. Find the function's interval of continuity. Explain.
c. Find the limit $\displaystyle\lim_{x\to0}f(x)$.
d. Find the limit $\displaystyle\lim_{x\to2}f(x)$.

### a. Domain

The only restriction is a zero denominator. $\left|x^2-2x\right|=0$ exactly when $x(x-2)=0$, that is $x=0$ or $x=2$.

> [!success] Answer (the key, author unclear)
> The domain is **all $x$ except $x=0$ and $x=2$**, that is $x\neq0,\,2$.

### b. Interval of continuity

> [!success] Answer (the key, author unclear)
> The function is **not piecewise**, so its interval of continuity is the same as its domain: **$x\neq0,\,2$**. The key notes that this type of question also appears in Exercise 4, Question 5 (see [[PS_04-Limits and Continuity]]).

> [!tip] Intuition
> An elementary formula is continuous everywhere it is defined. Continuity can only break at a seam between pieces, and there is none here. The two excluded points are holes or poles, not places where the function exists but is discontinuous.

### c. $\displaystyle\lim_{x\to0}f(x)$

> [!warning] AI-written answer, not official. Check before relying on it.
> The key says this part is taken from the 2022 Moed B exam (question 2b) and that Exercise 5, Question 1(4) is similar. The 2022 Moed B key only refers to a lesson video, so no written solution exists. The working below is mine, checked against the same technique in [[PS_05-Limits, Infinite Limits and Limits at Infinity]] and in [[PP_16-Derivative Graph Reading, Marginal Cost, Piecewise Tangents & Absolute Value Limits (2016 Moed B)]] (Q4a).

Factor the inside: $x^2-2x=x(x-2)$. Check each side of $0$.

- **$x\to0^-$** ($x<0$): $x<0$ and $x-2<0$, so $x(x-2)>0$ and $\left|x(x-2)\right|=x(x-2)$. Then $f(x)=\dfrac{x-2}{x(x-2)}=\dfrac1x\to-\infty$.
- **$x\to0^+$** (just above $0$, so $0<x<2$): $x>0$ and $x-2<0$, so $x(x-2)<0$ and $\left|x(x-2)\right|=-x(x-2)$. Then $f(x)=\dfrac{x-2}{-x(x-2)}=-\dfrac1x\to-\infty$.

Both sides agree. A quicker route: the numerator tends to $-2$ and the absolute value is a small positive number $0^+$ from both sides, so

$$
\lim_{x\to0}\frac{x-2}{\left|x^2-2x\right|}=\frac{-2}{0^+}=-\infty
$$

> [!success] Answer (AI-written)
> $-\infty$. The line $x=0$ is a vertical asymptote.

### d. $\displaystyle\lim_{x\to2}f(x)$

The key gives two methods. Write $x^2-2x=x(x-2)$.

**Method I (rewrite as a piecewise function first).** The sign of $x(x-2)$ depends on the interval:

$$
f(x)=\begin{cases}\dfrac1x & x<0\\[6pt] -\dfrac1x & 0<x<2\\[6pt] \dfrac1x & x>2\end{cases}
$$

so near $x=2$ the right piece is $\dfrac1x$ (for $x>2$) and the left piece is $-\dfrac1x$ (for $x<2$). This is the same shape as the 2016 Moed B question in [[PP_16-Derivative Graph Reading, Marginal Cost, Piecewise Tangents & Absolute Value Limits (2016 Moed B)]] (Q4c).

**Method B (the key's shorter way).** Work with each side directly:

$$
\lim_{x\to2^+}\frac{x-2}{x(x-2)}=\lim_{x\to2^+}\frac1x=\frac12,\qquad
\lim_{x\to2^-}\frac{x-2}{-x(x-2)}=\lim_{x\to2^-}\left(-\frac1x\right)=-\frac12
$$

For $x$ slightly above $2$ the product $x(x-2)$ is positive, so the absolute value changes nothing. For $x$ slightly below $2$ it is negative, so the absolute value flips the sign.

> [!success] Answer (the key, author unclear)
> The one-sided limits are $\tfrac12$ and $-\tfrac12$, which differ, so **the limit does not exist**. (There is a jump at $x=2$, but it is not an infinite limit.)

> [!tip] Intuition
> Compare c and d. At $x=0$ the denominator tends to $0$ while the numerator tends to $-2$, which gives a pole. At $x=2$ the numerator also tends to $0$, so the factor $x-2$ cancels and only the **sign** left by the absolute value remains. That is why d is a jump and c is a pole.

---

## Q2 — Five unrelated segments (35 points)

There is no connection between the parts.

### a. $\displaystyle\lim_{x\to1}\left(\frac1{x-1}-\frac2{x^2-1}\right)$

Common denominator $x^2-1=(x-1)(x+1)$:

$$
\frac1{x-1}-\frac2{x^2-1}=\frac{(x+1)-2}{(x-1)(x+1)}=\frac{x-1}{(x-1)(x+1)}=\frac1{x+1}
$$

Cancel the common factor $x-1$ (allowed because the limit looks at $x\neq1$):

$$
\lim_{x\to1}\frac1{x+1}=\frac12
$$

> [!success] Answer (the key, author unclear)
> $\dfrac12$.

### b. Differentiability of a piecewise function with $xe^{1/x}$ at $x=0$ (from the definition)

**Question.** Use the definition of the derivative to find whether

$$
f(x)=\begin{cases}x\,e^{1/x}&x<0\\ x&x\ge0\end{cases}
$$

is differentiable at $x=0$.

> [!warning] AI-written answer, not official. Check before relying on it.
> The key says this question comes from the 2023 Moed B exam, question 1. That question uses a different function (a cubic and a fourth-root piece with a parameter $k$), so its answer does not apply. Solved here from the definition, using the same left-limit idea as the $xe^{1/x}$ piece in [[PP_16-Derivative Graph Reading, Marginal Cost, Piecewise Tangents & Absolute Value Limits (2016 Moed B)]] (Q3).

First, $f(0)=0$ (the second line). The definition of the derivative at $0$:

$$
f'(0)=\lim_{h\to0}\frac{f(0+h)-f(0)}{h}=\lim_{h\to0}\frac{f(h)}{h}
$$

- **Right** ($h\to0^+$, use $f(h)=h$): $\displaystyle\lim_{h\to0^+}\frac{h}{h}=1$.
- **Left** ($h\to0^-$, use $f(h)=he^{1/h}$): $\displaystyle\lim_{h\to0^-}\frac{he^{1/h}}{h}=\lim_{h\to0^-}e^{1/h}=e^{-\infty}=0$, because $\tfrac1h\to-\infty$ when $h\to0^-$.

The one-sided limits are $1$ and $0$.

> [!success] Answer (AI-written)
> The one-sided limits differ ($1\neq0$), so **$f$ is not differentiable at $x=0$**. The function is continuous there (both sides tend to $f(0)=0$), so $x=0$ is a **corner point** with left slope $0$ and right slope $1$.

### c. Finding $f'(2)$ from $g'(1)=0$

Given $f(2)=4$ and $g(x)=\dfrac{f(2x)}{x+1}$ with $g'(1)=0$.

Quotient rule, with the chain rule for $f(2x)$ (derivative $f'(2x)\cdot2$):

$$
g'(x)=\frac{f'(2x)\cdot2\cdot(x+1)-f(2x)}{(x+1)^2}
$$

At $x=1$ (so $2x=2$):

$$
g'(1)=\frac{f'(2)\cdot2\cdot2-f(2)}{2^2}=\frac{4f'(2)-4}{4}=0\;\Longrightarrow\;4f'(2)=4
$$

> [!success] Answer (the key, author unclear)
> $f'(2)=1$.

### d. $\displaystyle\lim_{x\to\infty}\left(\frac{1-4x}{3-5x}\right)^{-x}$

This question appears, with the same numbers, as 2020 Moed A, question 2b, so the answer comes from that key.

Divide top and bottom of the base by $x$:

$$
\frac{1-4x}{3-5x}=\frac{\frac1x-4}{\frac3x-5}\;\longrightarrow\;\frac{-4}{-5}=\frac45
$$

The base tends to $\tfrac45$, **not** $1$, so this is not an Euler limit. Since $\tfrac45<1$ and the exponent $-x\to-\infty$:

$$
\left(\frac45\right)^{-x}=\left(\frac54\right)^{x}\;\longrightarrow\;\infty
$$

> [!success] Answer (the key, via 2020 Moed A Q2b)
> $\infty$. Written as the key does: $\left(\tfrac45\right)^{-\infty}=\infty$.

### e. $\displaystyle\lim_{x\to\infty}\left(\frac{x+2100}{x+76}\right)^{x}$

The base tends to $1$ and the exponent to $\infty$: an Euler ($1^\infty$) limit. Write the base as $1+\text{small}$:

$$
\frac{x+2100}{x+76}=1+\frac{x+2100-(x+76)}{x+76}=1+\frac{2024}{x+76}
$$

Then rewrite the exponent so that it matches the denominator of the small term:

$$
\left(1+\frac{2024}{x+76}\right)^{x}=\left[\left(1+\frac{2024}{x+76}\right)^{\frac{x+76}{2024}}\right]^{\frac{2024\,x}{x+76}}\;\longrightarrow\;e^{\,2024\cdot1}
$$

because $\dfrac{2024x}{x+76}\to2024$. 

> [!success] Answer (the key, author unclear)
> $e^{2024}$. The key notes that it is taken, with numbers changed, from 2023 Moed B, question 2d.

> [!tip] Intuition
> Euler recipe: base $=1+\dfrac{c}{\text{something}}$, exponent $\approx$ that same "something". The limit is $e^{c}$ where $c$ is the numerator of the small term, here $2024$. Same method as [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]] (Q2h, Q3a).

---

## Q3 — Advertising and sales (20 points)

**Question.** A company estimates that by investing $x$ thousand dollars in advertising a new product it would sell $N(x)$ units, where

$$
N(x)=20000\left(1-\frac{3}{\sqrt{x+10}}\right),\qquad x\ge0
$$

a. Calculate the rate of change in sales $N'(x)$ and show that advertisement has a positive effect on the sales.
b. Is the rate of change in sales increasing or decreasing with $x$? Explain.
c. Calculate $N'(26)$ and explain the meaning of the result.

The key says this is Exercise 9, Question 3 (see [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]]). The function and the three questions match, so the answers below are the key's, written out in steps.

Rewrite $N(x)=20000-60000\,(x+10)^{-1/2}$.

### a. $N'(x)$ and its sign

Chain rule (power of a function):

$$
N'(x)=-60000\cdot\left(-\frac12\right)(x+10)^{-3/2}=\frac{30000}{(x+10)^{3/2}}
$$

For $x\ge0$ the denominator is positive, so $N'(x)>0$.

> [!success] Answer (the key, via Exercise 9 Q3)
> $N'(x)=\dfrac{30{,}000}{(x+10)^{3/2}}>0$. More advertising always raises sales, so the effect is **positive**.

### b. Is $N'$ increasing or decreasing?

As $x$ grows, $(x+10)^{3/2}$ grows, so the fraction $\dfrac{30000}{(x+10)^{3/2}}$ shrinks. Check with the second derivative: $N''(x)=-45000\,(x+10)^{-5/2}<0$.

> [!success] Answer (the key, via Exercise 9 Q3)
> **Decreasing.** The rate of change of sales falls as advertising rises (diminishing returns).

### c. $N'(26)$

$$
N'(26)=\frac{30000}{36^{3/2}}=\frac{30000}{216}\approx138.9
$$

> [!success] Answer (the key, via Exercise 9 Q3)
> $N'(26)\approx139$. At an advertising spend of $\$26{,}000$, **spending another $\$1{,}000$ raises sales by about $139$ units.**

> [!note] Same function as another exam
> The 2018 Moed B paper contains this same sales function written as $-2000\left(\tfrac{30}{\sqrt{10+x}}-10\right)$; see [[PP_20-Cube Root Investigation, Piecewise with a Parameter, Advertising Sales & Limits (2018 Moed B)]] (Q3).

---

## Q4 — Three unrelated parts (25 points)

### a. Does $y^2+xy=-\tfrac14x^2$ define $y$ as a function of $x$ on all real $x$?

Move everything to one side and recognise a perfect square:

$$
y^2+xy+\frac14x^2=0\;\Longleftrightarrow\;\left(y+\frac x2\right)^2=0\;\Longleftrightarrow\;y=-\frac x2
$$

> [!success] Answer (the key, via Exercise 1 Q2d)
> **Yes, it is a function.** For every real $x$ there is exactly **one** value, $y=-\tfrac x2$. See [[PS_01-Functions, Domain and Piecewise Graphs]] (Q2d).

> [!tip] Intuition
> A quadratic in $y$ usually has two roots (two outputs, not a function). Here the two roots coincide because the discriminant is zero, so each $x$ still gets a single $y$.

### b. Graph $y=8\cdot2^x-5$ from the basic exponential

> [!warning] AI-written answer, not official. Check before relying on it.
> The key only says "solved in class in week 3" (the graphing with reflections and translations video). The working below follows [[Lec_03-Composition, Transformations, Exponentials and Limits]], section 3, which treats this exact function.

Since $8=2^3$:

$$
8\cdot2^x=2^3\cdot2^x=2^{x+3},\qquad\text{so}\qquad y=2^{x+3}-5
$$

Start from the basic graph $y=2^x$ (passes through $(0,1)$, horizontal asymptote $y=0$), then:

1. **Shift left $3$** (replace $x$ by $x+3$): this gives $2^{x+3}$.
2. **Shift down $5$**: this gives $2^{x+3}-5$.

The question asks only for the $y$-intercept and the horizontal asymptote:

- **$y$-intercept:** $y(0)=8\cdot2^0-5=3$, so $(0,\,3)$.
- **Horizontal asymptote:** the shift down moves $y=0$ to $y=-5$ (on the left, as $x\to-\infty$).

![[PP31_q4_exponential_shift.png]]

> [!success] Answer (AI-written)
> Increasing curve through $(0,3)$ with horizontal asymptote $y=-5$.

### c. Horizontal tangent lines of $f(x)=\dfrac{x^3}{(2-3x)^5}$

A horizontal tangent is where $f'(x)=0$. Quotient rule (with the chain rule on $(2-3x)^5$, whose derivative is $5(2-3x)^4\cdot(-3)$):

$$
f'(x)=\frac{3x^2(2-3x)^5-x^3\cdot5(2-3x)^4\cdot(-3)}{(2-3x)^{10}}
$$

Factor out $3x^2(2-3x)^4$ from the top and cancel it against four powers of the bottom:

$$
f'(x)=\frac{3x^2(2-3x)^4\left[(2-3x)+5x\right]}{(2-3x)^{10}}=\frac{3x^2\,(2+2x)}{(2-3x)^6}
$$

Set the numerator to zero: $3x^2(2+2x)=0$, so $x=0$ or $x=-1$.

- $x=0$: $f(0)=0$, the point $(0,\,0)$.
- $x=-1$: $f(-1)=\dfrac{-1}{5^5}=-\dfrac1{3125}$, the point $\left(-1,\,-\dfrac1{5^5}\right)$.

A horizontal tangent line through height $c$ is $y=c$.

> [!success] Answer (the key, author unclear)
> Two horizontal tangent lines: **$y=0$** and **$y=-\dfrac1{5^5}=-\dfrac1{3125}$**.

> [!warning] Do not reuse the 2017 Moed A answer
> The key says this question comes from 2017 Moed A, question 1b. That question has $(2-3x)^2$ in the denominator, and its answers differ ($y=0$ and $y=\tfrac12$; see [[PP_17-Profit Maximisation, Rational Function Investigation, Exponential Asymptotes & Vertical Tangents (2017 Moed A)]]). Here the power is $5$, and the key works this version out itself, which is what is shown above.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result | Source |
> |---|---|---|
> | Q1a-b | Domain and continuity: $x\neq0,\,2$ | key |
> | Q1c | $-\infty$ | AI-written |
> | Q1d | does not exist (one-sided limits $\pm\tfrac12$) | key |
> | Q2a | $\tfrac12$ | key |
> | Q2b | not differentiable at $0$ (slopes $0$ and $1$) | AI-written |
> | Q2c | $f'(2)=1$ | key |
> | Q2d | $\infty$ | key via 2020 Moed A Q2b |
> | Q2e | $e^{2024}$ | key |
> | Q3 | $N'>0$; $N'$ decreasing; $N'(26)\approx139$ | key via Exercise 9 Q3 |
> | Q4a | yes, $y=-\tfrac x2$ | key via Exercise 1 Q2d |
> | Q4b | through $(0,3)$, asymptote $y=-5$ | AI-written |
> | Q4c | $y=0$ and $y=-\tfrac1{3125}$ | key |
