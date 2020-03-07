
// 需求：实现数组去重。
// let arr = [11, 22, 33, 11, 22, 33];
// const s1 = new Set(arr);  // 把数组转成 Set 对象实例
// arr = [...s1];     // 把 Set 对象实例展开变成数组
// console.log(s1);   // Set { 11, 22, 33 }
// console.log(arr);   // [ 11, 22, 33 ]  实现数组去重


// let arr = [11, 22, 33, 11, 22, 33];
// // 一行代码实现数组去重
// arr = [...new Set(arr)];
// console.log(arr);


// 封装：arrayUnique  封装一个方法实现数组去重。
// 由于 arr 需要重新赋值，所以用 let 声明变量
let arr = [11, 22, 33, 11, 22, 33];
// 函数极限封装：形参只有一个所以省略了()，函数体内只有一句代码并且就是返回值，同时省略了 {} 和 return
const arrayUnique = array => [...new Set(array)];
// 功能等价于：(没化简前)
// const arrayUnique = (array) => {
//     return [...new Set(array)];
// }
// 调用方法实现去重，再赋值给自己。
arr = arrayUnique(arr);
console.log(arr);   // [ 11, 22, 33 ]