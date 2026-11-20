---
title: Final Project Brief (PDF)
subject: intro-data-science
type: reference
description: The official 2025/6 final-project guidelines. The course has no exam; the project is the assessment, split 40% implementation and 60% oral presentation.
course: Data Science for Entrepreneurs
instructor: Daniel Karalnik, Liam Tal
semester: 1
year: 2
order: 1
pinned: true
tags:
  - intro-data-science
  - final-project
  - reference
pdf: /papers/intro-data-science/final-project-guidelines.pdf
in_scope: true
---

# Final Project Brief

> Part of: [[Data Science]]
> The official two-page guidelines, embedded above. A summary of what they ask for is below.

## What the project is

Teams of 2 to 3 students (4 only if one member is on reserve duty) pick a product or business problem and solve it with a data-driven model. Datasets must come from **Kaggle** or the **UCI Machine Learning Repository**. The team submits a proposal form (team, dataset link, business problem, planned model) and needs **approval before implementation**.

## Part 1: implementation (40%)

1. **Problem definition:** the business problem, the stakeholders, and how a model addresses it.
2. **Data analysis and preparation:** thorough exploration and preprocessing ([[Exploratory Data Analysis]], [[Missing Values]], [[Feature Scaling]]).
3. **Model building:** an algorithm discussed in class, with the choice justified. Compare models if needed, and explain the final pick with commented, reproducible code.
4. **Evaluation and insights:** define success, choose suitable metrics, validate the results, and give insights specific to the data rather than generic statements.
5. **Deployment:** a **Gradio** app built from the notebook, where users enter features and get the model's prediction.

## Part 2: oral presentation (60%)

- A live app demo of up to 7 minutes, with two use cases.
- Q&A: two questions for each team member. Everyone must take part and show they understand the project.

## What to submit

1. The complete Python code: data processing, model training and the Gradio deployment.
2. A summary document (Word or PDF) of up to two pages: problem and motivation, data, method, results, app design choices, and key insights. It must include **two graphs** that best show the key findings.

Terms, models or techniques not covered in class need references.
