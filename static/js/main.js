require.config({
  paths: {
    'zepto':  'http://g.alicdn.com/sj/lib/zepto/zepto.min',
    'sui':    'http://g.alicdn.com/msui/sm/0.6.2/js/??sm.min.js,sm-extend.min.js',
    'vue':    '../plugs/vue.min',
    'utils':  '../js/utils'
  },
  shim : {
    'zepto':  { 'exports' : '$' },
    'sui':  { 'exports' : '$', 'deps' : ['zepto'] }
  },
  urlArgs: "v=1.0.0",
  waitSeconds: 60
});

require(['zepto'], function($){
  $.config = {
    // router: false,
    // 路由功能开关过滤器，返回 false 表示当前点击链接不使用路由
    routerFilter: function($link) {
      // 某个区域的 a 链接不想使用路由功能
      if ($link.is('.disable-router a')) {
        return false;
      }
      return true;
    }
  };
  require(['sui', 'utils', 'vue'], function($, utils, Vue) {
    $('body').on('click' ,'header.bar-nav>.icon-left', function(){
      window.history.back();
    });
    $('body').on('click' ,'header.bar-nav>.icon-refresh', function(){
      window.location.reload();
    });
    // console.log($, utils)
    $.isFunction(window.requireCallback) && window.requireCallback($, utils, Vue);
  }); 
});

