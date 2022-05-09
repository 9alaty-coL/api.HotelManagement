const UserM = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthController{
    async login(req, res , next) {
        const username = req.body?.username
        const password = req.body?.password
        const user = await UserM.findOne({username: username})
        if (user && await bcrypt.compare(password, user.password)){
            const token = jwt.sign({
                data:{
                    username: user.username,
                    role: user.role,
                }
            }, process.env.TOKEN_SECRET)

            res.status(200).json({
                AUTH_TOKEN: token,
            })
        }
        else{
            res.status(401).json({
                message: "Invalid username or password",
            })
        }
    }
}

module.exports = new AuthController()