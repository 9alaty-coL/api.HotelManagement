const BillM = require('../models/Bill')

class BillController{
    async getAll (req, res, next){
        try {
            const bills = await BillM.find({})
            res.status(200).json(bills)
        } catch (error) {
            res.status(501).json({message:"Interal server error"})
        }
    }

    async getBillById (req, res, next){
        try {
            const bills = await BillM.find({_id: req.query.id})
            res.status(200).json(bills)
        } catch (error) {
            res.status(501).json({message:"Interal server error"})
        }
    }
}

module.exports = new BillController()