const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trimp: true,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
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
      maxlength: 1024,
      minlength: 6,
    },
    birthday: {
      type: Number,
      min: 18,
      max: 120,
    },
    id_profiles: {
      type: [String],
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  const user = this;
  if (user._update.$set.password) {
    if (user._update.$set.password.length >= 6) {
      const salt = await bcrypt.genSalt();
      user._update.$set.password = await bcrypt.hash(
        user._update.$set.password,
        salt
      );
    }
  }
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
