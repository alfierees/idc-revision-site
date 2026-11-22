---
title: random Module
subject: computational-thinking-python
aliases: []
related: ["Module", "Python Standard Library", "Import Statement"]
source_folder: computational-thinking-python
ai_drafted: true
---

The `random` module is a [[Python Standard Library]] [[Module]] for random numbers and choices: `random.randint(a, b)` (both ends included), `random.random()` (a float in `[0.0, 1.0)`), `random.shuffle(seq)` (in place) and `random.sample(seq, k)` (`k` distinct items as a new list).

## When to use

`shuffle` works on a list but not a tuple, so `sample` is the alternative for other sequences. A seed fixes the starting point of the pseudo-random generator: after `random.seed(2)`, `random.random()` returns 0.9560342718892494 every time.

See [[Lec_11-Modules and the Standard Library|Lec 11]].
