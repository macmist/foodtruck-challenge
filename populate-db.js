const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

const mongoose = require('mongoose')
const foodTruckDao = require('./app/dao/FoodTruck')
const config = require('config')

let trucks = []

fs.createReadStream(path.resolve(__dirname, 'assets', 'Mobile_Food_Facility_Permit.csv'))
.pipe(csv.parse({ headers: true }))
.on('error', error => console.error(error))
.on('data', row => {
    if (row.Latitude != 0 && row.Longitude  != 0 && row.Status === 'APPROVED') {
        let truck  = {
            locationId: row.locationid,
            applicant: row.Applicant,
            facilityType: row.FacilityType,
            cnn: row.cnn,
            description: row.LocationDescription,
            address: row.Address,
            blockLot: row.blocklot,
            block: row.block,
            lot: row.lot,
            permit: row.permit,
            items: row.FoodItems,
            x: row.X,
            y: row.Y,
            location: {
                type: 'Point',
                coordinates: [row.Longitude, row.Latitude]
            },
            schedule: row.Schedule,
            daysHours: row.dayshours,
            NOISent: row.NOISent,
        }
        trucks.push(truck)
    }

})
.on('end', rowCount => {
    console.log(`Parsed ${rowCount} rows`);

    mongoose.connect(config.db)
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to: ' + config.db)
        foodTruckDao.insertMany(trucks).then(() => {
            console.log('successfully inserted documents')
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            mongoose.connection.close()
        })
    });
})