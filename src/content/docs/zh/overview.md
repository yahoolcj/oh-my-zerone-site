---
title: 概述
titleEn: Overview
description: oh-my-zerone 是什么、有什么用
locale: zh
order: 1
---

## 什么是 oh-my-zerone？

`oh-my-zerone`（简称 `omz`）是一套以 SDD（规格驱动开发）范式设计的 **Harness Engineering** 套件，面向前端团队的 AI Coding 协作流程。

它的核心目标不是绑定某一个 AI 编辑器，而是把「需求澄清、计划、PRD、issue、编码、测试、质量检查、review、commit / PR」这些协作环节拆成职责清晰、可组合、可追踪的规则与技能。

## 有什么用？

帮助前端同事更稳定、快速地使用 AI Coding 完成需求任务。

在没有流程约束时，Agent 容易直接从一句需求跳到代码实现，导致范围不清、术语不一致、验收口径模糊。`omz` 的目标是把这些协作环节标准化，让 Agent 按项目语言、项目文档和既定工作流推进任务。

适合解决的问题包括：

- 需求描述比较散，需要先被整理成结构化规格
- 组件或页面改动涉及 API、交互、文档、类型、测试等多个环节
- 团队希望 AI Agent 不跳步骤、不越权、不随意重构
- 开发前需要明确 TODO，开发后需要逐项验收

## 名词说明

- **SDD（Specification Driven Development）**：规格驱动开发。先把需求、边界、验收标准写清楚，再进入编码。
- **ADR（Architecture Decision Record）**：架构决策记录，用于回溯重要技术方案。
- **AFK（Away From Keyboard）**：可自动执行，AFK 值越高越适合 Agent 独立推进。
- **HITL（Human In The Loop）**：必须有人参与确认或验收的环节。
