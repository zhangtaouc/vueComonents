import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "张涛",
  description: "个人简介咯！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "个人",
        items: [
          { text: "Item A", link: "/api-examples" },
          { text: "Item B", link: "/api-examples" },
          { text: "Item C", link: "/api-examples" },
        ],
      },
      { text: "样例", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "组件库",
        items: [
          { text: "查看", link: "/markdown-examples" },
          { text: "我的样例", link: "/api-examples" },
        ],
      },
      {
        text: "组件库",
        collapsed: true,
        items: [
          { text: "查看", link: "/markdown-examples" },
          { text: "我的样例", link: "/api-examples" },
        ],
      },
    ],
    // 页脚
    footer: {
      message: "一个乱七八糟的组件库~",
      copyright: "Copyright © 2024-present zhangtaouc",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
    },
  },
  base: "/",
});
