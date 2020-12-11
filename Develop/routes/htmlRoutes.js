const path = require("path");

module.exports = function (app) {
  console.log("is this thing even working? yes, yes it is...kinda");

  //get notes
  app.get("/notes", (req, res) => {
    console.log(path.join(__dirname, "../public/notes.html"));
    console.log("apihtml app get /notes");

    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  //any other path leads to index page
  app.get("/", (req, res) => {
    console.log(path.join(__dirname, "../public/index.html"));
    console.log("apihtml get /");

    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
