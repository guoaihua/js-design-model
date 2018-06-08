/*
 * 装饰者模式，在不改变原对象的基础上，通过对其进行包装拓展，满足需求
 */


 function a() {
     console.log(111)
 }

  // 给他增加方法，但是不改变它
  // 先缓存对象

var fun = a;

 function a() {
     console.log(222);
     fun();
 }