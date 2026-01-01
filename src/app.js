const express = require("express");

const authRoutes = require("./routes/auth.routes");
const protectedRoutes = require("./routes/protected.routes");

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", protectedRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;