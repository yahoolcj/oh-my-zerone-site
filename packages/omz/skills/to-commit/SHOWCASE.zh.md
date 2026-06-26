## 使用场景

代码写好、测试通过、审查完成，准备提交时，用 `/to-commit` 生成符合 commitlint 规范的 commit message 和包含改动说明、AI 辅助声明、开发者自查清单的 PR 描述模板。不用再自己琢磨 "feat: 改了点东西" 这种无效信息。

## 使用效果示例

```terminal
$ /to-commit

> 检视改动文件: 7 个新增, 4 个修改, 0 个删除

> Commit message:
> feat(skills): 使用 SHOWCASE.md 替换 SKILL.md 作为 skills 展示内容
>
> 技能篇章从展示原始 prompt 内容改为展示使用场景和对话模拟效果示例。
> 新增 SHOWCASE.zh.md / SHOWCASE.en.md 作为内容源，列表页改为 2 列
> grid + category 筛选，详情页改为场景 + 终端效果示例布局。

> PR 描述模板已生成，包含:
> - 改动说明
> - AI 辅助声明
> - 开发者自查清单
>
> 是否执行 git commit？
```
