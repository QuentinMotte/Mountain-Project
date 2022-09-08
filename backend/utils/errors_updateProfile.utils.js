module.exports.updateProfileErrors = (err) => {
  let errors = {
    pseudo: "",
    pin_code: "",
  };

  if (err.message.includes("pseudo"))
    errors.pseudo =
      "Incorrect pseudo (from 3 to 15 characters and no special characters)";

  if (err.message.includes("pin_code")) errors.pin_code = "Minimum 4 numbers";

  return errors;
};
