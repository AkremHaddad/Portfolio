@AGENTS.md

---

# Portfolio site — project context

This is Akram Haddad's personal portfolio site — part of the career-development plan tracked at `C:\Projects\my profile\` (see `../ROADMAP.md` Phase 2, `../PROFILE.md`).

## Brief (v2, given directly by Akram, 2026-07-21 — supersedes the v1 brief below)

Confident, simple, "brandful" — not flat minimalism. Warm off-white background (not stark white/gray), a real headshot photo in the hero, a strong display typeface doing the branding work instead of color, and project cards whose detail pages are framed around **architecture and decisions**, not a feature list (the IT market has shifted from "can you code" to "can you architect a system" — case studies should read that way).

Akram designs pages himself in Claude Design (claude.ai/design) and hands over a project link expecting it ported faithfully into this codebase, not reinterpreted — see collaboration-philosophy memory. The v2 redesign was imported this way from a project named "Portfolio design decisions made" via the `DesignSync` MCP tool (`get_project`/`list_files`/`get_file`, then hand-ported to Next.js/Tailwind — not embedded as a webview).

The old v1 brief ("minimalistic, no crazy animations and colors") is **no longer current** — Akram explicitly moved past it. Don't revert toward it.

## Stack

Next.js 16 (App Router, TypeScript, Tailwind v4, ESLint), git-initialized by `create-next-app`. Remote is `https://github.com/AkremHaddad/Portfolio.git` (origin), branch `main` — push after each meaningful commit.

## Structure

- `src/content/site.ts` — single source of truth for all copy, links, work items, and case-study content. `WorkItem` (`real: true` items need `slug`, `description`, `live`, `github`, `shots: Shot[]`) and `CaseStudy` (`problem`/`architecture`/`decisions`/`outcome`) types live here too.
- `src/app/page.tsx` — single-page layout: header, hero (name + tagline + headshot photo), specialization/about, work grid, contact.
- `src/app/work/[slug]/page.tsx` — case-study detail route (real Next.js routing, not a client-side view-state toggle like the original Claude Design mockup used — URL-addressable pages are the better fit for this framework). Renders `caseStudies[slug]` from `site.ts`; 404s via `notFound()` for unknown slugs. `params` is a Promise in this Next.js version — must `await` it.
- `src/components/SiteHeader.tsx` — client component; sticky header, shows Work/About/Contact nav on `/` and a "← Back to work" link on any other route (via `usePathname`), border fades in after 8px of scroll.
- `src/components/ProjectCard.tsx` — client component. Real work items auto-cycle through `shots` every 3.5s with an opacity crossfade; images use `next/image` with `fill` + **`object-contain`** (not `object-cover` — screenshots have wildly different aspect ratios, including portrait mobile shots, and must never be cropped). Non-real (`real: false`) items render as dashed-border "open project slot" placeholders.
- `public/images/work/<slug>/` — real screenshots per project. **Filenames must change whenever the underlying screenshot content changes** — replacing bytes at an unchanged filename left stale images being served (both browser cache and Next's image optimizer cache key on the URL); the fix that worked was renaming files, not just overwriting them. Current convention: ordered prefixes like `01-home.png`.
- `public/images/headshot.webp` — real photo, extracted from a Claude Design `.image-slots.state.json` sidecar (base64-encoded) during the v2 import.

## Current work items (update this list as new case studies are added)

- **Elysian Travel Group** (`elysian-travel-group`) — 5 real screenshots, no public GitHub (private client repo). Case study sourced from `../Project Summaries/Elysian Travel Group/Elysian Travel Group.md`.
- **Spendo** (`spendo`) — 5 real screenshots (4 desktop: home/cashflow/budgets/account + 1 mobile composite), real public GitHub link. Case study sourced from `../Project Summaries/Spendo/Spendo.md`.
- **Productivy** (`productivy`) — real public GitHub link, no screenshots yet (`shots: []` — the card renders fine without them, just an empty image tile; drop real ones in and it'll pick them up). Case study sourced from `../Project Summaries/Productivy/Productivy.md`.
- 2 open placeholder slots remain (PFE or Uniclub, once one is far enough along — see personal-projects memory).

## Design tokens (v2)

Defined in `src/app/globals.css` as CSS vars + Tailwind `@theme inline` tokens, all warm-neutral `oklch(L% 0.005 90)`: `--background` 98%, `--foreground` 20%, `--ink-70`/`--ink-60`/`--muted`/`--label`/`--faint` for text at descending emphasis, `--border`/`--border-strong`/`--dash` for dividers, `--tile`/`--tile-alt` for placeholder stripe fills. Fonts: Bricolage Grotesque (`--font-bricolage`, display/headings) + Work Sans (`--font-work-sans`, body), both via `next/font/google`. No dark-mode variant — this is a single fixed warm-light palette, deliberately.

## Progress Tracking & GitHub Hygiene (standing rules — see `../CLAUDE.md` / memory for the full convention)

- Keep `../Project Summaries/Portfolio/Portfolio.md` (+ PDF) updated once this is far enough along to be worth a polished writeup — note the folder-per-project convention (`Project Summaries/<Name>/<Name>.md`, matching `Spendo/Spendo.md`).
- Commit and push after each meaningful change (see Stack above for remote).
