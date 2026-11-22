---
title: "Lec 10: Extra Credit Project and Test Selection Recap"
semester: 2
year: 1
course: "Statistics B"
lecture: 10
instructor: Asael Sklar
tags:
  - statistics-b
  - hypothesis-testing
  - data-cleaning
  - test-selection
  - cohens-d
  - excel
  - recap
subject: statistics-b
in_scope: true
---

# Lec 10: Extra Credit Project and Test Selection Recap

> Part of: [[Statistics B]]
> Key concepts: [[Data Cleaning]], [[Two Independent Samples t Test]], [[Cohen's d]], [[Hypothesis Testing Procedure]], [[Single Sample Z Test]], [[Single Sample t Test]], [[Two Samples Z Test]], [[Single Sample Z Test for Proportion]], [[Two Samples Z Test for Proportions]], [[F Test for Equality of Variances]], [[Pooled Variance]], [[P-Value]], [[Critical Value]]

Statistics for Economists II, Class 10 (lecturer: Asael Sklar). A short, practical session: the **extra-credit assignment** ("test a real hypothesis" using the World Values Survey), a fully worked example, advice on **data cleaning**, then a one-page recap of **which test to use** and the **Excel functions** needed. Only the first half is new material.

## 1. Extra-credit assignment: test a real hypothesis

Slides 3 to 11. Task: using the **World Values Survey (WVS), 7th wave**, pick a question you find interesting, run a hypothesis test to answer it, and submit **one PowerPoint slide** on Moodle (due 23:00 on the day of the class, 10 June 2025).

> [!info] About the dataset
> - A global survey of what people value (and more), freely available after registration.
> - 7 waves since 1981. The 7th wave covers **66 countries** and **94,287 respondents**.
> - The data file is linked from slide 6 (QR code, short link). The **questionnaire and code book** are on Moodle under *Extra credit assignments*.
> - Slide 8 shows the questionnaire: a contents page (core questionnaire sections such as social values, happiness, trust, economic values, corruption, religion, politics, demographics) and a page of questions with their answer codes.

### Required submission format

The single slide must contain these headings, in order (slide 9):

1. **Question**
2. **Hypotheses**: $H_1$ and $H_0$
3. **Test**
4. **Relevant sample statistics**
5. **Test statistic**
6. **Critical value / P value**
7. **Conclusion**
8. **Effect size** ([[Cohen's d]])

This is just the five-step [[Hypothesis Testing Procedure]] plus an effect size.

### Worked example: do women value family more than men?

The data come from Q1 (importance of family, coded 1 = very important to 4 = not at all important) and Q260 (respondent's sex, 1 = male, 2 = female).

> [!warning] Read the scale before choosing the direction
> **A low number means "more important".** So "women value family more than men" means women have a **lower** mean score. That is why the lecturer writes the alternative as men minus women **greater than** zero.

| Item | Slide's answer |
| --- | --- |
| Question | Do women value family more than men? |
| $H_1$ | $\mu_{men} - \mu_{women} > 0$ |
| $H_0$ | $\mu_{men} - \mu_{women} \le 0$ |
| Test | Two independent samples $t$ test |
| Men | mean 1.131, SD 0.394, $n = 44403$ |
| Women | mean 1.099, SD 0.338, $n = 49780$ |

Test statistic (formula from [[Two Independent Samples t Test]]):

$$
t_{\bar{X}-\bar{Y}} = \frac{\bar{X}-\bar{Y}-(\mu_X-\mu_Y)_{H_0}}{\sqrt{S^2_{pooled}\left(\frac{1}{n_X}+\frac{1}{n_Y}\right)}} = \frac{1.131-1.099}{\sqrt{0.133783496\left(\frac{1}{44403}+\frac{1}{49780}\right)}} = 13.28
$$

- **Critical value**: $t_{critical}(94181) = 1.645$ (one-tailed, 5%; $94181 = n_X + n_Y - 2$).
- **Conclusion**: $13.28 > 1.645$, so reject $H_0$. There is evidence that women value family significantly more than men.
- **Effect size**: $d = 0.087$.

> [!note] Rounding check
> Recomputing from the rounded means and SDs on the slide gives $S^2_{pooled} \approx 0.13357$ and $t \approx 13.4$, a little different from the slide's 13.28. The slide used unrounded sample values, so small gaps are expected. The conclusion is the same either way.

> [!tip] Significant is not the same as large
> With about 94,000 respondents even a tiny gap in means is hugely significant. The effect size $d = 0.087$, here $\frac{1.131-1.099}{\sqrt{S^2_{pooled}}} \approx 0.032/0.366$, is **very small** (well under the usual 0.2 "small" benchmark). That is exactly why the template asks for Cohen's $d$ next to the test result. See [[Lec_06-Two Sample Tests, Error Types and Power]].

## 2. Practicalities: data cleaning

Slide 12 (the picture is the questionnaire's missing-codes box).

> [!warning] Check before you calculate
> - **Check that every value you use is in the expected range.** WVS codes missing answers as **negative numbers**: $-1$ don't know, $-2$ no answer/refused, $-3$ not applicable, $-5$ missing for other reasons. **Remove negative values**, or they will drag the mean down and wreck the standard deviation.
> - **Understand the scale.** What does the range of answers mean? Is 1 low or high? (In the example above 1 is the *most* important, so the hypothesis direction flips.)

## 3. Recap: which test for which question

Slides 13 to 25 repeat earlier lectures, so each is one line. The organising idea is the **question type**, which fixes the test, the test statistic and its distribution under $H_0$.

| Question type | Test | Test statistic distribution under $H_0$ | Covered in |
| --- | --- | --- | --- |
| Expected value of one population, $\sigma$ known | [[Single Sample Z Test]] | $N(0,1)$ | Lec 5 |
| Expected value of one population, $\sigma$ unknown | [[Single Sample t Test]] | $t_{n-1}$ | [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] |
| Difference of expected values, variances known | [[Two Samples Z Test]] | $N(0,1)$ | [[Lec_06-Two Sample Tests, Error Types and Power]] |
| Difference of expected values, variances unknown | [[Two Independent Samples t Test]] | $t_{n_X+n_Y-2}$ | Lec 6 |
| Proportion of one population | [[Single Sample Z Test for Proportion]] | $N(0,1)$ | [[Lec_07-Tests for Proportions and Variances]] |
| Difference in proportions | [[Two Samples Z Test for Proportions]] | $N(0,1)$ | Lec 7 |
| Equality of two variances | [[F Test for Equality of Variances]] | $F(n_X-1, n_Y-1)$ | Lec 7 |

> [!note] The F test is marked "not for practical use"
> Slide 15 carries an asterisk: the variance-equality test is part of the theory but not a tool the lecturer expects you to rely on in practice.

Non-parametric tests (slides 23 and 24, from Lec 9), with the same four-step shape:

| Test | $E$ under $H_0$ | Condition | Statistic and distribution |
| --- | --- | --- | --- |
| $\chi^2$ goodness of fit | $E_i$ implied by $H_0$ | all $E_i \ge 5$ | $\chi^2 = \sum_{i=1}^{n}\frac{(O_i-E_i)^2}{E_i}$, compared with $\chi^2_{n-1}$ |
| $\chi^2$ independence | $E_{i,j} = p(X_i)\,p(Y_j)\,N$ | all $E_{i,j} \ge 5$ | $\chi^2 = \sum_{i=1}^{n}\sum_{j=1}^{m}\frac{(O_{i,j}-E_{i,j})^2}{E_{i,j}}$, compared with $\chi^2_{(n-1)(m-1)}$ |

Reject $H_0$ when $\chi^2$ exceeds the critical value. ($n$ here is the number of categories.)

### Cohen's d beyond the single sample Z test

Slide 25 collects the effect-size formula for each mean test (all are a difference in expected values measured in standard deviation units):

| Test | Cohen's $d$ |
| --- | --- |
| Single sample Z ($\sigma$ known) | $d = \frac{\mu_{H_1}-\mu_{H_0}}{\sigma_X}$ |
| Single sample $t$ | $d = \frac{\mu_{H_1}-\mu_{H_0}}{S_X}$ |
| Two samples Z | $d = \frac{\mu_X-\mu_Y}{\sigma}$ |
| Two independent samples $t$ | $d = \frac{\mu_X-\mu_Y}{S_{pooled}}$ |

> [!example] Recap of the example
> For the WVS example the two independent samples $t$ row applies, giving $d = 0.087$ in section 1.

## 4. Useful Excel functions

Slide 26, for pulling group statistics out of a raw survey column:

| Function | Use |
| --- | --- |
| `=AVERAGEIF(criterion range, criterion, sample range)` | Mean of the sample values where the criterion holds, e.g. the mean family score for men |
| `=COUNTIF(criterion range, criterion)` | Group size $n$ |
| `=STDEV.S(IF(criterion range = criterion, sample range))` | Sample standard deviation $S$ of one group |
| `=SQRT()` | Square root, for the test statistic |

> [!note] Reconstructed from the slides
> The `STDEV.S(IF(...))` form is an array formula in many Excel versions (confirm with Ctrl+Shift+Enter in older Excel). The slide prints it with slightly unbalanced brackets, so check the syntax when you type it. For the WVS example, the three first functions give the six sample statistics in the table above.

## 5. Next week

Slide 27: **linear regression**. (Slide 28 is a meme: "when p-value < 0.05, reject the null hypothesis like a boss".)

## Summary

- Extra credit: one slide, the fixed template (question, $H_1$/$H_0$, test, statistics, statistic, critical value or $p$ value, conclusion, Cohen's $d$).
- Always **clean** (drop negative missing codes) and **read the scale** (1 may mean "most important") before setting the direction of $H_1$.
- Worked example: women value family more than men, $t \approx 13.28$ versus $1.645$, reject $H_0$, but $d = 0.087$ is tiny.
- Test choice is driven by the question type: means, proportions, variances, or categorical counts ($\chi^2$).
- Excel: `AVERAGEIF`, `COUNTIF`, `STDEV.S(IF())`, `SQRT`.

## Related notes

- [[Statistics B]]
- [[Lec_05-Z Tests, t Tests and Two-Sample Tests]]
- [[Lec_06-Two Sample Tests, Error Types and Power]]
- [[Lec_07-Tests for Proportions and Variances]]
