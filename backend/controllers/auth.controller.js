const UserModel = require("../models/user.model");
const { signUpErrors, signInErrors } = require("../utils/errors.utils");
const jwt = require("jsonwebtoken");

//
//fonction pour générer notre token pour l'utilisateur lorsqu'il se connecte -15-
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

// inscription d'un utilisateur -6-
module.exports.signUp = async (req, res) => {
  console.log(req.body);
  const { pseudo, email, password } = req.body;

  try {
    const user = await UserModel.create({ pseudo, email, password });
    res.status(201).send({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
    // console.log(err);
  }
};

//connection d'un utilisateur -15-
module.exports.signIn = async (req, res) => {
  //destructuring again donc cela signifie que email et password ont comme valeur req.body.email et req.body.password
  const { email, password } = req.body;

  try {
    //vérification du user
    const user = await UserModel.login(email, password);
    //fonction qui permettra de creer le jeton pour l'utilsateur
    const token = createToken(user._id);
    //le cookie-> 3paramètres (le nom, la valeur, la durée)
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
    console.log(err);
  }
};

//déconnection d'un utilisateur -15-
module.exports.logout = (req, res) => {
  res.cookie("jwt", " ", { maxAge: 1 });
  res.redirect("/");
};
