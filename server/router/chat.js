const express = require("express");
const router = express.Router();
const client = require("../config/db.config")

router.get("/", (req, res) => {

    return res.status(200).render("../public/chat.ejs")
})


module.exports = router;