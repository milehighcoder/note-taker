//CONNECTS ROUTES TO NOTES DATA
const notesData = require("../db/db.json");
const fs = require("fs");

//ROUTING
module.exports = (app) => {
  function writeToDB(notes) {
    notes = JSON.stringify(notes);
    console.log(notes);
    fs.writeFileSync("./db/db.json", notes, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
  //GET REQUEST
  app.get("/api/notes", (req, res) => res.json(notesData));

  //POST REQUEST
  app.post("/api/notes", (req, res) => {
    if (notesData.length == 0) {
      req.body.id = "0";
    } else {
      req.body.id = JSON.stringify(
        JSON.parse(notesData[notesData.length - 1].id) + 1
      );
    }
    console.log("Note" + " #" + req.body.id + " Saved");
    notesData.push(req.body);
    writeToDB(notesData);
    res.json(req.body);
  });
};
