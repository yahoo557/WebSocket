const express = require("express");
const router = express.Router();
const dbClient = require("../config/db.config");
const bcrypt = require("bcrypt")
router.get("/", (req, res) => {
    var clientIp = req.headers['x-forwarded-for']  || req.connection.remoteAddress;

    return res.status(200).render("../public/chat.ejs", {client_ip : clientIp})
});



router.get("/:id", (req, res)=>{
    //인스타그램 다이렉트 메시지URL은 다음과 같다
    //https://www.instagram.com/direct/t/340282366841710300949128579513651297496
    //구조 
    // https: 통신규약 정의
    // www.instagram.com : 도메인
    // /direct/t/ : 라우터
    // 340282366841710300949128579513651297496 : 내가 참가하고 있는 다이렉트 메시지 채팅방의 id, 
    // 앞 24자리는 본인의 user_id값으로 유추 된다. 왜냐하면 각각 다른 상대방과의 DM url중 앞 24자리는 항상 동일했기때문
    // 나머지 15자리는 상대방의 user_id값 혹은 실제 채팅방의 id를 나타내는것 일수도 있다. 
    // 왜냐하면 단수,복수의 상대에 상관없이 뒷자리는 항상 15자리였기 때문에, 상대의 user_id라고 유추하기 어렵다.
    const id = req.params.id;
    const myId = req.params.id.slice(0,24)
    const partnerId = req.params.id.slice(24)

    
    // dbClient.connect((err,db)=>{
    //     db.db('chat').collection('chat').find({
    //       room_id : roomNumber
    //     })
    //   })
    return res.status(200).send(`Your Id : ${myId} \n Partner's Id : ${partnerId}`);
})
module.exports = router;