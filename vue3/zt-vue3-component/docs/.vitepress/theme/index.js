// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { ZTBtn } from '../../../packages'
const components = { ZTBtn }
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册
    for (const i in components) {
      app.component(i, components[i])
    }
  }
}
