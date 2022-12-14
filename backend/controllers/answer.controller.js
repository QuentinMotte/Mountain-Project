const AnswerModel = require("../models/answer.model.js");
const { createAnswerErrors } = require("../utils/errors_createAnswer.utils.js");
const { updateAnswerErrors } = require("../utils/errors_updateAnswer.utils.js");
const ObjectID = require("mongoose").Types.ObjectId;

//Create answer topic
module.exports.createAnswer = async (req, res) => {
  const { id_profile, id_topic, content } = req.body;

  try {
    const answer = await AnswerModel.create({
      id_profile,
      id_topic,
      content,
    });
    res.status(201).send({ answer: answer._id });
  } catch (err) {
    const errors = createAnswerErrors(err);
    res.status(500).send({ errors });
    console.log(err);
  }
};

//Obtenir tout les commentaires
module.exports.getAllAnswers = async (req, res) => {
  const answers = await AnswerModel.find();
  res.status(200).json(answers);
};

//Obtenir les commentaires d'un topic
module.exports.getAllAnswersOfOneTopic = async (req, res) => {
  const allAnswers = await AnswerModel.find({
    id_topic: req.params.id_topic,
  });
  res.status(200).json(allAnswers);
};
//Obtenir les commentaires d'un profil
module.exports.getAllAnswersOfOneProfile = async (req, res) => {
  const allAnswers = await AnswerModel.find({
    id_profile: req.params.id_profile,
  });
  res.status(200).json(allAnswers);
};

//Mettre à jour une réponse
module.exports.updateAnswer = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await AnswerModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          content: req.body.content,
        },
      },
      { new: true, upsert: true, setDefaultOnInsert: true, runValidators: true }
    ).then((docs) => res.status(200).send(docs));
  } catch (err) {
    const errors = updateAnswerErrors(err);
    res.status(500).send({ errors });
    console.log(err);
  }
};
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

//supprimer un commentaire
module.exports.deleteAnswer = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await AnswerModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Succesfully deleted" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
