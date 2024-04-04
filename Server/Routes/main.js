const express = require("express");
const router = express.Router();


router.get("/", (req,res)=>{
    const locals = {title:"Home", descriptions:"This is a blog"}
    res.render("index",locals)});


module.exports = router;