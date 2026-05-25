const { createRestaurant, fetchRestaurant, updateRestaurant, deleteRestaurant } = require("../controllers/restaurant.controller")



function restaurantRoutes(app){
    // read
    app.get('/api/restaurants' , fetchRestaurant)
    // create
    app.post('/api/restaurants' , createRestaurant)
    // update
    app.patch('/api/restaurants/:id' , updateRestaurant )
    // delete
    app.delete('/api/restaurants/:id' , deleteRestaurant)
}

module.exports=restaurantRoutes










