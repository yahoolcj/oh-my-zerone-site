## 使用场景

当你需要创建一个有设计感的前端页面（落地页、作品集、品牌站），不想要市面上那种千篇一律的"AI 紫渐变 + 三列卡片"风格时，用 `/frontend-design`。它会推断你的品牌调性，设定 Variance / Motion / Density 三档拨盘，选择字体配对和配色方案，生成独特不模板化的生产级界面。

## 使用效果示例

```terminal
$ /frontend-design 帮我做一个极简开发者工具品牌站

> Design Read: dev-tool landing for indie developers, Linear-style minimal, 
>   leaning toward Geist + monospace + emerald accent
> Dials: Variance 6 / Motion 4 / Density 3
> Font pairing: Geist Display + JetBrains Mono
> Accent: #10b981 (emerald) on zinc-950 surface

> 生成页面结构:
> ┌─ Hero: 大号 type + 终端安装命令 ─┐
> ├─ Bento: 3 个非对称规格卡片 ──────┤
> ├─ 代码对比 (before/after) ────────┤
> ├─ 深色终端 FAQ ──────────────────┤
> └─ Footer: 极简 ──────────────────┘

> 已生成项目文件。可打开预览。
```
