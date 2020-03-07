
// 代码从上往下运行，同步

console.log('代码开始运行', 111);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for 循环结束后，才输出了 222
console.log('代码开始结束', 222);



// 异步语法 - 异步回调函数 - 事件绑定和触发，定时器的设置和运行。
console.log('代码开始运行', 333);

// setTimeout 只是用来设置定时器
setTimeout(() => {
    console.log('定时器回调函数运行');
},0);   // 时间到了才会运行定时器内部回调函数的代码

console.log('代码开始运行', 444);




