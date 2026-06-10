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
  heroInstallCmd: 'zerone setup omz',
  heroInstallCommands: ['npm install @zerone/cli', 'zerone setup omz'],
  cliInstallCmd:
    'npm install -g @zerone/cli --registry=http://10.0.0.74:8081/repository/npm-group/',
  cliInstallCmdPublic: 'npm install -g @zerone/cli',
};
