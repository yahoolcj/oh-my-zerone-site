# 0001 OMZ 以 Cordis 插件 + ZERONE Agent Preset 接入 DSH

OMZ（oh-my-zerone）套件以 cordis 插件包（`@vigalai/dsh-plugin-zerone`）接入 DeepSeek Harness：16 个技能内嵌于插件包，经 `ctx.skills.register()` 全局注册（运行时 rank 250，模型与用户命令双入口），实现"全局可见 + 零落盘用户系统"；ZERONE 模式（agent preset）随包内置，在 `presets/zerone.patch.yml` 里以 **`@deepseek-ai/dsh-agent-preset` 声明行**交付（DSH 0.2.x 机制：preset 由 bundle patch 声明，不再由目录 + `agent-presets.roots` 发现），是标准模式完整副本叠加 OMZ persona（AGENTS.md 全文 + 机制红线）与机制提示段，为可选模式、不改变默认设置。进化授权 / [用户确认] / review 机制走对话级流程纪律（红线常驻 persona，`omz-governance` 运行时技能承载流程细节），由 DSH 沙箱与审批栈兜底，不设技术拦截。仓库只保留数据资产（memory.md、knowledge/、evolution-log.md、.PRD/、.ISSUES/），introduction.md 由 setup-omz 按需生成。

## 已考虑的备选方案

- **技能物理铺到用户 skills 目录**：污染用户 home，升级靠覆盖文件 —— 否决，改用编程注册。
- **沙箱/审批做进化授权强制拦截**：DSH 沙箱为会话级模式（read-only / workspace-write / danger-full-access）而非路径级，粒度不匹配；`fs/write-intent` 拦截只覆盖 write/edit 工具且 UX 变为审批弹窗 —— 否决，保留对话级确认。
- **仅内容协议（不加 preset）**：无法提供模式级人格注入 —— 否决。
- **同时兼容 0.1.x 与 0.2.x 的 preset 机制**：靠声明宽松 peer 区间 + 同时保留目录式 preset —— 否决，0.2.x 的版本门禁会拒绝旧区间，且两套 preset 定义并存会重复注册模式，只会把"装不上"变成"装上了但模式坏掉"，不如让版本约束在安装期显式失败。

## 后果

- ZERONE 模式随插件包升级演进，dsh-desktop 捆绑与 npm 分发共用同一包。
- 仓库 AGENTS.md 不再逐仓库拷贝（避免双重注入），模式 persona 为唯一权威；codex/cursor 等其他编辑器如需 OMZ 仍走原安装路径。
- **版本窗口收窄**：`0.1.4+` 只声明 DSH `0.2.0-rc.2` 运行时线的 peer，0.1.x 用户停留在 `0.1.3`。DSH 每次升运行时线（含 rc 序列）都要同步更新 peer 与 preset 组合内的包名（0.2.0 已把 `dsh-workflow-worker-thread` 换成 `dsh-workflow-ptc`，把 `dsh-persona.text` 换成 `prefix`/`suffix`）。

