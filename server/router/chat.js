const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    var clientip = req.headers['x-forwarded-for']  || req.connection.remoteAddress;
    return res.status(200).render("../public/chat.ejs")
})


module.exports = router;