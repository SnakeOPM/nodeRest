const express = require("express");
const router = express.Router();
const get_controllers = require("../controllers/get_controller");

/**
 * @swagger
 * /get/hru:
 *   get:
 *     summary: get a hru
 *     description: a good hru
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/hru", get_controllers.get_hru);

/**
 * @swagger
 * /get/all_users:
 *   get:
 *     summary: get all users from database
 *     description: get users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/all_users", get_controllers.get_all_users);

/**
 * @swagger
 * /get/all_posts:
 *   get:
 *     summary: get all posts from database
 *     description: get posts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/all_posts", get_controllers.get_all_posts);

module.exports = router;
