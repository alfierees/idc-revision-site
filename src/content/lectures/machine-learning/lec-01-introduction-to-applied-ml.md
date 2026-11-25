---
title: Introduction to Applied ML
week: 1
semester: 2
year: 2
course: Machine Learning
lecture: "Lecture 01 — Introduction to Applied ML (ML 1, parts 0-3)"
instructor: Dr Nataly Kuritz
tags:
  - machine-learning
aliases:
  - ML Lecture 1
  - ML 1 Intro
subject: machine-learning
in_scope: true
---

# Introduction to Applied ML

> Part of: [[Machine Learning]]
> **Lecture 01** (Week 1) — Machine Learning, Dr Nataly Kuritz. Covers the four intro decks ML_part0 to ML_part3.
> Key ideas: ML lifecycle, test-driven development, descriptive / predictive / prospective models, types of data, LLMs

> [!warning] Reconstructed from image-heavy slides
> These decks are mostly diagrams, photos and short bullet lists, with no speaker notes. The bullets below are taken straight from the slides. Sentences marked *(reconstructed)* are my reading of a diagram, not slide text. Part 0 (the 31 MB title deck) is not attached to the site; the other three parts are linked at the end.

---

## Course logistics (part 0)

| Item | Detail |
| ---- | ------ |
| Instructor | Dr Nataly Kuritz (AI consultant, data scientist) |
| Teaching assistant | David German |
| Final grade | **0.6 × HW + 0.4 × Project** |
| Homework | 3 assignments, submitted **individually**; technical, with coding plus some theory questions |
| Final project | Groups of 2-3; analyse a business problem on a **real dataset**: exploratory data analysis plus several ML algorithms |
| Project grading | Thoroughness, correctness, creativity of the analysis, and report quality |
| Office hours | By email appointment |

The lecture's framing agenda ("What's in it for me"):

1. My first application: under the hood
2. Divide and conquer: framework and infrastructure
3. Speak the language of DS and ML
4. AI, LLM and other "anymals"
5. Trust is hard
6. RAG: the need and the background

---

## My first application

The slides ask "what was your first application?" and use a shared spreadsheet (a group-dinner cost split) as the example. Its message:

> [!info] What a first application usually is
> - **Automation** of a process we already know and do
> - There is a **need**
> - There is a **user**
> - There is a **use case**

---

## Application under the hood

The architecture slides *(reconstructed from the diagrams)* go from a "dumb client" (UI, business logic and data all in one place, e.g. a spreadsheet) to **tiers**: user interface, business logic, data, all sitting on shared infrastructure.

### AI SaaS application architecture

| Layer | Role |
| ----- | ---- |
| **User interface** | Web portal and mobile app for user interaction |
| **Backend service** | User management, data processing, reporting |
| **Database** | User data, logs, and model artifacts |
| **External integrations** | Third-party APIs and cloud services |

### Best practices

- **Modularity** — components independently deployable and upgradable
- **Scalability** — distributed computing and cloud-native services for large data and compute loads
- **Observability** — monitoring and logging for both the system and the model's performance
- **Security** — strong authentication, authorisation and data protection
- **Automation** — automate data pipelines, training, deployment and monitoring

---

## Methodologies: test-driven development (part 1)

The key idea is **modular components, divide and conquer**. One slide contrasts *outcome supervision* (feedback only on the final result) with *process supervision* (feedback at each step), and states that **process supervision significantly outperforms outcome supervision**. A second slide stresses defining **expected behaviours and safety constraints** up front.

> [!tip] TDD in a nutshell (slide list)
> 1. Write small, focused tests
> 2. Commit often, to keep a clear development history
> 3. Refactor regularly, to keep code clean and maintainable
> 4. Use automated testing frameworks
> 5. Balance test coverage with *meaningful* tests: quality, not just quantity

**Modular, testable design for AI systems:**

- Structure AI agents into clear modular components (e.g. perception, reasoning, action)
- Isolate model logic from data pipelines
- The slide shows a pipeline *(reconstructed)*: data collection, data curation, implementation, model training, process supervision, robust AI systems, with **Chain-of-Thought (CoT)** named as the supervised reasoning trace

**Unit tests and compliance:**

- Environment interfaces that enable unit testing (e.g. **pytest**)
- Write tests for data preprocessing, model training, inference and post-processing
- Test **edge cases**, **adversarial inputs** and **out-of-distribution (OOD)** scenarios
- Test compliance with organisational and regulatory standards (e.g. NIST, EU AI Act): transparency, accountability, robustness

**Document** the tests, model assumptions, data dependencies, semantic relationships, and logs, prompts and results (statistic collectors). The slide's punchline: *good code does not require documentation* is a myth.

**"The data and other animals"** lists what an AI project is built from: hypotheses and assumptions, prompts, constraints, intuition and UX research, and logs.

---

## Speak the language of DS and ML (part 2)

### What an AI model is (and is not)

> [!quote] Slide wording
> An AI model does **not** pretend to "imitate" any internal behaviour of a single or collective organism. It can only be expected to **mimic the measurable**: taking measurable "data" or "intuitions" and returning measurable results.

Diagrams show the stack *(reconstructed)*: **data** at the bottom, the **model** in the middle, **outcomes** at the top, with people at both ends, and the **bottlenecks** circled at the data and outcome ends.

### Where models sit: deterministic, classic ML, LLM

Two plots place **deterministic** rules, **statistical and classic ML**, and **LLMs** on axes:

| Axis | Direction |
| ---- | --------- |
| Amount of required "expertise" (y) vs amount of data samples / universality (x) | Deterministic needs the most hand-written expertise and the least data; LLMs need the least task-specific expertise but the most data and are the most universal |
| Hard to build and update (y) vs hard to interpret intuitively (x) | Deterministic is easy to read; LLMs are hardest to interpret |

### Three kinds of model

| Type | Purpose |
| ---- | ------- |
| **Descriptive** | Analytics, insights |
| **Predictive** | Regression / classification |
| **Prospective** | Recommending **actions** |

### Learning model lifecycle

The lifecycle diagram is a cycle: **Planning**, **Data preparation**, **Model development**, **Deployment**, **Monitoring & optimisation**, then back round.

> [!tip] Exam angle
> Be able to name the lifecycle stages and to say which of descriptive / predictive / prospective a given use case is. Regression and classification are *predictive*.

---

## AI, LLMs and trust (part 3)

- **The LLM** slides show a large language model trained on many input types (structured data, text, voice, 3D signals, images) and then adapted to tasks such as information extraction, instruction following, object recognition, image captioning, Q&A and sentiment analysis.
- **Trust is hard**: the example is an **adversarial example**, a stop sign altered so an AI reads it as a 45 mph sign. This ties back to testing adversarial inputs under TDD.
- **Data growth**: a chart of global data created per year, rising steeply (about 160 zettabytes by 2025 on the slide, source IDC / Seagate 2017) *(figures read off a chart, approximate)*.

### Types of data

The slide says each type tends to need different tools and techniques:

- **Structured**
- **Unstructured**
- **Natural language**
- **Machine-generated**
- **Graph-based**
- **Audio, video and images**
- **Streaming**

> [!note] Not covered
> The RAG item in the agenda ("the need and the background") has no slides in these four parts.

---

## Summary

- A first AI product is usually **automation** of something people already do, with a clear user and use case.
- Build in **modular tiers**; test each component (**TDD**), including edge cases, adversarial and OOD inputs.
- Models are **mimics of the measurable**; pick between deterministic, classic ML and LLM by how much expertise vs data you have and how interpretable you need it.
- Follow the **ML lifecycle** and keep monitoring after deployment.

---

## Related Notes

- [[Machine Learning]] — subject hub
- [[Lec_02-Linear Regression]] — the first modelling lecture
- [[Lec_07-Performance Measures & Data Processing]] — how to evaluate models properly

**Slides (PDF):** [Part 1: methodologies](/papers/machine-learning/lec-01-part1-methodologies.pdf) · [Part 2: the AI model](/papers/machine-learning/lec-01-part2-ai-model.pdf) · [Part 3: LLM and data](/papers/machine-learning/lec-01-part3-llm-and-data.pdf)
