class RoomController{
    async getAllRoom (req, res, next){
        return res.json({
            allroom: "here!"
        })
    }
}

module.exports = new RoomController()