# DSH 平台机制与 OMZ 映射

@group:oh-my-zerone
@version:2.0.0

平台事实，来源：DSH 0.2.0-rc.2 运行时（`app.asar` 内 `@deepseek-ai/*` 包与组合文件）+ 已发布 npm 包（`dsh-agent-preset` / `dsh-persona` / `dsh-web-app` 的 `presets/*.patch.yml`）。

## DSH 扩展点（0.2.0-rc.2）

- **模式 = Agent Preset 声明行**：preset 不再是目录，而是**随 bundle patch 装进 profile 的一行声明** —— `id: preset-<id>` / `name: '@deepseek-ai/dsh-agent-preset'` / `config: { id, name, description, order, plugins }`，`plugins` 就是原先 `agent.cordis.yml` 的插件列表。`plugin` 行的 `id` 用于 Loader 定点改写，`config.id` 才是会话记录的 preset 身份。旧的 `$DSH_HOME/.agent-presets/<id>/` 目录与 `agentPresets.roots` 在 0.2.0 已不再被读取。
- **版本兼容门禁**：profile 导入插件前，DSH 把插件 `peerDependencies` 中每个 `@deepseek-ai/dsh` / `@deepseek-ai/dsh-*` 的区间与 `getDshRuntimeVersion()` 的唯一运行时版本逐条比对（预发布版本参与区间匹配）；任一不匹配即拒绝导入/安装，提示“与 DSH 不兼容（要求 …）”。未声明 DSH peer 时不施加约束，区间非法视为不兼容。精确版本豁免写在 profile 自己的 `compatibility.json`（`dsh plugin allow-version`），不随插件或 DSH 升级继承。
- **技能（Skill）**：格式为 `<name>/SKILL.md` 或 `<name>.md`，frontmatter 必填 `name`（kebab-case）与 `description`，可选 `user-invocable` / `disable-model-invocation` / `whenToUse`。发现根（rank）：项目 `.dsh/skills`(100) → 项目 `.agents/skills`(200) → 自定义(300) → `$DSH_HOME/skills`(400) → `~/.agents/skills`(500)。`ctx.skills.register()` 编程注册运行时技能（rank 250：覆盖用户根，项目根可覆盖它）；`userInvocable`/`modelInvocable` 控制命令面板与模型目录。
- **插件（Cordis Plugin）**：npm 包形态（导出 name / inject / Config / apply），`dsh.bundle.patch` 可声明**一个或多个** patch 文件（数组形式），host 层行注册的技能/服务落入全局层，对所有模式可见。
- **工作区指令**：`dsh-agent-instructions` 自动读仓库 `AGENTS.md`/`CLAUDE.md`（沿 `.git` 祖先链，含 `*.local.md` overlay），`$DSH_HOME/AGENTS.md` 为全局指令。
- **沙箱**：会话级模式 `read-only` / `workspace-write` / `danger-full-access`，非路径级粒度。
- **审批**：`dsh-user-approval` 工具调用级一次性授权（allowed-once），沙箱拒绝后升级触发；`fs/write-intent`、`fs/edit-intent` waterfall 可拦截 write/edit 目标（仅这两个工具，bash 可绕过）。
- **提示词段**：`dsh-persona` 通过 `ctx.systemPrompt.section` 注册 persona（scope 层，须在 preset 组合内挂载，host 层注册会冲突）。0.2.x 的 Config 为 `{ prefix, suffix?, complete?, includeRuntimeContext? }`：`prefix` 渲染为 `deployment:persona-prefix` 段，`suffix` 渲染在首方指导之后；0.1.x 的 `text` 字段已不生效。

## OMZ 映射

- OMZ 技能 → 插件 `ctx.skills.register()` 全局注册（15 个 SDD 技能 + omz-governance），host 行由 `cordis.patch.yml` 挂载。
- ZERONE 模式 → `presets/zerone.patch.yml` 的 `@deepseek-ai/dsh-agent-preset` 声明行（standard 能力集 + OMZ persona），随包安装即出现。
- AGENTS.md → ZERONE persona 全文内置（不逐仓库拷贝），承载在 `dsh-persona.config.prefix`。
- 机制文档（workflow/permission/evolution/review）→ 红线常驻 persona + omz-governance 技能按需加载。
- 项目级数据（memory/knowledge/evolution-log/.PRD/.ISSUES）→ 项目仓库内由模型首次使用时自动创建。
- [用户确认] → `ask_user_question` 对话级 + DSH 审批栈兜底。

## 实施注意

- 插件必须声明与当前运行时的 `@deepseek-ai/dsh-*` peer（**精确版本**，如 `0.2.0-rc.2`），否则安装期即被拒绝；`@deepseek-ai/cordis` / `@deepseek-ai/schemastery` 不在该门禁范围内，正常写区间即可。
- preset 组合中的服务行必须位于 `isolate` realm 的 group 内，否则 root realm 发布会跨会话冲突。
- preset 里引用的包名必须存在于当前 DSH 线（对照 `@deepseek-ai/dsh-agent-preset` 自带技能 `cordis-composition-reference/references/packages.md`）：0.2.0 用 `@deepseek-ai/dsh-workflow-ptc`，0.1.x 的 `@deepseek-ai/dsh-workflow-worker-thread` 已退役。
- patch 内的 `plugins` 是嵌套结构，YAML 缩进比旧 `agent.cordis.yml` 深两层；persona 文本放进 `prefix`/`suffix` 字段。
