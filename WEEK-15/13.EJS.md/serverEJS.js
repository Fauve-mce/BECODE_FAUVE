const express = require("express");
const path = require("path");
const app = express();

// Configurer EJS en tant que moteur de vue
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route pour la page d'accueil
app.get("/", (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.render("index", { time: currentTime });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
