/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
export interface QuickStartStep {
  step: number;
  titleZh: string;
  titleEn: string;
  command?: string;
  linkPath?: string;
}

export const QUICK_START_STEPS: QuickStartStep[] = [
  {
    step: 1,
    titleZh: '安装 zerone/cli',
    titleEn: 'Install zerone/cli',
    command: 'npm install -g @zerone/cli',
    linkPath: '/docs/install',
  },
  {
    step: 2,
    titleZh: '安装 omz 套件',
    titleEn: 'Setup omz suite',
    command: 'zerone setup omz',
    linkPath: '/docs/install',
  },
  {
    step: 3,
    titleZh: '首次项目扫描',
    titleEn: 'Run first project scan',
    command: '/setup-omz',
    linkPath: '/docs/install',
  },
];
