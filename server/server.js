const express = require("express")
const app = express();
const wsModule = require('ws');
const chat = require("./router/chat")
app.use(express.json());
app.use("/chat", chat)
const https = require("https")
const https_option = require("./config/ssl.config")
const ws = require('ws')
const { WebSocketServer } = require('ws');
const port = 8000
app.engine('html', require('ejs').renderFile);

app.get("/", (req, res) => {
  const nDate = new Date().toLocaleString('kr-KR', {
    timeZone: 'Asia/Seoul'
  });
  return res.status(200).send(nDate)
})

const server = https.createServer(https_option, app).listen(port, function () {
  console.log("HTTPS server listening on port " + port);
});




//serve static folder

const wss = new WebSocketServer({  port:8001 }) // (2)
wss.on('connection', (client) => {
  console.log('Client connected !')
  client.on('message', (msg) => {    // (3)
    console.log(`Message:${msg}`);
    broadcast(msg)
  })
})
function broadcast(msg) {       // (4)
  for (const client of wss.clients) {
    if (client.readyState === ws.OPEN) {
      client.send(msg)
    }
  }
}
