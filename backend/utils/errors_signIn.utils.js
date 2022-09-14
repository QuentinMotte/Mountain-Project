module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  // if (err.message.includes("email") && err.message.includes("password"))
  //   errors.multipleErrors =
  //     "Invalid email and Password must be at least 6 characters.";

  if (err.message.includes("email")) errors.email = "Email unknown";

  if (err.message.includes("password"))
    errors.password = "Password does not match";

  return errors;
};
