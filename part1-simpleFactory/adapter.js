/*
 * 适配器模式，转化2个接口的不同
 * 参数检查
 */


    function doSomething(name, title, age, color, size, prize) {

    }

    // 防止参数漏传
    function doSomething(obj) {
        var _adapter = {
            name: 'aa',
            title: '22',
            age:23,
            color: red,
            size: 34,
            prize: 23
        }
        for (var i in _adapter){
            _adapter[i] = obj[i] || _adapter[i];
        }
    }