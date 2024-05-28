const userModel = require("../models/user.model");

module.exports.createUser = async (req, res) => {
  try {
    console.log("Creating User");
    const reqData = req.body;
    console.log("---body---", reqData);
    if (!reqData.name) throw new Error("Required Parameters!");
    const payload = {
      name: reqData.name,
      email: reqData.email,
      password: reqData.password,
    };
    const record = await userModel.create(payload);
    console.log(record);
    return res.redirect("/");
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

module.exports.userLogin = async (req, res) => {
  try {
    console.log("user login");
    const reqData = req.body;
    console.log("---body---", reqData);
    const payload = {
      email: reqData.email,
      password: reqData.password,
    };
    const record = await userModel.findOne(payload);
    if (!record) {
      return res.render("login", {
        message: "invalid user!",
      });
    }
    console.log("-----", record);
    return res.redirect("/");
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};

module.exports.getAllUser = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports.getOneUser = async (req, res) => {
  try {
  } catch (err) {}
};
