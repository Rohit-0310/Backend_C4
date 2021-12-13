const express = require("express");

const {register, login} = require("./controllers/auth.controller")
const movieController = require("./controllers/movie.controller");

const screenController = require("./controllers/screen.controller");
const seatController = require("./controllers/seat.controller");
const showController = require("./controllers/show.controller");
const threatreController = require("./controllers/threatre.controller");


const app = express();
app.use(express.json());

app.use("/register", register);
app.use("/login", login)

app.use("/movies", movieController);
app.use("/screens", screenController);
app.use("/seats", seatController);
app.use("/shows", showController);
app.use("/threatres", threatreController);


module.exports = app