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



const posts = [
    {
        title: "Post one",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "King Philippe",
    },
    {
        title: "Post two",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "Barack Obama",
    },
    {
        title: "Post three",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "Nelson Mandela",
    },
];

app.get("/", (req, res) => {
    // Vérifie si le tableau `posts` est vide
    if (posts.length === 0) {
      // Si le tableau est vide, renvoie la vue 'index' avec la variable 'posts' définie sur 'null'
        return res.render("index", { posts: null });
    }
    // Si le tableau `posts` n'est pas vide, renvoie la vue 'index' avec la variable 'posts' contenant les données des posts
    res.render("index", { posts: posts });
});
