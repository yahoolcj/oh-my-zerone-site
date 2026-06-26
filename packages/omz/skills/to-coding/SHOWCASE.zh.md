## 使用场景

PRD 和 TODOQ 就绪后，用 `/to-coding` 按功能清单从上到下逐项编码。它严格遵循 "一次只做一条 → 自测通过 → 停止等待用户验收 → 验收后才勾选" 的工作流，确保每一步都有质量控制，不会一口气全做完才发现方向偏了。

## 使用效果示例

```terminal
$ /to-coding

> 当前 PRD: .PRD/2.1.0.md
> TODOQ 第 1 条: 新增 SHOWCASE.md 数据源

> 创建 setup-omz/SHOWCASE.zh.md ✓
> 创建 setup-omz/SHOWCASE.en.md ✓
> 创建 grill-me/SHOWCASE.zh.md ✓
> ...
> 17 个 skill × 2 语言 = 34 个文件已创建

> 刚完成: TODOQ 第 1 条
> 改动: 为所有 skill 目录新增 SHOWCASE.zh.md + SHOWCASE.en.md
> 验证: 文件存在且结构符合约定
> 待验收: 请确认本条是否通过，通过后勾选并进入第 2 条。
```
