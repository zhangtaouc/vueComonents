// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { components } from '../../../packages'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册
    for (const i in components) {
      app.component(i, components[i])
    }
  }
}
