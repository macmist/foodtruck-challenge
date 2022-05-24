const foodTruckDao = require('../dao/FoodTruck');

const FoodTruckController = {
    getAll: (req, res) => {
        foodTruckDao.find().then(trucks => {
            return res.status(200).json(trucks)
        }).catch(error => {
            console.log(error)
            return res.status(500).json(error)
        })
    },

    getOne: (req, res) => {
        foodTruckDao.findOne(req.params.id).then(truck  => {
            return res.status(200).json(truck)
        }).catch(error  => {
            console.log(error)
            return res.status(500).json(error)
        })
    },

    findClosest: (req,  res) => {
        if (!req.query.latitude)
            return res.status(400).json({error:  "Latitude is required"})
        if (!req.query.longitude)
            return res.status(400).json({error:  "Longitude is required"})

        foodTruckDao.getClosest(Number(req.query.latitude), Number(req.query.longitude)).then(trucks =>  {
            return res.status(200).json(trucks)
        }).catch(error => {
            console.log(error)
            return res.status(500).json(error)
        })
    },

    create: (req, res) => {
        foodTruckDao.create(req.body).then(truck  => {
            return res.status(200).json(truck)
        }).catch(error  => {
            console.log(error)
            return res.status(500).json(error)
        })
    },

}

module.exports = FoodTruckController