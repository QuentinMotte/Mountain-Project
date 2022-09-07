module.exports.updateErrors = (err) => {
  let errors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthday: "",
  };

  if (err.message.includes("firstName"))
    errors.firstName = "Incorrect firstname (min 3 characters)";

  if (err.message.includes("lastName"))
    errors.lastName = "Incorrect lastname (min 3 characters)";

  if (err.message.includes("email"))
    errors.email = "Invalid email or already used";

  if (err.message.includes("password"))
    errors.password = "Incorrect password (min 6 characters)";

  if (err.message.includes("birthday"))
    errors.birthday = "Restriction under 18 years old";

  return errors;
};
