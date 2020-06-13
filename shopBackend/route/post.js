const express = require('express');
const router = express.Router();
const post = require('../Controllers/post');



router.get('/:id', post.getOnePost);

router.post('/', post.createPost);

router.put('/:id', post.updatePost);

router.delete('/:id', post.deletePost);

router.get('/', post.getPosts);

module.exports = router;
