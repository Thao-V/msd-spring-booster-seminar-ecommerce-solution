const express = require('express');
const userController = require('../controllers/user')
const router = express.Router();

router.post('/add', userController.add);
router.post('/login', userController.login);

module.exports = router;
