---
title: "Lec 11 - Joint Distributions, Correlation and Linear Regression"
semester: 2
year: 1
course: "Statistics B"
lecture: 11
tags:
  - statistics-b
  - joint-distribution
  - marginal-distribution
  - conditional-distribution
  - conditional-expected-value
  - independence
  - covariance
  - correlation
  - pearsons-r
  - prediction
  - linear-regression
subject: statistics-b
in_scope: true
---

# Lec 11: Joint Distributions, Correlation and Linear Regression

> Part of: [[Statistics B]]
> Key concepts: [[Joint Distribution]], [[Marginal Distribution]], [[Conditional Distribution]], [[Conditional Expected Value]], [[Independence of Random Variables]], [[Covariance]], [[Correlation Coefficient]], [[Pearson's r]], [[Prediction]], [[Linear Regression]], [[Least Squares]]

> [!info] Source
> Class 11 (205 slides, animation builds collapsed). Almost every formula and table on the slides is an image, so they were read from those images. The slides on independence (slide 51) and the intuition behind the slope (slides 175 to 191) carry little or no readable text; those parts are marked as reconstructed. Slide 5 is a recap of point estimation: see [[Lec_01-Point Estimation and Sampling Distributions]] and [[Lec_03-Maximum Likelihood Estimation]].

## 1. Where this lecture sits

**Recap (slides 5 to 6).** Point estimation: a population has an unknown parameter, we draw a sample, apply an [[Estimator]] and get a parameter estimate. So far every observation had **one** value.

**Today (slide 7).** Point estimation for **more than one random variable**: the parameters now belong to a **joint distribution**, and each observation in the sample has a value for **each** variable. The plan: reminder on joint distributions, then [[Pearson's r]] (point estimation of the correlation), then [[Linear Regression]] (prediction).

## 2. Joint, marginal and conditional distributions

### 2.1 Joint distribution table

The [[Joint Distribution]] of $X$ and $Y$ lists the probability of every pair of values. With $X \in \{1,2,3\}$ and $Y \in \{1,2,3\}$ the table is

| $X \backslash Y$ | $Y=1$ | $Y=2$ | $Y=3$ | $p(X=k)$ |
| --- | --- | --- | --- | --- |
| $X=1$ | $p(X=1,Y=1)$ | $p(X=1,Y=2)$ | $p(X=1,Y=3)$ | $p(X=1)$ |
| $X=2$ | $p(X=2,Y=1)$ | $p(X=2,Y=2)$ | $p(X=2,Y=3)$ | $p(X=2)$ |
| $X=3$ | $p(X=3,Y=1)$ | $p(X=3,Y=2)$ | $p(X=3,Y=3)$ | $p(X=3)$ |
| $p(Y=l)$ | | | | |

### 2.2 Marginal distributions

The [[Marginal Distribution]] of $X$ is all possible values of $X$ and their probabilities **regardless of $Y$**. Sum each row (the right-hand column). The marginal of $Y$ is the same idea summing each column (the bottom row).

$$
p(X=k)=\sum_{l} p(X=k,\,Y=l)
$$

### 2.3 Conditional distributions

The [[Conditional Distribution]] of $Y$ given $X=k$ is all possible values of $Y$ and their probabilities **for a given value of $X$**. Take the row $X=k$ and rescale it by the row total, so it sums to 1:

$$
p(Y=l \mid X=k)=\frac{p(X=k,\,Y=l)}{p(X=k)}
$$

On slides 16 to 18 this is built cell by cell for $X=2$: each entry is $\dfrac{p(X=2,\,Y=l)}{p(X=2)}$.

### 2.4 Running example: the four-sided die

Roll a fair four-sided die. Define

- $X = 0$ if the number is even, $X = 1$ if odd;
- $Y = 0$ if the number is 4, $Y = 1$ if it is 3 or less.

| Die result | probability | $X$ | $Y$ |
| --- | --- | --- | --- |
| 1 | 0.25 | 1 | 1 |
| 2 | 0.25 | 0 | 1 |
| 3 | 0.25 | 1 | 1 |
| 4 | 0.25 | 0 | 0 |

Counting outcomes gives the joint table:

| $X \backslash Y$ | $Y=0$ | $Y=1$ | $p(X=k)$ |
| --- | --- | --- | --- |
| $X=0$ | 0.25 | 0.25 | 0.5 |
| $X=1$ | 0 | 0.5 | 0.5 |
| $p(Y=l)$ | 0.25 | 0.75 | |

**Conditional distribution of $X$ given $Y=1$** (slide 46): divide the $Y=1$ column by its total 0.75.

$$
p(X=0 \mid Y=1)=\frac{0.25}{0.75}=\frac{1}{3},\qquad p(X=1 \mid Y=1)=\frac{0.5}{0.75}=\frac{2}{3}
$$

## 3. Conditional expected value

The [[Conditional Expected Value]] is the expected value of the conditional distribution: an ordinary expected value, but computed with the conditional probabilities.

$$
E(X \mid Y=1)=\sum_k k\cdot p(X=k \mid Y=1)=0\cdot\frac13+1\cdot\frac23=\frac23
$$

Compare with the unconditional $E(X)=0.5$: knowing $Y=1$ pushes our expectation of $X$ up. That shift is the sign that $X$ and $Y$ carry information about each other.

## 4. Independence

> [!note] Reconstructed from the slides
> Slide 51 is a section title only. The definition below is the standard one and is what the following slides rely on.

$X$ and $Y$ are [[Independence of Random Variables|independent]] when knowing one tells us nothing about the other: every cell of the joint table equals the product of its margins,

$$
p(X=k,\,Y=l)=p(X=k)\cdot p(Y=l)\quad\text{for all } k,l
$$

equivalently $p(Y=l \mid X=k)=p(Y=l)$. In the die example $p(X=1,Y=0)=0$ but $p(X=1)\,p(Y=0)=0.5\cdot0.25\neq0$, so $X$ and $Y$ are **not** independent. Independence matters for prediction: the lecture notes later that information about one variable helps predict the other only "if the variables are not independent".

## 5. Covariance

[[Covariance]] **captures the linear relationship** between $X$ and $Y$. The definition (slides 56 to 66):

$$
Cov(X,Y)=E\big((X-E(X))\cdot(Y-E(Y))\big)=\sum\big(x_i-E(X)\big)\big(y_j-E(Y)\big)\,p(X=x_i,\,Y=y_j)
$$

Reading the sign: when $X$ is above its mean, is $Y$ usually above its mean too?

| Pattern | Covariance |
| --- | --- |
| $Y$ tends to rise with $X$ | $Cov(X,Y)>0$ |
| $Y$ tends to fall as $X$ rises | $Cov(X,Y)<0$ |
| No linear pattern | $Cov(X,Y)=0$ |

The slide shows four scatter plots (correlations 0.81, -0.81, 0 and 0). The last one is a clear **parabola** with correlation 0: a strong relationship that is not linear has zero covariance.

![[Lec11_data_correlation_scatter.png]]

> [!note] Source of the figure
> Cropped from slide 55. The points are simulated data in the lecturer's R plot, not a real dataset.

> [!warning] Zero covariance does not mean independent
> Covariance only measures **linear** association. The parabola has $Cov=0$ but $Y$ is completely determined by $X$. Independence implies $Cov=0$, not the other way round.

### Worked example: covariance in the die problem

From the joint table: $E(X)=0\cdot0.5+1\cdot0.5=0.5$ and $E(Y)=0\cdot0.25+1\cdot0.75=0.75$. Sum over the three cells with non-zero probability (the cell $X=1,Y=0$ has probability 0):

$$
Cov(X,Y)=(0-0.5)(0-0.75)(0.25)+(0-0.5)(1-0.75)(0.25)+(1-0.5)(1-0.75)(0.5)
$$

$$
=0.09375-0.03125+0.0625=0.125
$$

> [!tip] Check
> The shortcut $E(XY)-E(X)E(Y)$ gives the same: $E(XY)=1\cdot1\cdot0.5=0.5$, and $0.5-0.5\cdot0.75=0.125$. (The shortcut is not on the slides.)

**Meaning of 0.125 (slide 66):** positive, so a positive linear relationship, $Y$ increases as $X$ increases. But **how strong?** Covariance depends on the units of $X$ and $Y$, so 0.125 alone cannot say. That motivates the correlation coefficient.

## 6. The correlation coefficient

Standardise covariance by both standard deviations (slides 67 to 80). The [[Correlation Coefficient]] of the population is

$$
\rho_{x,y}=\frac{Cov(X,Y)}{SD(X)\cdot SD(Y)}
$$

with $SD(X)=\sqrt{E(X^2)-E(X)^2}$. The lecturer builds the meaning from three extreme cases:

| Value | Meaning |
| --- | --- |
| $\rho=1$ | Perfect positive linear relationship |
| $\rho=-1$ | Perfect negative linear relationship |
| $\rho=0$ | No linear relationship at all |

and in general $-1\le\rho\le1$, so unlike covariance it is unit-free and comparable across problems.

### Die example

$SD(X)=0.5$ (since $E(X^2)=0.5$, variance $0.5-0.25=0.25$) and $SD(Y)=0.433$ (since $E(Y^2)=0.75$, variance $0.75-0.5625=0.1875$):

$$
\rho_{x,y}=\frac{0.125}{0.5\cdot0.433}=0.577
$$

A moderate-to-strong positive linear relationship.

## 7. Point estimation of $\rho$: Pearson's r

$\rho_{x,y}$ is a **parameter** of the joint distribution. To estimate it from a sample we plug in sample versions (slide 87):

| | Parameter (population) | Estimator (sample) |
| --- | --- | --- |
| Correlation | $\rho_{x,y}=\dfrac{Cov(X,Y)}{SD(X)\,SD(Y)}$ | $r_{x,y}=\dfrac{Cov(X,Y)}{S(X)\,S(Y)}$ |
| Covariance | $E\big((X-E(X))(Y-E(Y))\big)$ | $\dfrac{\sum_{i=1}^n (x_i-\bar X)(y_i-\bar Y)}{n-1}$ |
| Standard deviation | $SD(X)$ | $S(X)=\sqrt{\dfrac{\sum_{i=1}^n(x_i-\bar X)^2}{n-1}}$ |

The estimator $r_{x,y}$ is called [[Pearson's r]]. The divisor $n-1$ is the same one met for the sample variance in [[Lec_02-Point Estimation and the Variance Estimator]].

### Worked example: a sample of 30 die rolls

The slides draw 30 rolls (3, 2, 4, 4, 1, 3, 3, 3, 2, 1, 2, 2, 3, 3, 4, 2, 2, 2, 4, 2, 2, 1, 3, 4, 2, 3, 1, 4, 3, 1), convert each to $(X,Y)$ and compute

$$
S(X)=0.507,\quad S(Y)=0.407,\quad Cov(X,Y)=0.0965,\quad r_{x,y}=0.468
$$

> [!tip] Check
> Recomputing from the 30 rolls gives $S(X)=0.5074$, $S(Y)=0.4068$, $Cov=0.09655$ and $r=0.4677$, matching the slides.

| | Value |
| --- | --- |
| Sample estimate $r_{x,y}$ | 0.468 |
| Population parameter $\rho_{x,y}$ | 0.577 |

The estimate misses the parameter, as any estimate does.

### Properties of $r_{x,y}$

- $-1\le r_{x,y}\le1$.
- It is a **biased** estimator of $\rho_{x,y}$, but less so for larger $n$.
- It is a **consistent** estimator of $\rho_{x,y}$ (see [[Consistent Estimator]] and [[Unbiased Estimator]]).

## 8. Prediction

**Point estimation** estimates the value of a parameter. [[Prediction]] estimates the value of **a single observation**, and we base it on the value (or estimated value) of one or more parameters.

> [!example] Example 1: a six-sided die
> What number should I expect? The prediction is $E(X)=3.5$.

Why is the expected value a good prediction (slide 121)?

1. $E(X-E(X))=0$: errors cancel on average.
2. **Least squares:** $A=E(X)$ is the value that makes $E(X-A)^2$ smallest, the absolute minimum of the squared-error function. See [[Least Squares]].

> [!example] Example 2: real-life prediction (slides 124 to 125)
> How many hours a week does a random Reichman student study outside class? The parameter to estimate is the expected value, so take a random sample, use the average as the estimator and compute. The 19 responses were 6, 10, 20, 5, 5, 0, 6, 2, 6, 0, 3, 2, 12, 1, 10, 1, 5, 5, 2, giving
>
> $$
> \bar X=\frac{101}{19}=5.32
> $$
>
> We predict that a random Reichman student studies 5.32 hours a week outside class.

### 8.1 Prediction with a joint distribution

In a joint distribution, information about one variable can improve our prediction of the other, **provided the variables are not independent**.

> [!example] Example 3: a random die (slides 127 to 149)
> A die is picked at random, equally likely four-, six- or eight-sided, and rolled. Let $X$ be the number of sides and $Y$ the number rolled.

**Joint probabilities.** $p(X=4,Y=1)=p(X=4)\,p(Y=1\mid X=4)=\frac13\cdot\frac14=\frac1{12}$. In general $p(X=n,Y=l)=\frac13\cdot\frac1n$ for $l\le n$ and 0 otherwise:

| $X \backslash Y$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $X=4$ | 1/12 | 1/12 | 1/12 | 1/12 | 0 | 0 | 0 | 0 |
| $X=6$ | 1/18 | 1/18 | 1/18 | 1/18 | 1/18 | 1/18 | 0 | 0 |
| $X=8$ | 1/24 | 1/24 | 1/24 | 1/24 | 1/24 | 1/24 | 1/24 | 1/24 |

**1. Die unknown.** We can only predict the (marginal) expected value of $Y$. The marginal weights are $13/72$ for $Y\in\{1,2,3,4\}$, $7/72$ for $Y\in\{5,6\}$ and $3/72$ for $Y\in\{7,8\}$:

$$
E(Y)=\frac{13}{72}(1+2+3+4)+\frac{7}{72}(5+6)+\frac{3}{72}(7+8)=3.5
$$

**2. Die known.** Predict the conditional expected value. For $X=4$ (slide 145):

$$
E(Y \mid X=4)=\sum_j y_j\,p(y_j \mid X=4)=\frac{1/12}{1/3}\cdot1+\dots+\frac{1/12}{1/3}\cdot4=2.5
$$

> [!note] Reconstructed from the slides
> The slides show only $E(Y\mid X=4)=2.5$. The other two follow the same way: a fair $n$-sided die has mean $(n+1)/2$, so $E(Y\mid X=6)=3.5$ and $E(Y\mid X=8)=4.5$. The averaging check $\tfrac13(2.5+3.5+4.5)=3.5=E(Y)$ also holds.

![[Lec11_conditional_expectation_dice.png]]

The three conditional distributions sit at different places (dashed lines), while the single prediction 3.5 ignores which die was used.

**The claim (slide 149).** If $X$ and $Y$ are not independent, $E(Y\mid X=k)$ is always a better prediction than $E(Y)$, in the least-squares sense:

$$
E\big(Y-E(Y)\big)^2>E\big(Y-E(Y\mid X)\big)^2
$$

> [!tip] Check on the die example
> $Var(Y)=\frac{1156}{72}-3.5^2\approx3.81$, while the average conditional variance is $\frac13\left(\frac{15}{12}+\frac{35}{12}+\frac{63}{12}\right)\approx3.14$. Knowing the die lowers the expected squared error. (This numerical check is added here and is not on the slides.)

### 8.2 The practical problem

How to estimate $E(Y\mid X=k)$? Average the $Y$ values of the observations with $X=k$. **Problem:** a **large sample** is needed, because many observations have $X\ne k$ and are unused, and it gets worse the smaller $P(X=k)$ is. This motivates a **formula** for the prediction, a line.

## 9. Linear regression

### 9.1 The line

If $X$ and $Y$ are perfectly linearly related, a general rule can match each value of $X$ with a predicted value of $Y$:

$$
\hat Y=b\cdot X+a
$$

How to find $a$ and $b$?

**Slope and intercept.** Using the population quantities (slides 174 to 194):

$$
b=\rho_{x,y}\cdot\frac{\sigma_y}{\sigma_x},\qquad a=E(Y)-E(X)\cdot b
$$

so the prediction can be written

$$
\hat Y=X\cdot\rho_{x,y}\frac{\sigma_y}{\sigma_x}-E(X)\cdot\rho_{x,y}\frac{\sigma_y}{\sigma_x}+E(Y)
$$

### 9.2 Worked example: exam marks

Let $E(X)=70$, $\sigma_x=5$, $E(Y)=72$, $\sigma_y=4$. The slides' first example is a **perfect** linear relationship ($\rho=1$), so

$$
b=\frac{4}{5},\qquad a=-70\cdot\frac45+72=16,\qquad \hat Y=\frac45X+16
$$

> [!example] Predict for $X=85$
> $\hat Y=85\cdot\frac45+16=84$.

Now let the correlation be weaker. The slides colour-code three cases:

| Case | Prediction |
| --- | --- |
| $\rho_{x,y}=1$ | $\hat Y=\tfrac45X+16$ |
| $\rho_{x,y}=0$ | $\hat Y=E(Y)=72$ (the line is flat) |
| $\rho_{x,y}=0.8$ | $\hat Y=0.8\left(\tfrac45X+16\right)+0.2\cdot72=0.64X+27.2$ |

So with $\rho=0.8$ the prediction is a **weighted mix**: weight $\rho$ on the perfect-relationship line and weight $1-\rho$ on the plain average $E(Y)$. Check: slope $=\rho\,\sigma_y/\sigma_x=0.8\cdot0.8=0.64$, and $a=72-70\cdot0.64=27.2$. For $X=85$ this gives $0.64\cdot85+27.2=81.6$.

![[Lec11_prediction_lines_by_rho.png]]

> [!note] Reconstructed from the slides
> The slides give the three equations and the 0.8 / 0.2 weighting but little text. The reading "weighted mix of the line and $E(Y)$" and the 81.6 value are worked out here. All three lines pass through $(E(X),E(Y))=(70,72)$.

### 9.3 Meaning of $a$ and $b$ (slides 200 and 203)

- **$b$:** how many units the prediction of $Y$ increases for each one-unit increase in $X$.
- **$a$:** what we would predict for $X=0$.

### 9.4 Population regression line is the least-squares line

The regression line is the line that minimises

$$
\min\; E\big(Y-\hat Y\big)^2
$$

"Like $E(X)$ is for $X$" (slide 192): $E(X)$ is the best single-number prediction of $X$, the regression line is the best linear prediction of $Y$ from $X$.

### 9.5 Estimating the line from a sample

The population parameters are replaced by their estimators (slides 193 to 194, 203):

| Population | Sample |
| --- | --- |
| $b=\rho_{x,y}\dfrac{\sigma_y}{\sigma_x}$ | $\hat b=r_{x,y}\dfrac{S_y}{S_x}=\dfrac{Cov(X,Y)}{S_x^2}$ |
| $a=E(Y)-E(X)\,b$ | $\hat a=\bar Y-\hat b\,\bar X$ |

The second form of $\hat b$ follows because $r=Cov/(S_xS_y)$, so $r\,S_y/S_x=Cov/S_x^2$.

**Sample regression line properties (slide 197):**

1. The sum of prediction errors is zero: $\sum(y_i-\hat y_i)=0$.
2. It is the line that minimises the sum of squared errors in the sample, $\min\sum(y_i-\hat y_i)^2$. "Like $\bar X$ is for $X$."

### 9.6 Regression is not symmetrical (slide 201)

Predicting $Y$ from $X$ does **not** give the same line as predicting $X$ from $Y$. The first has slope $\rho\,\sigma_y/\sigma_x$ and minimises vertical errors; the second has slope (in the $X$-on-$Y$ plot) $\rho\,\sigma_x/\sigma_y$ and minimises horizontal errors. They coincide only when $|\rho|=1$.

![[Lec11_regression_not_symmetric.png]]

> [!note] Source of the figure
> Simulated illustration made for this note (150 random points), not data from the lecture.

## 10. Comparison table

| Concept | Parameter | Sample estimator |
| --- | --- | --- |
| Expected value | $E(X)$ | $\bar X$ |
| Standard deviation | $SD(X)$ | $S(X)$ |
| Covariance | $Cov(X,Y)$ | $\sum(x_i-\bar X)(y_i-\bar Y)/(n-1)$ |
| Correlation | $\rho_{x,y}$ | $r_{x,y}$ (Pearson's r) |
| Slope | $b=\rho\,\sigma_y/\sigma_x$ | $\hat b=r\,S_y/S_x$ |
| Intercept | $a=E(Y)-E(X)\,b$ | $\hat a=\bar Y-\hat b\,\bar X$ |

## Summary

- A [[Joint Distribution]] gives probabilities of pairs; **marginals** sum out one variable, **conditionals** rescale a row or column by its total.
- [[Conditional Expected Value]] is the mean of a conditional distribution; for dependent variables $E(Y\mid X)$ predicts $Y$ better than $E(Y)$ (smaller expected squared error).
- [[Covariance]] measures **linear** association but depends on units; $\rho=Cov/(SD(X)SD(Y))$ is unit-free between -1 and 1. Zero covariance does not imply independence.
- The sample estimator is [[Pearson's r]]: biased but consistent. In the 30-roll example $r=0.468$ against $\rho=0.577$.
- [[Prediction]] estimates a single observation; the mean is the least-squares prediction.
- [[Linear Regression]]: $\hat Y=bX+a$ with $b=\rho\sigma_y/\sigma_x$ and $a=E(Y)-E(X)b$; sample version $\hat b=r\,S_y/S_x$, $\hat a=\bar Y-\hat b\bar X$. The line minimises squared errors, and is not symmetric in $X$ and $Y$.

## Related notes

- [[Statistics B]]
- [[Lec_10-Extra Credit Project and Test Selection Recap]]
- [[Lec_02-Point Estimation and the Variance Estimator]]
- [[Lec_03-Maximum Likelihood Estimation]]
- [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]]: independence of categorical variables
