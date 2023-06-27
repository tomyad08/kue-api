const produk = require("../controller/produk.controller");

module.exports = (app) => {
  const r = require("express").Router();

  r.get("/", produk.data);

  app.use("/produk", r);
};
