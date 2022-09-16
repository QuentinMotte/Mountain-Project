const TopicModel = require("../models/topic.model.js");
const { createTopicErrors } = require("../utils/errors_createTopic.utils.js");
const { updateTopicErrors } = require("../utils/errors_updateTopic.utils.js");
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
    const errors = createTopicErrors(err);
    res.status(500).send({ errors });
    console.log(err);
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

//Mettre à jour une réponse
module.exports.updateTopic = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await TopicModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          category: req.body.category,
          content: req.body.content,
        },
      },
      { new: true, upsert: true, setDefaultOnInsert: true, runValidators: true }
    ).then((docs) => res.status(200).send(docs));
  } catch (err) {
    const errors = updateTopicErrors(err);
    res.status(500).send({ errors });
    console.log(err);
  }
};

//Obtenir les topic d'un profil
module.exports.getAllTopicsOfOneProfile = async (req, res) => {
  const allTopics = await TopicModel.find({
    id_profile: req.params.id_profile,
  });
  res.status(200).json(allTopics);
};

//supprimer un topic
module.exports.deleteTopic = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await TopicModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Succesfully deleted" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
