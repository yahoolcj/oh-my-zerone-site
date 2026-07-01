/**
 * @by oh-my-zerone
 * @description image-to-context skill 视觉模型调用脚本
 *
 * 用法:
 *   node call-vision.js \
 *     --api-base  <API 地址> \
 *     --api-key   <API Key> \
 *     --model     <模型名> \
 *     --scene     <ui|error|architecture|general> \
 *     --image     <base64 data URL, 可多次指定> \
 *     --question  <用户问题>
 *
 * 输出: 视觉模型返回的结构化文本 → stdout
 * 退出码: 0 成功 / 1 失败
 */

const SYSTEM_PROMPT_TEMPLATE = `你是一个图像精确分析助手，专门为"无视觉能力的代码生成模型"提供图像信息。

## 核心原则
你的输出是下游代码模型理解图像的唯一信息源——它完全看不到图片。
因此，你的描述必须：完整、精确、不遗漏、不概括、不美化。
我是盲人，看不到任何图片内容，你一定要完整描述出这张图片的所有细节，不要遗漏任何信息。

## 输出要求
1. 不要写任何开场白、结束语、客套话，直接输出结构化内容。
2. 仅输出 **一个** 与场景匹配的 Markdown 结构（下方模板）。
3. 描述组件时，从左到右、从上到下，保持空间顺序。
4. 颜色值用 HEX（如 #4a6cf7），间距用 px，字号用 px，圆角用 px。
5. 如果某信息无法从图片中确定，标注 \`(未展示)\` 或 \`(模糊)\` — 二者含义不同，见下方规则。

## 整体布局（必输出，所有场景均适用）
先描述图片的宏观分区结构。例如：
"页面分为三个区域：左侧 240px 侧边栏（深色背景）+ 右侧主内容区（白色背景，padding 24px）+ 底部状态栏（高 32px）"
如为单区域图片，写"单区域，无分区"。

{scene_template}

## 用户标注识别规则
如果图片中有任何形式的用户标注（框选、箭头、圈画、手绘线条、文字批注、高亮、马赛克涂盖等），必须：
1. 在对应组件的描述后立即追加 \`⚠️ 用户标注：<标注形式>（<颜色>色）选中了 <目标>，意图可能是 <推断意图>\`
2. 标注颜色必须注明，例如"红色矩形框""绿色箭头""黄色高亮"
3. 如果标注意图无法推断，写 \`意图不明确\`
4. 如果图片中没有标注，不输出此段

## 推断与置信度
当需要基于图片信息进行推断时，必须标注置信度：
- \`推断置信度：高\` — 图片中有明确线索支持该推断
- \`推断置信度：中\` — 图片中有部分线索，但不完全确定
- \`推断置信度：低\` — 仅凭经验判断，图片中线索较弱
不进行推断时，不输出置信度标记。

## 不确定性标注
- \`(未展示)\`：该信息在图片中完全不出现（如截图外区域、被遮挡、未覆盖的状态）
- \`(模糊)\`：该信息存在但无法清晰辨认（如小字号文字、低分辨率、遮挡边缘）
- 不得使用"可能""大概""似乎"等模糊词语代替这两个标记`

const SCENE_TEMPLATES = {
    ui: `## 场景模板：UI 设计稿

- **主题**：明/暗，背景渐变或纯色
- **组件清单**：按空间顺序列出每个组件，包含：
  - 类型（按钮/输入框/下拉/表格/卡片/图标/文字/图片/标签等）
  - 标签文案（原文，区分 placeholder 和实际文字）
  - 尺寸（宽高 px）、圆角 px、颜色 HEX、字号 px、字重
  - 图标描述（如"左侧 user 图标"）
  - 状态信息（如"当前为聚焦态，边框蓝色"）
  - 如有标注：追加 ⚠️ 标注说明
  - 如有推断：追加推断置信度
- **间距**：相邻组件间的垂直/水平间距，按空间顺序列出
- **交互状态**：仅描述图中可见的状态（hover/聚焦/禁用/错误/加载等）
- **未展示的交互状态**：列出常见但图中未出现的状态，标注 \`(未展示)\`
- **图中模糊或不完整处**：逐项列出，标注 \`(模糊)\` 或 \`(未展示)\``,

    error: `## 场景模板：代码报错 / 终端截图

- **错误信息原文**：逐条完整复制，保留完整路径和行号。不要截断、不要概括
- **文件路径**：报错中出现的所有文件路径（完整路径）
- **堆栈关键帧**：从上到下列出调用栈，格式：\`文件名:行号 — 函数名\`
- **终端/环境信息**：Node 版本、包管理器、OS、终端类型等可见的环境标识
- **推断**：基于错误信息推断可能原因，每条标注 \`推断置信度：高/中/低\`
- **图中模糊或不完整处**：标注 \`(模糊)\` 或 \`(未展示)\``,

    architecture: `## 场景模板：架构图 / 流程图 / ER 图

- **节点/实体清单**：逐项列出图中所有节点，包含：
  - 节点文字标注（原文）
  - 形状（矩形/圆形/菱形/圆柱等）
  - 颜色或填充样式
  - 如有标注：追加 ⚠️ 标注说明
- **关系与连线**：描述连线方向（A→B）、箭头样式、线型（实线/虚线）、线上文字标注（原文）
- **数据流方向**：整体流向（从上到下/从左到右/环形等）
- **图中标注的约束**：图中明确写出的规则、数字、注释（原文）
- **图中模糊或不完整处**：标注 \`(模糊)\` 或 \`(未展示)\`，说明被截断或被遮挡的部分`,

    general: `## 场景模板：通用描述

- **图片类型判断**：照片/手绘/表格/文档/代码片段/混合等
- **完整内容描述**：按空间顺序逐元素描述，不遗漏任何可见信息
- **与代码相关的关键信息**：提取任何可能影响编码决策的信息（数字、命名、结构、层级、颜色等）
- **图中模糊或不完整处**：标注 \`(模糊)\` 或 \`(未展示)\``,
}

// ── 参数解析 ──────────────────────────────────────────────────────────────────

function parseArgs(argv) {
    const args = {
        help: false,
        apiBase: '',
        apiKey: '',
        model: '',
        scene: 'general',
        images: [],
        imageFiles: [],
        question: '',
    }

    for (let i = 0; i < argv.length; i++) {
        switch (argv[i]) {
            case '--help':
            case '-h':
                args.help = true
                break
            case '--api-base':
                args.apiBase = argv[++i]
                break
            case '--api-key':
                args.apiKey = argv[++i]
                break
            case '--model':
                args.model = argv[++i]
                break
            case '--scene':
                args.scene = argv[++i]
                break
            case '--image':
                args.images.push(argv[++i])
                break
            case '--image-file':
                args.imageFiles.push(argv[++i])
                break
            case '--question':
                args.question = argv[++i]
                break
        }
    }

    return args
}

function validateArgs(args) {
    const errors = []
    if (!args.apiBase) errors.push('--api-base 未指定')
    if (!args.apiKey) errors.push('--api-key 未指定')
    if (!args.model) errors.push('--model 未指定')
    if (args.images.length === 0 && args.imageFiles.length === 0) {
        errors.push('--image 或 --image-file 未指定（至少需要一张图片）')
    }
    return errors
}

// ── 图片加载 ──────────────────────────────────────────────────────────────────

const fs = require('fs')
const path = require('path')

/**
 * 从文件路径读取图片并转为 base64 data URL
 */
function fileToDataUrl(filePath) {
    const buf = fs.readFileSync(filePath)
    const ext = path.extname(filePath).slice(1).toLowerCase()
    const mimeMap = { png: 'png', jpg: 'jpeg', jpeg: 'jpeg', gif: 'gif', webp: 'webp', bmp: 'bmp' }
    const mime = mimeMap[ext] || 'png'
    return `data:image/${mime};base64,${buf.toString('base64')}`
}

/**
 * 将所有 imageFiles 转为 data URL，合并到 images 数组
 */
function loadImageFiles(imageFiles) {
    const urls = []
    for (const fp of imageFiles) {
        if (!fs.existsSync(fp)) {
            console.error(`图片文件不存在: ${fp}`)
            process.exit(1)
        }
        urls.push(fileToDataUrl(fp))
    }
    return urls
}

// ── 系统提示词 ────────────────────────────────────────────────────────────────

function buildSystemPrompt(scene) {
    const template = SCENE_TEMPLATES[scene] || SCENE_TEMPLATES.general
    return SYSTEM_PROMPT_TEMPLATE.replace('{scene_template}', template)
}

// ── API 请求构造 ──────────────────────────────────────────────────────────────

function isVolcanoFormat(apiBase) {
    return apiBase.includes('/responses')
}

/**
 * 构造 Volcano Responses API 请求体
 */
function buildVolcanoRequest(model, systemPrompt, images, question) {
    const content = []

    // system prompt + question 合并为第一条文本
    content.push({ type: 'input_text', text: question })

    for (const img of images) {
        content.push({ type: 'input_image', image_url: img })
    }

    return {
        model,
        input: [
            {
                role: 'user',
                content,
            },
        ],
        // system prompt 在 Volcano 格式中作为 instructions
        instructions: systemPrompt,
    }
}

/**
 * 构造 OpenAI 兼容 API 请求体
 */
function buildOpenAIRequest(model, systemPrompt, images, question) {
    const userContent = [{ type: 'text', text: question }]

    for (const img of images) {
        userContent.push({
            type: 'image_url',
            image_url: { url: img },
        })
    }

    return {
        model,
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userContent },
        ],
    }
}

// ── 响应提取 ──────────────────────────────────────────────────────────────────

function extractVolcanoContent(data) {
    if (!data.output || !Array.isArray(data.output)) {
        throw new Error('Volcano API 返回格式异常: 缺少 output 字段')
    }
    const texts = []
    for (const item of data.output) {
        if (item.content && Array.isArray(item.content)) {
            for (const c of item.content) {
                if (c.type === 'output_text' && c.text) {
                    texts.push(c.text)
                }
            }
        }
    }
    return texts.join('\n') || '(模型返回空内容)'
}

function extractOpenAIContent(data) {
    if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
        throw new Error('API 返回格式异常: 缺少 choices 字段')
    }
    const content = data.choices[0]?.message?.content
    return content || '(模型返回空内容)'
}

// ── HTTP 请求 (Node 14 兼容) ───────────────────────────────────────────────────

const http = require('http')
const https = require('https')
const { URL } = require('url')

/**
 * Node 14 兼容的 fetch 替代，返回 { ok, status, text(), json() }
 */
function fetchJson(url, options) {
    return new Promise((resolve, reject) => {
        const parsed = new URL(url)
        const mod = parsed.protocol === 'https:' ? https : http
        const req = mod.request({
            hostname: parsed.hostname,
            port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
            path: parsed.pathname + parsed.search,
            method: options.method || 'GET',
            headers: options.headers || {},
        }, (res) => {
            const chunks = []
            res.on('data', (chunk) => chunks.push(chunk))
            res.on('end', () => {
                const raw = Buffer.concat(chunks)
                const textCache = raw.toString('utf8')
                resolve({
                    ok: res.statusCode >= 200 && res.statusCode < 300,
                    status: res.statusCode,
                    text: () => Promise.resolve(textCache),
                    json: () => Promise.resolve(JSON.parse(textCache)),
                })
            })
        })
        req.on('error', reject)
        if (options.body) req.write(options.body)
        req.end()
    })
}

// ── 主流程 ────────────────────────────────────────────────────────────────────

async function main() {
    const args = parseArgs(process.argv.slice(2))

    if (args.help) {
        console.log('call-vision.js — image-to-context 视觉模型调用脚本')
        console.log('')
        console.log('用法:')
        console.log('  node call-vision.js [选项]')
        console.log('')
        console.log('选项:')
        console.log('  --api-base  <url>     API 地址 (必填)')
        console.log('  --api-key   <key>     API Key (必填)')
        console.log('  --model     <name>    模型名 (必填)')
        console.log('  --scene     <type>    场景类型: ui | error | architecture | general (默认 general)')
        console.log('  --image     <url>     图片 base64 data URL (可重复，必填)')
        console.log('  --question  <text>    用户问题 (必填)')
        console.log('  --help, -h            显示此帮助')
        console.log('')
        console.log('示例:')
        console.log('  node call-vision.js --api-base https://... --api-key sk-xxx --model doubao-seed-2.0-mini --scene ui --image "data:image/png;base64,..." --question "帮我实现"')
        console.log('')
        console.log('系统提示词场景模板:')
        console.log('  ui           UI 设计稿 / 页面截图')
        console.log('  error        代码报错 / 终端截图')
        console.log('  architecture 架构图 / 流程图 / ER 图')
        console.log('  general      通用描述（兜底）')
        process.exit(0)
    }

    const errors = validateArgs(args)

    if (errors.length > 0) {
        console.error('参数错误:')
        errors.forEach((e) => console.error(`  - ${e}`))
        console.error('')
        console.error(
            '用法: node call-vision.js --api-base <url> --api-key <key> --model <name> --scene <type> --image <base64> --image-file <path> --question <text>'
        )
        process.exit(1)
    }

    // 加载 --image-file 指定的文件，转为 data URL 合并到 images
    const fileUrls = loadImageFiles(args.imageFiles)
    args.images = args.images.concat(fileUrls)

    const systemPrompt = buildSystemPrompt(args.scene)
    const isVolcano = isVolcanoFormat(args.apiBase)

    let body, headers

    if (isVolcano) {
        body = buildVolcanoRequest(args.model, systemPrompt, args.images, args.question)
        headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${args.apiKey}`,
        }
    } else {
        body = buildOpenAIRequest(args.model, systemPrompt, args.images, args.question)
        headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${args.apiKey}`,
        }
    }

    let response
    try {
        response = await fetchJson(args.apiBase, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        })
    } catch (err) {
        console.error(`网络请求失败: ${err.message}`)
        process.exit(1)
    }

    if (!response.ok) {
        const errText = await response.text().catch(() => '(无法读取响应体)')
        console.error(`API 返回错误 (${response.status}): ${errText}`)
        process.exit(1)
    }

    let data
    try {
        data = await response.json()
    } catch (err) {
        console.error(`响应 JSON 解析失败: ${err.message}`)
        process.exit(1)
    }

    let content
    try {
        content = isVolcano ? extractVolcanoContent(data) : extractOpenAIContent(data)
    } catch (err) {
        console.error(`响应内容提取失败: ${err.message}`)
        process.exit(1)
    }

    console.log(content)
}

main().catch((err) => {
    console.error(`执行异常: ${err.message}`)
    process.exit(1)
})
