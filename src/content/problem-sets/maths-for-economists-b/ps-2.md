---
title: "PS2"
subject: maths-for-economists-b
source_doc: /papers/maths-for-economists-b/ps-2.pdf
tags:
  - maths-for-economists-b
  - global-extremum
  - optimization
  - inverse-function
  - logarithm
  - profit-maximisation
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Question 1.** The function $y=x^3-6x^2+9x$ has a global minimum on the interval $[a,a+4]$ at two different points: one of which is internal and one of which is at the interval's left end point.

      (a) Find the value of "a".
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      y'=3x^2-12x+9=3(x-1)(x-3).
      $$

      So $x=1$ is a local maximum ($y=4$) and $x=3$ is a local minimum ($y=0$). On any interval the internal minimum can only be at $x=3$, with value $0$. The left endpoint must tie that value, so $y(a)=0$. Solving $x^3-6x^2+9x=x(x-3)^2=0$ gives $x=0$ or $x=3$.

      - $a=3$ would put $x=3$ at the left endpoint, not at an internal point, so it fails the "one internal, one endpoint" condition.
      - $a=0$: the interval is $[0,4]\ni3$, so $x=3$ is internal.

      **$a=0$.**

      > [!success] Official answer
      > $a=0$.
    related_terms: ["global-extremum", "local-extremum", "critical-point", "closed-interval-rule"]
    source_doc_page: 1
  - id: "1b"
    text: |
      (b) Show that the global maximum of $y=x^3-6x^2+9x$ is also obtained at two different points on that interval.
    solution: "TODO"
    related_terms: ["global-extremum", "closed-interval-rule"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Question 2. Car rental.** A car rental company will rent 200 cars a day, if the daily rent per car is \$30. Research shows that if the daily rent is higher than \$30, the number of cars rented will decrease as follows: for every additional \$1 charged per day, the number of rented cars drops by 5.

      (a) Write the daily income, as a function of the daily rent, $x$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      At rent $x\ge30$, the extra dollars charged are $x-30$, so the cars rented are $200-5(x-30)=350-5x$. Income is price times quantity:

      $$
      R(x)=x\,(350-5x)=-5x^2+350x.
      $$

      > [!success] Official answer
      > $R(x)=-5x^2+350x$.
    related_terms: ["optimization-problem"]
    source_doc_page: 1
  - id: "2b"
    text: |
      (b) What is the domain of your function?
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      The model only describes rents of at least \$30, and the number of cars cannot be negative: $350-5x\ge0\Rightarrow x\le70$. Domain: $[30,70]$.

      > [!success] Official answer
      > $[30,70]$.
    related_terms: ["optimization-problem"]
    source_doc_page: 1
  - id: "2c"
    text: |
      (c) For which choice of daily rent is the income maximized? What is the maximized income?
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      R'(x)=-10x+350=0\;\Rightarrow\;x=35.
      $$

      Check endpoints: $R(30)=6000$, $R(35)=6125$, $R(70)=0$. The maximum is at $x=35$:

      $$
      R(35)=-5(1225)+350(35)=-6125+12250=6125.
      $$

      **Rent \$35 per day, income \$6,125.**

      ![](/images/maths-for-economists-b/ps02-q2-rental-income.png)

      *Income is a downward parabola on $[30,70]$; its peak is at rent \$35.*

      > [!success] Official answer
      > Daily rent \$35, income \$6,125.
    related_terms: ["optimization-problem", "global-extremum", "critical-point", "closed-interval-rule"]
    source_doc_page: 1
  - id: "2d"
    text: |
      (d) Now write the daily income as a function of $x$, when $x$ is the number of dollars charged over the original \$30. Answer parts b and c again, and check that you get the same answers.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Let $t=x-30$ be the dollars charged over \$30. The rent is $30+t$ and the cars rented are $200-5t$:

      $$
      R(t)=(30+t)(200-5t)=6000+200t-150t-5t^2=-5t^2+50t+6000.
      $$

      Domain: $t\ge0$ and $200-5t\ge0$, so $t\in[0,40]$. Then $R'(t)=-10t+50=0$ gives $t=5$, which is rent $30+5=35$, and $R(5)=-125+250+6000=6125$. Same answers as (b) and (c): the choice of variable only shifts the axis.

      > [!success] Official answer
      > $R(x)=-5x^2+50x+6000$ on $[0,40]$.
    related_terms: ["optimization-problem", "global-extremum", "critical-point"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Question 3.** (a) Find the intercept point between the function $f(x)=\tfrac15x+2$ and its inverse function.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      A function and its inverse are mirror images in the line $y=x$, so when they cross, they cross on that line. Solve $f(x)=x$:

      $$
      \tfrac15x+2=x\;\Rightarrow\;2=\tfrac45x\;\Rightarrow\;x=2.5.
      $$

      The point is $(2.5,\,2.5)$. Check with the inverse $f^{-1}(x)=5x-10$: $5(2.5)-10=2.5$.

      > [!tip] Intuition
      > Swapping $x$ and $y$ reflects a graph in $y=x$. Points already on that line do not move, so they are shared by the graph and its reflection.

      > [!success] Official answer
      > $(2.5,\,2.5)$.
    related_terms: ["inverse-function"]
    source_doc_page: 1
  - id: "3b"
    text: |
      (b) Give two examples for a function which is the inverse of itself.
    solution: "TODO"
    related_terms: ["inverse-function"]
    source_doc_page: 1
  - id: "4a"
    text: |
      **Question 4.** Given $y=\log_2(x-2)$.

      (a) Write the equation of its inverse function in its exponential form.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Write the log in exponential form: $y=\log_2(x-2)\iff 2^y=x-2\iff x=2^y+2$. Swap the names of the variables to read off the inverse:

      $$
      y=2^x+2.
      $$

      > [!success] Official answer
      > $y=2^x+2$.
    related_terms: ["inverse-function", "logarithm"]
    source_doc_page: 1
  - id: "4b"
    text: |
      (b) Draw the graph of the inverse function.
    solution: "TODO"
    related_terms: ["inverse-function", "logarithm"]
    source_doc_page: 1
  - id: "4c"
    text: |
      (c) Use the graph from (b) to sketch the graph of the original function.
    solution: "TODO"
    related_terms: ["inverse-function", "logarithm"]
    source_doc_page: 1
  - id: "5a"
    text: |
      **Question 5. Birthday cards.** A company makes birthday cards. The cost of making $x$ cards a week ($0\le x\le8000$) is given by $C(x)=5000+2x$ dollars. The price-demand equation is $p=10-\dfrac{x}{1000}$, where $p$ is the price at which each card is sold.

      (a) Find the maximal profit.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Revenue is $x\cdot p=10x-\dfrac{x^2}{1000}$. Profit is revenue minus cost:

      $$
      P(x)=10x-\frac{x^2}{1000}-5000-2x=8x-\frac{x^2}{1000}-5000.
      $$

      $$
      P'(x)=8-\frac{x}{500}=0\;\Rightarrow\;x=4000.
      $$

      $P''=-\tfrac1{500}<0$, so this is a maximum, and $4000$ lies in $[0,8000]$. Then

      $$
      P(4000)=32000-16000-5000=11000.
      $$

      **Maximal profit \$11,000.**

      > [!note] A typo on the sheet
      > The printed answer line for this question is labelled "5. 4. a." The leading "4." is a stray label; it is the answer to Q5.

      > [!success] Official answer
      > \$11,000.
    related_terms: ["optimization-problem", "global-extremum", "critical-point", "second-derivative-test", "marginal-profit"]
    source_doc_page: 1
  - id: "5b"
    text: |
      (b) Find the demand and price at which the profit is maximized.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      From the working in (a), profit is maximal at $x=4000$ cards, and the price is

      $$
      p=10-\frac{4000}{1000}=6.
      $$

      **Demand $x=4000$ cards, price \$6.**

      > [!success] Official answer
      > $x=4000$, $p=\$6$.
    related_terms: ["optimization-problem", "critical-point"]
    source_doc_page: 1
  - id: "5c"
    text: |
      (c) The government introduced a new birthday card tax: the company now has to pay an extra \$2 for every card sold, as tax. Answer parts (a) and (b) for this case.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      The tax adds \$2 to the cost of every card, so cost per card rises from 2 to 4:

      $$
      P(x)=10x-\frac{x^2}{1000}-5000-4x=6x-\frac{x^2}{1000}-5000.
      $$

      $$
      P'(x)=6-\frac{x}{500}=0\;\Rightarrow\;x=3000,
      $$

      $$
      P(3000)=18000-9000-5000=4000,\qquad p=10-3=7.
      $$

      **Maximal profit \$4,000, at $x=3000$ cards and price \$7.**

      ![](/images/maths-for-economists-b/ps02-q5-profit-with-tax.png)

      *The tax shifts the whole profit curve down and moves its peak left, from 4000 cards to 3000.*

      > [!tip] Intuition
      > The price rises by \$1, only half of the \$2 tax: the firm absorbs the rest. Fewer cards are sold, and profit falls from \$11,000 to \$4,000.

      > [!success] Official answer
      > \$4000, $x=3{,}000$, $p=\$7$.
    related_terms: ["optimization-problem", "critical-point", "marginal-profit", "second-derivative-test"]
    source_doc_page: 1
  - id: "6a"
    text: |
      **Question 6. Solving logarithmic equations (review).** Solve $\log(x-4)-\log(3x-5)=-1$.

      > [!note] Assumption
      > $\log$ without a base is read as **base 10**; the printed answers to (a) and (b) only work with base 10.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Domain: $x>4$ (both arguments positive). Combine:

      $$
      \log\frac{x-4}{3x-5}=-1\;\Rightarrow\;\frac{x-4}{3x-5}=\frac1{10}\;\Rightarrow\;10x-40=3x-5\;\Rightarrow\;x=5.
      $$

      $5>4$, so it is valid.

      > [!success] Official answer
      > $x=5$.
    related_terms: ["logarithm", "logarithm-rules"]
    source_doc_page: 1
  - id: "6b"
    text: |
      Solve $\log(x-1)+\log(x+2)=1$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Domain: $x>1$. Combine:

      $$
      \log\big[(x-1)(x+2)\big]=1\;\Rightarrow\;x^2+x-2=10\;\Rightarrow\;x^2+x-12=0\;\Rightarrow\;(x+4)(x-3)=0.
      $$

      $x=-4$ is outside the domain, so $x=3$.

      > [!warning] Trap
      > Always check the solution against the domain. In (b) $x=-4$ is rejected; in (i) $x=1$ is rejected.

      > [!success] Official answer
      > $x=3$.
    related_terms: ["logarithm", "logarithm-rules"]
    source_doc_page: 1
  - id: "6c"
    text: |
      Solve $\ln x+1=0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $\ln x=-1\Rightarrow x=e^{-1}=\tfrac1e$.

      > [!success] Official answer
      > $x=\tfrac1e$.
    related_terms: ["logarithm"]
    source_doc_page: 1
  - id: "6d"
    text: |
      Solve $\ln(x+1)=0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $x+1=e^0=1\Rightarrow x=0$ (domain $x>-1$, so it is valid).

      > [!success] Official answer
      > $x=0$.
    related_terms: ["logarithm"]
    source_doc_page: 1
  - id: "6e"
    text: |
      Solve $\ln x^2-2=0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $\ln(x^2)=2\Rightarrow x^2=e^2\Rightarrow x=\pm e$. Both are valid because $x^2>0$ for $x\neq0$.

      > [!warning] Trap
      > $\ln(x^2)$ accepts negative $x$, unlike $(\ln x)^2$, which is why (e) and (i) have negative roots.

      > [!success] Official answer
      > $x=\pm e$.
    related_terms: ["logarithm", "logarithm-rules"]
    source_doc_page: 1
  - id: "6f"
    text: |
      Solve $x\ln x-2\ln x=0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Factor: $\ln x\,(x-2)=0$. So $\ln x=0$ ($x=1$) or $x=2$.

      > [!success] Official answer
      > $x=1$, $x=2$.
    related_terms: ["logarithm"]
    source_doc_page: 1
  - id: "6g"
    text: |
      Solve $(\ln x)^2-1=0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $(\ln x)^2=1\Rightarrow\ln x=\pm1\Rightarrow x=e$ or $x=\tfrac1e$.

      > [!success] Official answer
      > $x=e$, $x=\tfrac1e$.
    related_terms: ["logarithm"]
    source_doc_page: 1
  - id: "6h"
    text: |
      Solve $(\ln x)^2-\ln x-6=0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Let $u=\ln x$: $u^2-u-6=(u-3)(u+2)=0$, so $u=3$ or $u=-2$, giving $x=e^3$ or $x=e^{-2}=\tfrac1{e^2}$.

      > [!success] Official answer
      > $x=e^3$, $x=\tfrac1{e^2}$.
    related_terms: ["logarithm"]
    source_doc_page: 1
  - id: "6i"
    text: |
      Solve $\dfrac{\ln x^2}{x-1}=0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      A fraction is zero when its numerator is zero and its denominator is not. $\ln x^2=0\Rightarrow x^2=1\Rightarrow x=\pm1$. But $x=1$ makes the denominator $0$, so only $x=-1$ remains.

      > [!warning] Trap
      > Always check the solution against the domain: here $x=1$ is rejected. Also note $\ln(x^2)$ accepts negative $x$, which is why (e) and (i) have negative roots.

      > [!success] Official answer
      > $x=-1$.
    related_terms: ["logarithm"]
    source_doc_page: 1
  - id: "7a"
    text: |
      **Question 7. Logarithms without a calculator.** Calculate without using the calculator: (a) $\sqrt2^{\,\log_2 25}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $\sqrt2=2^{1/2}$, so $\sqrt2^{\,\log_2 25}=2^{\frac12\log_2 25}=\left(2^{\log_2 25}\right)^{1/2}=25^{1/2}=5$.

      > [!success] Official answer
      > $5$.
    related_terms: ["logarithm", "logarithm-rules"]
    source_doc_page: 2
  - id: "7b"
    text: |
      Calculate without using the calculator: (b) $\ln\dfrac{1}{\sqrt e}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $\ln e^{-1/2}=-\tfrac12$.

      > [!success] Official answer
      > $-\tfrac12$.
    related_terms: ["logarithm", "logarithm-rules"]
    source_doc_page: 2
  - id: "7c"
    text: |
      Calculate without using the calculator: (c) $\left(\dfrac1{\sqrt e}\right)^{\ln 25}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $\dfrac1{\sqrt e}=e^{-1/2}$, so $\left(e^{-1/2}\right)^{\ln25}=\left(e^{\ln25}\right)^{-1/2}=25^{-1/2}=\tfrac15$.

      > [!success] Official answer
      > $\tfrac15$.
    related_terms: ["logarithm", "logarithm-rules"]
    source_doc_page: 2
  - id: "7d"
    text: |
      Calculate without using the calculator: (d) $e^{1+\ln 2}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $e^{1+\ln2}=e^1\cdot e^{\ln2}=2e$.

      > [!success] Official answer
      > $2e$.
    related_terms: ["logarithm", "logarithm-rules"]
    source_doc_page: 2
---

*Related: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_02-Logarithmic Functions and Inverse Functions]]*
