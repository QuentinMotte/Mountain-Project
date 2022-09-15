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
//MOVIE
// Update (patch) WatchList
router.patch("/watchlist_movie/:id", profileController.updateWatchListMovie);
// Update (patch) Favoris
router.patch("/favorites_movie/:id", profileController.updateFavoritesMovie);
// Update (patch) Historique
router.patch("/historic_movie/:id", profileController.updateHistoricMovie);
// Update (patch) WatchList
router.patch(
  "/r_watchlist_movie/:id",
  profileController.removeOneMovieFromWatchlist
);
// Update (patch) Favoris
router.patch(
  "/r_favorites_movie/:id",
  profileController.removeOneMovieFromFavorites
);
// Update (patch) Historique
router.patch(
  "/r_historic_movie/:id",
  profileController.removeOneMovieFromHistoric
);
//SERIE
// Update (patch) WatchList
router.patch("/watchlist_serie/:id", profileController.updateWatchListSerie);
// Update (patch) Favoris
router.patch("/favorites_serie/:id", profileController.updateFavoritesSerie);
// Update (patch) Historique
router.patch("/historic_serie/:id", profileController.updateHistoricSerie);
// Update (patch) WatchList
router.patch(
  "/r_watchlist_serie/:id",
  profileController.removeOneSerieFromWatchlist
);
// Update (patch) Favoris
router.patch(
  "/r_favorites_serie/:id",
  profileController.removeOneSerieFromFavorites
);
// Update (patch) Historique
router.patch(
  "/r_historic_serie/:id",
  profileController.removeOneSerieFromHistoric
);

module.exports = router;
