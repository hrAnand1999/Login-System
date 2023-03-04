const express = require('express');
const router = express.Router();
const routes = require('../controller/v1/user');

router.post('/sign-up',  routes.signUp.createUser)

module.exports = router;