const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

require("dotenv").config();

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");

const URL = process.env.URL;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connected success");
  })
  .catch((err) => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);

app.get("/", (req, res) => {
  res.json("welcome");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is runnung");
});
