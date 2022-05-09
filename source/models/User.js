const mongoose = require('mongoose') ;
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  isAdmin: Boolean,
});

const User = mongoose.model('user', userSchema)

module.exports = User