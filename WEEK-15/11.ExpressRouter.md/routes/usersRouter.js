const express = require("express");
const router = express.Router();

// Route pour obtenir tous les utilisateurs
router.get("/", (req, res) => {
    res.send("Get all users");
});

// Route pour obtenir un utilisateur par ID
router.get("/:id", (req, res) => {
    res.send(`Get user with ID: ${req.params.id}`);
});

// Route pour créer un nouvel utilisateur
router.post("/", (req, res) => {
    res.send("Create a new user");
});

// Route pour mettre à jour un utilisateur par ID
router.put("/:id", (req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
});

// Route pour supprimer un utilisateur par ID
router.delete("/:id", (req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
});

module.exports = router;
