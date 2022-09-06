module.exports.updateErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Invalid email";

  if (err.message.includes("password"))
    errors.password = "Password must be at least 6 characters.";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "This email is already in use.";

  return errors;
};
