/*
 * 外观模式，为一组复杂的子系统接口提供一个更高级的统一接口，通过这个接口是的对子系统的访问更加容易。
 * 使用实例：对底层兼容性做封装 处理
 */


function addEvent(dom, type, fn) {
    if(dom.addEventListener){
        dom.addEventListener(type, fn, false)
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type, fn)
    }else {
        dom['on'+type] = fn;
    }
}

addEvent(el, 'type', function () {

})