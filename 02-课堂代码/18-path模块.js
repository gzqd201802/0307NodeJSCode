
// Node 自带的两个变量，每个文件都有
// console.log(__dirname);     // 当前文件 目录绝对路径
// console.log(__filename);    // 当前文件 文件绝对路径

// 字符串拼接绝对路径特别不靠谱，问题很多。

// const url1 = __dirname + './data/aa.txt';
// const url2 = __dirname + '/data/aa.txt';
// const url3 = __dirname + 'data/aa.txt';

// console.log(url1);      // 0307NodeJS-第二天\02-课堂代码./data/aa.txt
// console.log(url2);      // 0307NodeJS-第二天\02-课堂代码/data/aa.txt
// console.log(url3);      // 0307NodeJS-第二天\02-课堂代码data/aa.txt


const path = require('path');

const url4 = path.join(__dirname, './data/aa.txt');
const url5 = path.join(__dirname, '/data/aa.txt');
const url6 = path.join(__dirname, 'data/aa.txt');

// path 模块的好处，允许开发者有多种习惯拼接路径。

// 上面三种写法都可以拼接成一样的路径。
console.log(url4);      // 0307NodeJS-第二天\02-课堂代码\data\aa.txt
console.log(url5);      // 0307NodeJS-第二天\02-课堂代码\data\aa.txt
console.log(url6);      // 0307NodeJS-第二天\02-课堂代码\data\aa.txt

const url7 = path.join('C:', 'Users', '/megas', 'Desktop/广州黑马前端与移动开发就业班43期/0307NodeJS-第二天');
console.log(url7);

// 有了 path 模块，处理路径拼接的情况更加稳妥，没那么容易出错。

