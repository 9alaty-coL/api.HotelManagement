const mongoose = require('mongoose')
const {Schema} = mongoose

const RoomSchema = new Schema({
    type: String,
})

const Room = mongoose.model('room', RoomSchema)

module.exports = Room