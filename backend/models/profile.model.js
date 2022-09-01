const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },

    pseudo: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      default: "Hakuna Matata",
    },
    avatar: {
      type: String,
      default: "./img/avatar_profil",
    },
    pin_code: {
      type: Number,
      minlength: 4,
      maxlength: 4,
    },

    watchlist: {
      type: [String],
    },
    favorites: {
      type: [String],
    },
    historic: {
      type: [String],
    },

    is_young: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const ProfileModel = mongoose.model("profile", profileSchema);

module.exports = ProfileModel;
