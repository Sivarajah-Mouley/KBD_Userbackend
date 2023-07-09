require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/UserRoutes");
const cartRoutes = require("./routes/Cart");
const suggestions = require("./routes/Suggestion")

const { connectDB } = require("./Configurations/db");
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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
