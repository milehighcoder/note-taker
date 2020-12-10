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
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNote = req.body;
    let uniqueID = savedNotes.length.toString();
    newNote.id = uniqueID;
    savedNotes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    console.log("Note saved");
    res.json(savedNotes);
  });
};
