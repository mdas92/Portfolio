---
name: Async subagent task brief formatting
description: How to write task strings passed to startAsyncSubagent in code_execution without hitting JS parse errors
---

When composing multi-paragraph task briefs as JS template literals for `startAsyncSubagent` inside the `code_execution` sandbox, avoid embedding smart/curly punctuation (em dashes "—", curly quotes, non-ASCII bullets) directly in the template literal — it can produce cryptic "Missing semicolon" parse errors from the sandbox's JS transpiler even though the literal syntax looks correct.

**Why:** Hit repeated "Missing semicolon" errors with no visible cause when a task brief used em dashes and curly apostrophes inside backtick template literals; switching to plain ASCII (`--` instead of `—`, straight quotes) fixed it immediately.

**How to apply:** When drafting long task-brief strings for subagents (or any large template literal) in `code_execution`, stick to plain ASCII punctuation. If a parse error appears with no obvious syntax issue, suspect non-ASCII characters first before restructuring the string.
