const express = require("express")
const app = express();
const chat = require("./router/chat")
app.use(express.json());
app.use("/chat", chat)
const https = require("https")
const https_option = require("./config/ssl.config")
const ws = require('ws')
const port = 8000

const HTTPSServer = https.createServer(https_option, app).listen(port, function () {
  console.log("HTTPS server listening on port " + port);
});

module.exports = HTTPSServer
app.engine('html', require('ejs').renderFile);

app.get("/", (req,res)=>{
    const nDate = new Date().toLocaleString('kr-KR', {
        timeZone: 'Asia/Seoul'
      });
    return res.status(200).send(nDate)
})

// const routers = [
//   ['/chat', './router/chat.js']]
// routers.forEach(k => {
//   app.use(k[0], require(k[1]));
// })
