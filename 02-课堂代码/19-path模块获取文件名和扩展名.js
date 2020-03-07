
const path = require('path');

console.log(__filename);        // 绝对路径获取当前文件名

const basename = path.basename(__filename);
const extname = path.extname(__filename);

console.log(basename);      // 文件全名     19-path模块获取文件名和扩展名.js
console.log(extname);       // 后缀名       .js
