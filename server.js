// require global package
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");


// require local dependencies
const routes = require("./routes/route");

// define app
let app = express();

// define port
const PORT = process.env.PORT || 3000;

// add middleware
app.use("/", routes);

// static dir
app.use(express.static(path.join(__dirname, "public")));


// listen
app.listen(PORT, () => {
    console.log(`App now listening on port ${PORT}`);
});
