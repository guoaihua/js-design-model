/*
 *  单例模式就是规定一个命名空间,实现模块化
 */


var A = {
    util: {
        util_method1: function () {

        },
        util_method2: function () {

        }
    },
    Tool: {
        tool_method2: function () {

        }
    },
    Ajax:{
        ajax:function () {

        }
    }
}


 A.util.util_method1();
 A.util.util_method2();

 var Conf = (function () {
     var conf = {
         MAX_COUNT: 100,
         MIN_COUNT:34,
         COUNT:78
     }

     return {
         get: function (name) {
             return conf[name]?conf[name]:null
         }
     }
 })();

