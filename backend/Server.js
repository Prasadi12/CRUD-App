const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()
const routes = require('./routes/StudentRoute')
const PORT = process.env.PORT | 5000;
const app = express();

app.use(express.json())
app.use(cors())
app.use(routes)

// app.get('/', (req,res) => {
//     res.send('Hello Prasadi..!')
// })

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(`Connected to theMongoDB`)
    app.listen(PORT, ()=>{
        console.log(`NodeApi is running on PORT ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})

