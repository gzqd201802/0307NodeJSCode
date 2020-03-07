
// 按需导入 fs
const fs = require('fs');


console.log(1111111);
// 读文件 - 异步写法
fs.readFile('./data/aa.txt', (err, data) => {
    if (err) {
        console.log('读取文件错误');
    } else {
        // 默认 data 的格式是 Buffer ，可通过 toString() 转换成字符串
        console.log('读取文件成功', data.toString() );
    }
});

console.log(2222222);
// 异步的输出： 任务完成再输出
//   111   222   成功
