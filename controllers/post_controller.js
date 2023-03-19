const model = require("../models/model");
require("sequelize");

const add_user = async (req, res) => {
  const { newUser } = req.body;
  const { newSummary } = req.body;
  if (!newUser) {
    res.status(418).send({ messadge: "Please provide a username" });
  }
  await model.users
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

const add_post = async (req, res) => {
  let postId; //нужна для изменения её после добавления поста чтобы получить доступ к ней из другой функции
  const { newTitle } = req.body;
  const { newBody } = req.body;
  const { userPostId } = req.body;
  if (!newTitle || !newBody) {
    res.status(418).send({ messadge: "skill issue" }); //проверка на полноту данных
    return;
  }
  await model.users
    .findOne({
      //проверка на существование юзера
      where: { userPostId },
    })
    .catch((err) => console.log(err));
  await model.posts //добавление поста
    .create({
      title: newTitle,
      body: newBody,
    })
    .then((result) => {
      postId = result.id; //тут её перезаписываем
      console.log(result);
    })
    .catch((err) => console.log(err));

  await model.posts_user
    .create({
      post: postId, // а тут она пригодилась
      user: userPostId,
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  res.send({
    messadge: `OK`,
  });
};

module.exports = { add_user, add_post };
