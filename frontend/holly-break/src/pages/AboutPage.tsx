import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function AboutPage() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <NavLink to="/">Landing</NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
