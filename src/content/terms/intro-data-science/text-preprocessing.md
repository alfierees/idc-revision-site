---
title: Text Preprocessing
subject: intro-data-science
aliases: []
related: ["Tokenization", "Stopwords", "Stemming", "Lemmatization", "Bag of Words", "Natural Language Processing"]
source_folder: intro-data-science
ai_drafted: true
---

Cleaning raw text into tidy tokens before modelling, in the order: lowercase, remove punctuation, [[Tokenization]], remove [[Stopwords]], then [[Stemming]] or [[Lemmatization]].

## When to use

Asked as a step-by-step exercise on a sample review, e.g. the Bikoret exercise review (9 words reduced to 5 content tokens). It feeds [[Bag of Words]] and the [[Document-Term Matrix]]. Each step has a pitfall: lowercasing loses Apple the company versus apple the fruit, and stopword removal can destroy negation. Also in [[PS_06-NLP and Image Analysis|PS 06]].

See [[Lecture 7 - NLP and Image Analysis|DS Lec 7]].
