const express = require('express');
const categoryRoute = require('./route/category');
const eventRoute = require('./route/eventRoute');
const userRoute = require('./route/userRoute');
const emailVerif = require('./route/emailVerif');
const relaiRoute = require('./route/relai');
const postRoute = require('./route/post');
const indexRoute = require('./route/index');
const articleRoute = require('./route/articleRoute');
const bodyparser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;
const app = express();

const connectionUrl = "mongodb+srv://Youness:tizi1998@cluster0-qmstx.mongodb.net/test?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
    .connect(connectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(() => {
        console.log("Connection failed!");
    });





app.use(cors());
app.use(logger('dev'));

app.use(express.json());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use('/uploads',express.static('uploads'));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
app.use(userRoute);
app.use(eventRoute);
app.use(emailVerif);
app.use(relaiRoute);
app.use(categoryRoute);
app.use(postRoute);
app.use(indexRoute);
app.use(articleRoute);
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});
