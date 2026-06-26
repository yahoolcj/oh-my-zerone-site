## 使用场景

代码写完后，想在提交前做一次只读的代码质量检查，用 `/to-quality-review` 让 Agent 对指定范围进行静态分析——过抽象、命名不当、边界处理缺失、可维护性隐患、性能风险——输出分级建议报告。它不是硬性门禁，只是帮你发现可能遗漏的问题。

## 使用效果示例

```terminal
$ /to-quality-review src/lib/skills.ts src/pages/docs/skills/

> 质检范围: skills 数据层 + skills 页面 (3 文件)

> 整体评级: B+
>
> 发现:
> [中] src/lib/skills.ts:25 — getAllSkills() 每次调用都重新读取文件系统，
>   在 Astro SSG 下无影响，但如果未来切到 SSR 模式会有性能问题。
>   建议: 加一层内存缓存。
>
> [低] src/pages/docs/skills/[slug].astro:20 — 变量名 `html` 过于泛化，
>   建议改为 `showcaseHtml` 明确含义。
>
> 未发现高危问题。建议修复 [中] 级别项后再提交。
```
