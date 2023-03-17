const express = require("express");
const app = express();
const port = 8081;
const route_for_get = require("./routes/get_routes");
const jsonParser = require("./middleware/json_parcer");

app.use(jsonParser);
app.use("/get", route_for_get);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
