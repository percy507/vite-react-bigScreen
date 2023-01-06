# 搭个大屏项目的脚手架

### 构建命令

```bash
pnpm i                # 装依赖
pnpm dev              # 本地开发
pnpm build:dev        # 开发服务器生产环境打包
pnpm build:test       # 测试服务器生产环境打包
pnpm build:prod       # 生产服务器生产环境打包
pnpm preview          # 本地打包并预览打包后的页面
```

### 大屏

- 页面比例严格按照设计稿比例，并且会自动适配不同的屏幕
- 页面字体、图表里的字体适配屏幕，自动缩放
- css 中的 px 自动转 rem，jsx 中的 px 需要使用 `toAdaptedPx` 包裹
- 封装常用的大屏组件
- 地图类型
  - 高德地图
  - echartsGL 3d 地图（是否下钻）

### 核心组件

- **ScreenAdaptor**: 根据设计稿尺寸与页面实际视口，动态计算根元素 html 的 `font-size` 以及大屏容器适配视口后的实际宽高
- **SuperEChart**: 二次封装 echarts
  - [按需引入图表](https://echarts.apache.org/handbook/zh/basics/import#%E5%9C%A8-typescript-%E4%B8%AD%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5)
  - 抽离并初始化一些通用的图表配置项，主要是坐标轴、样式相关的
  - 支持饼图的轮播效果

### 踩坑

```bash
# 大的屏幕显示正常，小屏幕缺换行了？
Chrome默认的最小字体大小是12px，所以需要修改chrome最小字号为0，从而适配小屏幕
chrome://settings/fonts
```

```bash
# 如何修改让项目成为某个项目的子路由？
1. 修改 vite.config.js 的 base 配置（注意末尾加上斜杠）
base: process.env.VITE_MODE === 'local' ? '/' : '/dashboard/',

2. 修改 BrowserRouter 的 basename
<BrowserRouter basename={VITE_MODE === 'local' ? '/' : '/dashboard'} >
```
