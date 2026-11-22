---
title: Namespace
subject: computational-thinking-python
aliases: []
related: ["Module", "Import Statement", "Name Main Guard"]
source_folder: computational-thinking-python
ai_drafted: true
---

A namespace is a module's own separate set of names, so identical names in different modules do not clash.

## When to use

With `import patient` the names stay inside the module (`patient.Patient(...)`), whereas `from patient import Patient` copies one name into your namespace and `from xyz import *` copies every public name. The lecture warns that the last form can silently overwrite your own names.

See [[Lec_11-Modules and the Standard Library|Lec 11]].
