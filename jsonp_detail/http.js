// (function(window, document, undefined) {
//   'use strict';
//   var jsonp = function(url, data, callback) {
//     var fnSuffix = Math.random().toString().replace('.', '');
//     var cbFuncName = 'my_json_cb_' + fnSuffix;
//     // 不推荐
//     window[cbFuncName] = callback;
//     var querystring = url.indexOf('?') == -1 ? '?' : '&';
//     for (var key in data) {
//       querystring += key + '=' + data[key] + '&';
//     }
//     querystring += 'callback=' + cbFuncName;
//     var scriptElement = document.createElement('script');
//     scriptElement.src = url + querystring;
//     document.body.appendChild(scriptElement);
//   };
//   window.$jsonp = jsonp;
// })(window, document);



// /**
//  * 自己手写一个跨域的组件
//  * @Author: iceStone
//  * @Date:   2016-02-17 15:27:03
//  * @Last Modified by:   iceStone
//  * @Last Modified time: 2016-02-17 16:00:55
//  */

(function(window, document, undefined) {
  'use strict';
  // url = http://ssss?dsf=sdfs&
  var jsonp = function(url, data, callback) {
    // 1. 挂载回调函数
    var fnSuffix = Math.random().toString().replace('.', '');
    var cbFuncName = 'my_json_cb_' + fnSuffix;
    window[cbFuncName] = callback;
    // window.my_json_cb_02132817213 = callback;

    // 2. 将data转换为url字符串的形式
    //  {id:1,name:'zhangsan'} => id=1&name=zhangsan
    var querystring = url.indexOf('?') == -1 ? '?' : '&';
    for (var key in data) {
      querystring += key + '=' + data[key] + '&';
      //  id    =        1        &
    }
    // querystring =  ?id=1&name=zhangsan&

    // 3. 处理url中的回调参数
    //  url += callback=sdjhkfsdjwe
    querystring += 'callback=' + cbFuncName;
    // querystring =  ?id=1&name=zhangsan&cb=my_json_cb_02132817213

    // 4. 创建一个script标签
    var scriptElement = document.createElement('script');
    scriptElement.src = url + querystring;
    // -- 注意此时还不能将其append到页面上

    // 5. 将script标签放到页面中
    document.body.appendChild(scriptElement);
    // append过后页面会自动对这个地址发送请求，请求完成以后自动执行
  };

  window.$jsonp = jsonp;

})(window, document);
