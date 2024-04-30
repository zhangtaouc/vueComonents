import { defineConfig } from "vitepress";
import { sidebar } from "../tools/pageSidebar";
import { nav } from "../tools/headerNav";
sidebar;
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zt-ui",
  description: "个人简介咯！",
  // 主题是否是暗黑
  appearance: "dark",
  themeConfig: {
    // 标题上面的logo
    logo: "/images/ui.cn.svg",
    nav,
    sidebar,
    // 页脚
    footer: {
      message: "一个简简单单的组件库~",
      copyright: "Copyright © 2024-present zhangtaouc",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
    },
  },
  base: "/h5/component",
});
