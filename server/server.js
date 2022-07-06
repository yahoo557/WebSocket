const express = require("express")
const app = express();


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