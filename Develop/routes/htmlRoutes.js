const path = require("path");

module.exports = function (app) {
  //get notes
  app.get("/notes", function (req, res) {
    //res.send("this is a test for notes");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
