module.exports.updateAnswerErrors = (err) => {
  let errors = {
    content: "",
  };
  if (err.message.includes("content"))
    errors.content =
      "Incorrect content (from 5 to 500 characters and no special characters)";
  return errors;
};
