# Evolution Log 进化日志

@group:oh-my-zerone
@version:1.0.0

来自evolution.md的进化日志记录文件

- 2026-07-18｜知识库｜新增｜docs/knowledge/dsh-platform.md｜grill-with-docs 沉淀：DSH 扩展机制（preset/skill/插件/沙箱/审批）与 OMZ 映射
- 2026-07-18｜记忆｜新增｜docs/agent/memory.md｜OMZ→DSH 交付形态共识（插件+ZERONE 模式+全局技能注册，零落盘内置）
- 2026-07-18｜知识库｜新增｜docs/knowledge/usage-tips-writing.md｜grill-me 访谈决策沉淀：用户提供技巧概要时 Agent 自动完成技巧文档撰写，含 slug 生成、frontmatter、正文规范与自动行为清单
- 2026-06-11｜知识库｜新增｜docs/knowledge/astro-content-collections.md｜tips 详情页 render API 修复后沉淀：Astro 5 glob loader 须用 render(entry)，禁用 entry.render()
- 2026-09-30｜知识库｜更新｜docs/knowledge/dsh-platform.md｜DSH 0.2.0-rc.2 适配：preset 改为 bundle patch 声明行（旧目录 + `agent-presets.roots` 退役）、新增 `@deepseek-ai/dsh-*` peer 版本门禁、`dsh-persona` 改 `prefix`/`suffix`、`dsh-workflow-worker-thread` → `dsh-workflow-ptc`
- 2026-09-30｜知识库｜更新｜docs/adr/0001-omz以插件加preset接入dsh.md｜记录版本窗口收窄（0.1.4+ 只支持 0.2.x 运行时线）与 DSH 升线时的同步清单
- 2026-09-30｜规则｜更新｜AGENTS.md｜新增「DSH 升运行时线的强制契约校验」：peer 改精确版本 + 跑 verify-dsh-contract.mjs（包名/config 字段对齐）+ 验收测试 + 核对平台知识

