const config = require("../config/config");
let ExtractJwt = require("passport-jwt").ExtractJwt;


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = config.secret;

module.exports = opts;
