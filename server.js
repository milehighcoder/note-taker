//REQUIRES EXPRESS
const express = require("express");
//CREATES AN EXPRESS SERVER
const app = express();
//SETS PORT
const PORT = process.env.PORT || 8080;

//DATA PARSING HANDLERS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public")); //CONNECTS "PUBLIC" FOLDER TO SERVER.JS

//ROUTES
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
