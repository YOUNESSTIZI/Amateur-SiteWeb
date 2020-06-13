const express = require('express');
const router = express.Router();
const category = require('../Controllers/Category');

router.get('/', category.getCategories);

router.get('/:id', category.getOneCategorie);

router.post('/', category.createCategory);

router.put('/:id', category.updateCategory);

router.delete('/:id',category.deleteCategory);



module.exports = router;
