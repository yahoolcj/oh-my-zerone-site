/**
 * @by oh-my-zerone
 * @date 2026-06-11
 */
export type FaqAnswerBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; text: string };

export interface FaqItem {
  questionZh: string;
  questionEn: string;
  answerZh: FaqAnswerBlock[];
  answerEn: FaqAnswerBlock[];
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    questionZh: 'Skill 没有触发怎么办？',
    questionEn: "What if a skill doesn't trigger?",
    answerZh: [
      {
        type: 'paragraph',
        text: '可以显式使用 skill 名称，例如 `/to-prd`、`/to-coding`、`/to-test`。如果任务描述比较模糊，先说明目标阶段，例如：',
      },
      { type: 'code', text: '我现在要把需求整理成 PRD。' },
      { type: 'paragraph', text: '或：' },
      { type: 'code', text: '我现在要按 PRD 开发第一项 TODO。' },
    ],
    answerEn: [
      {
        type: 'paragraph',
        text: 'Explicitly invoke skill names such as `/to-prd`, `/to-coding`, or `/to-test`. If the task description is vague, state the target phase first, for example:',
      },
      { type: 'code', text: 'I want to organize requirements into a PRD.' },
      { type: 'paragraph', text: 'Or:' },
      { type: 'code', text: 'I want to develop the first TODO from the PRD.' },
    ],
  },
  {
    questionZh: '什么时候用 `grill-me`，什么时候用 `grill-with-docs`？',
    questionEn: 'When should I use `grill-me` vs `grill-with-docs`?',
    answerZh: [
      { type: 'paragraph', text: '如果只是对一个方案持续追问，使用 `grill-me`。' },
      {
        type: 'paragraph',
        text: '如果需要结合仓库已有领域模型、上下文文档、代码现状或 ADR 来压测方案，使用 `grill-with-docs`。',
      },
      { type: 'paragraph', text: '简单理解：' },
      { type: 'list', items: ['`grill-me`：偏通用追问。', '`grill-with-docs`：偏项目内追问和文档对齐。'] },
    ],
    answerEn: [
      { type: 'paragraph', text: 'Use `grill-me` when you need relentless questioning about a plan.' },
      {
        type: 'paragraph',
        text: 'Use `grill-with-docs` when you need to stress-test against existing domain models, context docs, the codebase, or ADRs.',
      },
      { type: 'paragraph', text: 'Simple takeaway:' },
      {
        type: 'list',
        items: ['`grill-me`: general questioning.', '`grill-with-docs`: project-aware questioning and doc alignment.'],
      },
    ],
  },
  {
    questionZh: '什么时候用 `grill-me-ui`，什么时候用 `to-ui`？',
    questionEn: 'When should I use `grill-me-ui` vs `to-ui`?',
    answerZh: [
      {
        type: 'paragraph',
        text: '如果还没有确定 UI 方案，使用 `grill-me-ui`。它负责追问和确认 UI 呈现效果，最终输出设计报告，方便后续交给 `/to-locate` 或 `/to-coding`。',
      },
      {
        type: 'paragraph',
        text: '如果已经有明确 PRD，并希望生成可打开预览的 HTML 原型，使用 `to-ui`。它负责产出 `.UI/*.html` 原型文件。',
      },
    ],
    answerEn: [
      {
        type: 'paragraph',
        text: 'Use `grill-me-ui` when the UI approach is not settled yet. It clarifies presentation through Q&A and outputs a design report for `/to-locate` or `/to-coding`.',
      },
      {
        type: 'paragraph',
        text: 'Use `to-ui` when you have a clear PRD and want previewable HTML prototypes. It produces `.UI/*.html` prototype files.',
      },
    ],
  },
  {
    questionZh: '小需求也必须走完整流程吗？',
    questionEn: 'Do small requests require the full workflow?',
    answerZh: [
      { type: 'paragraph', text: '不一定。' },
      {
        type: 'paragraph',
        text: '简单文档修正、单点样式修复、明确无副作用的小调整可以直接处理。只要涉及组件 API、交互行为、类型声明、文档、测试或发版，建议至少沉淀 PRD 或 issue，避免范围不清。',
      },
    ],
    answerEn: [
      { type: 'paragraph', text: 'Not necessarily.' },
      {
        type: 'paragraph',
        text: 'Simple doc fixes, single-point style tweaks, and clearly low-risk changes can be handled directly. For anything touching component APIs, interactions, types, docs, tests, or releases, capture at least a PRD or issue to keep scope clear.',
      },
    ],
  },
  {
    questionZh: 'issue 没全部完成能不能发版？',
    questionEn: 'Can we release if not all issues are done?',
    answerZh: [
      { type: 'paragraph', text: '不建议。' },
      {
        type: 'paragraph',
        text: '`to-test` 的职责就是在更新 changelog 和版本前检查 `.ISSUES/` 是否全部完成。若仍有未完成项，应先回到 `/to-coding` 或重新讨论需求范围。',
      },
    ],
    answerEn: [
      { type: 'paragraph', text: 'Not recommended.' },
      {
        type: 'paragraph',
        text: '`to-test` checks whether `.ISSUES/` is fully complete before changelog and version updates. If items remain open, go back to `/to-coding` or renegotiate scope.',
      },
    ],
  },
  {
    questionZh: '测试通过后谁来确认？',
    questionEn: 'Who confirms after tests pass?',
    answerZh: [
      { type: 'paragraph', text: 'Agent 可以做静态检查、文档检查、规则检查和流程回收。' },
      {
        type: 'paragraph',
        text: '涉及真实交互体验、视觉还原、业务语义、发布确认时，需要用户或团队成员人工验收。未经过人工确认的 HITL 项，Agent 不应擅自标记为通过。',
      },
    ],
    answerEn: [
      {
        type: 'paragraph',
        text: 'The Agent can run static checks, doc checks, rule checks, and process recovery.',
      },
      {
        type: 'paragraph',
        text: 'Real interaction, visual fidelity, business semantics, and release confirmation require human acceptance. The Agent must not mark HITL items as passed without human confirmation.',
      },
    ],
  },
  {
    questionZh: 'Agent 可以自动修改 skill、rule 或知识库吗？',
    questionEn: 'Can the Agent auto-modify skills, rules, or the knowledge base?',
    answerZh: [
      { type: 'paragraph', text: '不能默认自动修改。' },
      {
        type: 'paragraph',
        text: '如果任务过程中发现值得长期沉淀的 skill、rule、docs、memory 或 knowledge，需要按 `docs/agent/evolution.md` 发起进化申请，并等待用户确认。未经授权，不应直接写入这些长期资产。',
      },
    ],
    answerEn: [
      { type: 'paragraph', text: 'Not by default.' },
      {
        type: 'paragraph',
        text: 'When skills, rules, docs, memory, or knowledge are worth persisting, follow `docs/agent/evolution.md`: raise an evolution request and wait for user confirmation. Do not write to these long-lived assets without authorization.',
      },
    ],
  },
  {
    questionZh: '可以只使用某一个 skill 吗？',
    questionEn: 'Can I use just one skill?',
    answerZh: [
      { type: 'paragraph', text: '可以。' },
      {
        type: 'paragraph',
        text: '`omz` 的设计目标之一就是低耦合。你可以只使用 `/to-review` 做审查，只使用 `/to-commit` 生成提交信息，或只使用 `/to-prd` 生成 PRD。',
      },
    ],
    answerEn: [
      { type: 'paragraph', text: 'Yes.' },
      {
        type: 'paragraph',
        text: 'omz is designed for low coupling. You can use only `/to-review` for review, only `/to-commit` for commit messages, or only `/to-prd` for PRD generation.',
      },
    ],
  },
  {
    questionZh: '和普通 prompt 模版有什么区别？',
    questionEn: 'How is this different from ordinary prompt templates?',
    answerZh: [
      { type: 'paragraph', text: '普通 prompt 更像一次性指令，适合临时任务。' },
      {
        type: 'paragraph',
        text: '`oh-my-zerone` 更像项目内的协作协议：它把权限、流程、文档、验收、review 和提交方式都固化下来，让 Agent 每次都能按同一套规则工作。',
      },
    ],
    answerEn: [
      { type: 'paragraph', text: 'Ordinary prompts are one-off instructions suited to ad-hoc tasks.' },
      {
        type: 'paragraph',
        text: 'oh-my-zerone is more like an in-project collaboration protocol: permissions, workflows, docs, acceptance, review, and commit practices are codified so the Agent follows the same rules every time.',
      },
    ],
  },
];
