---
title: "Two Independent Samples t Test Procedure"
subject: statistics-b
related_terms:
  - two-independent-samples-t-test
  - pooled-variance
  - critical-value
  - degrees-of-freedom
source_folder: statistics-b
ai_drafted: true
---

Use this procedure to compare the means of two independent groups when the population variances are unknown but can be assumed equal.

1. Verify the populations are normal and the variances are equal.
2. Define $H_1$ and the complementary $H_0$; choose $\alpha$.
3. Calculate $S^2_{pooled}$, then the test statistic $t_{\bar X-\bar Y}$.
4. Compare with $t_{n_X+n_Y-2}$: for a right-tailed test, reject $H_0$ if $t_{\bar X-\bar Y}>t_{critical}$ for the chosen $\alpha$.

## Common pitfalls

- The lecture's slide reads the critical value 1.676 from the 50 degrees of freedom row of a printed t table. The exact value for $df=58$ is about 1.672. The conclusion in the worked example is the same either way.

## Worked example

A manager randomly assigns 30 programmers to a pizza group ($X$: mean 27, sample SD 10) and 30 to a control group ($Y$: mean 24, sample SD 8), then counts lines of code written after lunch. Assume normality and equal variances.

$$
H_1:\ \mu_X-\mu_Y>0 \qquad H_0:\ \mu_X-\mu_Y\leq 0 \qquad \alpha=0.05
$$

$$
S_{pooled}^2=\frac{29\cdot 10^2+29\cdot 8^2}{30+30-2}=\frac{2900+1856}{58}=82
$$

$$
t_{\bar X-\bar Y}=\frac{27-24-0}{\sqrt{82\left(\frac{1}{30}+\frac{1}{30}\right)}}=\frac{3}{2.338}=1.283
$$

With $df=58$, the slide's one-tailed critical value is 1.676. Since $1.283<1.676$, $H_0$ is not rejected: there is no evidence that pizza improves programming.

See [[Lec_06-Two Sample Tests, Error Types and Power|Lec 06]].
