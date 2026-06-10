---
title: Install
description: How to install and configure omz
locale: en
order: 2
---

## 1. Install zerone/cli

Requires version 0.6.0 or above. Use your team's internal npm registry:

```bash
npm install -g @zerone/cli
```

## 2. Setup omz

```powershell
zerone setup omz
```

## 3. Configure omz

1. Place `AGENTS.md` in your project root
2. Copy `docs/agent/` into the project
3. Copy `rules/` into your editor rules directory
4. Install needed `skills/` into your editor skills directory
5. Invoke skills explicitly, e.g. `/to-prd`, `/to-coding`

## 4. First-time setup

```text
/setup-omz
```

`setup-omz` scans the project stack and generates `docs/agent/introduction.md`. It does not write business knowledge or run project scripts.

## Recommended minimal set

```text
AGENTS.md
docs/agent/permission.md
docs/agent/workflow.md
docs/agent/review.md
rules/coding.mdc
skills/setup-omz
skills/grill-with-docs
skills/grill-me-ui
skills/to-prd
skills/to-coding
skills/to-test
skills/to-review
skills/to-commit
```
