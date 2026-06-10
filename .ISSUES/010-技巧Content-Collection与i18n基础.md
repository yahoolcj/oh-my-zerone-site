# ISSUE-010 Content Collection + i18n 基础设施

## 父单

.PRD/1.1.0.md — 使用技巧栏目

## 要做什么

为「使用技巧」栏目建立数据与国际化基础设施：
1. `src/content/config.ts` 新增 `tips` Content Collection（glob 扫描 `src/content/tips/*.md`，schema 含 titleZh/En、summaryZh/En、order）
2. `src/i18n/types.ts` 的 `UiStrings` 接口新增 7 个字段：tipsTitle、tipsSubtitle、tipsViewAll、tipsBackToList、navTips、tipsIndexTitle、footerTips
3. `src/i18n/zh.ts` 和 `src/i18n/en.ts` 填充对应中英文案

## 验收标准

- [ ] Astro Content Collections 类型推断识别 `tips` collection
- [ ] `UiStrings` 类型定义完整，编译无报错
- [ ] 中文和英文文案常量正确赋值

## 阻塞于

无 — 可立即开始

## 类型

AFK

## 覆盖用户故事

—
