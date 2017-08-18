const bcrypt = require("bcrypt");
const saltRound = 10;

module.exports = (password, callback) => {
    bcrypt.hash(password, saltRound, (err, hash) => {
        if(err) {
            return callback(err)
        }
        return callback(null, hash);
    });
}