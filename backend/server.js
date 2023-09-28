const express = require('express');
const app = express()
const cors = require('cors')
const productRoute = require('./Routes/productRoutes')
const userRoute = require('./Routes/userRoute')
require('dotenv').config()



app.use(express.json())
app.use(cors())
app.use('/api/product',productRoute)
app.use('/api/user',userRoute)




app.listen(process.env.PORT,()=>{
    console.log('Connected to server')
})