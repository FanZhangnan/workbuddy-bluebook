import type { DefaultTheme } from 'vitepress'
import { parts, curriculum } from './curriculum'

const accentToCard = { indigo: '', rose: 'rose', amber: 'amber', mint: 'mint' } as const

export const bluebookSidebar: DefaultTheme.SidebarItem[] = parts.map((part) => ({
  text: `第${part.number}篇 · ${part.title}`,
  collapsed: false,
  items: curriculum
    .filter((chapter) => chapter.part === part.number)
    .map((chapter) => ({ text: `${chapter.emoji} ${chapter.number}. ${chapter.title}`, link: chapter.route }))
}))

export const sidebar: DefaultTheme.Sidebar = {
  '/bluebook/': bluebookSidebar,
  '/cases/community/': [{ text: '社区案例', items: [
    { text: '会议纪要转行动台账', link: '/cases/community/meeting-actions' },
    { text: '公开资料转竞品简报', link: '/cases/community/public-research-brief' }
  ] }],
  '/appendices/': [{ text: '附录', items: [
    { text: '术语表', link: '/appendices/glossary' },
    { text: '安全基线', link: '/appendices/security-baseline' },
    { text: '版本兼容', link: '/appendices/version-compatibility' },
    { text: '故障索引', link: '/appendices/troubleshooting' }
  ] }]
}

export { accentToCard }
