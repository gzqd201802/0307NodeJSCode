

// 定义了2个常量
// const aa = 11;
// const dd = function(){};

// 把常量的值添加到对象 obj 上
// const obj = {
//     // 前面的 aa 叫键名称，后面的 aa 常量中保存的数据。
//     aa: aa,
//     dd: dd
// }

const aa = 11;

// 简化1：键名称和保存数据的常量(变量名)同名，可以只写键名称即可。
const obj = {
    aa,
    // 简化2：方法可以把 某号和 function 都同时省略掉。
    dd() { }
};
// 功能等价于以下代码：
// const obj = {
//     aa: aa,
//     dd: function(){ }
// }

console.log(obj);




