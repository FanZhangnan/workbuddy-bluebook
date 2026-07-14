import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

const siteUrl = process.env.SITE_URL || 'http://localhost:4173'
const repositoryUrl = process.env.REPOSITORY_URL || 'https://github.com/workbuddy-bluebook/workbuddy-bluebook'

export default defineConfig({
  lang: 'zh-CN',
  title: 'WorkBuddy 蓝皮书',
  description: '帮助非技术职场人把真实问题转化为可验收成果的 WorkBuddy 项目式实战手册。',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: siteUrl },
  head: [
    ['meta', { name: 'theme-color', content: '#f7f3ea' }],
    ['meta', { name: 'author', content: 'WorkBuddy 蓝皮书共创团队' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }]
  ],
  markdown: { lineNumbers: true },
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/node_modules/mermaid/')) return 'mermaid'
            if (id.includes('/node_modules/cytoscape/')) return 'diagram-layout'
          }
        }
      }
    }
  },
  themeConfig: {
    logo: { src: '/mark.svg', alt: 'WorkBuddy 蓝皮书' },
    siteTitle: 'WorkBuddy 蓝皮书',
    search: { provider: 'local', options: { locales: { root: { translations: { button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' }, modal: { noResultsText: '没有找到结果', resetButtonTitle: '清除查询', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } } } } } } },
    nav: [
      { text: '首页', link: '/' }, { text: '开始阅读', link: '/start/' }, { text: '学习路线', link: '/paths/' },
      { text: '案例库', link: '/cases/' }, { text: '帮你解决', link: '/solve/' }, { text: '模板库', link: '/templates/' },
      { text: '参与共创', link: '/contribute/' }, { text: '更新日志', link: '/about/changelog' },
      { text: 'GitHub', link: repositoryUrl }
    ],
    sidebar,
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一章', next: '下一章' },
    lastUpdated: { text: '更新时间' },
    editLink: { pattern: `${repositoryUrl.replace(/\/$/, '')}/edit/main/docs/:path`, text: '编辑此页' },
    socialLinks: [{ icon: 'github', link: repositoryUrl }],
    footer: { message: '正文采用 CC BY 4.0；代码采用 MIT。', copyright: '可靠交付，人工复核。' }
  },
  transformHead({ pageData }) {
    const canonical = new URL(pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, ''), `${siteUrl}/`).href
    return [['link', { rel: 'canonical', href: canonical }]]
  }
})
