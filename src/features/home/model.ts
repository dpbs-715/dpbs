import type { ContactItem, Language, ProjectItem } from './types'

type HomeCopy = {
  intro: {
    label: string
    name: string
    title: string
    description: string
  }
  contacts: ContactItem[]
  skillsTitle: string
  skills: string[]
  projectsTitle: string
  projects: ProjectItem[]
  summaryTitle: string
  summary: string
}

export const icpNumber = '鲁ICP备2026022066号'

const skills: string[] = [
  'Vue 3',
  'TypeScript',
  'Vite',
  'Nuxt',
  'UniApp',
  'Element Plus',
  'Pinia',
  'Three.js',
  'Node.js',
  'Java',
  'Spring Boot',
  'Spring Cloud',
  'MyBatis',
  'MySQL / Redis',
  'Elasticsearch',
  'WebSocket / MQTT',
  'AI-Assisted Development',
]

const contacts: ContactItem[] = [
  {
    label: 'Email',
    value: '840886454@qq.com',
    href: 'mailto:840886454@qq.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/dpbs-715',
    href: 'https://github.com/dpbs-715',
  },
]

export const homeCopy: Record<Language, HomeCopy> = {
  en: {
    intro: {
      label: 'RESUME',
      name: 'DPBS',
      title: 'Frontend Engineer / Vue, TypeScript & Java',
      description:
        'I build enterprise frontends, component systems, and Java-backed product workflows with a strong bias toward maintainable delivery and practical AI-assisted development.',
    },
    contacts: [
      ...contacts,
      {
        label: 'Location',
        value: 'China / Remote',
      },
    ],
    skillsTitle: 'Skills',
    skills,
    projectsTitle: 'Projects',
    projects: [
      {
        title: 'JuiceWord',
        href: 'https://github.com/dpbs-715/JuiceWord',
        description:
          'A TypeScript browser extension for selection-based translation. Built with WXT, React, Chrome extension APIs, local chrome.storage configuration, a native content-script floating panel, and OpenAI-compatible chat completions.',
      },
      {
        title: 'Vunio',
        href: 'https://github.com/dpbs-715/vunio',
        description:
          'A Vue 3.5 + TypeScript component library template built around Turborepo, pnpm, VitePress docs, shared hooks, directives, utilities, lint presets, changesets, and package publishing workflows.',
      },
      {
        title: 'DPBS Resume Site',
        href: 'https://github.com/dpbs-715/dpbs',
        description:
          'A minimal personal resume site using Next.js App Router, React, TypeScript, and Tailwind CSS. Designed as a small public surface for keeping profile content, dependency hygiene, and deployment workflow clean.',
      },
      {
        title: 'XSwitch',
        href: 'https://github.com/dpbs-715/XSwitch',
        description:
          'A server-local Xray subscription switching panel built with Next.js, React, and TypeScript. It refreshes subscriptions, parses vmess, vless, trojan, and ss nodes, checks TCP latency, writes selected outbound config with backups, and restarts Xray safely.',
      },
    ],
    summaryTitle: 'Summary',
    summary:
      'Frontend engineer with 5+ years of experience across enterprise management systems, IoT dashboards, mobile mini-programs, SSR websites, and data-heavy business workflows. My early Java full-stack work with Spring Boot, MyBatis, MySQL, Redis, and Elasticsearch makes me comfortable reading backend contracts, shaping APIs with backend teams, and handling product workflows end to end. I care about reusable architecture, typed contracts, build tooling, and turning AI coding tools into a reliable part of everyday engineering.',
  },
  zh: {
    intro: {
      label: '简历',
      name: 'DPBS',
      title: '前端工程师 / Vue、TypeScript 与 Java',
      description:
        '我专注于企业级前端、组件系统，以及由 Java 后端支撑的产品流程，重视可维护交付和实用的 AI 辅助开发。',
    },
    contacts: [
      ...contacts,
      {
        label: '所在地',
        value: '中国 / 远程',
      },
    ],
    skillsTitle: '技能',
    skills,
    projectsTitle: '项目',
    projects: [
      {
        title: 'JuiceWord',
        href: 'https://github.com/dpbs-715/JuiceWord',
        description:
          '一个用于划词翻译的 TypeScript 浏览器插件，基于 WXT、React、Chrome extension APIs 和本地 chrome.storage 配置构建，支持右键触发翻译，并用原生 content script 浮层展示 OpenAI 兼容接口返回的结果。',
      },
      {
        title: 'Vunio',
        href: 'https://github.com/dpbs-715/vunio',
        description:
          '一个 Vue 3.5 + TypeScript 组件库模板，围绕 Turborepo、pnpm、VitePress 文档、共享 hooks、directives、utilities、lint 预设、changesets 和发包流程构建。',
      },
      {
        title: 'DPBS Resume Site',
        href: 'https://github.com/dpbs-715/dpbs',
        description:
          '一个使用 Next.js App Router、React、TypeScript 和 Tailwind CSS 构建的极简个人简历站点，用于维护公开资料、依赖健康和部署流程。',
      },
      {
        title: 'XSwitch',
        href: 'https://github.com/dpbs-715/XSwitch',
        description:
          '一个运行在服务器本地的 Xray 订阅切换面板，支持刷新订阅、解析 vmess、vless、trojan、ss 节点、检测 TCP 延迟、带备份写入选中出站配置，并安全重启 Xray。',
      },
    ],
    summaryTitle: '总结',
    summary:
      '拥有 5 年以上前端经验，覆盖企业管理系统、IoT 数据看板、移动端小程序、SSR 网站和数据密集型业务流程。早期 Java 全栈经历包括 Spring Boot、MyBatis、MySQL、Redis 和 Elasticsearch，这让我能更顺畅地理解后端契约、与后端团队协作设计 API，并端到端推进产品流程。我关注可复用架构、类型化契约、构建工具，以及把 AI 编码工具变成日常工程中可靠的一部分。',
  },
}

export const languageOptions: { label: string; value: Language }[] = [
  { label: 'EN', value: 'en' },
  { label: '中', value: 'zh' },
]

export const defaultLanguage: Language = 'en'

export function resolveLanguage(value: unknown): Language | null {
  if (value === 'en' || value === 'zh') {
    return value
  }

  return null
}
