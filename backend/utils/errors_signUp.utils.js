module.exports.signUpErrors = (err) => {
  let errors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthday: "",
  };

  //email déjà utilisé
  // if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
  //   errors.email = "This email is already in use.";

  //erreurs solo

  if (err.message.includes("firstName"))
    errors.firstName =
      "Incorrect firstname (from 3 to 20 characters and no special characters)";

  if (err.message.includes("lastName"))
    errors.lastName =
      "Incorrect lastname (from 3 to 20 characters and no special characters)";

  if (err.message.includes("email"))
    errors.email = "Invalid email or already used";

  if (err.message.includes("password"))
    errors.password =
      "Incorrect password (min 6 characters and no special characters)";

  if (err.message.includes("birthday"))
    errors.birthday = "Restriction under 18 years old";

  // //erreurs groupées (deux erreurs à la fois)

  // // if (err.message.includes("firstName") && err.message.includes("lastName"))
  // //   errors.firstName +
  // //     (errors.lastName =
  // //       "Your firstname and lastname must be at least 3 characters.");

  // if (err.message.includes("firstName") && err.message.includes("email"))
  //   errors.multipleErrors =
  //     "Your firstname must be at least 3 characters and your email must be valid.";

  // if (err.message.includes("firstName") && err.message.includes("password"))
  //   errors.firstName +
  //     (errors.password =
  //       "Your firstname must be at least 3 characters and password must be at least 6 characters.");

  // if (err.message.includes("firstName") && er tor.message.includes("birthday"))
  //   errors.firstName +
  //     (errors.birthday =
  //       "Your firstname must be at least 3 characters and you need to have 18 years old for subscribe. ");

  // if (err.message.includes("lastName") && err.message.includes("email"))
  //   errors.lastName +
  //     (errors.email =
  //       "Your lastname must be at least 3 characters and your email must be valid.");

  // if (err.message.includes("lastName") && err.message.includes("password"))
  //   errors.lastName +
  //     (errors.password =
  //       "Your lastname must be at least 3 characters and password must be at least 6 characters.");

  // if (err.message.includes("lastName") && err.message.includes("birthday"))
  //   errors.lastName +
  //     (errors.birthday =
  //       "Your lastname must be at least 3 characters and you need to have 18 years old for subscribe. ");

  // if (err.message.includes("email") && err.message.includes("password"))
  //   errors.email +
  //     (errors.password =
  //       "Invalid email and password must be at least 6 characters.");

  // if (err.message.includes("email") && err.message.includes("birthday"))
  //   errors.email +
  //     (errors.birthday =
  //       "Your email must be valid and you need to have 18 years old for subscribe. ");

  // if (err.message.includes("password") && err.message.includes("birthday"))
  //   errors.password +
  //     (errors.birthday =
  //       "Your password must be at least 6 characters and you need to have 18 years old for subscribe. ");

  // //erreurs groupées (trois erreurs à la fois)

  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("lastName") &&
  //   err.message.includes("email")
  // )
  //   errors.firstName +
  //     errors.lastName +
  //     (errors.email =
  //       "Your firstname and lastname must be at least 3 characters. Your email must me valid.");

  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("lastName") &&
  //   err.message.includes("password")
  // )
  //   errors.firstName +
  //     errors.lastName +
  //     (errors.password =
  //       "Your firstname and lastname must be at least 3 characters. Password must be at least 6 characters.");

  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("lastName") &&
  //   err.message.includes("birthday")
  // )
  //   errors.firstName +
  //     errors.lastName +
  //     (errors.birthday =
  //       "Your firstname and lastname must be at least 3 characters. You need to have 18 years old for subscribe.");

  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("email") &&
  //   err.message.includes("password")
  // )
  //   errors.firstName +
  //     errors.email +
  //     (errors.password =
  //       "Your firstname must be at least 3 characters. Your email must me valid. Your password must be at least 6 characters");

  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("email") &&
  //   err.message.includes("birthday")
  // )
  //   errors.firstName +
  //     errors.email +
  //     (errors.birthday =
  //       "Your firstname must be at least 3 characters. Your email must me valid.  You need to have 18 years old for subscribe.");

  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("password") &&
  //   err.message.includes("birthday")
  // )
  //   errors.firstName +
  //     errors.password +
  //     (errors.birthday =
  //       "Your firstname must be at least 3 characters and you need to have 18 years old for subscribe. Your password must be at least 6 characters.");

  // if (
  //   err.message.includes("lastName") &&
  //   err.message.includes("email") &&
  //   err.message.includes("password")
  // )
  //   errors.lastName +
  //     errors.email +
  //     (errors.password =
  //       "Your lastname must be at least 3 characters. Your email must be valid and password must be at least 6 characters.");

  // if (
  //   err.message.includes("lastName") &&
  //   err.message.includes("email") &&
  //   err.message.includes("birthday")
  // )
  //   errors.lastName +
  //     errors.email +
  //     (errors.birthday =
  //       "Your lastname must be at least 3 characters. Your email must be valid and you need to have 18 years old for subscribe.");

  // if (
  //   err.message.includes("lastName") &&
  //   err.message.includes("password") &&
  //   err.message.includes("birthday")
  // )
  //   errors.lastName +
  //     errors.password +
  //     (errors.birthday =
  //       "Your lastname must be at least 3 characters. Your password must be at least 6 characters and you need to have 18 years old for subscribe.");

  // if (
  //   err.message.includes("email") &&
  //   err.message.includes("password") &&
  //   err.message.includes("birthday")
  // )
  //   errors.email +
  //     errors.password +
  //     (errors.birthday =
  //       "Your email must be valid and you need to have 18 years old for subscribe. Your password must be at least 6 characters.");

  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("lastName") &&
  //   err.message.includes("email") &&
  //   err.message.includes("password")
  // )
  //   errors.firstName +
  //     errors.lastName +
  //     errors.email +
  //     (errors.password =
  //       "Your firstname and lastname must be at least 3 characters and your email must be valid. Your password must be at least 6 characters.");
  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("lastName") &&
  //   err.message.includes("email") &&
  //   err.message.includes("birthday")
  // )
  //   errors.firstName +
  //     errors.lastName +
  //     errors.email +
  //     (errors.birthday =
  //       "Your firstname and lastname must be at least 3 characters and your email must be valid. Your password must be at least 6 characters. You need to have 18 years old for subscribe.");

  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("lastName") &&
  //   err.message.includes("password") &&
  //   err.message.includes("birthday")
  // )
  //   errors.firstName +
  //     errors.lastName +
  //     errors.password +
  //     (errors.birthday =
  //       "Your firstname and lastname must be at least 3 characters and you need to have 18 years old to subscribe. Your password must be at least 6 characters.");

  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("email") &&
  //   err.message.includes("password") &&
  //   err.message.includes("birthday")
  // )
  //   errors.firstName +
  //     errors.email +
  //     errors.password +
  //     (errors.birthday =
  //       "Your firstname must be at least 3 characters and you need to have 18 years old to subscribe. Your password must be at least 6 characters. Your email must be valid.");

  // if (
  //   err.message.includes("lastName") &&
  //   err.message.includes("email") &&
  //   err.message.includes("password") &&
  //   err.message.includes("birthday")
  // )
  //   errors.lastName +
  //     errors.email +
  //     errors.password +
  //     (errors.birthday =
  //       "Your lastname must be at least 3 characters and you need to have 18 years old to subscribe. Your password must be at least 6 characters. Your email must be valid.");

  // if (
  //   err.message.includes("firstName") &&
  //   err.message.includes("lastName") &&
  //   err.message.includes("email") &&
  //   err.message.includes("password") &&
  //   err.message.includes("birthday")
  // )
  //   errors.firstName +
  //     errors.lastName +
  //     errors.lastName +
  //     errors.password +
  //     (errors.birthday =
  //       "Your firstname and lastname must be at least 3 characters and you need to have 18 years old for subscribe. Your password must be at least 6 characters.");

  return errors;
};
