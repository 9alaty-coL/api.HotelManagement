const authRoute = require('./auth')
const roomRoute = require('./room')

const route = app => {
    app.get('/', (req, res)=>{
        res.send("Welcome to hotelmanagement api. Deployed by heroku - :>")
    })
    app.use('/auth', authRoute)
    app.use('/room', roomRoute)
    app.use('/customer', customerRoute)
}

module.exports = route