/*
 * 简单工厂方法升级， 安全的工厂方法，与简单的工厂方法差别在于
 *  第一点：将基类放到了工厂方法类的原型上面
 *  第二点：增加了一个安全方法
 */


  var CreatePop = function (type) {

      // 安全模式，防止忘写new
      if(this instanceof CreatePop){
          return new this[type]();
      }else {
          return new CreatePop(type);
      }
  }


  CreatePop.prototype = {
      alert: function () {

      },
      confirm: function () {

      },
      prompt: function () {

      }
  }