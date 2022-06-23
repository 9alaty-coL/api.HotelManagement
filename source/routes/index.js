const authRoute = require('./auth')
const roomRoute = require('./room')
const messRoute = require('./mess')
const roomTypesRoute = require('./roomTypes')
const serviceRoute = require('./service')
const billRoute = require('./bill')

const route = app => {
<<<<<<< HEAD
    app.get('/api', (req, res)=>{
        res.send("Welcome to hotelManagement api. Deployed by heroku. Version 12")
    })
    app.use('/api/auth', authRoute)
    app.use('/api/room', roomRoute)
    app.use('/api/mess', messRoute)
    app.use('/api/roomTypes', roomTypesRoute)
    app.use('/api/service', serviceRoute)
    app.use('/api/bill', billRoute)
=======
    app.get('/', (req, res)=>{
        res.send("Welcome to hotelmanagement api. Deployed by heroku - :> :> :>")
    })
    app.use('/auth', authRoute)
    app.use('/room', roomRoute)
    app.use('/customer', customerRoute)
>>>>>>> fedc50bb6ad75b0da7f880556de277d20a9fc76a
}

module.exports = route