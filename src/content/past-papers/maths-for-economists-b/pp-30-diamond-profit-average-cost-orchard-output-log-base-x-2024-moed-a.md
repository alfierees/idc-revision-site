---
title: "Diamond Profit, Average Cost, Orchard Output & log base x (2024 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II for Economics Final Exam, Moed A (2024)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - partial-derivatives
  - lhopital
  - average-cost
  - implicit-differentiation
  - logarithm-change-of-base
aliases:
  - Math II Moed A 2024
  - Maths for Economists B 2024 Moed A
  - PP30 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Diamond Profit, Average Cost, Orchard Output & log base x (2024 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II for Economics Final Exam, Moed A (2024)**, Maths for Economists B, Hever Schulberg. 3 hours, formula sheet and non-graphic calculator allowed, 4 questions, 25 points each. "The use of any mathematical technique which was not covered in this course is strictly forbidden."
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]]

> [!info] Source and answer provenance
> Typed questions on pages 2 and 3, then handwritten pages 4 to 6. The official key is **complete for Q1 and Q4** only. For the rest it is a pointer list: Q2a "Ex 1 Q2d", Q2b "Ex 3 Q5(3)", Q2c "Ex 3 Q5(7)", Q2d "Ex 3 Q7"; Q3a "first example in lesson 2", Q3b "4th example in the video: more implicit differentiation", Q3c "2021B Q3a". Q2a to Q2d were checked against the exercise sheets (same questions, final answers printed) and Q3c against the 2021 Moed B paper (same question, fully worked).

> [!warning] AI-solved questions in this note
> **Q3a** (points to "lesson 2") and **Q3b** (points to "the video") have no written key, so both are solved here by me. Check before relying on them. Official: **Q1, Q4, Q3c** (worked, from 2021 Moed B) and the final answers to **Q2a to Q2d** (from Exercises 1 and 3; the working was written for this site).

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Partial derivatives as marginal profit, tangent line from a partial derivative, solving $f_x=f_y$ | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]] |
| Q2 | Global extremum, two limits ($0/0$ and $0^0$), minimal average cost | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q3 | Maximising a product (orchard), implicit differentiation of a curve, $y'$ on a level curve | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]] |
| Q4 | $\log_x(x-1)$: domain with a variable base, change of base, limit, derivative, tangent at the intercept | [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |

> [!tip] Intuition: the moves that recur
> - Average cost is minimised where it equals marginal cost, but here just differentiate $C(x)/x$ and set to zero.
> - Always convert $\log_x(\cdot)$ to natural logs before differentiating.
> - A "$0^0$" limit goes through $e^{\ln(\cdot)}$.

---

## Q1 — Diamond dealer (25 points)

Monthly profit in thousands of dollars from $x$ diamonds of type A and $y$ of type B: $f(x,y) = x e^{-x+y^2} + y^2$.

### a. $f_y'(0,5)$ and its meaning

$$
f_y = x e^{-x+y^2}\cdot 2y + 2y
$$

$$
f_y(0,5) = 0 + 10 = 10
$$

> [!success] Answer
> $f_y(0,5)=10$. When **no type A diamonds** are sold, the **6th type B diamond** (going from 5 to 6) raises the dealer's profit by about **10 thousand dollars, i.e. about 10,000 dollars**.

### b. $f_x'(1,0)$, its meaning and the tangent line

$$
f_x = e^{-x+y^2} + x e^{-x+y^2}\cdot(-1) = e^{-x+y^2}(1-x)
$$

$$
f_x(1,0) = e^{-1}-e^{-1} = 0
$$

> [!success] Answer
> $f_x(1,0)=0$. When **no type B diamonds** are sold, selling the **second type A diamond** (from 1 to 2) does not change profit, to first order. The slope belongs to the curve cut out by the plane $y=0$, whose height at $x=1$ is $f(1,0)=e^{-1}$. The tangent line there is horizontal: **$z = e^{-1}$, $y=0$** (the official answer).

> [!tip] Intuition
> Along $y=0$ the profit is $xe^{-x}$, which peaks at $x=1$. A zero slope at the peak is exactly what the tangent line says.

### c. A month with only type A sold and marginal profits equal

"Only diamonds of type A" means $y=0$. "Marginal profit wrt A equals marginal profit wrt B" means $f_x = f_y$. At $y=0$:

$$
f_x = e^{-x}(1-x), \qquad f_y = x\,e^{-x}\cdot 0 + 0 = 0
$$

so $e^{-x}(1-x) = 0$. The exponential is never zero, hence $x=1$.

> [!success] Answer
> The dealer sold **1 type A diamond** that month.

---

## Q2 — Four independent segments (25 points)

### a. Global extremum of $f(x)=5+3x-\dfrac{12}{x^2}$ on $x>0$

> [!info] Working written for this site; the final answer is from the official sheet (Exercise 1 Q2d: "none").
> The key says "Ex 1, Q2d". That exercise is the same function on $x>0$ and its printed answer is that there is no global extremum.

$$
f'(x) = 3 + \frac{24}{x^3}
$$

For $x>0$ both terms are positive, so $f'>0$ everywhere: $f$ is strictly increasing. It has no critical point, and the limits are $\lim_{x\to0^+}f=-\infty$ and $\lim_{x\to\infty}f=+\infty$.

> [!success] Answer
> **No global extremum** (no maximum and no minimum): the function is increasing on all of $x>0$ and unbounded in both directions.

### b. $\displaystyle\lim_{x\to0^+}\frac{e^{2x}-2x-1}{x\sqrt x}$

> [!info] Working written for this site; the final answer is from the official sheet (Exercise 3 Q5, answer 0).
> The key says "Ex 3, Q5(3)". The identical limit is printed as item 4 of Exercise 3 Q5 (item 3 there is a different limit), with answer $0$. The 2021 Moed B paper, Q3b, also has this limit with a worked solution that matches the steps below.

Numerator $\to 1-0-1 = 0$ and denominator $x^{3/2}\to0$: a $0/0$ form. Apply L'Hopital:

$$
\lim_{x\to0^+}\frac{2e^{2x}-2}{\frac32 x^{1/2}}
$$

Still $0/0$. Apply again (the numerator's derivative is $4e^{2x}$, the denominator's is $\frac34x^{-1/2}$):

$$
\lim_{x\to0^+}\frac{4e^{2x}}{\frac34 x^{-1/2}} = \lim_{x\to0^+}\frac{16}{3}\,e^{2x}\sqrt x = 0
$$

> [!success] Answer
> The limit is **0**.

### c. $\displaystyle\lim_{x\to0^+}x^{\sqrt x}$

> [!info] Working written for this site; the final answer is from the official sheet (Exercise 3 Q5.7, answer 1).
> The key says "Ex 3, Q5(7)". That is the same limit and its printed answer is $1$.

A $0^0$ form. Write $x^{\sqrt x} = e^{\sqrt x\ln x}$. For the exponent, $\sqrt x\ln x = \dfrac{\ln x}{x^{-1/2}}$ is $-\infty/\infty$:

$$
\lim_{x\to0^+}\frac{1/x}{-\frac12x^{-3/2}} = \lim_{x\to0^+}\left(-2\sqrt x\right) = 0
$$

so the limit is $e^0$.

> [!success] Answer
> The limit is **1**.

### d. Minimal average cost per unit for $C(x)=600+100x-100\ln x$

> [!info] Working written for this site; the final answer is from the official sheet (Exercise 3 Q7, answer 99.9 dollars).
> The key says "Ex 3, Q7". Same cost function; the printed answer \$99.9 agrees with $100-100e^{-7}\approx99.91$.

Average cost, for $x>0$:

$$
AC(x) = \frac{C(x)}{x} = \frac{600+100x-100\ln x}{x}
$$

Quotient rule, with numerator derivative $100-\frac{100}{x}$:

$$
AC'(x) = \frac{\left(100-\frac{100}{x}\right)x - \left(600+100x-100\ln x\right)}{x^2} = \frac{100\ln x - 700}{x^2}
$$

$AC'=0 \Rightarrow \ln x = 7 \Rightarrow x = e^7\approx1097$. The sign of $AC'$ is the sign of $\ln x-7$: negative before $e^7$ and positive after, so this is a minimum (and the only critical point, so the global minimum).

$$
AC(e^7) = \frac{600 + 100e^7 - 700}{e^7} = 100 - \frac{100}{e^7}\approx 99.91
$$

> [!success] Answer
> Minimal average cost **$100 - 100e^{-7}\approx 99.91$ per unit**, reached at $x=e^7\approx1097$ units.

---

## Q3 — Three independent segments (25 points)

### a. Orchard: how many extra trees?

> [!warning] AI-written answer, not official. Check before relying on it.
> The key says only "first example in lesson 2", a lecture example with no written solution, so this stays AI-written.

Let $n$ be the number of additional trees, $0\le n\le15$. There are $20+n$ trees, each producing $60-2n$ kg:

$$
T(n) = (20+n)(60-2n) = 1200 + 20n - 2n^2
$$

$$
T'(n) = 20 - 4n = 0 \;\Rightarrow\; n = 5
$$

$T''=-4<0$, a maximum. Endpoints: $T(0)=1200$ and $T(15)=35\cdot30=1050$, both lower. $T(5) = 25\cdot50 = 1250$.

> [!success] Answer (AI-written)
> Plant **5 additional trees**; the maximal annual production is **1250 kg**.

### b. $s' = ds/dr$ on the curve $-4=\sqrt{7+s^2}-r^3$ at $s=3$

> [!warning] AI-written answer, not official. Check before relying on it.
> The key says only "4th example in the video: more implicit differentiation", a video with no written solution, so this stays AI-written.

First find $r$: with $s=3$, $\sqrt{7+9}=4$, so $-4 = 4 - r^3 \Rightarrow r^3=8 \Rightarrow r=2$.

Differentiate the equation with respect to $r$ ($s$ depends on $r$):

$$
0 = \frac{s\,s'}{\sqrt{7+s^2}} - 3r^2 \;\Rightarrow\; s' = \frac{3r^2\sqrt{7+s^2}}{s}
$$

At $r=2$, $s=3$: $s' = \dfrac{3\cdot4\cdot4}{3} = 16$.

> [!success] Answer (AI-written)
> $s'=16$ at $(r,s)=(2,3)$.

### c. $y'=dy/dx$ on the curve $z=0$ of $z=\ln^2x+1-5\ln\left((xy)^{1/2}\right)$, at $y=1$

> [!info] Official solution: from 2021 Moed B Q3a
> The key says "2021B Q3a". That question is word for word the same (same surface, $x>e$, $y>0$, $y=1$) and its handwritten solution is followed below. The exponent $\tfrac12$ applies to $xy$ inside the log, so $5\ln\left((xy)^{1/2}\right)=2.5\ln(xy)$.

The curve $z=0$:

$$
0 = \ln^2x - 2.5\ln(xy) + 1 .
$$

At $y=1$, $\ln y=0$. Let $t=\ln x$:

$$
t^2 - 2.5t + 1 = 0 \;\Rightarrow\; t=2 \text{ or } t=\tfrac12 .
$$

So $x=e^2$ or $x=e^{1/2}$. Since $x>e$, only $x=e^2$ qualifies. The point is $(e^2,1)$.

Differentiate the curve with respect to $x$, with $y=y(x)$:

$$
0 = 2\ln x\cdot\frac1x - 2.5\cdot\frac{1}{xy}\left(y + xy'\right) .
$$

Plug in $(e^2,1)$ and multiply through by $e^2$:

$$
0 = 2\cdot2\cdot\frac{1}{e^2} - 2.5\cdot\frac{1}{e^2}\left(1+e^2y'\right) \;\Rightarrow\; 0 = 4 - 2.5 - 2.5e^2y' .
$$

$$
2.5e^2y' = 1.5 \;\Rightarrow\; y' = \frac{3}{5e^2}\approx 0.081 .
$$

> [!success] Answer
> $y' = \dfrac{3}{5e^2}\approx 0.081$ at the point $(e^2,1)$.

---

## Q4 — $f(x)=\log_x(x-1)$ (25 points)

The official handwriting labels the parts with letters one step off from the printed question (the "show that" part is lettered c twice). Mapped here to the printed parts a to f.

### a. Domain

For a logarithm with base $x$ we need base $x>0$, base $x\neq1$, and argument $x-1>0$. The last condition ($x>1$) already implies the first two.

> [!success] Answer
> $x>1$.

### b. $x$ intercept

$\log_x(x-1) = 0 \Rightarrow x-1 = x^0 = 1 \Rightarrow x=2$.

> [!success] Answer
> The intercept is $(2,0)$.

### c. Show $f(x)=\dfrac{\ln(x-1)}{\ln x}$

Change of base: $\log_a b = \dfrac{\log_e b}{\log_e a}$. With base $a=x$ and $b=x-1$:

$$
f(x) = \log_x(x-1) = \frac{\ln(x-1)}{\ln x}
$$

> [!success] Answer
> Shown by the change-of-base rule.

### d. $\displaystyle\lim_{x\to\infty}f(x)$

$\dfrac{\ln(x-1)}{\ln x}$ is $\infty/\infty$. L'Hopital:

$$
\lim_{x\to\infty}\frac{\frac1{x-1}}{\frac1x} = \lim_{x\to\infty}\frac{x}{x-1} = 1
$$

> [!success] Answer
> The limit is $1$, so $y=1$ is a horizontal asymptote.

### e. Show $f'(x) = \dfrac{1}{\ln x\,(x-1)} - \dfrac{\ln(x-1)}{\ln^2x\cdot x}$

Quotient rule on $\dfrac{\ln(x-1)}{\ln x}$, with $\dfrac{d}{dx}\ln(x-1)=\dfrac1{x-1}$ and $\dfrac{d}{dx}\ln x = \dfrac1x$:

$$
f'(x) = \frac{\frac{1}{x-1}\ln x - \ln(x-1)\cdot\frac1x}{(\ln x)^2}
$$

Split the fraction into two terms:

$$
f'(x) = \frac{1}{(x-1)\ln x} - \frac{\ln(x-1)}{x\ln^2x}
$$

> [!success] Answer
> Shown.

### f. Tangent line at the $x$ intercept

At $x=2$: $\ln(x-1)=\ln1=0$, so the second term vanishes and $f'(2) = \dfrac{1}{1\cdot\ln2} = \dfrac1{\ln2}$.

Tangent at $(2,0)$: $y - 0 = \dfrac{1}{\ln 2}(x-2)$.

![[PP30_q4_log_base_x.png|620]]

*The curve climbs steeply just to the right of $x=1$, crosses zero at $(2,0)$ with slope $1/\ln2$ (dashed tangent) and flattens towards the asymptote $y=1$.*

> [!success] Answer
> $y = \dfrac{1}{\ln 2}\,x - \dfrac{2}{\ln 2}$

---

## Recap table

| Part | Tool | Answer | Source |
|---|---|---|---|
| Q1a | $f_y$ | $10$ (about 10,000 dollars for the 6th B diamond) | official |
| Q1b | $f_x$ | $0$; tangent $z=e^{-1}$ | official |
| Q1c | $y=0$, $f_x=f_y$ | $x=1$ | official |
| Q2a | sign of $f'$ | no global extremum | official answer (Ex 1 Q2d) |
| Q2b | L'Hopital twice | $0$ | official answer (Ex 3 Q5) |
| Q2c | $e^{\sqrt x\ln x}$ | $1$ | official answer (Ex 3 Q5.7) |
| Q2d | $AC'=0$ | min $\approx99.91$ at $x=e^7$ | official answer (Ex 3 Q7: 99.9) |
| Q3a | maximise $(20+n)(60-2n)$ | 5 trees, 1250 kg | AI |
| Q3b | implicit differentiation | $s'=16$ | AI |
| Q3c | implicit differentiation at $(e^2,1)$ | $\frac{3}{5e^2}$ | official (2021 Moed B Q3a) |
| Q4a-f | change of base, L'Hopital, quotient rule | $x>1$; $(2,0)$; shown; $1$; shown; $y=\frac{x-2}{\ln2}$ | official |

## Related notes

[[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Maths for Economists B]]
