## library-framework

开始
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

目录
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

能力
- [x] 压缩代码
- [x] babel转义
- [x] 运行demo目录（vue单页面）
- [x] 构建代码至dist，支持全局引入，cmd，amd，按需引入
- [ ] 发布至npm
- [ ] 支持doc文档编辑