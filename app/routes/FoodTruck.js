const controller = require('../controller/FoodTruck')

module.exports.foodTruckRouter  = (router) => {
    router.route('/foodtrucks').get(controller.getAll)
}