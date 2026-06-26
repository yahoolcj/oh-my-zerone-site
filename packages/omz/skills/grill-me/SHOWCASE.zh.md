## 使用场景

当你有一个初步方案或设计想法，但感觉细节不够扎实、存在模糊地带时，用 `/grill-me` 让 Agent 对你进行深度追问。它会像面试官一样遍历你的决策树，每个环节只问一个问题，逐层逼出你用精确语言描述需求，直到双方对方案的理解完全对齐。

## 使用效果示例

```terminal
$ /grill-me 我想把 skills 页面的展示内容从 SKILL.md 改成使用场景 + 效果示例

> Question 1/?: 这个改动是针对详情页还是列表页？
You: 两个都要改

> Question 2/?: 新内容从哪来？A: skills-meta.ts 加字段 / B: 每个 skill 目录新增 SHOWCASE.md
You: B

> Question 3/?: "使用效果示例"用什么格式？
You: 伪终端代码块的对话模拟

> 设计树已全部走完，共识汇总如下：
> 1. 列表页+详情页同步改版 ✓
> 2. SHOWCASE.zh.md + SHOWCASE.en.md ✓
> ...
> 确认后进入下一步工作流。
```
