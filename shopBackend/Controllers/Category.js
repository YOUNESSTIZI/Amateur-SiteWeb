const Category = require("../model/Category");

exports.getCategories = (req, res) => {
    Category.find().then(categories => {
        res.status(201).json({categories});
    })
        .catch(error => res.status(400).json({error}));

};

exports.getOneCategorie = (req, res, next) => {
    Category.findById(req.params.id, function (err, category) {
        if (err) return next(err);
        res.status(201).json(category);
    });
};

exports.createCategory = (req, res, next) => {
    Category.create(req.body, function (err, category) {
        if (err) return next(err);
        res.status(201).json(category);
    });

};

exports.updateCategory = (req, res, next) => {
    Category.findByIdAndUpdate(req.params.id, req.body, function (err, category) {
        if (err) return next(err);
        res.status(201).json(category);
    });

};

exports.deleteCategory = (req, res, next) => {
    Category.findByIdAndRemove(req.params.id, req.body, function (err, category) {
        if (err) return next(err);
        res.json(category);
    });

};
