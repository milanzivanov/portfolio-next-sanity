---
name: typegen
description: Regenerate Sanity TypeScript types after changing a schema type or GROQ query. Use after editing anything in src/sanity/schemaTypes/ or the query constants in src/sanity/lib/queries.ts.
---

Run `pnpm typegen` (this runs `sanity schema extract --path=./src/sanity/extract.json && sanity typegen generate`).

After it finishes:
1. Check `git diff src/sanity/types.ts` (and `src/sanity/extract.json`) to see what changed.
2. Summarize the change in one or two lines — e.g. new/changed type names, or which query result type changed shape.
3. If any code that consumes the changed types no longer type-checks, fix it; otherwise report that everything still compiles.

If `pnpm typegen` fails, report the raw error — don't guess at a fix without seeing it.
