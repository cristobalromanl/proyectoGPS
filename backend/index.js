const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
dotenv = require('dotenv')
dotenv.config();
mongoose.set('strictQuery', true);
const options = {
    useNewUrlParser: true,
    autoIndex: true,
    keepAlive: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB, options, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to database 👍🚀");
    }
})


app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`)
})

