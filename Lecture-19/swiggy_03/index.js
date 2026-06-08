const express = require('express');
const app = express();
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurant.routes')
const userRoutes = require('./routes/user.routes')
const cors = require('cors')


// Adds headers: Access-Control-Allow-Origin: *

mongoose.connect('mongodb+srv://samarthvohraindia_db_user:L63bjsfKotl7tdmA@cluster0.ooa8pji.mongodb.net/?appName=Cluster0')
.then(()=>console.log(`DB IS CONNECTED`) )
.catch(()=>console.log(`DB IS NOT CONNECTED`) )

app.use(cors()) //cors
app.use(express.json()); //body parsing middleware

app.get('/' , (req,res)=>{
    res.send("Welcome to root route")
})

restaurantRoutes(app)
userRoutes(app)

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server connected at port: ${PORT}`);
})


// L63bjsfKotl7tdmA
// samarthvohraindia_db_user

// mongodb+srv://samarthvohraindia_db_user:L63bjsfKotl7tdmA@cluster0.ooa8pji.mongodb.net/?appName=Cluster0






