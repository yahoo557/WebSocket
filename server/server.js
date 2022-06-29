const express = require("express")

const app = express();
const https = require("https")
const https_option = require("./config/ssl.config")
const ws = require('ws')
const port = 8000

app.get("/", (req,res)=>{
    const nDate = new Date().toLocaleString('kr-KR', {
        timeZone: 'Asia/Seoul'
      });
    return res.status(200).send(nDate)
})

const https_server = https.createServer(https_option, app).listen(port, function () {
    console.log("HTTPS server listening on port " + port);
});



const ws_server = new ws.Server({server : https_server});

ws_server.on('connection', (ws, req)=>{
    //연결 클라이언트의 IP 획득
    const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    console.log(`새로운 클라이언트[${ip}] 접속`)
    if(ws.readyState === ws.OPEN){ // 연결 여부 체크
        ws.send(`클라이언트[${ip}] 접속을 환영합니다 from 서버`); // 데이터 전송
    }


})
