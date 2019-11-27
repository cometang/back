let http = require('http')
let users = [
    { id: 121, name: 'aaa' },
    { id: 222, name: 'aaaa' },
    { id:322, name: 'c+aa' }
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