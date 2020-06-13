const bcrypt = require('bcrypt');
const User = require('../model/User');
const jwt = require('jsonwebtoken');

exports.signUp = (req, res, next) => {
   // console.log(req.body);
    bcrypt.hash(req.body.password, 2)
        .then(hash => {
            const user = new User({
                _id : new mongoose.Types.ObjectId(),
                userName: req.body.userName,
                email: req.body.email,
                password: hash
            });
            console.log('voila le user' + user);
            user.save()
                .then(() => res.status(201).json({message: 'User bien crée!!'}))
                .catch(error => {
                    console.log(error);
                    res.status(400).json({error})
                });
        })
        .catch(error => res.status(500).json({error}));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email})
        .then(user => {
            if(!user){
                return res.status(401).json({error: 'utilisateur non trouvé !'});
            }
            bcrypt.compare(req.body.password , user.password)
                .then(valid => {
                    if(!valid) {
                        return res.status(401).json({error: 'Mot de passe Incorrect!'});
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id},
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn: '24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json(error))
        })
        .catch(error => res.status(500).json(error));
};

exports.getUsers = (req,res,next) =>{
    User.find().then(users => {
        res.status(200).json({users});
    })
        .catch(error => res.status(400).json({error}));
};

exports.acceptUser = (req,res,next) => {
    console.log(req.params.id);
   User.findByIdAndUpdate({_id: req.params.id},{state: "accepted"}).then(function(event){
        res.status(200).send(event);

    })
        .catch(error => {
            console.log(error);
            res.status(500).json(error.body)
        });
};

exports.deleteUser = (req,res,next) => {
    console.log(req.params.id);
    User.deleteOne({_id: req.params.id}).then(result => {
        res.status(200).send({message: "c bien rejeté"});

    })
        .catch(error => {
            console.log(error);
            res.status(500).json(error.body)
        });
};

exports.makeAdmin = (req,res,next) => {
    console.log(req.params.id);
    User.findByIdAndUpdate({_id: req.params.id},{isAdmin: true}).then(function(event){
        res.status(200).send(event);

    })
        .catch(error => {
            console.log(error);
            res.status(500).json(error.body)
        });
};

exports.makeVisiteur = (req,res,next) => {
    console.log(req.params.id);
    User.findByIdAndUpdate({_id: req.params.id},{isAdmin: false}).then(function(event){
        res.status(200).send(event);

    })
        .catch(error => {
            console.log(error);
            res.status(500).json(error.body)
        });
};

exports.getUserById = (req,res,next) => {
    console.log(req.params.id);
    User.findById({_id : req.params.id}).then(result => {
        res.status(200).send(result);
    })
        .catch(error => {
            res.status(500).json(error.body);
        });
};
