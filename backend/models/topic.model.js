const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      validate: /^[^*|\<>[\]{}`\\@&$/+=_°%§#€£]+$/,
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
    },
  },
  {
    timestamps: true,
  }
);

const TopicModel = mongoose.model("topic", topicSchema);

module.exports = TopicModel;
