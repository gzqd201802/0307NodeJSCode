

// 按需导入：处理路径的 path 模块
const path = require('path');

// 工作的时候会涉及到绝对路径
// 为什么要写两个反斜杠，第一个反斜杠是转义，第二个才是真正的反斜杠。
const url = 'C:\\Users\\megas\\Desktop\\02-课堂代码';
const url2 = 'C:/Users/megas/Desktop/02-课堂代码';

//   / 注释方向的斜杠 叫  正斜杠
//   \ 反斜杠在字符串中是 转义符。
console.log(url);       // C:\Users\megas\Desktop\02-课堂代码
console.log(url2);      // C:/Users/megas/Desktop/02-课堂代码
