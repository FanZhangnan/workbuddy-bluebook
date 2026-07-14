export type Part = {
  number: 1 | 2
  title: string
  subtitle: string
  slug: string
  milestone: string
  accent: 'indigo' | 'rose' | 'amber' | 'mint'
}

export type Chapter = {
  number: number
  part: Part['number']
  title: string
  subtitle: string
  slug: string
  route: string
  published: boolean
  difficulty: '入门' | '进阶' | '综合'
  estimatedTime: string
  emoji: string
}

export const parts: Part[] = [
  {
    number: 1,
    title: '认识 WorkBuddy',
    subtitle: '一次一个功能，看到截图、知道什么时候用、避免常见坑',
    slug: 'part-01-getting-to-know',
    milestone: '看懂主界面，知道每个按钮能解决什么问题。',
    accent: 'indigo'
  },
  {
    number: 2,
    title: '项目实战，由简到难',
    subtitle: '用前面介绍的功能真正做点什么，从 5 分钟任务到完整项目',
    slug: 'part-02-hands-on-projects',
    milestone: '完成 6 个项目，把方法沉淀成你自己的工作流。',
    accent: 'rose'
  }
]

const definitions: Array<[number, Part['number'], string, string, string, Chapter['difficulty'], string, string]> = [
  [1, 1, '认识 WorkBuddy 整体', 'meet-workbuddy', '5 分钟看懂主界面、左侧菜单和"更多"子菜单', '入门', '10 分钟', '👋'],
  [2, 1, '新建任务', 'new-task', '最常用的入口，单次问答、轻量改写、快速总结', '入门', '8 分钟', '✨'],
  [3, 1, '助理', 'assistant', '你的工作搭子，长对话、上下文、追问、导出', '入门', '10 分钟', '💬'],
  [4, 1, '项目', 'projects', '把多步任务拆成一个项目，阶段、产物、上下文延续', '入门', '12 分钟', '📂'],
  [5, 1, '模式', 'modes', 'Work / Code / Design / Plan 怎么选', '入门', '10 分钟', '🎛️'],
  [6, 1, '专家', 'experts', '找专业帮手，复盘、判断、对抗测试', '进阶', '12 分钟', '🧠'],
  [7, 1, '技能', 'skills', '给 WorkBuddy 装插件，看清技能的权限和限制', '进阶', '12 分钟', '🧩'],
  [8, 1, '连接器', 'connectors', '把外部系统接进来，授权、连接、断开', '进阶', '12 分钟', '🔌'],
  [9, 1, '自动化', 'automations', '让流程自动跑，触发器、定时、手工确认', '进阶', '10 分钟', '⏰'],
  [10, 1, '我的文件', 'my-files', '上传、整理、检索、安全分享', '入门', '8 分钟', '📁'],
  [11, 1, '腾讯文档 / ima / 乐享', 'knowledge-bases', '把知识库接进对话', '入门', '10 分钟', '📚'],
  [12, 1, '灵感', 'inspiration', '发现新玩法，从灵感推荐里找现成方案', '入门', '6 分钟', '💡'],
  [13, 2, '项目一·5 分钟搞定工作汇报', 'project-report', '改写、要点、清单三步法', '入门', '20 分钟', '📝'],
  [14, 2, '项目二·批量整理文件', 'project-file-cleanup', '整理下载目录、分类、改名、做索引', '入门', '30 分钟', '🗂️'],
  [15, 2, '项目三·写一套内容', 'project-content', '公众号/视频脚本：选题 → 大纲 → 初稿 → 配图 → 排版', '进阶', '45 分钟', '✍️'],
  [16, 2, '项目四·做一个自己的品牌网站', 'project-personal-site', '定位 → 受众 → 内容 → UI → 开发 → 上线', '综合', '90 分钟', '🌐'],
  [17, 2, '项目五·搭一个业务数据看板', 'project-dashboard', '收集数据 → 清洗 → 图表 → 报告 → 复用', '进阶', '60 分钟', '📊'],
  [18, 2, '项目六·把重复流程变成自动化', 'project-automation', '找稳定流程 → 技能固化 → 连接器同步 → 自动化定时', '综合', '45 分钟', '🤖'],
  [19, 2, '收官·把方法变成你的工作系统', 'capstone-personal-system', '把常用流程沉淀成个人工作流', '综合', '30 分钟', '🏁']
]

export const curriculum: Chapter[] = definitions.map(([number, part, title, slug, subtitle, difficulty, estimatedTime, emoji]) => {
  const partSlug = parts.find((item) => item.number === part)!.slug
  return { number, part, title, slug, subtitle, route: `/bluebook/${partSlug}/${slug}`, published: true, difficulty, estimatedTime, emoji }
})

export const publishedChapters = curriculum
export const chapterByNumber = (number: number) => curriculum.find((chapter) => chapter.number === number)
