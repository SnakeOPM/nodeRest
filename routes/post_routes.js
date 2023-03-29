const express = require("express");
const router = express.Router();
const post_controllers = require("../controllers/post_controller");

/**
 * @swagger
 * /post/new_user:
 *   post:
 *     summary: Creates a new user
 *     description: Creates a new user with a username and summary req newUser and newSummary(optional) in request body
 *     produces:
 *       application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newUser:
 *                 type: string
 *               newSummary:
 *                 type: string
 *           example:
 *             newUser: john_doe
 *             newSummary: i'm guy
 *     responses:
 *       200:
 *         description: OK
 */
router.post("/new_user", post_controllers.add_user);

/**
 * @swagger
 * /post/new_post:
 *   post:
 *     summary: creates new post
 *     description: creates new post, you need to provide an id of user that belongs to this post requires newTitle, newBody, userPostId: int
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newTitle:
 *                 type: string
 *               newBody:
 *                 type: string
 *               userPostId:
 *                 type: string
 *             example:
 *               newTitle: aba
 *               newBody: fgdsfgds
 *               userPostId: 27
 *     responses:
 *       200:
 *         description: OK
 */
router.post("/new_post", post_controllers.add_post);

module.exports = router;
