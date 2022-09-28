import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import img from "../img/404.png";

function Page404() {
  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin") === "true";
  const profile = localStorage.getItem("profile");
  const kid = localStorage.getItem("kid") === "true";

  const handleGoBackHome = () => {
    if (token && profile && !kid) {
      window.location.href = "/Home";
    } else if (token && !profile) {
      window.location.href = "/";
    } else if (kid) {
      window.location.href = "/Kid";
    } else {
      window.location.href = "/";
    }
  };
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div className="container_page_404">
          <div className="textContainer404">
            <h1>Oops page not found !</h1>
            <h2>Looks like you're lost !</h2>
            <p>Don't worry ! This might help you</p>
            <a className="linkBackHome" onClick={handleGoBackHome}>
              Home
            </a>
          </div>
          {/* <div>
            <img className="legolas404" src={img} alt="img" />
          </div> */}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Page404;
