const userCtrl = require('../Controllers/user');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/check-auth');

router.post('/api/signUp',userCtrl.signUp);

router.post('/api/login', userCtrl.login);

router.get('/api/getUsers',userCtrl.getUsers);

router.get('/api/acceptUser/:id',userCtrl.acceptUser);

router.get('/api/rejetUser/:id',userCtrl.deleteUser);

router.get('/api/makeAdmin/:id',userCtrl.makeAdmin);

router.get('/api/makeVisiteur/:id',userCtrl.makeVisiteur);

router.get('/api/getUser/:id',userCtrl.getUserById);

module.exports = router;

