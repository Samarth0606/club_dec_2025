const RestaurantModel = require("../models/Restaurant.model")


async function fetchRestaurant(req,res){
    try{
        let allRestaurants = await RestaurantModel.find() //mongoose method - return promise
        return res.status(200).send(allRestaurants)
    }
    catch(err){
        return res.status(500).json("error while reading data")
    }
}
async function createRestaurant(req,res){
    try{
        let {name,rating,cuisines,deliveryTime,imageUrl} = req.body; //by default undeinf
        let newRest = await RestaurantModel.create({name,rating,cuisines,deliveryTime,imageUrl})
        return res.status(201).json(newRest)
    }
    catch(err){
        return res.status(500).json("error while create data")
    }
}

async function updateRestaurant(req,res){
    try{
        let {id} = req.params;
        let updatedRest = await RestaurantModel.findByIdAndUpdate(id , req.body, {new:true});
        return res.status(200).json(updatedRest)
    }
    catch(err){
        return res.status(500).json("error while updating data")
    }
}

async function deleteRestaurant(req,res){
    try{
        let {id} = req.params;
        await RestaurantModel.findByIdAndDelete(id);
        return res.status(200).json("element deleted successfully")
    }
    catch(err){
        return res.status(500).json("error while deleting data")
    }
}

// findByIdAndUpdate - update
// findByIdAndDelete = delete

module.exports = {fetchRestaurant,createRestaurant,updateRestaurant,deleteRestaurant}