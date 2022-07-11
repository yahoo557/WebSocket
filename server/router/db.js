const express = require("express");
const router = express.Router();
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbName = "chat"
const client = new MongoClient(url)


router.get("/:id", (req, res) => {
    var clientip = req.headers['x-forwarded-for']  || req.connection.remoteAddress;
    const id = req.params.id
    const nDate = new Date().toLocaleString('kr-KR', {
        timeZone: 'Asia/Seoul'
      });
    client.connect( (err, db)=>{
        db.db(dbName).collection('chat').insertOne({
            receiver : 4, 
            sender : 2,
            time : 0,
            send_time : 0,
            text : 0
        });
    })

    return res.status(200).send(`ip : ${clientip}, id : ${id}`)
})

module.exports = router;