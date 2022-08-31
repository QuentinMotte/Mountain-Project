const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 35,
      unique: true,
      trimp: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trimp: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    avatar: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    quote: {
      type: String,
      default: "Hakuna Matata",
    },
    profiles: {
      type: [
        {
          name: String,
          quote: {
            type: String,
            default: "Hakuna Matata",
          },
          avatar: {
            type: String,
            default: "./uploads/profil/random-user.png",
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }
  throw Error("Incorrect email");
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
