const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes.js");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const { checkUser, requireAuth } = require("./middleware/auth.middleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("*", checkUser);

app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
