const model = require("../models/model");
require("sequelize");

const deletePost = async (req, res) => {
  const { delId } = req.body;
  await model.posts
    .findOne({
      where: { id: delId },
    })
    .catch((err) => {
      console.log(err);
      res.status(418).send({ messadge: "SEND NUMBER PLEASE." });
    });
  await model.posts
    .destroy({
      where: { id: delId },
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  res.send({
    messadge: "deleted",
  });
};

module.exports = { deletePost };
