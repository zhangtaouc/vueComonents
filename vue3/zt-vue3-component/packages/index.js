import ZTBtn from "./ZTBtn/ZTBtn.vue";

// 按需引入
export { ZTBtn };

const component = [ZTBtn];

const ZTUI = {
  install(App) {
    component.forEach((item) => {
      App.component(item.name, item);
    });
  },
};

export default ZTUI;
