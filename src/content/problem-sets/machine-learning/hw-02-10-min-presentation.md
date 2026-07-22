---
title: "HW-02"
subject: machine-learning
source_doc: /papers/machine-learning/hw-02-10-min-presentation.pdf
tags: []
ai_drafted: true
questions:
  - id: "1"
    text: |
      **The 10-Minute ML Explainer.** Work with a partner to explain one specific
      Machine Learning term, showing that you understand the theory and can explain
      it with a real-world example. Prepare a 10-minute presentation (5 minutes per
      person), divided into two parts (or focus on one):

      1. **The Theory** — What is the concept and why is it a problem?
      2. **The Example** — Show a real scenario where this happens and how to fix it.

      Format: live presentation. Choose a topic that interests you both (see the
      suggested list in the body below).
    solution: |
      TODO
    related_terms: []
    source_doc_page: 1
---

> [!info] Assignment type
> Open-ended presentation, not a worked problem set. There is no marked solution — the deliverable is a live 10-minute explainer.

## How you'll be graded

- **Simplicity** — could another student understand this easily?
- **Accuracy** — is the technical explanation correct?
- **Visuals** — clear drawings or charts instead of long sentences?
- **Teamwork** — did both partners speak and connect their parts?

## Check for understanding (before you start)

1. **The "So What?" test** — if this ML problem happens, what is the actual damage to the project?
2. **The "Analogy" test** — can you explain the concept to a non-engineer with a simple analogy? (e.g. overfitting is like a student memorising a practice test but failing the real exam.)

## Suggested topics

**1. Training dynamics & model behaviour ("the fit")**

1. Overfitting — memorising the noise vs. learning the pattern
2. Underfitting — why a model might be too simple for the data
3. The bias-variance tradeoff — balancing flexibility with stability
4. Early stopping — finding the right moment to stop training
5. Regularization (L1/L2) — a penalty that stops the model over-complicating
6. Data leakage — when the model "cheats" by seeing test answers early
7. Hyperparameter tuning — the difference between learning and configuring a model

**2. Niche metrics (beyond accuracy)**

8. Precision vs. recall — the cost of a false alarm vs. a missed event
9. F1-score — the best metric when data is unbalanced
10. Confusion matrix — a visual map of where the model gets confused
11. Log loss — how confident (and how wrong) a prediction is
12. Inference latency — when a slow model is a useless model
13. False positives vs. false negatives — consequences in medicine vs. security

**3. MLOps & real-world operations**

14. Model drift — the world changes but your model doesn't
15. Data drift — incoming data looks different from training data
16. Training-serving skew — model behaves differently in the lab vs. production
17. Model monitoring — an alarm system for AI
18. A/B testing for AI — comparing two models on real users safely
19. Feedback loops — a model's own mistakes pollute its future training data
20. Feature stores — a consistent data library for all your models

**4. Data challenges & handling**

21. Imbalanced data — the interesting event is 0.1% of the data
22. Data augmentation — artificial variety to make the model more robust
23. Outlier detection — which points are "special" and which are "errors"
24. Label noise — training when human-labelled data is messy
25. Cross-validation — proving success isn't just a lucky accident

**5. Advanced niche concepts (simplified)**

26. Transfer learning — take a pre-trained brain and give it a new job
27. Explainable AI (XAI) — asking the black box to show its work
28. Quantization — shrinking a model to fit on a small device
29. Retrieval-augmented generation (RAG) — a knowledge base to prevent hallucinations
30. Adversarial attacks — small, invisible changes that trick a model
