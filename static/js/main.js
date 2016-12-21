require.config({
  paths: {
    'zepto':  'http://g.alicdn.com/sj/lib/zepto/zepto.min',
    'sui':    'http://g.alicdn.com/msui/sm/0.6.2/js/??sm.min.js,sm-extend.min.js',
    'utils':  '../js/utils'
  },
  shim : {
    'sui':  { 'exports' : '$', 'deps' : ['zepto'] }
  },
  urlArgs: "v=1.0.0",
  waitSeconds: 60
});

require(['sui', 'utils'], function($, utils) {
  // console.log($, utils)
  $.isFunction(window.requireCallback) && window.requireCallback($, utils);
});
