const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
      default: "6311fe4b15dcb7859d35d98e",
    },

    pseudo: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
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
      validate: /^[0-9]{4}$/,
    },

    watchList: {
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
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProfileModel = mongoose.model("profile", profileSchema);

module.exports = ProfileModel;
