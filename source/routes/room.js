const express = require('express')
const router = express.Router()
const RoomController = require('../controllers/RoomController')
const isAuth = require('../middlewares/isAuth')

router.get('/', isAuth, RoomController.getAllRoom)

module.exports = router