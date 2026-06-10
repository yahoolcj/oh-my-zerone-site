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
