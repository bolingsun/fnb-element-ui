module.exports = {
  title: 'fnb-element-ui',
  description: 'Vue 组件库',
  port: '8379',
  base: '/fnb-element-ui/',
  head: [
    [
      'link',
      { rel: 'shortcut icon', type: 'image/x-icon', href: `./favicon.ico` }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://at.alicdn.com/t/font_1478682_k11j68pk13.css'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    sidebarDepth: 0,
    sidebar: [
      '/',
      '/quickstart',
      {
        title: '组件',
        collapsable: false,
        children: [
          ['/component/select-goods', 'SelectGoods 商品搜索选择'],
          ['/component/table', 'Table 表格'],
          ['/component/iconfont', 'Iconfont 字体图标']
        ]
      }
    ]
  },
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'code',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>'
      }
    ]
  ]
}
