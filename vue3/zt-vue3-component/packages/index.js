import ZTBtn from './ZTBtn/ZTBtn.vue'

// 按需引入
export { ZTBtn }

// 导出方便全局注册
export const components = { ZTBtn }

const list = [ZTBtn]
const ZTUI = {
  install(App) {
    list.forEach(item => {
      App.component(item.name, item)
    })
  }
}

export default ZTUI
