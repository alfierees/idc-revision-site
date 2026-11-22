---
title: Lemmatization
subject: intro-data-science
aliases: []
related: ["Stemming", "Text Preprocessing", "Tokenization", "Stopwords"]
source_folder: intro-data-science
ai_drafted: true
---

Reducing a word to its true dictionary form (its lemma) using vocabulary and grammar, so the output is always a real word, for example better becomes good.

## When to use

The last step of the text pipeline (lowercase, strip punctuation, tokenize, remove stopwords, lemmatize); PS 06 uses WordNetLemmatizer. It is slower but more accurate than [[Stemming]], so use it for smaller datasets, and pick one method and stay consistent.

See [[Lecture 7 - NLP and Image Analysis|Lec 7]].
