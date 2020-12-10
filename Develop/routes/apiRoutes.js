//CONNECTS ROUTES TO NOTES DATA
const notesData = require("../db/db.json");
const fs = require("fs");

//ROUTING
module.exports = (app) => {
  //GET REQUEST
  app.get("/api/notes", (req, res) => res.json(notesData));

  //POST REQUEST
  app.post("/api/notes", (req, res) => {
    notesData.push(req.body);
    res.json("Saved");
  });
};
