const Rating = require("../models/Rating");

exports.submitRating = async (req, res) => {
  const { storeId, rating } = req.body;

  const existing = await Rating.findOne({
    store: storeId,
    user: req.user.id
  });

  if (existing) {
    existing.rating = rating;
    await existing.save();
    return res.json(existing);
  }

  const newRating = await Rating.create({
    store: storeId,
    user: req.user.id,
    rating
  });

  res.json(newRating);
};
