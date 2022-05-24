let mongoose =  require("mongoose")
let FoodTruck = require("../../app/models/FoodTruck")

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../index')
const should = chai.should()

chai.use(chaiHttp)

describe('FoodTruck API', () => {
    before((done) => {
        FoodTruck.remove({}, (error) => {
            done()
        })
    })
})

describe('/GET Food Trucks', () => {
    it('should return all the food trucks', done => {
        chai.request(server)
            .get('/api/foodtrucks')
            .end((error, result) => {
                result.should.have.status(200)
                result.body.should.be.a('array')
                result.body.length.should.be.gte(0)
                done()
            })
    })
})

describe('/POST Food Trucks', () => {
    it('should create a food truck', done => {
        chai.request(server)
            .post('/api/foodtruck')
            .end((error, result) => {
                result.should.have.status(200)
                result.body.should.be.a('array')
                result.body.length.should.be.gte(0)
                done()
            })
    })
})

describe('/GET Food Truck', () => {
    it('should return one food truck', done => {
        chai.request(server)
            .get('/api/foodtrucks')
            .end((error, result) => {
                result.should.have.status(200)
                result.body.should.be.a('array')
                result.body.length.should.be.gte(0)
                done()
            })
    })
})