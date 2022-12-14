const router = require("express").Router();
const topicController = require("../controllers/topic.controller.js");

//permettre la création d'un topic
router.post("/create", topicController.createTopic);

// //toutes les topics de la db
router.get("/", topicController.getAllTopics);

// tout les topics de séries
router.get("/series", topicController.getSeriesTopics);
// tout les topics de films
router.get("/movies", topicController.getMoviesTopics);
// tout les topics d'un profil
router.get(
  "/topicProfile/:id_profile",
  topicController.getAllTopicsOfOneProfile
);
//Update topic
router.put("/:id", topicController.updateTopic);
//delete topic
router.delete("/:id", topicController.deleteTopic);

module.exports = router;
