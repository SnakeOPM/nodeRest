const express = require("express");
const router = express.Router();
const get_controllers = require("../controllers/get_controller");

router.get("/hru", get_controllers.get_hru);

module.exports = router;
