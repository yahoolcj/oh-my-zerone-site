/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
export interface StructureModule {
  id: string;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  files: string[];
}

export const STRUCTURE_MODULES: StructureModule[] = [
  {
    id: 'root-entry',
    titleZh: '根目录入口',
    titleEn: 'Root entry files',
    descriptionZh: 'Agent 协作入口与项目上下文地图，放在项目根目录',
    descriptionEn: 'Agent entry points and project context maps at the repository root',
    files: ['AGENTS.md', 'CONTEXT.md', 'CONTEXT-MAP.md'],
  },
  {
    id: 'agent-docs',
    titleZh: 'Agent Docs',
    titleEn: 'Agent Docs',
    descriptionZh: '权限、工作流、review 规范与进化授权机制',
    descriptionEn: 'Permissions, workflow, review rules, and evolution authorization',
    files: [
      'docs/agent/introduction.md',
      'docs/agent/permission.md',
      'docs/agent/workflow.md',
      'docs/agent/review.md',
      'docs/agent/evolution.md',
    ],
  },
  {
    id: 'knowledge',
    titleZh: 'Knowledge',
    titleEn: 'Knowledge',
    descriptionZh: '可复用项目事实与领域背景，供 Agent 多次引用',
    descriptionEn: 'Reusable project facts and domain background for repeated Agent reference',
    files: ['docs/knowledge/'],
  },
  {
    id: 'rules',
    titleZh: 'Rules',
    titleEn: 'Rules',
    descriptionZh: '长期全局强约束，放在编辑器专属目录下',
    descriptionEn: 'Long-term global constraints inside the editor-specific directory',
    files: ['rules/coding.mdc'],
  },
  {
    id: 'skills',
    titleZh: 'Skills',
    titleEn: 'Skills',
    descriptionZh: '可独立触发的阶段能力，按需在编辑器 skills 目录安装',
    descriptionEn: 'Independently invocable stage skills installed per editor',
    files: ['skills/setup-omz/', 'skills/to-prd/', 'skills/to-coding/', '...'],
  },
];
