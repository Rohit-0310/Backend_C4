const express = require("express");

const Threatre = require("../models/threatre.model");

const authenticate = require("../middlewares/authenticate");

const authorise = require("../middlewares/authorise");

const router = express.Router();

router.post(
  "/",
  authenticate,
  async (req, res) => {
  try {

    const threatre = await Threatre.create({
        name: req.body.name,
        location: req.body.location,
    });

    return res.status(201).json({ threatre });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
}
);

router.get("/", async (req, res) => {
  const threatres = await Threatre.find().lean().exec();

  return res.send(threatres);
});

module.exports = router;
