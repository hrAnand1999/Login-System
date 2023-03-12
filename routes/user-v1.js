const express = require('express');
const router = express.Router();
const routes = require('../controller/v1/user');

router.post('/sign-up',  routes.signUp.createUser);

router.post('/log-in', routes.logIn.authenticateUser);

router.post('/forgot-password', routes.forgotPassword.recoverPassword);

module.exports = router;