const router = require("express").Router();
const Store = require("../models/Store");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const stores = await Store.find();
  res.json(stores);
});

module.exports = router;
