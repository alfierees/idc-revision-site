---
title: "Investigation of x minus Root, Piecewise Differentiability, Limits & Factory Profit (2009 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed B 2009"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - piecewise-function
  - differentiability
  - limits
  - euler-limit
  - marginal-profit
aliases:
  - Math I Moed B 2009
  - PP02 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Investigation of x minus Root, Piecewise Differentiability, Limits & Factory Profit (2009 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed B 2009**, 3 hours, three printed questions (30 + 35 + 35 points), non-graphing calculator only.
> Key concepts: [[Function Investigation]], [[Horizontal Asymptote]], [[Oblique Asymptote]], [[Continuity]], [[Differentiability]], [[Tangent Line]], [[Relative Extremum]], [[Concavity]]
> Builds on: [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_11-Concavity, Inflection Points and Asymptotes]]
> Practice: [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]]

> [!info] Source and provenance
> Answers follow **the key (author unclear)**, a typed three-page solution titled "Solution for 2009B". It is unsigned, so it is not labelled official. Its working is terse, so the steps below fill the gaps without changing any answer.
> **Question count.** The cover sheet has four score boxes, but the paper prints only **three** questions (30 + 35 + 35 = 100 points). Nothing is missing from the PDF.
> **Numbering mismatch in Q3.** On the paper, Q3 has part "a" (two limits) and then a profit problem labelled "c" with sub-parts a), b), c), an **empty d)**, and e). The key treats the profit problem as parts a, b, c, d, answering the last (profit per unit) as its "d". This note follows the key's order: Q3c(a) to Q3c(d), where Q3c(d) is the paper's e).

> [!success] AI-solved questions
> **None.** Every part has an answer in the key. Callouts marked `[!tip] Extra` or `[!warning]` are my additions or checks; they never replace a key answer.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Full investigation of $x-\sqrt{x^2+3}$: a conjugate for the asymptote, a derivative that is always positive, always concave down | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_11-Concavity, Inflection Points and Asymptotes]] |
| Q2 | Piecewise function: domain, continuity with a parameter, differentiability by the definition, and an extremum with a parameter | [[Lec_07-The Derivative, Differentiability and Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] |
| Q3 | Euler limit, exponentials with different bases, and a profit function: sign, marginal profit and profit per unit | [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |

> [!tip] Intuition: the one move behind each question
> - Q1: a difference of two large numbers ($x-\sqrt{x^2+3}$) needs a conjugate before its limit is visible.
> - Q2: continuity needs the two sides to meet; differentiability needs the two **slopes** to meet, and one side can blow up.
> - Q3: in a limit with several exponentials, the one with the biggest base dominates.

---

## Q1 — Investigate $f(x)=x-\sqrt{x^2+3}$ (30 points)

**Question.** Let $f(x)=x-\sqrt{x^2+3}$. Investigate the function by these criteria: Domain; Axis intersections; Asymptotes (use limits in your calculations); Intervals of increase and decrease; Points of relative extremum; Intervals of concavity (upward or downward); Inflection points. Draw the function's graph.

**1. Domain.** $x^2+3>0$ for every $x$, so the domain is **all $x$**.

**2. Axis intersections.**

- $y$-axis: $f(0)=-\sqrt3$, so $(0,-\sqrt3)$.
- $x$-axis: $x-\sqrt{x^2+3}=0\Rightarrow x=\sqrt{x^2+3}\Rightarrow x^2=x^2+3\Rightarrow 0=3$, impossible. **No $x$-intercept.**

**3. Asymptotes.** $f$ is continuous everywhere, so there is **no vertical asymptote**.

As $x\to+\infty$ the expression is $\infty-\infty$, so multiply by the conjugate:

$$
\lim_{x\to\infty}\left(x-\sqrt{x^2+3}\right)\cdot\frac{x+\sqrt{x^2+3}}{x+\sqrt{x^2+3}}=\lim_{x\to\infty}\frac{x^2-(x^2+3)}{x+\sqrt{x^2+3}}=\lim_{x\to\infty}\frac{-3}{x+\sqrt{x^2+3}}=0.
$$

So **$y=0$ is a horizontal asymptote on the right**.

As $x\to-\infty$ both terms push down:

$$
\lim_{x\to-\infty}\left(x-\sqrt{x^2+3}\right)=-\infty-\infty=-\infty,
$$

so there is **no horizontal asymptote on the left**.

> [!tip] Extra: the oblique asymptote on the left
> The key stops at "none at the left side", which is true for **horizontal** asymptotes. But for $x\to-\infty$, $\sqrt{x^2+3}\approx -x$, so $f(x)\approx 2x$. In fact $\lim_{x\to-\infty}\dfrac{f(x)}{x}=2$ and $\lim_{x\to-\infty}\big(f(x)-2x\big)=\lim_{x\to-\infty}\big(-x-\sqrt{x^2+3}\big)=0$, so **$y=2x$ is an oblique asymptote on the left**. [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] teaches oblique asymptotes, so a full answer can mention it. This does not change any key result.

**4 and 5. Increase and decrease, extremum.**

$$
f'(x)=1-\frac{2x}{2\sqrt{x^2+3}}=1-\frac{x}{\sqrt{x^2+3}}.
$$

Trying $f'(x)=0$ gives $\sqrt{x^2+3}=x$, so $x^2+3=x^2$, i.e. $3=0$: **no critical point**. Writing it as a single fraction shows the sign:

$$
f'(x)=\frac{\sqrt{x^2+3}-x}{\sqrt{x^2+3}}>0,
$$

because $\sqrt{x^2+3}>\sqrt{x^2}=|x|\ge x$. So $f$ is **increasing for all $x$** and has **no relative extremum**.

**6 and 7. Concavity, inflection.**

$$
f''(x)=-\frac{\sqrt{x^2+3}-\dfrac{x^2}{\sqrt{x^2+3}}}{x^2+3}=-\frac{(x^2+3)-x^2}{(x^2+3)\sqrt{x^2+3}}=-\frac{3}{(x^2+3)\sqrt{x^2+3}}<0.
$$

So $f$ is **concave down for all $x$** and has **no inflection point**.

![[PP02_q1_investigation_graph.png]]

> [!success] Answer from the key (author unclear)
> - Domain: all $x$. $y$-intercept $(0,-\sqrt3)$; no $x$-intercept.
> - No vertical asymptote; horizontal asymptote $y=0$ on the right only.
> - Increasing everywhere (since $f'>0$); no relative extremum.
> - Concave down everywhere (since $f''<0$); no inflection.

---

## Q2 — Piecewise function with parameter $c$ (35 points)

**Question.** Given $g(x)=3\sqrt[3]{x^2}+2x$ and

$$
f(x)=\begin{cases}g(x)+c & x\ge 0\\[4pt] \dfrac{2x^2}{\sqrt{1-x}-1} & x<0.\end{cases}
$$

- a. Find the domain of $f(x)$.
- b. Find the value of $c$ for which $f(x)$ will be continuous at $x=0$.
- c. Plug the value of $c$ from part b and use the definition of the derivative to find if $f(x)$ is differentiable at $x=0$ and does a tangent line exist at that point.
- d. Find the value of $a$ for which $y=\dfrac{g(x)+a}{x}$ has a relative extremum at $x=8$.

### a. Domain

For $x\ge 0$ the formula $g(x)+c$ is defined everywhere. For $x<0$ we need two things: $1-x\ge 0$ (true for every negative $x$) and $\sqrt{1-x}-1\neq 0$. The second means $\sqrt{1-x}\neq 1$, so $1-x\neq 1$, so $x\neq 0$, which is automatic when $x<0$.

> [!success] Answer from the key (author unclear)
> The domain is **all $x$**.

### b. Continuity at $x=0$

Right side:

$$
\lim_{x\to 0^+}f(x)=\lim_{x\to 0^+}\left(3\sqrt[3]{x^2}+2x+c\right)=c.
$$

Left side: a $\frac00$ form, so multiply by the conjugate of the denominator:

$$
\lim_{x\to 0^-}\frac{2x^2}{\sqrt{1-x}-1}\cdot\frac{\sqrt{1-x}+1}{\sqrt{1-x}+1}=\lim_{x\to 0^-}\frac{2x^2\left(\sqrt{1-x}+1\right)}{(1-x)-1}=\lim_{x\to 0^-}\big(-2x\big)\left(\sqrt{1-x}+1\right)=0.
$$

For continuity the two sides must agree (and equal $f(0)=c$), so:

> [!success] Answer from the key (author unclear)
> **$c=0$.**

### c. Differentiability at $x=0$ (with $c=0$, so $f(0)=0$)

$$
f'(0)=\lim_{h\to 0}\frac{f(0+h)-f(0)}{h}=\lim_{h\to 0}\frac{f(h)}{h}.
$$

**Right-hand derivative** ($h\to0^+$):

$$
\lim_{h\to 0^+}\frac{3\sqrt[3]{h^2}+2h}{h}=\lim_{h\to 0^+}\left(\frac{3}{\sqrt[3]{h}}+2\right)=\infty.
$$

**Left-hand derivative** ($h\to0^-$):

$$
\lim_{h\to 0^-}\frac{\dfrac{2h^2}{\sqrt{1-h}-1}}{h}=\lim_{h\to 0^-}\frac{2h}{\sqrt{1-h}-1}\cdot\frac{\sqrt{1-h}+1}{\sqrt{1-h}+1}=\lim_{h\to 0^-}\frac{2h\left(\sqrt{1-h}+1\right)}{-h}=-2\cdot 2=-4.
$$

The two one-sided derivatives disagree ($+\infty$ versus $-4$), so the derivative does not exist.

> [!success] Answer from the key (author unclear)
> **$f$ is not differentiable at $x=0$, and there is no tangent line there.** A tangent line would need either a finite derivative or an infinite derivative with the **same** sign on both sides (a vertical tangent). Here the left slope is the finite number $-4$ and the right slope is $+\infty$, so neither holds.

### d. Relative extremum of $y=\dfrac{g(x)+a}{x}$ at $x=8$

Split the fraction and write each term as a power of $x$:

$$
y=\frac{3x^{2/3}+2x+a}{x}=3x^{-1/3}+2+\frac{a}{x}.
$$

Differentiate:

$$
y'=-x^{-4/3}-\frac{a}{x^2}=-\frac{1}{\sqrt[3]{x^4}}-\frac{a}{x^2}.
$$

A relative extremum at $x=8$ needs $y'(8)=0$. Here $\sqrt[3]{8^4}=2^4=16$ and $8^2=64$:

$$
-\frac{1}{16}-\frac{a}{64}=0\ \Longrightarrow\ a=-\frac{64}{16}=-4.
$$

> [!success] Answer from the key (author unclear)
> **$a=-4$.**

> [!tip] Extra: it really is an extremum, and a maximum
> With $a=-4$: $y'=-x^{-4/3}+4x^{-2}=x^{-2}\left(4-x^{2/3}\right)$. At $x<8$, $x^{2/3}<4$ so $y'>0$; at $x>8$, $x^{2/3}>4$ so $y'<0$. The sign changes from $+$ to $-$, so $x=8$ is a **relative maximum**, with $y(8)=\frac{3}{2}+2-\frac12=3$.

---

## Q3 — Limits and a factory profit function (35 points)

### a. Limits

**1. $\displaystyle\lim_{x\to\infty}\left(\frac{x^2+3}{x^2+1}\right)^{3x}$**

This is a $1^\infty$ form. Split off the "$1+$":

$$
\frac{x^2+3}{x^2+1}=1+\frac{2}{x^2+1},
$$

so

$$
\left(1+\frac{2}{x^2+1}\right)^{3x}=\left[\left(1+\frac{2}{x^2+1}\right)^{\frac{x^2+1}{2}}\right]^{\frac{6x}{x^2+1}}.
$$

The inner bracket tends to $e$ (it is the standard $\left(1+\frac1u\right)^u\to e$ with $u=\frac{x^2+1}{2}\to\infty$). The exponent tends to $0$:

$$
\lim_{x\to\infty}\frac{6x}{x^2+1}=\lim_{x\to\infty}\frac{6}{x\left(1+\frac{1}{x^2}\right)}=0.
$$

So the limit is $e^0=1$.

> [!success] Answer from the key (author unclear)
> **$1$.**

**2. $\displaystyle\lim_{x\to\infty}\frac{5^x+4e^{2x}}{3^{2x+1}-e^{2x-1}}$**

Rewrite the denominator's bases: $3^{2x+1}=3\cdot 9^x$ and $e^{2x-1}=\dfrac{e^{2x}}{e}$. The base $9$ beats $e^2\approx7.39$, so the denominator grows like $3\cdot 9^x$. Dividing top and bottom by $9^x$ (the key factors out $e^{2x}$ and $3^{2x}$, which is the same thing):

$$
\frac{\left(\frac{5}{9}\right)^x+4\left(\frac{e^2}{9}\right)^x}{3-\frac1e\left(\frac{e^2}{9}\right)^x}\ \longrightarrow\ \frac{0+0}{3-0}=0,
$$

because $0<\frac59<1$ and $0<\frac{e^2}{9}<1$, and $a^x\to0$ for $0<a<1$.

> [!success] Answer from the key (author unclear)
> **$0$.**

### c. The factory profit (in thousand dollars), $x\ge 2$ units

$$
P(x)=10x-\frac{20}{\sqrt{x^2+1}},\qquad x\ge 2.
$$

**(a) Increasing and decreasing.**

$$
P'(x)=10-20\left(-\tfrac12\right)(x^2+1)^{-3/2}\cdot 2x=10+\frac{20x}{\sqrt{(x^2+1)^3}}>0\quad\text{for all }x\ge2.
$$

> [!success] Answer from the key (author unclear)
> The profit is **increasing on its entire domain** $x\ge 2$ and never decreasing.

**(b) Profit at $x=2$, and why profit is always positive.**

$$
P(2)=20-\frac{20}{\sqrt5}\approx 11.056,
$$

i.e. about 11,056 dollars (profit is in thousand dollars). The key writes $11.055$, a truncation of $11.0557\ldots$.

Because $P(2)>0$ and $P$ is **increasing** on $x\ge2$ (part a), $P(x)\ge P(2)>0$ everywhere in the domain.

> [!success] Answer from the key (author unclear)
> $P(2)\approx 11.055$ thousand dollars (more precisely $11.056$), which is positive, and since profit only increases from there it is positive on the whole domain.

**(c) Marginal profit: increasing or decreasing?** Marginal profit is $P'(x)$, so look at the sign of $P''$:

$$
P''(x)=20\left[(x^2+1)^{-3/2}-3x^2(x^2+1)^{-5/2}\right]=20\cdot\frac{x^2+1-3x^2}{\sqrt{(x^2+1)^5}}=20\cdot\frac{1-2x^2}{\sqrt{(x^2+1)^5}}.
$$

For $x\ge2$ we have $1-2x^2\le-7<0$, so $P''<0$.

> [!success] Answer from the key (author unclear)
> $P''<0$ on the whole domain, so **the marginal profit is decreasing** for all $x\ge2$ (and never increasing).

**(d) Profit per unit as the number of units goes to infinity.** (This is the paper's part e; the paper's d is blank.)

$$
\frac{P(x)}{x}=10-\frac{20}{x\sqrt{x^2+1}}\ \xrightarrow[x\to\infty]{}\ 10.
$$

Since $P$ is in thousand dollars, the limit means $10{,}000$ dollars per unit.

> [!success] Answer from the key (author unclear)
> **Profit per unit converges to $10$ thousand dollars (10,000 dollars) per unit.**

---

## Summary of answers

| Part | Answer |
|---|---|
| Q1 | Domain all $x$; $y$-int $(0,-\sqrt3)$, no $x$-int; HA $y=0$ right only; increasing everywhere; concave down everywhere; no extremum, no inflection |
| Q2a | All $x$ |
| Q2b | $c=0$ |
| Q2c | Not differentiable at $0$ (right slope $+\infty$, left slope $-4$); no tangent line |
| Q2d | $a=-4$ |
| Q3a | $1$ and $0$ |
| Q3c | Profit increasing everywhere; $P(2)\approx11.056$ thousand, positive; marginal profit decreasing; profit per unit $\to10$ thousand |

## Related notes

- [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
- [[Lec_07-The Derivative, Differentiability and Rules]]
- [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]]
- [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]]
