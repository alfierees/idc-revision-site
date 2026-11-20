---
title: Tokenization
subject: intro-data-science
aliases: ["tokenize"]
related: ["Text Preprocessing", "Stopwords", "Stemming", "Bag of Words"]
source_folder: intro-data-science
ai_drafted: true
---

Splitting a sentence into a list of tokens, usually words, to create countable, discrete units.

## When to use

The third step of the [[Text Preprocessing]] pipeline, before stopword removal (the lecture's example: "the hummus was absolutely amazing and fresh" gives 7 tokens). Simple tokenizing splits on spaces; better tokenizers also handle contractions (`don't` becomes `do` + `not`), hyphens and special characters. Also in [[PS_06-NLP and Image Analysis|PS 06]].

See [[Lecture 7 - NLP and Image Analysis|DS Lec 7]].
