---
title: "PS2"
subject: maths-for-economists-a
source_doc: /papers/maths-for-economists-a/ps-2.pdf
tags:
  - maths-for-economists-a
  - problem-set
  - absolute-value-function
  - piecewise-function
  - linear-function
  - cost-revenue-profit
  - exponential-equations
  - domain
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Absolute value of a line.** (a) Draw the graph of $f(x)=|4-3x|$. (b) Write the function in the form of a compound function. (c) Find the equation of the linear function with slope $-5$ and $y$-intercept $(0,5)$ and draw its graph.
    solution: |
      > [!success] Printed answer
      > (a) V-shaped graph with its vertex on the $x$-axis at $x=1.33$. (b) $f(x)=\begin{cases}4-3x & x\le \tfrac43\\ -4+3x & x>\tfrac43\end{cases}$. (c) $y=-5x+5$.

      ![](/images/maths-for-economists-a/ps02-q1-abs-and-line.png)

      > [!note] Working reconstructed to reach the printed answer
      > The inside $4-3x$ changes sign where it is zero: $x=\tfrac43\approx1.33$. For $x\le\tfrac43$ the inside is non-negative, so $|4-3x|=4-3x$. For $x>\tfrac43$ it is negative, so $|4-3x|=-(4-3x)=-4+3x$. The graph is the line $4-3x$ with the part below the axis flipped up.
      >
      > For (c): $y=mx+b$ with $m=-5$, $b=5$ gives $y=-5x+5$, crossing the $x$-axis at $x=1$.
    related_terms: ["absolute-value-function", "piecewise-function", "linear-function", "slope"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Absolute value of a quadratic.** For each function: (a) draw its graph, (b) write it without the absolute value sign, (c) find its extreme points.

      $$\text{2.1: } y=|x^2+3x+2| \qquad \text{2.2: } y=|-x^2+3x-4|$$
    solution: |
      > [!success] Printed answer
      > **2.1 (b):** $y=\begin{cases}x^2+3x+2 & x\le-2 \text{ or } x\ge-1\\ -(x^2+3x+2) & -2<x<-1\end{cases}$
      > **2.2 (b):** $y=x^2-3x+4$.
      > **(c):** $(-2,0)_{\min},\ (-1,0)_{\min},\ (-1.5,0.25)_{\max}$ for 2.1, and $(1.5,1.75)_{\min}$ for 2.2.

      ![](/images/maths-for-economists-a/ps02-q2-abs-quadratics.png)

      > [!note] Working reconstructed to reach the printed answer
      > **2.1.** $x^2+3x+2=(x+2)(x+1)$, an upward parabola that is negative only between its roots $-2$ and $-1$. Outside the roots the absolute value changes nothing; between them it flips the sign. The flipped bump has its top at the old vertex $x=-1.5$, where $x^2+3x+2=2.25-4.5+2=-0.25$, so the new height is $0.25$ (a local max). The roots are minima of height 0.
      >
      > **2.2.** The discriminant of $-x^2+3x-4$ is $9-16<0$, so it never touches the axis and is always negative (it opens downward). Hence $|{-x^2+3x-4}|=x^2-3x+4$, an upward parabola with vertex at $x=1.5$: $2.25-4.5+4=1.75$. That is the minimum.
    related_terms: ["absolute-value-function", "quadratic-function", "parabola", "relative-extremum"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Car value over 30 years.** A car cost $30{,}000$. Over the next 20 years its value fell linearly to $5{,}000$. For the next two years its value stayed constant, then it rose linearly so that 30 years after purchase it was worth $20{,}000$. (a) Write $V(x)$, the value in dollars $x$ years after purchase, for $0\le x\le30$. (b) Draw the graph.
    solution: |
      > [!success] Printed answer
      >
      > $$
      > V(x)=\begin{cases}-1250x+30000 & 0\le x\le20\\ 5000 & 20<x\le22\\ 1875x-36250 & 22<x\le30\end{cases}
      > $$

      ![](/images/maths-for-economists-a/ps02-q3-car-value.png)

      > [!note] Working reconstructed to reach the printed answer
      > - **Years 0 to 20:** slope $\dfrac{5000-30000}{20}=-1250$, intercept 30,000.
      > - **Years 20 to 22:** constant 5,000.
      > - **Years 22 to 30:** slope $\dfrac{20000-5000}{30-22}=1875$. Through $(22,5000)$: $V=1875(x-22)+5000=1875x-41250+5000=1875x-36250$.
    related_terms: ["piecewise-function", "linear-function", "slope"]
    source_doc_page: 1
  - id: "4"
    text: |
      **Publisher cost and revenue.** Fixed cost of a new edition is $\$240{,}000$, variable cost $\$20$ per copy, retail price $\$35$. (a) Express cost $C$ for $x$ copies. (b) Express revenue $R$. (c) Draw both graphs on the same axes. (d) How many copies must be sold to balance the costs?
    solution: |
      > [!success] Printed answer
      > (a) $C(x)=240000+20x$. (b) $R(x)=35x$. (d) $16{,}000$ copies.

      ![](/images/maths-for-economists-a/ps02-q4-cost-revenue.png)

      > [!note] Working reconstructed to reach the printed answer
      > Break-even is where $R=C$: $35x=240000+20x$, so $15x=240000$ and $x=16000$. Each copy adds $35-20=15$ to profit and it must repay the fixed cost 240,000.
    related_terms: ["cost-function", "revenue-function", "break-even", "linear-function"]
    source_doc_page: 1
  - id: "5"
    text: |
      **Clock radios and price.** A factory finds that when the retail price per radio is $p$ dollars the weekly demand is $x=500-10p$. Production cost is $C(x)=3000+10x$.

      (a) Express revenue $R$ and expenses $C$ as functions of the price $p$. (b) Describe $C$ and $R$ on the same axes. (c) Find the break-even prices. (d) For which $p$ is the factory profitable? (e) Find the $p$ that maximizes profit. (f) Express $R$ as a function of the demand $x$. (g) Find the $x$ that maximizes profit.
    solution: |
      > [!success] Printed answer
      > (a) $R(p)=-10p^2+500p$, $C(p)=8000-100p$, for $0\le p\le50$. (c) $p=20,\ p=40$. (d) $20<p<40$. (e) $p=30$. (f) $R(x)=50x-\tfrac1{10}x^2$, $0\le x\le500$. (g) $x=200$.

      ![](/images/maths-for-economists-a/ps02-q5-revenue-cost-price.png)

      > [!note] Working reconstructed to reach the printed answer
      > **(a)** Revenue is price times quantity: $R=p\,x=p(500-10p)=-10p^2+500p$. Cost: $C=3000+10(500-10p)=8000-100p$. Demand cannot be negative, so $x\ge0$ gives $p\le50$.
      >
      > **(c)** Set $R=C$:
      >
      > $$
      > -10p^2+500p=8000-100p\ \Longrightarrow\ p^2-60p+800=0\ \Longrightarrow\ (p-20)(p-40)=0.
      > $$
      >
      > **(d)** Profit $=R-C=-10p^2+600p-8000$, which is positive between the roots: $20<p<40$.
      >
      > **(e)** The profit parabola peaks at its vertex $p=\dfrac{-600}{2(-10)}=30$.
      >
      > **(f)** From $x=500-10p$, $p=\dfrac{500-x}{10}$, so $R=xp=50x-\tfrac{1}{10}x^2$, with $0\le x\le500$.
      >
      > **(g)** Profit in terms of $x$: $50x-\tfrac1{10}x^2-(3000+10x)=-\tfrac1{10}x^2+40x-3000$, with vertex $x=\dfrac{-40}{2(-1/10)}=200$. This agrees with (e): $p=30$ gives $x=500-300=200$.
    related_terms: ["revenue-function", "cost-function", "profit-function", "break-even", "quadratic-function"]
    source_doc_page: 1
  - id: "6"
    text: |
      **Solve for $x$ (matching bases).**

      $$\text{a. } 7^{x^2}=7^{2x-3} \quad \text{b. } 100^{3x-1}=0.001^{\frac23x-2} \quad \text{c. } 5^x\cdot\frac{1}{125^{\sqrt x}}=25^5 \quad \text{d. } 4\cdot5^{2x+1}=3$$
    solution: |
      > [!success] Printed answer
      > **a.** No solution. **b.** $x=1$. **c.** $x=25$. **d.** $x=-0.589$.

      > [!note] Working reconstructed to reach the printed answer
      > Write both sides with the same base, then equate exponents.
      >
      > **a.** $x^2=2x-3\Rightarrow x^2-2x+3=0$. The discriminant is $4-12<0$: no real solution.
      >
      > **b.** $100^{3x-1}=10^{6x-2}$ and $0.001^{\frac23x-2}=10^{-3\left(\frac23x-2\right)}=10^{-2x+6}$. So $6x-2=-2x+6$, $x=1$.
      >
      > **c.** $125^{\sqrt x}=5^{3\sqrt x}$ and $25^5=5^{10}$, so $5^{x-3\sqrt x}=5^{10}$. Let $s=\sqrt x\ge0$: $s^2-3s-10=0$, $(s-5)(s+2)=0$, so $s=5$ (reject $-2$). Then $x=25$.
      >
      > **d.** $5^{2x+1}=\tfrac34$. Take $\log_5$: $2x+1=\log_5 0.75=\dfrac{\ln0.75}{\ln5}\approx-0.179$, so $x\approx-0.589$.
    related_terms: ["exponential-function", "change-of-base"]
    source_doc_page: 2
  - id: "7"
    text: |
      **Solve for $x$ (substitution and factoring).**

      $$\text{a. } 3^{2-x}+3^{1+x}=11 \qquad \text{b. } 3xe^{-x}+x^2e^{-x}=0$$

      $$\text{c. } 10xe^x-x^2e^x=21e^x \qquad \text{d. } \frac{4e^x}{2-e^x}+e^x+4=0$$
    solution: |
      > [!success] Printed answer
      > **a.** $x=0.81$ and $x=0.19$. **b.** $x=-3,\ x=0$. **c.** $x=3,\ x=7$. **d.** $x=1.386$.

      > [!note] Working reconstructed to reach the printed answer
      > **a.** Let $t=3^x>0$. Then $3^{2-x}=9/t$ and $3^{1+x}=3t$, so $\dfrac9t+3t=11\Rightarrow3t^2-11t+9=0$, giving $t=\dfrac{11\pm\sqrt{13}}6\approx2.434$ or $1.232$. Then $x=\log_3t\approx0.81$ or $0.19$.
      >
      > **b.** Factor out $e^{-x}$, which is never zero: $e^{-x}x(3+x)=0$, so $x=0$ or $x=-3$.
      >
      > **c.** Divide by $e^x>0$: $10x-x^2=21\Rightarrow x^2-10x+21=0\Rightarrow(x-3)(x-7)=0$.
      >
      > **d.** Let $t=e^x$ (with $t\neq2$). Multiply by $2-t$: $4t+(t+4)(2-t)=0\Rightarrow-t^2+2t+8=0\Rightarrow t^2-2t-8=0\Rightarrow(t-4)(t+2)=0$. Reject $t=-2$ since $e^x>0$. So $e^x=4$, $x=\ln4\approx1.386$.
    related_terms: ["exponential-function", "natural-logarithm", "change-of-base"]
    source_doc_page: 2
  - id: "8"
    text: |
      **Domains with exponentials.**

      $$\text{a. } y=\frac{e^x}{e^{2x}-2e^x} \qquad \text{b. } y=\frac{e^x}{e^{2x}+e^x-e\cdot e^x-e}$$
    solution: |
      > [!success] Printed answer
      > **a.** $x\neq0.693$. **b.** $x\neq1$.

      > [!note] Working reconstructed to reach the printed answer
      > Exclude the values that make the denominator zero.
      >
      > **a.** $e^{2x}-2e^x=e^x(e^x-2)=0$ only when $e^x=2$, so $x=\ln2\approx0.693$.
      >
      > **b.** With $t=e^x$: $t^2+t-et-e=(t+1)(t-e)$. Zero only at $t=e$ (since $t=-1$ is impossible), so $x=1$.
    related_terms: ["domain", "exponential-function", "natural-logarithm"]
    source_doc_page: 2
---

> [!tip] Check across questions
> Q5 shows the same pattern twice: set revenue equal to cost for break-even, and find the vertex of the profit parabola for the maximum. The two routes (in $p$ and in $x$) agree.

*Related: [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]]*
