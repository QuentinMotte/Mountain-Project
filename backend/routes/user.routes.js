const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

//permettre à un utilisateur de s'inscrire
router.post("/register", authController.signUp);
//permettre à un utilisateur de se connecter
router.post("/login", authController.signIn);
//permettre à un utilisateur de se déconnecter
router.get("/logout", authController.logout);

//user db ------------------------

//toutes les infos de la db user
router.get("/", userController.getAllUsers);
//infos d'un seul utilisateur
router.get("/:id", userController.userInfo);
//update
router.put("/:id", userController.updateUser);
//delete
router.delete("/:id", userController.deleteUser);

module.exports = router;
