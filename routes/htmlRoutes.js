const path = require("path");

//ROUTING
module.exports = (app) => {
  //GET REQUESTS
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  //DEFAULTS TO HOME PAGE
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
