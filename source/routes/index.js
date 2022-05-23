const authRoute = require('./auth')
const roomRoute = require('./room')

const route = app => {
    app.get('/', (req, res)=>{
<<<<<<< HEAD
        res.send("Welcome to hotelmanagement api. Deployed by heroku. Version 12")
=======
        res.send("Welcome to hotelmanagement api. Deployed by heroku (Dong deployed)")
>>>>>>> bc5db6f5beaa4df81f75374cbcac9fb35410c21f
    })
    app.use('/auth', authRoute)
    app.use('/room', roomRoute)
}

module.exports = route