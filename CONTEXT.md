# OMZ 套件 × DeepSeek Harness

本上下文描述 oh-my-zerone（OMZ）AI Coding 套件，以及它作为 DeepSeek Harness（DSH）内置插件能力的形式与边界。

## 语言术语

**OMZ（oh-my-zerone）**：
基于 SDD（规格驱动开发）范式的前端 AI Coding 工作流套件，由 AGENTS.md、docs/agent、rules、skills 组成；在本项目中以"内置能力"形式接入 DSH。
_避免使用_：zerone、omz 框架

**DSH（DeepSeek Harness）**：
Cordis 插件架构的 AI 编码平台；profile 由插件组合包与 patch 层叠加而成，模式（Agent Preset）与技能（Skill）是其原生扩展点。
_避免使用_：dsh-desktop（仅是其 Electron 宿主壳）

**插件（Cordis Plugin）**：
DSH 的能力单元，npm 包形态（导出 name / inject / Config / apply），安装进 profile 后向运行平台注册服务、技能、命令或提示词段。本项目插件以 npm 包独立分发（@vigalai/dsh-plugin-zerone），同时捆绑进 dsh-desktop 发行。
_避免使用_：模式、扩展

**模式（Agent Preset）**：
DSH 中可选的 Agent 组合形态：0.2.x 起由 bundle patch 内的一行 `@deepseek-ai/dsh-agent-preset` 声明描述（`id` / `name` / `description` / `order` / `plugins`），随插件包安装进 profile 即出现；本项目中的 ZERONE 模式随插件包内置（`presets/zerone.patch.yml`），通过 persona 注入 AGENTS.md 内容。
_避免使用_：profile、插件、mode 目录

**ZERONE 模式**：
OMZ 的 DSH 模式名（preset id：zerone）。包含 DSH 标准模式的全部能力，在此之上叠加 OMZ 人格（自主进化 + SDD 工作流 + 进化授权 + 用户确认机制）与机制提示段；为可选模式，不改变默认设置。
_避免使用_：omz 模式

**技能（Skill）**：
模型或用户可调用的指令单元；本项目技能内嵌于插件包，经 ctx.skills.register() 全局注册（运行时 rank 250），对全部会话可见，用户系统零落盘。OMZ 插件内置 16 个技能：15 个 SDD 工作流技能（grill-with-docs、grill-me、grill-from-draft、grill-me-ui、to-plan、to-prd、to-issues、to-coding、to-locate、to-explain、to-test、to-quality-review、to-review、to-commit、setup-omz）+ 机制技能 omz-governance；排除 image-to-context、to-ui、frontend-design、caveman。
_避免使用_：命令、脚本

**项目级机制（Project-level Mechanism）**：
OMZ 的长期记忆（docs/agent/memory.md）、知识库（docs/knowledge/）、进化日志（docs/agent/evolution-log.md）、PRD（.PRD/）、issue（.ISSUES/）等按项目仓库存放的数据资产；机制规则（进化授权、用户确认、review 规范）随模式内置。
_避免使用_：全局记忆

## 测试术语

**红绿灯清单（Red-Green Checklist）**：
嵌入 issue 文档的验收测试清单，每条用例同时记录 red 阶段的失败证据与 green 阶段的当前灯（绿 / 黄 / 红）。
_避免使用_：测试报告、测试计划

**红证据（Red Evidence）**：
用例在实现落地之前执行所得的失败证据，包含执行器、时间、日志与截图路径；缺失红证据的用例作废，不得转绿。
_避免使用_：失败日志、预期红

**端到端验收 issue（End-to-end Acceptance Issue）**：
承载跨 issue 主干流程红绿灯清单的收口 issue，其绿灯代表整份 PRD 的主干流程通过。
_避免使用_：发布单、验收单

## 关系

- 一个 **OMZ 插件** 携带 **ZERONE 模式（Agent Preset）** 与全部 **技能**
- **ZERONE 模式** 通过 **persona** 注入 **AGENTS.md** 内容
- **技能** 经 **ctx.skills.register()** 全局注册，模型视角等价于全局 skill 目录
- **项目级机制** 的数据文件留在项目仓库，机制规则随模式内置
- 一份 **issue** 携带一份 **红绿灯清单**；跨 issue 的主干流程由 **端到端验收 issue** 承载
- 每条用例由一个 **红证据** 与当前灯组成；黄灯表示待人工确认，不得冒充绿灯
- **进化授权 / [用户确认] / review** 以对话级流程纪律落地：红线常驻 persona，流程细节由 omz-governance 技能承载，危险写入由 DSH 沙箱与审批栈兜底

## 已标记的歧义

- "全局 skill 目录"：指模型视角的全局可见性；物理上技能内嵌于插件包，不落盘用户系统 —— 已解决：采用内嵌注册（A 方案）。
- "AGENTS.md 内置"：指写入模式 persona，而非逐仓库拷贝 —— 已解决：内置到 ZERONE 模式。
- "机制文档承载"：AGENTS.md 全文 + 机制核心红线常驻 persona，完整流程细节（workflow 步骤表、review 模板、进化申请格式）做成运行时 skill（omz-governance）按需加载 —— 已解决：混合内置（A 方案）。
- "进化授权强制力"：不设技术拦截，采用对话级流程纪律 + DSH 沙箱/审批兜底 —— 已解决：轻绑定（A 方案）。
- "ZERONE 与标准模式的关系"：ZERONE 包含标准模式全部能力，之上叠加 OMZ 人格与机制 —— 已解决：标准副本 + 增量。
