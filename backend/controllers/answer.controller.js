const AnswerModel = require("../models/answer.model.js");
const ObjectID = require("mongoose").Types.ObjectId;

//Create answer topic
module.exports.createAnswer = async (req, res) => {
  const { id_profile, id_topic, content, like } = req.body;

  try {
    const answer = await AnswerModel.create({
      id_profile,
      id_topic,
      content,
      like,
    });
    res.status(201).send({ answer: answer._id });
  } catch (err) {
    return res.status(500).json({ message: err }), console.log(err);
  }
};

//Obtenir tout les profils
module.exports.getAllAnswers = async (req, res) => {
  const answers = await AnswerModel.find();
  res.status(200).json(answers);
};

// //Obtenir les infos de tous les profils d'un seul utilisateur
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

// //update like

module.exports.updateLike = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await AnswerModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $addToSet: {
          like: req.body.like,
        },
      },
      { new: true, upsert: true }
    ).then((docs) => res.status(200).send(docs));
  } catch (err) {
    res.status(500).json({ message: err }), console.log(err);
  }
};

//remove from lilke
module.exports.removeLike = async (req, res) => {
  //vérifier si l'utilsateur est connu grâce à ObjectID qui nous viens de mongoose
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await AnswerModel.findByIdAndUpdate(
      req.params.id,

      { $pull: { like: req.body.like } },
      { new: true, upsert: true }
    ).then((docs) => res.status(200).json(docs));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

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
