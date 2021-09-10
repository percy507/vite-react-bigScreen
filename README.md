# 搭个大屏项目的脚手架

### 构建命令

```bash
npm i -d              # 装依赖
npm run dev           # 本地开发
npm run build:dev     # 开发服务器生产环境打包
npm run build:test    # 测试服务器生产环境打包
npm run build:prod    # 生产服务器生产环境打包
npm run preview       # 本地打包并预览打包后的页面

npm run deploy        # 将打包后的代码推送到github远程仓库，以便预览
# deploy 这里使用了 gh-pages依赖
# 由于 github pages 的局限性，项目里只能使用 HashRouter，实际项目可替换为 BrowserRouter
```

### 架构设计

##### 目录设计

```bash
.config               # 存储husky以及各种linter的配置文件
.vscode               # vscode当前工作空间配置目录
src
  @types              # 存储可用于全局的类型声明文件
  assets              # 静态资源目录
  components          # 组件目录
  hooks               # 自定义hooks目录
  layouts             # 存储页面布局
  pages               # 存储具体页面
  recoil              # 按模块存储recoil状态文件
  services            # 存储调接口的文件
  styles              # 存储一些全局的样式或变量
  utils               # 存储工具函数
  ui.config.json      # 设计稿比例配置文件
```

### 大屏

- 页面比例严格按照设计稿比例，并且会自动适配不同的屏幕
- 页面字体、图表里的字体适配屏幕，自动缩放
- px 自动转 rem
- 封装常用较复杂的组件
