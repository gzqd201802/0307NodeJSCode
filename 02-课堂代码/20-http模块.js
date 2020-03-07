
// 启动http服务器四个步骤：
//      1. 导入 http 模块
//      2. 创建一个 web 服务器
//      3. 注册一个 request 事件
//      4. 监听端口

// 1. 导入 http 模块
const http = require('http');

// 2. 创建一个 web 服务器
const app = http.createServer();

// 3. 注册一个 request 事件，主要用于监听 浏览器(客户端) 的请求
// 参数1：request  请求报文
// 参数2：response 响应报文
app.on('request', (request, response) => {
    // 只在<请求报文>中解构出 请求路径 和 请求方式
    const { url, method } = request;
    console.log('客户端的请求地址', url);
    console.log('客户端的请求方式', method);

    // 在<响应报文>中添加响应头，告诉浏览器，指定返回数据的类型。
    // 如果不指定类型，浏览器就不能正常识别中文。
    response.setHeader('Content-Type','text/html;charset=utf-8');
    // 通过<响应报文>回给浏览器的内容
    response.end('中文');
});

// 4. 监听端口
app.listen('4399', () => {
    // http://127.0.0.1  或者 http://localhost  是本地服务器的固定地址。
    // 端口号随意，但不建议使用 100 以下的端口号。
    console.log('success：http://127.0.0.1:4399');
});
