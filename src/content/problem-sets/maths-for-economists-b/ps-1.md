---
title: "PS1"
subject: maths-for-economists-b
source_doc: /papers/maths-for-economists-b/ps-1.pdf
tags:
  - maths-for-economists-b
  - global-extremum
  - critical-point
  - closed-interval-rule
  - optimization
  - compound-function
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Question 1.** Find the global extremum for $f(x)=\sqrt[3]{x^2}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Write $f(x)=x^{2/3}$, so

      $$
      f'(x)=\tfrac23 x^{-1/3},
      $$

      which is never zero but does not exist at $x=0$. So $x=0$ is the only critical point. Since $x^{2/3}\ge 0$ for every $x$ and $f(0)=0$, the value $0$ is the lowest. As $|x|\to\infty$, $f\to\infty$, so there is no maximum.

      **Global minimum at $x=0$** (value $0$), no maximum. Note this minimum is a sharp point (a cusp), so the derivative test "$f'=0$" would have missed it.

      > [!success] Official answer
      > $x_{\min}=0$.
    related_terms: ["global-extremum", "critical-point", "cusp"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Find the global extremum for $f(x)=1-x^3$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $f'(x)=-3x^2$, which is zero only at $x=0$. But $f'\le 0$ everywhere, so $f$ is strictly decreasing: it passes through a flat spot at $0$ without turning. And $f\to+\infty$ as $x\to-\infty$, $f\to-\infty$ as $x\to+\infty$.

      **No global extremum.**

      > [!warning] Trap
      > A critical point is only a candidate. $x=0$ is not an extremum because the sign of $f'$ does not change there.

      > [!success] Official answer
      > None.
    related_terms: ["global-extremum", "critical-point"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Find the global extremum for $f(x)=1-x^4$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $f'(x)=-4x^3$, zero at $x=0$, positive for $x<0$ and negative for $x>0$. So $f$ rises then falls: a peak at $x=0$ with $f(0)=1$. Since $f\to-\infty$ in both directions, there is no minimum.

      **Global maximum at $x=0$.**

      > [!success] Official answer
      > $x_{\max}=0$.
    related_terms: ["global-extremum", "critical-point"]
    source_doc_page: 1
  - id: "1d"
    text: |
      Find the global extremum for $f(x)=\tfrac14 x^4-2x^2$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f'(x)=x^3-4x=x(x-2)(x+2).
      $$

      Critical points: $x=-2,0,2$. Values: $f(\pm2)=\tfrac14\cdot16-8=-4$ and $f(0)=0$. Since $f\to+\infty$ as $|x|\to\infty$, there is no maximum, and the two lowest points are $x=\pm2$ with the same value $-4$ ($f$ is even).

      **Global minimum at $x=2$ and at $x=-2$** (value $-4$); $x=0$ is only a local maximum.

      > [!success] Official answer
      > $x_{\min}=2$ and $x_{\min}=-2$.
    related_terms: ["global-extremum", "critical-point", "local-extremum"]
    source_doc_page: 1
  - id: "1e"
    text: |
      Find the global extremum for $f(x)=x^3-6x^2+9x-6$ on the interval $-1\le x\le 3$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      The interval is closed, so check critical points and both endpoints.

      $$
      f'(x)=3x^2-12x+9=3(x-1)(x-3)\;\Rightarrow\; x=1,\ x=3.
      $$

      | $x$ | $f(x)=x^3-6x^2+9x-6$ |
      |---|---|
      | $-1$ (endpoint) | $-1-6-9-6=-22$ |
      | $1$ (critical) | $1-6+9-6=-2$ |
      | $3$ (critical and endpoint) | $27-54+27-6=-6$ |

      **Global maximum at $x=1$** (value $-2$), **global minimum at $x=-1$** (value $-22$).

      > [!success] Official answer
      > $x_{\max}=1$, $x_{\min}=-1$.
    related_terms: ["global-extremum", "critical-point", "closed-interval-rule"]
    source_doc_page: 1
  - id: "1f"
    text: |
      Find the global extremum for $f(x)=2x^3+6x^2$ on the interval $(-1,2)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f'(x)=6x^2+12x=6x(x+2).
      $$

      The critical points are $x=0$ and $x=-2$; only $x=0$ lies inside $(-1,2)$. On $(-1,0)$, $f'<0$ so $f$ falls; on $(0,2)$, $f'>0$ so $f$ rises. Hence $f(0)=0$ is the lowest value. The endpoints are excluded: $f$ approaches $f(-1)=4$ and $f(2)=40$ but never reaches them, so there is no maximum.

      **Global minimum at $x=0$**, no maximum.

      > [!warning] Trap
      > On an open interval a value that is only approached cannot be an extremum. That is why (f) has a minimum but no maximum even though $40$ looks like the "top".

      > [!success] Official answer
      > $x_{\min}=0$.
    related_terms: ["global-extremum", "critical-point", "closed-interval-rule"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Question 2.** Find the **value** of the global extremum of $f(x)=(x-1)(x-5)^3+1$ in the interval $1\le x\le 7$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Product rule:

      $$
      f'(x)=(x-5)^3+3(x-1)(x-5)^2=(x-5)^2\big[(x-5)+3(x-1)\big]=(x-5)^2(4x-8).
      $$

      Critical points: $x=5$ and $x=2$. Evaluate those and the endpoints $x=1$, $x=7$:

      | $x$ | $f(x)$ |
      |---|---|
      | $1$ | $0+1=1$ |
      | $2$ | $(1)(-3)^3+1=-26$ |
      | $5$ | $0+1=1$ |
      | $7$ | $(6)(2)^3+1=49$ |

      **Maximum value $49$** (at $x=7$), **minimum value $-26$** (at $x=2$). The point $x=5$ is a flat inflection, not an extremum, because $(x-5)^2\ge0$ means $f'$ does not change sign there.

      > [!success] Official answer
      > $y_{\max}=49$, $y_{\min}=-26$.
    related_terms: ["global-extremum", "critical-point", "closed-interval-rule"]
    source_doc_page: 1
  - id: "2b"
    text: |
      Find the value of the global extremum of $f(x)=\sqrt{x-1}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      The domain is $x\ge1$ (the root needs a non-negative argument). $f'(x)=\dfrac{1}{2\sqrt{x-1}}>0$, so $f$ is increasing on its whole domain. The lowest value is at the left endpoint $x=1$; the function grows without bound, so there is no maximum.

      **Minimum value $0$** (at $x=1$).

      > [!success] Official answer
      > $y_{\min}=0$.
    related_terms: ["global-extremum", "closed-interval-rule"]
    source_doc_page: 1
  - id: "2c"
    text: |
      Find the value of the global extremum of $f(x)=24-2x-\dfrac8x$ in the interval $x>0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f'(x)=-2+\frac{8}{x^2}=0\;\Rightarrow\;x^2=4\;\Rightarrow\;x=2\quad(x>0).
      $$

      $f'>0$ for $0<x<2$ and $f'<0$ for $x>2$, so $x=2$ is a maximum. As $x\to0^+$, $f\to-\infty$; as $x\to\infty$, $f\to-\infty$; so there is no minimum.

      $$
      f(2)=24-4-4=16.
      $$

      **Maximum value $16$.**

      > [!success] Official answer
      > $y_{\max}=16$.
    related_terms: ["global-extremum", "critical-point"]
    source_doc_page: 1
  - id: "2d"
    text: |
      Find the value of the global extremum of $f(x)=5+3x-\dfrac{12}{x^2}$ in the interval $x>0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f'(x)=3+\frac{24}{x^3}>0\quad\text{for all }x>0.
      $$

      $f$ is strictly increasing, with $f\to-\infty$ as $x\to0^+$ and $f\to+\infty$ as $x\to\infty$. There is no critical point and nothing is attained at either end.

      **No global extremum.**

      > [!success] Official answer
      > None.
    related_terms: ["global-extremum", "critical-point"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Question 3.** Given $f(x)=\sqrt{|x|}$.

      (a) Write it as a compound function.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      "Compound function" here means a **piecewise** definition. By the definition of absolute value, $|x|=x$ for $x\ge0$ and $|x|=-x$ for $x<0$, so

      $$
      f(x)=\begin{cases}\sqrt{x}, & x\ge0,\\[2pt] \sqrt{-x}, & x<0.\end{cases}
      $$

      > [!success] Official answer
      > $f(x)=\sqrt{x}$ for $x\ge 0$ and $f(x)=\sqrt{-x}$ for $x<0$.
    related_terms: ["piecewise-compound-function"]
    source_doc_page: 1
  - id: "3b"
    text: |
      (b) Find the global extremum of $f(x)=\sqrt{|x|}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Each piece is $\ge0$ and equals $0$ only at $x=0$; both pieces grow without bound as $|x|\to\infty$. So the global minimum is at $x=0$ with value $0$, and there is no maximum. As in Q1a, the minimum is a cusp where $f'$ does not exist, so you find it by looking at the piecewise form rather than solving $f'=0$.

      > [!success] Official answer
      > $x_{\min}=0$.
    related_terms: ["global-extremum", "piecewise-compound-function", "cusp", "critical-point"]
    source_doc_page: 1
  - id: "4"
    text: |
      **Question 4. The cheapest yard.** You must bound a rectangular yard so that its area is 800 square meters. Three of the sides are to be fenced with a regular fence, which costs \$6 per meter. For the fourth side you need a taller fence, which costs \$18 per meter. Find the measures of the yard (length and width) for which the costs would be minimal.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Let $x$ be the length of the tall-fenced side. Its opposite side is also $x$ (regular fence), and the other two sides are $y$ each (regular fence). The area constraint gives

      $$
      xy=800\;\Rightarrow\;y=\frac{800}{x}.
      $$

      Cost: the tall side costs $18x$, the other three sides cost $6(x+2y)$:

      $$
      C(x)=18x+6x+12y=24x+\frac{9600}{x},\qquad x>0.
      $$

      Set the derivative to zero:

      $$
      C'(x)=24-\frac{9600}{x^2}=0\;\Rightarrow\;x^2=400\;\Rightarrow\;x=20,\qquad y=\frac{800}{20}=40.
      $$

      $C'<0$ for $x<20$ and $C'>0$ for $x>20$, and $C\to\infty$ at both ends of $(0,\infty)$, so $x=20$ is the global minimum.

      ![](/images/maths-for-economists-b/ps01-q4-fence-cost.png)

      *The cost curve $C(x)=24x+9600/x$ has a single dip at $x=20$.*

      **The tall-fenced side is 20 m and the two adjacent sides are 40 m: a $40\times 20$ yard.**

      > [!tip] Intuition
      > Doubling the tall side halves the other sides' length (area fixed), but the tall side is 3 times as expensive per metre as the regular ones. The best balance puts the expensive fence on a short side.

      > [!success] Official answer
      > $40\times 20$ meters.
    related_terms: ["optimization-problem", "global-extremum", "critical-point", "first-order-conditions"]
    source_doc_page: 1
---

*Related: [[Lec_01-Global Extrema, Optimization and Summation]]*
