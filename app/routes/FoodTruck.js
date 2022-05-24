const controller = require('../controller/FoodTruck')

module.exports.foodTruckRouter  = (router) => {
    router.route('/foodtrucks').get(controller.getAll)
    router.route('/foodtrucks/local').get(controller.findClosest)
}