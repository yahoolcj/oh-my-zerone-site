---
title: Structure
description: omz package directories and file responsibilities
locale: en
order: 3
---

## Root entry files {#root-entry}

`AGENTS.md` is the project-level Agent entry. It defines role, permissions, workflow, and available skills.

`CONTEXT.md` and `CONTEXT-MAP.md` provide project context and navigation maps so Agents understand project language faster.

## Agent Docs {#agent-docs}

`docs/agent/` stores project-level instructions Agents read during execution:

- `introduction.md`: technical structure map
- `permission.md`: permission boundaries
- `workflow.md`: SDD workflow rules
- `review.md`: review checklist
- `evolution.md`: evolution authorization
- `memory.md` / `evolution-log.md`: long-term memory and evolution logs

## Knowledge {#knowledge}

`docs/knowledge/` stores reusable project facts, domain background, and historical decisions. Updates require confirmation under the evolution mechanism.

## Rules {#rules}

`rules/` holds long-term global constraints such as `coding.mdc`. Place them under the editor-specific directory (`.cursor/rules/` or `.trae/rules/`), not the project root.

## Skills {#skills}

`skills/` contains independently invocable stage units. Each folder has a `SKILL.md`. Install only what you need, such as `skills/to-coding/` or `skills/to-prd/`.
