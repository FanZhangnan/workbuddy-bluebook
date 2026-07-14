import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './styles.css'
import OutcomeCard from './components/OutcomeCard.vue'
import AcceptanceChecklist from './components/AcceptanceChecklist.vue'
import PromptBlock from './components/PromptBlock.vue'
import VersionNotice from './components/VersionNotice.vue'
import DownloadPanel from './components/DownloadPanel.vue'
import MermaidDiagram from './components/MermaidDiagram.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('OutcomeCard', OutcomeCard)
    app.component('AcceptanceChecklist', AcceptanceChecklist)
    app.component('PromptBlock', PromptBlock)
    app.component('VersionNotice', VersionNotice)
    app.component('DownloadPanel', DownloadPanel)
    app.component('MermaidDiagram', MermaidDiagram)
  }
} satisfies Theme
