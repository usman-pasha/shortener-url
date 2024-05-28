const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require("./routers/index");
const db = require("./utils/db");
const path = require("path");

// db
db.openDB("mongodb://127.0.0.1:27017/url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// routes
routes(app);

app.listen(PORT, () => {
  console.log(`App is Running On http://localhost:${PORT}`);
});
