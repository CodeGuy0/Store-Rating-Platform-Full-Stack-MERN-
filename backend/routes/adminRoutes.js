const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const admin = require("../controllers/adminController");

router.get("/dashboard", auth, role("ADMIN"), admin.getDashboardStats);
router.post("/user", auth, role("ADMIN"), admin.createUser);
router.get("/users", auth, role("ADMIN"), admin.getUsers);
router.get("/stores", auth, role("ADMIN"), admin.getStores);

module.exports = router;
