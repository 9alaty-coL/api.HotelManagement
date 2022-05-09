const UserM = require('../models/User')
const jwt = require('jsonwebtoken')

const isAuth = (req, res, next) => {
    const token = req.body.token || req.query.token
    if (!token){
        return res.status(403).json({
            message: "No token provided",
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = decoded
        return next()
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}

module.exports = isAuth