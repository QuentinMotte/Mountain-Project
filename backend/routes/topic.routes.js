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

module.exports = router;
