# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Next.js 16 App Router (Server Components), React 19, TypeScript (`strict: true`), Tailwind CSS v4 (CSS-first config via `postcss.config.mjs` — there is no `tailwind.config.js`), and Sanity.io as a headless CMS with Sanity Studio embedded in this same app at `/studio` (config: `sanity.config.ts` at repo root).

## Commands

- Package manager: **pnpm** (`packageManager: pnpm@9.0.0` in package.json). Ignore any stale `npm install` references you find in old docs/comments.
- `pnpm dev` — start dev server (localhost:3000)
- `pnpm build` / `pnpm start` — production build / serve
- `pnpm lint` — ESLint (`eslint .`)
- `pnpm typegen` — regenerates Sanity types: runs `sanity schema extract` then `sanity typegen generate`, rewriting `src/sanity/types.ts`. Run this after any change to `src/sanity/schemaTypes/` or the GROQ queries in `src/sanity/lib/queries.ts`.

## Structure

- `src/app/(frontend)/` — public site routes; `src/app/studio/[[...tool]]/` — embedded Sanity Studio; `src/app/api/draft-mode/` — preview-mode toggle routes.
- `src/components/` — flat, one file per component.
- `src/sanity/` — schema types, GROQ queries, client/image/token helpers, and generated `types.ts`.
- Path alias `@/*` → `./src/*`.

## Conventions

- Sanity schema authoring and GROQ query conventions are documented in @.cursor/rules/sanity-opinionated.mdc — follow it when touching `src/sanity/schemaTypes/` or writing queries.
- No Prettier — ESLint (`eslint-config-next`'s `core-web-vitals` + `typescript` presets) is the only enforced style tool.
- No test framework and no CI are configured — don't assume `pnpm test` exists or invent test commands.
- Commits go directly to `main`; loose Conventional Commits-style prefixes (`feat:`, `fix:`, `style:`, `chore:`, `refactor:`, `docs:`) are common but not strictly enforced.

## Env vars

Required (see `src/sanity/env.ts`, `src/sanity/lib/token.ts`): `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN` (secret — never print or commit). These live in the gitignored `.env.local`.

## Notes

- `production.tar.gz` at the repo root is tracked in git intentionally — leave it alone, don't regenerate or delete it.
