

// console.log(window);        // window is not defined
console.log(global);           // NodeJS 的全局对象是 global，但 global 功能有限。

// NodeJS 并不是把所有的功能都添加到 global。
// NodeJS 把一些功能都以模块的方式拆解，按需导入。
// NodeJS 在安装的时候，其实有一些内置模块已经在电脑中，需要导入才能使用。

// fs 模块是 NodeJS 中用于操作文件读写的模块
const fs = require('fs');
console.log(fs);        // fs 对象下有很多的功能

