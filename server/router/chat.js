const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    var clientIp = req.headers['x-forwarded-for']  || req.connection.remoteAddress;
    return res.status(200).render("../public/chat.ejs", {client_ip : clientIp})
});



router.get("/:id", (req, res)=>{
    
})
module.exports = router;