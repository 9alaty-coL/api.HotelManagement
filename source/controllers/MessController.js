const MessageM = require('../models/Message')
const User = require('../models/User')
const UserM = require('../models/User')

class MessageController{
    async getAll (req, res, next) {
        try {
            const messages = await MessageM.find({senderId: req.user._id})
            res.json(messages)  
        } catch (error) {
            res.status(401).json({
                message: "failed"
            })
        }
    }
    async sendMessage (req, res, next){
        const message = req.body.message
        if (message){
            const newMessage = new MessageM(message)
            await newMessage.save()
            return res.status(200).json({
                result: "successfully"
            })
        }
        res.json({
            message: "failed"
        })
    }
    async getAllPartner(req, res, next) {
        const users = await UserM.find({})
        const partners = users.filter(value => value._id.toString() !== req.user._id.toString())
        res.status(200).json(partners)
    }

}

module.exports = new MessageController()