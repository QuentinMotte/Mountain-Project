module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };
  errors.email +
    (errors.password =
      "Invalid email and Password must be at least 6 characters.");

  if (err.message.includes("email") && err.message.includes("password"));

  if (err.message.includes("email")) errors.email = "Email unknown.";

  if (err.message.includes("password"))
    errors.password = "Password does not match.";

  return errors;
};
