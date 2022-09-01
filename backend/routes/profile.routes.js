const router = require("express").Router();
const profileController = require("../controllers/profile.controller.js");

//permettre à un utilisateur de s'inscrire
router.post("/register", profileController.createProfile);

// //toutes les infos de la db profil
router.get("/", profileController.getAllProfiles);
// //infos de tous les profils d'un utilisateur
router.get("/allProfiles/:id_user", profileController.userProfilesInfo);
// //infos d'un profil
router.get("/:id", profileController.profileInfo);
// //update
router.put("/:id", profileController.updateProfile);
// //delete
router.delete("/:id", profileController.deleteProfile);

module.exports = router;
