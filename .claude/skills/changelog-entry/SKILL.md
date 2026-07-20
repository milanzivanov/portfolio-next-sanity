---
name: changelog-entry
description: Formats a short, consistent changelog/commit-summary entry for changes in this portfolio project. Use when asked to summarize a change as a changelog line or PR bullet.
---

# Changelog entry format

When asked to write a changelog or PR-summary entry for a change in this
project, follow this exact format:

```
- <type>: <short imperative summary> (<area>)
```

Rules:
- `<type>` is one of: `feat`, `fix`, `style`, `chore`, `refactor`, `docs`.
- `<short imperative summary>` starts with a verb ("add", "fix", "update"),
  no trailing period, under 12 words.
- `<area>` is the top-level folder or component touched, e.g. `components`,
  `sanity`, `app`, `config`.
- Output ONLY the bullet line(s), nothing else — no preamble, no explanation.

Example:

```
- feat: add dark mode toggle sound effect (components)
```
