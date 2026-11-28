---
title: "Quick Self-Test"
subject: intro-data-science
type: self-test
description: "14 new questions in course order, written like the final project's Q&A: 8 quick multiple-choice checks and 6 'defend your choice' questions on framing, cleaning, leakage, metrics, overfitting, clustering, recommenders and deployment, each with a model answer."
course: Data Science for Entrepreneurs
semester: 1
year: 2
order: 6
tags:
  - intro-data-science
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Which analytics?"
    text: |
      "If we raise the price of the premium plan by 10% and add a free month for annual sign-ups, revenue should rise by about 6%." Which type of analytics is this?
    options:
      - label: a
        text: |
          Descriptive.
        why: |
          Descriptive reports what happened.
      - label: b
        text: |
          Diagnostic.
        why: |
          Diagnostic explains why something happened.
      - label: c
        text: |
          Predictive.
        why: |
          Close: it does predict, but it also recommends an action.
      - label: d
        text: |
          Prescriptive.
        correct: true
        why: |
          It says what to **do** and what will follow: the top of the analytics staircase, which rests on prediction.
    solution: |
      **Answer (d).** It says what to **do** and what will follow: the top of the analytics staircase, which rests on prediction.
  - id: "2"
    title: "2 · Frame the problem"
    text: |
      Your team picks a Kaggle dataset of 7,000 telecom customers with a `Churn` column. In the Q&A you are asked: "What is the business problem, and why does the metric you chose follow from it?" Answer in three or four sentences.
    solution: |
      **Problem:** identify customers likely to cancel in the coming month so the retention team can contact them first. **Stakeholder:** the retention manager, who has a limited budget of calls or offers. **Cost of errors:** a missed churner loses a customer's annual revenue; a false alarm costs one call or one discount. Since a miss costs far more than a false alarm, **recall** on the churn class matters most, checked alongside precision so the team is not flooded with calls, and the threshold is set from those two costs. Accuracy alone would mislead, because most customers do not churn.
  - id: "3"
    title: "3 · 12% missing"
    text: |
      12% of the `income` values are missing, almost all for customers over 60. What is the best first move?
    options:
      - label: a
        text: |
          Treat the missingness as systematic: fill with the training median and add an `income_missing` flag.
        correct: true
        why: |
          The pattern is **systematic**, so dropping those rows would remove most older customers and bias the model. The flag lets the model use the fact that income was missing.
      - label: b
        text: |
          Drop every row with a missing income.
        why: |
          12% of rows, concentrated in one age group: the model would barely see older customers.
      - label: c
        text: |
          Fill with 0.
        why: |
          `NaN` means unknown, not zero income.
      - label: d
        text: |
          Fill with the mean of the full dataset before the split.
        why: |
          Two problems: the mean is pulled by high incomes, and computing it before the split leaks test data.
    solution: |
      **Answer (a).** The pattern is **systematic**, so dropping those rows would remove most older customers and bias the model. The flag lets the model use the fact that income was missing.
  - id: "4"
    title: "4 · Is 96% real?"
    text: |
      A teammate fills missing values with the column means of the whole dataset, scales everything with `StandardScaler`, then splits 80/20 and reports **96%** test accuracy. In the Q&A you are asked whether the number can be trusted. Answer, and say how to fix the code.
    solution: |
      **Not fully.** The means and the scaler were fitted on all rows, including the 20% that became the test set, so test information shaped the training: **data leakage**, which inflates the test score.

      **Fix:** split first; fit the imputer and the scaler on the training set only and apply them to the test set. Simplest is a `Pipeline([("impute", SimpleImputer(strategy="median")), ("scale", StandardScaler()), ("model", ...)])`, fitted on `X_train`, which also refits correctly inside every cross-validation fold.

      Also check the class balance: if 95% of customers do not churn, 96% accuracy is barely better than predicting "no" for everyone.
  - id: "5"
    title: "5 · Which models need scaling?"
    text: |
      Which of these models does **not** need its features scaled?
    options:
      - label: a
        text: |
          K-nearest neighbours.
        why: |
          KNN measures distances: a feature in shekels would swamp one in years.
      - label: b
        text: |
          Random forest.
        correct: true
        why: |
          Trees split on thresholds of one feature at a time, so the units do not matter.
      - label: c
        text: |
          Lasso regression.
        why: |
          The penalty is on coefficient sizes, which depend on the units: scale first.
      - label: d
        text: |
          K-Means.
        why: |
          K-Means uses Euclidean distance: scale first.
    solution: |
      **Answer (b).** Trees split on thresholds of one feature at a time, so the units do not matter.
  - id: "6"
    title: "6 · 2% fraud"
    text: |
      Only 2% of transactions are fraud. Missing a fraud costs ₪5,000; checking a flagged transaction costs ₪10. Which metric should drive the model choice and the threshold?
    options:
      - label: a
        text: |
          Accuracy.
        why: |
          "Nothing is fraud" already scores 98%.
      - label: b
        text: |
          Precision.
        why: |
          False alarms are cheap here; misses are the expensive error.
      - label: c
        text: |
          Recall, with precision checked so the reviewers are not flooded.
        correct: true
        why: |
          A miss costs 500 times a false alarm, so catching frauds comes first: favour recall and a lower threshold.
      - label: d
        text: |
          R².
        why: |
          A regression metric; this is classification.
    solution: |
      **Answer (c).** A miss costs 500 times a false alarm, so catching frauds comes first: favour recall and a lower threshold.
  - id: "7"
    title: "7 · 0.97 and 0.41"
    text: |
      Your polynomial regression of degree 8 has $R^2 = 0.97$ on the training set and $0.41$ on the test set. What is happening, and what do you try? Give three fixes.
    solution: |
      **Overfitting** (high variance): the model fits the noise in the training data and does not generalise. The gap between train and test is the evidence.

      Fixes:
      1. **Lower the complexity:** a lower polynomial degree, or plain linear regression.
      2. **Regularise:** Ridge (shrinks all coefficients) or Lasso (can zero some out, selecting features), with features scaled and $\lambda$ chosen by cross-validation.
      3. **Validate properly:** K-fold cross-validation to choose the degree and $\lambda$, rather than one split.

      More data also helps, when it is available.
  - id: "8"
    title: "8 · The negative coefficient"
    text: |
      In a regression of startup valuation on several features, the coefficient on `num_patents` is **negative**. A panelist asks: "So patents hurt valuation?" What do you answer?
    options:
      - label: a
        text: |
          Yes: each extra patent lowers the valuation by the coefficient.
        why: |
          A coefficient is a correlation, holding the other features fixed, not a causal effect.
      - label: b
        text: |
          The model is broken and the coefficient should be ignored.
        why: |
          A negative sign is not an error by itself.
      - label: c
        text: |
          Lasso always makes coefficients negative.
        why: |
          Lasso shrinks coefficients towards zero; it does not flip their sign.
      - label: d
        text: |
          Not necessarily: it is the effect holding the other features fixed, and a correlated feature (like R&D spend) can take the credit and flip the sign.
        correct: true
        why: |
          Holding R&D fixed, more patents may signal a slower, older company. Correlated features make single coefficients unstable, and none of it is causal.
    solution: |
      **Answer (d).** Holding R&D fixed, more patents may signal a slower, older company. Correlated features make single coefficients unstable, and none of it is causal.
  - id: "9"
    title: "9 · Choosing K"
    text: |
      You cluster 2,000 customers with K-Means. The elbow plot bends gently somewhere between 3 and 5. How do you choose $K$, and what do you do once you have the clusters?
    solution: |
      **Choosing $K$:** the elbow is vague, so add the **silhouette score** for each $K$ (higher is better) and **business sense**: how many distinct campaigns can the marketing team actually run? Check that the clusters are stable across random seeds (`n_init=10`).

      **After:** **profile** each cluster by comparing its feature means with the overall mean, **name** it ("price-sensitive families", "premium regulars"), and give each its **own action**. One coupon for all four clusters wastes the segmentation. A tiny cluster may be outliers rather than a segment. All of this on **scaled** features, since K-Means uses distances.
  - id: "10"
    title: "10 · 85% of the variance"
    text: |
      PCA on 20 scaled features shows the first 4 components explain **85%** of the variance. What does that mean?
    options:
      - label: a
        text: |
          Four new axes, each a mix of all 20 features, keep 85% of the spread in the data.
        correct: true
        why: |
          Each component is a weighted combination of the original features, in the direction of greatest remaining variance.
      - label: b
        text: |
          Four of the original features carry 85% of the information.
        why: |
          PCA builds new axes; it does not pick original features.
      - label: c
        text: |
          The model will be 85% accurate.
        why: |
          Explained variance is not a model metric.
      - label: d
        text: |
          The other 16 features can be deleted from the dataset.
        why: |
          They still contribute to the 4 components.
    solution: |
      **Answer (a).** Each component is a weighted combination of the original features, in the direction of greatest remaining variance.
  - id: "11"
    title: "11 · A new user"
    text: |
      A streaming app's collaborative-filtering recommender gives nothing useful to a user who signed up today. What is the problem called, and what is the standard fix?
    options:
      - label: a
        text: |
          Overfitting; use a smaller model.
        why: |
          Not about model complexity: there are simply no ratings for this user.
      - label: b
        text: |
          Cold start; show popular items, then content-based, then the hybrid as ratings come in.
        correct: true
        why: |
          Seret+ in Lecture 6: popular first, content-based after 3 ratings, the full hybrid after 10.
      - label: c
        text: |
          Data leakage; refit the scaler.
        why: |
          Nothing leaked.
      - label: d
        text: |
          The curse of dimensionality; apply PCA.
        why: |
          The user-item matrix is sparse, but the issue for one new user is no history at all.
    solution: |
      **Answer (b).** Seret+ in Lecture 6: popular first, content-based after 3 ratings, the full hybrid after 10.
  - id: "12"
    title: "12 · Precision@5"
    text: |
      The homepage shows a user 5 recommendations. They would rate 3 of them 4 or above. What is Precision@5?
    options:
      - label: a
        text: |
          0.3
        why: |
          That divides by 10.
      - label: b
        text: |
          3
        why: |
          A count, not a ratio.
      - label: c
        text: |
          0.6
        correct: true
        why: |
          Relevant items in the top 5, divided by 5: $3/5 = 0.6$.
      - label: d
        text: |
          Cannot be known without the user's total relevant items.
        why: |
          That is needed for Recall@K, not Precision@K.
    solution: |
      **Answer (c).** Relevant items in the top 5, divided by 5: $3/5 = 0.6$.
  - id: "13"
    title: "13 · Why not deep learning?"
    text: |
      A panelist asks why your project on 3,000 rows of tabular data uses a random forest rather than a neural network. Answer in a few sentences.
    solution: |
      Lecture 8's framework: deep learning pays off with **large data** (an MLP wants 1,000s to 10,000s of rows), **raw or complex inputs** with interactions simpler models miss, and when interpretability matters less. We have **3,000 rows of well-understood tabular features**, the business needs to know **why** a customer is flagged (feature importances), and a laptop trains the forest in seconds. A simple **baseline is mandatory** first, and the forest already clearly beats it; an MLP would add cost and a black box for an uncertain gain. With much more data, or raw text or images, we would test one.
  - id: "14"
    title: "14 · The app gives nonsense"
    text: |
      Your Gradio app takes a new customer's details and runs `model.predict`. It returns almost the same prediction whatever you enter. The model looked fine in the notebook. What is the most likely bug, and how do you fix it?
    solution: |
      **The input row does not have the training columns.** In the notebook, `pd.get_dummies` built columns such as `plan_premium` from the whole training set. In the app, `get_dummies` on a one-row DataFrame creates only the columns for that one row's values, in a different order, so the features reach the model misaligned (or missing).

      **Fix:** after encoding the input, `row = row.reindex(columns=X_train.columns, fill_value=0)` so it has exactly the training columns in the same order. Better still, save the whole fitted **Pipeline** (encoder, scaler, model) and call it in the app, so the app and the notebook apply identical steps. Test it with two known rows from the test set and compare with the notebook's predictions.
---

> Eight quick checks and six "defend your choice" questions, the kind the Q&A asks: each team member gets two. Answer out loud in under a minute before opening the solution. The full list of likely questions is in the [[Final Project Playbook]].
