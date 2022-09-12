const router = require("express").Router();
const answerController = require("../controllers/answer.controller.js");

//permettre la création d'un topic
router.post("/create", answerController.createAnswer);

// //toutes les topics de la db
router.get("/", answerController.getAllAnswers);

//update like
router.patch("/update_like/:id", answerController.updateLike);

//remove like
router.patch("/remove_like/:id", answerController.removeLike);

module.exports = router;
