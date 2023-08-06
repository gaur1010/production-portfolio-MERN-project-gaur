const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

//datenv configuartion 
dotenv.config()

//rest object

const app= express()


//middlewares
app.use(cors());
app.use(express.json());


//routes
app.use("/api/v1/portfolio",require("./routes/portfolioRoute"));

//port
const PORT = process.env.PORT || 8080;


//Listen

app.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT}`);
});