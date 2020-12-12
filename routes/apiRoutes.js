const path = require("path");
const fs = require("fs");
const notes = require("../db/db");
const uniqid = require("uniqid");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    //return the notes db array
    res.json(notes);
  });

  app.post("/api/notes", (req, res) => {
    //create a unique id
    let newId = uniqid();

    //create a new note object to store in notes db
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: newId,
    };

    //push the object with req.body and id to db array
    notes.push(newNote);

    //return the notes db array
    res.json(notes);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const idDelete = req.params.id;

    //find the note object to delete in the note array
    const idDeleteIndex = notes.findIndex((notes) => notes.id === idDelete);

    //remove the indicated note object from notes array
    notes.splice(idDeleteIndex, 1);

    //return the notes db array
    res.json(notes);
  });
};
