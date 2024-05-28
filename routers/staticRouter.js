const express = require("express");
const staticRouter = express.Router();
const urlModel = require("../models/url.model");

// home
staticRouter.get("/", async (req, res) => {
  const data = await urlModel.find({});
  return res.render("home", {
    data: data,
  });
});

// register
staticRouter.get("/register", async (req, res) => {
  return res.render("register");
});

// login
staticRouter.get("/login", async (req, res) => {
  return res.render("login");
});

module.exports = staticRouter;
