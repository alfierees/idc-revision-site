---
title: "Lec 02: Point Estimation and the Variance Estimator"
semester: 2
year: 1
course: "Statistics B"
lecture: 2
tags:
  - statistics-b
  - lecture
  - point-estimation
  - unbiased-estimator
  - consistent-estimator
  - sample-variance
  - standard-deviation-estimator
  - proportion-estimator
  - uniform-distribution
subject: statistics-b
in_scope: true
---

# Lec 02: Point Estimation and the Variance Estimator

> Part of: [[Statistics B]]
> Key concepts: [[Point Estimation]], [[Estimator]], [[Unbiased Estimator]], [[Consistent Estimator]], [[Sample Variance]], [[Sample Standard Deviation]], [[Proportion Estimator]], [[Maximum Estimator for a Uniform Distribution]]

Source: Class 02 (99 slides, many of them animation steps of the same derivation). Instructor: Asael Sklar.

The lecture has one question running through it: **which sample statistic should we use to guess an unknown population parameter?** The answer is "one that is unbiased and consistent", and most of the hour is spent checking those two properties for the variance, the standard deviation, a proportion and the maximum of a uniform distribution.

## 1. Point estimation

**Point estimation** is estimating the value of one unknown population parameter $\theta$ from a sample. The result is a single number $\hat{\theta}$ (the "hat" marks an estimate or estimator), as opposed to a range.

Point estimates are everywhere: opinion polls, average prices, average ratings. The process has two steps:

1. Take a random sample.
2. Calculate an **estimator** (a formula applied to the sample) and report its value.

The real question is how we know which sample statistic to use for which parameter. The lecture answers with two criteria.

## 2. Properties of a good estimator

> [!note] Recap from Lec_01
> Slides 5, 8, 9 and 12 repeat [[Lec_01-Point Estimation and Sampling Distributions]] (unbiasedness, consistency and the sample mean as an estimator of $\mu$). The one-line versions are below; the new material starts at section 3.

| Property | Definition | Condition |
| --- | --- | --- |
| **Unbiased** | On average the estimator hits the parameter | $E(\hat{\theta})=\theta$ |
| **Consistent** | Larger samples make the estimator more reliable | $Var(\hat{\theta}) \to 0$ as $n \to \infty$ |

The slide uses a target with arrows scattered around the bullseye for unbiasedness: no systematic miss, though any single shot can be off.

> [!info] The sample mean passes both tests
> $\bar{X}=\frac{\sum X_i}{n}$ is an unbiased and consistent estimator of $\mu$, because $E(\bar{X})=\mu$ and $Var(\bar{X})=\frac{\sigma^2}{n}\to 0$. This was proved in Lec_01 and is reused repeatedly below.

### Fixing a biased estimator

If an estimator is **linearly biased**, meaning its expected value is a linear function of the parameter,

$$
E(\hat{\theta}_{bias}) = a + b\,\theta
$$

then a corrective linear transformation gives an unbiased estimator:

$$
\hat{\theta}_{not\ bias} = \frac{\hat{\theta}_{bias} - a}{b}
$$

Check: taking expectations, $\frac{(a+b\theta)-a}{b}=\theta$. This trick is used for the variance in section 4.

The slide that lists example statistics sets up the target of the lecture:

| Statistic | Formula | Status |
| --- | --- | --- |
| Average | $\bar{X}=\frac{\sum X_i}{n}$ | unbiased for $\mu$ |
| Variance (biased) | $\frac{\sum (X_i-\bar{X})^2}{n}$ | biased |
| Variance (unbiased) | $S^2=\frac{\sum (X_i-\bar{X})^2}{n-1}$ | unbiased |

## 3. The variance estimator

We want to estimate the population variance $\sigma^2$. There are two cases, depending on whether $\mu$ is known.

### Case 1: $\mu$ is known

Since $Var(X)=E(X_i-\mu)^2$, the natural estimator is the average squared deviation of the sample from $\mu$:

$$
\hat{\sigma}^2 = \frac{\sum_{i=1}^{n}(X_i-\mu)^2}{n}
$$

Is it unbiased? Take expectations, using that expected values are additive and that taking out a constant $\frac{1}{n}$ is a linear transformation:

$$
E(\hat{\sigma}^2)=E\!\left(\frac{\sum_{i=1}^{n}(X_i-\mu)^2}{n}\right)=\frac{\sum_{i=1}^{n}E(X_i-\mu)^2}{n}=\frac{\sum_{i=1}^{n}\sigma^2}{n}=\frac{n\,\sigma^2}{n}=\sigma^2
$$

So it **is** unbiased. The step $E(X_i-\mu)^2=Var(X)=\sigma^2$ is just the definition of variance.

### Case 2: $\mu$ is unknown (the realistic case)

The Case 1 estimator is unusable because it contains $\mu$. The obvious fix is to replace $\mu$ with the estimator we already trust, $\bar{X}$:

$$
\hat{\sigma}^2_{pos} = \frac{\sum_{i=1}^{n}(X_i-\bar{X})^2}{n}
$$

(The subscript "pos" is the lecturer's label for this "proposed" estimator.) Is it unbiased? The slides say "algebra ahead" and then spend about 15 slides on it. Here is the whole argument in order.

**Step 1: add and subtract $\mu$ inside the bracket.**

$$
X_i-\bar{X}=(X_i-\mu)-(\bar{X}-\mu)
$$

**Step 2: expand the square** using $(a-b)^2=a^2-2ab+b^2$ and split into three fractions:

$$
E(\hat{\sigma}^2_{pos})=E\!\left(\frac{\sum(X_i-\mu)^2}{n}-\frac{2(\bar{X}-\mu)\sum(X_i-\mu)}{n}+\frac{(\bar{X}-\mu)^2\sum 1}{n}\right)
$$

Here $\bar{X}$ and $\mu$ do not depend on $i$, so they come out of the sums, and $\sum_{i=1}^{n}1=n$.

**Step 3: simplify the middle sum.**

$$
\frac{\sum_{i=1}^{n}(X_i-\mu)}{n}=\frac{\sum X_i}{n}-\frac{n\mu}{n}=\bar{X}-\mu
$$

The middle term therefore becomes $-2(\bar{X}-\mu)^2$, and the third term is $(\bar{X}-\mu)^2\cdot\frac{n}{n}=(\bar{X}-\mu)^2$. Together they collapse to a single term:

$$
E(\hat{\sigma}^2_{pos})=E\!\left(\frac{\sum(X_i-\mu)^2}{n}\right)-E(\bar{X}-\mu)^2
$$

**Step 4: evaluate each piece.**

- The first piece is the Case 1 result: $\frac{\sum E(X_i-\mu)^2}{n}=\frac{n\,Var(X)}{n}=Var(X)=\sigma^2$.
- The second piece: $E(\bar{X}-\mu)^2=Var(\bar{X})$ because $E(\bar{X})=\mu$, and $Var(\bar{X})=\frac{\sigma^2}{n}$.

**Step 5: combine.**

$$
E(\hat{\sigma}^2_{pos})=Var(X)-Var(\bar{X})=\sigma^2-\frac{\sigma^2}{n}=\frac{n\sigma^2}{n}-\frac{\sigma^2}{n}=\frac{n-1}{n}\,\sigma^2
$$

> [!warning] Conclusion: dividing by n underestimates
> $E(\hat{\sigma}^2_{pos})=\frac{n-1}{n}\sigma^2<\sigma^2$. The estimator is **linearly biased** (here $a=0$, $b=\frac{n-1}{n}$): it is too small on average, by the factor $\frac{n-1}{n}$.

### Unbiasing it

Apply the corrective transformation from section 2 with $a=0$ and $b=\frac{n-1}{n}$, i.e. multiply by $\frac{n}{n-1}$:

$$
\hat{\sigma}^2_{unbiased}=\hat{\sigma}^2_{pos}\cdot\frac{n}{n-1}=\frac{\sum(X_i-\bar{X})^2}{n}\cdot\frac{n}{n-1}=\frac{\sum_{i=1}^{n}(X_i-\bar{X})^2}{n-1}
$$

This is the sample variance, written $S^2$:

$$
\boxed{S^2=\frac{\sum_{i=1}^{n}(X_i-\bar{X})^2}{n-1}}
$$

![[Lec02_variance_divisor_bias.png]]

*Theory diagram. The red curve is $\frac{n-1}{n}\sigma^2$ in units of $\sigma^2$; dots are simulated means for normal samples (200,000 samples per size). Dividing by $n-1$ stays on 1 at every $n$. The bias is large for tiny samples (50% too low at $n=2$) and fades as $n$ grows.*

### Why is the estimate smaller? (intuition slide)

Compare the two expectations the lecturer puts side by side:

$$
E\!\left(\frac{\sum(X_i-\mu)^2}{n}\right)=Var(X),\qquad E\!\left(\frac{\sum(X_i-\bar{X})^2}{n}\right)=Var(X)-Var(\bar{X})
$$

> [!tip] Intuition
> The sample average is always **closer to the observations** than the true $\mu$ is, because $\bar{X}$ is built from those very observations (it is the point that minimises the sum of squared distances to them). So squared deviations from $\bar{X}$ are systematically smaller than from $\mu$. The amount by which they are smaller is exactly $Var(\bar{X})$, "how much closer the average is". Dividing by $n-1$ instead of $n$ pays that back.

The slide notes link to an online sampling-distribution simulation (onlinestatbook.com) for experimenting with this.

> [!warning] Common mistake: n versus n minus 1
> Dividing by $n$ is correct only when $\mu$ is **known** (Case 1) or when you hold the whole population (then $\bar{X}=\mu$). With a sample and unknown $\mu$ use $n-1$.

### Standard deviation estimator

$SD=\sqrt{Var(X)}=\sqrt{E(X_i-\mu)^2}$. Is $\sqrt{S^2}$ an unbiased estimator of $\sigma$? **No.** The square root is not a linear transformation, so we cannot pass the expectation through it:

$$
E(\sqrt{X})\neq\sqrt{E(X)}
$$

(Even though $E(S^2)=\sigma^2$, we get $E(S)\neq\sigma$.) And yet, the estimator used for the standard deviation is

$$
\boxed{S=\sqrt{\frac{\sum_{i=1}^{n}(x_i-\bar{X})^2}{n-1}}}
$$

Its properties, as stated on the slide:

- $S$ is an **underestimate** on average: $E(S)\le\sigma$.
- $S$ is **asymptotically unbiased**: the bias shrinks as $n$ grows and vanishes at $n=\infty$.

| Estimator | Target | Unbiased? |
| --- | --- | --- |
| $\bar{X}$ | $\mu$ | yes |
| $\frac{\sum(X_i-\mu)^2}{n}$ ($\mu$ known) | $\sigma^2$ | yes |
| $\frac{\sum(X_i-\bar{X})^2}{n}$ | $\sigma^2$ | no, mean is $\frac{n-1}{n}\sigma^2$ |
| $S^2=\frac{\sum(X_i-\bar{X})^2}{n-1}$ | $\sigma^2$ | yes |
| $S$ | $\sigma$ | no, but asymptotically unbiased |

> [!note] Reconstructed from the slides
> The slides only assert that $E(\sqrt{X})\neq\sqrt{E(X)}$ and that $S$ underestimates. The reason it is an *under*estimate is Jensen's inequality (the square root is concave, so $E(\sqrt{S^2})\le\sqrt{E(S^2)}=\sigma$); this is my addition, not on the slides.

### Worked example

> [!example] Variance estimate for the sample 5, 6, 7
> Mean: $\bar{X}=\frac{5+6+7}{3}=6$, and $n=3$.
>
> $$
> S^2=\frac{(5-6)^2+(6-6)^2+(7-6)^2}{3-1}=\frac{1^2+0^2+1^2}{2}=\frac{2}{2}=1
> $$
>
> So the variance estimate is **1** (and $S=1$). Dividing by $n=3$ instead would give $\frac{2}{3}$, which is the biased value.

### Excel

| Function | Formula | Use |
| --- | --- | --- |
| `=VAR.S()` | divides by $n-1$ | sample data (the usual choice) |
| `=VAR.P()` | divides by $n$ | the whole population, where $\bar{X}=\mu$ |

## 4. The proportion estimator

Question: is the proportion in a sample a good estimator for the population proportion? (The slide shows a TV news poll with bars of about 30%, 67% and 3%: exactly this kind of sample proportion.)

**Setup.** Each respondent is $X_i=1$ for "success" and $0$ for "fail". The number of successes in the sample is binomial:

$$
\sum X_i\sim B(n,p)
$$

The parameter is $p$ and the estimator is the sample proportion:

$$
\hat{p}=\frac{\sum X_i}{n}
$$

**Unbiased?** Use $E\!\left(\sum X_i\right)=np$ for a binomial:

$$
E(\hat{p})=E\!\left(\frac{\sum X_i}{n}\right)=\frac{E(\sum X_i)}{n}=\frac{np}{n}=p
$$

**Consistent?** Use $Var\!\left(\sum X_i\right)=np(1-p)$ for a binomial, and $Var(cY)=c^2Var(Y)$ with $c=\frac{1}{n}$:

$$
Var(\hat{p})=\frac{Var(\sum X_i)}{n^2}=\frac{np(1-p)}{n^2}=\frac{p(1-p)}{n}\xrightarrow{\,n\to\infty\,}0
$$

> [!info] Verdict
> $\hat{p}$ is **unbiased and consistent**: yes, the sample proportion is a good estimator of the population proportion.

### The list of good estimators (slide 78)

| Estimator | For |
| --- | --- |
| $\bar{X}=\frac{\sum X_i}{n}$ | $\mu$ |
| $S^2=\frac{\sum(X_i-\bar{X})^2}{n-1}$ | $\sigma^2$ |
| $\hat{p}=\frac{\sum X_i}{n}$ | the population proportion $p$ |

## 5. Maximum estimator for a uniform distribution

The lecture's motivating story is a photograph of a tank (slide 79): enemy tanks carry **serial numbers**, you observe a few of them, and you want to estimate how many tanks exist. (The slides show only the photo and the model $X\sim U(0,M)$; the tank framing is my reading of the picture.) Model the serial numbers as

$$
X\sim U(0,M)
$$

with $M$ the unknown maximum. (The slide also shows the formulas for a **discrete** uniform $U(a,b)$: $P(X=x_i)=\frac{1}{b-a+1}$, $E(X)=\frac{a+b}{2}$, $Var(X)=\frac{(b-a+1)^2-1}{12}$. Only $E(X)=\frac{a+b}{2}$ is needed.)

### The obvious estimator is biased

Is the **maximum in the sample** an unbiased estimator of $M$? No. Every observation is at most $M$, so $\max(X)\le M$ always, and on average it falls short. It can never overshoot, so it cannot be right on average.

### A proposed fix: twice the sample mean

Propose

$$
\hat{\theta}_{prop}=2\bar{X}
$$

Expectation, step by step, with $E(X)=\frac{a+b}{2}=\frac{0+M}{2}=\frac{M}{2}$:

$$
E(\hat{\theta}_{prop})=E(2\bar{X})=2E(\bar{X})=2E(X)=2\cdot\frac{M}{2}=M
$$

So $\hat{\theta}_{prop}$ **is unbiased** for $M$.

![[Lec02_uniform_max_estimators.png]]

*Theory diagram (simulation, my own, not from the slides). With $M=100$ and $n=5$, the sample maximum (red) piles up just under 100 and averages about 83; $2\bar{X}$ (blue) is more spread out but averages 100.0. The simulation illustrates the algebra; it is not data from the course.*

> [!warning] Not a general rule
> Slide 96: is $2\bar{X}$ always an unbiased estimator of a distribution maximum? **No, only if $X\sim U(0,M)$.** The factor 2 relies on the mean being exactly $\frac{M}{2}$, which holds for a uniform starting at 0.

> [!note] Reconstructed from the slides
> The slides stop at unbiasedness of $2\bar{X}$. Two remarks that go beyond them, for exam context only. First, if $X$ is continuous $U(0,M)$ then $Var(2\bar{X})=\frac{4}{n}\cdot\frac{M^2}{12}=\frac{M^2}{3n}\to 0$, so $2\bar{X}$ is also consistent. Second, $2\bar{X}$ has a drawback: it can come out **below** the largest observed number, which is impossible for the true $M$. Better estimators exist but are not covered in this lecture.

## Summary

- **Point estimation:** sample $\to$ estimator $\to$ estimate of the parameter.
- A good estimator is **unbiased** ($E(\hat{\theta})=\theta$) and **consistent** ($Var(\hat{\theta})\to0$ as $n\to\infty$).
- A linearly biased estimator with $E=a+b\theta$ is repaired by $\frac{\hat{\theta}-a}{b}$.
- **Variance:** with known $\mu$, divide by $n$. With unknown $\mu$, dividing by $n$ gives $\frac{n-1}{n}\sigma^2$ (the sample average is closer to the data than $\mu$; the gap is $Var(\bar{X})=\frac{\sigma^2}{n}$), so use $S^2=\frac{\sum(X_i-\bar{X})^2}{n-1}$.
- **Standard deviation:** $S=\sqrt{S^2}$ is slightly biased downward but asymptotically unbiased, because the square root is not linear.
- **Proportion:** $\hat{p}=\frac{\sum X_i}{n}$ is unbiased with variance $\frac{p(1-p)}{n}$, hence consistent.
- **Uniform $U(0,M)$:** the sample maximum is biased low; $2\bar{X}$ is unbiased, but only for this distribution.
- Next session: Exercise 2, bring a laptop with Excel.

## Related notes

- [[Statistics B]] (course hub)
- Earlier: [[Lec_01-Point Estimation and Sampling Distributions]] (sampling distribution of $\bar{X}$, expectation and variance rules)
- Concepts: [[Point Estimation]], [[Estimator]], [[Unbiased Estimator]], [[Consistent Estimator]], [[Sample Variance]], [[Sample Standard Deviation]], [[Proportion Estimator]], [[Maximum Estimator for a Uniform Distribution]]
