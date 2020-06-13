const express = require('express');
const router = express.Router();
const index = require('../Controllers/index');

/* GET home page. */
router.get('/', index.getHomePage );

router.get('/category', index.getCategories);

router.get('/post', index.getPosts);

router.get('/bycategory/:id', index.getOnePostByCategory);

router.get('/post/:id', index.getOnePost);

module.exports = router;
