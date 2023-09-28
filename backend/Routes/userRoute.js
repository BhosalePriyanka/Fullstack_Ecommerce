const {signup,login,resetPassword,passwordLink,googleLogin} = require('../Controller/userController');
const express = require('express')
const router = express.Router()
router.post('/signup',signup)
router.post('/login',login)
router.post('/reset',resetPassword)
router.post('/passwordLink/:token',passwordLink)
router.post('/googleLogin',googleLogin)


module.exports = router;