const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Get all comments");
});

router.get("/:id", (req, res) => {
    res.send(`Get comment with ID: ${req.params.id}`);
});

router.post("/", (req, res) => {
    res.send("Create a new comment");
});

router.put("/:id", (req, res) => {
    res.send(`Update comment with ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
    res.send(`Delete comment with ID: ${req.params.id}`);
});

module.exports = router;
