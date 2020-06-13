const express = require('express');
const router = express.Router();
const emailCtr = require('../Controllers/email');
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/


router.post("/sendEmail", emailCtr.sendEmail);



module.exports = router;
