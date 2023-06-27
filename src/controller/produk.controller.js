const produk = require("../data/data");
exports.data = (req, res) => {
  res.json(produk.dataProduk);
};
