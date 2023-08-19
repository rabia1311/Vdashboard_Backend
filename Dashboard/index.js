const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;



const path = require ("path");


const DataRouter=require("../Dashboard/Routes/data.route");

const mongoDB = require("./db");
const { collection } = require("./Models/Datamodel");
mongoDB();
app.use(cors());
app.use(bodyParser.json());


app.use("/dashboard",DataRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });