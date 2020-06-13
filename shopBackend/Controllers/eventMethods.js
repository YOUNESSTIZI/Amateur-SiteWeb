const Event = require('../model/event');

exports.createEvent = (req,res,next) => {
    console.log(req.body);
    const id = new mongoose.Types.ObjectId();
    const url = req.protocol + "://"+ req.get("host");
    const event = new Event({
        _id: id ,
        title: req.body.title ,
        detail: req.body.detail,
        date: req.body.date,
        imagePath: url+ "/uploads/"+req.file.filename
    });

    console.log(" Object Created " +event);
    event.save()
        .then(() => res.status(201).json({message: 'Event est bien crée '}))
        .catch(error => res.status(400).json({error}));

};

exports.editEvent = (req,res,next) => {
    console.log(req.body);
    const url = req.protocol + "://"+ req.get("host");
    let event;
    if(req.file != null){
        event = new Event({
            _id: req.body.id ,
            title: req.body.title ,
            detail: req.body.detail,
            date: req.body.date,
            imagePath: url+ "/uploads/"+req.file.filename
        });
    }else{
        event = new Event({
            _id: req.body.id ,
            title: req.body.title ,
            detail: req.body.detail,
            date: req.body.date,

        });
    }
    console.log(" Object Edited " +event);


    Event.findByIdAndUpdate({_id: req.body.id},{event}).then(function(event){
        res.send(event);
        console.log(req.body.title);


    });
};

exports.getEvents = (req, res, next) => {
    console.log(req.body);
    Event.find().then(events => {
        res.status(200).json({events});
    })
        .catch(error => res.status(400).json({error}));
};

exports.deleteEvent = (req, res, next) => {
    Event.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Deletion successful!" });
        console.log(result);
    })
        .catch( ()=>{
            res.status(401).json({error});
            console.log(error);
        });

};

exports.deleteEverything = (req,res,next)=>{
    Event.remove({},function(err,result){
        if(err){
            //console.log('error' + err);
            res.status(400).json({err});
        }
        //console.log(result);
        res.status(200).json({result})
    })
};


exports.getEvent = (req, res, next) => {
    console.log(req.params.id);
    Event.findOne({_id : req.params.id}).then( result => {
        res.status(201).json({result});
    })
        .catch(error => res.status(500).json({ error }));


};
