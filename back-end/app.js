// const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
const newsRouter = require('./Routes/newRoute');
const config = require('./Config/config');


// const er = new EventRegistry();

// Express Server
const app = express();


// Middleware to parse JSON requests
app.use(express.json());
const port = config.PORT || 5000


// ROUTERS

// Checking The Health of My API
app.get('/api/test', (req,res)=>{
    res.send("Health check, API is working !!");
});
  

// News Endpoint
app.use('/v1/api', newsRouter);



app.listen(port, () => {
    console.log(`Backend Server Runing at Localhost${port}`);
});
