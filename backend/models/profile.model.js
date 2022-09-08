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
      validate: /^[<>]+$/,
    },
    pin_code: {
      type: Number,
      validate: /^[0-9]{4}$/,
      validate: /^[^*|\":<>[\]{}`\\()';@&$/,+=_°%§!#€£.?]+$/,
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
      validate: /^[^*|\":<>[\]{}`\\()';@&$/,+=_°%§!#€£.?]+$/,
    },
  },
  {
    timestamps: true,
  }
);

const ProfileModel = mongoose.model("profile", profileSchema);

module.exports = ProfileModel;
