## library-framework

开箱即用，用于JavaScript插件开发的脚手架。

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
- 压缩代码
- babel转义
- 运行demo目录（vue单页面）
- 构建代码至dist，支持全局引入，cmd，amd，按需引入
- 发布至npm
- 支持doc文档编辑