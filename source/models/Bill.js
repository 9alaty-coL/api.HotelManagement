const mongoose = require('mongoose') ;
const { Schema } = mongoose;

const billSchema = new Schema({
  customerName: String,
  roomName: String,
  from: Date,
  to: Date,
  total: Number,
  createdBy: String,
});

const Bill = mongoose.model('bill', billSchema)

module.exports = Bill