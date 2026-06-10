---
title: 套件结构
titleEn: Structure
description: omz 包目录与文件职责说明
locale: zh
order: 3
---

## 根目录入口 {#root-entry}

`AGENTS.md` 是项目级 Agent 协作入口，定义角色、权限、工作流与可用 skills。

`CONTEXT.md` 与 `CONTEXT-MAP.md` 提供项目上下文与定位地图，帮助 Agent 快速理解项目语言。

## Agent Docs {#agent-docs}

`docs/agent/` 保存 Agent 执行任务时需要读取的项目级说明：

- `introduction.md`：项目技术结构地图
- `permission.md`：权限边界
- `workflow.md`：SDD 工作流规则
- `review.md`：review 规范
- `evolution.md`：自主进化授权机制
- `memory.md` / `evolution-log.md`：长期记忆与进化记录

## Knowledge {#knowledge}

`docs/knowledge/` 沉淀可复用的项目事实、领域背景与历史决策说明。新增或更新前需按进化机制获得确认。

## Rules {#rules}

`rules/` 存放长期全局强约束，如 `coding.mdc`。应放在编辑器专属目录（`.cursor/rules/` 或 `.trae/rules/`），而非项目根目录。

## Skills {#skills}

`skills/` 是可独立触发的工作单元，每个目录包含一个 `SKILL.md`。按需在编辑器 skills 目录安装，例如 `skills/to-coding/`、`skills/to-prd/`。
