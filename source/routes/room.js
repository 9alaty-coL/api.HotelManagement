const express = require('express')
const router = express.Router()
const RoomController = require('../controllers/RoomController')
const isAuth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')

router.get('/getRooms', isAuth, RoomController.getAllRoom)
router.get('/getRoom', isAuth, RoomController.getOneRoom)
router.get('/getBookedRoom', isAuth, RoomController.getBookedRoom)
router.get('/getBookedRoomByName', isAuth, RoomController.getBookedRoomByName)
router.get('/getAvailableRoom', isAuth, RoomController.getAvailableRoom)
router.post('/addRoom', isAdmin, RoomController.add)
router.put('/updateRoom', isAdmin, RoomController.update)
router.put('/changeCustomerInfo', isAuth, RoomController.changeCustomerInfo)
router.delete('/deleteCustomerInfo', isAuth, RoomController.deleteCustomerInfo)
router.delete('/deleteRoom', isAdmin, RoomController.delete)
router.post('/bookRoom', isAdmin, RoomController.bookRoom)

module.exports = router