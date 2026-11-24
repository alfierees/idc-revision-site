---
title: Import Statement
subject: computational-thinking-python
aliases: ["imports"]
related: ["Module", "Namespace", "Python Standard Library"]
source_folder: computational-thinking-python
ai_drafted: true
---

The statement that makes a [[Module]]'s names available in your program. Forms: `import patient` (use `patient.Patient(...)`), `import patient as pat` (short alias), `from patient import Patient` (copies just that name) and `from xyz import *` (copies every public name).

A module is loaded **only the first time** it is imported; its top-level statements run at that import.

## When to use

Prefer `import xyz` or an explicit `from xyz import name`, since `*` can silently overwrite your own names (the avoid advice is the note author's). See [[Namespace]] and [[Python Standard Library]].

See [[Lec_11-Modules and the Standard Library|Lec 11]].
