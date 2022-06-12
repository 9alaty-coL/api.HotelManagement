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
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    role: user.role,
                },
            }, process.env.TOKEN_SECRET, {
                expiresIn: 60 * 60 * 24,
            })

            const issuedDatetime = new Date()
            const expiredDatetime = new Date(issuedDatetime);
            expiredDatetime.setDate(issuedDatetime.getDate() + 1)

            res.status(200).json({
                AUTH_TOKEN: token,
                issued: issuedDatetime.toLocaleString(),
                expired: expiredDatetime.toLocaleString(),
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