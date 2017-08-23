// import express
const express = require("express");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;

let opts = require("../passport/passport");
// define router
let router = express.Router();

// user model
let User = require("../model/user");
// topic model
let Topic = require("../model/topic");

// use passport
passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({username: jwt_payload.username}, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
}));


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

// single topic
router.post("/getsingletopic", (req, res) => {
    Topic.getSingleTopic(req.body.username.toLowerCase(), req.body.topic, (err, doc) => {
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
})

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

router.post("/createpoll", passport.authenticate("jwt", {session: false}), (req, res) => {
    let topicData = {
        title: req.body.title,
        info: req.body.info ? req.body.info : null,
        date: Date.now(),
        options: req.body.options.split(",")
    }
    Topic.createPoll(req.body.username.toLowerCase(), topicData, (err, doc) => {
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
    })
});

router.post("/comment", (req, res) => {
    let data = {
        username: req.body.username.toLowerCase(),
        name: req.body.name,
        comment: req.body.comment,
        topic: req.body.topic
    }
    // Topic model
    Topic.onComment(data, (err, doc) => {
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

router.post("/add", passport.authenticate("jwt", {session: false}), (req, res) => {
    let data = {
        username: req.body.username.toLowerCase(),
        options: req.body.options.split(","),
        topic: req.body.topic
    }

    Topic.onAdd(data, (err, doc) => {
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
})

router.post("/vote", passport.authenticate("jwt", {session: false}), (req, res) => {
    let data = {
        username: req.body.username.toLowerCase(),
        topic: req.body.topic,
        voted: req.body.voted
    }

    Topic.onVote(data, (err, doc) => {
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
})

router.get("/profile/:username", passport.authenticate("jwt", {session: false}), (req, res) => {
    Topic.getProfile(req.user.username.toLowerCase(), (err, profile) => {
        if(err) {
            return res.json({
                success: false,
                message: err
            })
        }

        res.json({
            success: true,
            data: profile
        })
    })
});

router.delete("/delete/:username", passport.authenticate("jwt", {session: false}), (req, res) => {
    let data = { 
        username: req.param.username.toLowerCase(),
        topic: req.query.poll
    }
})

module.exports = router;