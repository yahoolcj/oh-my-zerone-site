## 使用场景

当你接手一个项目或阅读一段代码，看到不熟悉的组件、hooks、API、业务术语，需要有人像"项目翻译官"一样解释清楚时，用 `/to-explain`。它只读不写，收集代码、目录结构、知识库、记忆与上下文证据，输出结构化的学习说明书，区分事实/推断/待确认，并在发现知识空白时提示进化机会。

## 使用效果示例

```terminal
$ /to-explain lib/skills.ts 里的 stripSkillMetadata 函数

> 函数: stripSkillMetadata(content: string): string
> 位置: src/lib/skills.ts:16-23
>
> 作用: 移除 SKILL.md 文件顶部的元数据行
>   - @author, @email, @group 行 → 删除
>   - 第一个 # 标题及后续空行 → 删除
>   剩余正文作为 body 返回
>
> 事实: 用于 getAllSkills() 中，使技能正文不包含元数据
> 推断: 设计意图是让渲染出的 HTML 直接从正文开始，不含作者注释
> 待确认: 此函数是否需要处理其他元数据格式（如 YAML frontmatter）？
>
> [进化观察] 如果后续 SKILL.md 增加更多元数据字段，需同步更新此函数的正则。
```
