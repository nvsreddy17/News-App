const path = require("path");
const express = require("express");
const config = require("./config")
const app = express(); // create express app

app.use(express.static(path.join(config.ROOT_DIR, "public", "dist")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(config.ROOT_DIR, "public", "index.html"));
});
// start express server on port 5000
app.listen(config.URL_PORT, () => {
  console.log("server started on port 5000");
});