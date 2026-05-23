const RestaurantModel = require("../models/Restaurant.model")


async function fetchRestaurant(req,res){
    let allRestaurants = await RestaurantModel.find() //mongoose method - return promise
    return res.status(200).send(allRestaurants)
}
function createRestaurant(req,res){
    // await RestaurantModel.create({}) - req.body - body parsing middleware
}

// findByIdAndUpdate - update
// findByIdAndDelete = delete

module.exports = {fetchRestaurant,createRestaurant}