---
title: Document-Term Matrix
subject: intro-data-science
aliases: ["DTM"]
related: ["Bag of Words", "TF-IDF", "Cosine Similarity", "Tokenization"]
source_folder: intro-data-science
ai_drafted: true
---

A matrix with one row per document and one column per term, filled with word counts. It is the stack of [[Bag of Words]] vectors, and is mostly zeros (sparse).

## When to use

It is a feature matrix like those of Lectures 3 to 5, with each word as a feature and each review as a data point, so earlier techniques apply. For $n$ reviews and a vocabulary of $V$ words the shape is $n \times V$ (for example $1000 \times 800$), and `CountVectorizer` builds it in scikit-learn.

See [[Lecture 7 - NLP and Image Analysis|Lec 7]].
