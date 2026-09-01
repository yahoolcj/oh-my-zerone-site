/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
export const SITE_CONFIG = {
  version: '1.2.0',
  siteName: 'oh-my-zerone',
  brandDisplayName: 'Oh My Zerone',
  siteAbbr: 'omz',
  defaultLocale: 'zh' as const,
  heroInstallCmd: 'dsh plugin add @vigalai/dsh-plugin-zerone',
  heroInstallCommands: [
    '请你仔细阅读 https://github.com/yahoolcj/dsh-plugin-zerone/blob/main/install.md，并且安装这个插件。',
  ],
  cliInstallCmd:
    'npm install -g @zerone/cli --registry=http://10.0.0.74:8081/repository/npm-group/',
  cliInstallCmdPublic: 'npm install -g @zerone/cli',
};
