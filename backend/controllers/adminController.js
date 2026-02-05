const User = require("../models/User");
const Store = require("../models/Store");
const Rating = require("../models/Rating");

exports.getDashboardStats = async (req, res) => {
  const users = await User.countDocuments();
  const stores = await Store.countDocuments();
  const ratings = await Rating.countDocuments();

  res.json({ users, stores, ratings });
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

exports.getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.getStores = async (req, res) => {
  const stores = await Store.find();
  res.json(stores);
};
