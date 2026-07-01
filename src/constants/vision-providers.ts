/**
 * @by oh-my-zerone
 * @description image-to-context 视觉模型厂商配置数据
 *
 * 新增厂商：在 VISION_PROVIDERS 数组中追加即可，组件自动渲染。
 */

export interface VisionProvider {
  /** 厂商标识，对应 vision.config.json providers 中的 key */
  id: string
  /** 中文名称 */
  name: string
  /** 英文名称 */
  nameEn: string
  /** 中文简介 */
  desc: string
  /** 英文简介 */
  descEn: string
  /** 获取 API Key 的地址 */
  apiKeyUrl: string
  /** 查看模型列表的地址 */
  modelListUrl: string
  /** 默认模型 */
  defaultModel: string
}

export const VISION_PROVIDERS: VisionProvider[] = [
  {
    id: 'volcano',
    name: '火山引擎（豆包）',
    nameEn: 'Volcano Engine (Doubao)',
    desc: '字节跳动旗下视觉模型，支持超高分辨率图片，识别精确度高。',
    descEn:
      'ByteDance vision model with ultra-high resolution support and high recognition accuracy.',
    apiKeyUrl: 'https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey',
    modelListUrl: 'https://www.volcengine.com/docs/82379/1330310',
    defaultModel: 'doubao-seed-2.0-mini',
  },
  {
    id: 'qwen',
    name: '通义千问',
    nameEn: 'Qwen (Tongyi Qianwen)',
    desc: '阿里云视觉模型，支持多尺寸图片，性价比高。',
    descEn:
      'Alibaba Cloud vision model with multi-resolution support and great cost efficiency.',
    apiKeyUrl: 'https://dashscope.console.aliyun.com/apiKey',
    modelListUrl: 'https://help.aliyun.com/zh/model-studio/getting-started/models',
    defaultModel: 'qwen-vl-max',
  },
  {
    id: 'glm',
    name: '智谱 GLM',
    nameEn: 'Zhipu GLM',
    desc: '智谱 AI 多模态模型，支持中英文混合图片理解。',
    descEn:
      'Zhipu AI multimodal model with strong Chinese-English mixed image understanding.',
    apiKeyUrl: 'https://open.bigmodel.cn/usercenter/apikeys',
    modelListUrl: 'https://open.bigmodel.cn/dev/api/normal-model/glm-4',
    defaultModel: 'glm-4v',
  },
]
