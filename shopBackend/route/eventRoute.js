const multer = require("multer");
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');
const Event = require('../model/event');
const path = require('path');
const bodyparser = require('body-parser');
const eventCtrl = require('../Controllers/eventMethods');

const auth = require('../middleware/check-auth');

const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        if(file.mimetype==='image/jpeg' || file.mimetype ==='image/png'){

            cb(null,path.join('uploads/'));
        }

        else{

            cb(null,path.join('uploads/'));
        }

    },
    filename : function (req,file,cb) {
        cb(null,path.join(Date.now().toString()+file.originalname));
    }
})
//const upload = multer({storage: storage});


const fileFilter = (req,file,cb)=>{
    //reject a file
    var ext = path.extname(file.originalname);
    if(file.mimetype==='image/jpeg' || file.mimetype ==='image/png' || ext ==='.pdf' ){
        console.log("file accept  :   " + file.originalname);
        cb(null,true);

    }
    else {

        console.log("file reject :   " + file.originalname);
        cb(null,false);
    }
};

const upload =multer({storage:storage, limits: {
        fileSize : 1200*1024*5
    },
    fileFilter : fileFilter
});


router.post('/api/event',auth,upload.single("image"),eventCtrl.createEvent);
router.put('/api/editEvent',auth,upload.single("image"),eventCtrl.editEvent);

//this function will get every Events in the database
router.get('/api/getEvents',eventCtrl.getEvents);

//this function will delete everything
router.delete('/api/deleteEvents',auth, eventCtrl.deleteEverything);
//delete one event
router.delete("/api/deleteEvent/:id",auth, eventCtrl.deleteEvent);

router.get("/api/getEvent/:id",eventCtrl.getEvent);


module.exports = router;


//this function will upload one image at time
/* router.post('/api/image',uploadDisk.single("image"),(req,res,next) => {
    console.log(" image uploaded");
    res.send("file disk upload success");
});*/
