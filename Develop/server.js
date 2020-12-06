var express = require("express");
var app = express();

// set initial port
var PORT = 8080; //process.env.PORT ||

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: http://localhost:" + PORT);
});
