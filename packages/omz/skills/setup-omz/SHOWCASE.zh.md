## 使用场景

当你第一次在项目中安装 oh-my-zerone 后，或接手一个已安装 omz 但文档较旧的项目时，执行 `/setup-omz` 让 Agent 自动扫描项目的技术栈、目录结构、工程配置，生成或补全 `docs/agent/introduction.md`。它只记录技术结构和定位入口，不写业务知识，不运行项目脚本。

## 使用效果示例

```terminal
$ /setup-omz

> 扫描项目结构中...
> 检测到: Astro 5.x + React 19 + Tailwind CSS v4
> 检测到: 中文/英文双语站点 (astro i18n routing)
> 检测到: 17 个 omz skills，5 个 category
> 已生成 docs/agent/introduction.md
> 完成。开发前建议阅读该文件了解项目全貌。
```
