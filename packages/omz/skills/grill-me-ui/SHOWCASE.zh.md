## 使用场景

当你在进入 UI 编码前，有原型图、截图、数据或页面想法，但不确定 UI 呈现效果、交互细节、是否结合现有 UI 还是独立设计时，用 `/grill-me-ui` 通过一问一答逐项澄清。最终输出一份可直接交给 `/to-locate` 或 `/to-coding` 的 UI 设计报告。

## 使用效果示例

```terminal
$ /grill-me-ui 这是登录页的原型截图 [附件], 帮我确定开发口径

> 这个登录页是独立设计还是复用现有 AuthLayout?
You: 复用现有 AuthLayout

> 表单校验是前端即时校验还是提交后服务端返回?
You: 即时校验 + 提交后兜底

> 登录成功后跳转到哪个页面?
You: /dashboard

> UI 设计报告已输出:
> - 布局: 复用 AuthLayout (居中卡片式)
> - 字段: 邮箱 + 密码 + 记住我开关
> - 校验: 失焦即时校验 + 提交服务端兜底
> - 状态: loading / error / success 三态
> 可交给 /to-coding 开始开发。
```
