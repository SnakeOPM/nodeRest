const express = require("express");
const router = express.Router();
const post_controllers = require("../controllers/post_controller");

/**
 * @swagger
 * /post/new_user:
 *   post:
 *     summary: creates new user
 *     description: creates new user with username
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.post("/new_user", post_controllers.add_user);

/**
 * @swagger
 * /post/new_user:
 *   post:
 *     summary: creates new post
 *     description: creates new post WARNING you need to provide an id of user that belongs to this post
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.post("/new_post", post_controllers.add_post);

module.exports = router;
