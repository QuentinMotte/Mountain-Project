const UserModel = require("../models/user.model");
const { signUpErrors } = require("../utils/errors_signUp.utils");
const { signInErrors } = require("../utils/errors_signIn.utils");
const jwt = require("jsonwebtoken");

//
//fonction pour générer notre token pour l'utilisateur lorsqu'il se connecte
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

// inscription d'un utilisateur
module.exports.signUp = async (req, res) => {
  const { firstName, lastName, email, password, birthday } = req.body;

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
      birthday,
    });
    res.status(201).send({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(500).send({ errors });
    console.log(err);
  }
};

//connection d'un utilisateur
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);

    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).send({ user: user._id, token, admin: user.is_admin });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(401).send({ errors });
    console.log(err);
  }
};

//déconnection d'un utilisateur -15-
module.exports.logout = (req, res) => {
  res.cookie("jwt", " ", { maxAge: 1 });
  res.redirect("/");
};
