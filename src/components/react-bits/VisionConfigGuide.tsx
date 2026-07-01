/**
 * @by oh-my-zerone
 * @description image-to-context 视觉模型配置引导组件
 */
import { VISION_PROVIDERS } from '@/constants/vision-providers'

export interface Props {
  locale?: 'zh' | 'en'
}

const t = {
  title: { zh: '配置指南', en: 'Configuration Guide' },
  dependency: {
    zh: '前置依赖',
    en: 'Prerequisite',
  },
  dependencyText: {
    zh: '需要 zerone/cli >= 0.8.0',
    en: 'Requires zerone/cli >= 0.8.0',
  },
  configIntro: {
    zh: '视觉模型通过 ~/.omz/vision.config.json 配置。你可以直接编辑该文件来切换厂商、修改模型或 API Key，也可以手动添加其他兼容 OpenAI Chat Completions 格式的视觉模型厂商。',
    en: 'Vision models are configured via ~/.omz/vision.config.json. You can directly edit this file to switch providers, change models, or update API keys. You may also manually add other providers compatible with the OpenAI Chat Completions format.',
  },
  configFileTitle: {
    zh: '配置文件结构',
    en: 'Config File Structure',
  },
  setApiKey: {
    zh: '设置 API Key',
    en: 'Set API Key',
  },
  setApiKeyCmd: {
    zh: '通过 CLI 命令配置',
    en: 'Configure via CLI',
  },
  switchProvider: {
    zh: '切换厂商：修改 provider 字段为对应 key 即可。',
    en: 'Switch provider: change the provider field to the corresponding key.',
  },
  providerTitle: {
    zh: '支持的模型厂商',
    en: 'Supported Providers',
  },
  getApiKey: {
    zh: '获取 API Key',
    en: 'Get API Key',
  },
  viewModels: {
    zh: '查看模型列表',
    en: 'View Models',
  },
  defaultModel: {
    zh: '默认模型',
    en: 'Default Model',
  },
  tip: {
    zh: '提示：API Key 通过 zerone set vision-apikey 写入后存储在本地，不会上传到任何服务器。',
    en: 'Tip: API Keys are stored locally via zerone set vision-apikey and are never uploaded to any server.',
  },
}

export default function VisionConfigGuide({ locale = 'zh' }: Props) {
  const isZh = locale === 'zh'

  return (
    <section className="mt-12 space-y-8">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-[var(--color-text)]">
        {t.title[locale]}
      </h2>

      {/* Dependency */}
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
        <span className="text-sm font-semibold text-[var(--color-text-secondary)]">
          {t.dependency[locale]}
        </span>
        <code className="ml-2 rounded bg-[var(--color-surface-muted)] px-2 py-0.5 text-sm font-mono text-[var(--color-accent)]">
          zerone/cli &gt;= 0.8.0
        </code>
      </div>

      {/* Config file explanation */}
      <div>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {t.configIntro[locale]}
        </p>
      </div>

      {/* JSON Structure */}
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
          {t.configFileTitle[locale]}
        </h3>
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] px-4 py-2 bg-[var(--color-surface-muted)]">
            <span className="inline-block h-3 w-3 rounded-full bg-[#ef4444]" />
            <span className="inline-block h-3 w-3 rounded-full bg-[#f59e0b]" />
            <span className="inline-block h-3 w-3 rounded-full bg-[#10b981]" />
            <span className="ml-2 text-xs text-[var(--color-text-muted)] font-mono">
              ~/.omz/vision.config.json
            </span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm font-mono text-[var(--color-text)] leading-relaxed">
{`{
  "provider": "volcano",
  "providers": {
    "volcano": {
      "name": "火山引擎",
      "api_base": "https://ark.cn-beijing.volces.com/api/v3/responses",
      "model": "doubao-seed-2.0-mini",
      "api_key": "your-api-key-here"
    },
    "qwen": {
      "name": "通义千问",
      "api_base": "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
      "model": "qwen-vl-max",
      "api_key": ""
    },
    "glm": {
      "name": "智谱 GLM",
      "api_base": "https://open.bigmodel.cn/api/paas/v4/chat/completions",
      "model": "glm-4v",
      "api_key": ""
    }
  }
}`}</pre>
        </div>
      </div>

      {/* CLI Command */}
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
          {t.setApiKey[locale]}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
          {t.setApiKeyCmd[locale]}
        </p>
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] px-4 py-2 bg-[var(--color-surface-muted)]">
            <span className="inline-block h-3 w-3 rounded-full bg-[#ef4444]" />
            <span className="inline-block h-3 w-3 rounded-full bg-[#f59e0b]" />
            <span className="inline-block h-3 w-3 rounded-full bg-[#10b981]" />
            <span className="ml-2 text-xs text-[var(--color-text-muted)] font-mono">
              terminal
            </span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm font-mono text-[var(--color-text)]">
{`$ zerone set vision-apikey`}
          </pre>
        </div>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          {t.switchProvider[locale]}
        </p>
      </div>

      {/* Provider Cards */}
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
          {t.providerTitle[locale]}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {VISION_PROVIDERS.map((p) => (
            <div
              key={p.id}
              className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex flex-col gap-3"
            >
              <h4 className="text-base font-semibold text-[var(--color-text)]">
                {isZh ? p.name : p.nameEn}
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {isZh ? p.desc : p.descEn}
              </p>
              <div className="flex flex-col gap-1.5 mt-auto pt-2 border-t border-[var(--color-border)]">
                <a
                  href={p.apiKeyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-accent)] hover:underline inline-flex items-center gap-1"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  {t.getApiKey[locale]}
                </a>
                <a
                  href={p.modelListUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-accent)] hover:underline inline-flex items-center gap-1"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  {t.viewModels[locale]}
                </a>
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">
                {t.defaultModel[locale]}:{' '}
                <code className="rounded bg-[var(--color-surface-muted)] px-1.5 py-0.5 font-mono">
                  {p.defaultModel}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Tip */}
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-4">
        <p className="text-sm text-[var(--color-text-muted)]">
          {t.tip[locale]}
        </p>
      </div>
    </section>
  )
}
