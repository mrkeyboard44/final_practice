const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const site = require("../final_practice/createsite")
const { database } = require("./database");
const fs = require('fs');



// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});

app.post("/", site.create )

app.get("/homepage", (req, res) => {
  res.render("homepage", { user: database[0]})
})

app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
