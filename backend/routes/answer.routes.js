const router = require("express").Router();
const answerController = require("../controllers/answer.controller.js");

//permettre la création d'une réponse/commentaire
router.post("/create", answerController.createAnswer);

// //toutes les réponses/commentaires de la db
router.get("/", answerController.getAllAnswers);

// //toutes les réponses/commentaires d'un topic
router.get("/oneTopic/:id_topic", answerController.getAllAnswersOfOneTopic);

//Obtenir les commentaires d'un profil
router.get("/:id_profile", answerController.getAllAnswersOfOneTopic);

//update comments
router.put("/update/:id", answerController.updateAnswer);
//remocomments
router.put("/update/:id", answerController.updateAnswer);

//update like
router.patch("/update_like/:id", answerController.updateLike);

//remove like
router.patch("/remove_like/:id", answerController.removeLike);

module.exports = router;
