require("dotenv").config({ path: "../.env" });
const Sequelize = require("sequelize");
console.log(process.env.DB_NAME);
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);

const posts = sequelize.define(
  "posts",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: Sequelize.STRING(140),
    body: Sequelize.TEXT,
    created: Sequelize.DATE,
  },
  {
    tableName: "posts", // specify the name of the existing table
    timestamps: false, // turn off Sequelize's timestamp fields
  }
);

const users = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: Sequelize.STRING(50),
    summary: Sequelize.STRING(100),
  },
  {
    tableName: "users", // specify the name of the existing table
    timestamps: false, // turn off Sequelize's timestamp fields
  }
);

const posts_user = sequelize.define(
  "posts_users",
  {
    post: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: "posts",
        key: "id",
      },
    },
    user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    tableName: "posts_users", // specify the name of the existing table
    timestamps: false, // turn off Sequelize's timestamp fields
  }
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tables synced successfully.");
  })
  .catch((err) => {
    console.log("Error syncing tables:", err);
  });

module.exports = { sequelize, posts, users, posts_user };
