const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//connects the public folder to the server.js file. Similar to requiring the routes to the server.
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
