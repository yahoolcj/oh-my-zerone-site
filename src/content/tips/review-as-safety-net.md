---
titleZh: "/to-review 兜底自查"
titleEn: "Safety Net with /to-review"
summaryZh: "在 review.md 预设审查项，/to-review 让 AI 自查编码问题并修复"
summaryEn: "Predefine review checks and let AI self-audit coding issues via /to-review"
order: 3
---

即使 AI Coding 时没有完全遵循编码规范，也不需要手动逐行检查。omz 的 `/to-review` 提供了一个兜底机制——让大模型自查自己写的代码。

## 配置审查规则

在项目的 `docs/agent/review.md` 文件中预设你想让 AI 检查的内容。例如：

```markdown
# Review 审查清单

## 编码规范
- [ ] 所有新增代码顶部有 `@by oh-my-zerone` 标记
- [ ] import 分组顺序正确（components → hooks → const → services）
- [ ] 没有引入项目中已存在能力的冗余依赖

## 类型安全
- [ ] 所有 Props interface 有完整类型注解
- [ ] 没有使用 `any` 类型（除非有充分理由）

## 样式规范
- [ ] 颜色值使用 CSS 变量（`var(--color-*)`）
- [ ] 圆角使用 `var(--radius-*)` token
- [ ] 没有硬编码的像素值做布局
```

你可以根据项目实际情况随时增删审查项。

## 执行审查

在完成一轮编码后：

```
/to-review
```

Agent 会按照 `review.md` 中的清单逐项检查本次改动，并输出：

- 通过的项（✅）
- 需要修复的项（❌ 或 ⚠️）
- 具体的修复建议和文件定位

## 闭环修复

审查发现的问题不需要手动去改——直接告诉 Agent：

```
修复 /to-review 发现的所有问题
```

Agent 会逐一修复并再次自查确认。

## 最佳实践

1. **审查清单保持精简**：5-10 条核心规则就够了，太多会影响审查效率
2. **逐步迭代**：第一次审查发现的问题，如果判断是长期有效的规则，就加到 `review.md` 里
3. **每次提交前执行**：养成习惯，在 `/to-commit` 之前先跑一遍 `/to-review`
4. **不要跳过修复**：审查发现的问题即使看起来小，积累多了也会影响后续协作质量

## 与其他流程的关系

```
/to-coding（编码）
    ↓
/to-review（自查）
    ↓
/to-test（测试回收）
    ↓
/to-commit（提交）
```

`/to-review` 是编码和提交之间的兜底网——任何漏掉的规范问题在这一步都能被发现和修复。
