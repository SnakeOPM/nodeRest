const model = require("../models/model");
require("sequelize");

const update_post = async (req, res) => {
  const { post_id } = req.body;
  const { new_title } = req.body;
  const { new_body } = req.body;
  if (new_title) {
    await model.posts
      .update({ title: new_title }, { where: { id: post_id } })
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err);
        res
          .status(418)
          .send({ messadge: "uncorrect id or smth idk, you're f*cked up" });
      });
    res.send({
      messadge: "OK",
    });
  }
  if (new_body) {
    await model.posts
      .update({ title: new_body }, { where: { id: post_id } })
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err);
        res
          .status(418)
          .send({ messadge: "uncorrect id or smth idk, you're f*cked up" });
      });
    res.send({
      messadge: "OK",
    });
  }
};

module.exports = { update_post };
