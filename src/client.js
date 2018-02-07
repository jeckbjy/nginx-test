const WebSocket = require('ws')

function connectws(url) {
    var ws = new WebSocket(url, {
        rejectUnauthorized: false        
    })
    ws.on('open', ()=>{
        ws.send('hello!')
    })

    ws.on('close', ()=>{
        console.log('close')
    })

    ws.on('message', (msg)=>{
        console.log('back msg:%s',msg)
    })
}

// test ws
// connectws("ws://localhost:3001")

// test nginx
// connectws("ws://localhost:8080/app3")
// connectws("ws://localhost:8080/app4")
// connectws("wss://localhost:4433/app5")
connectws("wss://localhost:4433/app6")