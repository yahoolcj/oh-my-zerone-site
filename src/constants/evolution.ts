/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
export interface EvolutionCard {
  id: string;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  files: string[];
}

export const EVOLUTION_CARDS: EvolutionCard[] = [
  {
    id: 'memory',
    titleZh: 'Memory 记忆层',
    titleEn: 'Memory layer',
    descriptionZh: '沉淀经确认的项目约定与协作偏好，短而准，长期有效',
    descriptionEn: 'Store confirmed project conventions and collaboration preferences',
    files: ['docs/agent/memory.md'],
  },
  {
    id: 'knowledge',
    titleZh: 'Knowledge 知识库',
    titleEn: 'Knowledge base',
    descriptionZh: '记录可复用的项目事实、领域背景与历史决策说明',
    descriptionEn: 'Record reusable project facts, domain context, and decision history',
    files: ['docs/knowledge/'],
  },
  {
    id: 'skills-rules',
    titleZh: 'Skills & Rules',
    titleEn: 'Skills & Rules',
    descriptionZh: '进化可复用任务能力与长期执行规则，须经授权落盘',
    descriptionEn: 'Evolve reusable task skills and long-term rules with explicit approval',
    files: ['skills/', 'rules/'],
  },
];
