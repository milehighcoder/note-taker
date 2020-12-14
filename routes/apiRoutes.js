//CONNECTS ROUTES TO NOTES DATA
const path = require("path");
const notes = require("../db/db.json");
const fs = require("fs");
const uniqid = require("uniqid");

//ROUTING
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });

  app.post("/api/notes", (req, res) => {
    req.body.id = uniqid();
    const note = req.body;
    console.log(notes);
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes)
    );
    res.json(note);
  });

  app.delete("/api/notes/:id", function (req, res) {
    const id = req.params.id;
    for (i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        notes.splice(i, 1);
      }
    }
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes)
    );
    res.send(notes);
  });
};
