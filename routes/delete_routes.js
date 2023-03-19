const express = require("express");
const router = express.Router();
const delete_controllers = require("../controllers/delete_controller");

router.delete("/post", delete_controllers.deletePost);

module.exports = router;
