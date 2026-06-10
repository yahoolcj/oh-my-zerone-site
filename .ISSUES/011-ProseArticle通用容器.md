# ISSUE-011 ProseArticle 通用 prose 容器

## 父单

.PRD/1.1.0.md — 使用技巧栏目

## 要做什么

提取通用 prose 文章容器组件，供 Skills 详情页和 Tips 详情页复用：
1. 新建 `src/components/docs/ProseArticle.astro`：基于 `<article class="prose-docs">` 壳，暴露 `header` 具名插槽和默认插槽
2. `src/pages/docs/skills/[slug].astro` 改用 ProseArticle 替代内联 `<article>`，保持渲染结果不变

## 验收标准

- [ ] ProseArticle 组件可被其他页面引用
- [ ] Skills 详情页切换后视觉和功能完全不变
- [ ] `header` 插槽在正文渲染前正确输出

## 阻塞于

无 — 可立即开始

## 类型

AFK

## 覆盖用户故事

—
