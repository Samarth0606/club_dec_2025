const express = require('express') //function
const app = express() //object - entire application

// apis that we are creating
app.get('/', (req, res) => {
    res.send('Code baithak')
})

app.get('/career' , (req,res)=>{
    res.send('No Jobs Available')
})

const PORT = 8000; //5000,5050,8000,8080
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})


// HTTP methods
// GET, POST, PUT, PATCH, DELETE

