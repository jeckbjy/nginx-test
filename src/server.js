const http = require('http')
const websocket = require('ws')
const util = require('util')

function createHttpServer(port) {
    http.createServer((req, rsp)=>{
        // console.log(req.url)
        rsp.writeHead(200, {'Content-Type': 'text/plain'});
        rsp.end('http server:port' + port)
    }).listen(port)

    console.log("http server start,port is %d", port)
}

function createWebsocketServer(port) {
    wss = new websocket.Server({"port":port})
    wss.on('connection', (conn)=> {
        console.log('connect from port=%d:', port)
        conn.on('message', (msg)=> {
            console.log('received:%s', msg)
        })

        data = util.format('hello world:%d', port)
        conn.send(data)
    })

    console.log("ws server start, port is %d", port)
}

createHttpServer(2001)
createHttpServer(2002)

createWebsocketServer(3001)
createWebsocketServer(3002)