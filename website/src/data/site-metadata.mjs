import { canonicalUrl, canonicalOrigin } from './site-urls.mjs';
const descriptions = {
  'cases/mco-runtime': {
    en: ['V-Diagram MCO Runtime Case — Source-backed Architecture', 'Follow pinned MCO source to distinguish provider-output decoding, streamed answer writes and retained artifacts. Read the existing V-Diagram diagram with explicit evidence limits.'],
    zh: ['V-Diagram MCO 运行时案例 — 对照源码阅读架构', '沿固定版本的 MCO 源码区分输出解码、流式答案写入与产物保留，结合已有 V-Diagram 架构图理解职责、持久化条件与证据边界。'],
  },
  'agent-diagrams': {
    en: ['V-Diagram Agent Diagramming Guide — Author, Review, Share', 'Create diagrams with Claude Code, Codex, Cursor and other coding agents. Learn bounded prompts, repository evidence, review checks and safe HTML sharing with V-Diagram.'],
    zh: ['V-Diagram Agent 画图指南 — 编写、检查与分享', '用 Claude Code、Codex、Cursor 等 Coding Agent 画图：从范围明确的提示词和仓库证据开始，检查事实、修改图表，再安全分享 V-Diagram HTML 成品。'],
  },
  index: {
    en: ['V-Diagram — AI Agent Skill for Interactive Diagrams and One-Page Answers', 'V-Diagram is an Apache-2.0-licensed AI agent skill for validated HTML diagrams and conclusion-first one-page answers from descriptions or code, with interactive exploration, cited sources and browser export.'],
    zh: ['V-Diagram — 用自然语言生成交互式图表和一页式解答', 'V-Diagram 是采用 Apache-2.0 许可证的 AI Agent 技能，可从自然语言或源码生成经过验证的独立 HTML 图表和结论在前、标注出处的一页式解答，支持交互探索与浏览器导出。'],
  },
  guide: {
    en: ['V-Diagram Scenario Guide — Choose the Right Diagram', 'Choose an V-Diagram diagram recipe for your question. Browse evidence checklists, use cases, boundaries, and prompts linked to the recipe source.'],
    zh: ['V-Diagram 场景指南 — 选择合适的图表', '从需要解释的问题出发选择图表配方，查看与 V-Diagram 配方源码一致的场景、证据清单、使用边界和可复制提示词。'],
  },
  start: {
    en: ['V-Diagram Start — Create Your First Diagram', 'Install V-Diagram for your AI agent and create a diagram from a description or code. Choose your agent, diagram type, and input to copy a command and prompt.'],
    zh: ['V-Diagram 快速上手 — 创建第一张图', '为你的 AI Agent 安装 V-Diagram 技能，从自然语言或代码仓库创建图表。选择 Agent、图表类型和输入方式，复制对应的命令与提示词。'],
  },
  gallery: {
    en: ['V-Diagram Proof Lab — Validated Diagram Gallery', 'Explore validated V-Diagram diagrams and one-page answers with interactive HTML, their JSON or Markdown sources, and recorded checks. Automated validation and human visual review appear separately.'],
    zh: ['V-Diagram 验证作品集 — 可探索的图表成品', '探索经过验证的 V-Diagram 图表和一页式解答，查看交互式 HTML 成品、对应的 JSON 或 Markdown 源码与检查记录。自动验证与人工视觉评审分别列出。'],
  },
  community: {
    en: ['V-Diagram Community — Packages Built on V-Diagram', 'Explore independent packages built on V-Diagram: skills, recipes, themes, locales, and CLI wrappers, with source, license, compatibility, and evidence.'],
    zh: ['V-Diagram 社区 — 基于 V-Diagram 的独立包', '浏览基于 V-Diagram 的独立社区包，包括技能、配方、主题、语言包与 CLI 封装，并查看源码、许可证、兼容性和验证证据。'],
  },
};
export function pageMetadata(page, lang, version) {
  const [title, description] = descriptions[page][lang];
  const canonical = canonicalUrl(page, lang);
  return { title, description, canonical, image: `${canonicalOrigin}/assets/v-diagram-social-preview.png`,
    schema: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebSite', '@id': `${canonicalOrigin}/#website`, url: `${canonicalOrigin}/`, name: 'V-Diagram', inLanguage: ['en', 'zh-Hans'] },
      { '@type': 'SoftwareSourceCode', '@id': `${canonicalOrigin}/#source`, name: 'V-Diagram', codeRepository: 'https://github.com/mbnetworku/V-Diagram', url: 'https://github.com/mbnetworku/V-Diagram', license: 'https://github.com/mbnetworku/V-Diagram/blob/main/LICENSE', version, programmingLanguage: 'JavaScript', description: descriptions.index[lang][1] },
      ...(['agent-diagrams', 'cases/mco-runtime'].includes(page) ? [{ '@type': 'TechArticle', '@id': `${canonical}#article`, url: canonical, headline: title, description, inLanguage: lang === 'zh' ? 'zh-Hans' : 'en', isPartOf: { '@id': `${canonicalOrigin}/#website` }, about: { '@id': `${canonicalOrigin}/#source` } }] : []),
    ] },
  };
}
