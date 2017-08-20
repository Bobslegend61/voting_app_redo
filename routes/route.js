// import express
const express = require("express");
const passport = require("passport");

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
           return res.json({
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
});

router.post("/signup", (req,res) => {
    User.signUp(req.body.username.toLowerCase(), req.body.password, (err, doc) => {
        if(err) {
           return res.json({
                success: false,
                message: err
            })
        }
        res.json({
            success: true,
            data: doc
        })
    });
});

router.post("/login", (req, res) => {
    User.logIn(req.body.username.toLowerCase(), req.body.password, (err, doc) => {
        if(err) {
            return res.json({
                success: false,
                message: err
            });
        }

        res.json({
            success: true,
            data: doc
        })
    })
});

router.get("/check", passport.authenticate("jwt", {session: false}), (req, res) => {
    res.send("Okkkkk");
})

module.exports = router;