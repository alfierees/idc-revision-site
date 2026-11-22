---
title: "PS3"
subject: maths-for-economists-b
source_doc: /papers/maths-for-economists-b/ps-3.pdf
tags:
  - maths-for-economists-b
  - derivative
  - exponential
  - logarithm
  - lhopital
  - limits
  - asymptote
  - curve-sketching
  - average-cost
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Question 1.** Find the derivative of $f(x)=e^{x^3-3x^2+1}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Tools used throughout this set:

      $$
      \big(e^{g}\big)'=g'\,e^{g},\qquad (\ln g)'=\frac{g'}{g},\qquad (a^{g})'=g'\,a^{g}\ln a,\qquad (\log_a x)'=\frac1{x\ln a}.
      $$

      Chain rule with inner function $x^3-3x^2+1$: $f'=(3x^2-6x)\,e^{x^3-3x^2+1}$.

      > [!success] Official answer
      > $(3x^2-6x)e^{x^3-3x^2+1}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Find the derivative of $f(x)=\dfrac{e^x}{x^3}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Quotient rule:

      $$
      f'=\frac{e^x\cdot x^3-e^x\cdot3x^2}{x^6}=\frac{e^x x^2(x-3)}{x^6}=\frac{e^x(x-3)}{x^4}.
      $$

      > [!success] Official answer
      > $\dfrac{e^x(x-3)}{x^4}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Find the derivative of $f(x)=(x+1)^3e^x$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Product rule:

      $$
      f'=3(x+1)^2e^x+(x+1)^3e^x=(x+1)^2e^x\,[3+(x+1)]=(x+1)^2e^x(x+4).
      $$

      > [!success] Official answer
      > $(x+1)^2e^x(x+4)$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "1d"
    text: |
      Find the derivative of $f(x)=7^{x^2}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Exponential with base 7 and inner function $x^2$: $f'=2x\cdot7^{x^2}\ln7$.

      > [!success] Official answer
      > $2x\cdot7^{x^2}\ln7$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Question 2.** Find the derivative of $\ln(5x)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $\ln(5x)=\ln5+\ln x$, so $f'=\dfrac1x$. (Chain rule gives $\dfrac{5}{5x}$, the same.)

      > [!tip] Intuition
      > Simplify before differentiating when you can: (a) and (f) become one-line derivatives once you split the log or merge the exponent.

      > [!success] Official answer
      > $\dfrac1x$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions", "logarithm-rules"]
    source_doc_page: 1
  - id: "2b"
    text: |
      Find the derivative of $\ln(1-x^2)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $f'=\dfrac{-2x}{1-x^2}$.

      > [!success] Official answer
      > $\dfrac{-2x}{1-x^2}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "2c"
    text: |
      Find the derivative of $\ln^3x$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $\ln^3x=(\ln x)^3$: $f'=3\ln^2x\cdot\dfrac1x$.

      > [!success] Official answer
      > $\dfrac{3\ln^2x}{x}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "2d"
    text: |
      Find the derivative of $\sqrt[3]{1+\ln x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Write $(1+\ln x)^{1/3}$: $f'=\tfrac13(1+\ln x)^{-2/3}\cdot\dfrac1x=\dfrac{1}{3x\sqrt[3]{(1+\ln x)^2}}$.

      > [!success] Official answer
      > $\dfrac{1}{3x\sqrt[3]{(1+\ln x)^2}}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "2e"
    text: |
      Find the derivative of $\dfrac{x}{\ln x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Quotient rule:

      $$
      f'=\frac{1\cdot\ln x-x\cdot\frac1x}{\ln^2x}=\frac{\ln x-1}{\ln^2x}.
      $$

      > [!success] Official answer
      > $\dfrac{\ln x-1}{\ln^2x}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "2f"
    text: |
      Find the derivative of $e^{2+\ln x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Simplify first: $e^{2+\ln x}=e^2\cdot e^{\ln x}=e^2x$, so $f'=e^2$.

      > [!success] Official answer
      > $e^2$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions", "logarithm-rules"]
    source_doc_page: 1
  - id: "2g"
    text: |
      Find the derivative of $\ln^2(3x)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $f'=2\ln(3x)\cdot\dfrac{3}{3x}=\dfrac{2\ln(3x)}{x}$.

      > [!success] Official answer
      > $\dfrac{2\ln(3x)}{x}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "2h"
    text: |
      Find the derivative of $\log_4(2x+1)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $f'=\dfrac{1}{(2x+1)\ln4}\cdot2=\dfrac{2}{(2x+1)\ln4}$.

      > [!success] Official answer
      > $\dfrac{2}{(2x+1)\ln4}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions", "logarithm"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Question 3.** Find the domain and the derivative of $f(x)=\sqrt{e^x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $\sqrt{e^x}=e^{x/2}$ and $e^x>0$ always, so the domain is all $x$; $f'=\tfrac12e^{x/2}$.

      > [!success] Official answer
      > All $x$, $f'=\tfrac12e^{x/2}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "3b"
    text: |
      Find the domain and the derivative of $f(x)=\ln(8x-24)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Need $8x-24>0\Rightarrow x>3$. $f'=\dfrac{8}{8x-24}=\dfrac1{x-3}$.

      > [!success] Official answer
      > $x>3$, $f'=\dfrac1{x-3}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions", "logarithm"]
    source_doc_page: 1
  - id: "3c"
    text: |
      Find the domain and the derivative of $y=\ln\dfrac1x$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Need $\dfrac1x>0\Rightarrow x>0$. $\ln\dfrac1x=-\ln x$, so $y'=-\dfrac1x$.

      > [!success] Official answer
      > $x>0$, $f'=-\dfrac1x$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions", "logarithm-rules"]
    source_doc_page: 1
  - id: "3d"
    text: |
      Find the domain and the derivative of $y=\dfrac{1}{\ln^3x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Need $x>0$ for $\ln x$ and $\ln x\ne0$, i.e. $x\ne1$. Then $y=(\ln x)^{-3}$ gives

      $$
      y'=-3(\ln x)^{-4}\cdot\frac1x=\frac{-3}{x\ln^4x}.
      $$

      > [!success] Official answer
      > $x>0,\ x\neq1$, $f'=\dfrac{-3}{x\ln^4x}$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions", "logarithm", "vertical-asymptote"]
    source_doc_page: 1
  - id: "3e"
    text: |
      Find the domain and the derivative of $y=\ln\big(3e^{-5x}\big)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $3e^{-5x}>0$ always, so all $x$. $\ln(3e^{-5x})=\ln3-5x$, so $y'=-5$.

      > [!success] Official answer
      > All $x$, $f'=-5$.
    related_terms: ["derivative-of-exponential-and-logarithmic-functions", "logarithm-rules"]
    source_doc_page: 1
  - id: "4a"
    text: |
      **Question 4.** Find the global extremum on the interval $(0,\infty)$ for $f(x)=4x-x\ln x$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Product rule on $x\ln x$:

      $$
      f'(x)=4-\left(\ln x+x\cdot\frac1x\right)=3-\ln x=0\;\Rightarrow\;x=e^3.
      $$

      $f'>0$ for $x<e^3$ and $f'<0$ for $x>e^3$, so it is a maximum, and $f(e^3)=4e^3-e^3\cdot3=e^3$.

      > [!success] Official answer
      > $(e^3,e^3)_{\max}$.
    related_terms: ["global-extremum", "critical-point", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "4b"
    text: |
      Find the global extremum on the interval $(0,\infty)$ for $f(x)=\dfrac{e^x}{x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f'(x)=\frac{e^x x-e^x}{x^2}=\frac{e^x(x-1)}{x^2}=0\;\Rightarrow\;x=1.
      $$

      $f'<0$ for $x<1$ and $f'>0$ for $x>1$: a minimum, $f(1)=e$.

      > [!success] Official answer
      > $(1,e)_{\min}$.
    related_terms: ["global-extremum", "critical-point", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "4c"
    text: |
      Find the global extremum on the interval $(0,\infty)$ for $f(x)=\dfrac{1+2\ln x}{x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f'(x)=\frac{\frac2x\cdot x-(1+2\ln x)}{x^2}=\frac{1-2\ln x}{x^2}=0\;\Rightarrow\;\ln x=\tfrac12,\ x=\sqrt e.
      $$

      $f'>0$ before and $f'<0$ after: a maximum, $f(\sqrt e)=\dfrac{1+1}{\sqrt e}=\dfrac{2}{\sqrt e}$.

      > [!success] Official answer
      > $\left(\sqrt e,\dfrac{2}{\sqrt e}\right)_{\max}$.
    related_terms: ["global-extremum", "critical-point", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "5a"
    text: |
      **Question 5.** Find the limit $\displaystyle\lim_{x\to\infty}\frac{\ln^2x}{x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Form $\frac\infty\infty$. L'Hopital: $\dfrac{2\ln x\cdot\frac1x}{1}=\dfrac{2\ln x}{x}$, still $\frac\infty\infty$; again: $\dfrac{2/x}{1}\to0$. **Limit $0$.**

      > [!success] Official answer
      > $0$.
    related_terms: ["lhopitals-rule", "indeterminate-form"]
    source_doc_page: 1
  - id: "5b"
    text: |
      Find the limit $\displaystyle\lim_{x\to\infty}\frac{\ln x}{e^x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Form $\frac\infty\infty$. L'Hopital: $\dfrac{1/x}{e^x}=\dfrac1{xe^x}\to0$. **Limit $0$.**

      > [!success] Official answer
      > $0$.
    related_terms: ["lhopitals-rule", "indeterminate-form"]
    source_doc_page: 1
  - id: "5c"
    text: |
      Find the limit $\displaystyle\lim_{x\to0}\frac{e^x-x-1}{x^2}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Form $\frac00$. L'Hopital: $\dfrac{e^x-1}{2x}$, still $\frac00$; again: $\dfrac{e^x}{2}\to\tfrac12$. **Limit $\tfrac12$.**

      > [!success] Official answer
      > $\tfrac12$.
    related_terms: ["lhopitals-rule", "indeterminate-form"]
    source_doc_page: 1
  - id: "5d"
    text: |
      Find the limit $\displaystyle\lim_{x\to0^+}\frac{e^{2x}-2x-1}{x\cdot\sqrt x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Form $\frac00$ (denominator $x^{3/2}$). L'Hopital: $\dfrac{2e^{2x}-2}{\tfrac32x^{1/2}}$, still $\frac00$; again: $\dfrac{4e^{2x}}{\tfrac34x^{-1/2}}=\dfrac{16}{3}\,x^{1/2}e^{2x}\to0$. **Limit $0$.**

      > [!success] Official answer
      > $0$.
    related_terms: ["lhopitals-rule", "indeterminate-form"]
    source_doc_page: 1
  - id: "5e"
    text: |
      Find the limit $\displaystyle\lim_{x\to1}\frac{\ln x}{x-1}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Form $\frac00$. L'Hopital: $\dfrac{1/x}{1}\to1$. **Limit $1$.**

      > [!success] Official answer
      > $1$.
    related_terms: ["lhopitals-rule", "indeterminate-form"]
    source_doc_page: 1
  - id: "5f"
    text: |
      Find the limit $\displaystyle\lim_{x\to0^+}x\ln x$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Form $0\cdot(-\infty)$. Rewrite as $\dfrac{\ln x}{1/x}$ (form $\frac{-\infty}{\infty}$). L'Hopital: $\dfrac{1/x}{-1/x^2}=-x\to0$. **Limit $0$.**

      > [!success] Official answer
      > $0$.
    related_terms: ["lhopitals-rule", "indeterminate-form"]
    source_doc_page: 1
  - id: "5g"
    text: |
      Find the limit $\displaystyle\lim_{x\to0^+}x^{\sqrt x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Form $0^0$. Write $x^{\sqrt x}=e^{\sqrt x\ln x}$. Then $\sqrt x\ln x=\dfrac{\ln x}{x^{-1/2}}$; L'Hopital: $\dfrac{1/x}{-\tfrac12x^{-3/2}}=-2\sqrt x\to0$. So the limit is $e^0=1$. **Limit $1$.**

      > [!warning] Trap
      > $0^0$ is an [[Indeterminate Form]]: it is not automatically 1. Take $\ln$ (or rewrite as $e^{\dots}$) to turn it into a product, then into a fraction.

      > [!success] Official answer
      > $1$.
    related_terms: ["lhopitals-rule", "indeterminate-form", "logarithmic-differentiation"]
    source_doc_page: 1
  - id: "6a"
    text: |
      **Question 6.** Investigate the following function and draw its graph: $f(x)=x^2\cdot e^x$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **Asymptote.** As $x\to-\infty$, $x^2e^x\to0$ (the exponential beats the polynomial), so $y=0$ is a horizontal asymptote on the left. As $x\to+\infty$, $f\to\infty$.

      **Extrema.** $f'=2xe^x+x^2e^x=e^x\,x(x+2)=0\Rightarrow x=0,\,-2$. Signs: $f'>0$ for $x<-2$, $f'<0$ on $(-2,0)$, $f'>0$ for $x>0$. So $x=-2$ is a maximum with $f(-2)=\dfrac4{e^2}$, and $x=0$ is a minimum with $f(0)=0$.

      **Inflection points.** $f''=e^x\,(x^2+4x+2)=0\Rightarrow x=-2\pm\sqrt2$, i.e. $x\approx-0.586$ and $x\approx-3.414$.

      ![](/images/maths-for-economists-b/ps03-q6a-x2-exp-x.png)

      *The curve rises from the asymptote $y=0$ to a bump at $x=-2$, dips to touch zero at the origin, then shoots up. The squares are the two inflection points.*

      > [!success] Official answer
      > Domain: all $x$. Asymptote: $y=0$. Points: $(0,0)_{\min}$, $\left(-2,\tfrac4{e^2}\right)_{\max}$. Inflection: $x_1=-0.586$, $x_2=-3.414$.

      > [!note] Source
      > The two printed graphs are redrawn here from the printed key points.
    related_terms: ["horizontal-asymptote", "local-extremum", "critical-point", "second-derivative-test", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "6b"
    text: |
      Investigate the following function and draw its graph: $f(x)=x^2\cdot\ln x$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **Domain.** $\ln x$ needs $x>0$. As $x\to0^+$, $x^2\ln x\to0$ (Q5, same idea as $x\ln x\to0$), so the graph heads to $(0,0)$ but that point is not on the curve (a removable gap).

      **Extremum.** $f'=2x\ln x+x=x(2\ln x+1)=0\Rightarrow\ln x=-\tfrac12,\ x=\dfrac1{\sqrt e}$. $f'<0$ before and $f'>0$ after: a minimum, with

      $$
      f\!\left(\tfrac1{\sqrt e}\right)=\frac1e\cdot\left(-\tfrac12\right)=-\frac1{2e}.
      $$

      **Inflection.** $f''=2\ln x+2+1=2\ln x+3=0\Rightarrow x=e^{-3/2}=\dfrac1{e\sqrt e}$.

      **Axes.** $f(x)=0$ for $x>0$ only when $\ln x=0$, so $(1,0)$.

      ![](/images/maths-for-economists-b/ps03-q6b-x2-ln-x.png)

      *Starting at the removed origin, the curve dips to its minimum at $x=1/\sqrt e$, crosses the axis at $x=1$ and climbs.*

      > [!success] Official answer
      > Domain: $x>0$. Discontinuity point: $(0,0)$. Point: $\left(\tfrac1{\sqrt e},-\tfrac1{2e}\right)_{\min}$. Inflection: $x=\tfrac1{e\sqrt e}$. Axes intersection: $(1,0)$.
    related_terms: ["local-extremum", "critical-point", "second-derivative-test", "lhopitals-rule", "derivative-of-exponential-and-logarithmic-functions", "vertical-asymptote"]
    source_doc_page: 1
  - id: "7"
    text: |
      **Question 7. Minimal average cost.** The cost of producing $x$ units of a product is $C(x)=600+100x-100\ln x$ dollars. Find the minimal average cost per unit.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Average cost:

      $$
      A(x)=\frac{C(x)}{x}=\frac{600}{x}+100-\frac{100\ln x}{x},\qquad x>0.
      $$

      $$
      A'(x)=-\frac{600}{x^2}-\frac{100(1-\ln x)}{x^2}=\frac{100\ln x-700}{x^2}=0\;\Rightarrow\;\ln x=7,\ x=e^7\approx1097.
      $$

      $A'<0$ before $e^7$ and $A'>0$ after, so it is a minimum. Substituting $\ln x=7$:

      $$
      A(e^7)=\frac{600}{e^7}+100-\frac{700}{e^7}=100-\frac{100}{e^7}\approx100-0.09=99.9.
      $$

      **Minimal average cost about \$99.9 per unit**, reached at about 1,097 units.

      > [!tip] Intuition
      > The fixed cost 600 is spread over more units as $x$ grows, which pulls average cost down; the $-100\ln x$ term is a volume discount. The floor is just under the \$100 marginal-cost level.

      > [!success] Official answer
      > \$99.9 per unit.
    related_terms: ["optimization-problem", "global-extremum", "critical-point", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
---

*Related: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_02-Logarithmic Functions and Inverse Functions]], [[Lec_01-Global Extrema, Optimization and Summation]]*
