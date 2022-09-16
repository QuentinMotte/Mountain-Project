module.exports.updateTopicErrors = (err) => {
  let errors = {
    title: "",
    content: "",
  };

  if (err.message.includes("title"))
    errors.title =
      "Incorrect title (from 5 to 50 characters and no special characters)";

  if (err.message.includes("content"))
    errors.content =
      "Incorrect content (from 5 to 500 characters and no special characters)";

  return errors;
};
