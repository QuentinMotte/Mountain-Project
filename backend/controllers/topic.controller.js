const TopicModel = require("../models/topic.model.js");
const ObjectID = require("mongoose").Types.ObjectId;

//Create topic
module.exports.createTopic = async (req, res) => {
  console.log(req.body);
  const { title, category, id_profile, content } = req.body;

  try {
    const topic = await TopicModel.create({
      title,
      category,
      id_profile,
      content,
    });
    res.status(201).send({ topic: topic._id });
  } catch (err) {
    return res.status(500).json({ message: err }), console.log(err);
  }
};

//Obtenir tout les topics
module.exports.getAllTopics = async (req, res) => {
  const topics = await TopicModel.find();
  res.status(200).json(topics);
};
//Obtenir tout les topics par séries
module.exports.getSeriesTopics = async (req, res) => {
  const topics = await TopicModel.find({ category: "series" });
  res.status(200).json(topics);
};
//Obtenir tout les topics par films
module.exports.getMoviesTopics = async (req, res) => {
  const topics = await TopicModel.find({ category: "movies" });
  res.status(200).json(topics);
};

//Obtenir les infos de tous les profils d'un seul utilisateur
// module.exports.userProfilesInfo = async (req, res) => {
//   const allProfiles = await ProfileModel.find({ id_user: req.params.id_user });
//   res.status(200).json(allProfiles);
// };

// //Obtenir les infos d'un seul profil
// module.exports.profileInfo = (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);

//   ProfileModel.findById(req.params.id, (err, docs) => {
//     if (!err) res.send(docs);
//     else console.log("ID unknown : " + err);
//   });
// };

// //Mettre à jour un profil
// module.exports.updateProfile = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);

//   try {
//     await ProfileModel.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         $set: {
//           pseudo: req.body.pseudo,
//           quote: req.body.quote,
//           avatar: req.body.avatar,
//           pin_code: req.body.pin_code,
//           is_young: req.body.is_young,
//         },
//       },
//       { new: true, upsert: true, setDefaultOnInsert: true, runValidators: true }
//     ).then((docs) => res.status(200).send(docs));
//   } catch (err) {
//     const errors = updateProfileErrors(err);
//     res.status(500).send({ errors });
//     console.log(err);
//   }
// };

// //update WatchList

// module.exports.updateWatchList = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);
//   try {
//     await ProfileModel.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         $addToSet: {
//           watchList: req.body.watchList,
//         },
//       },
//       { new: true, upsert: true }
//     ).then((docs) => res.status(200).send(docs));
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// };

// //update Favorites

// module.exports.updateFavorites = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);
//   try {
//     await ProfileModel.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         $addToSet: {
//           favorites: req.body.favorites,
//         },
//       },
//       { new: true, upsert: true }
//     ).then((docs) => res.status(200).send(docs));
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// };

// //update Historic

// module.exports.updateHistoric = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);
//   try {
//     await ProfileModel.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         $addToSet: {
//           historic: req.body.historic,
//         },
//       },
//       { new: true, upsert: true }
//     ).then((docs) => res.status(200).send(docs));
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// };

// //remove from Watchlist
// module.exports.removeOneFromWatchlist = async (req, res) => {
//   //vérifier si l'utilsateur est connu grâce à ObjectID qui nous viens de mongoose
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);

//   try {
//     await ProfileModel.findByIdAndUpdate(
//       req.params.id,

//       { $pull: { watchList: req.body.watchList } },
//       { new: true, upsert: true }
//     ).then((docs) => res.status(200).json(docs));
//   } catch (err) {
//     return res.status(500).json({ message: err });
//   }
// };

// //remove from Favorites
// module.exports.removeOneFromFavorites = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);

//   try {
//     await ProfileModel.findByIdAndUpdate(
//       req.params.id,

//       { $pull: { favorites: req.body.favorites } },
//       { new: true, upsert: true }
//     ).then((docs) => res.status(200).json(docs));
//   } catch (err) {
//     return res.status(500).json({ message: err });
//   }
// };

// //remove from Historic
// module.exports.removeOneFromHistoric = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);

//   try {
//     await ProfileModel.findByIdAndUpdate(
//       req.params.id,

//       { $pull: { historic: req.body.historic } },
//       { new: true, upsert: true }
//     ).then((docs) => res.status(200).json(docs));
//   } catch (err) {
//     return res.status(500).json({ message: err });
//   }
// };

// //supprimer un profil
// module.exports.deleteProfile = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);

//   try {
//     await ProfileModel.remove({ _id: req.params.id }).exec();
//     res.status(200).json({ message: "Succesfully deleted" });
//   } catch (err) {
//     return res.status(500).json({ message: err });
//   }
// };
