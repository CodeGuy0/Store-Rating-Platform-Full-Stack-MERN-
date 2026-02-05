const Store = require("../models/Store");
const Rating = require("../models/Rating");

exports.getAllStores = async (req, res) => {
  const stores = await Store.find();

  const storesWithRating = await Promise.all(
    stores.map(async (store) => {
      const ratings = await Rating.find({ store: store._id });
      const avgRating =
        ratings.reduce((a, b) => a + b.rating, 0) / (ratings.length || 1);

      return { ...store._doc, avgRating: avgRating.toFixed(1) };
    })
  );

  res.json(storesWithRating);
};
