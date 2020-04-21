window.$docsify = {
  //...
  loadSidebar: true, // true 定制侧边栏，关闭默认的. false 使用默认
  subMaxLevel: 3, // 目录级别
  loadNavbar: true, // 导航栏
  coverpage: true, // 封面
  onlyCover: true, // 只显示封面，不显示文章
  auto2top: true, //  切换页面自动顶部

  //autoHeader: true,

  //logo: 'http://avatars2.githubusercontent.com/u/35095041',
  name: 'kirito',

  repo: 'https://github.com/zshorz', // 右上角github链接

  ergeNavbar: true, //小屏设备合并导航栏到侧边栏 
  notFoundPage: true, // 在找不到指定页面时加载 _404.md


  // 搜索插件 完整配置参数
  // search: {
  //   maxAge: 86400000,               // 过期时间，单位毫秒，默认一天
  //   paths: [],                      // or 'auto'，匹配文件路径
  //   placeholder: 'Type to search',  // 搜索提示框文字， 支持本地化，例子在下面
  //   // placeholder: {
  //   //   '/zh-cn/': '搜索',
  //   //   '/': 'Type to search'
  //   // },
  //   noData: 'No Results!',          // 找不到结果文字提示，支持本地化，例子在下面
  //   // noData: {
  //   //   '/zh-cn/': '找不到结果',
  //   //   '/': 'No Results'
  //   // },
  //   depth: 2,                       // 搜索标题的最大程级, 1 - 6
  // }

  // 插件的各个回调
  // plugins: [
  //   function (hook, vm) {
  //     hook.init(function() {
  //       // 初始化时调用，只调用一次，没有参数。
  //       console.debug("init")
  //     })
  
  //     hook.mounted(function() {
  //       // 初始化完成后调用，只调用一次，没有参数。
  //       console.debug("mounted")
  //     })
  
  //     hook.beforeEach(function(content) {
  //       // 每次开始解析 Markdown 内容时调用
  //       // ...
  //       console.debug("beforeEach")
  //       return content
  //     })
  
  //     hook.afterEach(function(html, next) {
  //       // 解析成 html 后调用。beforeEach 和 afterEach 支持处理异步逻辑
  //       // ...
  //       // 异步处理完成后调用 next(html) 返回结果
  //       next(html)
  //       console.debug("doneEach")
  //     })
  
  //     hook.doneEach(function() {
  //       // 每次路由切换时数据全部加载完成后调用，没有参数。
  //       // ...
  //       console.debug("doneEach")
  //     })
  
  //     hook.ready(function() {
  //       // 初始化并第一次加载完成数据后调用，没有参数。
  //       console.debug("ready")
  //     })
  //   }
  //  ]
}

