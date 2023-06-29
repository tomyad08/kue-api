const produk = require("../data/data");
exports.data = (req, res) => {
  res.json(produk.dataProduk);
};
exports.findOne = async (req, res) => {
  const Id = Number(req.params.id);
  const data = produk.dataProduk;

  const FilterData = await data.filter((value) => {
    if (value.id === Id) {
      return value;
    }
  });
  res.json(FilterData);
};
