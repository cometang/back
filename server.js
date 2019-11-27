let http = require('http')
let users = [
    { id: 11, name: 'aaa' },
    { id: 22, name: 'bbb' },
    { id:33, name: 'c+dddd' }
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