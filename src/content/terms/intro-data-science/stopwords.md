---
title: Stopwords
subject: intro-data-science
aliases: []
related: ["Tokenization", "Text Preprocessing", "Bag of Words", "Stemming"]
source_folder: intro-data-science
ai_drafted: true
---

Very common, low-meaning words (the, is, at, was, a, and) removed before analysis to focus on the content words; it typically cuts the token count by 40 to 60 percent.

## When to use

A step in the preprocessing pipeline after [[Tokenization]]. Watch the pitfall the lecture flags: `not` is often a stopword, so removal can destroy negation ("not good" loses its meaning), a known limit of [[Bag of Words]]. Different libraries ship different lists. Also in [[PS_06-NLP and Image Analysis|PS 06]].

See [[Lecture 7 - NLP and Image Analysis|DS Lec 7]].
