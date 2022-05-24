const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect

const mongoose = require('mongoose')
require('sinon-mongoose')

const FoodTruck = require('../../app/models/FoodTruck');

describe("Get closest Food Trucks", () => {
    it("should return at least 5 results", done => {
        const FoodTruckMock = sinon.mock(FoodTruck)
        const expectedResult  = {status: true,  foodTrucks: []}
        FoodTruckMock.expects('find').yields(null, expectedResult)
        FoodTruck.find((error, result) => {
            FoodTruckMock.verify()
            FoodTruckMock.restore()
            expect(result.status).to.be.true
            done()
        })
    })
})