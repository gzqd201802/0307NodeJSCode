
// 箭头函数 ()=>{}
// ()  形参
// {}  函数体

// 基本写法： 把 function 变成了箭头
// const fn = (a, b) => {
//     return a + b;
// };


// 化简1. 如果箭头函数只有一句代码，并且那句代码就是返回值，可以把函数体的 {} 和 return 同时省略掉.
// const fn = (a, b) => a + b;

// const r1 = fn(11, 22);
// console.log('fn箭头函数运行的返回值', r1);


// 化简2: 如果形参只有一个，形参的圆括号()可以省略
const arr = [11, 22, 33];
// 映射数组，每个数乘以 2
const newArr = arr.map(item => item * 2);
// const newArr = arr.map(function(item){
//     return item * 2;
// });
console.log(newArr);

// 箭头函数使用建议：
//      1. 先熟悉使用 () => {} 这种写法。
//      2. 再考虑化简 形参 和 函数体。
// 箭头函数经典标志： => 


// 箭头函数注意事项：
//      1. 箭头函数没属于自己的 this.

// 如果把之前的事件处理函数 变成 箭头函数写法。
// 现象：箭头函数内部的 this 不指向事件源了。
// btn.onclick = () => {
//     console.log(this);
// }
