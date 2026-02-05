const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, minlength: 20, maxlength: 60, required: true },
  email: { type: String, unique: true, required: true },
  address: { type: String, maxlength: 400 },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["ADMIN", "USER", "OWNER"],
    default: "USER"
  }
});

module.exports = mongoose.model("User", userSchema);
