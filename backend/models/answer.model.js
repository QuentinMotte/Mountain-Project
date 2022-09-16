const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
  {
    id_profile: {
      type: String,
      required: true,
    },
    id_topic: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      validate: /^[^*|\<>[\]{}`\\@&$/+=_°%§#€£]+$/,
      minlength: 2,
      maxlength: 500,
      trimp: true,
    },
    like: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const AnswerModel = mongoose.model("answer", answerSchema);

module.exports = AnswerModel;
