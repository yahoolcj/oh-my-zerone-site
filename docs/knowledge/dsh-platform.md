# DSH 平台机制与 OMZ 映射

@group:oh-my-zerone
@version:1.0.0

平台事实，来源：DSH 安装目录 `node_modules/@deepseek-ai/*` 的 README 与组合文件（`config/agent-presets/*/agent.cordis.yml` 等）。

## DSH 扩展点

- **模式 = Agent Preset**：一个目录含 `agent.cordis.yml`（插件组合）+ `preset.yml`（展示元数据：name/description/order）+ 可选 `skills/`。位于部署 `config/agent-presets/`（随附根目录）或 `$DSH_HOME/.agent-presets/<id>/`（用户根，`includeUserRoot: true` 默认追加）。`agentPresets.roots` 可指向包内目录实现"随包内置"。仅空白会话可切换模式；默认由 `agent-presets.default` 决定（用户设置，插件不擅自改）。
- **技能（Skill）**：格式为 `<name>/SKILL.md` 或 `<name>.md`，frontmatter 必填 `name`（kebab-case）与 `description`，可选 `user-invocable` / `disable-model-invocation` / `whenToUse`。发现根（rank）：项目 `.dsh/skills`(100) → 项目 `.agents/skills`(200) → 自定义(300) → `$DSH_HOME/skills`(400) → `~/.agents/skills`(500)。`ctx.skills.register()` 编程注册运行时技能（rank 250：覆盖用户根，项目根可覆盖它）；`userInvocable`/`modelInvocable` 控制命令面板与模型目录。
- **插件（Cordis Plugin）**：npm 包形态（导出 name / inject / Config / apply），host 层行注册的技能/服务落入全局层，对所有模式可见。
- **工作区指令**：`dsh-agent-instructions` 自动读仓库 `AGENTS.md`/`CLAUDE.md`（沿 `.git` 祖先链，含 `*.local.md` overlay），`$DSH_HOME/AGENTS.md` 为全局指令。
- **沙箱**：会话级模式 `read-only` / `workspace-write` / `danger-full-access`，非路径级粒度。
- **审批**：`dsh-user-approval` 工具调用级一次性授权（allowed-once），沙箱拒绝后升级触发；`fs/write-intent`、`fs/edit-intent` waterfall 可拦截 write/edit 目标（仅这两个工具，bash 可绕过）。
- **提示词段**：`dsh-persona` 通过 `ctx.systemPrompt.section` 注册 persona（scope 层，须在 preset 组合内挂载，host 层注册会冲突）。

## OMZ 映射

- OMZ 技能 → 插件 `ctx.skills.register()` 全局注册（15 个 SDD 技能 + omz-governance）。
- AGENTS.md → ZERONE persona 全文内置（不逐仓库拷贝）。
- 机制文档（workflow/permission/evolution/review）→ 红线常驻 persona + omz-governance 技能按需加载。
- 项目级数据（memory/knowledge/evolution-log/.PRD/.ISSUES）→ 项目仓库内由模型首次使用时自动创建。
- [用户确认] → `ask_user_question` 对话级 + DSH 审批栈兜底。

## 实施注意

- 插件包内 `config/agent-presets/zerone/` 的 preset 行解析：包名从 host 组合解析，相对路径从 preset 自身目录解析（自带的资源文件随包迁移）。
- preset 组合中的服务行必须位于 `isolate` realm 的 group 内，否则 root realm 发布会跨会话冲突。
