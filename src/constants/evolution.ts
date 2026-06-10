/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
export interface EvolutionSummaryStep {
  id: 'why' | 'how' | 'caution';
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  flowStepsZh?: string[];
  flowStepsEn?: string[];
}

export interface EvolutionCard {
  id: string;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  files: string[];
}

export const EVOLUTION_SUMMARY_STEPS: EvolutionSummaryStep[] = [
  {
    id: 'why',
    titleZh: '为什么要进化',
    titleEn: 'Why evolve',
    summaryZh: 'AI 不能每次都从零开始。Agent 是项目长期负责人，值得把约定、背景和协作习惯留下来，下次任务直接复用。',
    summaryEn:
      'AI should not start from zero every time. The Agent owns the project long-term. Keep conventions, context, and habits for the next task.',
  },
  {
    id: 'how',
    titleZh: '怎么进化',
    titleEn: 'How it works',
    summaryZh: '进化不是 Agent 想改就改。识别机会、整理证据、等你点头，才写入长期资产。',
    summaryEn: 'Evolution is not free-form self-editing. Spot opportunities, file proposals, get your approval, then persist.',
    flowStepsZh: ['识别进化机会', '整理进化申请', '你确认授权', '写入长期资产'],
    flowStepsEn: ['Spot opportunities', 'File proposals', 'You confirm', 'Persist assets'],
  },
  {
    id: 'caution',
    titleZh: '进化需要注意什么',
    titleEn: 'What to watch for',
    summaryZh: '未验证的猜测不能当事实。知识库、Skill、规则改动须你确认。密钥和隐私绝不落盘。',
    summaryEn: 'Unverified guesses are not facts. Knowledge, skills, and rules need your OK. Never persist secrets or private data.',
  },
];

export const EVOLUTION_CARDS: EvolutionCard[] = [
  {
    id: 'memory',
    titleZh: '记忆层沉淀',
    titleEn: 'Memory layer',
    descriptionZh: '保存经授权的长期偏好、项目约定与协作规则，让后续任务更一致。',
    descriptionEn: 'Store authorized preferences, project conventions, and collaboration rules for steadier follow-up work.',
    files: ['docs/agent/memory.md'],
  },
  {
    id: 'knowledge',
    titleZh: '知识库扩展',
    titleEn: 'Knowledge base',
    descriptionZh: '沉淀长期有效、可复用的项目事实与背景，减少重复解释和临时猜测。',
    descriptionEn: 'Accumulate long-lived project facts and context to cut repeated explanations and guesswork.',
    files: ['docs/knowledge/'],
  },
  {
    id: 'skills-rules',
    titleZh: 'Skills & Rules',
    titleEn: 'Skills & Rules',
    descriptionZh: '识别值得沉淀的 skill、rule 与文档，遵循 evolution.md 授权边界后落盘。',
    descriptionEn: 'Spot skills, rules, and docs worth keeping, then persist within the evolution.md authorization boundary.',
    files: ['skills/', 'rules/'],
  },
];
