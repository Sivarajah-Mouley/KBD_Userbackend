require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const suggestions = require("./routes/suggestions")
const productRoutes = require("./routes/productRoutes")
const noticeRoute = require("./routes/noticeRoute")


const { connectDB } = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});


app.use("/api/suggestions", suggestions);
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/products",productRoutes)
app.use("/api/notice",noticeRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
