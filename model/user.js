const mongoose = require("mongoose");
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
            bcrypt(userData.password,(err, hash) => {
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
