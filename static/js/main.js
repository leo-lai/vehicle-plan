require.config({
  paths: {
    'zepto':  'http://g.alicdn.com/sj/lib/zepto/zepto.min',
    'sui':    'http://g.alicdn.com/msui/sm/0.6.2/js/??sm.min.js,sm-extend.min.js',
    'vue':    'http://cdn.jsdelivr.net/vue/1.0.26/vue.min',
    'utils':  '../js/utils'
  },
  shim : {
    'sui':  { 'exports' : '$', 'deps' : ['zepto'] }
  },
  urlArgs: "v=1.0.0",
  waitSeconds: 60
});

require(['sui', 'utils', 'vue'], function($, utils, Vue) {
  $('body').on('click' ,'header.bar-nav>.icon-left', function(){
    window.history.back();
  })
  // console.log($, utils)
  $.isFunction(window.requireCallback) && window.requireCallback($, utils, Vue);
});
