const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("./routes/StudentRoutes");



const app = express();

app.use(cors());
app.use(express.json());


app.use("/students", router);

mongoose.connect('mongodb://localhost:27017/StudentsManagement').then(()=>{
    console.log('Database connected');
}).then(()=>{
    app.listen(5000, ()=>{
        console.log('server is running');
    });
}).catch((err)=>{console.log(err)});

