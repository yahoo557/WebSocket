const express = require("express")
const app = express();
const router = express.Router()
require("dotenv").config({ path:'/variables.env' })

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const path = require("path");
app.engine('html', require('ejs').renderFile);
const wsModule = require('ws');

const https = require("https")
const https_option = require("./config/ssl.config")
const ws = require('ws')
const { WebSocketServer } = require('ws');
const port = 8000
const dbclient = require("./config/db.config")

const routes = require('./router/index');
const nDate = new Date().toLocaleString('kr-KR', {
  timeZone: 'Asia/Seoul'
});
app.use('/', routes);

app.get("/", (req, res) => {
  
  return res.status(200).send(`Connected Time : ${nDate}`)
})

const server = https.createServer(https_option, app).listen(port, function () {
  
  console.log(`HTTPS server listening on port ${port} at ${nDate}` );
});


//serve static folder

const wss = new WebSocketServer({  port:8001 }) 
wss.on('connection', (client) => {
  console.log(`WebSocket server listening on port 8001 at ${nDate}` );
  var cnt = 0;
  client.on('message', (msg) => {    
    console.log(`Message:${msg}`);
    dbclient.connect((err,db)=>{
      db.db('chat').collection('chat').insertOne({
        receiver : cnt++,
        sender : cnt,
        text : msg,
        send_time : nDate
      })
    })
    broadcast(msg)
  })
})
function broadcast(msg) {       
  for (const client of wss.clients) {
    if (client.readyState === ws.OPEN) {
      client.send(msg)
    }
  }
}
