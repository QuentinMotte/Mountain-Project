import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function Homepage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div>
          <h1>Homepage</h1>
          <p>This is the homepage page</p>
          <NavLink to="/">Landing</NavLink>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Homepage;
