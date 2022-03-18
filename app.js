const express = require('express');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27020/booster-seminar', err => {
    if(err){
        console.log('DB Error: ', err.message)
    }else{
        console.log("DB connected")
    }
})
const app = express();

//middleware
app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter)

//error handler
app.use((req, res, next) => {
    res.send("This API is not supported")
})
app.use((err, req, res, next) => {
    if(err && err.message){
        res.send(err.message);
    }
    else res.send("Unknown Error")
})
app.listen(3000, () => console.log("listening on 3000..."))