const authRoute = require('./auth')
const roomRoute = require('./room')
const messRoute = require('./mess')
const roomTypesRoute = require('./roomTypes')

const route = app => {
    app.get('/', (req, res)=>{
        res.send("Welcome to hotelManagement api. Deployed by heroku. Version 12")
    })
    app.use('/auth', authRoute)
    app.use('/room', roomRoute)
    app.use('/mess', messRoute)
    app.use('/roomTypes', roomTypesRoute)
}

module.exports = route