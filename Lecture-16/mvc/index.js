const express = require('express')
const app = express()
const blog = require('./routes/blog')



blog(app);


const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})