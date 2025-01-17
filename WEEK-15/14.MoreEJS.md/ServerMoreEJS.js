const express = require("express");
const app = express();
const path = require("path");

// Définir le moteur de vue comme EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route principale
app.get("/", (req, res) => {
  res.render("index"); 
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
