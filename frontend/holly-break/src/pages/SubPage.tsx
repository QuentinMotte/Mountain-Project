import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

interface UserFormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ConfirmMailPassword {
  confirmEmail: string;
  confirmPassword: string;
}

interface Birthday {
  birthday: string;
}
interface UserFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: number;
}

function SubPage() {
  const [confirmMailPassword, setConfirmMailPassword] =
    React.useState<ConfirmMailPassword>({
      confirmEmail: "",
      confirmPassword: "",
    });

  const [birthday, setBirthday] = React.useState<Birthday>({
    birthday: "",
  });

  function dateIntoAge(date: string) {
    const today = new Date();
    const birthDate = new Date(date);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const userAge: number = dateIntoAge(birthday.birthday);

  const [userForm, setUserForm] = React.useState<UserFormProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const userFormState: UserFormState = {
    firstName: userForm.firstName,
    lastName: userForm.lastName,
    email: userForm.email,
    password: userForm.password,
    birthday: dateIntoAge(birthday.birthday),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday({
      birthday: e.target.value,
    });
  };

  const handleConfirmMailPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setConfirmMailPassword({ ...confirmMailPassword, [name]: value });
  };

  const confirmEmail = () => {
    if (userForm.email === confirmMailPassword.confirmEmail) {
      return true;
    } else {
      return false;
    }
  };

  const confirmPassword = () => {
    if (userForm.password === confirmMailPassword.confirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  const confirmAge = () => {
    if (userAge >= 18) {
      return true;
    } else {
      return false;
    }
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (confirmEmail() && confirmPassword() && confirmAge()) {
      const response = await axios
        .post("http://localhost:5000/api/user/register", userFormState)
        .then((response) => {
          console.log(response);
          console.log(response.status);
          window.location.href = "/Subscription/success";
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Veuillez remplir correctement les champs");
    }
  }
  return (
    <>
      <Header></Header>
      <main className="content-container content-container--SubPage">
        <form>
          <div className="form-group form-group-firstname">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={userForm.firstName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group form-group-lastname">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={userForm.lastName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group form-group-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={userForm.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group form-group-email-confirm">
            <label htmlFor="confirmEmail">Confirm Email</label>
            <input
              type="email"
              name="confirmEmail"
              id="confirmEmail"
              value={confirmMailPassword.confirmEmail}
              onChange={handleConfirmMailPassword}
              autoComplete="off"
              required
            />
          </div>

          <div className="form-group form-group-password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={userForm.password}
              onChange={handleChange}
              required
              autoComplete="off"
              minLength={6}
            />
          </div>

          <div className="form-group form-group-password-confirm">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmMailPassword.confirmPassword}
              onChange={handleConfirmMailPassword}
              required
              autoComplete="off"
              minLength={6}
            />
          </div>

          <div className="form-group form-group-birthdate">
            <label htmlFor="birthDate">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              value={birthday.birthday}
              onChange={handleBirthday}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group form-group-submit">
            <label htmlFor="submit"></label>
            <br />
            <br />
            <button type="submit" name="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SubPage;
