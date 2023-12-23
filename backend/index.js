const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const allProducts = require("./api/product");
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("connected to mongodb!!!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  console.log(req);
  res.send("server is running");
});

app.get("/api/dummyproducts", async (req, res) => {
  try {
    res.send(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products");
  }
});

app.use("/server/auth", authRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
