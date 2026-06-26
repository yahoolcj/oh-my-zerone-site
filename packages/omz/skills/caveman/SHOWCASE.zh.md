## 使用场景

当你和 Agent 对话内容太长、token 消耗过快，或者只需要快速确认一件事不需要详细解释时，用 `/caveman` 切换到极简压缩通信模式。Agent 的回复会削减约 75% 的 token 量，用最短的句子传达完整技术准确性。支持 lite / full / ultra / wenyan 四种强度。

## 使用效果示例

```terminal
$ /caveman ultra

> CAVEMAN ULTRA MODE.
> 
> $ 改 skills 页？定位？
> You: 列表+详情，SHOWCASE.md 替 SKILL.md
> 
> $ 列表：grid 2列，场景摘要+代码片段？
> You: 对
> 
> $ 详情：场景 prose，效果终端框？
> You: 对
> 
> $ 筛选用 category 标签？
> You: 对
> 
> $ 开始。
> 
> [恢复标准模式] /caveman off
```
