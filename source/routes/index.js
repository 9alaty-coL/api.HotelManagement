const authRoute = require('./auth')
const roomRoute = require('./room')
const messRoute = require('./mess')

const route = app => {
    app.get('/', (req, res)=>{
        res.send("Welcome to hotelmanagement api. Deployed by heroku. Version 12")
    })
    app.use('/auth', authRoute)
    app.use('/room', roomRoute)
    app.use('/mess', messRoute)
}

module.exports = route