const model = require("../models/model");
require("sequelize");

const get_hru = (req, res) => {
  const { smachno } = req.body;
  res.status(200).send({
    hru: "хрю",
    smachno: smachno,
  });
};

const get_all_users = async (req, res) => {
  let userObject;
  await model.users.findAll().then((finded) => {
    userObject = finded.map((useer) => useer.toJSON());
  });
  res.status(200).send(userObject);
};

const get_all_posts = async (req, res) => {
  let postsObject;
  await model.posts.findAll().then((finded) => {
    postsObject = finded.map((useer) => useer.toJSON());
  });
  res.status(200).send(postsObject);
};

module.exports = { get_hru, get_all_users, get_all_posts };
