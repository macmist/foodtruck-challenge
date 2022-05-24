const  mongoose = require("mongoose");
const {mongo} = require("mongoose");

const FoodTruckSchema  = mongoose.Schema({
    applicant: String,
    locationId: {type: String, select: false},
    facilityType: String,
    cnn:  {type: String, select: false},
    description: String,
    address: String,
    blockLot: {type: String, select: false},
    block: {type: String, select: false},
    lot: {type: String, select: false},
    permit: {type: String, select: false},
    items: {type: String, select: false},
    schedule: String,
    daysHours: String,
    NOISent: {type: String, select: false},
    x: Number,
    y: Number,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, {timestamps: true});
FoodTruckSchema.index({location:  '2dsphere'})
const FoodTruckModel = mongoose.model('FoodTruck', FoodTruckSchema);

module.exports  = FoodTruckModel;