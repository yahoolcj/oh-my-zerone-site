---
name: to-test
description: 对 PRD / issue 执行 TDD 红绿灯验收测试：red 阶段在编码前生成红绿灯清单并跑出红证据，green 阶段在编码后重放清单、判定灯并在全绿时自动勾选验收项；以浏览器能力阶梯驱动全流程功能测试。
---

# to-test（红绿灯验收测试）

@author: laicaijin
@email:lcj970630@gmail.com
@group:oh-my-zerone

## 目标

把验收从「事后问询」改为 TDD 红绿灯闭环：编码前先有会失败的红（证明用例有效），编码后转绿（证明实现有效），全绿才视为验收通过。

## 阶段与入口

- `/to-test red`：编码前执行。按 issue 验收标准生成红绿灯清单，先跑出失败证据（红证据）。
- `/to-test green`：编码后执行。重放清单，判定当前灯；全绿自动勾选验收项，黄/红不打勾。
- 无参数调用：先询问要执行哪个阶段，禁止猜测。
- 测试面为**浏览器全流程**（交互、文案、样式、数据流）；**不做单元测试**。
- 不修改产品代码；不创建 PRD / issue；不提交 commit；验收报告不落盘（清单与证据除外）。

## 输入来源

优先级：

1. 用户本轮明确指定的 issue / PRD / 内容
2. 当前 issue：`.ISSUE/<version>-N-slug.md` 的「验收标准」
3. 当前 PRD：`.PRD/<version>.md` 的「功能清单 TODO」
4. `CONTEXT.md` / `CONTEXT-MAP.md`（只读）
5. `docs/agent/introduction.md`、`docs/knowledge/`
6. 相关代码改动摘要或 git diff

## 执行器能力阶梯

按顺序探测，命中即使用，并在清单记录执行器名称与版本：

1. 项目内 Playwright（`@playwright/test` 或 `playwright` 依赖 / `scripts.test:e2e`）
2. 浏览器类 MCP（Chrome DevTools 等浏览器自动化 MCP）
3. 系统 Chromium 内核 headless CLI（Edge / Chrome / Chromium 的 `--headless=new --dump-dom` 与 `--screenshot`，零依赖，适合纯断言与截图）
4. `orca-cli` / `computer-use`（桌面内嵌浏览器）
5. 人工步骤（`manual`）：输出可照做的人工验证步骤

五级全不可用时，该用例标黄（`yellow_reason: 无自动化能力`），禁止冒充绿灯。

### 执行器调用要点

- **Chromium 内核 headless CLI**：PowerShell 直接调用时 stdout 可能为空，需 `cmd /c "<edge|chrome|chromium>" --headless=new --disable-gpu --no-first-run --user-data-dir=<临时目录> --dump-dom <url> > dom.html 2> err.txt`；截图用 `--screenshot=<路径> --window-size=1280,900`；SPA / 异步渲染加 `--virtual-time-budget=8000`。
- 断言优先基于 `dump-dom` 文本与截图；样式、动效等视觉断言用截图 + 人工或视觉确认（可标黄）。
- `file://` 页面会丢失根相对资源，样式类断言应通过 dev / preview 地址执行。
- Playwright 场景直接写 spec 或用 `npx playwright test`；MCP 与 orca-cli / computer-use 按其自身用法调用，并在清单记录执行器名称与版本。
- `--dump-dom` 输出必须按 **UTF-8** 读取（Windows 上按本地编码读取会让中文断言全部假失败）。
- 重动画 / 重型页面（three.js、长动画、埋点）在 headless 下可能挂起不退出：先设 `--virtual-time-budget`；仍卡住则降级为抓 HTML 做静态断言，并清理残留浏览器进程。
- 断言大小写敏感：英文文案断言按页面实际大小写，或统一转小写比较。
- 证据目录 `.TEST/` 只落本地，必须被 `.gitignore` 忽略；浏览器进程与后台服务在验收结束后清理或报告端口。

## 被测应用启动

1. 探测常见端口与已运行实例，优先复用（避免重复占用）。
2. 无实例时，以后台作业拉起 `package.json` 的 `dev` 或 `preview` 脚本，轮询到页面可访问。
3. 超时、脚本不存在或无权限时，询问用户提供 URL / 启动命令。
4. 结束时保留实例，并在报告中说明端口与地址。

## 红阶段（red）

1. 读取 issue 的验收标准与关联的 PRD 功能清单条目。
2. 生成用例：每条验收标准至少 1 条用例；跨 issue 主干流程归入端到端验收 issue；无法覆盖的验收项显式标黄并说明原因。
3. 在 issue 文档**末尾追加**固定章节 `## 红绿灯清单`（不重排、不改写原有内容）：头部 YAML 摘要 + 每用例一张 Markdown 卡。
4. 启动被测应用，探测执行器并记录。
5. 逐条执行用例（此时实现通常尚未存在，预期失败）。
6. 把失败证据落盘到 `.TEST/<PRD版本>/<issue>-<时间戳>/`：`screenshots/`、`logs/run-red.log`、必要时 `notes.md`。
7. 回填用例的 `red_evidence`（执行器、时间、失败摘要、证据路径）与 `light`（红 / 黄）。
8. 输出红阶段报告，提示下一步进入 `/to-coding`。

约束：缺少红证据的用例标记为**作废**；作废用例在绿阶段不参与判定。

## 绿阶段（green）

1. 读取 issue 的 `## 红绿灯清单`（YAML 摘要 + 用例卡）。
2. 启动被测应用，探测执行器并记录。
3. 逐条重放用例，判定当前灯：`绿` / `黄` / `红`。
4. 缺少红证据的作废用例不参与判定，并保持作废标记。
5. **全部为绿（无黄、无红、无作废）**：自动勾选该 issue 的验收标准，并同步勾选对应 PRD TODOQ。
6. 存在黄灯：不勾选。输出可照做的人工验证步骤，用户确认后才可转绿并重新判定。
7. 存在红灯：不勾选。输出返工单交 `/to-coding`；修复后可重跑（建议 3 轮后强制人工介入）。
8. 跨 issue 主干流程在端到端验收 issue 的清单中判定；该 issue 不存在时只报缺口，不自动创建。
9. 输出绿阶段报告与下一步。

## 清单格式

### YAML 摘要（章节头部）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| prd_version | string | 是 | PRD 版本号，如 `2.4.0` |
| issue | string | 是 | issue 文件名 |
| phase | enum | 是 | `red` / `green` |
| cases | array | 是 | 用例摘要（id / criterion / executor / light / yellow_reason） |
| generated_at | string | 是 | 生成时间（ISO 8601） |

### 用例卡（每用例一张）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string | 是 | `RG-01` 起顺序递增 |
| criterion | string | 是 | 关联的 issue 验收标准原文 |
| todo | string | 否 | 关联的 PRD 功能清单条目 |
| flow | string | 否 | 所属跨 issue 主干流程（仅端到端验收 issue） |
| precondition | string | 否 | 前置条件（登录态、测试数据、初始路由） |
| steps | string[] | 是 | 可重放的操作意图（允许按文案/角色定位，不要求硬编码选择器） |
| assert | string[] | 是 | 断言（可见文案、元素状态、URL、接口结果） |
| executor | string | 是 | `playwright` / `mcp` / `orca-cli` / `computer-use` / `manual` |
| red_evidence | object | 是 | 执行器、时间、失败摘要、证据路径；缺失即作废 |
| light | enum | 是 | `绿` / `黄` / `红` |
| yellow_reason | enum | 否 | `待人工确认` / `无自动化能力` / `阻塞` |
| green_evidence | object | 否 | 执行器、时间、证据路径 |

### 灯状态

| 值 | 含义 | 可自动打勾 |
|----|------|------------|
| 绿 | 重放通过且断言全部满足 | 是（全绿时） |
| 黄 | 待人工确认 / 无自动化能力 / 阻塞 | 否 |
| 红 | 失败或修复后仍失败 | 否 |
| 作废 | 缺少红证据，不参与判定 | 否 |

### 证据目录

`.TEST/<PRD版本>/<issue>-<时间戳>/`：`screenshots/*.png`、`logs/run-<phase>.log`、`notes.md`（人工确认记录）。

## 判定规则

- 全绿（无黄、无红、无作废）→ 验收通过，自动打勾。
- 存在黄灯 → `待确认`，不打勾。
- 存在红灯 → `未通过`，不打勾，交返工。
- 缺少红证据 → 用例作废，不计入绿灯。
- 任一用例黄/红/作废 → 该 issue 整体不通过，禁止局部打勾。

## 返工报告

### 返工报告

- 关联对象：
- 返工项（RG-ID）：
- 当前灯：
- 红/绿证据：
- 复现：
- 期望：
- 影响：
- 交给 `/to-coding`：

## 报告格式

### 红阶段报告

- 关联 issue：
- 生成用例：共 N 条（覆盖验收标准 x/y；主干流程 z 条）
- 执行器：
- 应用地址：
- 红证据：`.TEST/...`
- 黄灯：
- 作废：
- 下一步：`/to-coding`

### 绿阶段报告

- 关联 issue：
- 灯统计：绿 x / 黄 y / 红 z / 作废 w
- 自动勾选：issue 验收标准 + PRD TODOQ（全绿时）
- 黄灯人工步骤：
- 红灯返工单：
- 下一步：全绿 → `/to-review`；有红 → `/to-coding` 返工；有黄 → 人工确认

## 记忆引导

仅当 issue 清单**全部为绿（无黄、无红、无作废）**时，在输出绿阶段报告后追加记忆引导；否则不触发。

1. 回顾本轮实现的功能、关键决策点、入口文件路径。
2. 按 `docs/agent/memory.md` 格式生成记忆草稿。
3. 展示草稿并给出三个选项：`[确认落盘]` / `[修改后落盘]` / `[跳过]`。
4. 写入前执行 `node -e "console.log(new Date().toISOString().split('T')[0])"` 获取日期；与已有记忆冲突时列出冲突点交用户裁决。

## don't

- 不做单元测试、不建测试工程、不引入测试依赖。
- 不修改产品代码；返工交 `/to-coding`。
- 不创建 PRD / issue。
- 不修改需求描述与验收标准。
- 不提交 commit，不自动进入 `/to-coding`。
- 不把黄灯写成绿灯，不把作废用例计入通过。
- 不落盘验收报告（清单与证据除外）。
- 不重排或改写 issue 文档原有内容，清单只追加在末尾。
- 不修改 `CONTEXT.md` / `CONTEXT-MAP.md`。

## 边界

- 非 Web 项目（无页面、无 dev/preview 脚本）：退化为原「问用户是否通过」的验收回收模式，并在报告说明不适用原因。
- 登录态 / 测试数据：优先复用项目已有配置；无法自动化时标黄并给出人工步骤。
- 纯样式 / 文案改动：仍走浏览器全流程；视觉判断类断言可标黄转人工。
- 已有红绿灯清单：green 阶段必须以清单为契约，不得临时增删用例；确需变更时在报告中说明并重新生成。
