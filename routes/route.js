// import express
const express = require("express");

// define router
let router = express.Router()

router.get("/home", (req, res) => {
    res.send("Working")
})

module.exports = router;