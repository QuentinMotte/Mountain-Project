const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      validate: /^[^*|\<>[\]{}`\\@&$/+=_°%§#€£]+$/,
      minlength: 5,
      maxlength: 50,
      trimp: true,
    },
    category: {
      type: String,
      required: true,
    },
    id_profile: {
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
  },
  {
    timestamps: true,
  }
);

const TopicModel = mongoose.model("topic", topicSchema);

module.exports = TopicModel;
