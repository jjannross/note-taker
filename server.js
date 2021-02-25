const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const displayRoutes = require("./Develop/routes/displayRoute.js");
const apiRoutes = require("./Develop/routes/apiRoute.js");
app.use(displayRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log("listening on PORT " + PORT);
});
