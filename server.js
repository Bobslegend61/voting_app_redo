// require global package
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");


// require local dependencies
const routes = require("./routes/route");
const config = require("./config/config");
let options = require("./passport/passport");

// define app
let app = express();

// define port
const PORT = process.env.PORT || 3000;

// connect to mongoose
mongoose.connect(config.database, { useMongoClient: true });

// connected successuflly to db
mongoose.connection.on("connected", () => {
    console.log("Successfully connected to db");
});

// handle error on connection to db
mongoose.connection.on("error", (err) => {
    console.log("Error connecting to database: "+ err);
})

// ADD MIDDLEWARE
// cors
app.use(cors());
// body-parser
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());
// morgan
app.use(morgan('dev'));
// passport
app.use(passport.initialize());
// routes
app.use("/", routes);

// static dir
app.use(express.static(path.join(__dirname, "public")));



// listen
app.listen(PORT, () => {
    console.log(`App now listening on port ${PORT}`);
});
