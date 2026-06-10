# 使用技巧撰写规则

@group:oh-my-zerone

当用户提供使用技巧主题概要（1-2句话）时，Agent 自动完成完整技巧文档的撰写与落盘。

## 触发条件

用户提供技巧主题概要，Agent 自动执行以下流程，无需用户重复说明格式。

## 文件落盘

`src/content/tips/{slug}.md`

slug 由 Agent 根据标题自动生成（kebab-case，如 `quick-start-strangers`）。

## Frontmatter 结构

```yaml
---
titleZh: "技巧中文标题"
titleEn: "English title"
summaryZh: "一句话中文摘要，≤30字"
summaryEn: "One-line English summary"
order: 1
---
```

- `order`：排序权重，数字小排前面。默认为已有最大 order + 1。

## 正文规范

Markdown 格式，遵循项目常用风格：

- 步骤说明使用有序列表
- 命令放代码块（```bash ... ```）
- 关键技能名使用 `/skill-name` 格式
- 中文为主，命令、文件路径、技能名保持英文原文
- 正文不出现 `@author`、`@email`、`@group` 等元数据（这些属于 SKILL.md 的约定，技巧文档不需要）

## 自动行为清单

1. 根据概要生成 slug
2. 撰写 frontmatter（中英文标题 + 摘要 + order）
3. 撰写 Markdown 正文
4. 写入 `src/content/tips/{slug}.md`
5. 告知用户已完成，请确认内容
