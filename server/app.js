const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const publicRouter = require("../router/publicRouter");
const adminRouter = require("../router/adminRouter");
const privateRouter = require("../router/privateRouter");
const CORS = require("../middleware/CORS");

app.use(CORS);
app.get("/routes", (req, res) => {
  return res.status(200).send({"routes: ": app._router.stack});
});
app.use("/public-api", publicRouter);
app.use("/admin-api", adminRouter);
app.use("/private-api", privateRouter);
module.exports = app;
