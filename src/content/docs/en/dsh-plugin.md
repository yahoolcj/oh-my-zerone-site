---
title: DSH Plugin
description: oh-my-zerone as a DeepSeek Harness plugin (ZERONE preset + 16 skills)
locale: en
order: 5
---

## DeepSeek Harness plugin

omz ships as a DSH built-in plugin: `@vigalai/dsh-plugin-zerone`. Installing it gives you the **ZERONE mode** (an agent preset) — the full standard DSH preset plus the OMZ persona (self-evolving, SDD workflow, evolution authorization, user confirmation, review), with 16 embedded skills.

Skills register globally via `ctx.skills.register()` (runtime rank 250) for both the model catalog and user commands; mechanism rules are built into the mode, so a repo no longer needs a copied `AGENTS.md` or mechanism docs.

## Highlights

- **Zero install footprint**: the 16 skills are embedded in the package — nothing is written into user skill directories.
- **Optional mode**: ZERONE is additive, it leaves the default mode untouched; switch on a blank session.
- **Full standard capability**: ZERONE keeps the entire standard DSH preset (tools, plan mode, compaction, delegation, workflow).
- **Project-level mechanism**: evolution authorization / [user confirm] / review land as conversational discipline, with the DSH sandbox and approval stack as backstop.

## Quick install

### Agent install

Copy the following into your dsh and send it:

```sh
Please read https://github.com/yahoolcj/dsh-plugin-zerone/blob/main/install.md and install this plugin.
```

### dsh-market install

Open DSH's **Plugin Market**, search **yahoolcj/dsh-plugin-zerone**, and one-click install.

## Install preview

![ZERONE mode](/images/dsh-plugin/zerone-mode.png)

*ZERONE appears in the mode list (additive — it does not change the default).*

![ZERONE persona](/images/dsh-plugin/persona.png)

*Switching to ZERONE gives the Agent the OMZ persona: self-evolving, SDD workflow, evolution authorization, user confirmation.*

![Evolution proposal and confirmation](/images/dsh-plugin/evolution-approval.png)

*When it finds persistable assets or docs drifting from code, the Agent files an `[进化申请-*]` proposal with A/B/C options and waits for your confirmation — nothing is created or modified before you approve.*

## ZERONE mode

- **Positioning**: a full copy of the standard preset plus the OMZ persona — for teams that want the Agent to run the SDD workflow and own the project long-term inside DSH.
- **Persona**: embeds the AGENTS.md content (role, workflow guidance, permission red lines, three-tier evolution boundary, [user confirm] flow, data-asset guidance).
- **Mechanism details**: the full step tables (fe-dev / fe-locate / fe-explain), review output template, evolution proposal format, and coding rules are carried by the `omz-governance` skill on demand; the red lines stay resident in the persona.

## Built-in skills

| Skill | Purpose |
|---|---|
| grill-with-docs / grill-me / grill-from-draft / grill-me-ui | Requirement and design clarification |
| to-plan / to-prd / to-issues | Plan, PRD, and issue slicing |
| to-coding / to-locate / to-explain | Coding, problem locating, code explanation |
| to-test / to-quality-review / to-review | Test acceptance, quality check, review |
| to-commit | Commit / PR wrap-up |
| setup-omz | Generate / fill `docs/agent/introduction.md` |
| omz-governance | Mechanism details (workflow / review / evolution / coding rules) |

Skills appear as command-palette commands (`/grill-with-docs`, `/to-prd`, `/to-coding`, … — user-invocable) and in the model skill catalog (model-invocable).

## Project-level mechanism

- **Data assets**: `docs/agent/memory.md`, `docs/knowledge/`, `docs/agent/evolution-log.md`, `.PRD/`, `.ISSUES/` stay in the project repo and are created automatically on first entry in ZERONE mode.
- **Rules built in**: the repo needs no `AGENTS.md` or mechanism docs; the persona is the single authority.
- **Evolution authorization**: memory persists autonomously; knowledge / skill / rule require an `[进化申请-*]` proposal (format in `omz-governance`) and your conversation confirmation; risky operations are backed by the DSH sandbox and approval stack.

## Compared with the editor form

| Dimension | Editor form (codex / cursor / trae) | DSH plugin form (ZERONE) |
|---|---|---|
| Install | Copy AGENTS.md / docs/agent / rules / skills to the repo | `dsh plugin` add (or bundled), zero repo copies |
| Mechanism rules | Repo `docs/agent/*` | Built into mode persona + omz-governance skill |
| Repo data assets | memory.md, knowledge/, evolution-log.md, .PRD/, .ISSUES/ | Same (auto-created on first entry in ZERONE) |
| Skills | `skills/` installed per repo | Embedded, registered globally |

## Resources

- npm: <https://www.npmjs.com/package/@vigalai/dsh-plugin-zerone>
- Repo: <https://github.com/yahoolcj/dsh-plugin-zerone>
- Market: [awesome-dsh-plugin PR #4037](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/pull/4037)
