const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });
const port = 8081;
const route_for_get = require("./routes/get_routes");
const route_for_post = require("./routes/post_routes");
const jsonParser = require("./middleware/json_parcer");

app.use(jsonParser);
app.use("/get", route_for_get);
app.use("/post", route_for_post);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
