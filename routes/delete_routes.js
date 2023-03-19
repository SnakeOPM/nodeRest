const express = require("express");
const router = express.Router();
const delete_controllers = require("../controllers/delete_controller");

/**
 * @swagger
 * /delete/post:
 *   delete:
 *     summary: delete a post
 *     description: deteletes a post by id
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.delete("/post", delete_controllers.deletePost);

module.exports = router;
