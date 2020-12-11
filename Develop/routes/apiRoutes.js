const path = require("path");
const fs = require("fs");
const notes = require("../db/db");
const uniqid = require("uniqid");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    //read the db.json file at this url
    /*
    fs.readFile(
      path.join(__dirname, "../db/db.json"),
      "utf8",
      (error, data) => {
        error ? console.error(error) : console.log(data);
      }
    );
*/

    res.json(notes);
  });

  app.post("/api/notes", (req, res) => {
    //create a unique id
    let newId = uniqid();

    //create a new note to store in db
    const newNote = {
      title: req.body.title,
      note: req.body.text,
      id: newId,
    };

    console.log(newNote);
    console.log("title is " + newNote.title + " and text is " + newNote.text);

    //push the object with req.body and id to db array
    notes.push(newNote);

    //return the db array
    res.json(notes);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const idDelete = res.body.id;
    console.log(idDelete);

    //find the note in the array
    const idDeleteIndex = notes.findIndex(idDelete);
    console.log(idDeleteIndex);
  });
};
