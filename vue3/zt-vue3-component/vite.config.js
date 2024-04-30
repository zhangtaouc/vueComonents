import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import eslintPlugin from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // 配置vite在运行的时候自动检测eslint规范
    eslintPlugin({
      include: [
        "src/**/*.ts",
        "src/**/*.js",
        "src/**/*.vue",
        "src/*.ts",
        "src/*.js",
        "src/*.vue",
      ],
    }),
  ],
  build: {
    outDir: "zt-ui", //输出文件名称
    lib: {
      entry: path.resolve(__dirname, "./packages/index.js"), //指定组件编译入口文件
      name: "zt-ui",
      fileName: "zt-ui",
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    }, // rollup打包配置
  },
  server: {
    host: "0.0.0.0",
  },
});
