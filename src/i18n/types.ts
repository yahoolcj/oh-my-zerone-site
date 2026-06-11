/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
export type Locale = 'zh' | 'en';

export interface I18nLocale {
  code: Locale;
  label: string;
  prefix: string;
}

export interface UiStrings {
  navDocs: string;
  navSkills: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroCtaSecondary: string;
  copy: string;
  copied: string;
  painTitle: string;
  painSubtitle: string;
  evolutionTitle: string;
  evolutionLobster: string;
  evolutionSubtitle: string;
  evolutionAgentRole: string;
  evolutionTargetsTitle: string;
  evolutionLink: string;
  structureTitle: string;
  structureSubtitle: string;
  structureLink: string;
  directoryTitle: string;
  directorySubtitle: string;
  directoryTitleFull: string;
  directoryRootLabel: string;
  directoryEditorLabel: string;
  directoryLink: string;
  editorsTitle: string;
  editorsSubtitle: string;
  skillsTitle: string;
  skillsSubtitle: string;
  skillsViewAll: string;
  quickStartTitle: string;
  quickStartSubtitle: string;
  quickStartLink: string;
  footerDocs: string;
  footerTagline: string;
  docsOverview: string;
  docsInstall: string;
  docsStructure: string;
  docsEvolution: string;
  docsSkills: string;
  installNoteInternal: string;
  installNotePublic: string;
  tipsTitle: string;
  tipsSubtitle: string;
  tipsViewAll: string;
  tipsBackToList: string;
  navTips: string;
  tipsIndexTitle: string;
  footerTips: string;
  faqTitle: string;
  faqSubtitle: string;
}
