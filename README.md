# 一个简单的可视化界面


# 环境依赖

node 建议 v14+

# 部署步骤

1. 安装nodejs，配置系统环境变量
2. 将压缩包解压到合适路径下，进入项目目录，建议使用vscode或其它编辑器/IDE打开
3. 在项目目录下执行命令 `npm install` 安装模块
4. 在项目目录下执行命令 `npm run dev` 启动项目

``` shell
$ npm install
$ npm run dev

# 成功启动项目的信息
vite v2.8.6 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose
```

# 目录结构

```
covid-19-dashboard-demo              
├─ index.html                // 项目的默认首页，Vue的组件需要挂载到这个文件上
├─ package-lock.json         // 项目包的锁定文件
├─ package.json              // 项目配置文件，包管理、项目名称、版本和命令
├─ public                    // 公共资源路径
│  └─ favicon.ico            // 网站图标
├─ README.md                 // 项目帮助文档
├─ src                       // 源文件目录
│  ├─ apis                   // 接口目录
│  │  └─ request.ts          // 接口方法（重要，获取数据的方法写在这里）
│  ├─ App.vue                // 根组件（重要，单页面前端模板全部写在这里）
│  ├─ assets                 // 静态文件目录
│  │  ├─ bg.jpg              // 背景图片
│  │  ├─ china.js            // Echarts中国地图资源文件
│  │  ├─ geoMap.ts           // 地图经纬度数据
│  │  ├─ global.css          // 全局样式
│  ├─ components             // 公共组件目录（此项目无组件）
│  ├─ env.d.ts               // 环境声明文件
│  ├─ main.ts                // 项目入口文件（重要，按需导入和挂载）
│  └─ stores                 // pinia相关文件（重要，管理全局状态）
│     ├─ index.ts            // pinia状态管理仓库
│     └─ type.ts             // ts类型
├─ tsconfig.json             // Typescript的配置文件
├─ tsconfig.node.json        // Typescript的node配置文件
└─ vite.config.ts            // 项目配置文件

```
