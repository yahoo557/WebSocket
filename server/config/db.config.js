const { MongoClient } = require('mongodb');
const PsqlClient =require('pg').Client;
const Query = require('pg').Query;
const url = 'mongodb://localhost:27017/';
const dbName = "chat"

// DB를 사용할 라우터에서 현재 config 파일을 embed 한다.
// ex) Mongo가 필요하면 require("path/config/db.config.js")
//     client.mongo.connect("dbname").collection("collectionname")

//     Psql이 필요하면  reqtuier("path/config/db.config.js")
//     client.mongo.connect().Query()
const client = {
    mongo : new MongoClient(url),
    psql : new PsqlClient({
        user: 'seungbaek',  ///////////////////////
        host: '127.0.0.1',  //   추후에 dotenv로   //
        database: 'chat',   //  환경변수 설정할것    //
        password: '111111', //////////////////////
        port: 5432
    })

}

module.exports = client;