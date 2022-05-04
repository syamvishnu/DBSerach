import express from "express"
import mongoose from "mongoose"
import  boduParse from "body-parser"
import cors from  "cors"
import path from "path"
import bodyParser from "body-parser"
import sdrRoute from "./routes/sdr.js";

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/sdr",{ useNewUrlParser: true, useUnifiedTopology: true  })


app.use("/sdr", sdrRoute );



app.listen(port, function(){
    console.log("Server is running on Port 3001");
})
