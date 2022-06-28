const express = require("express")
const ws = require('ws')
const app = express();
const https = require("https")
const https_option = require("./config/ssl.config")
const port = 8000

app.get("/", (req,res)=>{
    const nDate = new Date().toLocaleString('kr-KR', {
        timeZone: 'Asia/Seoul'
      });
    return res.status(200).send(nDate)
})

https.createServer(https_option, app).listen(port, function () {
    console.log("HTTPS server listening on port " + port);
});

