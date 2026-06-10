# ISSUE-014 3 篇技巧 Markdown 内容

## 父单

.PRD/1.1.0.md — 使用技巧栏目

## 要做什么

为使用技巧栏目撰写 3 篇技巧正文，存入 `src/content/tips/`：
1. `quick-start-strangers.md` — 接手陌生项目快速启动：介绍 `/setup-omz` 生成项目信息文档，`/to-explain` 解释模块并沉淀知识库，给大模型提供背景上下文
2. `auto-execute-to-coding.md` — `/to-coding` 自动执行授权：如何一句「继续编码，结束后停止」授权自动执行，避免每次停顿确认
3. `review-as-safety-net.md` — `/to-review` 兜底自查：在 `review.md` 预设审查项，`/to-review` 让 AI 自查编码规范问题并修复

每篇包含完整 frontmatter（titleZh/En、summaryZh/En、order）+ Markdown 正文。中文为主，命令/路径/技能名保持英文。

## 验收标准

- [ ] 3 个 `.md` 文件正确存入 `src/content/tips/`
- [ ] 每篇 frontmatter 完整，order 升序
- [ ] 正文 Markdown 格式规范（有序列表、代码块、/skill-name 引用）
- [ ] 索引页可正确展示 3 条技巧
- [ ] 每条技巧的详情页正文渲染正常

## 阻塞于

- ISSUE-010

## 类型

AFK

## 覆盖用户故事

—
