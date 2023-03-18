const express = require("express");
const router = express.Router();
const get_controllers = require("../controllers/get_controller");

router.get("/hru", get_controllers.get_hru);
router.get("/all_users", get_controllers.get_all_users);
router.get("/all_posts", get_controllers.get_all_posts);

module.exports = router;
