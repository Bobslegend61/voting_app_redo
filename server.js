// require global package
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");


// require local dependencies
const routes = require("./routes/route");
const config = require("./config/config");

// define app
let app = express();

// define port
const PORT = process.env.PORT || 3000;

// connect to mongoose
mongoose.connect(config.database);

// connected successuflly to db
mongoose.connection.on("connected", () => {
    console.log("Successfully connected to db");
})

// ADD MIDDLEWARE
app.use("/", routes);
// cors
app.use(cors());
// body-parser
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());
// morgan
app.use(morgan('dev'))

// static dir
app.use(express.static(path.join(__dirname, "public")));



// listen
app.listen(PORT, () => {
    console.log(`App now listening on port ${PORT}`);
});
