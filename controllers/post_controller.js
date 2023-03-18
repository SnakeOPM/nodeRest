const model = require("../models/model");
require("sequelize");

const add_user = async (req, res) => {
  const { newUser } = req.body;
  const { newSummary } = req.body;
  if (!newUser) {
    res.status(418).send({ messadge: "Please provide a username" });
  }
  const instance = await model.users
    .create({
      username: newUser,
      summary: newSummary,
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  res.send({
    messadge: `OK`,
  });
};

module.exports = { add_user };
