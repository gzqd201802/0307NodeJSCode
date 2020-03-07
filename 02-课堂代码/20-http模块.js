
// 按需导入 http 模块.

// 1. 导入 http 模块
const http = require('http');

// 2. 创建一个 web 服务器
const app = http.createServer();

// 3. 注册一个 request 事件，主要用于监听 浏览器(客户端) 的请求
// 参数1：request  请求报文
// 参数2：response 响应报文
app.on('request', (request, response) => {
    // 只在响应报文中解构出 请求路径 和 请求方式
    const { url, method } = request;
    console.log('用户的请求地址', url);
    console.log('用户的请求方式', method);

    // 在响应报文中添加响应头，告诉浏览器，指定返回数据的类型。
    // 如果不指定类型，浏览器不能正常识别中文。
    response.setHeader('Content-Type','text/html;charset=utf-8');
    // 通过响应报文回给浏览器一个 中文
    response.end('中文');
});

// 4. 监听端口
app.listen('4399', () => {
    console.log('success：http://127.0.0.1:4399');
});
