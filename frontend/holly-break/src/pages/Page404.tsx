import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function Page404() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div className="container_page_404">
          <h1>Oops page not found !</h1>
          <h2>Looks like you're lost !</h2>
          <p>Don't worry ! This might help you</p>
          <NavLink to="/Home">
            <button>Home</button>
          </NavLink>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Page404;
