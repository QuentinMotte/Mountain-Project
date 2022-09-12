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
    },
    like: {
      type: [Boolean],
    },
  },
  {
    timestamps: true,
  }
);

const AnswerModel = mongoose.model("answer", answerSchema);

module.exports = AnswerModel;
