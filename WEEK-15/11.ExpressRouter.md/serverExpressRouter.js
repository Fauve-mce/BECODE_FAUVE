const express = require("express");
const app = express();
const usersRoutes = require("./routes/usersRouter");
const postsRoutes = require("./routes/postsRouter");
const commentsRoutes = require("./routes/commentsRouter");

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.use("/comments", commentsRoutes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
