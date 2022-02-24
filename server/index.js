const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/oreder");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB conntected successfully"))
  .catch((err) => console.log("err", err));

app.use(express.json());

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/prods", productRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("DB is litening to 5000");
});
