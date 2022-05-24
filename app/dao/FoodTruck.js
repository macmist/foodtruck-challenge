const FoodTruck = require('../models/FoodTruck');


const FoodTruckDao = {
    find: (query)  =>  {
        return FoodTruck.find(query).exec()
    },
    findOne: (truckId) => {
        return FoodTruck.findOne({_id: truckId}).exec()
    },
    create:  (newTruck)  => {
        return FoodTruck.create(newTruck)
    },
    insertMany: (trucks) => {
        return FoodTruck.insertMany(trucks)
    },
    getClosest: (latitude, longitude) => {
        return FoodTruck.aggregate([{
            $geoNear: {
                near: { type: "Point", coordinates: [longitude, latitude],
                spherical: true}
            }
        }]).exec()
    }
}

module.exports = FoodTruckDao