const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes.js");
const profileRoutes = require("./routes/profile.routes.js");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const cors = require("cors");
const app = express();

const corsOption = {
  origin: "*",
  credentials: true,
  allowedHeaders: ["sessionID", "Content-type"],
  exposesHeaders: ["sessionId"],
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  preflightContinue: false,
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("*", checkUser);

app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//user
app.use("/api/user", userRoutes);

//profil
app.use("/api/profile", profileRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
