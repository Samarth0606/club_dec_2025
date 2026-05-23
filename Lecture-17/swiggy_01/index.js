const express = require('express');
const app = express();
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurant.routes')

mongoose.connect('mongodb+srv://samarthvohraindia_db_user:L63bjsfKotl7tdmA@cluster0.ooa8pji.mongodb.net/?appName=Cluster0')
.then(()=>console.log(`DB IS CONNECTED`) )
.catch(()=>console.log(`DB IS NOT CONNECTED`) )


app.get('/' , (req,res)=>{
    res.send("Welcome to root route")
})

restaurantRoutes(app)

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server connected at port: ${PORT}`);
})


// L63bjsfKotl7tdmA
// samarthvohraindia_db_user

// mongodb+srv://samarthvohraindia_db_user:L63bjsfKotl7tdmA@cluster0.ooa8pji.mongodb.net/?appName=Cluster0






