const express = require('express');
const router = express.Router();


const routers = [
    ["/chat", "./chat"],
    ["/db", "./db"],
    ["/user", "./user"]
]

routers.forEach(k => {
    router.use(k[0], require(k[1]));
})

module.exports = router;