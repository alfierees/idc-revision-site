---
title: Causal Diagram
subject: econometrics
aliases: ["DAG", "directed acyclic graph", "causal graph"]
related: ["causal-inference", "omitted-variable-bias", "endogeneity"]
source_folder: econometrics
ai_drafted: true
---

A **causal diagram** (DAG) is a graph of arrows representing causal relationships between variables: an arrow $X \to Y$ means $X$ has a direct causal effect on $Y$. Drawing the DAG *before* writing a regression is the single most useful disciplining device in applied work — it forces you to commit to which variables are confounders (must control), which are pure outcome causes (include for precision), and which are mediators or colliders (do not control).

## When to use

Build the DAG whenever you face a causal question. It tells you (i) what to control for ([[Omitted Variable Bias]] arises from any uncontrolled backdoor path with arrows into both treatment and outcome), (ii) what to *not* control for (a collider or post-treatment mediator), and (iii) when an [[Instrumental Variables|instrument]] is needed (when no set of observable controls closes every backdoor). The seatbelt-law PS_4 illustrates the A/B/C taxonomy: **A** = confounders (must include), **B** = pure outcome causes (include for precision), **C** = unrelated or post-treatment (exclude).
