const { createRestaurant, fetchRestaurant } = require("../controllers/restaurant.controller")



function restaurantRoutes(app){
    // read
    app.get('/api/restaurants' , fetchRestaurant)
    // create
    // app.post('/api/restaurants' , createRestaurantRestaurant)
}

module.exports=restaurantRoutes










