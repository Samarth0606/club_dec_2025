const { createRestaurant, fetchRestaurant, updateRestaurant, deleteRestaurant } = require("../controllers/restaurant.controller")
const verify = require("../middleware/verify")


function restaurantRoutes(app){
    // read
    app.get('/api/restaurants' , verify ,fetchRestaurant)
    // create
    app.post('/api/restaurants' , verify, createRestaurant)
    // update
    app.patch('/api/restaurants/:id' , verify, updateRestaurant )
    // delete
    app.delete('/api/restaurants/:id' , verify,  deleteRestaurant)
}

module.exports=restaurantRoutes










