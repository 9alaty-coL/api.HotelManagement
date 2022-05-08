const authRoute = require('./auth')

const route = app => {
    app.get('/auth', (req, res, next) => res.send("hello"))
}

module.exports = route