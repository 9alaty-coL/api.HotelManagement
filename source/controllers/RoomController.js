const RoomM = require('../models/Room')

class RoomController{
    async getAllRoom (req, res, next){
        const rooms = await RoomM.find({})
        res.json(rooms)
    }

    async getOneRoom (req, res, next){
        const _name = req.body.name;
        const room = await RoomM.findOne({name: _name})
        
        if (!room)
            return res.status(404).json({message: "Not found"})
        else
            res.json(room)
    }

    async getBookedRoom (req, res, next) {
        const bookedRoom = await RoomM.find({status: "Phòng đã đặt"})

        if (!bookedRoom)
            return res.status(404).json({message: "Not found"})
        else
            res.json(bookedRoom)
    }

    async getAvailableRoom(req, res, next) {
        const availableRoom = await RoomM.find({status: "Phòng trống"})

        if (!availableRoom)
            return res.status(404).json({message: "Not found"})
        else
            res.json(availableRoom)
    }

    async add (req, res, next) {
        const _name = req.body.name;
        const _type = req.body.type;
        const _status = req.body.status;
        const _actualState = req.body.actualState;
        const _price = req.body.price;
        const _customer = req.body.customer;
        const room = await RoomM.findOne({name: _name})
    
        if (room)
            return res.status(406).json({message: "This room already exists"})

        await RoomM.create({
            name: _name,
            type: _type,
            status:_status,
            actualState: _actualState,
            price: _price,
            customer: _customer,
        }) 

        res.json({message: ` ${_name} is added successfully`})
    }

    async update (req, res, next) {
        const _oldName = req.body.oldName
        const _name = req.body.name;
        const _type = req.body.type;
        const _status = req.body.status;
        const _actualState = req.body.actualState;
        const _price = req.body.price;
        const _customer = req.body.customer;
        const room = await RoomM.findOne({oldName: _oldName})
    
        if (!room)
            return res.status(404).json({message: "Not found"})

        await RoomM.findOneAndUpdate({oldName: _oldName},{
            name: _name,
            type: _type,
            status:_status,
            actualState: _actualState,
            price: _price,
            customer: _customer,
        }) 

        res.json({message: `${_name} is updated successfully`})
    }

    async delete (req, res, next) {
        const _name = req.body.name; 
        const room = await RoomM.findOne({name: _name})
    
        if (!room)
            return res.status(404).json({message: "Not found"})


        await RoomM.findOneAndDelete({name: _name})

        res.json({message: `${_name} is deleted successfully`})
    }

    async bookRoom(req, res, next){
        if (!req.body.roomId || !req.body.customerName){
            return res.status(401).json({message: "Invalid room or customer name"})
        }
        try {
            const result = await RoomM.updateOne({_id: req.body.roomId}, {
                customer: req.body.customerName,
                status:"Phòng đã đặt",
            })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(201).json({message: "Internal server error: " + error.message})
        }
    }

    async changeCustomerInfo(req, res, next) {
        const _name = req.body.name;
        const _oldName = req.body.oldName;
        const _customer = req.body.customer;
        const _time = req.body.time;

        // Change old room
        if (_oldName !== _name) {
            const oldRoom = await RoomM.findOne({name: _oldName})

            if (oldRoom) {
                await RoomM.findOneAndUpdate({name: _oldName},{
                    status: "Phòng trống",
                    customer: "",
                    time: 0,
                })
            }
        }

        // Update new room
        const room = await RoomM.findOne({name: _name})

        console.log(room)

        if (!room)
            return res.status(404).json({message: "Not found"})

        

        await RoomM.findOneAndUpdate({name: _name},{
            status: "Phòng đã đặt",
            customer: _customer,
            time: _time,
        })
        res.json({message: `${_name} is updated successfully`})
    }

    async deleteCustomerInfo(req, res, next) {
        console.log(req.body);
        const _name = req.body.name;

        const room = await RoomM.findOne({name: _name})

        if (!room)
            return res.status(404).json({message: "Not found"})

        await RoomM.findOneAndUpdate({name: _name},{
            status: "Phòng trống",
            customer: "",
            time: 0,
        })
        res.json({message: `${_name} is updated successfully`})
    }
}

module.exports = new RoomController()