const express = require("express");

const Show = require("../models/show.model");

const authenticate = require("../middlewares/authenticate");


const router = express.Router();

router.post("/",authenticate, async (req, res) => {
  try {
    const movie = req.movie;
    const screen = req.screen;
    const show = await Show.create({
        timing: req.body.timing,
        total_seats: req.body.total_seats,
        movie: movie.movie._id,
        screen: screen.screen._id,
    });

    return res.status(201).json({ show });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
}
);

router.get("/", async (req, res) => {
  const shows = await Show.find().lean().exec();

  return res.send(shows);
});

module.exports = router;
