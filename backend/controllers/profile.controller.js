const ProfileModel = require("../models/profile.model.js");
const ObjectID = require("mongoose").Types.ObjectId;

//Create profil
module.exports.createProfile = async (req, res) => {
  console.log(req.body);
  const { id_user, pseudo } = req.body;

  try {
    const profile = await ProfileModel.create({ id_user, pseudo });
    res.status(201).send({ profile: profile._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(500).send({ errors });
    console.log(err);
  }
};

//Obtenir tout les profils
module.exports.getAllProfiles = async (req, res) => {
  const profiles = await ProfileModel.find();
  res.status(200).json(profiles);
};

//Obtenir les infos de tous les profils d'un seul utilisateur
module.exports.userProfilesInfo = async (req, res) => {
  const allProfiles = await ProfileModel.find({ id_user: req.params.id_user });
  res.status(200).json(allProfiles);
};

//Obtenir les infos d'un seul profil
module.exports.profileInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  ProfileModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  });
};

//Mettre à jour un profil
module.exports.updateProfile = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await ProfileModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          pseudo: req.body.pseudo,
          quote: req.body.quote,
          avatar: req.body.avatar,
        },
      },
      { new: true, upsert: true, setDefaultOnInsert: true }
    )
      .then((docs) => res.send(docs))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//update WatchList

module.exports.updateWatchList = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await ProfileModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $addToSet: {
          watchlist: req.body.watchlist,
        },
      },
      { new: true, upsert: true }
    )
      .then((docs) => res.send(docs))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//update Favorites

module.exports.updateFavorites = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await ProfileModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $addToSet: {
          favorites: req.body.favorites,
        },
      },
      { new: true, upsert: true }
    )
      .then((docs) => res.send(docs))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//update Historic

module.exports.updateHistoric = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await ProfileModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $addToSet: {
          historic: req.body.historic,
        },
      },
      { new: true, upsert: true }
    )
      .then((docs) => res.send(docs))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//remove from Watchlist
module.exports.removeOneFromWatchlist = async (req, res) => {
  //vérifier si l'utilsateur est connu grâce à ObjectID qui nous viens de mongoose
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await ProfileModel.findByIdAndUpdate(
      req.params.id,

      { $pull: { watchlist: req.body.watchlist } },
      { new: true, upsert: true }
    )
      .then((docs) => res.status(201).json(docs))
      .catch((err) => res.status(400).json({ message: err }));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

//remove from Favorites
module.exports.removeOneFromFavorites = async (req, res) => {
  //vérifier si l'utilsateur est connu grâce à ObjectID qui nous viens de mongoose
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await ProfileModel.findByIdAndUpdate(
      req.params.id,

      { $pull: { favorites: req.body.favorites } },
      { new: true, upsert: true }
    )
      .then((docs) => res.status(201).json(docs))
      .catch((err) => res.status(400).json({ message: err }));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

//remove from Historic
module.exports.removeOneFromHistoric = async (req, res) => {
  //vérifier si l'utilsateur est connu grâce à ObjectID qui nous viens de mongoose
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await ProfileModel.findByIdAndUpdate(
      req.params.id,

      { $pull: { historic: req.body.historic } },
      { new: true, upsert: true }
    )
      .then((docs) => res.status(201).json(docs))
      .catch((err) => res.status(400).json({ message: err }));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

//supprimer un profil
module.exports.deleteProfile = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await ProfileModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Succesfully deleted" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
