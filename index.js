const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
require("./src/routers/produk.routers")(app);

const PORT = 8100;
app.listen(PORT, () => console.log(`server ${PORT}`));
