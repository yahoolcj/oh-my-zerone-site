/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
export interface PainPoint {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    titleZh: '改动范围失控',
    titleEn: 'Scope creep',
    descriptionZh: '一句话需求却顺手重构周边组件、样式和工具函数',
    descriptionEn: 'One-line asks trigger refactors across components, styles, and utils',
  },
  {
    titleZh: '简单功能复杂化',
    titleEn: 'Over-engineering',
    descriptionZh: '按钮状态或表单校验被设计成多层抽象和复杂状态机',
    descriptionEn: 'Simple UI states become layered abstractions and state machines',
  },
  {
    titleZh: '忽略项目规则',
    titleEn: 'Rule blindness',
    descriptionZh: '按通用最佳实践写代码，却不遵守项目目录与编码约定',
    descriptionEn: 'Generic best practices ignore project conventions and coding rules',
  },
  {
    titleZh: '验收口径不清',
    titleEn: 'Vague acceptance',
    descriptionZh: '没有明确验收标准，只能靠肉眼判断「差不多」',
    descriptionEn: 'No clear acceptance criteria, only eyeballing "good enough"',
  },
];
