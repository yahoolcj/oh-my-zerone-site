---
title: DSH 插件
titleEn: DSH Plugin
description: oh-my-zerone 的 DeepSeek Harness 插件（ZERONE 模式 + 16 技能）
locale: zh
order: 5
---

## DeepSeek Harness 插件

omz 以 DSH 内置插件形态交付：`@vigalai/dsh-plugin-zerone`。安装后获得 **ZERONE 模式**（agent preset）—— 包含 DSH 标准模式全部能力，之上叠加 OMZ 人格（自主进化、SDD 工作流、进化授权、用户确认、review 规范），以及 16 个内嵌技能。

技能经 `ctx.skills.register()` 全局注册（运行时 rank 250），模型与用户命令双入口；机制规则内置到模式，仓库不再需要拷贝 `AGENTS.md` 或机制文档。

## 特点

- **零落盘内置**：16 个技能内嵌于插件包，不向用户系统写入任何技能文件。
- **可选模式**：ZERONE 是新增模式，不改变默认设置；空白会话可切换。
- **标准能力全集**：ZERONE 包含 DSH 标准模式全部能力（工具、plan mode、compaction、delegation、workflow 等）。
- **项目级机制**：进化授权 / [用户确认] / review 以对话级流程纪律落地，DSH 沙箱与审批栈兜底。

## 快速安装

### Agent 安装

复制下方内容输入到 dsh 中发送：

```sh
请你仔细阅读 https://github.com/yahoolcj/dsh-plugin-zerone/blob/main/install.md，并且安装这个插件。
```

### dsh-market 安装

打开 DSH 的 **Plugin Market**，搜索 **yahoolcj/dsh-plugin-zerone**，一键安装。

## 安装效果预览

![ZERONE 模式](/images/dsh-plugin/zerone-mode.png)

*模式列表出现 · ZERONE（可选模式，不改默认设置）。*

![ZERONE persona](/images/dsh-plugin/persona.png)

*切到 ZERONE 后，Agent 获得 OMZ 人格：自主进化、SDD 工作流、进化授权、用户确认。*

![进化申请与用户确认](/images/dsh-plugin/evolution-approval.png)

*发现可沉淀资产或文档与代码不一致时，Agent 主动发起 `[进化申请-*]`，列出问题与 A/B/C 选项等你确认 —— 未确认前不创建、不修改任何文件。*

## ZERONE 模式

- **定位**：标准模式的完整副本 + OMZ 人格。常用于需要在 DSH 环境里严格走 SDD 工作流、且由 Agent 全周期负责的场景。
- **persona**：内置 AGENTS.md 全文（角色、工作流指引、权限红线、进化三档边界、[用户确认]流程、数据资产引导）。
- **机制细节**：完整流程步骤表（fe-dev / fe-locate / fe-explain）、review 输出模板、进化申请格式、编码规则由 `omz-governance` 技能按需承载，红线常驻 persona。

## 内置技能

| 技能 | 用途 |
|---|---|
| grill-with-docs / grill-me / grill-from-draft / grill-me-ui | 需求与方案澄清 |
| to-plan / to-prd / to-issues | 计划、PRD 沉淀与 issue 切片 |
| to-coding / to-locate / to-explain | 编码开发、问题定位、代码解释 |
| to-test / to-quality-review / to-review | 测试回收、质量质检、审查 |
| to-commit | commit / PR 收尾 |
| setup-omz | 生成 / 补全 `docs/agent/introduction.md` |
| omz-governance | 机制流程细节（工作流 / 审查 / 进化 / 编码规则） |

技能在命令面板以 `/grill-with-docs`、`/to-prd`、`/to-coding` 等命令出现（user-invocable），同时进入模型技能目录（model-invocable）。

## 项目级机制

- **数据资产**：`docs/agent/memory.md`、`docs/knowledge/`、`docs/agent/evolution-log.md`、`.PRD/`、`.ISSUES/` 留在项目仓库，ZERONE 模式下首次进入新仓库自动创建。
- **机制规则内置**：仓库无需放置 `AGENTS.md` 或机制文档，persona 为唯一权威。
- **进化授权**：记忆可自主落盘；知识库 / skill / 规则需按 `omz-governance` 中的格式发起 `[进化申请-*]` 并经用户对话确认；危险操作由 DSH 沙箱与审批栈兜底。

## 与编辑器形态对比

| 维度 | 编辑器形态（codex / cursor / trae） | DSH 插件形态（ZERONE） |
|---|---|---|
| 安装 | 拷贝 AGENTS.md / docs/agent / rules / skills 到仓库 | `dsh plugin` 装包（或捆绑），零仓库拷贝 |
| 机制规则 | 仓库内 `docs/agent/*` | 内置到模式 persona + omz-governance 技能 |
| 仓库数据资产 | memory.md、knowledge/、evolution-log.md、.PRD/、.ISSUES/ | 相同（ZERONE 下首次进入自动创建） |
| 技能 | `skills/` 目录按仓库安装 | 插件内嵌，全局注册 |

## 资源

- npm：<https://www.npmjs.com/package/@vigalai/dsh-plugin-zerone>
- 仓库：<https://github.com/yahoolcj/dsh-plugin-zerone>
- 市场收录：[awesome-dsh-plugin PR #4037](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/pull/4037)
