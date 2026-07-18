---
name: Portfolio case study source files
description: Which projects have full HTML case study files in attached_assets, and which don't — avoids confidently claiming data was never there.
---

# Portfolio case study source files

**Why:** Missed content-maps_1782984165226.html (781 lines) for two sessions, insisting no data existed. Always check attached_assets before claiming a project never had richer content.

## Projects with HTML case study files in attached_assets

| Project | File(s) | Status |
|---|---|---|
| Content Maps | content-maps_1782984165226.html (most recent), several older versions | **Fully ported** into sections format |
| Product Taxonomy | terminology_1784283027518.html (most recent), older versions | **Fully ported** into sections format |
| Repayments / LazyPay | Repayments___Mohana_Das_1783248375811.html (+ 3 versions) | **Already in sections format** |

## Projects WITHOUT separate HTML case study files

| Project | Source of truth |
|---|---|
| Content Playbook | Only challenge + whatIDid in portfolio.ts — original data |
| In-App Chat (chatbot) | sections array in portfolio.ts matches Assets/chatbot/README.md |
| Expense Management | sections array in portfolio.ts matches Assets/expense-mgmt/README.md |
| UX Writing for LazyCard | sections array in portfolio.ts matches Assets/lazycard/README.md |

## Asset READMEs

The Assets_1779773069799.zip contains README.md files for chatbot, expense-mgmt, lazycard, and repayments. These describe the exact page structure (sections, image placement, alt text). The current portfolio.ts sections for those projects already match.

**How to apply:** Any time the user says data was lost for a project, first unzip Assets zip and read README files, AND scan attached_assets for HTML/MD files with that project slug in the name. Only after checking both sources conclude no data exists.
