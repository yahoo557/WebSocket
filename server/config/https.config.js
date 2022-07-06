const express = require('express')
const app = express();
const https = require("https")
const https_option = require("./ssl.config")
const ws = require('ws')
const port = 8001

const HTTPSServer = https.createServer(https_option, app).listen(port, function () {
  console.log("HTTPS server listening on port " + port);
});

module.exports = HTTPSServer