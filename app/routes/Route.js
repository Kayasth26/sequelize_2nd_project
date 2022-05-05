let express = require("express");
let router = express.Router();

const userRoutes = require("../routes/router/userRoute");
const addressRoutes = require("./router/addressRoute");

router.use("/", userRoutes);
router.use("/", addressRoutes);

module.exports = router;