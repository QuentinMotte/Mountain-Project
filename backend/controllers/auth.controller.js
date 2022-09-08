const UserModel = require("../models/user.model");
const { signUpErrors } = require("../utils/errors_signUp.utils");
const { signInErrors } = require("../utils/errors_signIn.utils");
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
