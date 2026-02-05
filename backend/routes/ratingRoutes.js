const express = require("express");
const router = express.Router();
const Rating = require("../models/Rating");

router.post("/", async (req, res) => {
  try {
    const rating = new Rating({
      storeId: req.body.storeId,
      rating: req.body.rating
    });

    await rating.save();
    res.status(201).json({ message: "Rating saved", rating });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
