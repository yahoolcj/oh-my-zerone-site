---
title: Evolution
description: omz authorized self-evolution model
locale: en
order: 4
---

## Self-evolution mechanism

Steadier over time: memory, knowledge, and skills grow within authorization boundaries.

The Agent owns the project long-term. It may spot evolution opportunities, gather evidence, and file proposals. Nothing is persisted without authorization or your confirmation.

Not a one-off AI contractor. Be the lobster in your project: claws for Skills constraints, shell for permission boundaries, growth through approved evolution.

## Why evolve

AI should not start from zero every time. The Agent owns the project long-term. Keep conventions, context, and habits so the next task reuses them.

The lobster stays in the repo, learns team language, and gets steadier over time. omz does not let Agents rewrite everything freely.

## How it works

Evolution is not free-form self-editing. Spot opportunities, file proposals, get your approval, then persist.

1. **Spot opportunities**: Find conventions, facts, or capability gaps worth keeping long-term.
2. **File proposals**: Gather evidence, sources, and target paths into a confirmable proposal.
3. **You confirm**: Knowledge, skills, and project-level rules need your OK. Memory follows the authorized boundary in `evolution.md`.
4. **Persist assets**: After confirmation, write to memory, knowledge, skills, rules, or evolution-log.

Spot memory, knowledge, skills, rules, and docs worth keeping. Follow the authorization boundary in `docs/agent/evolution.md`.

## What to watch for

Unverified guesses are not facts. Knowledge, skills, and rules need your OK. Never persist secrets or private data.

### Authorization boundary

**Can run autonomously**

- Spot evolution opportunities in each conversation
- Organize evolution proposals
- Write, update, or retire memory autonomously
- Log brief evolution actions after memory is persisted

**Needs your confirmation**

- Add or update `docs/knowledge/`
- Create or update skills
- Change long-term rules, workflows, `AGENTS.md`, or other project-level constraints

**Never allowed**

- Create or modify knowledge or skill files before confirmation
- Write unverified guesses as project facts
- Turn one-off task details into long-term rules
- Delete or override historical rules to expand permissions
- Record keys, accounts, tokens, or private data

## Evolution trigger nodes

1. Long-lived new information after a deep discussion with you
2. You share background, collaboration principles, or long-term preferences during work
3. You correct or contradict existing Agent memory
4. Explicit markers such as `[evolution-knowledge]`, `[evolution-skill]`, or `[evolution-memory]`
5. Current capabilities cannot reliably handle a repeating task type
6. You repeatedly correct the same skill output

## Where evolution lands

### Memory layer

File: `docs/agent/memory.md`

Store authorized preferences, project conventions, and collaboration rules for steadier follow-up work.

### Knowledge base

Directory: `docs/knowledge/`

Accumulate long-lived project facts and context to cut repeated explanations and guesswork.

### Skills & Rules

Directories: `skills/`, `rules/`

Spot skills, rules, and docs worth keeping, then persist within the `docs/agent/evolution.md` authorization boundary.

## Memory vs Knowledge

Memory stores short, precise, long-lived execution guidance. Knowledge stores project facts and domain context that get referenced repeatedly. Knowledge updates are heavier and require user confirmation.

## Memory conflict handling

When your current input conflicts with old memory, the Agent does not overwrite automatically.

It must list:

- The old memory
- Your new statement
- The conflict point

Then ask which is correct. Before you confirm, it does not update memory, write conflicting content, or log the evolution.

After you confirm, it updates `memory.md` and writes to `evolution-log.md`.

## Further reading

Full authorization rules, proposal formats, and logging specs live in `docs/agent/evolution.md` inside the repository.
