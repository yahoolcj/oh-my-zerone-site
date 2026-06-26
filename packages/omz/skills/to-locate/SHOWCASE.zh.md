## 使用场景

已开发的功能出现小问题——样式错位、交互异常、数据不对、边界情况没覆盖，但不值得走完整 PRD 流程时，用 `/to-locate` 让 Agent 通过只读检索（文档、知识库、代码搜索）定位相关文件和原因，输出一份可直接交给 `/to-coding` 的定位报告。它只查不改。

## 使用效果示例

```terminal
$ /to-locate 首页 Hero 标题在移动端换行位置不对，第 3 个字就断了

> 检索相关文件...
> 定位到 src/components/home/Hero.astro:42
>   <h1 class="text-5xl md:text-7xl">让 AI 在真实项目里稳定交付</h1>
> 问题: 移动端 text-5xl 对于 12 字中文标题过大
> 建议: 改为 text-3xl md:text-5xl lg:text-6xl 三档断点
> 定位报告已输出，可交给 /to-coding 修复。
```
