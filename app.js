const express = require('express');
const cors=require('cors')
const app = express();
const pool=require("./config/database")

//Routes Api
const index=require('./routes/index');
const productRoute=require('./routes/productroutes')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.json({type:'application/vnd.api+json'}));
app.use(cors());
app.use(index);
app.use('/api/', productRoute);


module.exports = app;
