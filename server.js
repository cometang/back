let http = require('http')
let users = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id:3, name: 'c+cccc' }
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