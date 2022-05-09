const authRoute = require('./auth')
const roomRoute = require('./room')

const route = app => {
    app.get('/', (req, res)=>{
        res.send("Welcome to hotelmanagement api")
    })
    app.use('/auth', authRoute)
    app.use('/room', roomRoute)
}

module.exports = route