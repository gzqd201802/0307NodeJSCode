
// 按需导入 fs 模块
const fs = require('fs');

// Sync 翻译过来是同步的意思。
// writeFile()     写文件的异步写法
// writeFileSync() 写文件的同步写法

console.log('代码开始', 111111);

try {
    // 写入文件 - 同步写法
    fs.writeFileSync('./data/bb.txt', '同步写法999');
    console.log('try代码正常运行就是读取成功');
} catch (error) {
    console.log('文件写入错误', error);
}

console.log('代码最后', 222222);

// 注意事项：
//     如果路径不存在，或磁盘满了，写入文件会抛出异常。
//     写入文件操作，不管异步写法，还是同步写法，都要考虑到错误处理。
//     1. 异步写法，错误处理在回调函数中。
//     2. 同步写法，错误处理要通过 try catch 结构。
