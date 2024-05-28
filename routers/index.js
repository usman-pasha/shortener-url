const urlRouter = require("./url");
const staticRouter = require("./staticRouter");
const userRouter = require("./user");

const routes = (app) => {
  app.use("/", staticRouter);
  app.use("/url", urlRouter);
  app.use("/user", userRouter);
};

module.exports = routes;
