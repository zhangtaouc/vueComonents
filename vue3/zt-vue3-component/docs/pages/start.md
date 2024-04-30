# 快速开始

### 介绍

这里为您介绍常见开发模式下接入组件库的最基本方式。

## 环境配置

项目根目录增加`.npmrc`文件,写入

```shell
@wash:registry=http://39.105.212.27:4873/
//39.105.212.27:4873/:_authToken="i3SDRCQ+at+blgbbaacBy5QfZqY9xutOcF8iSYDaG3Q="
```

### 安装

Pnpm

使用快速的，节省磁盘空间的包管理工具 [pnpm](https://pnpm.io/zh/) 进行安装

```shell
pnpm add @wash/ui -D
```

Npm

```shell
npm i @wash/ui -D
```

最基础的引入方式，这是全量引入，不推荐

```js
import App from './App.vue'
import washUi from '@wash/ui'
import { createApp } from 'vue'
import '@wash/ui/es/style'

createApp(App).use(Varlet).mount('#app')
```
