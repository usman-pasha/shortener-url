const urlModel = require("../models/url.model");
const shortid = require("shortid");

module.exports.generateShortUrl = async (req, res) => {
  try {
    console.log("START:Creating ShortUrl");
    const reqData = req.body;
    if (!reqData.redirectUrl) throw new Error("Required Parameters!");
    const shortId = shortid();
    const payload = {
      shortId: shortId,
      redirectUrl: reqData.redirectUrl,
    };
    const record = await urlModel.create(payload);
    // return res.send({
    //   message: "Successfully Short Url Created!",
    //   success: true,
    //   data: record,
    // });
    return res.render("home", {
      id: record.shortId,
    });
  } catch (err) {
    return res.render("home", {
      message: err.message,
    });
  }
};

module.exports.getShortUrl = async (req, res) => {
  try {
    console.log("START:Get ShortUrl");
    const param = req.params;
    const condition = {
      shortId: param.shortId,
    };
    const updateData = {
      $push: { visitHistory: { timestamp: Date.now() } },
    };
    const record = await urlModel.findOneAndUpdate(condition, updateData, {
      new: true,
    });
    console.log(record);
    return res.redirect(record.redirectUrl);
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};
module.exports.getAnalyticsShortUrl = async (req, res) => {
  try {
    console.log("START:Get Analytics ShortUrl");
    const param = req.params;
    const condition = {
      shortId: param.shortId,
    };
    const record = await urlModel.findOne(condition);
    const data = {
      totalClicks: record.visitHistory.length,
      analytics: record.visitHistory.map((visit) => {
        const timestamp = visit.timestamp;
        const date = new Date(timestamp);
        return {
          timestamp: date.toLocaleString(),
          _id: visit._id,
        };
      }),
    };
    console.log("Formatted Data:", data);
    return res.send({
      message: "Successfully Fetched Analytics!",
      success: true,
      data: data,
    });
  } catch (err) {
    return res.send({
      message: err.message,
    });
  }
};
