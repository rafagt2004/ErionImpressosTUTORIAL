import DefaultTheme from 'vitepress/theme'
import HoverVideo from '../components/HoverVideo.vue'
import type { App } from 'vue'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }: { app: App }) {
    app.component('HoverVideo', HoverVideo)
  }
}