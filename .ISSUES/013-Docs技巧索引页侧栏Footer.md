# ISSUE-013 Docs 技巧索引页 + 侧栏 + Footer

## 父单

.PRD/1.1.0.md — 使用技巧栏目

## 要做什么

完成 Docs 下的技巧入口和导航体系：
1. 新建 `src/pages/docs/tips/index.astro`：技巧列表索引页，卡片网格展示全部 tips（复用 SpotlightCard 组件模式），按 order 升序排列
2. 新建 `src/pages/en/docs/tips/index.astro`：英文版同上
3. 修改 `src/layouts/DocsLayout.astro`：侧栏新增「使用技巧 / Tips」导航项（排在 Skills 之后），`activeSlug` 类型扩展 `'tips'`
4. 修改 `src/components/layout/Footer.astro`：新增「使用技巧 / Tips」链接

## 验收标准

- [ ] `/docs/tips` 展示全部技巧卡片网格
- [ ] 卡片点击跳转详情页
- [ ] Docs 侧栏「使用技巧」项在技巧页面高亮
- [ ] Footer 有「使用技巧」链接，中英文各自正确
- [ ] 英文路由 `/en/docs/tips` 工作正常

## 阻塞于

- ISSUE-010
- ISSUE-011

## 类型

AFK

## 覆盖用户故事

- 用户故事 4
- 用户故事 5
