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
                distanceField: 'distance',
                near: { type: "Point", coordinates: [longitude, latitude]},
                spherical: true
            }},
            {$sort: {distance: -1}},
            {$project:  {distance: 1, facilityType: 1, description:  1, items: 1, schedule: 1}}
        ]).exec()
    }
}

module.exports = FoodTruckDao