const express = require("express");
const router = express.Router();
const post_controllers = require("../controllers/post_controller");

router.post("/new_user", post_controllers.add_user);
router.post("/new_post", post_controllers.add_post);

module.exports = router;
