---
title: "Lec 04: Hypothesis Testing and the Z Test"
semester: 2
year: 1
course: "Statistics B"
lecture: 4
tags:
  - statistics-b
  - hypothesis-testing
  - significance-level
  - p-value
  - z-test
  - critical-region
subject: statistics-b
in_scope: true
---

# Lec 04: Hypothesis Testing and the Z Test

> Part of: [[Statistics B]]
> Key concepts: [[Hypothesis Testing Procedure]], [[Null Hypothesis]], [[Alternative Hypothesis]], [[Significance Level]], [[P-Value]], [[Single Sample Z Test]], [[Critical Value]], [[Critical Region]], [[Directional Hypothesis]], [[Non-Directional Hypothesis]], [[Normal Distribution CDF]]

## Where this lecture fits

The first three lectures were about **point estimation**: pick an estimator, take a sample, compute an estimate of a population parameter (see [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]], [[Lec_03-Maximum Likelihood Estimation]]). The recap slides at the start of the class restate the vocabulary:

- A [[Population]] is a distribution from which we randomly draw observations (heights of people in Israel, daily temperature in Herzliya, a die roll).
- An observation is one result of the random experiment "randomly choose from the population".
- Point estimation: **aim** is to learn the value of a population parameter, the **tool** is an estimator, the **procedure** is sample, then calculate the estimator, then read off the estimate.

This lecture switches aim. Instead of asking "what is the value?", we ask a **yes/no question about the world**. The plan was: the basic logic of hypothesis testing (with details fudged at first, filled in as we go), then the Z test.

> [!info] Why this matters
> Hypothesis testing is described as the basis of modern social sciences. Examples of yes/no questions: does a new medication cure cancer? Are kids more creative than adults? Do quarterly bonuses improve employee performance? The recipe is always: get data (for example from an experiment), then test a statistical hypothesis using the data.

## The basic logic

1. Check the **probability of the observed data given a hypothesis**.
2. If the data is unlikely given the hypothesis, **reject** the hypothesis.
3. If we reject one hypothesis, we support its **complement**.

The slide's everyday example: if I reject the hypothesis that I had breakfast, I support the hypothesis that I did not have breakfast.

> [!info] Statistical hypothesis (definition from the slides)
> A statistical hypothesis is a statement about the hypothetical value, or range of values, of a parameter in a population.

## Example 1: are you psychic?

The class ran a live experiment. Roll a 10-sided die 5 times; before each roll, guess the number; count the correct guesses. The statistic is the number of correct guesses, call it $X$.

**Step 1, the parameter.** $p$ = probability of a correct guess.

**Step 2, the hypotheses.**

| Hypothesis | Meaning | In terms of $p$ |
| --- | --- | --- |
| Default hypothesis (not psychic) | guessing blindly on a 10-sided die | $p = 0.1$ |
| Alternative hypothesis (psychic) | guessing better than chance | $p > 0.1$ |

On the way there the slides ask: how many correct guesses would you expect if you were psychic (all? some?) and if you were not? A psychic has no specific value of $p$, which matters below. A first draft of the alternative was "$p = ?$", then it was fixed to $p > 0.1$.

**Step 3, how will we know which to endorse?** Check the probability of the data given the hypothesis. Under the default hypothesis $H_0$ the number of correct guesses is binomial with $n = 5$, $p = 0.1$, so

$$
P(X = k \mid H_0) = \binom{5}{k} (0.1)^k (0.9)^{5-k}
$$

and what matters is the probability of a result **at least as good** as $k$:

$$
P(X \ge k \mid H_0) = \sum_{i=k}^{5} \binom{5}{i} (0.1)^i (0.9)^{5-i}
$$

The slide works out $k = 1$ in full: the sum of the terms for $i = 1,\dots,5$ equals $0.40951$ (equivalently $1 - 0.9^5$). The full table:

| $k$ | $P(X \ge k \mid H_0)$ |
| --- | --- |
| 0 | 1 |
| 1 | 0.40951 |
| 2 | 0.08146 |
| 3 | 0.00856 |
| 4 | 0.00046 |
| 5 | 0.00001 |

![[Lec04_psychic_tail_probs.png]]

*Theory diagram: the tail probabilities above, with the 0.05 line the class will use as its threshold.*

> [!tip] Reading the table
> Guessing at least 1 right happens 41% of the time by pure luck, so it proves nothing. Guessing at least 3 right happens under 1% of the time by luck, which is "unlikely enough" to say that $H_0$ is not plausible. The question on the slide, "for which values of $k$ will we say $H_0$ is rejected as not plausible?", needs a cut-off. That cut-off is the significance level.

> [!warning] Why not just test "$p = $ something" for the alternative?
> The slides ask: can we do the same calculation with $H_1: p > 0.1$? **No.** $H_1$ does not give a specific value of $p$, so there is no distribution of the data to compute under it. This is why we always compute under $H_0$, which does give a specific value (this is also why $H_0$ is the one containing the equals sign).

### Significance level

> [!info] Significance level $\alpha$
> The **predefined** probability below which we consider a result unlikely enough that we reject the underlying hypothesis. Commonly marked $\alpha$.

Commonly used values:

| Field | $\alpha$ |
| --- | --- |
| Social sciences | 0.05 |
| Social sciences (strict) | 0.01 |
| Physics | 0.00...1 (extremely small) |

With $\alpha = 0.05$ the class decision for the psychic game is: reject $H_0$ when $P(X \ge k \mid H_0) < 0.05$, which first happens at $k = 3$ (0.00856). So 3 or more correct guesses out of 5 is evidence of "psychic"; 2 correct (0.08146) is not enough. The slide then asks "Are there any psychics in the audience?" and reads off each volunteer's score against this table (the live results are not recorded in the slides).

## The hypothesis testing procedure

The "first draft" of the procedure, then the version refined through Example 2 and used for the rest of the lecture:

> [!example] Hypothesis testing procedure (we have a yes/no question about the world)
> 1. What is the **parameter** in question?
> 2. Define the null hypothesis $H_0$ and the alternative hypothesis $H_1$. They should be **complementary events**, so that if $H_0$ is false, $H_1$ must be true.
> 3. Determine the **distribution of an observed sample statistic under $H_0$**.
> 4. **Collect data.**
> 5. If the observed value of the sample statistic is unlikely (probability less than $\alpha$) in its distribution given $H_0$, reject $H_0$ and conclude $H_1$ is supported. If it is not unlikely given $H_0$, there is **no evidence either way**.

Two footnotes added later in the lecture: determine $\alpha$ **before** looking at the data, and "unlikely" means the probability of the observed value **or a value more extreme**.

> [!warning] Failing to reject is not proving $H_0$
> If the data is not unlikely under $H_0$ we have "no evidence either way". We never conclude that $H_0$ is true; we only say we did not find support for $H_1$.

Details to keep straight: **$H_0$** is the default, it pins down a specific parameter value (or, for one-sided problems, a range ending at that value), and we assume it is true when computing probabilities. **$H_1$** is what the data would support if we reject $H_0$.

## Example 2: is my coin unfair?

**Data:** 65 heads in 100 flips.

1. **Parameter:** $p$, probability of heads.
2. **Hypotheses:** $H_0$: the coin is fair, $p = 0.5$. $H_1$: the coin is unfair (complement).
3. **Distribution of the statistic under $H_0$.** The statistic is the number of heads, $Hd$. Under $H_0$,

$$
Hd \sim B(100, 0.5)
$$

which the slides approximate with a normal using the binomial mean and variance, $\mu = np$ and $\sigma^2 = np(1-p)$:

$$
Hd \sim N(\mu = 50,\ \sigma^2 = 100 \cdot 0.5 \cdot 0.5 = 25)
$$

> [!note] Reconstructed from the slides
> The slides write the normal approximation without naming the rule; it is the standard normal approximation of a binomial (large $n$), the same idea as the [[Central Limit Theorem]].

4. **Collect data:** $Hd = 65$.
5. **Is the data unlikely?** The slides first try $P(Hd = 65 \mid H_0) < 0.05$ and spot the problem: **the more possible values the statistic has, the lower the probability of any single value**, so a single point probability is always tiny. This is why we use the probability of the observed value **or one more extreme**:

$$
P(Hd \ge 65 \mid Hd \sim N(50, 25)) \overset{?}{<} 0.05
$$

Standardise (subtract the mean, divide by the standard deviation $\sqrt{25} = 5$) and use the Z table:

$$
Z_{65} = \frac{65 - \mu}{\sigma} = \frac{65 - 50}{\sqrt{25}} = \frac{15}{5} = 3
$$

$$
P(Z \ge 3) = 1 - \Phi(3) = 1 - 0.9987 = 0.0013
$$

![[Lec04_coin_z_tail.png]]

*Theory diagram: the standard normal with the area to the right of $Z = 3$.*

The slide shows the standard normal CDF table ([[Normal Distribution CDF]]) and reads $\Phi(3.0) = 0.9987$.

**Conclusion (from the slide):** the probability of getting 65 or more heads if the coin is fair is 0.0013, less than the predetermined $\alpha = 0.05$. We reject $H_0$: it is not plausible that the coin is fair. We conclude the coin is unfair.

> [!info] p-value
> The probability of getting the observed sample statistic **or a more extreme one**, given the null hypothesis, is the [[P-Value]]. Here $p = 0.0013$. The p-value is the main result reported in scientific research. Decision rule: reject $H_0$ if $p < \alpha$.

> [!warning] Check the tail
> The slide computes only the upper tail $P(Hd \ge 65)$ even though the question ("unfair") allows too few heads as well. The lecture returns to this under one-tailed versus two-tailed tests at the end; for a two-sided question the proper p-value would double this tail.

> [!note] Reconstructed from the slides
> The "double the tail" remark is my reading of the later two-tailed section applied back to this example, not something the Example 2 slides say.

## The Z test

"The previous example was a Z test!" The test is usable when:

- the distribution of the test statistic under $H_0$ is **normal**, and
- the variance of the test statistic is **known**.

Test statistic:

$$
Z_{\bar{X}} = \frac{\bar{X} - \mu_{H_0}}{\sigma_{\bar{X}}}
$$

Procedure: find the probability of getting $Z_{\bar{X}}$ or more in the standard normal (Z) distribution. Decision rule: if $P(Z \ge Z_{\bar{X}}) < \alpha$, reject $H_0$.

## Example 3: are economics students smarter?

IQ in the general population is normal with expected value 100 and standard deviation 15, $X \sim N(100, 15)$ (the slides write the standard deviation as the second argument here). A sample of $n = 16$ economics students has average $\bar{X} = 115$. Question: are economics students smarter than the general population?

1. **Parameter:** $\mu_{economist\ IQ}$, the expected IQ of economics students.
2. **Hypotheses.** "Smarter" means $H_1: \mu_{economist\ IQ} > 100$, so the complement is $H_0: \mu_{economist\ IQ} \le 100$. For the calculation we use the boundary value $H_0: \mu = 100$.
3. **Distribution under $H_0$.** The statistic is $\bar{X}$, and $\bar{X} \sim N(\mu, \sigma^2/n)$. With $\mu = 100$, $\sigma = 15$, $n = 16$:

$$
\bar{X} \sim N\left(100, \frac{15^2}{16}\right)
$$

4. **Data:** $\bar{X} = 115$.
5. **How unlikely?**

$$
P(\bar{X} \ge 115) = P\left(Z \ge \frac{115 - 100}{\sqrt{15^2/16}}\right)
$$

> [!warning] Slide inconsistency, check with the lecturer
> The slides standardise with numerator $115 - 100 = 15$ but then continue with $5 / 3.75$, giving $Z = 1.33$ and $p = 1 - \Phi(1.33) = 0.0918$. With the stated data ($\bar{X} = 115$, $\sigma_{\bar{X}} = 15/\sqrt{16} = 3.75$) the statistic would be $15/3.75 = 4$, with $p \approx 0.00003$ and $H_0$ rejected. The slide's later numbers ($5/3.75$, $1.33$, $0.0918$, "not significant") all fit one reading, $\bar{X} - 100 = 5$ (a sample mean of 105). They are reproduced below as shown, but one of the two inputs is probably a typo.

Using the slide's numbers:

$$
P(\bar{X} \ge 115) = P\left(Z \ge \frac{5}{3.75}\right) = 1 - \Phi(1.33) = 0.0918 > 0.05
$$

**Conclusion (from the slide):** according to this data we do not find support for the claim that economics students are smarter than the general population. $0.0918 > \alpha = 0.05$, so we do not reject $H_0$.

## Statistical tests overview

> [!info] Each statistical test is defined by four things
> 1. Requirements / assumptions
> 2. Type of question answered
> 3. Test statistic
> 4. Distribution given $H_0$

### Single Sample Z Test

| Item | Single sample Z test |
| --- | --- |
| Requirements | the distribution of the average under $H_0$ is normal; the variance is known |
| Question answered | questions about the expected value of a **single population** |
| Test statistic | $Z_{\bar{X}} = \dfrac{\bar{X} - \mu_{H_0}}{\sigma_{\bar{X}}} = \dfrac{\bar{X} - \mu_{H_0}}{\sigma_X / \sqrt{n}}$ |
| Distribution given $H_0$ | $Z_{\bar{X}} \sim N(0, 1)$ |

The [[Single Sample Z Test]] procedure:

1. **Verify** that (a) the distribution of the average under $H_0$ is normal: either $n \ge 30$ (by the [[Central Limit Theorem]]) or $X \sim N(\cdot,\cdot)$ itself, and (b) the variance is known.
2. Define $H_1$ and the complementary $H_0$, and select $\alpha$.
3. Calculate the test statistic $Z_{\bar{X}}$.
4. Check the Z distribution: if $P(Z \ge Z_{\bar{X}}) < \alpha$, reject $H_0$ (for a left-tailed $H_1$ use the lower tail, see below).

### Example: Terry's sprinters

Terry tests a new way of teaching sixth graders to sprint. From extensive experience, with the usual method the 100 m dash time has $\mu = 13$ seconds and $\sigma = 3$. A random sample of $n = 30$ kids is taught the new method; their average time is $\bar{X} = 12$ seconds. Can Terry conclude that the new method is better?

- **Check assumptions.** The distribution of the average is normal because $n = 30 \ge 30$. The variance is known: $\sigma = 3$ from previous experience.
- **Hypotheses.** Better means **faster**, i.e. a **lower** time: $H_1: \mu < 13$, complement $H_0: \mu \ge 13$.
- **Test statistic.**

$$
Z_{\bar{X}} = \frac{12 - 13}{3 / \sqrt{30}} = -1.83
$$

(more precisely $-1.826$, rounded to the table value $-1.83$.)

> [!warning] Which probability to check?
> The slides first compute $P(Z \ge -1.83) = 1 - 0.0336 = 0.9664$ and ask "is this the right probability to check?" **No.** $H_1$ is $\mu < 13$, so "more extreme" means **smaller**, and the right probability is the **lower tail**:

$$
P(Z \le -1.83) = 0.0336
$$

The table used here is the negative-$z$ half of the standard normal CDF table (row $-1.8$, column $.03$ gives $.0336$).

**Conclusion:** $0.0336 < 0.05$, so the probability of his result given $H_0$ is less than 0.05. Terry can conclude that the result supports the claim that the new method is better than the usual one.

## Critical regions and critical values

An equivalent way to run the test, without computing a p-value: draw the distribution of $Z_{\bar{X}}$ under $H_0$ (centred at $\mu_{H_0}$) and mark the **critical region**, the tail area of total probability $\alpha$ where we would reject $H_0$. Its boundary is the **critical value**. We reject if the observed $Z_{\bar{X}}$ lands inside the critical region.

### Types of hypotheses

| Type | $H_1$ | Critical region |
| --- | --- | --- |
| [[Directional Hypothesis]] (one tailed) | $\mu <$ or $\mu >$ a value | all of $\alpha$ in one tail |
| [[Non-Directional Hypothesis]] (two tailed) | $\mu \ne$ a value | $\alpha$ split, $\alpha/2$ in each tail |

![[Lec04_critical_regions.png]]

*Theory diagram: critical regions for $\alpha = 0.05$ for the three kinds of $H_1$.*

Critical values for $\alpha = 0.05$ (read from the Z table):

| $H_1$ | Rejection region | Critical value(s) |
| --- | --- | --- |
| $\mu >$ value (right) | $P(Z > Z_{crit}) = 0.05$ | $Z_{crit} = 1.65$ |
| $\mu <$ value (left) | $P(Z < Z_{crit}) = 0.05$ | $Z_{crit} = -1.65$ |
| $\mu \ne$ value | $0.025$ in each tail | $-1.96$ and $1.96$ |

(The slides use the table-rounded 1.65; the more exact value is 1.645.)

> [!note] Slide labelling
> On the two-tailed slide the lecturer labels the lower tail "critical right" and the upper tail "critical left", which looks like a mix-up. The table above gives the geometry: $-1.96$ is the left boundary and $1.96$ the right boundary. Slides 18, 139 and 166 are figure-only (a live-experiment title slide, the Z table and the critical-region sketch); the content above is taken from the neighbouring slides.

### Example: three researchers and dairy

Height is normal with $\mu = 175$ cm and $\sigma = 10$. Three researchers study life-long vegans (no dairy). A sample of $n = 20$ vegans has $\bar{X} = 171$. What does each conclude at $\alpha = 0.05$?

$$
Z_{\bar{X}} = \frac{171 - 175}{10 / \sqrt{20}} \approx -1.79
$$

> [!note] Reconstructed from the slides
> The slides show only the researchers' claims and each conclusion; the test statistic $\approx -1.79$ is computed here from the given numbers, and the critical values are those on the critical-value slides.

| Researcher | Claim | $H_1$ | Critical value | Is $-1.79$ in the critical region? | Conclusion (slides) |
| --- | --- | --- | --- | --- | --- |
| 1 | avoiding dairy **increases** height | $\mu > 175$ | $1.65$ (right) | No | $H_0$ not rejected, no evidence to support claim |
| 2 | avoiding dairy **decreases** height | $\mu < 175$ | $-1.65$ (left) | Yes, $-1.79 < -1.65$ | $H_0$ rejected, there is evidence to support claim |
| 3 | avoiding dairy **influences** height | $\mu \ne 175$ | $\pm 1.96$ | No, $\lvert -1.79 \rvert < 1.96$ | $H_0$ not rejected, no evidence to support claim |

> [!tip] The same data, three answers
> The one-tailed researcher who guessed the right direction puts all of $\alpha$ in the correct tail and gets significance; the two-tailed researcher splits $\alpha$ across both tails, so the cut-off moves out to 1.96 and the same data falls short. You must choose the direction **before** seeing the data (as with $\alpha$).

## Summary

- **Hypothesis testing** answers yes/no questions: assume $H_0$, compute the probability of the observed data (or more extreme), reject $H_0$ if it is below $\alpha$ and conclude $H_1$ is supported.
- If the data is not unlikely under $H_0$ there is **no evidence either way**; this is not a proof of $H_0$.
- The procedure: parameter, $H_0$ and complementary $H_1$, distribution of the statistic under $H_0$, data, compare probability with $\alpha$ (chosen in advance; 0.05 and 0.01 are standard in social sciences).
- The **p-value** is the probability of the observed statistic or a more extreme one under $H_0$.
- **Z test** requires a normal average under $H_0$ and a known variance: $Z_{\bar{X}} = (\bar{X} - \mu_{H_0}) / (\sigma_X / \sqrt{n}) \sim N(0,1)$.
- The tail checked depends on $H_1$: right tail for $>$, left tail for $<$, both tails (each $\alpha/2$) for $\ne$. Critical values at $\alpha = 0.05$: $1.65$, $-1.65$, $\pm 1.96$.
- Worked examples: psychic (binomial, $k \ge 3$), unfair coin ($Z = 3$, $p = 0.0013$), economics IQ (slide values give $p = 0.0918$, not rejected; the slide's $115$ versus $5/3.75$ is inconsistent), Terry's sprinters ($Z = -1.83$, $p = 0.0336$, rejected), dairy researchers (only the left-tailed one rejects).
- Next week: more hypothesis testing.

## Related notes

- [[Statistics B]]
- [[Lec_03-Maximum Likelihood Estimation]]
- [[Lec_05-Z Tests, t Tests and Two-Sample Tests]]
- [[Lec_06-Two Sample Tests, Error Types and Power]]
- [[Hypothesis Testing Procedure]], [[P-Value]], [[Critical Value]], [[Single Sample Z Test]]
