import axios from "axios";
import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

type User = {
  firstname: string;
  lastname: string;
  birthday: any;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

function SubPage() {
  const subscribeForm = (user: User) => {
    axios({
      method: "POST",
      url: "http://localhost:5000/api/user/register",
      data: user,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header></Header>
      <main className="content-container content-container--SubPage">
        <form onSubmit={subscribeForm}>
          <div className="form_input_container">
            <label htmlFor="firstname">Firstname</label>
            <input required type="text" name="firstname" />
          </div>

          <div className="form_input_container">
            <label htmlFor="lastname">Lastname</label>
            <input required type="text" name="lastname" />
          </div>

          <div className="form_input_container">
            <label htmlFor="birthday">Birthday</label>
            <input required type="date" name="birthday" />
          </div>

          <div className="form_input_container">
            <label htmlFor="password">Password</label>
            <input required type="password" name="password" />
          </div>

          <div className="form_input_container">
            <label htmlFor="confirmPass">Confirm your password, please</label>
            <input required type="password" name="confirmPass" />
          </div>

          <div className="form_input_container">
            <label htmlFor="email">Email</label>
            <input required type="email" name="email" />
          </div>

          <div className="form_input_container">
            <label htmlFor="email">Confirm your Email please</label>
            <input required type="email" name="email" />
          </div>

          <input type="submit" value="submit" />
        </form>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SubPage;
