# foodtruck-challenge

Implementation of the Food Truck Challenge from Microsoft.
It's a simple Node.js API that returns a JSON list of locations.

### Installation
Make sure you have Node and Mongodb installed, then run

```
$ npm install
```

Then add the foodtrucks to the database using

```
$ npm run populate
```

Finally, start the server:
```
$ npm start
```

The server listens on port 3000

### Usage
The main API to use is
```
GET /api/foodtrucks/local?latitude=0&longitude=0
```

Replace latitude and longitude by your current location