# ISSUE-006 首页编辑器兼容与 Skills 目录预览

## 父单

.PRD/1.0.0.md — oh-my-zerone 门户网站 v1.0.0

## 要做什么

首页增加编辑器 logo 墙（真实 SVG logo）和 Skills 卡片网格（自动扫描 `.omz/skills/`），卡片链至 `/docs/skills/[slug]`。

## 验收标准

- [ ] 编辑器区块展示 Cursor / Claude Code / Codex / Trae 等真实 logo
- [ ] Skills 卡片网格展示 skill 名 + 一句话描述
- [ ] 卡片 hover 有视觉反馈，点击跳转至详情页路由
- [ ] logo 墙位于 Hero 下方独立区块（非 Hero 内）

## 阻塞于

- ISSUE-002
- ISSUE-005

## 类型

AFK

## 覆盖用户故事

- 用户故事 3
