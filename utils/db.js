const mongoose = require("mongoose");

module.exports.openDB = async (uri) => {
  console.log(`Connecting To MongoDb`);
  const connection = await mongoose.connect(uri);
  console.log(`Successfully MongoDb Connected`);
  return connection;
};
