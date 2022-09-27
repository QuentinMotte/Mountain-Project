const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
      default: "",
    },

    pseudo: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
      validate: /^[^*|\":<>[\]{}`\\()';@&$/,+=_°%§!#€£.?]+$/,
    },
    quote: {
      type: String,
      default: "Hakuna Matata",
      validate: /^[^*|\<>[\]{}`\\@&$/+=_°%§#€£]+$/,
    },
    avatar: {
      type: String,
      default: "./img/avatar_profil",
    },
    pin_code: {
      type: String,
      default: null,
      // validate: /^[0-9]{4}$/,
      // validate: /^[^*|\":<>[\]{}`\\()';@&$/,+=_°%§!#€£.?]+$/,
    },

    watchList_movie: {
      type: [String],
    },
    favorites_movie: {
      type: [String],
    },
    historic_movie: {
      type: [String],
    },
    watchList_serie: {
      type: [String],
    },
    favorites_serie: {
      type: [String],
    },
    historic_serie: {
      type: [String],
    },

    is_young: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProfileModel = mongoose.model("profile", profileSchema);

module.exports = ProfileModel;
