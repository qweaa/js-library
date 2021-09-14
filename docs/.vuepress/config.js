module.exports = {
  base: '/js-library/',
  lang: 'zh-CN',
  title: 'library-framework',
  description: '你的介绍',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: [
      // SidebarItem
      {
        text: '简介',
        link: '/',
      },
      {
        text: '快速开始',
        link: '/usage.html',
      },
      {
        text: '文档部署',
        link: '/docs.html',
      },
    ],
    contributors: false,
    lastUpdatedText: '上次更新',
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
  },
}