/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
export type SkillCategory = 'clarify' | 'plan' | 'develop' | 'review' | 'utility';

export interface SkillMeta {
  slug: string;
  name: string;
  descriptionZh: string;
  descriptionEn: string;
  category: SkillCategory;
}

export const SKILLS_META: SkillMeta[] = [
  {
    slug: 'setup-omz',
    name: 'setup-omz',
    descriptionZh: '安装后扫描项目技术栈，生成 introduction.md',
    descriptionEn: 'Scan project stack and generate introduction.md after install',
    category: 'utility',
  },
  {
    slug: 'grill-me',
    name: 'grill-me',
    descriptionZh: '持续追问方案细节，帮助需求对齐',
    descriptionEn: 'Relentlessly interview to align requirements',
    category: 'clarify',
  },
  {
    slug: 'grill-with-docs',
    name: 'grill-with-docs',
    descriptionZh: '结合项目上下文与 ADR 压测方案',
    descriptionEn: 'Stress-test plans against project context and ADRs',
    category: 'clarify',
  },
  {
    slug: 'grill-me-ui',
    name: 'grill-me-ui',
    descriptionZh: 'UI 开发前澄清界面呈现与验收口径',
    descriptionEn: 'Clarify UI presentation before development',
    category: 'clarify',
  },
  {
    slug: 'to-prd',
    name: 'to-prd',
    descriptionZh: '把上下文整理成标准 PRD 文档',
    descriptionEn: 'Turn context into a structured PRD document',
    category: 'plan',
  },
  {
    slug: 'to-plan',
    name: 'to-plan',
    descriptionZh: '整理工作计划与待办，标注 AFK 值',
    descriptionEn: 'Organize work plan with AFK ratings',
    category: 'plan',
  },
  {
    slug: 'to-issues',
    name: 'to-issues',
    descriptionZh: '把 PRD 切分为可独立验收的 issue',
    descriptionEn: 'Slice PRD into independently verifiable issues',
    category: 'plan',
  },
  {
    slug: 'to-locate',
    name: 'to-locate',
    descriptionZh: '只读定位 BUG 与小需求，输出定位报告',
    descriptionEn: 'Read-only bug and small-change locating',
    category: 'develop',
  },
  {
    slug: 'to-explain',
    name: 'to-explain',
    descriptionZh: '只读解释代码对象与业务概念',
    descriptionEn: 'Read-only explanations of code and domain concepts',
    category: 'utility',
  },
  {
    slug: 'to-ui',
    name: 'to-ui',
    descriptionZh: '基于 PRD 生成可预览的 UI 原型 HTML',
    descriptionEn: 'Generate previewable UI prototype HTML from PRD',
    category: 'develop',
  },
  {
    slug: 'to-coding',
    name: 'to-coding',
    descriptionZh: '按 PRD TODOQ 逐项编码，等待验收',
    descriptionEn: 'Code item-by-item per PRD TODOQ with user gate',
    category: 'develop',
  },
  {
    slug: 'to-test',
    name: 'to-test',
    descriptionZh: '测试回收与验收确认',
    descriptionEn: 'Test recovery and acceptance confirmation',
    category: 'review',
  },
  {
    slug: 'to-quality-review',
    name: 'to-quality-review',
    descriptionZh: '只读静态代码质量质检报告',
    descriptionEn: 'Read-only static code quality inspection',
    category: 'review',
  },
  {
    slug: 'to-review',
    name: 'to-review',
    descriptionZh: '按 review 清单输出通过/未通过',
    descriptionEn: 'Review against checklist with pass/fail output',
    category: 'review',
  },
  {
    slug: 'to-commit',
    name: 'to-commit',
    descriptionZh: '生成规范 commit message 与 PR 描述',
    descriptionEn: 'Generate commit messages and PR descriptions',
    category: 'review',
  },
  {
    slug: 'frontend-design',
    name: 'frontend-design',
    descriptionZh: '生成有设计感的生产级前端界面',
    descriptionEn: 'Generate distinctive production-grade interfaces',
    category: 'utility',
  },
  {
    slug: 'caveman',
    name: 'caveman',
    descriptionZh: '极简压缩沟通模式，节省 token',
    descriptionEn: 'Ultra-compressed communication mode to save tokens',
    category: 'utility',
  },
];

export function getSkillMeta(slug: string): SkillMeta | undefined {
  return SKILLS_META.find((s) => s.slug === slug);
}
