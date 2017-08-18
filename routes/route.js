// import express
const express = require("express");

// define router
let router = express.Router();

// user model
let User = require("../model/user");
// topic model
let Topic = require("../model/topic");

router.get("/getalltopics", (req, res) => {
    Topic.getAllTopics((err, doc) => {
        // send error message if any
        if(err) {
            res.json({
                success: false,
                message: err
            });
        }
        // successfull
        res.json({
            success: true,
            data: doc
        });
    });
})

module.exports = router;