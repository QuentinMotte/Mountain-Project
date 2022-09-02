import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function AboutPage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div>
          <h1>About</h1>
          <p>This is the about page</p>
          <NavLink to="/">Landing</NavLink>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}

export default AboutPage;
