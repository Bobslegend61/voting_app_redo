const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const passport = require("passport");
let JwtStrategy = require("passport-jwt").Strategy;
let options = require("../passport/passport");

const config = require("../config/config");
const bcrypt = require("../bcrypt/bcrypt");

// define schema
userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// define model
let User = module.exports = mongoose.model("user", userSchema);

// METHODS 
// new user
module.exports.signUp = (username, password, callback) => {
    // check if username exists
    User.find({username: username}, (err, doc) => {
        // handle error
        if (err) {
            return callback("A error occured: "+err);
        }
        // if usernme exist
        if (doc.length > 0) {
            return callback("Username already exists. Try another one");
        }else {
            // proceed to encrypt and register user
            userData = {
                username: username,
                password: password
            }
            // encryption of password
            bcrypt.createHash(userData.password,(err, hash) => {
                if(err) {
                    return callback("Error hashing password");
                }
                // set hash
                userData.password = hash;
                newUser = new User(userData);
                newUser.save(callback);
            })
        }
    })
}

module.exports.logIn = (username, password, callback) => {
    User.findOne({username: username}, (err, user) => {
        if(err) {
            return callback("Error getting user");
        }

        if(user) {
            // compare password
            bcrypt.comfirmPassword(password, user.password, (err, done) => {
                if(err) {
                    return callback(err);
                }
                // sign token
                let token = jwt.sign({username: username}, config.secret);
                callback(null, {token: token, username: user.username});
            });
        }else {
            callback("Incorrect credentials");
        }
    })
}

