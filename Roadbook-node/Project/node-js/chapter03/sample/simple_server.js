const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html charset=urf-8' })
    res.write('<h1>node.js</h1>')
    res.end('<p>3장 http 모듈</p>')
})

    .listen(8080, () => {
        console.log('8080포트 서버 연결');
    })

server.on('listening', () => {
    console.log('8080포트 연결 중');
})

server.on('error', () => {
    console.log(error);
})