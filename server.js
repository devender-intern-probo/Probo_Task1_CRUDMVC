const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// a route for home page
app.get("/home", (req, res) => {
  res.json({ message: "NodeJs CRUD Application" });
});

require("./routes/userRoutes")(app);
// app.use("./routes",routes);

// setting port to 8000, & listening for requests http request.
app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});