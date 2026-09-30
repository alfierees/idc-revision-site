# RAG retrieval benchmark and reference answers

This benchmark tests **retrieval only**. No answer model sees these questions during scoring. A hit means that at least one manually selected supporting site document appears in the first N chunks. It does not prove that every retrieved chunk contains the exact answer span or that generated answers are correct. Equivalent lectures, term entries and source PDFs may answer a question without counting as an exact-source hit.

## Chunk recipes

Fixed uses roughly 1,100-character windows with 160-character overlap. Paragraph groups neighbouring paragraphs to roughly 1,450 characters and carries short context forward. Structure follows headings and question boundaries, adds the document title and question where needed, then caps the body near 1,800 characters with overlap. These are complete recipe comparisons; their sizes are not identical, so the result cannot isolate boundary type alone.

| Recipe | Chunks | Mean characters/chunk |
| --- | ---: | ---: |
| fixed | 10,361 | 1,002 |
| paragraph | 8,153 | 1,141 |
| structure | 10,558 | 997 |

## Results

| Strategy | Search scope | Hit@1 | Hit@5 | MRR@10 | Mean top-5 context |
| --- | --- | ---: | ---: | ---: | ---: |
| fixed | subject | 6/24 | 19/24 | 0.475 | ~1265 tokens |
| fixed | global | 6/24 | 18/24 | 0.454 | ~1273 tokens |
| paragraph | subject | 7/24 | 20/24 | 0.501 | ~1431 tokens |
| paragraph | global | 7/24 | 20/24 | 0.501 | ~1431 tokens |
| structure | subject | 9/24 | 19/24 | 0.537 | ~1234 tokens |
| structure | global | 9/24 | 19/24 | 0.531 | ~1271 tokens |

The three strategies use the same corpus, embedding model, questions and vector index. Subject search applies the current course as a metadata filter; global search has no filter. Hit@5 and MRR@10 are exact-source retrieval measures. The context estimate uses four characters per token.

## Results by subject (Hit@5)

| Subject | Fixed | Paragraph | Structure |
| --- | ---: | ---: | ---: |
| accounting | 3/4 | 3/4 | 3/4 |
| econometrics | 2/4 | 2/4 | 3/4 |
| machine-learning | 4/4 | 4/4 | 2/4 |
| macro-economics | 4/4 | 4/4 | 4/4 |
| micro | 3/4 | 3/4 | 4/4 |
| digital-marketing | 3/4 | 4/4 | 3/4 |

## Selection

The leading exact-source Hit@5 recipe is **paragraph** (20/24). Paragraph reaches 20/24 and structure reaches 19/24. Structure puts a named reference page first in 9/24 cases (paragraph: 7/24), with MRR@10 0.537 and about 1234 tokens of top-five context. This small sample **does not establish a definitive winner**. The live tutor uses **structure** because it usually brings supporting material nearer the top while keeping the prompt smaller. All three recipes remain indexed for comparison.

## Manual answer-bearing review

I read the first five retrieved chunks for each paragraph and structure exact-source miss. **All four paragraph misses and all five structure misses contained an answer-bearing alternative**. The Accounting SAFE calculation appears in the recap and original assignment solution; ML data leakage appears in the lecture and preparation question; the KNN scaling explanation appears in the course slide deck. These nine judgements are an inspection of the retrieved text, not a second blinded benchmark or a test of generated answers. The exact-source metric is deliberately stricter than answer coverage.

| Question | Recipe | First answer-bearing alternative | Rank |
| --- | --- | --- | ---: |
| acc-02 | paragraph | Session 9 course recap | 1 |
| econ-03 | paragraph | Practice exam explanation of within-person demeaning | 3 |
| econ-04 | paragraph | DiD past-paper explanation of parallel trends | 1 |
| micro-01 | paragraph | EX-2 original solution, moral-hazard wedge of 8 shekels | 4 |
| acc-02 | structure | Assignment 1 original solution workbook | 1 |
| econ-03 | structure | Fixed-effects lecture slide text | 5 |
| ml-03 | structure | ML data-processing lecture text | 1 |
| ml-04 | structure | Classification/KNN lecture slide text | 5 |
| dm-03 | structure | Lee and Theokary reading summary | 5 |

## Top-five misses by subject

- **econ-04 / fixed:** expected lectures/econometrics/lec-10-difference-in-differences; top result: source/econometrics/9e7c9a6eba9161f205aa (Lec_11-Difference-in-Differences II (Dynamic DiD)).
- **econ-02 / fixed:** expected lectures/econometrics/lec-04-instrumental-variables; top result: terms/econometrics/instrument-relevance (Instrument Relevance).
- **acc-02 / fixed:** expected problem-sets/accounting/assignment-1#2; top result: lectures/accounting/session-9-recap (Session 9 — Course Recap (Worked Exercises)).
- **dm-03 / fixed:** expected lectures/digital-marketing/lec-09b-superstar-influencer; top result: terms/digital-marketing/emotional-contagion (Emotional Contagion).
- **micro-01 / fixed:** expected problem-sets/micro/ex-2-micro-3#1 or recipes/micro/actuarially-fair-premium; top result: problem-sets/micro/ex-2-micro-3#3d (EX-2 · Question 3d).
- **acc-02 / paragraph:** expected problem-sets/accounting/assignment-1#2; top result: lectures/accounting/session-9-recap (Session 9 — Course Recap (Worked Exercises)).
- **econ-03 / paragraph:** expected lectures/econometrics/lec-08-fixed-effects-in-panel-data; top result: source/econometrics/1068efea58ca3ae5673d (Econometrics_CheatSheet_1_RQ_Playbook).
- **econ-04 / paragraph:** expected lectures/econometrics/lec-10-difference-in-differences; top result: source/econometrics/8baef9d942596d305243 (PP_06-Cooperation & Punishment (2026 Moed A)).
- **micro-01 / paragraph:** expected problem-sets/micro/ex-2-micro-3#1 or recipes/micro/actuarially-fair-premium; top result: problem-sets/micro/ex-2-micro-3#3d (EX-2 · Question 3d).
- **econ-03 / structure:** expected lectures/econometrics/lec-08-fixed-effects-in-panel-data; top result: terms/econometrics/individual-fixed-effect (Individual Fixed Effect).
- **acc-02 / structure:** expected problem-sets/accounting/assignment-1#2; top result: source/accounting/13c8152e3542d9d91d3d (assignment-1-solution).
- **ml-03 / structure:** expected exam-prep/machine-learning/loan-pipeline-plain-english or exam-prep/machine-learning/loan-pipeline-code-walkthrough; top result: source/machine-learning/8eb7b7f17f567744829b (Lec_07-Performance Measures & Data Processing).
- **ml-04 / structure:** expected lectures/machine-learning/lec-05-model-selection-knn or lectures/machine-learning/lecture-3-classification-knn-random-tree; top result: source/machine-learning/08f8d50dfdfa53b63afc (Lec_02-Linear Regression).
- **dm-03 / structure:** expected lectures/digital-marketing/lec-09b-superstar-influencer; top result: terms/digital-marketing/emotional-contagion (Emotional Contagion).

## Gold questions and answers

### acc-01 · accounting

**Question:** What sequence should I follow to decide when a customer contract produces revenue?

**Reference answer:** Identify the contract, identify its distinct performance obligations, determine the transaction price, allocate that price to the obligations, and recognise revenue as each obligation is satisfied. Collectibility must be probable for a contract to qualify.

**Supporting page:** `recipes/accounting/applying-the-asc-606-ifrs-15-five-step-model`; `lectures/accounting/session-8-revenue-recognition`

### acc-02 · accounting

**Question:** In Assignment 1, why does Investor A convert their SAFE at $50 per share?

**Reference answer:** The $5 million valuation cap is lower than the $8 million pre-money valuation. Dividing the $5 million cap by 100,000 founder shares gives a $50 conversion price.

**Supporting page:** `problem-sets/accounting/assignment-1#2`

### acc-03 · accounting

**Question:** After acquiring a company, how is goodwill calculated and what happens to it afterward?

**Reference answer:** Goodwill is consideration paid plus the fair value of non-controlling interest, less the fair value of identifiable net assets. Under IFRS it is not amortised; it is tested for impairment annually.

**Supporting page:** `lectures/accounting/session-7-business-combination`

### acc-04 · accounting

**Question:** Why is the start-up DCF valuation in Assignment 3 so sensitive to WACC?

**Reference answer:** The five explicit forecast years are cash negative, so most estimated value comes from terminal value. A small change in the discount rate or terminal growth rate therefore moves the valuation substantially.

**Supporting page:** `problem-sets/accounting/assignment-3#2`

### econ-01 · econometrics

**Question:** Why do I need robust standard errors for a linear probability model?

**Reference answer:** The binary outcome makes the conditional error variance p(x)(1-p(x)), which changes with x. Conventional homoskedastic OLS standard errors are therefore unreliable; heteroskedasticity-robust standard errors correct inference, though the LPM can still predict outside zero to one.

**Supporting page:** `lectures/econometrics/lec-02-linear-probability-model-lpm`

### econ-02 · econometrics

**Question:** What do relevance and the exclusion restriction each require of an instrumental variable?

**Reference answer:** Relevance requires the instrument to predict the endogenous regressor. Exclusion requires it to affect the outcome only through that regressor, not by another direct path or a shared omitted cause.

**Supporting page:** `lectures/econometrics/lec-04-instrumental-variables`

### econ-03 · econometrics

**Question:** What comparison identifies an effect in an individual fixed-effects model?

**Reference answer:** It uses within-individual changes over time, comparing an individual with their own average. Stable characteristics of that individual are removed, unlike pooled between-person comparisons.

**Supporting page:** `lectures/econometrics/lec-08-fixed-effects-in-panel-data`

### econ-04 · econometrics

**Question:** What does parallel trends mean in difference-in-differences?

**Reference answer:** Without treatment, the treated and control groups would have followed the same average outcome trend. It does not require their outcome levels to be equal; it supports using the control group's change as the treated group's counterfactual change.

**Supporting page:** `lectures/econometrics/lec-10-difference-in-differences`

### ml-01 · machine-learning

**Question:** Why is 86% accuracy an unconvincing result on the loan-default notebook?

**Reference answer:** Only 14% of loans default, so a classifier that predicts no defaults already achieves 86% accuracy while catching zero defaulters. Evaluate against that baseline and inspect recall, precision, and the confusion matrix for the default class.

**Supporting page:** `exam-prep/machine-learning/loan-pipeline-plain-english`; `exam-prep/machine-learning/loan-pipeline-code-walkthrough`

### ml-02 · machine-learning

**Question:** Which loan columns leak information that would not exist at application time?

**Reference answer:** Days late and collections involvement depend on later repayment history. Including them at application time gives the model future information and inflates its apparent test performance.

**Supporting page:** `exam-prep/machine-learning/loan-pipeline-plain-english`

### ml-03 · machine-learning

**Question:** Why must I split the loan data before fitting the imputer and scaler?

**Reference answer:** Fitting either transformation on the whole dataset lets the test set influence the learned mean or scale. Split first, fit the imputer and scaler on training data only, and apply those fitted transformations to validation and test data.

**Supporting page:** `exam-prep/machine-learning/loan-pipeline-plain-english`; `exam-prep/machine-learning/loan-pipeline-code-walkthrough`

### ml-04 · machine-learning

**Question:** Why does feature scaling matter for k-nearest neighbours?

**Reference answer:** KNN compares distances, so a feature with a much larger numeric scale can dominate the distance even when it is not more informative. Scale features using the training set before finding neighbours.

**Supporting page:** `lectures/machine-learning/lec-05-model-selection-knn`; `lectures/machine-learning/lecture-3-classification-knn-random-tree`

### macro-01 · macro-economics

**Question:** Why does a temporary income windfall raise consumption less than a permanent pay rise?

**Reference answer:** Under the permanent income hypothesis, households smooth consumption over their lifetime resources. A temporary windfall is spread across many periods and mostly saved; a permanent increase lifts the sustainable consumption level much more.

**Supporting page:** `lectures/macro-economics/lec-02-consumption-and-saving`

### macro-02 · macro-economics

**Question:** In the sample growth-accounting question, does TFP or capital explain more of the fourfold GDP gap?

**Reference answer:** Neither explains more. TFP is twice as high, multiplying output by two; capital is eight times as high but enters to the one-third power, also multiplying output by two. Together they give a fourfold gap.

**Supporting page:** `past-papers/macro-economics/pp-01-sample-exam-2026#q1`

### macro-03 · macro-economics

**Question:** In the sample exam's production function with R plus N, what happens to robot demand after immigration?

**Reference answer:** Robot demand falls. Robots and workers enter additively as substitutes; more workers lower the marginal product of a robot when its price is fixed.

**Supporting page:** `past-papers/macro-economics/pp-01-sample-exam-2026#q2`

### macro-04 · macro-economics

**Question:** How does a higher labour-income tax affect labour supply in the course model?

**Reference answer:** With the assumed substitution effect dominating, a higher labour-income tax reduces the after-tax wage and shifts labour supply left. A lump-sum tax is different because it does not alter the marginal reward to working.

**Supporting page:** `lectures/macro-economics/lec-10-fiscal-policy`

### micro-01 · micro

**Question:** Why might a risk-averse person reject the apparently fair 56-shekel insurance policy in EX-2?

**Reference answer:** The premium is fair for the insurer's expected payout after insured consumption rises, but natural expected expenditure is only 48 shekels. Moral hazard creates an eight-shekel markup; a mildly risk-averse person whose risk premium is less than eight shekels may reject it.

**Supporting page:** `problem-sets/micro/ex-2-micro-3#1`; `recipes/micro/actuarially-fair-premium`

### micro-02 · micro

**Question:** How can a deductible reduce moral hazard yet make adverse selection worse?

**Reference answer:** The insured still pays the first part of small claims, so the incentive to overconsume weakens. Low-risk customers may then leave because they rarely exceed the deductible, while high-risk customers remain, making the pool riskier.

**Supporting page:** `problem-sets/micro/ex-2-micro-3#2b`

### micro-03 · micro

**Question:** For an optimal two-part tariff with identical consumers, how do I set the per-unit price and entry fee?

**Reference answer:** Set the usage price equal to marginal cost to maximise total surplus, then set the entry fee equal to each consumer's surplus at that price, subject to participation.

**Supporting page:** `recipes/micro/optimal-two-part-tariff`; `lectures/micro/topic-2-equilibrium-in-different-market-structures`

### micro-04 · micro

**Question:** Whose indifference determines my mixing probability in a mixed-strategy Nash equilibrium?

**Reference answer:** Choose your probability so that your opponent is indifferent between the pure strategies they mix over. The opponent's probability similarly makes you indifferent.

**Supporting page:** `recipes/micro/solving-mixed-strategy-ne`

### dm-01 · digital-marketing

**Question:** Why can first-click or last-click attribution mislead on a long customer journey?

**Reference answer:** Each gives the entire conversion value to one touchpoint and ignores the contribution, sequence, and timing of the other contacts. These simple single-touch rules are most defensible for short journeys.

**Supporting page:** `lectures/digital-marketing/lec-02a-taxonomy-attribution`

### dm-02 · digital-marketing

**Question:** In the deepfake advertising reading, how is a deepfake different from a GAN?

**Reference answer:** The course notes distinguish deepfakes as editing existing media, often with autoencoders, from GANs that generate synthetic media through a generator and discriminator.

**Supporting page:** `lectures/digital-marketing/lec-08-deepfakes-ai-ads`; `exam-prep/digital-marketing/cram-sheet`

### dm-03 · digital-marketing

**Question:** Does emotional contagion directly increase a superstar influencer's performance in Lee and Theokary?

**Reference answer:** No direct effect was supported in the study. Emotional contagion mattered through the mediator of content and production expertise.

**Supporting page:** `lectures/digital-marketing/lec-09b-superstar-influencer`

### dm-04 · digital-marketing

**Question:** What makes connected TV advertising different from linear broadcast advertising?

**Reference answer:** CTV reaches streaming viewers on internet-connected TVs or devices with addressable household targeting and granular measurement, so different viewers can see different ads. Linear broadcast sends the same scheduled programme and ad break to its audience.

**Supporting page:** `lectures/digital-marketing/lec-09-class-emerging-platforms-trends`
