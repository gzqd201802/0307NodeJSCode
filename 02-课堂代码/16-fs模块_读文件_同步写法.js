
// 按需导入 fs
const fs = require('fs');


console.log(333);
// 读文件 - 同步写法
try {
    // 读取文件，以返回值的方式获取到数据
    const data = fs.readFileSync('./data/aa.txt');
    // 把 <Buffer> 转换成字符串输出
    console.log(data.toString());
} catch (error) {
    console.log('读文件失败了');
}
console.log(444);

// 同步的输出 - 按顺序：
//   333  成功  444   
