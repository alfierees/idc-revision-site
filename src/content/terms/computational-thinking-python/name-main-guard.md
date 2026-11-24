---
title: Name Main Guard
subject: computational-thinking-python
aliases: ["__name__ == \"__main__\""]
related: ["Module", "Import Statement", "Namespace"]
source_folder: computational-thinking-python
ai_drafted: true
---

The test `__name__ == "__main__"` is a guard: code under it runs only when the file is run directly, not when it is imported. When the file is run directly, `__name__` is `"__main__"`; when it is imported, `__name__` is the module's name.

## When to use

Put quick self-tests under the guard so a [[Module]] can be both a script and an importable file. Running `python patient.py` prints `All tests passed!`, while `import patient` from elsewhere prints nothing.

```python
if __name__ == "__main__":
    # this code will not run when imported
    print("All tests passed!")
```

See [[Lec_11-Modules and the Standard Library|Lec 11]].
