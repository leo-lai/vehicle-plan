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
  urlArgs: "v=1.0.1",
  waitSeconds: 60
});

require(['zepto'], function($){
  // 自定义工具
  var toptipTimeid = null;
  $.toptip = function(text, ms){
    if(!text) return;
    ms = ms || 3000;

    var $toptip = $('#l-toptip');
    if($toptip.length === 0){
      $toptip = $('<div id="l-toptip" class="l-toptip">').appendTo(document.body);
    }
    clearTimeout(toptipTimeid)
    $toptip.text(text).addClass('l-show');
    toptipTimeid = setTimeout(function(){
      $toptip.text('').removeClass('l-show')
    }, ms);
  }

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
    $('body').on('click' ,'.nav-back:not(.back)', function(){
      window.history.back();
    });
    $('body').on('click' ,'header.bar-nav>.icon-refresh', function(){
      window.location.reload();
    });
    // console.log($, utils)
    $.isFunction(window.requireCallback) && window.requireCallback($, utils, Vue);
  }); 
});

