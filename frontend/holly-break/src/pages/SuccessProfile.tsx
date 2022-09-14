import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function SuccessProfile() {
  setTimeout(() => {
    window.location.href = "/Select-Profile";
  }, 5000);

  function displayCountdown() {
    let count = 5;
    setInterval(() => {
      count--;
      document.getElementById("countdown")!.innerHTML = count.toString();
    }, 1000);
  }

  displayCountdown();
  return (
    <>
      <Header></Header>
      <main className="content-container content-container-successProfile">
        <p>profile created with success !</p>
        <p className="count">
          you will be redirected in <span id="countdown">5</span> seconds
        </p>
        <NavLink to="/Select-Profile">back to profile selection</NavLink>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SuccessProfile;
