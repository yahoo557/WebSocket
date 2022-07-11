const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbName = "chat"
const client = new MongoClient(url)

module.exports = client;