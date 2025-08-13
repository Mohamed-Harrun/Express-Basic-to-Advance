const express = require('express');
// the express module will be assign to the const express.

// to use
const app = express(); 
//express is a function call  it. it gives a object the app constant.

//Using Body Parser for data conversion
const bodyParser = require('body-parser')

const path =require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded())
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})



//to run a middleware function according to a url-->


app.listen(3000)