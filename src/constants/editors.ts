/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
export interface EditorItem {
  id: string;
  name: string;
  iconSlug: string;
  url?: string;
}

export const EDITORS: EditorItem[] = [
  { id: 'cursor', name: 'Cursor', iconSlug: 'cursor', url: 'https://cursor.com' },
  { id: 'claude', name: 'Claude Code', iconSlug: 'anthropic', url: 'https://claude.ai' },
  { id: 'codex', name: 'Codex', iconSlug: 'openai', url: 'https://openai.com' },
  { id: 'trae', name: 'Trae', iconSlug: 'bytedance', url: 'https://www.trae.ai' },
  { id: 'vscode', name: 'VS Code', iconSlug: 'visualstudiocode', url: 'https://code.visualstudio.com' },
  { id: 'windsurf', name: 'Windsurf', iconSlug: 'codeium', url: 'https://codeium.com/windsurf' },
];
