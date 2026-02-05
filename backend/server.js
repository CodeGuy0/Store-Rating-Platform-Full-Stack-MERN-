require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/stores", require("./routes/storeRoutes"));
app.use("/api/ratings", require("./routes/ratingRoutes"));

app.listen(5000, () => console.log("Backend running on port 5000"));
