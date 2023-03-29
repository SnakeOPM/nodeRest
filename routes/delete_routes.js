const express = require("express");
const router = express.Router();
const delete_controllers = require("../controllers/delete_controller");

/**
 * @swagger
 * /delete/post:
 *   delete:
 *     summary: delete a post
 *     description: deteletes a post by id req delID(int)
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: OK
 */

router.delete("/post", delete_controllers.deletePost);

module.exports = router;
