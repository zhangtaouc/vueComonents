import ZTBtn from './ZTBtn/ZTBtn.vue'

// 按需引入
export { ZTBtn }

export const components = [ZTBtn]

const ZTUI = {
  install(App) {
    components.forEach(item => {
      App.component(item.name, item)
    })
  }
}

export default ZTUI
