---
title: Arithmetic Operators
subject: computational-thinking-python
aliases: []
related: ["Operator Precedence", "Integer", "Float"]
source_folder: computational-thinking-python
ai_drafted: true
---

The numeric operators `+`, `-`, `*`, `/`, `**`, floor division `//` and modulus `%`. `/` always gives a [[Float]], `//` floors (rounds towards negative infinity) and `%` is the remainder, so `-7 // 2` is `-4` and `-7 % 2` is `1`.

## When to use

Python keeps the identity `a == (a // b) * b + a % b`, which helps check floor division and remainder by hand. The remainder is the usual divisibility test (`n % 13 == 0`), and `**` groups right to left and binds tighter than `*` (see [[Operator Precedence]]).

See [[Lec_02-Numeric Values and Strings|Lec 02]].
