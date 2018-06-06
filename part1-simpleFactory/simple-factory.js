/*
 * 简单工厂模式： 就是由一个工厂对象来创建相似类的实例
 * 二种实现方式：
 * 一：通过类实例化对象创建
 * 二：通过创建一个新对象，然后针对不同的类做处理
 * 差异点： 前面一种通过类的实例创建的对象，这些类都是继承自一个父类，他们父类的原型方法可以公用。而
 *           后一种通过寄生的方式创建的新个体，自然不具备公有方法
 */

var Popalert = function (name) {
    switch (name) {
        case 'alert':
            return new LoginAlert();
            break;

        case 'confirm':
            return new LoginConfirm();
            break;

        case  'prompt':
            return new LoginPrompt();
    }
}

/* 创建基类*/
var LoginAlert = function () {
     this.text = 'alert';
}

LoginAlert.prototype.show = function () {
    console.log(this.text);
}
var LoginConfirm = function () {
    this.text = 'LoginConfirm';
}

LoginConfirm.prototype.show = function () {
    console.log(this.text);
}
var LoginPrompt = function () {
    this.text = 'prompt';
}

LoginPrompt.prototype.show = function () {
    console.log(this.text);
}

/* 寄生模式创建*/

function CreatePop(type, text) {
    var o = new Object();
    o.content = text;
    o.show = function () {
        console.log(o.content)
    }

    if(type === 'alert'){
        // 差异部分
    }
    if(type === 'confirm'){

    }
    if(type === 'prompt'){

    }
}






