const express = require("express");
const app = express();

app.use(express.json());

require("./src/routers/produk.routers")(app);

const PORT = 8100;
app.listen(PORT, () => console.log(`server ${PORT}`));
