const bcrypt = require("bcrypt");
const saltRound = 10;

module.exports = {
    createHash: (password, callback) => {
        bcrypt.hash(password, saltRound, (err, hash) => {
            if(err) {
                return callback(err)
            }
            return callback(null, hash);
        });
    },
    comfirmPassword: (password, hash, callback) => {
        bcrypt.compare(password, hash, (err, res) => {
            if(err) {
                return callback("Error comparing password");
            }

            if(res) {
                return callback(null, res)
            }else {
                return callback("Incorrect credentials");
            }
        })
    }
}



