const express = require("express");

const router = express.Router();

const {createData,getData}=require("../Controller/data.controller")
router.post("/add",  createData);
router.get("/get",getData);

module.exports=router
