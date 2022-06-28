const fs = require('fs')
module.exports = {
    key: fs.readFileSync(__dirname + "/ssl/cert.key"),
    cert: fs.readFileSync(__dirname + "/ssl/cert.crt"),
    ca: fs.readFileSync(__dirname + "/ssl/ca.crt"),
};
