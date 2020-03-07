
// 按需导入 fs 模块.
const fs = require('fs');

console.log('程序开始', 111);

// 写入文件 - 异步写法
fs.writeFile('./data/aa.txt', '异步的文件写入', (err) => {
    // 出错时候，err 是一个错误对象
    // 不出错是，err 的值是 null
    // console.log(err);  
    if (err) {      // 如果有错误对象，就是写入失败了
        console.log('文件写入失败');
    } else {        // 没有错误对象说明写入成功。
        console.log('文件写入成功');
    }
});

console.log('程序最后', 222);

// 异步文件写法：
//   控制台输出的顺序：  111   222   成功
//   fs.writeFile()  分成两部分：
//          1. 布置一个写文件的任务
//          2. 完成的时候才自动触发回调函数
//  异步的好处：写入大文件的时候，不影响后面代码的运行。（异步不会造成代码阻塞）


