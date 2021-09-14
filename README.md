## library-framework

开箱即用，用于JavaScript插件开发

### 开始
```
git clone https://git.iflyvoice.com:8868/webfront/woliuyan/library-framework.git
cd library-framework
npm install
```

命令行
```
npm run demo // 运行vue应用（demo文件夹）
```
```
npm run dist // 构建vue应用
```
```
npm run build // 构建library
```

### 目录
```
|-- dist                        // 产出
|-- src                         // 开发
  |-- index.js                  // 入口文件
|-- demo                        // demo文件
  |-- component
    |-- ...
  |-- index.vue
|-- config
  |-- webpack.demo.js           // 运行demo vue应用
  |-- webpack.build.js          // 构建library
|-- package.json
```

### 能力
- [x] 压缩代码
- [x] babel转义
- [x] 运行demo目录（vue单页面）
- [x] 构建代码至dist，支持全局引入，cmd，amd，按需引入
- [ ] 发布至npm
- [x] 支持doc文档编辑

## 文档

一份文档对于一个开源库来说极为重要。

文档使用的是[vuepress](https://vuepress.vuejs.org/zh/guide/ "vuepress")能力。

### 命令行
```
npm run docs:dev // 运行doc
```
```
npm run docs:build // 构建doc
```

### 目录及配置
打开`/docs/.vuepress/config.js`文件就明白了。


### 部署
请参考[vuepress-部署](https://vuepress.vuejs.org/zh/guide/deploy.html#%E4%BA%91%E5%BC%80%E5%8F%91-cloudbase)。

这个仓库文档部署在GitHub Pages，可参考[GitHub Pages](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)自行修改。