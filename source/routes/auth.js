const express = require('express')
const router  = express.Router()
const AuthController = require('../controllers/AuthController')

// Default password 12345
router.post('/', AuthController.login)

module.exports = router