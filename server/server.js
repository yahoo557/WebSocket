const express = require("express")

const app = express();
const https = require("https")
const https_option = require("./config/ssl.config")
const ws = require('ws')
const port = 8000



app.engine('html', require('ejs').renderFile);
app.get("/", (req,res)=>{
    const nDate = new Date().toLocaleString('kr-KR', {
        timeZone: 'Asia/Seoul'
      });
    return res.status(200).send(nDate)
})

const routers = [
  ['/char', './router/chat.js']]
routers.forEach(k => {
  app.use(k[0], require(k[1]));
})