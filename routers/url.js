const express = require("express");
const urlRouter = express.Router();
const urlController = require("../controllers/url");

urlRouter.route("/").post(urlController.generateShortUrl);
urlRouter.route("/:shortId").get(urlController.getShortUrl);
urlRouter.route("/analytics/:shortId").get(urlController.getAnalyticsShortUrl);

module.exports = urlRouter;
