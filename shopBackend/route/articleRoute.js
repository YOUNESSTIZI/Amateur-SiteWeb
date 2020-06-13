const express = require("express");


const Article = require('../model/article');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const checkAuth = require('../middleware/check-auth');

const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        if(file.mimetype==='image/jpeg' || file.mimetype==='image/jpg' ||  file.mimetype ==='image/png'){

            cb(null,path.join('uploads/images/articles'));
        }

        else{

            cb(null,path.join('uploads/files/articles'));
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
router.post("/articles" , upload.single('articleFile'), (req, res, next) => {
    console.log(req.body);
    const url = req.protocol + "://" + req.get("host");
    const id = new mongoose.Types.ObjectId();
    let filePath=null;
    if(req.file){
        filePath= url + "/uploads/files/articles/" + req.file.filename
    }
    const article = new Article({
        _id:id,
        title: req.body.title,
        description: req.body.description,
        filePath:filePath ,
        vu: 0,
        creator : req.body.creator,
        dateCreate: new Date(),
        dateMisAjour:null
    })
    article.save().then(createdArticle => {
        res.status(201).json({
            message: "Article added successfully",
            ArticleId: createdArticle._id
        });
    });
});

router.get('/allArticles', (req,res,next)=>{

    Article.find().sort({dateCreate : -1}).then(results=>{
        console.log(results)
        if(results) res.status(200).json(results);
    }).catch(err=>{
        if(err) res.status(500).send('error : '+err);
    })

})
router.get('/articles', (req,res,next)=>{

    Article.find({state:"Accepted"}).sort({dateCreate : -1}).then(results=>{
        console.log(results)
        if(results) res.status(200).json(results);
    }).catch(err=>{
        if(err) res.status(500).send('error : '+err);
    })

})
router.get('/articles/:id',(req,res)=>{
    Article.findOne({_id : req.params.id},(err,result)=>{
        if(err) res.status(500).send('error : '+err);
        else if(!result) res.status(404).send(`no article with idf ${req.params.id}`);
        else res.json({
                message : 'article fitched successfuly',
                article : result
            });
    })
})
router.get('/articles/members/:idCreator',(req,res)=>{
    Article.find({creator : req.params.idCreator},(err,result)=>{
        if(err) res.status(500).send('error : '+err);
        else if(!result) res.status(404).send(`no article with idf ${req.params.id}`);
        else res.json({
                message : 'article fitched successfuly',
                articles : result
            });
    }).sort({dateCreate : -1})
})
router.put("/articles/:id/state/", (req, res, next) => {

    console.log(req.body);
    Article.updateOne({ _id: req.params.id},req.body).then(result => {
        if(result.nModified>0){
            res.status(200).json({ message: "Update successful!" });
        }

        else {
            res.status(401).json({message : "Not authorized!"})
        }

    });
});
router.put("/articles/:id/vu", (req, res, next) => {

    console.log(req.body);
    Article.updateOne({ _id: req.params.id},{$set :{vu: req.body.vu +1 }}).then(result => {
        if(result.nModified>0){
            res.status(200).json({ message: "Update successful!" });
        }

        else {
            res.status(401).json({message : "Not authorized!"})
        }

    });
});
router.delete("/articles/:id", (req, res, next) => {
    console.log("article supprimer : "+req.params.id);
    Article.deleteOne({ _id: req.params.id}).then(result => {
        console.log(result);
        if(result.n>0){
            res.status(200).json({ message: "Deletion successful!" });
        }

        else{
            res.status(401).json({message : "Not authorized!"});
        }


    });
});
router.put("/articles/:id",upload.single('file'), (req, res, next) => {
    console.log(req.body);
    let article;
    if(req.file){
        const url = req.protocol + "://" + req.get("host");
        article = new Article({
            title: req.body.title,
            description: req.body.description,
            filePath: url + "/uploads/files/articles/" + req.file.filename ,
            dateMisAjour:new Date()
        })
    }
    else{
        article = new Article ({
            title: req.body.title,
            description: req.body.description,
            dateMisAjour:new Date()
        })
    }

    Article.updateOne({ _id: req.params.id},article).then(result => {
        if(result.nModified>0){
            res.status(200).json({ message: "Update successful!" });
        }

        else {
            res.status(401).json({message : "Not authorized!"})
        }

    });
});
router.put("/articles/:id/admin",upload.single('file'), (req, res, next) => {
    console.log(req.body);
    let article;
    if(req.file){
        const url = req.protocol + "://" + req.get("host");
        article = new Article({
            title: req.body.title,
            description: req.body.description,
            filePath: url + "/uploads/files/articles/" + req.file.filename,
            state:req.body.state
        })
    }
    else{
        article = new Article ({
            title: req.body.title,
            description: req.body.description,
            state:req.body.state
        })
    }

    Article.updateOne({ _id: req.params.id},article).then(result => {
        if(result.nModified>0){
            res.status(200).json({ message: "Update successful!" });
        }

        else {
            res.status(401).json({message : "Not authorized!"})
        }

    });
});
module.exports = router;
