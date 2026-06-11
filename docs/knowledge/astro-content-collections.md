# Astro Content Collection 渲染规范

@group:oh-my-zerone

本项目使用 Astro 5 + `glob` loader 定义 Content Collection。渲染 Markdown 正文时必须使用独立 `render()` 函数，不能使用条目实例方法。

## 技术事实

- Astro 版本：`^5.7.10`（见 `package.json`）
- Collection 定义：`src/content/config.ts`，`docs`、`tips` 均通过 `glob` loader 加载
- `getCollection()` 返回的条目**没有** `.render()` 方法

## 正确写法

```astro
import { getCollection, render } from 'astro:content';

const entries = await getCollection('tips');
const entry = entries.find((e) => e.id === slug);
const { Content } = await render(entry);
```

模板中直接使用 `<Content />` 渲染正文。

## 错误写法

```astro
// Astro 4 旧 API，glob loader 下会报 TypeError: entry.render is not a function
const { Content } = await entry.render();
```

## 参考实现

| 场景 | 文件 |
|------|------|
| 单篇文档页 | `src/pages/docs/overview.astro` |
| 动态 slug 详情页 | `src/pages/docs/tips/[slug].astro` |

## 新增 Collection 页面检查项

1. `src/content/config.ts` 中 collection 是否使用 `glob` loader
2. 详情页是否 `import { render } from 'astro:content'`
3. 是否使用 `await render(entry)` 而非 `entry.render()`
