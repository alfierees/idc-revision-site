---
title: "Lec 03: Maximum Likelihood Estimation"
semester: 2
year: 1
course: "Statistics B"
lecture: 3
tags:
  - statistics-b
  - point-estimation
  - maximum-likelihood
  - likelihood
  - estimator-properties
subject: statistics-b
in_scope: true
---

# Lec 03: Maximum Likelihood Estimation

> Part of: [[Statistics B]]
> Key concepts: [[Point Estimation]], [[Unbiased Estimator]], [[Consistent Estimator]], [[Likelihood]], [[Maximum Likelihood Estimate]], [[Log-Likelihood]], [[Binomial Distribution]], [[Normal Distribution]]

## Where this lecture fits

Lecture 2 gave us properties that make an estimator good (unbiased, consistent) and showed how to *guess* an estimator and then repair its bias. This lecture gives a **systematic recipe for finding an estimator**: maximum likelihood. The plan was a quick review of point estimation, then maximum likelihood estimates (MLE), including the key warning that **likelihood is not probability**.

| Old recipe (Lec 02) | New recipe (this lecture) |
| --- | --- |
| 1. Guess an estimator $\hat\theta$ | 1. Guess an estimator **or use the maximum likelihood method** |
| 2. Check bias and consistency | 2. Check bias and consistency |
| 3. Correct for linear bias if present | 3. Correct for linear bias if present |

## 1. Recap of point estimation (slides 4 to 15)

- There is a **population**; we want a **parameter** (its mean, variance, proportion). In practice the chain is **sample, then estimator, then parameter estimate**.
- Good estimators are **unbiased** and **consistent**. This repeats Lecture 2 (slides 6, 7, 10 and 12 are straight repeats, so only a one-line recap here): unbiased means $E(\hat\theta)=\theta$; consistent means the estimator becomes accurate as $n\to\infty$ (variance shrinking to 0); the standard good estimators are $\bar X$ for $\mu$, $S^2$ with divisor $n-1$ for $\sigma^2$, and the sample proportion for a population proportion.
- The only new reminder is *why* $n-1$: the sample average is always closer to the observations than the true $\mu$ is, so dividing by $n$ **underestimates** variance, by the factor $(n-1)/n$.

$$
E\left(\frac{\sum_{i=1}^{n}(X_i-\bar X)^2}{n}\right)=\frac{n-1}{n}\sigma^2
$$

In Excel, `=VAR.S()` divides by $n-1$ and `=VAR.P()` divides by $n$.

> [!info] Notation used from here on
> $X_i$ is an observation (a **random variable**); $x_i$ is a possible *value* of it. A sample in general is $\mathbf X=(X_1,\dots,X_n)$; a specific observed sample is $\mathbf X=(X_1=x_{243},X_2=x_{6503},\dots)$, i.e. the particular values we happened to draw.

## 2. Likelihood and the MLE (slides 16 to 21)

> [!info] Likelihood
> The **likelihood** of a parameter value $\theta$ is the probability of the *observed sample* $\mathbf X$ given that parameter value:
> $$
> L(\theta,\mathbf X)=P(\mathbf X\mid\theta)
> $$

> [!info] Maximum Likelihood Estimate (MLE)
> The MLE is the value of $\theta$ for which the likelihood of the observed sample is highest:
> $$
> \hat\theta=\text{the value of }\theta\text{ for which }L(\theta,\mathbf X)=\max
> $$

**Intuition:** among all candidate parameter values, pick the one under which *what you actually saw* would have been most probable. The data are fixed; the parameter is what we vary.

## 3. Example 1: two bags, one ball (slides 22 to 41)

Bag 1 is 100% black balls, Bag 2 is 100% white. One bag is chosen at random, you pull one ball. Which bag did you get?

Fill a table of $P(\text{ball},\text{bag})$:

| | White ball | Black ball |
| --- | --- | --- |
| **Bag 1** | $P(\text{white},\text{bag }1)=0$ | $P(\text{black},\text{bag }1)=1$ |
| **Bag 2** | $P(\text{white},\text{bag }2)=1$ | $P(\text{black},\text{bag }2)=0$ |

Now read it **by column** (fix the observation, compare the bags):

- Black ball: $L(\text{bag }1,\text{black})=1>L(\text{bag }2,\text{black})=0$, so the MLE is **Bag 1**.
- White ball: $L(\text{bag }2,\text{white})=1>L(\text{bag }1,\text{white})=0$, so the MLE is **Bag 2**.

So the MLE as a function of the observation is: black gives Bag 1, white gives Bag 2.

## 4. Example 2: two bags, three draws (slides 42 to 62)

Bag 1 is 25% black, Bag 2 is 75% black (rest white). You get one bag, draw **three balls with replacement** and count the black ones, $X$. Which bag should you name for each possible $X$?

Because draws are with replacement and independent, $X\sim B(3,p)$ with $p=0.25$ (Bag 1) or $p=0.75$ (Bag 2), using the binomial PMF:

$$
P(X=k)=\binom{3}{k}p^{k}(1-p)^{3-k}
$$

Worked entries from the slides: for Bag 1 and $X=0$, $\binom30 0.25^0 0.75^3=(3/4)^3=27/64$; for Bag 2 and $X=0$, $(1/4)^3=1/64$. The completed table:

| | $X=3$ | $X=2$ | $X=1$ | $X=0$ |
| --- | --- | --- | --- | --- |
| **Bag 1** ($p=0.25$) | $1/64$ | $9/64$ | $27/64$ | $27/64$ |
| **Bag 2** ($p=0.75$) | $27/64$ | $27/64$ | $9/64$ | $1/64$ |

**Reading the MLE off each column** (the larger entry wins):

- 1 black ball: $27/64$ (Bag 1) beats $9/64$ (Bag 2), so the MLE is **Bag 1**.
- 3 black balls: $27/64$ (Bag 2) beats $1/64$ (Bag 1), so the MLE is **Bag 2**.
- Overall: $X=0,1\Rightarrow$ Bag 1; $X=2,3\Rightarrow$ Bag 2.

> [!tip] Intuition
> Few black balls look like the mostly-white bag; many black balls look like the mostly-black bag. The MLE just formalises "which story makes my data least surprising".

## 5. Why likelihood is not probability (slides 63 to 67)

The slides ask: are the numbers in that table probabilities or likelihoods? The answer is **both, depending on how you read it**.

- Reading **along a row** (one bag fixed, outcomes $X=0,\dots,3$ varying): these are **probabilities**. A row sums to $1$: $1/64+9/64+27/64+27/64=1$.
- Reading **down a column** (one outcome fixed, bags varying): these are **likelihoods**. A column does **not** sum to 1: for $X=1$, $27/64+9/64=36/64$.

> [!warning] Likelihood is attached to hypotheses, not outcomes
> Likelihoods are attached to **hypotheses** (possible values of a *parameter*), not to **outcomes** (possible values of a *random variable*). They **do not sum to 1** across hypotheses, so a likelihood is not the probability that a hypothesis is true. Only comparisons between likelihoods are meaningful.

![[Lec03_likelihood_vs_probability.png]]

*Figure (theory diagram, from the slide 45 to 56 numbers): left, each bag's probabilities over outcomes (each colour's four bars sum to 1); right, the likelihoods of the two bags for each fixed outcome (these pairs do not sum to 1).*

| | Probability | Likelihood |
| --- | --- | --- |
| Fixed | the parameter (which bag) | the data (the observed $X$) |
| Varies | the outcome | the parameter |
| Sums to 1? | yes, over outcomes | no, over parameter values |
| Used for | predicting data | choosing a parameter |

## 6. Example 3: unknown proportion, continuous parameter (slides 68 to 91)

An urn has an unknown proportion $p$ of black balls ($0\le p\le 1$). Draw $n$ balls. Find the MLE of $p$.

With infinitely many possible bags, the discrete table becomes impossible, so we express probability **as a function of the parameter**. Let $X_i=1$ if black and $0$ if white, so the number of black balls is $\sum X_i$ and $P(\text{black})=p$.

### Step 1: the likelihood function

Take one *specific* sample. Because draws are independent, multiply:

- all white: $P(X_1=0)\cdots P(X_n=0)=(1-p)^n$
- one black first, rest white: $p(1-p)^{n-1}$
- two black first: $p^2(1-p)^{n-2}$

In general:

$$
L(p,\mathbf X)=P(\mathbf X,p)=p^{\sum X_i}\,(1-p)^{\,n-\sum X_i}
$$

The exponent of $p$ counts the $X_i=1$; the exponent of $1-p$ counts the $X_i=0$.

> [!note] Reconstructed from the slides
> There is no binomial coefficient here because the likelihood is for the specific observed sequence. (Using the binomial PMF for the count instead only multiplies by a constant that does not depend on $p$, so the maximiser is the same. The slides do not state this; it is added for completeness.)

### Step 2: use the log trick

Differentiating the product needs the product rule and is long. Instead use that $\ln$ is **monotonic**, so the maximum of $\ln L$ is at the same place as the maximum of $L$, and $\ln(ab)=\ln a+\ln b$, $\ln(a^b)=b\ln a$ turn products into sums:

$$
\ln L(p,\mathbf X)=\sum X_i\,\ln p+\left(n-\sum X_i\right)\ln(1-p)
$$

![[Lec03_bernoulli_likelihood.png]]

*Figure (theory diagram, invented illustration, n=10 with 3 black): L and ln L peak at the same p.*

### Step 3: first derivative and critical point

Using $\ln'(f)=f'/f$:

$$
\frac{d\ln L}{dp}=\frac{\sum X_i}{p}-\frac{n-\sum X_i}{1-p}=\frac{\sum X_i-pn}{p(1-p)}
$$

Setting it to $0$ gives $\sum X_i-pn=0$, so the critical point is

$$
p=\frac{\sum X_i}{n}
$$

### Step 4: second derivative (is it a maximum?)

The slides use a shortcut: **if the first derivative is a fraction with a positive denominator, the sign of the second derivative at the critical point is determined by the numerator's derivative only.** Here the numerator $\sum X_i-pn$ has derivative $-n<0$, so the critical point is a maximum. It is the only critical point, so it is the **absolute maximum**.

$$
\boxed{\hat p=\frac{\sum X_i}{n}}
$$

This is just the sample proportion, the "good proportion estimator" from before, now *derived* rather than guessed.

## 7. The general procedure and properties of MLEs (slides 92, 93, 112)

> [!info] Recipe for the MLE of a continuous parameter
> 1. Write the likelihood function $L(\theta,\mathbf X)=P(\mathbf X,\theta)$.
> 2. Take the log-likelihood $\ln L(\theta,\mathbf X)$.
> 3. Maximise it: find critical points (first derivative $=0$), classify them (second derivative), identify the absolute maximum.

Maximum likelihood estimators are:

- **Not necessarily unbiased.**
- **Consistent** (almost always).
- **Invariant:** if $\hat\theta$ is the MLE of $\theta$, then $g(\hat\theta)$ is the MLE of $g(\theta)$, provided $g$ is injective (one-to-one).

## 8. Example 4: MLE for a normal sample (slides 94 to 111)

> [!warning] Beyond exam level
> The lecturer's own warning (slide 95): algebra and partial derivatives ahead, "much much harder than exam level". Read it for understanding of the method and the final results.

A sample of $n$ observations from a normal population with unknown $\mu$ and unknown $\sigma^2$. Find the MLE of each.

**Likelihood.** Multiply $n$ normal densities $f(x)=\frac{1}{\sqrt{2\pi\sigma^2}}e^{-(x-\mu)^2/(2\sigma^2)}$, using $e^ae^b=e^{a+b}$:

$$
P(\mathbf X,\mu,\sigma^2)=(2\pi\sigma^2)^{-n/2}\,e^{-\sum (x_i-\mu)^2/(2\sigma^2)}
$$

**Log-likelihood** (using $\ln e=1$):

$$
\ln L=-\frac n2\ln(2\pi\sigma^2)-\frac{1}{2\sigma^2}\sum(x_i-\mu)^2
$$

We treat it as two functions: one of $\mu$ (with $\sigma^2$ fixed) and one of $\sigma^2$ (with $\mu$ fixed). These are **partial derivatives**: everything not being differentiated is a constant.

**MLE for $\mu$.**

$$
\frac{\partial\ln L}{\partial\mu}=\frac{1}{\sigma^2}\left(\sum x_i-n\mu\right)=0\;\Rightarrow\;\hat\mu=\frac{\sum x_i}{n}=\bar X
$$

Second derivative: $-n/\sigma^2$, always negative, so it is a maximum and the only one, hence absolute.

**MLE for $\sigma^2$.**

$$
\frac{\partial\ln L}{\partial\sigma^2}=\frac{-n\sigma^2+\sum(x_i-\mu)^2}{2(\sigma^2)^2}=0\;\Rightarrow\;\sigma^2=\frac{\sum(x_i-\mu)^2}{n}
$$

The numerator's derivative with respect to $\sigma^2$ is $-n<0$, so it is a maximum (same shortcut as Example 3), and the only one.

**Using invariance:** $\mu$ is unknown, so substitute its MLE $\bar X$:

$$
\hat{\sigma}^2=\frac{\sum (x_i-\bar X)^2}{n}
$$

> [!warning] The "But..." on slide 111
> This MLE divides by $n$, not $n-1$. From the recap, $E\!\left(\frac{\sum(X_i-\bar X)^2}{n}\right)=\frac{n-1}{n}\sigma^2$, so the MLE of $\sigma^2$ is **biased** (though consistent). This is the concrete example of "MLEs are not necessarily unbiased". The usual fix is the linear-bias correction from Lec 02, multiplying by $n/(n-1)$ to get $S^2$.

## Comparison: guess-and-correct vs maximum likelihood

| | Guess and correct | Maximum likelihood |
| --- | --- | --- |
| Source of the estimator | intuition / proposal | maximise $L(\theta,\mathbf X)$ |
| Unbiased? | checked, then corrected | not guaranteed |
| Consistent? | checked | almost always |
| Example results | $\bar X$, $S^2$ ($n-1$) | $\hat p=\sum X_i/n$, $\hat\mu=\bar X$, $\hat\sigma^2$ ($n$) |

## Summary

- The **maximum likelihood method** finds estimators: choose the parameter value that makes the observed sample most probable.
- **Likelihood** $L(\theta,\mathbf X)=P(\mathbf X\mid\theta)$ is a function of the parameter, with the data fixed. It is **not** a probability over hypotheses and does not sum to 1.
- Discrete case: tabulate $P(\text{data}\mid\text{parameter})$ and pick the best parameter per observation (bag examples).
- Continuous case: write $L$, take $\ln L$, solve first derivative $=0$, check second derivative, confirm absolute maximum. Bernoulli gives $\hat p=\sum X_i/n$; normal gives $\hat\mu=\bar X$ and $\hat\sigma^2=\sum(x_i-\bar X)^2/n$.
- MLEs: not necessarily unbiased (the normal variance MLE is biased), almost always consistent, and invariant under one-to-one transformations.
- Next up: Exercise 3 (Tuesday).

## Related notes

- [[Statistics B]]
- [[Point Estimation]], [[Unbiased Estimator]], [[Consistent Estimator]]
- [[Likelihood]], [[Maximum Likelihood Estimate]], [[Log-Likelihood]]
- [[Binomial Distribution]], [[Normal Distribution]]
