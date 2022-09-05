const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

//Obtenir tout les users
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

//Obtenir les infos d'un seul utilisateur
module.exports.userInfo = (req, res) => {
  //vérifier si l'utilsateur est connu grâce à ObjectID qui nous viens de mongoose
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("-password");
};

//Mettre à jour un utilisateur
module.exports.updateUser = async (req, res) => {
  //vérifier si l'utilsateur est connu grâce à ObjectID qui nous viens de mongoose
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const { firstName, lastName, email, password, birthday } = req.body;
  try {
    await UserModel.findOneAndUpdate(
      //paramètre dans l'url qui nous permettra de trouver le bon utilisateur à mettre à jour
      { _id: req.params.id },
      {
        // ce que l'on souhaite mettre à jour $set
        $set: {
          firstName,
          lastName,
          email,
          password,
          birthday,
        },
      },
      //paramètre à mettre obligatoirement lorsque l'on fait un PUT
      { new: true, setDefaultOnInsert: true, runValidators: true }
    )
      // res.status(201).send({ user: user._id });
      // .then(user.save())
      .then((docs) => res.send(docs))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    res.status(500).json({ message: err });
    console.log(err);
  }
  // let productToUpdate = await UserModel.findById(req.params.id);
  // if (!productToUpdate) {
  //   throw new NotFoundError();
  // }
  // productToUpdate.set({
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   password: req.body.password,
  //   birthday: req.body.birthday,
  // });
  // await productToUpdate.save();
};

//supprimer un utilisateur
module.exports.deleteUser = async (req, res) => {
  //vérifier si l'utilsateur est connu grâce à ObjectID qui nous viens de mongoose
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Succesfully deleted" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
