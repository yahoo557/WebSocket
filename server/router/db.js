const express = require("express");
const router = express.Router();
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbName = "chat"
const client = new MongoClient(url)


router.get("/:id", (req, res) => {
    var clientIp = req.headers['x-forwarded-for']  || req.connection.remoteAddress;
    const id = req.params.id
    const nDate = new Date().toLocaleString('kr-KR', {
        timeZone: 'Asia/Seoul'
      });
    client.connect( (err, db)=>{
        db.db(dbName).collection('log').insertOne({
            client_ip : clientIp,
            connect_time : nDate
        });
    })
    return res.status(200).send(`ip : ${clientIp}, id : ${id}`)
})

module.exports = router;