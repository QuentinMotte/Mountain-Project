import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import img from "../img/404.png";

function Page404() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div className="container_page_404">
          <div>
            <h1>Oops page not found !</h1>
            <h2>Looks like you're lost !</h2>
            <p>Don't worry ! This might help you</p>
            <NavLink to="/Home">
              <button>Home</button>
            </NavLink>
          </div>
          <div>
            <img src={img} alt="img" />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Page404;
