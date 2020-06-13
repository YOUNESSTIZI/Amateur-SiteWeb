const nodemailer = require("nodemailer");


exports.sendEmail = (req, res) => {

    let info = {
        email: req.body.email,
        code: req.body.code,
        userName: req.body.userName
    };
 //   console.log("request came" + info.email + info.code + info.userName);
   sendMail(info, call => {
        console.log(`The mail has been send and the id is ${call.messageId}`);
        res.status(200).json({message :"The mail has been send "});
    }).catch(error => {
        res.status(500).send(error.body);
    })
};

async function sendMail(info, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service : 'Gmail',
        tls:{
            rejectUnauthorized: false
        },
        auth: {
            user: 'younesstizi@gmail.com',
            pass: 'younes1998'
        }
    });

    let mailOptions = {
        from: '"Fun Of Heuristic"', // sender address
        to: info.email, // list of receivers
        subject: "Arram Verification Code", // Subject line
        html: "<h4>Hello  " + info.userName + "</h4><br><br> <p> The verification Code is : </p> <Strong>" + info.code + "</Strong> <br> Thanks"
    };

    // send mail with defined transport object
    let sending = await transporter.sendMail(mailOptions);

    callback(sending);
}
