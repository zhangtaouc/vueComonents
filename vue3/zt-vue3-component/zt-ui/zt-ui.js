import { openBlock as e, createElementBlock as o } from "vue";
const c = /* @__PURE__ */ Object.assign({ name: "ZTBtn" }, {
  __name: "ZTBtn",
  setup(t) {
    return (n, s) => (e(), o("div", null, "张涛测试"));
  }
}), a = [c], l = {
  install(t) {
    a.forEach((n) => {
      t.component(n.name, n);
    });
  }
};
export {
  c as ZTBtn,
  l as default
};
