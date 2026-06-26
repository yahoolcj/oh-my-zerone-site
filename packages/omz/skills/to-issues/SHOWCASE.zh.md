## 使用场景

PRD 写好后，面对一个庞大的文档不知道怎么分配给团队或自己分步实现时，用 `/to-issues` 把 PRD 按垂直切片拆分为独立可认领的 issue，发布到项目问题跟踪器。每个 issue 都是可独立交付、可独立验收的完整功能片段。

## 使用效果示例

```terminal
$ /to-issues .PRD/2.1.0.md

> 分析 PRD 功能清单...
> 按追踪弹式垂直切片拆分:

> Issue #1: 新增 SHOWCASE.md 数据源
>   - 为 17 个 skill 创建 SHOWCASE.zh.md + SHOWCASE.en.md
>   - 可独立验收: 文件存在且结构符合约定
>
> Issue #2: 扩展 skills 数据层
>   - lib/skills.ts 新增 SHOWCASE 读取/解析
>
> Issue #3: Skills 列表页改版
>   ...
>
> 已创建 6 个 issue 并发布到项目跟踪器。
```
