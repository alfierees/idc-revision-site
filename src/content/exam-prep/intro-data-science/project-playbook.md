---
title: "Final Project Playbook"
subject: intro-data-science
type: reference
description: "How to score on each part of the final project: choosing a dataset and a problem that will be approved, the five implementation steps with what to show in each, the two-page summary and its two graphs, the 7-minute demo, and the Q&A questions each team member should be ready for, with model answers."
course: Data Science for Entrepreneurs
semester: 1
year: 2
order: 4
tags:
  - intro-data-science
  - exam-prep
  - playbook
---

> The brief splits the grade **40% implementation** and **60% oral presentation**. More than half the grade is you explaining your choices, so for every step below, keep one sentence ready: **what you did, and why that and not the alternative.** The rules are in the [[Final Project Brief]]; the traps are in [[Common Mistakes]].

## A. Pick a project that will be approved

1. **A business problem first**, then the data: "Which gym members will cancel next month, so we can call them?" beats "Let's predict column 7."
2. **The dataset** from **Kaggle** or the **UCI repository**, with a clear target column. Aim for a few thousand rows and a mix of numeric and categorical features. Check that the target is not trivially in the features (a "cancellation date" column predicting churn).
3. **A model from class**: classification, regression, clustering or recommendation. Name a baseline and one or two challengers in the proposal.
4. Submit the proposal form (team, dataset link, business problem, planned model) and **wait for approval** before building.

## B. The five implementation steps

| Step | What to show | The sentence to have ready |
|---|---|---|
| 1. Problem definition | the decision the model supports, the stakeholders, what a wrong prediction costs | "A missed churner costs a member worth ₪1,200 a year; a wasted call costs ₪20, so recall matters more than precision." |
| 2. Data analysis and preparation | shape, types, class balance, missing values and how you treated each, outliers investigated, 2 or 3 charts with a finding each | "Income was missing for 8% of rows, mostly older members, so we filled with the median and kept a missing flag rather than drop them." |
| 3. Model building | a baseline, then 2 or 3 models from class; scaling where needed; a fixed `random_state`; commented code | "KNN needs scaled features because it uses distances; the forest doesn't." |
| 4. Evaluation and insights | the metric that matches the cost of errors, on a **held-out test set** or cross-validation; comparison table; feature importances or coefficients; **insights specific to your data** | "Members on monthly contracts with three or more support calls churn at four times the average." |
| 5. Deployment | a **Gradio** app: users enter features, get a prediction (and ideally a probability) | "The app rebuilds the same one-hot columns as training, so a new member's input matches the model." |

**Checklist before you submit**

- [ ] Split **before** any imputation, scaling or encoding that learns from data (or use a Pipeline).
- [ ] A baseline: the majority class, or the mean, and your model beats it.
- [ ] Not just accuracy if the classes are imbalanced: a confusion matrix and precision, recall or F1.
- [ ] Train and test scores side by side: a big gap means overfitting.
- [ ] Every chart has a title that states the finding.
- [ ] The notebook runs top to bottom on a fresh runtime.
- [ ] References for anything not covered in class.

## C. The summary document (up to 2 pages)

Problem and motivation → data → method → results → app design choices → key insights. Exactly **two graphs**, chosen for the key findings. Strong pairs:

- the **confusion matrix** of the final model + **feature importances**;
- **actual vs predicted** (regression) + the **error by segment**;
- the **elbow or silhouette** plot + the **cluster profiles** (clustering).

## D. The 7-minute demo

| Minute | Content |
|---|---|
| 0–1 | the business problem and who uses the app |
| 1–2 | the data in one sentence and one chart |
| 2–3 | the model choice and the result, in the metric that matters |
| 3–6 | **two use cases** live in the app: one obvious, one borderline, and what the business would do with each |
| 6–7 | one insight, one limitation, one next step |

## E. The Q&A: two questions each

Everyone answers. Prepare these, split by who built what, but everyone should know all of them.

| Question | A strong answer covers |
|---|---|
| Why this model and not another? | the baseline, the comparison, the metric, and interpretability vs accuracy |
| Why this metric? | the cost of a false positive vs a false negative; class balance |
| How did you avoid overfitting? | test set or cross-validation, train vs test gap, `max_depth` or regularisation |
| What did you do with missing values? | which columns, how many, random or systematic, the choice and its risk |
| Did any information leak from the test set? | split first, fit scalers and imputers on train only (Pipeline) |
| Why scale (or not)? | distance and penalty based models need it; trees do not |
| What does this coefficient or importance mean? | the effect holding the others fixed; correlation, not causation |
| What would you change with more time or data? | more data, other features, tuning, a different threshold |
| Who would use the app, and what decision changes? | a named user and an action for each prediction |
| What are the model's limits? | biased or old data, survivorship, a different population |

> [!example] "Your accuracy is 91%. Is the model good?"
> "Only 9% of our members churn, so predicting 'nobody churns' would already score 91%. That's why we report recall: our forest catches 68% of churners at a precision of 0.55, against 0% for the baseline. Calls are cheap, so we lowered the threshold to 0.3 to raise recall further."
