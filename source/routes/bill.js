const express = require('express')
const router  = express.Router()
const BillController = require('../controllers/BillController')

router.get('/', BillController.getAll)
router.get('/getBill', BillController.getBillById)

module.exports = router 