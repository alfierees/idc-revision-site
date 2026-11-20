---
title: TF-IDF
subject: intro-data-science
aliases: []
related: ["Bag of Words", "Document-Term Matrix", "Cosine Similarity", "Text Preprocessing"]
source_folder: intro-data-science
ai_drafted: true
---

A reweighted word count (term frequency times inverse document frequency): words common to every document are weighted down and words found in few documents are weighted up.

## When to use

The fix for the problem that frequency is not importance: in the Bikoret reviews `food` appears 85 times in both positive and negative reviews, while a rare word like `rude` can be more informative. It upgrades plain [[Bag of Words]] counts. The slides give only the idea, no formula. Also in [[PS_06-NLP and Image Analysis|PS 06]].

See [[Lecture 7 - NLP and Image Analysis|DS Lec 7]].
