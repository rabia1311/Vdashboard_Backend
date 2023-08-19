const express = require("express");

const router = express.Router();

const {createData}=require("../Controller/data.controller")
router.post("/add",  createData);


module.exports=router
