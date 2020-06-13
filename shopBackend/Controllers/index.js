const Category = require("../model/Category");
const Post = require("../model/Post");


exports.getHomePage = (req, res, next) => {
    res.render('index', { title: 'Express' });
};

exports.getCategories = (req, res, next) => {
    Category.find(function (err, categories) {
        if (err) return next(err);
        res.json(categories);
    });
};

exports.getPosts = (req, res, next) => {
    Post.find(function (err, posts) {
        if (err) return next(err);
        res.json(posts);
    });
};

exports.getOnePostByCategory = (req, res, next) => {
    Post.find({category: req.params.id}, function (err, posts) {
        if (err) return next(err);
        res.json(posts);
    });
};

exports.getOnePost = (req, res, next) => {
    Post.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};
