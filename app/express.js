const express = require('express')
const router  =  express.Router()

const FoodTruckRouter = require('./routes/FoodTruck')


FoodTruckRouter.foodTruckRouter(router);

module.exports = router;