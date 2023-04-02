const express = require("express");
const router = express.Router();
const patch_controllers = require("../controllers/patch_controller");

/**
 * @swagger
 * /patch/post:
 *   patch:
 *     summary: updates post title or post
 *     description: udpates data of a post. Provide post_id of a post and new_title or new_body
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
router.patch("/post", patch_controllers.update_post);

module.exports = router;
