---
title: "Lec 12 - Generative AI and Prompt Engineering"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 12
tags:
  - computational-thinking-python
  - generative-ai
  - llm
  - machine-learning
  - prompt-engineering
  - chatgpt
subject: computational-thinking-python
in_scope: true
---

# Lecture 12: Generative AI and Prompt Engineering

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[Artificial Intelligence]], [[Machine Learning]], [[Deep Learning]], [[Generative AI]], [[Large Language Model]], [[Pre-training]], [[Fine-tuning]], [[Prompt Engineering]], [[Zero-Shot Prompting]], [[Few-Shot Prompting]], [[Chain-of-Thought Prompting]], [[ChatGPT]], [[Data Science]]

This lecture has no new Python syntax. It is a conceptual tour (slides 1 to 25): what AI and ML are, how a language model works, how to write good prompts, and how a developer can use ChatGPT.

## 1. AI, ML, DL and GenAI: nested fields

The first slide's diagram is a set of nested circles. Each field is a subset of the one around it.

![[Lec12_ai_ml_dl_genai.png]]

| Field | One-line meaning (from the slides) |
|---|---|
| [[Artificial Intelligence]] | Simulation of human intelligence processes by machines, especially computer systems. |
| [[Machine Learning]] | Teaching computers how to learn patterns from data, often to make decisions or predictions. |
| [[Deep Learning]] | A subset of ML using neural networks with many layers. (The slide's diagram text describes this; the written slide gives no separate definition.) |
| [[Generative AI]] | Algorithms that create new content: audio, code, images, text, 3D and video. |

The later "ChatGPT" slide draws the same idea as a staircase: ChatGPT is **a kind of** LLM, an LLM is **part of** Generative AI, Generative AI **relies on** Machine Learning, and Machine Learning is **a field in** AI.

> [!note] Reconstructed from the slides
> The deck shows the AI / ML / DL / GenAI diagram as a picture with small text. I redrew it as a clean theory diagram and summarised its labels; check slide 4 for the original wording.

## 2. What AI is used for

The "AI Applications" slide is a mind-map of AI areas: **machine learning** (supervised, unsupervised, deep learning), **natural language processing**, **expert systems**, **vision**, **speech**, **planning** and **robotics**.

### NLP (natural language processing) tasks

| Task | Example on the slide |
|---|---|
| Spam detection | "Let's go to Agra!" is fine; "Buy V1AGRA ..." is spam |
| Part-of-speech (POS) tagging | "Colorless green ideas sleep furiously." tagged ADJ ADJ NOUN VERB ADV |
| Named entity recognition (NER) | "Einstein met with UN officials in Princeton": PERSON, ORG, LOC |
| Question answering (QA) | "How effective is ibuprofen in reducing fever in patients with acute febrile illness?" |
| Paraphrase | "XYZ acquired ABC yesterday" means "ABC has been taken over by XYZ" |
| Summarization | Dow Jones up, S&P500 jumped, housing prices rose summarised as "Economy is good" |
| Dialog | "Where is Citizen Kane playing in SF?" answered with a theatre and time, offering a ticket |

### Computer vision tasks

| Task | What it outputs |
|---|---|
| Classification | One label for the whole image (CAT); no spatial extent |
| Semantic segmentation | A label per pixel (grass, cat, tree, sky); no separate objects, just pixels |
| Object detection | Boxes around multiple objects (DOG, DOG, CAT) |
| Instance segmentation | A pixel mask per object, separating each individual (DOG, DOG, CAT) |

## 3. What machine learning and data science are

[[Machine Learning]] is the practice of teaching computers to learn patterns from data. The slide's mind-map groups it into **supervised learning** (classification, regression), **unsupervised learning** (clustering, dimensionality reduction) and **reinforcement learning**.

[[Data Science]] sits where three areas overlap:

1. **Statistics**: model and summarise datasets.
2. **Computer science**: design and use algorithms to store, process and visualise data efficiently.
3. **Domain expertise**: formulate the right questions and put the answers in context.

A data scientist gathers data from several sources and applies machine learning, predictive analytics and sentiment analysis to extract information, then explains it from a business point of view to support decisions. (The slide's Venn diagram labels the overlaps: ML, "danger zone" and traditional research.)

## 4. Generative AI and large language models

[[Generative AI]] describes algorithms that **create new content**. The "GenAI Applications" slide lists example tools in each medium: analytics, text, image, video, audio and 3D (for instance ChatGPT and GPT-4 for text, Stable Diffusion and Midjourney for images).

### What an LLM is

- A [[Large Language Model]] (LLM) is a **large neural network controlled by billions of parameters**.
- A **language model predicts the next word** given a piece of text.
- It uses statistical models over vast amounts of text, learning patterns and connections between words and phrases, so it can generate new content (such as essays) in the style of a particular author or genre.

### What an LLM actually does: next-word probabilities

The slides use a lunch example. After the prompt "For lunch today I ate...", there is no single right answer, only probabilities learned from the training data:

| Next word | Probability |
|---|---|
| Rice | 50% |
| Meat | 20% |
| Fish | 10% |
| Soup | 10% |
| Other | 5% |

The model picks "rice", so the text becomes "For lunch today I ate rice". It then repeats the step: given "...I ate rice and I drank", the distribution of what comes next is Water 60%, Coca Cola 20%, Beer 10%, Wine 5%, Other 5%, and it picks "water". Text is generated **one word at a time**, each choice conditioned on everything so far.

> [!warning] A slip in the slide
> The first slide's percentages add up to 95%, not 100% (50 + 20 + 10 + 10 + 5). The slide also spells "Meat" as "Meet". The second slide sums to 100%. The point is the idea, not the exact numbers.

> [!example] The same idea in Python (my illustration, not from the slides)
> Choosing a next word is a weighted random choice. This uses the slide's first distribution (`random.choices` accepts weights that do not sum to 1).
>
> ```python
> import random
>
> next_word_probabilities = {"rice": 0.50, "meat": 0.20, "fish": 0.10, "soup": 0.10, "other": 0.05}
> words = list(next_word_probabilities)
> weights = list(next_word_probabilities.values())
>
> print(round(sum(weights), 2))
> print(max(next_word_probabilities, key=next_word_probabilities.get))
>
> random.seed(1)
> print(random.choices(words, weights=weights, k=5))
> ```
>
> ```text
> 0.95
> rice
> ['rice', 'soup', 'fish', 'rice', 'rice']
> ```
>
> Picking the highest-probability word always gives "rice"; sampling by weight usually gives "rice" but sometimes something else. Real models do this over a vocabulary of tens of thousands of tokens. The seeded output above is from my own run.

### How an LLM is trained

| Phase | What happens | Goal |
|---|---|---|
| [[Pre-training]] | The model reads massive amounts of text (books, articles, web pages) and learns to **predict the next word** in a sentence. More data generally means better generation. | Learn general patterns of language |
| [[Fine-tuning]] | The pre-trained model is refined on a **narrower dataset** to specialise in a task or knowledge area. | Align outputs with desired outcomes |

### How a trained LLM is used

- **Completion**: given a partial sentence, predict the next words.
- **Question answering**: you ask, and it generates a relevant answer.
- **Translation, summarisation and more**: adapted to other text-generation tasks.

### Popular LLMs

ChatGPT (OpenAI), LaMDA and PaLM (Google), Llama (Meta), NeMo (Nvidia).

## 5. ChatGPT

[[ChatGPT]] is an AI language model developed by OpenAI that generates human-like text from context. **GPT** stands for **Generative Pre-trained Transformer**. The usage pattern is simply:

Input prompt, then ChatGPT, then output text.

## 6. Prompt engineering

[[Prompt Engineering]] means crafting **clear and specific instructions** to get the response you want from a language model. The slide calls it the most crucial aspect of using LLMs effectively.

### Prompt guidelines

| Guideline | What it means |
|---|---|
| **Wording** | Careful wording guides the model toward the output you want. |
| **Delimiters** | Mark where the actual input starts and ends so the model can tell data from instructions. |
| **Specifying steps** | For a problem, break it down step by step. |
| **Roles and goals** | Give the model a persona and name the intended audience; state the goal of the interaction explicitly. |
| **Positive / negative** | Positive prompts ("do this") encourage certain kinds of output; negative prompts ("don't do this") discourage them. |

> [!example] A prompt that uses several guidelines (my illustration, not from the slides)
> "You are a patient Python tutor for first-year students (role and audience). Explain what the code between the triple quotes does (delimiters) in three short steps (specifying steps). Do not rewrite the code (negative prompt)."

### Prompt strategies

| Strategy | Idea |
|---|---|
| **Input-output** | Define the input you give and the output you want back. |
| **Zero-shot / one-shot / few-shot** | The model answers with no examples, one example, or a few examples. |
| **Self-criticism** | Ask the model to assess its own output for errors or improvements. |
| **Iterative** | Follow up on the first answer with further prompts. |
| **Chain-of-thought** | Give a few examples that refine the original question, leading to a more accurate and comprehensive answer. |

> [!tip] Few-shot in practice (my illustration)
> Showing two worked examples ("2 + 2 = 4", "3 + 5 = 8") before asking "4 + 6 =" is a few-shot prompt; giving no example is zero-shot.

## 7. ChatGPT for developers

The last slide lists development use cases:

| Group | Use cases |
|---|---|
| **Writing code** | code snippets, boilerplate code, code completion, programming language translation, algorithms and data structures |
| **Improving code** | code optimisation, code refactoring, bug detection, test automation |
| **Libraries and docs** | library and module recommendations, documentation, technical writing |
| **Tooling and operations** | Git and GitHub, DevOps deployment, database tasks, data optimisation, threat detection |
| **Design** | UI design |

> [!warning] Check what the model gives you
> The slides stop at the list of uses. LLMs produce the most probable next words, not guaranteed-correct code, so test any generated code (for example with the `assert` self-tests from the modules lecture) before relying on it. This caution is my addition.

## Summary

- **AI contains ML, which contains deep learning, which contains generative AI.**
- ML learns patterns from data; data science combines statistics, computer science and domain expertise.
- An **LLM** is a huge neural network that **predicts the next word**, one step at a time, from learned probabilities.
- Training has two phases: **pre-training** on massive text, then **fine-tuning** on a narrower task.
- **Prompt engineering**: clear wording, delimiters, steps, roles and goals, positive and negative instructions.
- Strategies: input-output, zero/one/few-shot, self-criticism, iterative, chain-of-thought.
- Developers use ChatGPT for snippets, refactoring, bug detection, tests, documentation and more.

## Related notes

- [[Computational Thinking & Python]]
- The previous lecture on modules and the standard library, [[Lec_11-Modules and the Standard Library]]
