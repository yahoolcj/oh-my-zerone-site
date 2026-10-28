---
title: 安装
titleEn: Install
description: omz 安装与配置步骤
locale: zh
order: 2
---

## 1. 安装 zerone/cli

需要 0.6.0 及以上版本：

```bash
npm install -g @zerone/cli --registry=http://10.0.0.74:8081/repository/npm-group/
```

## 2. 安装 omz

```powershell
zerone setup omz
```

## 3. 配置 omz

1. 将 `AGENTS.md` 放到目标项目根目录
2. 将 `docs/agent/` 复制到目标项目
3. 将 `rules/` 复制到目标项目对应编辑器目录
4. 按需要将 `skills/` 安装到编辑器 skills 目录
5. 在对话中显式使用 skill，如 `/to-prd`、`/to-coding`

## 4. 首次 setup

```text
/setup-omz
```

`setup-omz` 会扫描项目技术栈并生成 `docs/agent/introduction.md`，不写业务知识，不运行项目脚本。

## 5. 验收测试（to-test）

安装 `to-test` 后采用 TDD 红绿灯验收：编码前 `/to-test red` 生成红绿灯清单并跑出红证据，编码后 `/to-test green` 重放清单，全绿自动勾选 issue 验收标准与 PRD TODOQ；黄灯需人工确认，红灯输出返工单。测试面为浏览器全流程，红绿灯清单嵌在 issue 文档中，证据落 `.TEST/`（仅本地，不入库）。

## 推荐最小安装组合

```text
AGENTS.md
docs/agent/permission.md
docs/agent/workflow.md
docs/agent/review.md
rules/coding.mdc
skills/setup-omz
skills/grill-with-docs
skills/grill-me-ui
skills/to-prd
skills/to-coding
skills/to-test
skills/to-review
skills/to-commit
```
