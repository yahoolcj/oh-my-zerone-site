/**
 * @by oh-my-zerone
 * @date 2026-06-10
 */
import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: false,
});

export function renderMarkdown(content: string): string {
  return marked.parse(content) as string;
}
