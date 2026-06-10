# ISSUE-008 Skills 文档站（索引 + 详情）

## 父单

.PRD/1.0.0.md — oh-my-zerone 门户网站 v1.0.0

## 要做什么

实现 `/docs/skills` 索引页和 `/docs/skills/[slug]` 详情页，渲染 `.omz/skills/` 下 SKILL.md 正文，过滤作者/进化元数据。

## 验收标准

- [ ] `/docs/skills` 展示完整 Skills 列表
- [ ] 每个 slug 有对应详情页，渲染 SKILL.md 正文
- [ ] 作者邮箱、进化申请等元数据不展示在正文区
- [ ] 路由结构兼容后续英文详情扩展
- [ ] 从首页 Skills 卡片可正确跳转

## 阻塞于

- ISSUE-005
- ISSUE-007

## 类型

AFK

## 覆盖用户故事

- 用户故事 3
