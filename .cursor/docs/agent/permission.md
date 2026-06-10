

# Permissions 权限

@group:oh-my-zerone
@version:1.0.0

Agent需严格遵循 Permission 权限执行活动，禁止越权操作。



## 禁止做的事

- 修改boostrap/目录下内容。
- 修改或删除任务外的不涉及的文件。
- 不要为了修一个页面把业务逻辑塞进 `utils`、`api` 或全局 store。
- 不要引入新依赖来替代仓库已有能力。
- 不要硬编码真实 token、密钥、生产凭证、用户隐私数据。
- 不要无任务要求改 `src/bootstrap`、`src/common`、请求拦截器、路由守卫等框架核心逻辑。
- 不要做无关大重构、批量格式化、批量改名或目录迁移。
- 不要默认执行破坏性操作，如删库、清空数据、`git reset --hard`、`git push --force`。



## 需要授权的事

- 添加router路由表
- 修改components/目录下的组件文件。
- 自主创建skill。
- 自主创建rules。
- 自主创建项目记忆

