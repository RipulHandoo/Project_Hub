const express = require('express')
const router = express.Router()

// import the necessary modules here we need to get the function that take user PRN and password from web and store in postgress database

const singUp = require('../user/singUp')
const login = require("../user/login")
const logout = require("../user/logout")
const authentication = require("../middleware/auth")

router.post('/singup',singUp)
router.post("/user/login",login)
router.post("/user/logout",authentication,logout)

module.exports = router