---
title: Bag of Words
subject: intro-data-science
aliases: ["Bag-of-Words", "BoW"]
related: ["Document-Term Matrix", "Tokenization", "Stopwords", "TF-IDF", "Text Preprocessing"]
source_folder: intro-data-science
ai_drafted: true
---

Describes each document as a vector of word counts and throws away word order, so "The food was great" and "Great was the food" give the same bag. Stacking these vectors gives the [[Document-Term Matrix]].

## When to use

It is the step after [[Text Preprocessing]] that turns cleaned tokens into numbers a model can use. Know its limitation: removing stopwords can destroy negation, so "not good" looks like "good", and frequency is not importance, which motivates [[TF-IDF]].

See [[Lecture 7 - NLP and Image Analysis|Lec 7]].
