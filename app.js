const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });
const port = process.env.PORTAPP;
const route_for_get = require("./routes/get_routes");
const route_for_post = require("./routes/post_routes");
const route_for_delete = require("./routes/delete_routes");
const route_for_patch = require("./routes/patch_routes");
const jsonParser = require("./middleware/json_parcer");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swagger = require("./swagger");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Colledge REST API",
      description: "Colledge task lab 3",
      contact: {
        name: "SnakeOPM",
      },
      servers: ["http://localhost:8081"],
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(jsonParser);
app.use("/get", route_for_get);
app.use("/post", route_for_post);
app.use("/delete", route_for_delete);
app.use("/patch", route_for_patch);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
