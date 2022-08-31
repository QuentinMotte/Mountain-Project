import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function Movies() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>Movies</h1>
        <p>This is the movies page</p>
        <NavLink to="/">Landing</NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Movies;
