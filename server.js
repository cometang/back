let http = require('http')
let users = [
    { id: 1, name: '啦啦啦' },
    { id: 2, name: '撒旦撒旦' },
    { id:3, name: '测试能否检测后端代码更新' }
]
let server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin','*')
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users))
    }else{
        res.end('NOT Found')
    }
})

server.listen(3000,()=>{
    console.log('客户端服务器已经启动了，端口3000')
})