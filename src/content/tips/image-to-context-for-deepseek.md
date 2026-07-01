---
titleZh: "弥补 DeepSeek 无视觉能力的短板"
titleEn: "Bridge DeepSeek's Vision Gap"
summaryZh: "用 /image-to-context 识图转文本，让 DeepSeek 也能看懂截图"
summaryEn: "Convert images to text with /image-to-context so DeepSeek can 'see' screenshots"
order: 4
---

DeepSeek 是目前性价比最高的编码模型之一，但它有一个明显的短板——**不支持图片输入**。这意味着你无法直接把设计稿截图、控制台报错截图、架构图丢给它分析。

omz 的 `/image-to-context` 就是为解决这个问题设计的。

## 原理

`/image-to-context` 通过外部视觉模型 API（如豆包、通义千问、智谱 GLM）将图片转化为结构化的文本描述，并自动注入当前对话上下文。下游的 DeepSeek 模型完全不需要"看图"——它直接消费已经转化好的结构化文本。

```
你上传截图 → /image-to-context 调用视觉 API → 结构化文本注入对话 → DeepSeek 直接消费
```

## 使用方式

在对话中上传图片，然后执行：

```
/image-to-context 这是登录页设计稿
```

Agent 会将图片发送到已配置的视觉模型，返回类似这样的结构化描述：

- **UI 设计稿**：组件类型、文案、尺寸、颜色、间距、交互状态
- **报错截图**：错误原文、文件路径、堆栈关键帧、推断原因
- **架构图**：节点清单、关系连线、数据流方向
- **用户标注**：框选、箭头、圈画等标注会被显式识别并标记 `⚠️`

识别结果注入后用下游技能无缝衔接：

```
/image-to-context 这是控制台报错截图
> [视觉模型识别：TypeError at LoginForm.vue:42...]

/to-locate 根据上面的报错定位
> [DeepSeek 基于文本上下文定位到具体代码行...]
```

## 前提配置

1. 确保 `zerone/cli >= 0.8.0`
2. 执行 `zerone omz set vision-apikey` 配置至少一个视觉模型厂商的 API Key

详细配置说明见 `/docs/skills/image-to-context` 页面底部的配置指南。

## 适用场景

| 场景 | 示例 |
|------|------|
| 根据设计稿截图直接开发 | `/image-to-context` → `/to-coding` |
| 根据报错截图定位 Bug | `/image-to-context` → `/to-locate` |
| 分享架构图后讨论方案 | `/image-to-context` → 讨论 |
| 识别标注后的页面截图 | `/image-to-context` 自动识别箭头/框选 → `/to-coding` |

## 注意事项

- 识别结果仅注入对话上下文，不会在项目中创建文件
- 支持的图片格式：png、jpg、jpeg、gif、webp、bmp
- 支持多图同时上传，结果按 `图1`、`图2` 逐张输出
- 视觉模型的选择影响识别精度，建议优先使用豆包（doubao-seed-2.0-mini）
