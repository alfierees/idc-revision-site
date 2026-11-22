---
title: "Import Profit, Level Curves, Homogeneity Sums & x to the x (2025 Moed A)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, Moed A (2025)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - partial-derivatives
  - differential
  - level-curves
  - lagrange-multipliers
  - asymptotes
aliases:
  - Math II Moed A 2025
  - Maths for Economists B 2025 Moed A
  - PP32 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Import Profit, Level Curves, Homogeneity Sums & x to the x (2025 Moed A)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, Moed A (2025)**, Maths for Economists B, Hever Schulberg. 3 hours, formula sheet and non-graphic calculator allowed, 4 questions, 25 points each. "The use of any mathematical technique which was not covered in this course is strictly forbidden."
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]]

> [!info] Source and answer provenance
> Typed questions on pages 2 and 3, then the lecturer's **handwritten official solutions** (pages 4 to 10). The key is complete for Q1d, Q2, Q3 and Q4. For **Q1a to Q1c** the key only says "segments a to c are from exam 2023A, question 1". That question (2023 Moed A Q1a to Q1d) has the same cost function, prices and import levels, and a full handwritten solution, which is used below.

> [!info] Every part has an official solution
> Q1a to Q1c follow the 2023 Moed A Q1 solution (Q1a and Q1b there are merged into Q1a here, Q1c there is Q1b here, Q1d there is Q1c here). The rest is from this paper's own key. No AI-written answers remain in this note.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Profit with a logarithmic cost term: marginal profit, the **differential** as an estimate, critical point classification, a mixed second derivative | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q2 | Domain and contour line of $e^{2x/(x^2+y^2)}$, slope of a level curve, testing whether a point is critical | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_05-Two Variable Functions]] |
| Q3 | Sums over ten variables ($\sum x_j f_{x_j}$), then a Lagrange problem with a linear constraint | [[Lec_06-Partial Derivatives and the Differential]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]] |
| Q4 | $x^x+1$: minimum by logarithmic differentiation, asymptotes via limits, global extrema on $[0.4, 1)$ | [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |

> [!tip] Intuition: the moves that recur
> - To show a point is **not** critical, one partial derivative that is non-zero is enough (Q2d).
> - Homogeneity-style sums reduce to "differentiate, multiply, add up" (Q3a, Q3b).
> - A decreasing-then-increasing function on an interval that starts after its minimum is just increasing there (Q4c).

---

## Q1 — Import profit (25 points)

An importer sells $x$ type A units at 3000 dollars and $y$ type B units at 4000 dollars each month. Import cost: $C(x,y) = 2000x + 2000y + 5000\ln(x^2+y^2)$.

**Profit function.** Revenue minus cost:

$$
P(x,y) = 3000x + 4000y - 2000x - 2000y - 5000\ln(x^2+y^2) = 1000x + 2000y - 5000\ln(x^2+y^2)
$$

### a. Profit function and the two marginal profits at $(10,10)$

> [!info] Official solution: from 2023 Moed A Q1a and Q1b
> The key says "segments a-c are from exam 2023A, question 1". Same cost function, prices (3000, 4000) and import level $(10,10)$. The 2023 Moed A solution has the same profit function and marginal profits.

The two marginal profits are the partial derivatives. Using $\frac{\partial}{\partial x}\ln(x^2+y^2) = \frac{2x}{x^2+y^2}$:

$$
P_x = 1000 - \frac{10000\,x}{x^2+y^2}, \qquad P_y = 2000 - \frac{10000\,y}{x^2+y^2}
$$

At $(10,10)$, $x^2+y^2 = 200$, so

$$
P_x(10,10) = 1000 - \frac{100000}{200} = 500, \qquad P_y(10,10) = 2000 - \frac{100000}{200} = 1500
$$

> [!success] Answer
> $P(x,y)=1000x+2000y-5000\ln(x^2+y^2)$. At 10 units of each kind: $P_x = 500$ and $P_y = 1500$. Importing an additional unit of type A raises monthly profit by about **500 dollars**; an additional unit of type B raises it by about **1500 dollars** (the other quantity held at 10).

### b. Differential estimate for the move $(10,10)\to(11,9)$

> [!info] Official solution: from 2023 Moed A Q1c
> Same move from $(10,10)$ to $(11,9)$. The official working is $dP = P_x(10,10)\cdot1 + P_y(10,10)\cdot(-1) = 500-1500 = -1000$.

The changes are $dx = +1$ and $dy = -1$. The differential is

$$
dP = P_x\,dx + P_y\,dy = 500(1) + 1500(-1) = -1000
$$

> [!success] Answer
> Monthly profit falls by about **1000 dollars**.

> [!tip] Intuition
> The exact change is $P(11,9)-P(10,10)\approx -1049.75$. The differential is close because the steps are small relative to the quantities. The shift is bad because a unit of B earns three times as much marginal profit as a unit of A.

### c. Critical point and its type

> [!info] Official solution: from 2023 Moed A Q1d
> Same profit function. The official working finds $S=10x$ and $S=5y$, so $y=2x$, discards $(0,0)$ as outside the domain, and gets $(2,4)$ with $A=-300$, $B=400$, $C=300$ and $\Delta=-250{,}000<0$, a saddle.

Set both partial derivatives to zero. Let $S = x^2+y^2$:

$$
P_x = 0 \Rightarrow S = 10x, \qquad P_y = 0 \Rightarrow S = 5y
$$

So $10x = 5y$, i.e. $y = 2x$. Then $S = x^2 + 4x^2 = 5x^2 = 10x$, so $x = 2$ (the root $x=0$ is excluded because $\ln(0)$ is undefined) and $y = 4$.

Second derivatives (quotient rule), evaluated at $(2,4)$ where $S=20$:

$$
P_{xx} = -\frac{10000\,(y^2-x^2)}{S^2} = -\frac{10000\cdot12}{400} = -300
$$

$$
P_{yy} = -\frac{10000\,(x^2-y^2)}{S^2} = \frac{10000\cdot12}{400} = 300
$$

$$
P_{xy} = \frac{20000\,xy}{S^2} = \frac{20000\cdot8}{400} = 400
$$

$$
\Delta = P_{xx}P_{yy} - P_{xy}^2 = -90000 - 160000 = -250000 < 0
$$

> [!success] Answer
> The critical point is **$(2,4)$**, a **saddle point** since $\Delta<0$.

### d. Does marginal profit from type A rise or fall as $y$ grows?

The question is the sign of $\dfrac{\partial}{\partial y}P_x = P_{xy}$. From the official working,

$$
P_x = 1000 - \frac{10000\,x}{x^2+y^2}
$$

As $y$ increases, $y$ appears in the denominator, so the subtracted fraction **shrinks** and $P_x$ **increases**. (Differentiating gives $P_{xy} = \dfrac{20000\,xy}{(x^2+y^2)^2}$, which is positive for $x,y>0$.)

> [!success] Answer
> **Increasing.** The more of type B imported, the higher the marginal profit of an extra type A unit.

---

## Q2 — Level curves of $f(x,y) = e^{2x/(x^2+y^2)}$ (25 points)

### a. Domain

The denominator $x^2+y^2$ must not be zero.

> [!success] Answer
> All of the $xy$ plane except $(0,0)$.

### b. Contour line for $z=1$

$e^{2x/(x^2+y^2)} = 1 = e^0$ means $\dfrac{2x}{x^2+y^2} = 0$, so $x = 0$.

> [!success] Answer
> The contour line $z=1$ is the **line $x=0$ (the $y$ axis) without the point $(0,0)$**, which is outside the domain.

### c. $y' = dy/dx$ on the curve $z=e$, at $x=1$, $y<0$

Setting $f = e$ gives $\dfrac{2x}{x^2+y^2}=1$, i.e. $x^2 + y^2 = 2x$, which is the circle $(x-1)^2+y^2=1$. At $x=1$: $1 + y^2 = 2$, so $y=\pm1$, and $y<0$ selects $y=-1$. The point is $(1,-1)$.

The official working differentiates the exponent equation (the shortcut) implicitly: from $x^2+y^2 = 2x$,

$$
2x + 2y\,y' = 2
$$

At $(1,-1)$: $2 - 2y' = 2$, so $y' = 0$. (The full route through the quotient rule gives the same: $4 - 4 + 4y' = 0$.)

![[PP32_q2_level_curves.png|700]]

*Left: the contour $z=1$. Right: the level curve $z=e$ is a circle; at its lowest point $(1,-1)$ the tangent is horizontal, so $y'=0$.*

> [!success] Answer
> The point is $(1,-1)$ and **$y' = 0$** (horizontal tangent).

> [!tip] Intuition
> Take logs of the level condition first, then differentiate. Differentiating $e^{(\cdot)}$ is longer and gives the same result.

### d. Are $(1,1)$ and $(0,1)$ critical points?

$$
f_x = e^{2x/(x^2+y^2)}\cdot\frac{2(x^2+y^2)-2x\cdot2x}{(x^2+y^2)^2} = e^{2x/(x^2+y^2)}\cdot\frac{2y^2-2x^2}{(x^2+y^2)^2}
$$

$$
f_y = e^{2x/(x^2+y^2)}\cdot\frac{-2x\cdot 2y}{(x^2+y^2)^2} = -e^{2x/(x^2+y^2)}\cdot\frac{4xy}{(x^2+y^2)^2}
$$

- At $(1,1)$: $f_x = 0$ (since $2y^2-2x^2=0$) but $f_y = -e\cdot\frac{4}{4} = -e \ne 0$.
- At $(0,1)$: $f_y = 0$ (since $x=0$) but $f_x = e^0\cdot\frac{2}{1} = 2 \neq 0$.

> [!success] Answer
> **Neither** point is critical, because in each case one partial derivative is non-zero. A critical point needs both to vanish.

---

## Q3 — Ten variables (25 points)

$f(x_1,\dots,x_{10}) = \displaystyle\sum_{i=1}^{10}x_i^2$.

### a. Is $\displaystyle\sum_{j=1}^{10}x_j\frac{\partial f}{\partial x_j} = 2f$?

$\dfrac{\partial f}{\partial x_j} = 2x_j$, so

$$
\sum_{j=1}^{10} x_j\cdot 2x_j = 2\sum_{j=1}^{10}x_j^2 = 2f
$$

> [!success] Answer
> **True.**

### b. For $g = e^{f}$, is $\displaystyle\sum_{j=1}^{10}\frac{1}{x_j}\frac{\partial g}{\partial x_j} = 20g$?

By the chain rule $\dfrac{\partial g}{\partial x_j} = e^{f}\cdot 2x_j$, so each term is $\dfrac{1}{x_j}\,e^f\,2x_j = 2e^f$. Ten equal terms:

$$
\sum_{j=1}^{10}\frac{1}{x_j}\frac{\partial g}{\partial x_j} = 10\cdot 2e^f = 20g
$$

> [!success] Answer
> **True.**

### c. Minimum of $f$ under $\sum x_i = 2$ equals $2/5$

Lagrangian: $L = \sum x_i^2 - \lambda\left(\sum x_i - 2\right)$.

$$
\frac{\partial L}{\partial x_i} = 2x_i - \lambda = 0 \;\Rightarrow\; x_i = \frac{\lambda}{2}
$$

The constraint gives $10\cdot\dfrac\lambda2 = 2$, so $\lambda = \dfrac25$ and $x_i = \dfrac15$ for every $i$. Then

$$
f\left(\tfrac15,\dots,\tfrac15\right) = 10\cdot\frac{1}{25} = \frac{2}{5}
$$

> [!success] Answer
> The constrained extremum is at $x_i = \frac15$ for all $i$, with value **$\frac25$**, as required.

> [!tip] Intuition
> Spreading the total of 2 equally over ten variables minimises the sum of squares. The question says you need not prove it is a minimum.

---

## Q4 — $y = x^x + 1$, $x>0$ (25 points)

### a. Minimal value

Rewrite $x^x = e^{x\ln x}$, or take logs: $\ln(y-1) = x\ln x$ with $y-1 = x^x$. Differentiate $x^x$:

$$
(x^x)' = x^x\left(\ln x + 1\right)
$$

Set to zero: $x^x>0$ so $\ln x = -1$, i.e. $x = 1/e$. The sign of $y'$ is the sign of $\ln x + 1$: negative before $1/e$, positive after, so $x=1/e$ is a minimum, and the only critical point, hence the global minimum on $x>0$.

$$
y\!\left(\tfrac1e\right) = \left(\tfrac1e\right)^{1/e} + 1 \approx 1.69
$$

> [!success] Answer
> Minimum value **$\approx 1.69$**, at $x = 1/e$.

### b. Asymptotes

- **Horizontal:** $\lim_{x\to\infty}(x^x+1) = \infty$, so there is no horizontal asymptote.
- **Vertical:** the only candidate is $x=0$ (the edge of the domain). $\lim_{x\to0^+}(x^x+1)$ is of the form $0^0+1$. Write it as $e^{x\ln x}+1$. Then

$$
\lim_{x\to0^+}x\ln x = \lim_{x\to0^+}\frac{\ln x}{1/x} \overset{L'H}{=} \lim_{x\to0^+}\frac{1/x}{-1/x^2} = \lim_{x\to0^+}(-x) = 0
$$

so the limit is $e^0 + 1 = 2$, a finite number.

> [!success] Answer
> **No horizontal and no vertical asymptote.** As $x\to0^+$ the function tends to $2$.

### c. Global extrema on $[0.4, 1)$

The minimum is at $x = 1/e\approx0.368<0.4$, so the whole interval $[0.4,1)$ lies to the right of it, where $y'>0$: the function is **increasing**. Hence the smallest value is at the left endpoint, and the largest value would be at $x=1$, which is excluded.

![[PP32_q4_x_to_the_x_plus_1.png|620]]

*The curve dips to its minimum at $x=1/e$ and rises afterwards. The shaded band is the interval $[0.4,1)$, on which the curve only rises.*

> [!success] Answer
> Only a **global minimum, at $x = 0.4$**. (The official page states just this. By the same monotonic argument there is no global maximum, because $y\to2$ as $x\to1^-$ but $x=1$ is excluded.)

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1a | partial derivatives | $P_x=500$, $P_y=1500$ |
| Q1b | differential $dP$ | $-1000$ |
| Q1c | $P_x=P_y=0$, $\Delta$ | $(2,4)$ saddle |
| Q1d | sign of $P_{xy}$ | increasing |
| Q2a | denominator not zero | plane minus $(0,0)$ |
| Q2b | exponent $=0$ | line $x=0$ minus origin |
| Q2c | implicit differentiation | $y'=0$ at $(1,-1)$ |
| Q2d | check both partials | neither is critical |
| Q3a, b | differentiate and sum | both true |
| Q3c | Lagrange | $x_i=\frac15$, $f=\frac25$ |
| Q4a | log differentiation | min $\approx1.69$ at $x=1/e$ |
| Q4b | limits | no asymptotes |
| Q4c | monotonicity | global min at $x=0.4$ only |

## Related notes

[[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Maths for Economists B]]
