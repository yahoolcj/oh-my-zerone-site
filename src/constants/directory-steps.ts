/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
export interface DirectoryStep {
  step: number;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  items: string[];
}

export const DIRECTORY_STEPS: DirectoryStep[] = [
  {
    step: 1,
    titleZh: '项目根目录准备',
    titleEn: 'Prepare project root',
    descriptionZh: 'docs 目录放在项目根目录下',
    descriptionEn: 'Place the docs directory under the project root',
    items: ['docs/'],
  },
  {
    step: 2,
    titleZh: '根目录文件放置',
    titleEn: 'Place root files',
    descriptionZh: '协作入口与上下文地图均放在项目根目录',
    descriptionEn: 'Entry files and context maps live at the project root',
    items: ['AGENTS.md', 'CONTEXT.md', 'CONTEXT-MAP.md'],
  },
  {
    step: 3,
    titleZh: '编辑器专属目录配置',
    titleEn: 'Configure editor directory',
    descriptionZh: 'rules 和 skills 放在 .cursor/ 或 .trae/ 下，不放根目录',
    descriptionEn: 'Put rules and skills under .cursor/ or .trae/, not the project root',
    items: ['rules/', 'skills/'],
  },
];
